import styles from "./Footer.module.css";

/*---- Icons Import ----*/
import { FaRegCopyright  } from "react-icons/fa6";

export default function Footer() {  
    return (
    <div className={styles.footer}>
        <p>Developed by Ricardo Fortunato <FaRegCopyright className={styles.tradeMark} /><span>2024</span></p>
    </div>
    )
}