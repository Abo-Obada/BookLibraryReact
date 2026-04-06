import { createContext,  type ReactNode } from "react";
import { query } from "../Services/admin/query/auth";
import Logo from "../assets/Logo3.png"
import { Navigate } from "react-router-dom";


const ProtectLoginContext = createContext<null | string>(null);
export default function ProtectLoginContextProvider({children} : {children: ReactNode}){

    const me = query.server.me();
    if (me.isLoading) {
        return <div className="w-screen flex-col h-screen flex  items-center justify-center"> 
        <div className="mb-5 text-6xl">جار التحميل</div> 
        <img src={Logo} className="dark:invert w-60" alt="" />
        </div>; 
    }
    
     if (me.data != undefined && me.data.role.length != 0) {
         console.log(me.data?.role.length);
         return <Navigate to="/admin" replace />;
     }

return(
    <ProtectLoginContext.Provider value={""}>
    {children}
</ProtectLoginContext.Provider>
)
}
