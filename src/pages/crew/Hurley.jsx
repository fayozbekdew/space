import React from 'react'
import Crew from '../../component/CrewCard/Crew'

const Hurley = () => {
  const hurleyDb = {
    number:"01",
    position:"Commander",
    name:"Douglas Hurley",
    info:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    className:"hurley"
  }
  return (
    <div>
        <Crew data={hurleyDb}/>
    </div>
  )
}

export default Hurley