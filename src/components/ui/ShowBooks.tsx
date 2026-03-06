import { Button, Rate } from "antd";
import type { BookCover } from "../../Services/model/bookModel";

function DisplayBooks(book: BookCover) {

  return (
    <div id={book.uuid} className="group  grow-0 shrink-0  relative dark:bg-cardColor-dark bg-card-Color-white  pe-10 ps-10 pt-5 rounded-2xl me-5 ms-1 transition-transform duration-300 ease-out hover:-translate-y-3">

      <h1>عدد المشاهدات {book.views}</h1>

      <div className="topCover grow-0 shrink-0 flex justify-between">
        <Rate defaultValue={book.book_rate} size="small" />
      </div>

      <img className="w-70 rounded-[10px] mt-3" src={book.book_image}  />

      <div className="mt-5">
        <h4>{book.book_name}</h4>
        <h5>المؤلف: N/A</h5>

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
        <p className="text-white mb-3 me-5 ms-5 text-[1.6rem]">{book.book_description}</p>
        <Button type="link" color="lime" variant="text">
          مراجعة
        </Button>
      </div>
    </div>
  );

}


export default DisplayBooks;