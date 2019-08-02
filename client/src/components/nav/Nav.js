import React, { Component } from "react"
import "./nav.css"
import { Link } from "react-router-dom"

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="navbar">
        <div id="bar" />
        
        <div className="navbar-div">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/photos"><li>Photos</li></Link>
          </ul>

          <ul style={{float: "right"}}>
            {/* <a href="https://github.com/wvha" target="_blank"><li>Github</li></a> */}
            <a href="mailto:wvha17@gmail.com"><li>Email</li></a>
            <a href="https://linkedin.com/in/wvha17" target="_blank"><li>LinkedIn</li></a>
          </ul>

        </div>

      </div>
    )
  }


}
