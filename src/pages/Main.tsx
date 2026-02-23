import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Carousel, Divider, Rate } from "antd";
import { useRef } from "react";
import DisplayBooks from "../components/ui/ShowBooks";
import { recentBooks } from "../models/api/books";
import { bookCategory } from "../models/api/books";
import { carouselSwapper } from "../models/api/books";



export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rightClickHandle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  }

  const leftClickHandle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  }
  return (
    <div className="grid grid-cols-1">
      {
        /** Carosel*/
      }
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
      {
        /** Divider*/
      }
       <div className="mt-10">
      <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
        <h1 className="">أجمل الكتب في الوقت الراهن</h1>
      </Divider>
      </div>
      <div className=" flex justify-center items-center bg-card3-Color-white/20 dark:bg-card3-Color/20 p-20 gap-5 ">
        <Button onClick={rightClickHandle} shape="circle" variant="solid" color="gold"><ArrowRightOutlined /></Button>
        <div ref={scrollRef} className="flex overflow-x-auto w-400 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-y-hidden justify-start gap-4 px-4 scroll-smooth snap-x snap-mandatory">

          {//** Display most popular Books */ 
          }
          {recentBooks.map((n,id) => (
            <DisplayBooks id={id.toString()} views={n.views} rating={n.rating} bookName={n.bookName} bookAuthor={n.bookAuthor} description={n.description} imageLink={n.imageLink} />
          ))}

        </div>
        <Button onClick={leftClickHandle} variant="solid" shape="circle" color="gold"><ArrowLeftOutlined /></Button>
      </div>

      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">تصفح المزيد من الكتب</h1>
        </Divider>
      </div>

      <div className=" grid grid-cols-[100rem_15rem] justify-center bg-card3-Color-white/20 dark:bg-card3-Color/20 p-10">

        <div className="grid grid-cols-5 gap-5 overflow-y-auto h-200 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">

          {recentBooks.map((n, id) => (
            <DisplayBooks id={id.toString()} views={n.views} rating={n.rating} bookName={n.bookName} bookAuthor={n.bookAuthor} description={n.description} imageLink={n.imageLink} />
          ))}
          <div></div>
          <div></div>
          <Button className="w-30" variant="solid" color="geekblue" >عرض الكل </Button>

        </div>
        <div className="bookCategory bg-black/2 dark:bg-black/20 rounded-2xl ">
          <div className="title mt-2 ms-2 ">
            <h1 className="text-[2rem] mt-2 "> تصنيف الكتب</h1>
          </div>
          <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }} />
          <div className="">
            <li className="list-none">
              {bookCategory.map(n => (
                <ol className="ms-2 pt-2 pb-2 trans  dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white  hover:ps-2 hover:-translate-1 translate transition-all duration-300">{n.name}</ol>
              ))}
            </li>
          </div>
        </div>
      </div>
    </div>


  );
}