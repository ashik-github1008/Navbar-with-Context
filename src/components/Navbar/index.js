// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarOptionActiveClass = isDarkTheme
        ? 'navbar-list-container dark-list'
        : 'navbar-list-container'

      const navbarBg = isDarkTheme ? 'navbar-dark-bg' : 'navbar-light-bg'

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar-container ${navbarBg}`}>
          <div className="navbar-body-container">
            <div className="navbar-body-content">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
              <ul className={navbarOptionActiveClass}>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              </ul>
              {isDarkTheme ? (
                <button data-testid="theme" onClick={onClickToggleTheme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                  />
                </button>
              ) : (
                <button data-testid="theme" onClick={onClickToggleTheme}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                  />
                </button>
              )}
            </div>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
