import React from 'react'
import PropTypes from 'prop-types'

const Note = props => {
  const { note, scale } = props
}

Note.propTypes = {
  note: PropTypes.oneOf(['A', 'A#, B, C, C#, D, D#, E, F, F#, G, G#']),
}
