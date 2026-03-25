const siteConfig = {
  surveyUrl: "https://form.typeform.com/to/your-form-id",
  analyticsDomain: ""
};

function loadPlausible() {
  if (!siteConfig.analyticsDomain || window.plausible) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = siteConfig.analyticsDomain;
  script.src = "https://plausible.io/js/script.js";
  document.head.append(script);
}

function track(eventName, props = {}) {
  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props });
    return;
  }

  if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
    console.info("[analytics]", eventName, props);
  }
}

function wireSurveyLinks() {
  document.querySelectorAll("[data-survey-link]").forEach((link) => {
    link.href = siteConfig.surveyUrl;

    link.addEventListener("click", () => {
      track(link.dataset.ctaSource || "cta_click", {
        destination: siteConfig.surveyUrl
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPlausible();
  wireSurveyLinks();
  track("page_view", { page: "home" });
});
