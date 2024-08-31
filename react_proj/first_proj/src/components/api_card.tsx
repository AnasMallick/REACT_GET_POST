import React, { useEffect, useState } from 'react'
import { CardModel } from '../Models/card';

export default function Api_card() {

    const [products, setProData] = useState<CardModel[]>([]); 

   const trimlenth = (value:string,number:number)=>{
    var trimmedString = value.substring(0, number);
    return trimmedString;
   }

    const card_api = ()=>{
        fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then((data)=>{
            //console.log(data)
            setProData(data)
        })
        .catch((err)=>{
             console.log(err)
         })
    }
    useEffect(()=>{
        card_api();
    },[])
    const pro_style = {
        width:"18rem",
        display:"inline-block", 
       
    }
  return (
    <div>
        {
            products.map((item,index)=>{
                return(
                    <div className="card" style={pro_style}>
                          <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-title">Rs. {item.price}</h6>
                            <h6 className="card-title">Category: {item.category}</h6>
                            <p className="card-text">{trimlenth(item.description,100)}</p> 
                            <h6 className="card-title">Rating Count: {item.rating.count}</h6>  
                            <h6 className="card-title">Rating Rate: {item.rating.rate}</h6>                              
                            <a href="#" className="btn btn-primary">BUY NOW</a>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
