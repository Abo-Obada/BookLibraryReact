import Search from "antd/es/input/Search";
import { query as bookQuery } from "../Services/query/books";
import { query as categoryQuery } from "../Services/query/category";
import DisplayBooks from "../components/ui/ShowBooks"
import CategoryLayout from "../components/layouts/CategoryLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import Spin from "antd/es/spin";
import { useState } from "react";
export default function Books() {
  const [categories, setCategories] = useState<string>("all");
  const {data:categoryData} = categoryQuery.server.category.get();
  const {data:bookData , fetchNextPage, hasNextPage} = bookQuery.server.bookCover.getCategoryBook(categories);
  const books = bookData?.pages.flatMap(p => p.data) || [];

  return (
        <div className="flex h-screen bg-white text-black dark:bg-[#0f0f13] dark:text-white overflow-hidden" dir="ltr">
            {/* Sidebar */}
            <aside dir="rtl" className="w-64 h-full border-r 
                              border-black/10 dark:border-white/10
                              bg-gray-100 dark:bg-[#13131a]
                              flex flex-col overflow-y-auto shrink-0 px-4 py-6 gap-4">

                <p className="text-xs uppercase tracking-widest 
                              text-black/40 dark:text-white/30 
                              font-semibold px-1 mb-1">
                    Categories
                </p>
                 <CategoryLayout  categoryName="حسب الراوي" category={categoryData} onCategorySelect={setCategories} key={'category-book'}/>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col h-full overflow-hidden px-8 py-6 gap-6">

                {/* Header */}
                <div className="flex items-center justify-between gap-4">

                    <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
                        📚 تصفح الكتب
                    </h1>

                    <div className="w-full max-w-md">
                        <Search
                            placeholder="Search by title, author..."
                            className="bg-white dark:bg-[#1e1e2a]"
                        />
                    </div>

                </div>

                {/* Books Grid */}
                <div className="flex-1 overflow-auto rounded-xl border 
                                border-black/10 dark:border-white/10
                                bg-gray-50 dark:bg-[#13131a] p-4">

                 <div className="flex">
                     <InfiniteScroll 
                     loader={<h4><Spin/></h4>}
                     className="grid grid-cols-5 gap-5"
                     dataLength={books.length}
                     hasMore={!!hasNextPage}
                     next={fetchNextPage}> 
                                       
                     {books.map((book) => (
                       <DisplayBooks key={'books-menu'} {...book} />
                     ))}
                  </InfiniteScroll>
                 </div>
                </div>
            </main>
        </div>
    );
}
