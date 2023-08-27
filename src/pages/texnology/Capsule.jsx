import React from 'react'
import TexnologyCard from '../../component/texnologyCard/TexnologyCard'

//images
import CapsuleImg from '../../assets/capsule-texno.png'


const Capsule = () => {
  const CapsuleDb = {
    number: '03',
    name:"SPACE CAPSULE",
    text:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img:CapsuleImg
  }
  return (
    <div>
      <TexnologyCard data={CapsuleDb}/>
    </div>
  )
}

export default Capsule