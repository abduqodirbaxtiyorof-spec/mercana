"use client";

import { useEffect } from "react";

export function MicasaTypekit() {
  useEffect(() => {
    const config = {
      kitId: "rnt7cnr",
      scriptTimeout: 3000,
      async: true,
    };
    const html = document.documentElement;
    let timeoutId: ReturnType<typeof setTimeout>;

    const inactive = () => {
      html.className = html.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    };

    timeoutId = setTimeout(inactive, config.scriptTimeout);

    html.className += " wf-loading";
    const script = document.createElement("script");
    script.src = `https://use.typekit.net/${config.kitId}.js`;
    script.async = true;
    script.onload = () => {
      clearTimeout(timeoutId);
      try {
        // @ts-expect-error Typekit global from Adobe Fonts
        Typekit.load(config);
      } catch {
        inactive();
      }
    };
    document.head.appendChild(script);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}
