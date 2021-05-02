import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-inner'>
          <div className='footer-item'>
            <div className='footer-logo'>
              <Link to='/'>ModaX</Link>
            </div>
            <ul className='footer-links'>
              <li className='footer-links__item'>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li className='footer-links__item'>
                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li className='footer-links__item'>
                <a
                  href='<i class="fab fa-behance"></i>'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-behance'></i>
                </a>
              </li>
              <li className='footer-links__item'>
                <a
                  href='https://dribbble.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li className='footer-links__item'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <nav className='footer-nav'>
              <ul className='footer-nav__inner'>
                <li className='footer-nav__item'>
                  <Link to='/catalog'>man</Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='/catalog'>woman</Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='/catalog'>lookbook</Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='/catalog'>sale</Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='/catalog'>blog</Link>
                </li>
              </ul>
            </nav>
            <form className='footer-form'>
              <label htmlFor='subscribe'>Subscribe to news</label>
              <div className='footer-form-inner'>
                <input
                  type='email'
                  placeholder='Email Adrress'
                  id='subscribe'
                />
                <input type='submit' value='Submit' className='btn-common' />
              </div>
            </form>
          </div>
          <div className='footer-item footer-contact'>
            <h3 className='footer-contact__title'>contact us</h3>
            <p className='footer-contact__para'>
              San Francisco, California
              <br />
              400 Castro St, San Francisco, CA <br />
              (+1) 686-868-9999
            </p>
            <div className='footer-contact__cards'>
              <img src='img/cards/1.png' alt='card' />
              <img src='img/cards/2.png' alt='card' />
              <img src='img/cards/3.png' alt='card' />
              <img src='img/cards/4.png' alt='card' />
              <img src='img/cards/5.png' alt='card' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
