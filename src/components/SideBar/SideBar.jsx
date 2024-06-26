import styles from "./SideBar.module.css";
import avatar from "/Image/avatar.jpg";
import { useState } from "react";

/*---- Icons Import ----*/
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhotoAlbum } from "react-icons/bi";

export default function SideBar() {
const [content, setContent] = useState('Home');


  return (
    <aside className={styles.sideBar}>
      <div className={styles.list}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
				
				<a href="#">
					<div 
						className={styles.icon}
						onClick={() => {console.log('Home')}}
					>
						<GoHomeFill />
						Home
					</div>
				</a>
				<a href="#">
					<div 
						className={styles.icon}
						onClick={() => {console.log('About')}}
					><IoPersonSharp />About</div>
				</a>
				<a href="#">
					<div 
						className={styles.icon}
						onClick={() => {console.log('Skills')}}
					><FaCode />Skills<span></span></div>
				</a>
				<a href="#">
					<div 
						className={styles.icon}
						onClick={() => {console.log('Portfolio')}}
					><BiSolidPhotoAlbum />Portfolio</div>
				</a>
				<a href="#">
					<div 
						className={styles.icon}
						onClick={() => {console.log('Contact')}}
					><IoMdMail />Contact</div>
				</a>
      </div>
    </aside>
  );
}
