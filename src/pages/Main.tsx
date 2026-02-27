import {  Carousel, Divider } from "antd";
import DisplayBooks from "../components/ui/ShowBooks";
import  { recentBooks } from "../Services/api/books";
import { bookCategory } from "../Services/api/books";
import { carouselSwapper } from "../Services/api/books";
import Category from "../components/ui/ShowCategory";
import CategoryLayout from "../components/layouts/CategoryLayout";
import VerticalLayout from "../components/layouts/VerticalDisplayLayout";
import BookLayout from "../components/layouts/BooksLayout";



  

export default  function Main() {
  

  return (
    <div className="grid grid-cols-1">
      
      <div className="">
        <Carousel arrows draggable={true} autoplay effect="fade">
          {carouselSwapper.map(n => (
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

       <div className="mt-10">
      <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
        <h1 className="">أجمل الكتب في الوقت الراهن</h1>
      </Divider>
      </div>
     
     <div className="mt-10 ">
       <VerticalLayout>
       {recentBooks.map((n, id) => (
            <DisplayBooks id={id.toString()} views={n.views} rating={n.rating} bookName={n.bookName} bookAuthor={n.bookAuthor} description={n.description} imageLink={n.imageLink} />
          ))}
       </VerticalLayout>
     </div>

      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">تصفح المزيد من الكتب</h1>
        </Divider>
      </div>

    <div className="mt-10 grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-card3-Color-white/20 dark:bg-card3-Color/20 p-10">
  
  <div className="lg:col-span-3">
    <BookLayout height={200} cols={5}  scroll="horizontal">
      {recentBooks.map((n, id) => (
        <DisplayBooks 
          id={id.toString()} 
          views={n.views} 
          rating={n.rating} 
          bookName={n.bookName} 
          bookAuthor={n.bookAuthor} 
          description={n.description} 
          imageLink={n.imageLink} 
        />
      ))}
    </BookLayout>
  </div>

  <div className="lg:col-span-1 space-y-5">
    <CategoryLayout categoryName="تصنيف الكتب">
      {bookCategory.map((n, index) => (
        <Category key={index} id={index.toString()} categoryName={n.name} />
      ))}
    </CategoryLayout>

    <CategoryLayout categoryName="حسب الراوي">
      {bookCategory.map((n, index) => (
        <Category key={index} id={index.toString()} categoryName={n.name} />
      ))}
    </CategoryLayout>
  </div>

    </div>
    </div>
  );
}