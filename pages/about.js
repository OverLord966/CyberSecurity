import { useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from './header';

function Header() {
  return (
    <div>

      <Navbar></Navbar>
    </div>
  )
}


export default function MenuSobre() {
  return (
    <div className={styles.mainAbout}>
      <Header></Header>
      <h1>About Me</h1>
      <div className={styles.mainAbout}>
        <img className="creatorsPic" src="/img/logo1.png" style={{ width: "200px" }} />
        <p>My name is OverLord</p>

      </div>
    </div>
  );
}
