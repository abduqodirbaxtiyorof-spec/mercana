"use client";

import Link from "next/link";
import { useEffect } from "react";

import { NAV_LINKS } from "@/lib/constants";

interface MicasaNavbarProps {
  sticky?: boolean;
  heroOverlay?: boolean;
  active?: "portfolio";
}

const HERO_OVERLAY_SCROLL_THRESHOLD = 80;

export function MicasaNavbar({
  sticky = false,
  heroOverlay = false,
  active = "portfolio",
}: MicasaNavbarProps) {
  useEffect(() => {
    if (!heroOverlay) return;

    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const updateNavbar = () => {
      if (window.scrollY > HERO_OVERLAY_SCROLL_THRESHOLD) {
        navbar.classList.remove("transparent");
      } else {
        navbar.classList.add("transparent");
      }
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    const timer = window.setTimeout(() => {
      window.onscroll = updateNavbar;
    }, 600);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.clearTimeout(timer);
      navbar.classList.remove("transparent");
    };
  }, [heroOverlay]);

  const className = [
    "navbar",
    "navbar-expand-sm",
    "navbar-light",
    heroOverlay ? "transparent" : "",
    sticky ? "sticky" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id="navbar" className={className}>
      <Link id="navbar-brand" href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/micasa/images/mini_logo.png" width={50} height={50} alt="" />
      </Link>
      <div id="mobile-nav-toggle" />
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {NAV_LINKS.map((link) => {
            const isActive = link.label === "Portfolio" && active === "portfolio";
            const linkClassName = `nav-link${link.label === "Portfolio" ? " work-link" : ""}`;

            return (
              <li key={link.href} className={`nav-item${isActive ? " active" : ""}`}>
                {link.external ? (
                  <a
                    className={linkClassName}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link className={linkClassName} href={link.href}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div id="mobile-overlay" className="mobile-overlay hide display-none">
        <div className="mobile-overlay-header">
          <div className="mobile-overlay-header-brand" />
          <div id="mobile-overlay-close" className="mobile-overlay-header-close" />
        </div>
        <ul className="navbar-nav">
          {NAV_LINKS.map((link) => (
            <li
              key={`mobile-${link.href}`}
              className={`nav-item${link.label === "Portfolio" ? " active" : ""}`}
            >
              {link.external ? (
                <a className="nav-link" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link className="nav-link work-link" href={link.href}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-overlay-contact">
          <div className="main">
            Contact UAE
            <br />
            <a href="tel:+971586891771" className="animated-link">
              +971 58 6891771
            </a>
            <br />
            <a href="mailto:info@micasa-design.com" className="animated-link">
              info@micasa-design.com
            </a>
          </div>
          <br />
          <div className="main">
            Contact UZB
            <br />
            <a href="tel:+998954755000" className="animated-link">
              +998 95 4755000
            </a>
            <br />
            <a href="mailto:info@micasa-design.com" className="animated-link">
              info@micasa-design.com
            </a>
          </div>
          <br />
          <div className="main">
            Contact RU
            <br />
            <a href="tel:+79099400097" className="animated-link">
              +7 909 9400097
            </a>
            <br />
            <a href="mailto:info@micasa-design.ru" className="animated-link">
              info@micasa-design.ru
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
