import MainHeader from "@/layout/MainHeader/MainHeader";
import "./About.scss";
import PageFooter from "@/layout/PageFooter/PageFooter";
const About = () => {
  return (
    <div className="about-page">
      <MainHeader theme="light" bg="dark" />
      <div className="about-page-wrapper">
        <section className="about-page-hero">
          <div className="about-page-hero-wrapper">
            <div className="about-page-hero-layout-top">
              <h1 className="section-title">About Cryptonix</h1>
              <ul className="path-tab-list">
                <li>
                  <button className="path-tab path-tab-selected">ABOUT</button>
                </li>
                <li>
                  <button className="path-tab">OUR TEAM</button>
                </li>
                <li>
                  <button className="path-tab">CAREERS</button>
                </li>
                <li>
                  <button className="path-tab">CONTACT US</button>
                </li>
              </ul>
            </div>
            <div className="about-page-hero-layout-bottom">
              <button>
                <img src="assets/interface/playIcon.svg" alt="play icon" />
              </button>
              <h2>Watching Video</h2>
              <p>
                We’re growing fast, and we’re looking for extraordinary people
                to share their experience and expertise.
              </p>
               <button className="create-account-btn">create account</button>
            </div>
          </div>
          {/* <div className="about-page-bg"></div> */}
        </section>
        <section></section>
        <section></section>
        <PageFooter />
      </div>
    </div>
  );
};

export default About;
