import React from 'react'
import { Link } from '@reach/router'

const PostNav = props => (
  <nav className="App-link second">
    <Link to="./">List</Link>
    <Link to="create">Create</Link>
  </nav>
)

export default PostNav
