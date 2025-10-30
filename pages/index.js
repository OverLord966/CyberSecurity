import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Navbar from './header';

const bunkers = [
  {
    imagePath: "./img/WF1.png",
    name: "Withered Fredbear's Diner",
    Year: "2021"
  },
  {
    imagePath: "./img/WF2.png",
    name: "Withered Fredbear's 2",
    Year: "2023"
  },
]

function Header() {
  return (
    <div>

      <Navbar></Navbar>
    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.mainAbout}>
      <Header></Header>
      <div className={styles.mainAbout}>
        <h1>OVLD</h1>
        
      </div>
      <div className={styles.mainAbout}>
      <img src="/img/logo1.png" />
      </div>
      <h1>About the website</h1>
        <p>Webpage created using nextjs.</p>
    </div >


  )
}


function BunkerCard({ data }) {
  let path = ""
  let bunker = ""
  if(data.imagePath == "/Bunker1/1a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker"
  }
  else if(data.imagePath == "/Bunker2/3a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker1"
  }
  if(data.imagePath == "/Bunker3/4A.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker2"
  }
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.BunkerImage}>
          <Link href={bunker}><img src={data.imagePath} /></Link>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.Dados}>
          <div className={styles.Nomes}>{data.name}</div>
          <div className={styles.Preços}>{data.Year}</div>
        </div>        
      </div>
    </div>

  )
}

/*
<div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
*/