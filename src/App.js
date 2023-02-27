import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Post from './components/post';
import { UserContextProvider } from './UserContext';
import Createpost from "./components/Createpost";
import Indipost from './components/Indipost';
import Editpost from './components/editpost';
function App() {
  return (
    <UserContextProvider>
    <Routes>
     <Route path="/" element={<Header/>}>
     <Route index element={<Post/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/register" element={<Register/>}></Route> 
     <Route path='/createpost' element={<Createpost/>}></Route>
     <Route path='/posts/:id' element={<Indipost/>}></Route>
     <Route path='/edit/:id' element={<Editpost/>}></Route>
     </Route>
    </Routes> 
    </UserContextProvider>


);
}

export default App;
