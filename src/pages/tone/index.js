import React from 'react'
import { Button } from '../../components/elements'

const ToneMain = props => {
  return (
    <>
      <h1>This is Tone Main!</h1>
      <Button onClick={() => console.log('Button pressed')}>Tone!</Button>
    </>
  )
}
export default ToneMain
