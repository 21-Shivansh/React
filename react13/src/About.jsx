import React from 'react'

const About = React.memo(() => {
  console.log('about component rendering......')
  return (
    <div>
      I'm About component
    </div>
  )
})

export default About
