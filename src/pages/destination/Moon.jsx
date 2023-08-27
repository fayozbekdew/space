import React from 'react'
import PlanetCard from '../../component/planetCard/PlanetCard'
//images
import MoonImg from "../../assets/moon.png"

const Moon = () => {
    const moonDb = {
        number:"01",
        name:"MOON",
        text:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        time:"3 days",
        img:MoonImg
    }
  return (
    <div>
        <PlanetCard data={moonDb}/>
    </div>
  )
}

export default Moon