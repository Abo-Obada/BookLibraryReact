import BookContentLayout from "../components/layouts/BookContentLayout";
import BookPurchase, { type BtnColor } from "../components/layouts/BookPurchase";
import { Button, Divider, Skeleton, Spin } from "antd";
import CustomInput from "../components/ui/CustomInput";
import { query as bookQuery} from "../Services/query/books";
import { query as commentQuery } from "../Services/query/comment";
import { useParams } from "react-router-dom";
import CardLayout from "../components/layouts/CardLayout";
import CommentLayout from "../components/layouts/CommentLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import DisplayBooks from "../components/ui/ShowBooks"


const puchase = [{label:"amazon",color:"blue" as BtnColor,link:"#"}]

export default function BookView() {
    const {uuid} = useParams();
    const {data:dataLabel, isPending:isPendingLabel} = bookQuery.server.bookContent.get(uuid);
    const {data:dataComment, isPending:isPendingComment} = commentQuery.server.comment.get(uuid);
    const {data:bookData , fetchNextPage, hasNextPage, isPending} = bookQuery.server.bookCover.getCategoryBook("all");
      const books = bookData?.pages.flatMap(p => p.data) || [];

    return (
    <div className="grid justify-center grid-cols-[70rem_23rem] m-20">
      
      <div className="box1 me-20">
        {isPendingLabel ?  <Skeleton/> : <BookContentLayout content={dataLabel?.get_book_content} />}
      </div>

      
      <div className="box2">
        <section>
           {isPendingLabel ? <Skeleton/> : <>
           <CardLayout  book={dataLabel} title="عن الكتاب" /> 
           <BookPurchase pro={puchase} />
           </>}
        </section>
      </div>

      <div className="box3">
     <section>
      {isPendingComment ? <Skeleton/> : <CommentLayout comment={dataComment?.pages}>
        <CustomInput props={{height:"h-auto",placeholder:"علق ولا يهمك :)",type:"text",width:"w-100"}}/>
        <Button variant="solid" color="primary" >إرسال</Button>
      </CommentLayout> }
       
     </section>

      
    <section>
        <div className="mt-10">
        <h1 className="text-[1.7rem]">كتب قد تعجبك</h1>
         <InfiniteScroll
         scrollThreshold={1}
          loader={<h4><Spin/></h4>}
          className="grid grid-cols-5 gap-5"
          dataLength={1}
          hasMore={!!hasNextPage}
          next={fetchNextPage}> 
                            
          {!isPending ? books.length == 0 ? <h1>المحتوى غير متوفر</h1> : books.map((book) => (
            <DisplayBooks key={book.book_cover_uuid} {...book}  />
          )) : <h1>جار التحميل <Spin/></h1>}              
         </InfiniteScroll>
      </div>
    </section>
      </div>
      
    </div>
  )
}