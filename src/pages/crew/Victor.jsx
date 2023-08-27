import React from 'react'
import Crew from '../../component/CrewCard/Crew'

const Victor = () => {
  const VictorDb = {
    number:"03",
    position:"PILOT",
    name:"Victor Glover",
    info:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    className:"victor"
  }
  return (
    <div>
      <Crew data={VictorDb}/>
    </div>
  )
}

export default Victor