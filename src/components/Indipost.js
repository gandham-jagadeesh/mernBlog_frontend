import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
export default function Indipost(){
 const [single,setsingle] = useState(null);
 const {user,setusername} = useContext(UserContext);
 const {id} = useParams();
 useEffect(()=>{
    async function singleposts(){
       const response =  await fetch(`${process.env.REACT_APP_API_URL}${id}`);
       const docs     = await response.json();
       setsingle(docs);
    }
    singleposts();
 },[id])
 useEffect(()=>{
  async function loggedin(){
 const response =  await fetch(process.env.REACT_APP_API_URL+"profile",{
    credentials:'include'
  })
  const data   = await response.json();
  setusername(data);
  }
  loggedin();
 },[setusername])
 console.log()
 if(!single){
   return ''
 }
 return (
   <div className="postpage">
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