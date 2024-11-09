// analyticsEvents.js
export const logEvent = (eventName, eventParams) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }
};

// Specific event functions
export const logClicked = () => {
  logEvent("clicked", {
    event_category: "interaction",
    event_label: "Clicked Event",
  });
};

export const logCalled = () => {
  logEvent("called", {
    event_category: "interaction",
    event_label: "Called Event",
  });
};

export const logViewed = () => {
  logEvent("viewed", {
    event_category: "interaction",
    event_label: "Viewed Event",
  });
};
