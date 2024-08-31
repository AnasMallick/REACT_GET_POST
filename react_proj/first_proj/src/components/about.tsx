import React, { useEffect, useState } from 'react'

export default function About() {
 
  const [isButton, setIsButton] = useState<boolean>(false);
  useEffect(()=>{
    console.log("object")
  }, [isButton]
  )

  return (
    <div>
      <h1>About Page</h1>
      <br />
      {
        isButton ?       
          (
            <>
            <h1>Button True</h1>
            </>
          ):
          (
            <>
            <h1>Butto False</h1>
            </>
          )
      }
      <button onClick={ ()=>{ setIsButton(!isButton) } } className='btn btn-primary'>Click to See Result</button>
    </div>
  )
}
