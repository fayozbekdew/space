//rrd
import { Link } from 'react-router-dom'
import './PlanetCard.css'

const PlanetCard = ( {data} ) => {
  return (
    <main className="planets">
        <div className="container planet">
            {data && <>
                <div className="planet__img">
                <div className="planet__img__info">
                    <p className="planet__img__number">
                        {data.number}
                    </p>
                    <p className="planet__img__text">
                        Pick your destination
                    </p>
                </div>
                <img src={data.img} className="planet__img__photo" width="445" height="445"/>
            </div>
            
            <div className="planet__info">
                <ul className="planet__list">
                    <li className="planet__item">
                        <Link to='moon' className="planet__item__link">
                            moon
                        </Link>
                    </li>
                    <li className="planet__item">
                        <Link to="mars" className="planet__item__link">
                            mars
                        </Link>
                    </li>
                    <li className="planet__item">
                        <Link to="europa" className="planet__item__link">
                            europa
                        </Link>
                    </li>
                    <li className="planet__item">
                        <Link to="titan" className="planet__item__link">
                            titan
                        </Link>
                    </li>
                </ul>
                <h2 className="planet__tittle">
                    {data.name}
                </h2>
                <p className="plaent__text">
                    {data.text}
                </p>
                <hr className="planet-hr"/>
                <div className="planet__travel">
                    <div className="planet__travel__distance">
                        <h5 className="planet__travel__distance__name">
                            AVG. DISTANCE
                        </h5>
                        <h4 className="planet__travel__distance__number">
                            {data.distance}
                        </h4>
                    </div>
                    <div className="planet__travel__time">
                        <h5 className="planet__travel__distance__name">
                            Est. travel time
                        </h5>
                        <h4 className="planet__travel__distance__number">
                            {data.time}
                        </h4>
                    </div>
                </div>
            </div>
            </>}
        </div>
    </main>
  )
}

export default PlanetCard