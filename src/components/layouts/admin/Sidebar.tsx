    import { useContext } from "react"
import Logo from "../../../assets/Logo3.png"
import { ThemeContext } from "../../../contexts/ThemeContext";
import { authContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
export default function Sidebar(){
    const theme = useContext(ThemeContext);
    const auth = useContext(authContext);
    const links = [
        {name:"الكتب",to:"/admin/books"},
        {name:"التصنيف",to:"/admin/category"},
        {name:"المؤلفون",to:"/admin/category"},
    ];
    return (
        <>
            <div className="mt-10 flex flex-row justify-between ">
                <img src={Logo} className={`w-30 ${theme?.theme == "dark" ? 'w-30 invert' : ''}`} alt="" />
            </div>
            
            <div className="flex self-start mt-10 ms-5">
            <ol>
                {links.map(x=>{

                    return(
                        <li className="
                        hover:bg-card2-Color-purple 
                       
                        transition-all 
                        duration-500 pe-10 pt-5 pb-5 ps-2
                        hover:duration-0 
                        mt-2 
                        rounded-1xl
                        hover:ps-10
                        "
                        >
                           <Link to={x.to}>
                           { x.name}
                           </Link>
                        </li>
                    )
                })}
            </ol>
            </div>
            <div className="mt-auto mb-10">{auth?.data?.email}</div>
        </>
    )
}