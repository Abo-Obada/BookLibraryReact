import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { category } from "../../Services/model/categoriesModel";
import type { SetURLSearchParams } from "react-router-dom";

interface CategoryLayoutProps {
  categoryName:string
  category:category[] | undefined,
    onCategorySelect: (category: string) => void,
    searchPrm : SetURLSearchParams
}
export default function CategoryLayout({ categoryName,category, onCategorySelect, searchPrm }:CategoryLayoutProps) {
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
         <button onClick={() => {
          onCategorySelect("all")
          searchPrm({cq : "all"})
         }}>الكل</button>
      </li>
        {category?.map(n => (
                <li className="mt-2">
                 
                  <button onClick={() => {
                    onCategorySelect(n.category_name);
                    searchPrm({cq : n.uuid});
                  }} >
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