import Post from './Post';
import { blogPosts } from './blogPosts';
import { useEffect, useState } from 'react';
const Resources = () => {
  const [blogList, setBlogList] = useState([]);
   
  useEffect(()=>{
    const fetchBlog = () => {
   
          fetch("http://localhost:5000/api/all/blogs")
          .then((res) => res.json())
          .then((data) => setBlogList(data.blogs))
          .catch((err) => console.log(err));

      
  };
    fetchBlog();
   },[])


    return(
      <div className="posts-container">
        {blogList.map((post, index) => (
          <Post key={index} index={index} post={post} />
        ))}
      </div>
    )
}

export default Resources;