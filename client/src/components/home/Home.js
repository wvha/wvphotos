import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./home.css"

import Code from "../code/Code"
import Experience from "./content/Experience"
import Projects from "./content/Projects"

export default class Home extends Component {
  render() {
    return (
      <div className="home md">

        <div className="hero section">
          <div className="content">
            <h1>Hey there! I'm Will.</h1>
            <p>I'm a <a href="#experience">developer</a> and <Link to="/photos">photographer</Link> based in Los Angeles.</p>
          </div>
        </div>


        <a name="experience" />
        <div className="section">
          <Experience />
        </div>

        <a name="projects" />
        <div className="section">
          <Projects />
        </div>

        <div className="contact">
          hello
        </div>

      </div>
    )
  }
}
