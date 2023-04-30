import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Editpost(){
    const {id} = useParams();
    const  [title,settitle]        = useState("");
    const  [summary,setsummary]    = useState("");
    const  [file,setfile]          = useState("");
    const  [content,newcontent]    = useState("");
    const  [redirect,setredirect]  = useState(false);
    useEffect(()=>{
        async function singleposts(){
           const response =  await fetch(`${process.env.REACT_APP_API_URL}post/${id}`);
           console.log(response);
           const docs     = await response.json();
          settitle(docs.title);
          setsummary(docs.summary);
          newcontent(docs.content);
        }
        singleposts();
     },[id])
     

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
 
   

async function edithandler(ev){
    ev.preventDefault();
    const userpostdata = new FormData();
    userpostdata.append('title',title);
    userpostdata.append('summary',summary);
    userpostdata.append('id',id);
    if(file[0]){
    userpostdata.append('file',file[0]);
    }
    userpostdata.append('content',content);
   const response =  await fetch(process.env.REACT_APP_API_URL+"post",{
        method:'PUT',
        body:userpostdata,
        credentials:'include',
    });
if(response.ok){
setredirect(true);
}

}
 
if(redirect){

    return <Navigate to={'/posts/'+id}/>
 }
       return (
             <form onSubmit={edithandler} className="createpost"> 
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