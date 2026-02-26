import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import CardLayout from "../components/layouts/CardLayout";
import BookContentLayout from "../components/layouts/BookContentLayout";
import BookPurchase, { type BtnColor } from "../components/layouts/BookPurchase";
import { Avatar, Button, Divider, Dropdown, Input, Rate, type MenuProps } from "antd";
import { MoreOutlined, SendOutlined, UserAddOutlined } from "@ant-design/icons";
import CustomInput from "../components/ui/CustomInput";
import CommentLayout from "../components/layouts/CommentLayout";
import BookLayout from "../components/layouts/BooksLayout";
import { recentBooks } from "../Services/api/books";
import DisplayBooks from "../components/ui/ShowBooks";
import CategoryLayout from "../components/layouts/CategoryLayout";
import Category from "../components/ui/ShowCategory";
import VerticalLayout from "../components/layouts/VerticalDisplayLayout";


const book = {
  bookName: "قوة عقلك الباطن",
  bookAuthor: "جوزيف ميرفي",
  authorNationality: "إيرلاندي",
  releaseDate: "غير معروف",
  views: 242452,
  rating: 5,
  imageLink: "https://m.media-amazon.com/images/I/61PqMZ0L85L.jpg",
};

const bookInfo = [
  { label: "أمازون", value: book.bookName },
  { label: "أسم الراوي", value: book.bookAuthor },
  { label: "جنسية الراوي", value: book.authorNationality },
  { label: "تاريخ إصدار الكتاب", value: book.releaseDate },
  { label: "عدد المشاهدات", value: book.views },
];



const book2 = [
  {
    title: "عن الرواية",
    value: `
رواية (أو كتاب) قوة عقلك الباطن يُعد من أشهر كتب تطوير الذات التي تركز على العلاقة بين العقل الواعي والعقل الباطن.
الكتاب يطرح فكرة أساسية مفادها أن الإنسان يستطيع تغيير واقعه وحياته بالكامل من خلال تغيير طريقة تفكيره ومعتقداته الداخلية.
يعتمد الكتاب على أسلوب بسيط ومباشر، ويجمع بين الشرح النفسي والأمثلة الحياتية، مع لمسة روحانية واضحة.
    `
  },
  {
    title: "اسم الراوي / المؤلف",
    value: `
مؤلف الكتاب هو جوزيف ميرفي، وهو كاتب وباحث في مجال العقل الباطن والتنمية البشرية.
اشتهر بربطه بين علم النفس والإيمان الداخلي، وكان يرى أن الإيمان العميق بالفكرة
هو المفتاح الأساسي لتأثير العقل الباطن وتحقيق النتائج.
    `
  },
  {
    title: "فكرة الكتاب الأساسية",
    value: `
الفكرة الجوهرية للكتاب هي أن العقل الباطن لا يُميز بين الحقيقة والخيال،
بل يتعامل مع ما يتلقاه على أنه أوامر مباشرة.
لذلك، فإن الأفكار المتكررة سواء كانت إيجابية أو سلبية، تتحول مع الوقت إلى واقع يعيشه الإنسان.
    `
  },
  {
    title: "أهم المحاور التي يناقشها الكتاب",
    value: `
- الفرق بين العقل الواعي والعقل الباطن.
- قوة التكرار والتأكيدات الإيجابية.
- تأثير المعتقدات القديمة على السلوك والحياة.
- دور الإيمان والثقة في تحقيق الأهداف.
- كيفية التخلص من الخوف والقلق عبر برمجة العقل الباطن.
    `
  },
  {
    title: "أسلوب الكتاب",
    value: `
أسلوب الكتاب بسيط وسلس، موجه لعامة الناس وليس للمتخصصين فقط.
يعتمد على التكرار المقصود لترسيخ الأفكار، مع قصص وتجارب لأشخاص
يُقال إنهم غيروا حياتهم باستخدام مبادئ العقل الباطن.
قد يشعر بعض القرّاء أن الأسلوب مباشر أكثر من اللازم، أو يميل للتكرار.
    `
  },
  {
    title: "الرأي الشخصي",
    value: `
الكتاب محفز جدًا في بدايته، ويمنح القارئ شعورًا بالقوة والسيطرة على حياته.
لكن بصراحة، إذا قرأته بعقلية نقدية، ستلاحظ أن بعض الأفكار مبالغ فيها
ولا تستند دائمًا إلى أدلة علمية قوية.
هو كتاب ممتاز لبناء الدافع وتغيير طريقة التفكير، لكنه ليس حلًا سحريًا لكل المشاكل.
    `
  },
  {
    title: "مراجعة نقدية",
    value: `
من نقاط القوة في الكتاب: البساطة، التحفيز، وإيصال الفكرة بوضوح.
أما نقاط الضعف: التكرار، والمبالغة أحيانًا في ربط كل شيء بالعقل الباطن فقط.
الكتاب مناسب للمبتدئين في مجال تطوير الذات، لكنه قد يكون سطحيًا
لمن لديه خلفية عميقة في علم النفس.
    `
  },
  {
    title: "لمن يُنصح بقراءة الكتاب؟",
    value: `
- لمن يشعر بالإحباط أو فقدان الدافع.
- لمن يريد تغيير طريقة تفكيره وبناء عقلية إيجابية.
- للمبتدئين في مجال تطوير الذات.
ولا يُنصح به لمن يبحث عن محتوى علمي أكاديمي بحت.
    `
  },
  {
    title: "الخلاصة",
    value: `
قوة عقلك الباطن كتاب مؤثر ومُلهم، يترك أثرًا نفسيًا إيجابيًا لدى الكثير من القرّاء.
قد لا تتفق مع كل ما ورد فيه، لكن من الصعب أن تخرج منه دون أن تعيد التفكير
بطريقة حديثك مع نفسك وتأثير أفكارك على حياتك.
    `
  }
];


//Comment simulation 
const comments = [
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
  {id:"123",comment:"Mono Behaviour",date:"2024/02/20",rating:5,username:"عمر تمر"},
]

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