import styles from "./SideBar.module.css";
import avatar from "/Image/avatar.jpg";
// import { useState } from "react";

/*---- Icons Import ----*/
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SideBar() {

	const location = useLocation();

	console.log(location);

  return (
    <aside className={styles.sideBar}>
      <div className={styles.list}>
        <img src={avatar} alt="avatar" className={styles.avatar} />

        <a href="home" className={location.pathname === '/home'? styles.active : null}>
          <div className={styles.icon}>
            <GoHomeFill />
            Home
          </div>
        </a>
        <a href="about" className={location.pathname === '/about'? styles.active : null}>
          <div className={styles.icon} >
            <IoPersonSharp />
            About
          </div>
        </a>
        <a href="skills" className={location.pathname === '/skills'? styles.active : null}>
          <div className={styles.icon} >
            <FaCode />
            Skills<span></span>
          </div>
        </a>
        <a href="portfolio" className={location.pathname === '/portfolio'? styles.active : null}>
          <div className={styles.icon} >
            <BiSolidPhotoAlbum />
            Portfolio
          </div>
        </a>
        <a href="contact" className={location.pathname === '/contact'? styles.active : null}>
          <div className={styles.icon} >
            <IoMdMail />
            Contact
          </div>
        </a>
      </div>
    </aside>
  );
}
