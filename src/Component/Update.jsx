import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Update = () => {
    let param=useParams()
    let[userId,setuserId]=useState()
    let[id,setid]=useState()
    let[body,setbody]=useState()
    let[title,settitle]=useState()
    let data={userId,id,body,title}

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
    let Submited=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:1000/car/${param.id}`,data)
        .then((res)=>{
            alert("Data updated successfully");

        })
        .catch((err)=>{
            alert("Data not updated");
        })
    }

        
    
    return ( 
        <div>
           <div className="read">
          
          <form action=""  onSubmit={Submited}>
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
       
        </div>
     );
}
 
export default Update;