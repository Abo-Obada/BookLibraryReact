import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import CardLayout from "../components/layouts/CardLayout";
import BookContentLayout from "../components/layouts/BookContentLayout";
import BookPurchase, { type BtnColor } from "../components/layouts/BookPurchase";
import { Button } from "antd";
import CustomInput from "../components/ui/CustomInput";
import CommentLayout from "../components/layouts/CommentLayout";
import DisplayBooks from "../components/ui/ShowBooks";
import VerticalLayout from "../components/layouts/VerticalDisplayLayout";





const puchase = [{label:"amazon",color:"blue" as BtnColor,link:"#"}]

export default function BookView() {
  const theme = useContext(ThemeContext);
    const isDark = theme?.theme === "dark";
  return (
    <div className="grid justify-center grid-cols-[70rem_23rem] m-20">
      <div className="box1 me-20">
        <BookContentLayout bookData={book2} />
      </div>

      
      <div className="box2">
        <section>
          <CardLayout rating={book.rating} bookInfo={bookInfo} image={book.imageLink} title="معلومات سريعة عن الكتاب" />
         <BookPurchase pro={puchase} />
        </section>
      </div>

      <div className="box3">
     <section>
       <CommentLayout users={comments}>
        <CustomInput props={{height:"h-auto",placeholder:"علق ولا يهمك :)",type:"text",width:"w-100"}}/>
        <Button variant="solid" color="primary" >إرسال</Button>
      </CommentLayout>
     </section>

      
    <section>
        <div className="mt-10">
        <h1 className="text-[1.7rem]">كتب قد تعجبك</h1>
         <VerticalLayout >
        {recentBooks.map(n=>(
              <DisplayBooks id={"1"} bookAuthor={n.bookAuthor} 
              bookName={n.bookName} description={n.description}
              imageLink={n.imageLink}
              rating={n.rating}
              views={n.views}/>
            ))}
           </VerticalLayout>
      </div>
    </section>
      </div>
      
    </div>
  )
}