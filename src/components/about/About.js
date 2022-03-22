import { useSelector } from "react-redux";
import { Loader } from "..";
import "./About.scss";

const About = ({ toggleLang }) => {
  const aboutData = useSelector((state) => state.home.about);
  const isLoading = useSelector((state) => state.home.isLoading);
  const { title, description, text } = aboutData;
  if (isLoading) {
    return (
      <section className="about">
        <Loader />
      </section>
    );
  }
  const classesAbout = toggleLang ? "about" : "about arabic";
  return (
    <section className={classesAbout} id="about">
      <div className="about__title center">
        <h1 className="animate__animated animate__rollIn">{title}</h1>
        <h2 className="animate__animated animate__zoomIn">{description}</h2>
      </div>
      <div className="about__text animate__animated animate__fadeInUp">
        <p>{text}</p>
      </div>
    </section>
  );
};

export default About;
