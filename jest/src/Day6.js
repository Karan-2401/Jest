import React, { useState } from 'react'

const Day6 = () => {
    const [state,setState] = useState()
  return (
    <div>
        <input type='text' value={state} onChange={(e)=>{setState(e.target.value)}}/>
    </div>
  )
}

export default Day6