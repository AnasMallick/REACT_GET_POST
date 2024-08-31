import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

interface UsersModel {
    u_id: string;
    u_name: string;
    u_email: string;
    u_pass: string;
  }

export default function Getdata() {

  const { addToast } = useToasts();
    
    const [Users, setUsers] = useState<UsersModel[]>([]);

    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:82/react_api/get_all.php");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    useEffect(() => {
      
        getData();
      }, []);
      const deleteButton = async (u_id:string)=>{
        console.log(u_id);
        var response_delete = await axios.get('http://localhost:82/react_api/delete.php?user_id='+u_id)
        .then((res)=>{
          console.log(res.data);
          //setUsers(res.data);
          getData();
          addToast(res.data.message,{appearance:'success'});
        });
      }
  return (
    <div>
       <br />
    <div>
      <h2>All Users</h2>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Password</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => (
            <tr key={index}>
              <th scope='row'>{user.u_id}</th>
              <td>{user.u_name}</td>
              <td>{user.u_email}</td>
              <td>{user.u_pass}</td>
              <td><button className='btn btn-secondary' onClick={()=>{ deleteButton(user.u_id) }}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
