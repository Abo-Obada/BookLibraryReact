import type { BookContentResponse } from "../../Services/model/bookModel";
import { Rate } from "antd";



type CardProps = {
  book:BookContentResponse  | undefined,
  title:string
}
export default function CardLayout({book,title}:CardProps){
  
    return(
        <div className="border border-current/20 rounded-2xl flex items-center flex-col">
          <div className="mt-2 mb-2">
            <h1>{title}</h1>
          </div>
          <div className="mb-2">
            <img className="rounded-2xl w-70 h-100" src={book?.get_book.book_image} alt="" />
          </div>
          <div className="flex justify-around gap-20 mt-10 mb-10">
            <ol>
              <li className="mt-2">أسم الكتاب</li>
              <li className="mt-2">أسم الكاتب</li>
              <li className="mt-2">عدد الصفحات</li>
              <li className="mt-2">تقيم الكتاب</li>
              <li className="mt-2">عدد المشاهدات</li>
            </ol>
            <ol>
              <li className="mt-2">{book?.get_book.book_name}</li>
              <li className="mt-2">{book?.get_book_author.author_name}</li>
              <li className="mt-2">{book?.get_book.book_page_number} صفحة</li>
               <li className="mt-2"><Rate value={book?.get_book.book_rate} size={"small"}/></li>
              <li className="mt-2">{book?.get_book.views}</li>
            </ol>
          </div>
        </div>
    )
}





