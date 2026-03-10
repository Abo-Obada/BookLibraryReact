import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { category } from "../../Services/model/categoriesModel";

interface CategoryLayoutProps {
  categoryName:string
  category:category[] | undefined
}

export default function CategoryLayout({ categoryName,category }:CategoryLayoutProps) {
  const theme = useContext(ThemeContext);
  return (
 <>
    {
      /** parent*/
    }
 <div className="border border-current/20 rounded-2xl text-[1.5rem]">
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
        {category?.map(n=>(
          <li className="mt-2">{n.category_name}</li>
        ))}
    </ol>
  </div>
  </div>
</div>
 </>
   
);
}