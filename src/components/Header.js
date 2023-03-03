import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
function Headers(){
  const {user,setusername} = useContext(UserContext);
 useEffect(()=>{
  async function loggedin(){
 const response =  await fetch(process.env.REACT_APP_API_URL+"/profile",{
    credentials:'include'
  })
  const data   = await response.json();
  setusername(data);
  }
  loggedin();
 },[setusername])
  function Logout(){
  fetch(process.env.REACT_APP_API_URL+"/logout",{
    credentials:'include',
    method:'POST'
  });
  setusername(null);

}


  const name = user?.username
  return(
    <main>
    <header>
    <Link to="/" className="logo" >Myblog</Link>
    <nav>
    {name&&
    (
      <>
      <span>Hello {name}</span>
      <Link to={"/createpost"}>newpost</Link>
      <Link to={"/"} onClick={Logout}>logout</Link>
     </>
    )}
    {!name&& (<>
    <Link to="/login"className="login">login</Link>
    <Link to="/register" className="register">register</Link></>)}
    </nav>
    </header>
    <Outlet/>
    </main>
    );
}


export default Headers;