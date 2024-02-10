import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Read.css"
const Read = () => {
    
    
    let param=useParams()
    let[userId,setuserId]=useState()
    let[id,setid]=useState()
    let[body,setbody]=useState()
    let[title,settitle]=useState()

    useEffect(()=>{
        axios.get(`http://localhost:1000/car/${param.id}`)
        .then((res)=>{
          setuserId(res.data.userId)
          console.log(res.data);
          setid(res.data.id)
          
          setbody(res.data.body)
          settitle(res.data.title)
        })
        .catch((err)=>{
            console.log(err);
           alert("invalid")
        })

    },[])
        
    
    return ( 
        <div className="read">
          
          <form action="" >
                <label htmlFor="">
                userId : <input type="number" value={userId} onChange={(e)=>{setuserId(e.target.value)}} />
                </label>
                <br />
                <label htmlFor="">
                Id : <input type="number" value={id} onChange={(e)=>{setid(e.target.value)}} />
                </label>
                <br />
                <label htmlFor="">
                Title : <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} />
                </label>
                <br />
                <label htmlFor="">
                Body : <input type="text" value={body} onChange={(e)=>{setbody(e.target.value)}} />
                </label>
                <br />
                <button>Submit</button>
            </form>
          
       </div>
       
     );
}
 
export default Read;