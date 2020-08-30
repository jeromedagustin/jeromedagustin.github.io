import React from 'react'

const Intro = props => {
  const { article, articleTimeout, close } = props

  return (
    <article
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>
      <p>
        Hello, my name is Jerome Agustin. I am software engineer working on
        developing a software solution to help organization and track how people
        are utilizing their time, money, and energy. This solution is to make a
        simplified solution. I want people to understand that their data is
        important and should be in their hands. Everything they do should be
        controlled by them and only them. If they want to share their data, they
        can, but they should also be rewarded for the action. I am by no means
        wanting my idea to be sold to a corporate company who wants to harvest
        their data and target individuals. I want individuals to be free from
        distractions also known as advertising. I want individuals to be in
        control of the direction their lives are going.{' '}
      </p>
      <p>
        By the way, check out my{' '}
        <a href="https://github.com/theingredients">efforts to the solution</a>.
      </p>
      {close}
    </article>
  )
}

export default Intro
