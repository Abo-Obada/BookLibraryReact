import { Button, Rate } from "antd";
import type { BookDesc } from "../../Services/model/bookType";

 function DisplayBooks(book:BookDesc ){

return(
<div id={book.id} className="group relative dark:bg-cardColor-dark bg-card-Color-white flex-shrink-0 pe-10 ps-10 pt-5 rounded-2xl me-5 ms-1 transition-transform duration-300 ease-out hover:-translate-y-3">

  <h1>عدد المشاهدات {book.views}</h1>

  <div className="topCover flex justify-between">
    <Rate defaultValue={book.rating} size="small" />
  </div>

  <img className="w-70 rounded-[10px] mt-3" src={book.imageLink}/>

  <div className="mt-5">
    <h4>{book.bookName}</h4>
    <h5>المؤلف: {book.bookAuthor}</h5>
   
  </div>
  <div
    className="
      absolute inset-0
      flex flex-col items-center justify-center
      bg-black/60 backdrop-blur-sm
      opacity-0 pointer-events-none
      group-hover:opacity-100 group-hover:pointer-events-auto
      transition-all duration-300
      rounded-3xl
    "
  >
    <p className="text-white mb-3 me-5 ms-5 text-[1.6rem]">{book.description}</p>
    <Button type="link" color="lime" variant="text">
                مراجعة
            </Button>
  </div>
</div>
);
   
}


export default DisplayBooks;