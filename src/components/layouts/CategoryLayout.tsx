import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

interface CategoryLayoutProps {
  categoryName:string

}

export default function CategoryLayout({ categoryName }:CategoryLayoutProps) {
  const theme = useContext(ThemeContext);
  return (
 <>
    {
      /** parent*/
    }
 <div className="border border-current/20 rounded-2xl text-2xl">
  <div>
    {
      /**sub-parent */
    }
  <div className="m-3">
    {
      /** header*/
    }
  <div className="mb-10">
    <h1>{categoryName}</h1>
  </div>

    <ol>
    <li className={`${theme?.theme == "dark" ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} w-110 transition-all` }><Link to={"/"}></Link></li>
    </ol>
  </div>
  </div>
</div>
 </>
   
);
}