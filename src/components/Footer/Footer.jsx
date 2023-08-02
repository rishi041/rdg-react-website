const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Rushikesh Ganorkar</h1>
              <span className="footer__subtitle">Software developer</span>
            </div>
            <ul className="footer__links">
              {/*<li>
              <a href="#services" class="footer__link">Services</a>
            </li>
            <li>
              <a href="#portfolio" class="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="footer__link">Contact Me</a>
            </li>*/}
            </ul>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social" rel="noreferrer"
              >
                <i className="uil uil-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1hc3cpwv4nr7l&utm_content=722stg4"
                target="_blank"
                className="footer__social" rel="noreferrer"
              >
                <i className="uil uil-instagram" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social" rel="noreferrer"
              >
                <i className="uil uil-twitter-alt" />
              </a>
            </div>
          </div>
          <p className="footer__copy">© Rushi. ALl right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
