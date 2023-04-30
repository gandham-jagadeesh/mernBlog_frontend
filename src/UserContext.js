import { createContext, useState } from "react";

export const  UserContext  = createContext({});

export const UserContextProvider = ({children})=>{
 const [user,setusername] = useState(null); 
    return(
        <UserContext.Provider value={{user,setusername}}>
        <div>
            {children}
        </div>
        </UserContext.Provider>
    )

     }
