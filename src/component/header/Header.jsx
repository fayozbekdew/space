//rrd
import { Link } from 'react-router-dom'
import './Header.css'

//Images
import LOGO from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
        <div className="container header-container">
            <Link to="/" className="header__logo">
                <img src={LOGO} alt="" className="header__logo__img" width="48" height="48"/>
            </Link>
            <hr className="header-hr"/>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__item__link">
                            <p className="navbar__item__link__number">00</p>
                            <p className="navbar__item__link__text">
                                HOME
                            </p>
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/planets" className="navbar__item__link">
                            <p className="navbar__item__link__number">01</p>
                            <p className="navbar__item__link__text">
                                DESTINATION
                            </p>
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/crew" className="navbar__item__link">
                            <p className="navbar__item__link__number">02</p>
                            <p className="navbar__item__link__text">
                                CREW
                            </p>
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/tehnology" className="navbar__item__link">
                            <p className="navbar__item__link__number">03</p>
                            <p className="navbar__item__link__text">
                                TECHNOLOGY
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header