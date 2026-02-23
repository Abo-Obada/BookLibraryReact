import { FacebookOutlined, InstagramOutlined, MailOutlined, XOutlined } from "@ant-design/icons";
import Logo from "../../assets/Logo3.png"
import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";
export default function Footer(){
   const date = new Date().getFullYear();
    return(
    <>
      <div className="grid grid-cols-3  dark:bg-dark/100 bg-card-Color-white p-5">
        <div>
            <p>
                مكتبة حفار, هي مكتبة مستقلة تقوم بمراجعة الكتب وفق الفهم وفق هدف الكتاب أو الرواية. 
                المقصود في هذه الصفحة هو مراجعة الكتب و طرح ملخص للكتاب.
                نعمل بشكل جاهد على مراجعة الكتب و العمل على التدقيق الإملائي أيضاً.
            </p>
            <img src={Logo} alt="" className={`if ${localStorage.getItem("theme") ==="dark" ? "invert":""} w-100`}/>
        </div>
        <div className="flex gap-2 flex-col items-start w-120">
            <h1>أي شكوى؟ </h1>
            <Input placeholder="أدخل الإيميل هنا"/>
            <TextArea rows={10} placeholder="الشرح......."/>
            <Button variant="solid" color="primary">إرسال</Button>
        </div>
          <div className="flex flex-col items-start">
            <h1>رابط التواصل الإجتماعي</h1>
            <span  className="text-[30px] mt-4"><InstagramOutlined/> <span className="text-[20px]">إنستقرام</span></span>
            <span  className="text-[30px] mt-4"><FacebookOutlined/> <span className="text-[20px]">فيس بوك</span></span>
            <span  className="text-[30px] mt-4"><XOutlined/> <span className="text-[20px]">تويتر/أكس</span></span>
            <span  className="text-[30px] mt-4"><MailOutlined/> <span className="text-[20px]">user123@example.com</span></span>
            <span className="mt-10">
                 <h1 className="">جميع الحقوق و النشر محفوظة لدى موقع حفار للكتب </h1>
                <h1>{date}©</h1>
            </span>

        </div>
      </div>
    </>)
}