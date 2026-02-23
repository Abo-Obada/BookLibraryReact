import {  ArrowLeftOutlined, ArrowRightOutlined, PushpinOutlined, StarTwoTone } from "@ant-design/icons";
import { Button, Carousel, Divider, Rate } from "antd";
import { useRef } from "react";


const carouselSwapper = [
  {
    title:"لا تنسوا أهل غزة من صالح الدعاء",
    image: "https://www.aljazeera.com/wp-content/uploads/2025/03/AP25061511413382-1741094092.jpg",
  }
  ,
  {
    title:"رمضان كريم. ينعاد علينا و عليكم بالصحة و العافية",
    image: "https://jamalouki.net/uploads/imported_images/uploads/article/default_article/92ba20246f2f364e6907972eaac0150a.webp",
  }
  ,
  {
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
    views: 9999999999999,
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

const bookCategory = [
  {name:"دين"},
  {name:"فلسفة"},
  {name:"تاريخ"},
  {name:"روايات"},
  {name:"قصص أطفال"},
  {name:"تفسير قرأن"},
  {name:"أحاديث"},
];

  

export default function Main(){
 const scrollRef = useRef<HTMLDivElement>(null);
 const rightClickHandle = () =>{
  if(  scrollRef.current){
      scrollRef.current.scrollLeft += 300;
  }
 }

 const leftClickHandle = () =>{
  if(  scrollRef.current){
      scrollRef.current.scrollLeft -= 300;
  }
 }
 return (
    <div className="grid grid-cols-1">
     <div className="">
       <Carousel  arrows draggable={true} autoplay  effect="fade">
           {carouselSwapper.map(n=>(
             <div className="w-full h-[60rem] relative relative">
          {/* Blue sky overlay */}
          <div className={`absolute inset-0 `} />

          {/* Text */}
          <div className={`absolute bg-black/70 hover:pe-[50px] pe-[20px] duration-300 ease-in top-0 bottom-0 left-0 z-20 flex items-center justify-center text-white text-[1.5rem] font-semibold`}>
            <h1 className="w-100 ms-5 text-[2rem] font-black text-end text-shadow-lg ... CarouselTitle">{n.title}</h1>
          </div>

          {/* Background image */}
          <img
            src={n.image}
            className="w-full h-[60rem]"
          />
            </div>
           ))}
      </Carousel>
     </div>
     
         <Divider style={{borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : ''}}>
            <h1 className="">أجمل الكتب في الوقت الراهن</h1>
         </Divider>
     
     <div  className=" flex justify-center items-center bg-card3-Color-white/20 dark:bg-card3-Color/20 p-20 gap-5 ">
      <Button onClick={rightClickHandle} shape="circle" variant="solid" color="gold"><ArrowRightOutlined/></Button>
      <div  ref={scrollRef} className="flex overflow-x-auto w-400 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-y-hidden justify-start gap-4 px-4 scroll-smooth snap-x snap-mandatory">
       
      {recentBooks.map(n=>(
      <div className="  dark:bg-cardColor-dark bg-card-Color-white hover:-translate-y-5 flex-shrink-0  rounded-2xl pe-10 ps-10 pt-5   transition-[1s] ease-in">
             <h1>عدد المشاهدات {n.views}</h1>
            <div className="topCover flex justify-between">
               <div>
                <Rate defaultValue={n.rating} size="small"/>
               </div>
               <div>
                 <PushpinOutlined />
               </div>
            </div>
            <img className="w-50 w-50 rounded-[5px]" src={n.imageLink}  />
        <div className="mt-5">
          <h4>{n.bookName}</h4>
          <h5>المؤلف: {n.bookAuthor}</h5>
            <Button type="link" color="primary" variant="text">
                مراجعة
            </Button>
        </div>

        <div className="relative">
          wdad
        </div>
      </div>
     ))}

        </div>
        <Button onClick={leftClickHandle} variant="solid" shape="circle" color="gold"><ArrowLeftOutlined/></Button>
     </div>

     <div className="mt-10">
          <Divider style={{borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : ''}}>
            <h1 className="">تصفح المزيد من الكتب</h1>
         </Divider> 
     </div>




     <div className="allBooks grid grid-cols-[100rem_15rem] justify-center bg-card3-Color-white/20 dark:bg-card3-Color/20 p-10">
     
      <div className="grid grid-cols-5 gap-5 overflow-y-auto h-200 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
     
    {recentBooks.map(n=>(
      <div className=" dark:bg-cardColor-dark hover:-translate-y-3 bg-card-Color-white flex-shrink-0 pe-10 ps-10 pt-5  rounded-2xl me-5 ms-1  transition-[1s] ease-in">
             <h1>عدد المشاهدات {n.views}</h1>
            <div className="topCover flex justify-between">
               <div>
                <Rate defaultValue={n.rating} size="small"/>
               </div>
               <div>
                 <PushpinOutlined />
               </div>
            </div>
            <img className="w-70 w-70 rounded-[5px]" src={n.imageLink}  />
        <div className="mt-5">
          <h4>{n.bookName}</h4>
          <h5>المؤلف: {n.bookAuthor}</h5>
            <Button type="link" color="primary" variant="text">
                مراجعة
            </Button>
        </div>
      
      </div>
    
    
    ))}      
      <div></div>
     <div></div>
     <Button className="w-30" variant="solid" color="geekblue" >عرض الكل </Button>
     
     </div>
     <div className="bookCategory bg-card2-Color-purple  ">
      <div className="title mt-2 ms-2 ">
       <h1 className="text-[2rem] mt-2 "> تصنيف الكتب</h1>
      </div>
      <Divider style={{borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : ''}}/>
      <div className="">
        <li className="list-none">
          {bookCategory.map(n=>(
            <ol className="ms-2 pt-2 pb-2 trans  hover:bg-purple-Color hover:ps-2 hover:-translate-1 translate transition-all duration-300">{n.name}</ol>
          ))}
        </li>
      </div>
     </div>
     </div>
</div>


);
}


