import { Carousel, Divider, Skeleton } from "antd";
import DisplayBooks from "../components/ui/ShowBooks";
import { carouselSwapper } from "../Services/api/books";
import BookLayout from "../components/layouts/BooksLayout";
import { useQuery } from "@tanstack/react-query";
import { query } from "../Services/query/books";
import { type BookCover } from "../Services/model/bookModel";
import Marquee from "react-fast-marquee";


export default function Main() {
  const { data, isPending } = useQuery<BookCover[]>({
    queryKey: ['book-cover'], queryFn: query.server.bookCover.get,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
  return (

    <div className="grid grid-cols-1">
      <div className="">
        <Carousel arrows draggable={true} autoplay effect="fade">
          {carouselSwapper.map(n => (
            <div className="w-full h-[50rem] relative relative">
              {/* Blue sky overlay */}
              <div className={`absolute inset-0 `} />

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
      </div>

      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">أجمل الكتب في الوقت الراهن</h1>
        </Divider>
      </div>

      <div className="">
        {isPending ? (
          <Skeleton.Node style={{ width: "280px", height: "200px" }} active={true} />
        ) : (
          <>

            <div dir="ltr">
              <Marquee autoFill speed={40} pauseOnHover gradient gradientColor="rgba(248, 251, 253,0.1)">
                {data?.map((n) => (
                  <DisplayBooks key={n.uuid} {...n} />
                ))}
              </Marquee>
            </div>

            <div dir="ltr" className="mt-10">
              <Marquee direction="right" autoFill speed={40} pauseOnHover gradient gradientColor="rgba(248, 251, 253,0.1)">
                {data?.map((n) => (
                  <DisplayBooks key={n.uuid} {...n} />
                ))}
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
          {isPending ? (<div className="grid gap-4 grid-cols-3 text-3xl justify-center items-center">
            {Array.from({ length: 12 }).map(n => (
              <Skeleton.Node style={{ width: "280px", height: "200px" }} active={true} />
            ))}
          </div>) :
            (<BookLayout height={200} cols={5} scroll="horizontal">
              {data && data.map((n) => (
                <DisplayBooks
                  uuid={n.uuid}
                  views={n.views}
                  book_rate={n.book_rate}
                  book_name={n.book_name}
                  book_description={n.book_description}
                  book_image={n.book_image}
                  book_page_number={n.book_page_number}
                />
              ))}
            </BookLayout>)}
        </div>

      </div>
    </div>
  );
}