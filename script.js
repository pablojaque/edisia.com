// Barmaja — sin scripts de terceros ni rastreo. Solo gestiona el aviso de cookies
// y valida el consentimiento del formulario de contacto en el propio navegador.

(function () {
  var THEME_KEY = "barmaja_theme";
  var themeToggle = document.getElementById("theme-toggle");
  var sunIcon = document.getElementById("icon-sun");
  var moonIcon = document.getElementById("icon-moon");

  function currentTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit) {
      return explicit;
    }
    var prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function reflectTheme() {
    var isDark = currentTheme() === "dark";
    if (sunIcon) {
      sunIcon.hidden = !isDark;
    }
    if (moonIcon) {
      moonIcon.hidden = isDark;
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    }
  }

  if (themeToggle) {
    reflectTheme();
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch (err) {
        /* Sin almacenamiento local, el tema simplemente no persiste entre visitas. */
      }
      reflectTheme();
    });
  }

  var STORAGE_KEY = "barmaja_cookie_choice";
  var banner = document.getElementById("cookie-banner");

  if (banner) {
    var alreadyChosen = null;
    try {
      alreadyChosen = window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      alreadyChosen = null;
    }

    if (!alreadyChosen) {
      banner.hidden = false;
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");

    function chooseCookies(value) {
      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch (err) {
        /* Si el navegador bloquea almacenamiento local, seguimos sin rastreo igualmente. */
      }
      banner.hidden = true;
    }

    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        chooseCookies("accepted");
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        chooseCookies("rejected");
      });
    }
  }

  var heroPrompt = document.getElementById("hero-prompt");
  var modalOverlay = document.getElementById("contact-modal");
  var modalForm = document.getElementById("modal-form");
  var modalNameInput = document.getElementById("modal-name");
  var modalEmailInput = document.getElementById("modal-email");
  var modalMessageInput = document.getElementById("modal-message");
  var modalCloseBtn = document.getElementById("modal-close");
  var modalDoneBtn = document.getElementById("modal-done");
  var modalFormView = document.getElementById("modal-form-view");
  var modalSuccessView = document.getElementById("modal-success-view");
  var modalLastFocused = null;

  function openModal(prefillText) {
    if (!modalOverlay) {
      return;
    }
    modalLastFocused = document.activeElement;
    if (modalMessageInput) {
      modalMessageInput.value = prefillText || "";
    }
    if (modalFormView) {
      modalFormView.hidden = false;
    }
    if (modalSuccessView) {
      modalSuccessView.hidden = true;
    }
    modalOverlay.hidden = false;
    document.body.classList.add("modal-open");
    window.setTimeout(function () {
      if (modalNameInput) {
        modalNameInput.focus();
      }
    }, 10);
  }

  function closeModal() {
    if (!modalOverlay) {
      return;
    }
    modalOverlay.hidden = true;
    document.body.classList.remove("modal-open");
    if (modalForm) {
      modalForm.reset();
    }
    if (modalFormView) {
      modalFormView.hidden = false;
    }
    if (modalSuccessView) {
      modalSuccessView.hidden = true;
    }
    if (modalLastFocused && typeof modalLastFocused.focus === "function") {
      modalLastFocused.focus();
    }
  }

  if (heroPrompt) {
    heroPrompt.addEventListener("submit", function (event) {
      event.preventDefault();
      var heroInput = document.getElementById("hero-input");
      var text = heroInput ? heroInput.value.trim() : "";
      openModal(text);
    });
  }

  if (modalOverlay) {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeModal);
    }
    if (modalDoneBtn) {
      modalDoneBtn.addEventListener("click", closeModal);
    }
    modalOverlay.addEventListener("click", function (event) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modalOverlay.hidden) {
        closeModal();
      }
    });
  }

  function submitToFormspree(form, onSuccess, onError) {
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
      })
      .catch(function () {
        onError();
      });
  }

  function setSubmitBusy(form, busy) {
    var submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) {
      return null;
    }
    if (busy) {
      submitBtn.dataset.originalText = submitBtn.textContent;
      submitBtn.textContent = form.getAttribute("data-sending-label") || "Sending…";
      submitBtn.disabled = true;
    } else {
      submitBtn.textContent = submitBtn.dataset.originalText || submitBtn.textContent;
      submitBtn.disabled = false;
    }
    return submitBtn;
  }

  var modalError = document.getElementById("modal-error");

  if (modalForm) {
    modalForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!modalForm.checkValidity()) {
        modalForm.reportValidity();
        return;
      }
      if (modalError) {
        modalError.hidden = true;
      }
      setSubmitBusy(modalForm, true);

      submitToFormspree(
        modalForm,
        function () {
          setSubmitBusy(modalForm, false);
          if (modalFormView) {
            modalFormView.hidden = true;
          }
          if (modalSuccessView) {
            modalSuccessView.hidden = false;
          }
          if (modalDoneBtn) {
            modalDoneBtn.focus();
          }
        },
        function () {
          setSubmitBusy(modalForm, false);
          if (modalError) {
            modalError.textContent =
              modalForm.getAttribute("data-error-message") ||
              "Something went wrong sending your message. Please try again.";
            modalError.hidden = false;
          }
        }
      );
    });
  }

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var consent = document.getElementById("consent");
      if (consent && !consent.checked) {
        status.textContent =
          form.getAttribute("data-consent-message") ||
          "Antes de enviar el formulario, marca la casilla de consentimiento para tratar tus datos.";
        status.setAttribute("role", "alert");
        consent.focus();
        return;
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.removeAttribute("role");
      status.textContent = "";
      setSubmitBusy(form, true);

      submitToFormspree(
        form,
        function () {
          setSubmitBusy(form, false);
          status.removeAttribute("role");
          status.textContent =
            form.getAttribute("data-success-message") ||
            "Thanks! We'll get back to you soon.";
          form.reset();
        },
        function () {
          setSubmitBusy(form, false);
          status.setAttribute("role", "alert");
          status.textContent =
            form.getAttribute("data-error-message") ||
            "Something went wrong sending your message. Please try again.";
        }
      );
    });
  }
})();
