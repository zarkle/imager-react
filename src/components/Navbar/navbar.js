import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

  render() {
    return (
      <header className="main-header">
        <h1>Welcome to Imager</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/welcome/signup">Sign-Up</Link></li>
            <li><Link to="/welcome/signin">Sign-In</Link></li>
            <li><Link to="/photo">Photos</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
