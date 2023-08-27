import { Link } from 'react-router-dom'
import './Crew.css'

const Crew = ({ data }) => {
  return (
    <div className='crews'>
         <main className="main">
        {data && 
        <div className="container crew">
        <div className="crew__info">
            <div className="crew__info__text">
                    
                <p className="crew__info__text__number">
                {data.number}
                </p>
                <p className="crew__info__text__name">
                    meet your crew
                </p>
            </div>
            <h4 className="crew__info__top__text">
                {data.position}
            </h4>
            <h2 className="crew__info__tittle">
                {data.name}
            </h2>
            <p className="crew__info__bottom__text">
                {data.info}
            </p>
            <ul className='crew-nav'>
                <Link to='hurley' className='crew-nav-item'></Link>
                <Link to='mark' className='crew-nav-item'></Link>
                <Link to='victor' className='crew-nav-item'></Link>
                <Link to='ansari' className='crew-nav-item'></Link>
            </ul>
        </div>
        <div className={`crew__img__${data.className}`}>
            
        </div>
    </div>
        }
    </main>
    </div>
  )
}

export default Crew