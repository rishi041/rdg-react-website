const Portfolio = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div className="portfolio__container container swiper swiper-container">
          <div className="swiper-wrapper">
            {/* PORTFOLIO 1 */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="/src/assets/portfolio1.jpg"
                alt=""
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Modern Website</h3>
                <p className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon" />
                </a>
              </div>
            </div>
            {/* PORTFOLIO 2 */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="/src/assets/portfolio2.jpg"
                alt=""
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Brand Design</h3>
                <p className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon" />
                </a>
              </div>
            </div>
            {/* PORTFOLIO 3 */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="/src/assets/portfolio3.jpg"
                alt=""
                className="portfolio__img"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Online Store</h3>
                <p className="portfolio__description">
                  Website adaptable to all devices, with ui components and
                  animated interactions.
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
