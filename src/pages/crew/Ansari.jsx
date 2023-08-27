import React from 'react'
import Crew from '../../component/CrewCard/Crew'

const Ansari = () => {
  const AnsariDb = {
    number:"04",
    position:"Flight Engineer",
    name:"Anousheh Ansari",
    info:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    className:"ansari"
  }
  return (
    <div>
      <Crew data={AnsariDb}/>
    </div>
  )
}

export default Ansari