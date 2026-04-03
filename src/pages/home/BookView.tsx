import BookContentLayout from "../../components/layouts/BookContentLayout";
import { Button,message, Rate, Skeleton, Spin } from "antd";
import { query as bookQuery} from "../../Services/query/books";
import { query as commentQuery } from "../../Services/query/comment";
import { useParams } from "react-router-dom";
import CardLayout from "../../components/layouts/CardLayout";
import CommentLayout from "../../components/layouts/CommentLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import DisplayBooks from "../../components/ui/ShowBooks"
import { useContext, useRef, useState } from "react";
import { authContext } from "../../contexts/AuthContext";
import TextArea from "antd/es/input/TextArea";
import { useQueryClient } from "@tanstack/react-query";

export default function BookView() {
    const {uuid} = useParams();
    const {data:dataLabel, isPending:isPendingLabel} = bookQuery.server.bookContent.get(uuid);
    const {data:dataComment, hasNextPage:NextPageComment, hasPreviousPage:hasPreviousPageComment, fetchNextPage:fetchNextPageComment} = commentQuery.server.comment.get(uuid);
    const {data:bookData , fetchNextPage, hasNextPage, isPending} = bookQuery.server.bookCover.getCategoryBook("all");
    const books = bookData?.pages.flatMap(p => p.data) || [];
    const me = useContext(authContext);
    const [count, setCount] = useState<number>(0);
    const invalidateComment = useQueryClient();
    //mutation + states 
    const rate = useRef(5);
    const comment = useRef("");
    const { mutate} = commentQuery.server.comment.post()
      const [messageApi, contextHolder] = message.useMessage();
    const onSubmit = () =>{
     mutate({uuid:uuid, comment: comment.current, rate:rate.current},
      {onSuccess: () =>{
        invalidateComment.invalidateQueries({queryKey:['comments']});
         messageApi.success("تم تعليق بنجاح");
     },onError:()=>{
      messageApi.error("حدث خطب ما عند التعليق");
     }})
    }

    return (
     <>
     {contextHolder}
      <div className="grid justify-center grid-cols-[70rem_23rem] m-20">
     
      <div className="box1 me-20">
        {isPendingLabel ?  <Skeleton/> : <BookContentLayout content={dataLabel?.get_book_content} />}
      </div>

      
      <div className="box2">
        <section>
           {isPendingLabel ? <Skeleton/> : <>
           <CardLayout  book={dataLabel} title="عن الكتاب" /> 
          
           </>}
        </section>
      </div>
      
      <div className="box3">
     <section>
      {isPendingLabel ? <Skeleton/> : <CommentLayout fetchNext={fetchNextPageComment} comment={dataComment?.pages} hasNext={NextPageComment} hasPrevious={hasPreviousPageComment}>
       {me?.isLoading ? <Skeleton/> : <>
        {me?.errorCode === 401 ? <div>يجب التسجيل الدخول أولا ويمكنك بعدها التعليق</div> : 
        <div className="">
          <div>
             <Rate defaultValue={5} size="small" onChange={(e)=> rate.current = e}/>
          </div>
         <div className="mt-2 mb-2 flex flex-col items-end">
          <TextArea onChange={(e) => { setCount(e.target.value.length);
            comment.current = e.target.value;
          }} placeholder="علق هنا" cols={100} rows={10} maxLength={225}/>
          <span className="mt-2 text-current/50">{count}/225</span>
          
         </div>
         <div>
            <Button  onClick={()=> onSubmit()} variant="solid" color="primary" >تعليق</Button>
          </div>
          
          <div className="mt-2">
         </div>         
        
        </div>
        }
       </>}
      </CommentLayout> 
      }
       
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
     </> 
   
  )
}