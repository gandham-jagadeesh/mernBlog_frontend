import { useEffect,useState} from "react";
import Blog from "./blogposts";
function  Post(){
 const [posts,setposts]=useState([]);
 useEffect(()=>{
 async function allposts(){
      const userposts = await fetch(process.env.REACT_APP_API_URL+"post");
      const posts_ = await userposts.json();
      setposts(posts_);
}
      allposts();
},[]) 

 return(
  <>{
      posts.length > 0 && posts.map(post=>{
            return <Blog  key={post._id}{...post}/>
      })
  }
  </>
 );

}






export default Post;