import React,{useState} from 'react'
import { Link,useParams} from 'react-router-dom';
 const ComponentB= () => {
     const [url,seturl]=useState()
     const Easler =()=>{
         seturl()
         console.log(url)
     }
     const { Helloworld } = useParams();
     return(
         <div>
         <h1>ComponentB {Helloworld}</h1>
         <Link to="/">本社</Link>
        {url}
         </div>
     )
 };

export default ComponentB