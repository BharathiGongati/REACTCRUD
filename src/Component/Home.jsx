import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

const Home = () => {
    let[data1,setData1]=useState([])
    let[force,setforce]=useState(0)
    let remove = (id) => {
        setforce(force+1)
        axios.delete(`http://localhost:1000/car/${id}`)
        .then((res)=>{
              alert("data deleted")
        })
        .catch((err)=>{
           alert("data not deleted")
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:1000/car")
        .then((res)=>{
           setData1(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[force])
    return ( 
        <div className='div1'>
            <h1>List of Users</h1>
            <div className='div2'>
                
                
                    {data1.map((x)=>{
                        return(
                            <div>
                                {x.userId}
                                <br />
                                {x.id}
                                <br />
                                {x.title}
                                <br />
                                {x.body}
                                <br />
                            <Link to={`/read/${x.id}`}><button>Read</button></Link>    
                            <Link ><button onClick={()=>{remove(x.id)}}>Delete</button></Link> 
                            <Link to={`/update/${x.id}`}><button>update</button></Link>  
                                <Link to="/create"><button>Add</button></Link>
                            </div>
 
                        )
                    })}
               

            </div>
        </div>
     );
}
 
export default Home;