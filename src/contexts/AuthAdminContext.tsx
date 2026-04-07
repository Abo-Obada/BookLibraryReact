import { createContext, type ReactNode } from "react";
import { query } from "../Services/admin/query/auth";
import type { meResponse } from "../Services/admin/model/authAdminModel";
import { Navigate } from "react-router-dom";
import Logo from "../assets/Logo3.png"



export const AuthAdminContext = createContext<meResponse | undefined >(undefined);
export function AuthAdminContextProvider({ children }: { children: ReactNode }) {
    const me = query.server.me();
     if (me.isLoading) {
        return <div className="w-screen flex-col h-screen flex border items-center justify-center"> 
        <div className="mb-5 text-6xl">جار التحميل</div> 
        <img src={Logo} className="dark:invert w-60" alt="" />
        </div>; 
    }
    

 if(me.isError)
 {
    if(me.error.response?.status == 401){
        return(
            <Navigate to="/admin/login" replace />
        )
    }
    if(me.error.response?.status == 403){
        return(
    <div className="flex justify-center items-center w-screen h-screen">
        <div>
            <div className="text-6xl">
               <span> محرم عليك دولياَ </span>
                 <span>{me.error.response.status}</span>
            </div>
           
        </div>    
    </div>
)
 }
    }
    

    
    return (
        <AuthAdminContext.Provider value={me.data}>
            {children}
        </AuthAdminContext.Provider>
    );
}