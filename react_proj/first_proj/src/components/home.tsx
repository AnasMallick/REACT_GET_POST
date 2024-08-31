import React, { useState } from 'react'

export default function Home(this: any) {

    const [value, setValue] = useState(100);

    const inc_data = ()=>{
        setValue(value+1);
    }

    const dec_data = ()=>{
        setValue(value-1);
    }
    
  return (
    <div>
      <h1>Home Page</h1>
      <p>{ value }</p>
      <button className='btn btn-secondary w-20' onClick={inc_data}>Click to Increase</button><br />
      <button className='btn btn-danger mt-3 w-20' onClick={dec_data}>Click to Decrease</button>
    </div>
  )
}
