import { FOOTER } from "@/lib/constants";

export function MicasaFooter() {
  return (
    <div className="footer-wrapper">
      <footer className="container footer">
        <div className="row h-100">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="logo-footer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/micasa/images/logo_black.png" alt="MERCANA" />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="contact">
              <div className="main">
                Contact
                <br />
                <a href={FOOTER.phoneHref} className="animated-link">
                  {FOOTER.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="social">
              <div className="social-links">
                <a
                  href={FOOTER.instagram}
                  className="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                />
                <a
                  href={FOOTER.telegram}
                  className="telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                />
              </div>
              <div className="smallprint">
                <span className="copyright">{FOOTER.copyright}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
