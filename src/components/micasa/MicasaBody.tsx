"use client";

import { useEffect, type ReactNode } from "react";

interface MicasaBodyProps {
  className: string;
  children: ReactNode;
}

function applyMicasaBodyClasses(routeClassName: string) {
  document.body.className = routeClassName;
  document.body.classList.add("loaded");
  document.body.classList.add(
    "ontouchstart" in document.documentElement ? "touch" : "no-touch",
  );
}

function disableImageOnlyWorkCardVideoHover() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jq = (window as any).jQuery as any;
  if (!jq) return;

  jq(".work-card").each(function (this: HTMLElement) {
    const card = jq(this);
    if (card.find("video").length === 0) {
      card.off("mouseenter mouseleave hover");
    }
  });
}

export function MicasaBody({ className, children }: MicasaBodyProps) {
  useEffect(() => {
    applyMicasaBodyClasses(className);

    disableImageOnlyWorkCardVideoHover();
    const t1 = window.setTimeout(disableImageOnlyWorkCardVideoHover, 0);
    const t2 = window.setTimeout(disableImageOnlyWorkCardVideoHover, 300);
    const t3 = window.setTimeout(disableImageOnlyWorkCardVideoHover, 1000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      document.body.className = "";
    };
  }, [className]);

  return (
    <div className="all" style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
