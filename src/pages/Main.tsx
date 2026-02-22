import {  PushpinOutlined, StarTwoTone } from "@ant-design/icons";
import { Button, Carousel, Divider } from "antd";


const carouselSwapper = [{
  title: "صبراً يا أماه صبراً و إن فاض الدمعي لسال الزبد",
  image: "https://www.aljazeera.net/wp-content/uploads/2020/09/BOOK-ARABIC-2.jpg?resize=1920%2C1280&quality=80",
  backdropColor: ""
},
{
  title: "جميع كتب أبن تيمية رحمه الله",
  image: "https://qawl.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-10-at-16.56.33-1024x576.jpeg",
  backdropColor: "",
},

{
  title: "فلنقرأ كل ما يصل إلى أيدينا بحذر وبعقل ناقد ، فما أكثر ما يدس لنا من سموم يراد بها هلاكنا",
  image: "https://www.aljazeera.net/wp-content/uploads/2022/12/256-2.jpg?resize=730%2C410&quality=80",
  backdropColor: "",
},
];

const recentBooks = [
  {
    bookName: "قوة عقلك الباطن",
    bookAuthor: "جوزيف ميرفي",
    views: 562342,
    rating: 5,
    imageLink: "https://m.media-amazon.com/images/I/61PqMZ0L85L.jpg"
  },
  {
    bookName: "1984",
    bookAuthor: "جورج أورويل",
    views: 22115,
    rating: 5,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  },
  {
    bookName: "الخيميائي",
    bookAuthor: "باولو كويلو",
    views: 845123,
    rating: 4,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    bookName: "رجال في الشمس",
    bookAuthor: "غسان كنفاني",
    views: 334221,
    rating: 5,
    imageLink: "https://www.kutubna.ae/cdn/shop/files/OIP_2f93509f-9aaa-4fd0-af56-9085b64a321f.jpg?v=1731501170"
  },
  {
    bookName: "عائد إلى حيفا",
    bookAuthor: "غسان كنفاني",
    views: 298115,
    rating: 5,
    imageLink: "https://diwanegypt.com/wp-content/uploads/2025/03/9789779613048.jpg"
  },
  {
    bookName: "يوتوبيا",
    bookAuthor: "أحمد خالد توفيق",
    views: 388771,
    rating: 4,
    imageLink: "https://m.media-amazon.com/images/I/41omJqSEUYL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "أرض زيكولا",
    bookAuthor: "عمرو عبد الحميد",
    views: 902114,
    rating: 5,
    imageLink: "https://upload.wikimedia.org/wikipedia/ar/0/00/%D8%BA%D9%84%D8%A7%D9%81_%D8%B1%D9%88%D8%A7%D9%8A%D8%A9_%D8%A3%D9%85%D8%A7%D8%B1%D9%8A%D8%AA%D8%A7.jpeg"
  },
  {
    bookName: "الفيل الأزرق",
    bookAuthor: "أحمد مراد",
    views: 564252,
    rating: 5,
    imageLink: "https://online.fliphtml5.com/ktqzg/udma/files/large/1.webp?1568076316"
  },
  {
    bookName: "ذاكرة الجسد",
    bookAuthor: "أحلام مستغانمي",
    views: 510334,
    rating: 5,
    imageLink: "https://shaqhaf.com/storage/media/imgs/books/book16-06-2020-07-53-35.jpg"
  },
  {
    bookName: "قواعد العشق الأربعون",
    bookAuthor: "إليف شافاق",
    views: 912553,
    rating: 4,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780241972939-L.jpg"
  }
];
  

export default function Main(){

 return (
 
    <div className="grid grid-cols-1">
      <Carousel autoplay>
           {carouselSwapper.map(n=>(
             <div className="w-full h-[50rem] relative relative">
          {/* Blue sky overlay */}
          <div className={`absolute inset-0 ${n.backdropColor}`} />

          {/* Text */}
          <div className={`absolute bg-black/70 hover:pe-[50px] pe-[20px] duration-300 ease-in top-0 bottom-0 left-0 z-20 flex items-center justify-center text-white text-[1.5rem] font-semibold`}>
            <h1 className="w-100 ms-5 text-[2rem] font-black text-end text-shadow-lg ... CarouselTitle">{n.title}</h1>
          </div>

          {/* Background image */}
          <img
            src={n.image}
            className="w-full h-[50rem]"
          />
            </div>
           ))}
      </Carousel>
     
         <Divider style={{borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : ''}}>
            <h1 className="">أجمل الكتب في الوقت الراهن</h1>
         </Divider>
     
     <div className="flex justify-center items-center">
       <Button>يمين</Button>
      <div   className="flex overflow-x-auto w-300 overflow-y-hidden justify-start gap-4 px-4 scroll-smooth snap-x snap-mandatory">
       
      {recentBooks.map(n=>(
      <div className="dark:bg-cardColor-dark bg-card-Color-white flex-shrink-0 pt-5 pr-4  pl-4 pb-5 rounded-2xl me-7 ms-7  reletive  transition-[1s] ease-in">
             <h1>عدد المشاهدات {n.views}</h1>
            <div className="topCover flex justify-between">
               <div>
                {Array.from({ length: n.rating }).map((_, i) => ( <StarTwoTone  twoToneColor={"#db9600"} />))}
               </div>
               <div>
                 <PushpinOutlined />
               </div>
            </div>
            <img className="w-50 w-50" src={n.imageLink}  />
        <div className="mt-5">
          <h4>{n.bookName}</h4>
          <h5>المؤلف: {n.bookAuthor}</h5>
            <Button type="link" color="primary" variant="text">
                مراجعة
            </Button>
        </div>
      </div>
     ))}

        </div>
        <Button>يسار</Button>
     </div>
</div>

);
}


