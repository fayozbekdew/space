import React from 'react'
import PlanetCard from '../../component/planetCard/PlanetCard'
// images
import TitanImg from "../../assets/titan.png"

const Titan = () => {
    const TitanDb = {
        number:"04",
        name:"TITAN",
        text:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 BIL. km",
        time:"7 years",
        img:TitanImg
    }
  return (
    <>
    <PlanetCard data={TitanDb}/>
    </>
  )
}

export default Titan