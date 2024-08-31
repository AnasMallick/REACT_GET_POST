import React, { useEffect, useState } from 'react'
import { UserModel } from '../Models/user';

export default function Api_data() {

    const [data, setData] = useState<UserModel[]>([]);

    const get_api = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data)=>{
            //console.log(data)
            setData(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        get_api();

    },[])
  return (
    <div>
      <div className="container mt-3">
        <table className='table table-bordered-black'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>USERNAME</th>
                    <th>COMPANY DETAILS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{ item.id }</td>
                                <td>{ item.name }</td>
                                <td>{ item.email }</td>
                                <td>{ item.username }</td>
                                <td>
                                    <ul>
                                        <li>{item.company.name}</li>
                                        <li>{item.company.bs}</li>
                                        <li>{item.company.catchPhrase}</li>
                                    </ul>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
      </div>
    </div>
  )
}
