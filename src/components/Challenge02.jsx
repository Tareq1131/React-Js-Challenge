import React, {useState, useEffect} from 'react'

function Challenge02() {
    const [message, setMessage] = useState('Hello, World!');

    useEffect(() => {
      const timer = setTimeout(()=>{
        setMessage('Goodbye, World!')
      }, 5000)
      return() => clearTimeout(timer);
    }, [])
  return (
    <div>
       <h1>
        Message: {message}
        
      </h1>
    </div>
  )
}

export default Challenge02


