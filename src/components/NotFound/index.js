// Write your code here

import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <ThemeContext.Consumer>
        {value => {
          return (
            <div className="not-found-bg-container">
              <div className="not-found-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1>Lost Your Way</h1>
                <p>we cannot seem to find the page you are looking for</p>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    </>
  )
}

export default NotFound
