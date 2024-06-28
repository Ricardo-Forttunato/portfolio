import styles from "./SideBar.module.css";
import avatar from "/image/avatar.jpg";

/*---- Icons Import ----*/
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {

	const location = useLocation();

  return (
    <aside className={styles.sideBar}>
      <div className={styles.list}>
        <img src={avatar} alt="avatar" className={styles.avatar} />

        <Link to="/" className={location.pathname === '/'? styles.active : null}>
          <div className={styles.icon}>
            <GoHomeFill />
            Home
          </div>
        </Link>
        <Link to="/about" className={location.pathname === '/about'? styles.active : null}>
          <div className={styles.icon} >
            <IoPersonSharp />
            About
          </div>
        </Link>
        <Link to="skills" className={location.pathname === '/skills'? styles.active : null}>
          <div className={styles.icon} >
            <FaCode />
            Skills<span></span>
          </div>
        </Link>
        <Link to="portfolio" className={location.pathname === '/portfolio'? styles.active : null}>
          <div className={styles.icon} >
            <BiSolidPhotoAlbum />
            Portfolio
          </div>
        </Link>
        <Link to="contact" className={location.pathname === '/contact'? styles.active : null}>
          <div className={styles.icon} >
            <IoMdMail />
            Contact
          </div>
        </Link>
      </div>
    </aside>
  );
}
