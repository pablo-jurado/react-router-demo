import React from 'react'
import { Link } from 'react-router'

function App (props) {
  return (
    <div>
      <h1>React Router</h1>
      <ul role="nav">
        <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
        <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

export default App
