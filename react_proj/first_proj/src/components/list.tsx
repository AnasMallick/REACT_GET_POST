import React, { useEffect, useState } from 'react'

export default function List() {

    const [name_list, setNameList] = useState<string[]>([]);
    const add_names = ()=>{
        let name = prompt("Enter Your Name")
        console.log(name);

        setNameList([...name_list,name!])     
        localStorage.setItem('names',JSON.stringify([...name_list , name]));
    }
  
    useEffect(()=>{
        const get_name = JSON.parse(localStorage.getItem('names')||'{}');
        if(get_name){
            setNameList(get_name);
        }
    },[])


  return (
    <div>
      <h1>List Component</h1>
      <button onClick={add_names} className='btn btn-secondary'>Click</button>
      <ul>
        {
            name_list.map((e, index)=>{
                return(
                    <li key={index}>{ e }</li>
                )
            })
        }
      </ul>
    </div>
  )
}
