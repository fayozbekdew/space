import './TexnologyCard.css'
//rrd
import { Link } from 'react-router-dom' 
import { useState } from 'react'

const TexnologyCard = ( {data} ) => {

    const [active, setActive ] = useState(false)

    const handleActive = (e) => {
    setActive(true)
    }
  return (
    <main className="planets">
        <div className="container planet">
            {data && <>
            <div className="texnology-card__left">
            <div className="planet__img__info">
                    <p className="planet__img__number">
                        {data.number}
                    </p>
                    <p className="planet__img__text">
                    SPACE LAUNCH 101
                    </p>
                </div>
           <div className="texnology-card__left__bottom">
           <ul className="texnology__navbar">
                <Link onClick={handleActive} to='launch' className={`${active ? 'active' : ''} texnology__item`}>
                    <h1>1</h1>
                </Link>
                <Link onClick={handleActive} to='spaceport'  className={`${active ? 'active' : ''} texnology__item`}>
                    <h1>2</h1>
                </Link>
                <Link onClick={handleActive} to='capsule' className="texnology__item">
                    <h1>3</h1>
                </Link>
            </ul>
            <div className="planet__info">
                <p className="texnology-top-text">
                THE TERMINOLOGY…
                </p>
                <h2 className="texnology__tittle">
                    {data.name}
                </h2>
                <p className="plaent__text">
                    {data.text}
                </p>
            </div>
           </div>
            </div>
            <div className="texnology-card__right">
                <img src={data.img} alt="" />
            </div>
            </>}
        </div>
    </main>
  )
}

export default TexnologyCard