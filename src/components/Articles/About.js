import React from 'react'

import pic01 from '../../images/pic01.jpg'

const About = props => {
  const { article, articleTimeout, close } = props

  return (
    <article
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">About</h2>
      <span className="image fit">
        <img src={pic01} alt="" />
      </span>
      <p>
        Born and raised in California.
        Computer Engineer by degree.
        Application Developer at PennyMac.
        Software Test Engineer/DevOps Engineer previously at Sonos.
        Proud owner of a husky.
        Founder of The Ingredients.
      </p>
      {close}
    </article>
  )
}

export default About
