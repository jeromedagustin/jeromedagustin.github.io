import React from 'react'
import { Link } from "gatsby"

const Work = props => {
  const { article, articleTimeout, close } = props

  return (
    <article
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Work</h2>
      <h3>Current</h3>
      <p>Application Developer at PennyMac</p>
      <h3>Previous</h3>
      <p>
        DevOps Engineer at Sonos
        <br />
        Software Development Engineer in Test at Sonos
        <br />
        Software Test Engineer Intern at Sonos
      </p>
      <h2 className="major">Side Project</h2>
      <p>
        Flutter Mobile Application
        <br />
        Django REST API with React Frontend
        <br />
        Gatsby.js websites
        <br />
        <Link to="/tone">Tone</Link>
      </p>
      {close}
    </article>
  )
}

export default Work
