import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#7c9ce5"}}>
        <nav class="navbar navbar-light ">
            <span class="navbar-brand mb-0 h1" style={{margin:"10px"}}><a href='/' style={{textDecoration:"none", color:"black"}}>Posts</a></span>
        </nav>
      </div>
    )
  }
}
