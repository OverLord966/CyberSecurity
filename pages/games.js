import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Navbar from './header';

const bunkers = [
  {
    imagePath: "./img/WF1.png",
    name: "Withered Fredbear's Diner",
    Year: "2021",
    Description: "Welcome to my diner kids, a fun place to meet the crew and eating a lots of pizza. You will start as nightguard of the pizzeria, your objective?? survive to 6AM, something creepy and wrong is upon the pizzeria, will u figure it the mystery behind it??"
  },
  {
    imagePath: "./img/WF2.png",
    name: "Withered Fredbear's 2",
    Year: "2023",
    Description: "Welcome, you live in a little village where did u got a job at the new Withered Fredbear's 2. The job is simple: survive at 6AM and then walk out, but something is wrong with the town, creepy animatronics roams and someone is back. Will you find everything and save the town?"
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
      </div>
      <div className={styles.mainAbout}>
      </div>
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>        
      </div>    
      <div className={styles.body}>
        <BunkerCard data={bunkers[1]}></BunkerCard>
        

      </div>     
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
          <div className={styles.Preços}>{data.Description}</div>
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