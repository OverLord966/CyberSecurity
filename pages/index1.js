import { useState } from 'react'
import Login from './Login'
import Singup from './Singup'
import styles from '../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { style } from '@mui/system';
import { LogoutSharp, Style } from '@mui/icons-material';

const bunkers = [
  {
    imagePath: "/Bunker1/1a.jpg",
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "cyber"]
  },
  {
    imagePath: "/Bunker2/3a.jpg",
    name: "LAS VEGAS UNDERGROUND",
    price: "18 M",
    location: {
      city: "Las Vegas",
      country: "United States"
    },
    tags: ["earthquake", "iceage"]
  },
  {
    imagePath: "/Bunker3/4A.jpg",
    name: "THE SAFE HOUSE",
    price: "3 M",
    location: {
      city: "Warsam",
      country: "Poland"
    },
    tags: ["meteoro", "missiles"]
  },
  {
    imagePath: "/Bunker4/B.jpg",
    name: "HOUSE PLAN B",
    price: "4.8 M",
    location: {
      city: "Ukrain",
    },
    tags: ["nuclear", "solarflares", "earthquake"]
  },
  {
    imagePath: "/Bunker5/a.jpg",
    name: "ARTEMIS PROTECTION",
    price: "500 000",
    location: {
      city: "Nantes",
      country: "France",
    },
    tags: ["tsunami", "vulcanism", "cyber"]
  },
  {
    imagePath: "/Bunker6/6a.jpg",
    name: "THE OPPIDUM",
    price: "8 M",
    location: {
      country: "Czech Republic",
    },
    tags: ["cyber", "earthquake", "nuclear"]
  },
  {
    imagePath: "/Bunker7/2b.jpg",
    name: "VIVOS XPOINT",
    price: "40 000",
    location: {
      city: "Dakota",
      country: "United States",
    },
    tags: ["vulcanism", "earthquake", "tsunami"]
  },
  {
    imagePath: "/Bunker9/1b.jpg",
    name: "DBX DOOMSDAY BUNKER",
    price: "5.4 M",
    location: {
      city: "South Carolina",
      country: "United States",
    },
    tags: ["cyber", "meteoro"]
  },
  {
    imagePath: "/Bunker9/28.jpg",
    name: "NOMAD BUNKER",
    price: "600 000",
    location: {
      country: "Anywhere",
    },
    tags: ["vulcanism", "iceage", "tsunami"]
  }
]

function Header() {
  return (
    <div className={styles.header}
      style={{ backgroundImage: "url(/header.jpg)" }}>
      <img src={"./logo.png"} className={styles.logo} />
      <div className="textoHeader"><h1>LOOKING TO<br/>
        SURVIVE IN STYLE?</h1>
      <h5>A.BUNKER is the best solutions to enjoy the end of days.</h5></div>


      

      <div className={styles.login}>
        <Link href={'/Login'}><button className={styles.button_login}>Login</button></Link>
        </div>
      <div className={styles.login}>
        <Link href={'/Singup'}><button className={styles.button_singup}>SignUp</button></Link>
        
      </div>
      <div className={styles.login}>
      <Link href={'/Perfil'}><button className={styles.button_perfil}>Perfil</button></Link>
      </div>

    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Header></Header>

      <div className={styles.selection}><h2>Our selection</h2></div>
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>
        <BunkerCard data={bunkers[1]}></BunkerCard>
        <BunkerCard data={bunkers[2]}></BunkerCard>
        <BunkerCard data={bunkers[3]}></BunkerCard>
        <BunkerCard data={bunkers[4]}></BunkerCard>
        <BunkerCard data={bunkers[5]}></BunkerCard>
        <BunkerCard data={bunkers[6]}></BunkerCard>
        <BunkerCard data={bunkers[7]}></BunkerCard>

      </div>
      <div className={styles.parte2}>
        <h2>SURVIVE ANY CATASTROPHE</h2>
          <h5>Everyday the chances of an extinction level event grows closer. Find out what possible catastrophes may possible be eminent and what they can cause in our lives.</h5>
        <div className={styles.formas}>
          <img src={"/Icones_Catastrofes/biochemical.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/cyber.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/earthquake.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/iceage.png"} className={styles.icones} />


        </div>
        <div className={styles.formas}>
          <img src={"/Icones_Catastrofes/meteoro.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/missiles.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/nuclear.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/solarflares.png"} className={styles.icones} />
        </div>
        <div className={styles.formas}>
        <img src={"/Icones_Catastrofes/tsunami.png"} className={styles.icones} />
          <img src={"/Icones_Catastrofes/vulcanism.png"} className={styles.icones} />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.squares}>



        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>
      </div>
      <div className={styles.body}>
        <div className={styles.squares}>
          {/* <BunkerCard /> */}
        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>


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
          <div className={styles.Preços}>{data.location.city}, {data.location.country}</div>
          <div className={styles.Local}>{data.price} €</div>
        </div>
        <div className={styles.tags}>
          {data.tags.map(t => <img src={`/Icones_Catastrofes/${t}.png`}></img>)}
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