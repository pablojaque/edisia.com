const KNOWN_APPS = [
  { match: "judge.me", label: "Judge.me (reseñas)" },
  { match: "loox.io", label: "Loox (reseñas)" },
  { match: "yotpo", label: "Yotpo (reseñas)" },
  { match: "klaviyo", label: "Klaviyo (email marketing)" },
  { match: "privy.com", label: "Privy (pop-ups)" },
  { match: "recharge", label: "ReCharge (suscripciones)" },
  { match: "pagefly", label: "PageFly (editor de páginas)" },
  { match: "gempages", label: "GemPages (editor de páginas)" },
  { match: "reconvert", label: "ReConvert (upsells)" },
  { match: "bold-brain", label: "Bold (upsells)" },
  { match: "smile.io", label: "Smile.io (fidelización)" },
  { match: "aftership", label: "AfterShip (seguimiento de envíos)" },
  { match: "gorgias", label: "Gorgias (atención al cliente)" },
  { match: "tidio", label: "Tidio (chat)" },
  { match: "zdassets", label: "Zendesk (chat)" },
  { match: "candyrack", label: "CandyRack (upsells)" },
  { match: "vitals", label: "Vitals" },
];

const KNOWN_PAYMENTS = [
  { match: "shop_pay", label: "Shop Pay" },
  { match: "apple_pay", label: "Apple Pay" },
  { match: "google_pay", label: "Google Pay" },
  { match: "paypal", label: "PayPal" },
  { match: "klarna", label: "Klarna" },
  { match: "afterpay", label: "Afterpay" },
];

function normalizeUrl(input) {
  let url;
  try {
    url = new URL(input.startsWith("http") ? input : `https://${input}`);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol)) return null;
  return `${url.protocol}//${url.hostname}`;
}

async function fetchText(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BarmajaStoreAnalyzer/1.0)" },
    });
    return { ok: res.ok, status: res.status, text: await res.text() };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function detectFromHtml(html, list) {
  if (!html) return [];
  const lower = html.toLowerCase();
  return list.filter((item) => lower.includes(item.match)).map((item) => item.label);
}

export async function analyzeStore(inputUrl) {
  const origin = normalizeUrl(inputUrl);
  if (!origin) {
    return { error: "invalid_url" };
  }

  const productsRes = await fetchText(`${origin}/products.json?limit=250`);
  if (!productsRes) {
    return { error: "unreachable" };
  }
  if (!productsRes.ok) {
    return { error: "not_shopify" };
  }

  let productsData;
  try {
    productsData = JSON.parse(productsRes.text);
  } catch {
    return { error: "not_shopify" };
  }

  const products = Array.isArray(productsData?.products) ? productsData.products : null;
  if (!products) {
    return { error: "not_shopify" };
  }

  const prices = [];
  let discountedCount = 0;
  let discountPctSum = 0;
  const typeCounts = {};

  for (const product of products) {
    for (const variant of product.variants || []) {
      const price = parseFloat(variant.price);
      if (!Number.isFinite(price)) continue;
      prices.push(price);

      const compareAt = parseFloat(variant.compare_at_price);
      if (Number.isFinite(compareAt) && compareAt > price) {
        discountedCount += 1;
        discountPctSum += ((compareAt - price) / compareAt) * 100;
      }
    }
    const type = (product.product_type || "").trim();
    if (type) typeCounts[type] = (typeCounts[type] || 0) + 1;
  }

  const topTypes = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type]) => type);

  const newest = [...products]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3)
    .map((p) => p.title);

  const homepageRes = await fetchText(origin);
  const homepageHtml = homepageRes?.ok ? homepageRes.text : null;
  const apps = detectFromHtml(homepageHtml, KNOWN_APPS);
  const payments = detectFromHtml(homepageHtml, KNOWN_PAYMENTS);

  return {
    origin,
    productCount: products.length,
    productCountIsCapped: products.length >= 250,
    priceMin: prices.length ? Math.min(...prices) : null,
    priceMax: prices.length ? Math.max(...prices) : null,
    priceAvg: prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : null,
    discountedVariantCount: discountedCount,
    avgDiscountPct: discountedCount ? discountPctSum / discountedCount : null,
    topProductTypes: topTypes,
    newestProducts: newest,
    apps,
    payments,
  };
}
