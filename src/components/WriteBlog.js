import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const WriteBlog = () => {
    
    const [title,setTitle] = useState();
    const [body, setBody] = useState();
   const {user} = useAuthContext();
   

   const createThread = async() => {
    await fetch("http://localhost:5000/api/create/blog", {
        method: "POST",
        body: JSON.stringify({
            title:title,
            body:body,
            author: user.user.name,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
        })
        .catch((err) => console.log(err));
};

   const handleSubmit= (e) => {
     e.preventDefault();
     createThread();
        setBody("");
        setTitle("");
     
   }

    return(
        <form onSubmit={handleSubmit}>
        <h3 style={{textAlign:"center", marginTop:"20px"}}>Share Experience / Write Article to spread Knowledge</h3>
        <div className='form-control'>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
          />
        </div>

        <div className="mb-3">
          <label>Body</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Enter"
            onChange={(e) => setBody(e.target.value)}
            value = {body}
          />
        </div>

        <div className="d-grid">
        <button  style={{backgroundColor:"#03A9F4", border:"none", color:"White", padding:"8px", width:"500px", marginLeft:"auto", marginRight:"auto"}}>Submit</button>
            
        </div>
        </div>
      </form>
    )
}

export default WriteBlog;