import { useEffect } from "react";

function TawkMessenger() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67b57bdb55b96f1911e05228/1ikeenkdf";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null; // No visible output, just loads chat widget
}

export default TawkMessenger;
