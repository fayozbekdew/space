import React from 'react'
import Crew from '../../component/CrewCard/Crew'

const Mark = () => {
  const MarkDb = {
    number:"02",
    position:"Mission Specialist ",
    name:"MARK SHUTTLEWORTH",
    info:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    className:"mark"
  }
  return (
    <div>
      <Crew data={MarkDb}/>
    </div>
  )
}

export default Mark