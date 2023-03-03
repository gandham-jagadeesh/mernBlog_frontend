import { useState } from "react";


function Register(){
      const [username,setname]   = useState('');
      const  [password,setpass]  = useState('');
   async function handler(e){
        e.preventDefault();
    const response =  await fetch(process.env.REACT_APP_API_URL+'/register',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
     });
    if(response.status === 200){
        alert("registration sucessful");
    }
    else{
        alert("registration failed");
    } 
 }


    return (
        <form className="register" onSubmit={handler}>
        <h2>Register Page</h2>
        <input 
        type="text" 
        className="userName" 
        placeholder="username"
        value={username}
        onChange={(e)=>{
            setname(e.target.value);
        }}/>
        <input 
        type="password" 
        className="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>{
            setpass(e.target.value)
        }}
        />
        <button>register</button>
    </form>
        );
}
export default Register;