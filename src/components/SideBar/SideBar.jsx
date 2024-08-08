import styles from "./SideBar.module.css";
import avatar from "/public/image/avatar.jpg";
import LinkAside from "../Link/LinkAside";

/*---- Icons Import ----*/
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhotoAlbum } from "react-icons/bi";

export default function SideBar() {

  const linkData =[
    {id: 1, path: "/", icon: <GoHomeFill />, text: "Home"},
    {id: 2, path: "/about", icon: <IoPersonSharp />, text: "About"},
    {id: 3, path: "/skills", icon: <FaCode />, text: "Skills"},
    {id: 4, path: "/portfolio", icon: <BiSolidPhotoAlbum />, text: "Portfolio"},
    {id: 5, path: "/contact", icon: <IoMdMail />, text: "Contact"}
  ]

  function renderLinkAside(item, index) {
    return (
      <LinkAside
        key={index}
        pathLink={item.path}
        icon={item.icon}
        text={item.text}
      />
    )
  }

  return (
    <aside className={styles.sideBar}>
      <div className={styles.content}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.container_links}>
          {linkData.map(renderLinkAside)}
        </div>
      </div>
    </aside>
  );
}
