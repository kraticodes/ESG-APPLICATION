import { useParams } from "react-router-dom";
import { blogPosts } from './blogPosts';

const OneResource = () => {
    let idx = useParams().id;
    console.log("oUr id", idx);
    const result = blogPosts.filter((data) => {
        console.log(data.id);
        if (data.id == idx){
            return true;
        } else {
            return false;
        }
    });
    console.log(result);

    return(
      <>
          <h3>{result[0].title}</h3>
          {/* <img className="image" src={result[0].imgUrl} alt="post" width="400px" /> */}
          <p>{result[0].body}</p>
          <p>{result[0].body}</p>
          <p>{result[0].body}</p>
        <div className="info">	
            <h4>Written by: {result[0].author}</h4>
        </div>
      </>
    )
}

export default OneResource;