import React from 'react'

const Button = props => {
  const { className, children, onClick } = props

  return (
    <button className="tic-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
