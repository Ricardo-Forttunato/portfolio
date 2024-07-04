/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './Link.module.css';
import { Link, useLocation } from "react-router-dom";

/*---- Icons Import ----*/

export default function LinkAside(props) {
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
  const path = location.pathname;

  return (
    <Link
      to={props.pathLink}
      className={props.pathLink === path ? styles.active : null}
    >
      <div className={styles.icon}>
        {props.icon}
        <span className={ windowWidth < 670 ? styles.deactive : null}>{props.text}</span>
      </div>
    </Link>
  );
}