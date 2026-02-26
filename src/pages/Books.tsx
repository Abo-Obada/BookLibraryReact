
import BookLayout from "../components/layouts/BooksLayout";
import CategoryLayout from "../components/layouts/CategoryLayout";
import SearchInput from "../components/ui/SearchInput";
import DisplayBooks from "../components/ui/ShowBooks";
import Category from "../components/ui/ShowCategory";
import { bookCategory, recentBooks } from "../Services/api/books";

export default function Books() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-[1fr_200px] scale-80">
                <div className="box1">

                    <SearchInput height={"h-16"} placeholder="إبحث عن الحق حتى لو في الصين" width={"w-100"} />
                    <BookLayout height="300" columnSize="5"  scroll="vertical">
                        {recentBooks.map((n, index) => (
                            <DisplayBooks id={index.toString()}
                                bookAuthor={n.bookAuthor}
                                bookName={n.bookName}
                                description={n.description}
                                imageLink={n.imageLink}
                                rating={n.rating}
                                views={n.views}
                                key={index}
                            />
                        ))}
                    </BookLayout>
                </div>
                <div className="box2">
                    <CategoryLayout categoryName="تصنيف حسب نوع الكتب">
                        {bookCategory.map((n, index) => (
                            <Category id={index.toString()} categoryName={n.name} />
                        ))}
                    </CategoryLayout>

                    <CategoryLayout categoryName="تصنيف حسب الراوي">
                        {bookCategory.map((n, index) => (
                            <Category id={index.toString()} categoryName={n.name} />
                        ))}
                    </CategoryLayout>
                </div>
            </div>
        </div>
    );
}