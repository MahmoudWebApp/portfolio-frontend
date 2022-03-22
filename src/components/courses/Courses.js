import CardCourse from "./course-card/CardCourse";
import { useSelector } from "react-redux";
import "./Courses.scss";
import { Loader } from "..";

const Courses = () => {
  const coursesData = useSelector((state) => state.home.courses);
  const isLoading = useSelector((state) => state.home.isLoading);
  const courseData = coursesData?.course?.map((item) => (
    <CardCourse
      key={item.id}
      title={item.title}
      content={item.content}
    />
  ));
  if (isLoading) {
    return (
      <section className="courses">
        <div className="courses__title">
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section className="courses" id="courses">
      <div className="courses__title">{coursesData.title}</div>
      <div className="courses__list">{courseData}</div>
    </section>
  );
};

export default Courses;
