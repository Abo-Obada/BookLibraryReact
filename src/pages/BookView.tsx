import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import CardLayout from "../components/layouts/CardLayout";
import BookContentLayout from "../components/layouts/BookContentLayout";

const book = {
  bookName: "قوة عقلك الباطن",
  bookAuthor: "جوزيف ميرفي",
  authorNationality: "إيرلاندي",
  releaseDate: "غير معروف",
  views: 242452,
  rating: 5,
  imageLink: "https://m.media-amazon.com/images/I/61PqMZ0L85L.jpg",
};  

const bookInfo = [
  { label: "أسم الكتاب", value: book.bookName },
  { label: "أسم الراوي", value: book.bookAuthor },
  { label: "جنسية الراوي", value: book.authorNationality },
  { label: "تاريخ إصدار الكتاب", value: book.releaseDate },
  { label: "عدد المشاهدات", value: book.views },
];

const book2 = [{title: "عن الراوي",value:"..........."}]

export default function BookView(){
     const theme = useContext(ThemeContext);
    return(
        <div className="grid grid-cols-[auto_23rem] m-20">
            <div className="box1">
                <BookContentLayout bookData={book2} />
            </div>
            <div className="box2">
                <CardLayout rating={book.rating} bookInfo={bookInfo} image={book.imageLink} title="معلومات سريعة عن الكتاب"/>
            </div>
        </div>
    )
}