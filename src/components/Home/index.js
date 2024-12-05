// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeActiveBg = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'
        return (
          <div className={`home-bg-container ${homeActiveBg}`}>
            {isDarkTheme ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                />
                <h1>Home</h1>
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                />
                <h1>Home</h1>
              </>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
