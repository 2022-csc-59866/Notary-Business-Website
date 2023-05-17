import React, { useEffect } from "react";

const BookNow = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = (event) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/s-puneet2000" });
    }
  };

  return (
    <div>
      <a href="#" onClick={openCalendlyPopup}>
        Book Now
      </a>
    </div>
  );
};

export default BookNow;
