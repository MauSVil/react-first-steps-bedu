import React from 'react'
import './Nav.css'
import { Link } from '@reach/router'

function Nav(props) {
  return (
    <nav className="App-link">
      <Link to="/">StarWars API</Link>
      <Link to="posts">Posts</Link>
    </nav>
  )
}

export default Nav
