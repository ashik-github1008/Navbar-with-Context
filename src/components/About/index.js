// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const aboutActiveBg = isDarkTheme ? 'about-dark-bg' : 'about-light-bg'
        return (
          <div className={`about-bg-container ${aboutActiveBg}`}>
            {isDarkTheme ? (
              <>
               <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1>About</h1>
              </>
            ) : (
              <>
               <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1>About</h1>
              </>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
