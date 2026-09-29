import React from 'react'

const About = React.memo(({abc}) => {
  console.log('about component rendering......')
  // greet();

  let val = abc;
  console.log(val)
  
  return (
    <div>
      I'm About component
    </div>
  )
})

export default About
