import { useContext } from "react"
import Logo from "../assets/Logo3.png"
import { ThemeContext } from "../contexts/ThemeContext"
export default function About(){
    const theme = useContext(ThemeContext);
return(
<div className="flex-col flex m-20 snap-y snap-mandatory">
 <div className="fadeup-animation ">
    <h1 className="text-[7rem] ">من نحن؟</h1>
 </div>
  <div>
    <h1 className="text-[5rem] place-self-end-safe fadeup-animation">نحن فريق عمل صغير يعمل على مراجعة الكتب وفقاً لفهم فكرة أو  إيديولوجية الراوي أو الكاتب و أحيانا ننشر الأحاديث و القرأن الكريم وفقا لفغهم المفسرين أيضاً</h1>
 </div>

 <div className="self-end mt-40 fadeup-animation">
    <h1 className="text-[7rem] ">ما هي غايتنا؟</h1>
 </div>
  <div>
    <h1 className="text-[5rem] place-self-end-safe fadeup-animation"> غايتنا هي إدلاء الرأي بشكل صريح بدون تلميع أو شيطنة الكتاب أو صاحب الراوي على إثر معتقده أو فكره.نحن لا نتبنى فكر أي كاتب أو قرائ, بل نشرحها</h1>
 </div>

 <div className="self-start mt-40 fadeup-animation">
    <h1 className="text-[7rem] fadeup-animation">من هو مالك صفحة حفار؟</h1>
 </div>
  <div>
    <h1 className="text-[5rem] place-self-end-safe fadeup-animation"> صفحة حفار يمتلكها "صلاح حفار" بشكل رسمي: صلاح حفار هو من مواليد سوريا, درس تخصص تعويضات السنية في الجامعة روملة التركية</h1>
 </div>

 <div className="self-center mt-50 fadeup-animation">
    <img src={Logo} alt="" className={`${theme && theme.theme == "dark"?  'invert' :'' }`}/>
 </div>
</div>)}