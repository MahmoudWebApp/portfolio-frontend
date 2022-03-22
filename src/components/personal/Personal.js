import { useSelector } from "react-redux";
import user2 from "../../img/raed2.png";
import { AiOutlineSend } from "react-icons/ai";
import { Loader } from "..";
import "./Personal.scss";

const Personal = ({ toggleLang }) => {
  const personalData = useSelector((state) => state.home.personal);
  const isLoading = useSelector((state) => state.home.isLoading);
  if (isLoading) {
    return (
      <section className="personal">
        <div className="personal__title">
        <Loader />
        </div>
      </section>
    );
  }
  const classesItem = toggleLang ? "personal__item" : "personal__item item-rtl";
  const personal = personalData.data.map((personal) => (
    <article key={personal.id} className={classesItem}>
      <AiOutlineSend />
      <h3 className="personal__item-left "> {personal.title}</h3>
      <h4 className="personal__item-right ">{personal.value}</h4>
    </article>
  ));
  return (
    <section className="personal" id="personal">
      <h2 className="personal__title">
        {personalData.titleLeft} <span>{personalData.titleRight}</span>
      </h2>
      <div className="personal__img">
        <img src={user2} alt="user" />
      </div>
      <div className="personal__list">{personal}</div>
    </section>
  );
};

export default Personal;
