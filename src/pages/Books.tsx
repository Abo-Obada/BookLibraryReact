import Search from "antd/es/input/Search";
import { query as bookQuery } from "../Services/query/books";
import { query as categoryQuery } from "../Services/query/category";
import {query as authorQuery} from "../Services/query/author";
import DisplayBooks from "../components/ui/ShowBooks"
import CategoryLayout from "../components/layouts/CategoryLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import Spin from "antd/es/spin";
import {  useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Books() {

  const [SearchParam, setSearchParam] = useSearchParams();

  const query = SearchParam.get('cq');
  const [categories, setCategories] = useState<string>(query !== null ? query : "all");
  const {data:categoryData} = categoryQuery.server.category.get();
  const {data:authorData} = authorQuery.server.author.get();
  const {data:bookData , fetchNextPage, hasNextPage, isPending} = bookQuery.server.bookCover.getCategoryBook(categories);
  const books = bookData?.pages.flatMap(p => p.data) || [];
    
  if(query){
  }
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
                 <CategoryLayout categoryName="حسب التصنيف" category={categoryData}  onCategorySelect={setCategories} currentCategory={query} searchPrm={setSearchParam} key={'category-book'}/>
                 <CategoryLayout categoryName="حسب الراوي" categoryAuthor={authorData}  onCategorySelect={setCategories} currentCategory={query} searchPrm={setSearchParam} key={'category-book'}/>
            </aside>

            

            {/* Main */}
                                {/* <h1 className="text-amber-800 text-8xl">{categories}</h1> */}

            <main className="flex-1 flex flex-col h-full overflow-hidden px-8 py-6 gap-6">

                {/* Header */}
                <div className="flex items-center justify-between gap-4">

                    <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
                        📚 تصفح الكتب
                    </h1>

                    <div className="w-full max-w-md">
                        <Search onSearch={(value) => {
                            setSearchParam({cq:value.trim()});
                            setCategories(value.trim());
                        }}
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
                                       
                     {!isPending ? books.length == 0 ? <h1>المحتوى غير متوفر</h1> : books.map((book) => (
                       <DisplayBooks key={book.book_cover_uuid} {...book}  />
                     )) : <h1>جار التحميل <Spin/></h1>}              
                  </InfiniteScroll>
                 </div>
                </div>
            </main>
        </div>
    );
}
