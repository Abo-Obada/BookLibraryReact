import { Carousel, Divider, Skeleton, Spin } from "antd";
import DisplayBooks from "../components/ui/ShowBooks";
import { api, recentBooks } from "../Services/api/books";
import { bookCategory } from "../Services/api/books";
import { carouselSwapper } from "../Services/api/books";
import Category from "../components/ui/ShowCategory";
import CategoryLayout from "../components/layouts/CategoryLayout";
import VerticalLayout from "../components/layouts/VerticalDisplayLayout";
import BookLayout from "../components/layouts/BooksLayout";
import { useQuery } from "@tanstack/react-query";
import { query } from "../Services/query/books";
import { type BookCover } from "../Services/model/bookModel";





export default function Main() {
  const { data, isPending } = useQuery<BookCover[]>({ queryKey: ['book-cover'], queryFn: query.server.bookCover.get })
  const index = [10];
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

      <div className="mt-10 ">
        <VerticalLayout>
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
        </VerticalLayout>
      </div>

      <div className="mt-10">
        <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }}>
          <h1 className="">تصفح المزيد من الكتب</h1>
        </Divider>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-card3-Color-white/20 dark:bg-card3-Color/20 p-10">

        <div className="lg:col-span-3">
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