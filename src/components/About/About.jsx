import AboutJpg from "../../assets/about.jpg";
import PDFfile from "../../pdf/RushikeshGanorkarResume.pdf";
const About = () => {
  return (
    <>
      {" "}
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <img src={AboutJpg} alt="" className="about__img" />
          <div className="about__data">
            <p className="about__description">
              Software developer with strong knowledge of web technologies and
              one year of experience delivering high-quality work.
            </p>
            <div className="about__info">
              <div>
                {/*<span class="about__info-title">01+</span>*/}
                {/*<span class="about__info-name"*/}
                {/*  >Years <br />*/}
                {/*  experience</span*/}
              </div>
              <div>
                {/*<span class="about__info-title">2+</span>*/}
                {/*<span class="about__info-name"*/}
                {/*  >Completed <br />*/}
                {/*  project</span*/}
              </div>
              <div>
                {/* <span class="about__info-title">05+</span>
                      <span class="about__info-name">Companies <br> worked</span> */}
              </div>
            </div>
            <div className="about__buttons">
              <a href={PDFfile} className="button button--fkex">
                Download CV <i className="uil uil-download-alt" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
