// Q1 (Capitulo 8, US20): test A/B real "demo sin hardware" vs. flujo estandar de registro.
// Pide/recupera la variante del experimento "demo-onboarding" para el visitante actual y
// ramifica el CTA principal de la Landing Page. Variante B (tratamiento) conserva el
// comportamiento actual ("Probar ahora" -> /demo); variante A (control) apunta directo a
// /register, sin pasar por la demo.
(function () {
  // Backend compartido (mismo valor en main y develop, ver Frontend/src/environments/environment.prod.ts -> apiUrl).
  var API_BASE = 'https://backend-latest-rplh.onrender.com';
  // Frontend de esta rama: 'https://energixemsapp.vercel.app' en main (producción),
  // 'https://energix-frontend-test.vercel.app' en develop (test).
  var FRONTEND_BASE = 'https://energix-frontend-test.vercel.app';
  var EXPERIMENT_KEY = 'demo-onboarding';
  var VISITOR_ID_KEY = 'sems_experiment_visitor_id';
  var VARIANT_CACHE_KEY = 'sems_experiment_variant_' + EXPERIMENT_KEY;

  // 'production' en la rama main, 'test' en develop — ver
  // Backend/docs/superpowers/specs/2026-07-05-branch-variant-deployment-design.md
  var DEPLOYMENT_ENV = 'test';

  var controlLabel = { es: 'Crear cuenta', en: 'Create Account' };
  var demoLabel = { es: 'Probar ahora', en: 'Try Now' };
  var currentLang = 'es';

  function getVisitorId() {
    var id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      id = (window.crypto && window.crypto.randomUUID)
        ? window.crypto.randomUUID()
        : 'visitor-' + Date.now() + '-' + Math.random().toString(16).slice(2);
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  }

  function withVisitorParam(url) {
    var separator = url.indexOf('?') > -1 ? '&' : '?';
    return url + separator + 'exp_visitor=' + encodeURIComponent(getVisitorId());
  }

  function renderCta(variant) {
    var navLink = document.getElementById('navProbarAhora');
    var ctaLink = document.getElementById('ctaProbarAhora');
    var isControl = variant !== 'B';
    var label = isControl ? controlLabel[currentLang] : demoLabel[currentLang];
    var destination = isControl ? FRONTEND_BASE + '/register' : FRONTEND_BASE + '/demo';
    var href = withVisitorParam(destination);

    [navLink, ctaLink].forEach(function (el) {
      if (!el) return;
      el.textContent = label;
      el.href = href;
    });
  }

  function trackLandingView(variant) {
    fetch(API_BASE + '/api/v1/experiments/' + EXPERIMENT_KEY + '/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subjectId: getVisitorId(), eventName: 'landing_view', variant: variant })
    }).catch(function () {
      // Best-effort: si el backend de experimentos no responde, no debe afectar la navegación.
    });
  }

  function applyVariant(variant) {
    renderCta(variant);
    trackLandingView(variant);
  }

  // Re-aplica la etiqueta correcta del CTA cuando el usuario cambia de idioma (translateBtn),
  // sin depender de variables internas de i18n.js. Se registra después de que el script i18n.js
  // ya haya enlazado su propio listener, así el reemplazo ocurre en segundo lugar.
  var translateBtn = document.getElementById('translateBtn');
  if (translateBtn) {
    translateBtn.addEventListener('click', function () {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      var cachedVariant = localStorage.getItem(VARIANT_CACHE_KEY) || 'B';
      renderCta(cachedVariant);
    });
  }

  var cachedVariant = localStorage.getItem(VARIANT_CACHE_KEY);
  if (cachedVariant) {
    applyVariant(cachedVariant);
    return;
  }

  fetch(API_BASE + '/api/v1/experiments/' + EXPERIMENT_KEY + '/assignment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subjectId: getVisitorId(), deploymentEnv: DEPLOYMENT_ENV })
  })
    .then(function (res) { return res.json(); })
    .then(function (data) {
      localStorage.setItem(VARIANT_CACHE_KEY, data.variant);
      applyVariant(data.variant);
    })
    .catch(function () {
      // Si el backend de experimentos no responde, se conserva el comportamiento actual
      // (variante B: "Probar ahora" -> /demo) sin registrar la vista.
    });
})();
