import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-inner'>
          <div className='header-left'>
            <div className='header-logo'>
              <Link to='/'>Be.Pro</Link>
            </div>
            <nav className='header-nav'>
              <ul className='header-nav-links'>
                <li className='header-nav-item'>
                  <Link to='/'>home</Link>
                </li>
                <li className='header-nav-item'>
                  <Link to='/shop'>shop</Link>
                </li>
                <li className='header-nav-item'>
                  <Link to='/portfolio'>portfolio</Link>
                </li>
                <li className='header-nav-item'>
                  <Link to='/page'>page</Link>
                </li>
                <li className='header-nav-item'>
                  <Link to='/blog'>blog</Link>
                </li>
                <li className='header-nav-item'>
                  <Link to='/elements'>elements</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='header-right'>
            <div className='header-auth'>
              <div className='header-auth-login header-auth__item'>log in</div>
              <div className='header-auto-signUp header-auth__item'>
                sign up
              </div>
            </div>
            <div className='header-icons'>
              <div className='header-cart__icon header-icons__item'>
                <img src='img/icons/cart.png' alt='cart' />
                <p>2</p>
              </div>
              <div className='header-search__icon header-icons__item'>
                <img src='img/icons/search.png' alt='search' />
              </div>
            </div>
            <div
              className={`burger-menu ${isBurgerActive ? "close" : ""}`}
              onClick={() => setIsBurgerActive(!isBurgerActive)}></div>
          </div>
        </div>
      </div>
      <aside className={`header-aside ${isBurgerActive ? "active" : ""}`}>
        <nav className='header-nav mobile'>
          <ul className='header-nav-links'>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/'>home</Link>
            </li>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/shop'>shop</Link>
            </li>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/portfolio'>portfolio</Link>
            </li>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/page'>page</Link>
            </li>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/blog'>blog</Link>
            </li>
            <li
              className='header-nav-item'
              onClick={() => setIsBurgerActive(!isBurgerActive)}>
              <Link to='/elements'>elements</Link>
            </li>
          </ul>
        </nav>
        <div className='header-auth mobile'>
          <div className='header-auth-login header-auth__item'>log in</div>
          <div className='header-auto-signUp header-auth__item'>sign up</div>
        </div>
      </aside>
      <div
        className={`burger-overlay ${isBurgerActive ? "active" : ""}`}
        onClick={() => setIsBurgerActive(!isBurgerActive)}></div>
    </header>
  )
}

export default Header
