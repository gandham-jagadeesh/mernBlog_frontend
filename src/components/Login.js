import { useState } from "react";
import {Navigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
function Login(){

  const [username,setuser] = useState("");
 const [password,setpassword] = useState("");
 const  [redirect,setredirect] = useState(false);
  const {setusername} = useContext(UserContext);


 async function handler(e){
 e.preventDefault();
const response =  await fetch('http://localhost:4000/login',{
    method:'POST',
    body:JSON.stringify({username,password}),
    headers:{'Content-Type':'application/json'},
    credentials:'include',
 });

 if(response.ok){
  response.json().then(userInfo => {
    setusername(userInfo);
    setredirect(true);
  });

}
 else{
   alert("wrong credentails");
 }
}
 if(redirect){
  return <Navigate to={"/"}/> 
 }


return (
    <form className="login" onSubmit={handler}>
    <h2>Login Page</h2>
    <input type="text" 
    className="userName" 
    placeholder="username" 
    value={username} 
    onChange={(e)=>{setuser(e.target.value)}}
    />
    <input 
    type="password" 
    className="password" 
    placeholder="password" 
    value={password} 
    onChange={(e)=>{setpassword(e.target.value)}} />
    <button>Login</button>
    </form>);
 
}


export default Login;