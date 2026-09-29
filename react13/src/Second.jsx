import React from 'react'

const Second = ({secondGreet}) => {
  console.log('second component rendering......')

  secondGreet()

  return (
    <div>
      I'm second component.
    </div>
  )
}

export default React.memo(Second)
