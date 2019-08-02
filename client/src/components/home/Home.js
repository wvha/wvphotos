import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="home md">
        <div className="hero">

          <div className="section">
            <h1>Hey! Will I am.</h1>
            <p>I'm a <Link to="/">developer</Link> and <Link to="/photos">photographer</Link> based in Los Angeles.</p>
          </div>

        </div>
      </div>
    )
  }
}
