import React, {useEffect} from "react";
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';


export  interface UserModel{
    name: string;
    email: string;
    password: string;
}

export function Multiform() {

    const { addToast } = useToasts();

    const [user, userData] = React.useState<UserModel>({
        name: "",
        email: "",
        password: "",
    })
    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const { name , value } = event.target
        userData({...user, [name]: value})
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(user)

        const response = await axios.post("http://localhost:82/react_api/index.php", user).then(response => {
            console.log(response.status);
           addToast("Saved Successfully", {appearance: 'success'});
        }).catch(error => {
            console.log(error);
           addToast("Error While Register", {appearance: 'error'});
        })
    }

    return (
        <>
           <h1>ADD USER</h1>        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            id=''
            className='form-control mt-3 w-50'
            placeholder='Name'
            onChange={handleChange}
            />
            <input 
            type="text"
            name="email"
            id=''
            className='form-control mt-3 w-50'
            onChange={handleChange}
            placeholder="Email Address"
            />
            <input 
            type="password"
            name="password"
            id=''
            className='form-control mt-3 w-50'
            onChange={handleChange}
            placeholder="Password"
            />
            <button type="submit" className='btn btn-primary mt-3 w-20'>Submit</button>
            
        </form>

  
        </>
        
    )
}

