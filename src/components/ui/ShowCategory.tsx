import type { BookCategory } from "../../Services/model/bookType";

 export default function Category(category:BookCategory){
   return (
    <ol className="ms-2 pt-2 pb-2 trans  
    dark:hover:bg-white 
    dark:hover:text-black 
    hover:bg-black hover:text-white 
     hover:ps-2 hover:-translate-1
     translate transition-all duration-300">{category.categoryName}</ol>
   )
 }