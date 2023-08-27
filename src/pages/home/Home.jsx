import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div >
        <main className='home'>
        <div className="container main-container ">
            <div className="main__info">
                <p className="main__info__text__top">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className="main__info__tittle">
                    SPACE
                </h1>
                <p className="main__info__text__bottom">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <Link to='/planets' className="main__img">
                <h3 className="main__img__text">
                    exsplore
                </h3>
            </Link>
        </div>
    </main>
    </div>
  )
}

export default Home