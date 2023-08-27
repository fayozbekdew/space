import React from 'react'
import PlanetCard from '../../component/planetCard/PlanetCard'
//images
import MarsImg from "../../assets/mars.png"

const Mars = () => {
    const MarsDb = {
        number:"02",
        name:"MARS",
        text:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 MIL. km",
        time:"9 months",
        img:MarsImg
    }
  return (
    <div>
        <PlanetCard data={MarsDb}/>
    </div>
  )
}

export default Mars