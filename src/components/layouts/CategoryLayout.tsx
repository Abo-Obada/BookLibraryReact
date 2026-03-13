import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { category } from "../../Services/model/categoriesModel";

interface CategoryLayoutProps {
  categoryName:string
  category:category[] | undefined,
    onCategorySelect: (category: string) => void;
}
export default function CategoryLayout({ categoryName,category, onCategorySelect }:CategoryLayoutProps) {
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
      <li>
         <button onClick={() => onCategorySelect("all")}>الكل</button>
      </li>
        {category?.map(n => (
                <li className="mt-2">
                 
                  <button onClick={() => onCategorySelect(n.category_name)}>
                    {n.category_name}
                  </button>
                </li>
              ))}
    </ol>
  </div>
  </div>
</div>
 </>
   
);
}