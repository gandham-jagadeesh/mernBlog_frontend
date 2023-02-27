import { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

export default  function Createpost(){
 const  [title,settitle]        = useState("");
 const  [summary,setsummary]    = useState("");
 const  [file,setfile]          = useState("");
 const  [content,newcontent]    = useState("");
 const  [redirect,setredirect]  = useState(false);

 const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

const   formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

async  function posthandler(e){
  console.log('clicked');
    e.preventDefault();
   const   userpostdata = new FormData();
    userpostdata.append('title',title);
  userpostdata.append('summary',summary);
  userpostdata.append('file',file[0]);
  userpostdata.append('content',content);
 const response = await fetch("http://localhost:4000/post",{
    method:"POST",
    body:userpostdata,
    credentials:'include' 
 })
 if(response.ok){
  setredirect(true);
 }
}
 if(redirect){

  return <Navigate to={'/'}/>
 }
 
 return (
       <form onSubmit={posthandler} className="createpost"> 
       <input 
       type="text" 
       placeholder="title"
       value={title} 
       onChange={(e)=>{
        settitle(e.target.value);
       }}/>
       <input 
       type="text"
       placeholder="summary"
       value={summary}
       onChange={(e)=>{
        setsummary(e.target.value);
       }} />
       <input type="file" className="post file" onChange={(e)=>{setfile(e.target.files)}}
       />
     <ReactQuill value={content} onChange={(e)=>newcontent(e)} modules={modules} formats={formats}/>
       <button className="butt post">post</button>
       </form>

    )

}