import { Carousel, Divider, Skeleton } from "antd";
import DisplayBooks from "../../components/ui/ShowBooks";
import { carouselSwapper } from "../../Services/api/books";
import Marquee from "react-fast-marquee";
import BookLayout from "../../components/layouts/BooksLayout";
import { query as queryBooks } from "../../Services/query/books";
import { query as carouselBooks } from "../../Services/query/carousel";

import { Link } from "react-router-dom";



export default function Main() {
  const {data:dataBook,
    isFetchingNextPage:isFetchingNextPageBook,
    isPending:isPendingBook} = queryBooks.server.bookCover.getAll();
  const {data:marqueeData, isPending:isPendingMarquee } = queryBooks.server.bookCover.get();
  const {data:carouselData, isPending:isPendingCarousel} = carouselBooks.server.carousel.get();
  return (
    
    <div className="grid grid-cols-1">
      <div className="">

        <div>
                
{isPendingCarousel ? <Skeleton/> : <Carousel arrows draggable={true} autoplay effect="fade">
          {carouselData ? carouselData.map(n => (
            <div className="w-full h-[50rem] relative relative">
              <div className={`absolute inset-0 `} />

              <div className={`absolute bg-black/70 hover:pe-[50px] pe-[20px] duration-300 ease-in top-0 bottom-0 left-0 z-20 flex items-center justify-center text-white text-[1.5rem] font-semibold`}>
                <h1 className="w-100 ms-5 text-[2rem] font-black text-end text-shadow-lg ... CarouselTitle">{n.label}</h1>
              </div>

              {/* Background image */}
              <img
                src={n.image}
                className="w-full h-[50rem]"
              />
            </div>
          )) : null}
               </Carousel>}



        </div>
      </div>
      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">أجمل الكتب في الوقت الراهن</h1>
        </Divider>
      </div>

      <div className="">
        {isPendingMarquee ? (
          <Skeleton.Node style={{ width: "280px", height: "200px" }} active={true} />
        ) : (
          <>

            <div dir="ltr">
               <Marquee autoFill speed={40} pauseOnHover gradient gradientColor="rgba(248, 251, 253,0.1)">
                {marqueeData?.pages.map(n=>(
                  n.data.map(r=>(
                    <DisplayBooks key={r.book_uuid} {...r} />
                  ))
                ))}
              </Marquee>
            </div>

            <div dir="ltr" className="mt-10">
               <Marquee autoFill direction="right" speed={40} pauseOnHover gradient gradientColor="rgba(248, 251, 253,0.1)">
                {
                  marqueeData?.pages.map(n=>(
                 n.data.map(r=>
                   <DisplayBooks key={r.book_uuid} {...r} />
                 )
                ))
                }
              </Marquee>
            </div>
          </>
        )}
      </div>


      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">تصفح المزيد من الكتب</h1>
        </Divider>
      </div>

      <div className="mt-10 grid  grid-cols-1 bg-card3-Color-white/20 dark:bg-card3-Color/20 p-10">

        <div className="flex justify-center scale-90">
          {isPendingBook ? (<div className="grid gap-4 grid-cols-3 text-3xl justify-center items-center">
            {Array.from({ length: 12 }).map(n => (
              <Skeleton.Node style={{ width: "280px", height: "200px" }} active={true} />
            ))}
          </div>) :
            (
            <BookLayout height={200} cols={5} scroll="horizontal">
              {
                  dataBook?.pages.map(n=>( n.data.map(r=>
                 <>
                    <DisplayBooks key={r.book_uuid} {...r} />
                 </>
                 )
                ))
                }
            </BookLayout>)}

            

        </div>
       <div className="flex justify-center items-center">
        <div>{isFetchingNextPageBook ? "جارِ تحميل الكتب" : ""}</div>
       <Link  to={"/books"}>تصفح المزيد من الكتب</Link>
       </div>
      </div>
    </div>
  );
}