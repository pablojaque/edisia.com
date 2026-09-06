// Barmaja — sin scripts de terceros ni rastreo. Solo gestiona el aviso de cookies
// y valida el consentimiento del formulario de contacto en el propio navegador.

(function () {
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

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      var consent = document.getElementById("consent");
      if (consent && !consent.checked) {
        event.preventDefault();
        status.textContent =
          "Antes de enviar el formulario, marca la casilla de consentimiento para tratar tus datos.";
        status.setAttribute("role", "alert");
        consent.focus();
      }
    });
  }
})();
