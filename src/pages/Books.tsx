import Search from "antd/es/input/Search";
import BookLayout from "../components/layouts/BooksLayout";
import DisplayBooks from "../components/ui/ShowBooks";
import { recentBooks } from "../Services/api/books";
import CategoryLayout from "../components/layouts/CategoryLayout";

export default function Books() {
  
    return (
        <div className="flex h-screen bg-white text-black dark:bg-[#0f0f13] dark:text-white overflow-hidden" dir="ltr">

            {/* Sidebar */}
            <aside dir="rtl" className="w-64 min-w-[220px] h-full border-r 
                              border-black/10 dark:border-white/10
                              bg-gray-100 dark:bg-[#13131a]
                              flex flex-col overflow-y-auto shrink-0 px-4 py-6 gap-4">

                <p className="text-xs uppercase tracking-widest 
                              text-black/40 dark:text-white/30 
                              font-semibold px-1 mb-1">
                    Categories
                </p>
                <CategoryLayout categoryName="حسب الراوي"/>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col h-full overflow-hidden px-8 py-6 gap-6">

                {/* Header */}
                <div className="flex items-center justify-between gap-4 flex-shrink-0">

                    <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
                        📚 Browse Books
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

                    <BookLayout height="100%" cols={5} scroll="vertical">

                        {recentBooks.map((n, index) => (
                            <DisplayBooks
                                key={index}
                                id={index.toString()}
                                bookAuthor={n.bookAuthor}
                                bookName={n.bookName}
                                description={n.description}
                                imageLink={n.imageLink}
                                rating={n.rating}
                                views={n.views}
                            />
                        ))}
                    </BookLayout>

                </div>

            </main>
        </div>
    );
}
