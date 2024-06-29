import styles from "./SideBar.module.css";
import avatar from "/image/avatar.jpg";

/*---- Icons Import ----*/
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideBar() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

	const location = useLocation();

  return (
    <aside className={styles.sideBar}>
      <div className={styles.list}>
        <img src={avatar} alt="avatar" className={styles.avatar} />

        <Link to="/" className={location.pathname === '/'? styles.active : null}>
          <div className={styles.icon}>
            <GoHomeFill />
            <span className={windowWidth < 650 ? styles.deactive : null}>Home</span>
          </div>
        </Link>
        <Link to="/about" className={location.pathname === '/about'? styles.active : null}>
          <div className={styles.icon} >
            <IoPersonSharp />
            <span className={windowWidth < 650 ? styles.deactive : null}>About</span>
          </div>
        </Link>
        <Link to="skills" className={location.pathname === '/skills'? styles.active : null}>
          <div className={styles.icon} >
            <FaCode />
            <span className={windowWidth < 650 ? styles.deactive : null}>Skills</span>
          </div>
        </Link>
        <Link to="portfolio" className={location.pathname === '/portfolio'? styles.active : null}>
          <div className={styles.icon} >
            <BiSolidPhotoAlbum />
            <span className={windowWidth < 650 ? styles.deactive : null}>Portfolio</span>
          </div>
        </Link>
        <Link to="contact" className={location.pathname === '/contact'? styles.active : null}>
          <div className={styles.icon} >
            <IoMdMail />
            <span className={windowWidth < 650 ? styles.deactive : null}>Contact</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
