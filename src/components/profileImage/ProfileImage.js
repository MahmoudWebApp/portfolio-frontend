import Read from "../../img/Read.jpg";
import './ProfileImage.scss';
const ProfileImage = () => {
  return (
    <section className="profile center">
      <img src={Read} alt="Read" className="animate__animated animate__rotateIn" />
    </section>
  );
};

export default ProfileImage;
