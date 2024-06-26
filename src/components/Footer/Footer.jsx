import styles from "./Footer.module.css";

/*---- Icons Import ----*/
import { AiOutlineTrademark  } from "react-icons/ai";

export default function Footer() {  
    return (
    <div className={styles.footer}>
        <p>Developed by João Ricardo Fortunato <AiOutlineTrademark className={styles.tradeMark} /><span>2024</span></p>
    </div>
    )
}