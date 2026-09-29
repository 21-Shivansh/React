import React from 'react'

const Second = () => {
  console.log('second component rendering......')

  return (
    <div>
      I'm second component.
    </div>
  )
}

export default React.memo(Second)
