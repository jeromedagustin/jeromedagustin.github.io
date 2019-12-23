import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hello, my name is Jerome Agustin. I am software engineer working on
            developing a software solution to help organization and track how people
            are utilizing their time, money, and energy. This solution is to make
            a simplified solution. I want people to understand that their data
            is important and should be in their hands. Everything they do should
            be controlled by them and only them. If they want to share their data,
            they can, but they should also be rewarded for the action. I am by
            no means wanting my idea to be sold to a corporate company who
            wants to harvest their data and target individuals. I want individuals
            to be free from distractions also known as advertising. I want individuals
            to be in control of the direction their lives are going. </p>
          <p>
            By the way, check out my <a href="https://github.com/theingredients">efforts to the solution</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2>Current</h2>
          <p>
          Flutter Mobile Application<br/>
        Django REST API with React Frontend<br/>
      Gatsby.js websites<br/>
          </p>
          <h2>Previous</h2>
          <p>
            Sonos
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Jerome Agustin</h3>
          <p>Born November 20 and raised in California (and haven't left)<br/>
          Computer Engineer by Cal Poly Pomona standards<br/>
          Software Test Engineer by experience @Sonos<br/>
          Software Engineer by use of Udemy.com and Google.com<br/>
          Photographer by use of Panasonic GH7 (see all photos on site)<br/>
          DJ by use of 2 Technics, DJM-S9, and Serato<br/>
          Musician by use of Native Instruments Maschine and Roland Juno-DS88<br/>
          Founder of The Ingredients<br/>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jeromedagustin"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jeromedean_theic/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeromedagustin"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
