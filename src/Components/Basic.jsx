//props

import { useState } from "react";

export default function Props({name='default',age=12}){

    return(
        <div>
            <h1>Welcome {name} Your age is {age}</h1>
        </div>
    )
}

export function List(){
    let array=['aaa','bbb','ccc','ddd','fff']
    let newarr=array.map(a=><li key={[a]}>{a}</li>)
    return(<ol>{newarr}</ol>)

}
export function Objlist(){
    const Products=[
        {id:1,name:'product1',price:200,imgurl:'https://images.pexels.com/photos/33448092/pexels-photo-33448092.jpeg'},
        {id:2,name:'product2',price:300,imgurl:'https://images.pexels.com/photos/34100157/pexels-photo-34100157.jpeg'},
        {id:3,name:'product3',price:400,imgurl:'https://images.pexels.com/photos/34308076/pexels-photo-34308076.jpeg'},
        {id:4,name:'product4',price:500,imgurl:'https://images.pexels.com/photos/34085266/pexels-photo-34085266.jpeg'},
    ]
    let prdetail=Products.map(p=><div key={p.id}>
        <h1>{p.name}</h1>
        <h2>{p.price}</h2>
        <img src={p.imgurl} className="w-[300px] h-[300px]" alt="product detail" />
    </div>)
  
    return(<>
    {prdetail}
    
    </>)

}
