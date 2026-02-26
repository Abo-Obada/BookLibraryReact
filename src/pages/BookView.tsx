import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import CardLayout from "../components/layouts/CardLayout";
import BookContentLayout from "../components/layouts/BookContentLayout";
import BookPurchase, { type BtnColor } from "../components/layouts/BookPurchase";
import { Avatar, Button, Divider, Dropdown, Input, Rate } from "antd";
import { MoreOutlined, SendOutlined, UserAddOutlined } from "@ant-design/icons";


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
        <CardLayout rating={book.rating} bookInfo={bookInfo} image={book.imageLink} title="معلومات سريعة عن الكتاب" />
         <BookPurchase pro={puchase} />
      </div>

      <div className="box3">
       {//**entire Parent */ 
       }
       <div className="parent border border-current/20 rounded">
         
         {//**Top content */ 
       }
        <div className="topContentContainer  border-b m-5 ">
          <div className="topContentBox flex justify-center  items-start  gap-2">
          <h1>التعليقات</h1>
          <span className="rounded-[10rem] pe-2 ps-2 bg-amber-800">2</span>
        </div>
        
         

        </div>


         {//**main content */ 
          }
          <div className="content m-5">
            {
              //**scrolling comments */
            }


            <div className="overflow-y-auto  h-100">
            {//**comment */ 
            }
            <div className="card border border-current/20 rounded">
              {
                //**Top Card */
              }
              <div className="topCard flex mt-5 mb-5 justify-between align-center">
                {//**Right side */ 
                }
                <div className="flex align-baseline items-center gap-2 ms-2">
                  <Avatar icon={<UserAddOutlined/>} size={50}/>
                  <h1>عمر تمر</h1>
                </div>

                {//**Right side */ 
                }
                <div className="flex flex-col">
                  <div className="self-end mb-3 me-5">...</div>
                  <div className="me-2"><Rate size="small" defaultValue={4}/></div>
                </div>

              </div>
              <div className="cardCotnent m-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae labore rerum sed. Aspernatur dolores distinctio vero sapiente voluptatum nisi incidunt exercitationem, architecto, quidem magni natus, possimus hic a quam.
                Nisi minus labore, nam rerum corrupti est blanditiis suscipit expedita ex veniam officiis officia amet accusamus soluta excepturi magnam eligendi molestias dolor optio obcaecati qui! Quaerat, voluptas cumque. Repellat, architecto?</p>
              </div>
            </div>


                        <div className="card border border-current/20 rounded">
              {
                //**Top Card */
              }
              <div className="topCard flex mt-5 mb-5 justify-between align-center">
                {//**Right side */ 
                }
                <div className="flex align-baseline items-center gap-2 ms-2">
                  <Avatar icon={<UserAddOutlined/>} size={50}/>
                  <h1>عمر تمر</h1>
                </div>

                {//**Right side */ 
                }
                <div className="flex flex-col">
                  <div className="self-end mb-3 me-5">...</div>
                  <div className="me-2"><Rate size="small" defaultValue={4}/></div>
                </div>

              </div>
              <div className="cardCotnent m-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae labore rerum sed. Aspernatur dolores distinctio vero sapiente voluptatum nisi incidunt exercitationem, architecto, quidem magni natus, possimus hic a quam.
                Nisi minus labore, nam rerum corrupti est blanditiis suscipit expedita ex veniam officiis officia amet accusamus soluta excepturi magnam eligendi molestias dolor optio obcaecati qui! Quaerat, voluptas cumque. Repellat, architecto?</p>
              </div>
            </div>


            <div className="card border border-current/20 rounded">
              {
                //**Top Card */
              }
              <div className="topCard flex mt-5 mb-5 justify-between align-center">
                {//**Right side */ 
                }
                <div className="flex align-baseline items-center gap-2 ms-2">
                  <Avatar icon={<UserAddOutlined/>} size={50}/>
                  <h1>عمر تمر</h1>
                </div>

                {//**Right side */ 
                }
                <div className="flex flex-col">
                  <div className="self-end mb-3 me-5">...</div>
                  <div className="me-2"><Rate size="small" defaultValue={4}/></div>
                </div>

              </div>
              <div className="cardCotnent m-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae labore rerum sed. Aspernatur dolores distinctio vero sapiente voluptatum nisi incidunt exercitationem, architecto, quidem magni natus, possimus hic a quam.
                Nisi minus labore, nam rerum corrupti est blanditiis suscipit expedita ex veniam officiis officia amet accusamus soluta excepturi magnam eligendi molestias dolor optio obcaecati qui! Quaerat, voluptas cumque. Repellat, architecto?</p>
              </div>
            </div>


            

            
            </div>

            {
             //**Input */ 
            }
            
            <div className="bottomCommentBar mt-5 flex flex-col ">
              
              <div className="TopContentInputComment self-center">
                <Rate defaultValue={5}/>
              </div>
              <div className="BottomContentInputComponent gap-2 flex mt-5">
              <input className="w-100 border border-current/20 focus:outline-blue-400 transition-all duration-200" type="text" name="" id="" placeholder="أكتب أي شيء هنا و لن نقوم بإعتقالك" />
              <Button variant="solid" color="primary" >إرسال</Button>
              </div>
            </div>
          </div> 
       </div>
      </div>
      
    </div>
  )
}