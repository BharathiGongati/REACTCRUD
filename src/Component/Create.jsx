import axios from "axios"
import { useState } from "react"
const Create = () => {
    let[userId,setuserId]=useState()
    let[id,setid]=useState()
    let[title,settitle]=useState()
    let[body,setbody]=useState()
    let data={userId,id,title,body}
    let submit=()=>{
        axios.post("http://localhost:1000/car",data)
        .then((res)=>{
             alert("data added succesfully")
        })
        .catch(()=>{
            alert("invalid data")
        })

    }

    return ( 
        <div>
            <form action="" onSubmit={submit}>
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
 
export default Create;