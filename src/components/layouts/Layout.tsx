import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(){
    return(
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_5rem] min-h-[100vh] ">
    <div className="box1">
      <Header/>
    </div>
    <div className="box2">
        <Outlet/>
    </div>
    <div className="box3">
        <Footer/>
    </div>
   </div>
       
    );
}