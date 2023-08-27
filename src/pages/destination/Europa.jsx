import React from 'react'
import PlanetCard from '../../component/planetCard/PlanetCard'

//images
import EuropaImg from "../../assets/europa.png"

const Europa = () => {
    const EuropaDb = {
        number:"03",
        name:"EUROPA",
        text:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:"628 MIL. km",
        time:"3 years",
        img: EuropaImg
    }
  return (
    <div>
        <PlanetCard data={EuropaDb}/>
    </div>
  )
}

export default Europa