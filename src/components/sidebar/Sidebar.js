import React from "react";
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs';
import {AiTwotoneContainer,AiOutlineWechat} from 'react-icons/ai';
import {BiDetail} from 'react-icons/bi';

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list ">
        <li className="sidebar__item center">
          <a href="#personal" className="sidebar__link center"><BsFillFileEarmarkPersonFill/></a>
          <h4 className="sidebar__name">Personal </h4>
        </li>
        <li className="sidebar__item center">
          <a href="#courses" className="sidebar__link center"><AiTwotoneContainer/></a>
          <h4 className="sidebar__name">Courses </h4>
        </li>
        <li className="sidebar__item center">
          <a href="#other" className="sidebar__link center"><BiDetail/></a>
          <h4 className="sidebar__name">Other</h4>
        </li>
        <li className="sidebar__item center">
          <a href="#contact-us" className="sidebar__link center"><AiOutlineWechat/></a>
          <h4 className="sidebar__name">Contact us</h4>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
