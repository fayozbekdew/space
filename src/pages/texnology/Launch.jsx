import TexnologyCard from '../../component/texnologyCard/TexnologyCard'

//images
import LaunchImg from '../../assets/launch-texno.png'


const Launch = () => {
  const LaunchDb = {
    number: '01',
    name:"LAUNCH VEHICLE",
    text:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img:LaunchImg
  }

  return (
    <>
    <TexnologyCard data={LaunchDb}/>
    </>
  )
}

export default Launch