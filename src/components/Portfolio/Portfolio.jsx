import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/pagination";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div className="portfolio__container container">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* PORTFOLIO 1 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio1} alt="" className="portfolio__img" />
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
            </SwiperSlide>
            {/* PORTFOLIO 2 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio2} alt="" className="portfolio__img" />
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
            </SwiperSlide>
            {/* PORTFOLIO 3 */}
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio3} alt="" className="portfolio__img" />
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
