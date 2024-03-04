// import React from 'react'
import React, {useRef, useState} from 'react'

function Counter() {
    const counterRef = useRef(0);
    const handleClick = ()=>{
        counterRef.current += 1;
        setForceRender({});
    }
    const [, setForceRender] = useState({})
  return (
    <div>
       <h1>
            {counterRef.current}
        </h1>
        <button onClick={handleClick}>
            Increment
        </button>
    </div>
  )
}

export default Counter
