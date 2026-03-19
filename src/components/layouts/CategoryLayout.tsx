import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { category } from "../../Services/model/categoriesModel";
import type { SetURLSearchParams } from "react-router-dom";
import type { Author } from "../../Services/model/authorModel";

interface CategoryLayoutProps {
  categoryName:string
  category?:category[] | undefined,
    onCategorySelect: (category: string) => void,
    searchPrm : SetURLSearchParams,
    currentCategory: string | null,
  categoryAuthor?: Author[] | undefined
}
export default function CategoryLayout({ categoryName,category, onCategorySelect, searchPrm, currentCategory, categoryAuthor }:CategoryLayoutProps) {
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
      {category?  
      <li className="mt-2
  transition-all duration-1500

  hover:bg-blue-300 rounded-2xl p-2
  hover:duration-0 ">
         <button className={currentCategory == "all" ? "bg-blue-300 p-2 rounded-2xl" : undefined} onClick={() => {
          onCategorySelect("all")
          searchPrm({cq : "all"})
         }}>الكل</button>
      </li>: ""}
        {category?.map(n => (
                <li className="mt-2
  transition-all duration-1500

  hover:bg-blue-300 rounded-2xl p-2
  hover:duration-0  ">
                 
                  <button className={currentCategory == n.uuid ? "bg-blue-300 p-2 rounded-2xl" : undefined } onClick={() => {
                    onCategorySelect(n.category_name);
                    searchPrm({cq : n.uuid});
                  }} >
                    {n.category_name}
                  </button>
                </li>
              ))}

        {categoryAuthor?.map(n => (
                <li className="mt-2
  transition-all duration-1500

  hover:bg-blue-300 rounded-2xl p-2
  hover:duration-0  ">
                 
                  <button className={currentCategory == n.uuid ? "bg-blue-300 p-2 rounded-2xl" : undefined } onClick={() => {
                    onCategorySelect(n.uuid);
                    searchPrm({cq : n.uuid});
                  }} >
                    {n.author_name}
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