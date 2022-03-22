import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { fetchHome } from "../../store/homeSlice";
import {ProfileImage,Sidebar,About,Courses, Other, ContactUs, Personal} from "../../components";
const Home = () => {
  const [toggleLang, setToggleLang] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHome(toggleLang));
  }, [dispatch, toggleLang]);
  return (
    <div className="home" id="home">
      <header className="home__header">
        <About toggleLang={toggleLang} />
      </header>
      <Sidebar />
      <ProfileImage />
      <main className="home__main">
        <Personal toggleLang={toggleLang} />
        <Courses />
        <Other />
        <ContactUs />
      </main>
      <button className="home__btn" onClick={() => setToggleLang(!toggleLang)}>
        {toggleLang ? "en" : "ar"}
      </button>
      <a href="#home" className="home__btn home__link center">
        home
      </a>
    </div>
  );
};

export default Home;
