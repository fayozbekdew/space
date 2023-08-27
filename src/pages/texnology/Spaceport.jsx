import React from 'react'
import TexnologyCard from '../../component/texnologyCard/TexnologyCard'

import SpaceportImg from '../../assets/spaceport-texno.png'

const Spaceport = () => {
  const CapsuleDb = {
    number: '02',
    name:"SPACEPORT",
    text:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img:SpaceportImg
  }
  return (
    <>
      <TexnologyCard data={CapsuleDb}/>
    </>
  )
}

export default Spaceport