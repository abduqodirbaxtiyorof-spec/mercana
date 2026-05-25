"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface MicasaHeroProps {
  videoSrc: string | null;
  videoType?: string;
  posterSrc?: string | null;
}

export function MicasaHero({
  videoSrc,
  videoType = "video/mp4",
  posterSrc = null,
}: MicasaHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;

    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "video";
    preload.href = videoSrc;
    preload.type = videoType;
    document.head.appendChild(preload);

    return () => {
      preload.remove();
    };
  }, [videoSrc, videoType]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const markReady = () => {
      setVideoReady(true);
      setVideoFailed(false);
    };

    const markFailed = () => {
      setVideoFailed(true);
      setVideoReady(false);
    };

    const playVideo = () => {
      video.defaultMuted = true;
      video.muted = true;
      void video.play().catch(() => {
        // Retry once metadata is available (Chrome autoplay policy).
      });
    };

    video.addEventListener("loadeddata", markReady, { once: true });
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);
    video.addEventListener("error", markFailed);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      markReady();
    }

    playVideo();

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
      video.removeEventListener("error", markFailed);
    };
  }, [videoSrc]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".mercana-hero");
    const navbar = document.getElementById("navbar");
    const arrow = document.querySelector<HTMLAnchorElement>(".mercana-hero .arrow");
    const portfolioLink = document.querySelector<HTMLAnchorElement>(".work-link");

    if (!header || !navbar) return;

    const onScroll = () => {
      if (window.scrollY >= header.offsetHeight) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    const scrollToNavbar = (event: Event) => {
      event.preventDefault();
      navbar.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onArrowEnter = () => arrow?.classList.add("arrow-animate");
    const onArrowAnimEnd = () => arrow?.classList.remove("arrow-animate");

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    arrow?.addEventListener("click", scrollToNavbar);
    portfolioLink?.addEventListener("click", scrollToNavbar);
    arrow?.addEventListener("mouseenter", onArrowEnter);
    arrow
      ?.querySelector("img")
      ?.addEventListener("animationend", onArrowAnimEnd);

    return () => {
      window.removeEventListener("scroll", onScroll);
      arrow?.removeEventListener("click", scrollToNavbar);
      portfolioLink?.removeEventListener("click", scrollToNavbar);
      arrow?.removeEventListener("mouseenter", onArrowEnter);
      arrow
        ?.querySelector("img")
        ?.removeEventListener("animationend", onArrowAnimEnd);
      navbar.classList.remove("sticky");
    };
  }, []);

  const showPosterFallback =
    !videoSrc || videoFailed || (!videoReady && Boolean(posterSrc));

  return (
    <div className="header hero-large mercana-hero">
      <div className="mercana-hero__media" aria-hidden="true">
        {videoSrc ? (
          <video
            key={videoSrc}
            ref={videoRef}
            className={`mercana-hero__video${videoReady ? " is-ready" : ""}`}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterSrc ?? undefined}
          />
        ) : null}

        {showPosterFallback && posterSrc ? (
          <div
            className="mercana-hero__poster"
            style={{ backgroundImage: `url(${posterSrc})` }}
          />
        ) : null}

        <div className="mercana-hero__overlay" />
      </div>

      <div className="hero-cover mercana-hero__content">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="logo"
          src="/micasa/images/logo_white.png"
          width={500}
          height={287}
          alt="MERCANA Design Studio"
          style={{ opacity: 0 }}
        />
      </div>

      <Link href="#navbar" className="arrow" style={{ opacity: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/micasa/images/hero-arrow.svg" alt="Scroll to portfolio" />
      </Link>
    </div>
  );
}
