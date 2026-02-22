import logo from "../../assets/Logo3.png";

const headerLayout:string[] = [
    "التصنيفات",
    "الكتب",
    "حول",
    "القائمة الرئيسية"
]; 
function Header(){
    return(
        <>
         
        <div className="flex items-center justify-evenly gap-4 mt-5 mb-5">
            <div className="">
                <li className="flex">
                {headerLayout.map(e=>(
                  <ol className="m-3">{e}</ol>
                ))}
            </li>
            </div>
             <div className="">
                <img src={logo} className="h-15"/>
            </div>
        </div>
        </>
    );
}

export default Header;