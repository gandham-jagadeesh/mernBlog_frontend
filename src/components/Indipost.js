import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
export default function Indipost(){
 const [single,setsingle] = useState(null);
 const {user} = useContext(UserContext);
 const {id} = useParams();
 useEffect(()=>{
    async function singleposts(){
       const response =  await fetch(`http://localhost:4000/posts/${id}`);
       const docs     = await response.json();
       setsingle(docs);
    }
    singleposts();
 },[id])
 
console.log(single);
 
 if(!single){
   return ''
 }
 return (
   <div class="postpage">
   <h2>{single.title}</h2>
    <p>Author : {single.author.username}</p>
   {user.id === single.author._id && (
    <div className="edit-row">
    <Link to={`/edit/${single._id}`} className="edit-btn">edit  this post</Link>
    </div>
   )
    }
   <div className="pic_indpost" alt="color">
   <img src={`http://localhost:4000/${single.cover}` } className="Indpost" alt={"why not"} ></img>
   </div>
   <p>{single.summary}</p>
   <div dangerouslySetInnerHTML={{__html:single.content}}/>
   </div>
 )
}