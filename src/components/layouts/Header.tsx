import { DesktopOutlined, MoonFilled, SunFilled } from "@ant-design/icons";
import logo from "../../assets/Logo3.png";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const headerLayout:string[] = [
    "التصنيفات",
    "الكتب",
    "حول",
    "القائمة الرئيسية"
]; 
function Header(){
    const theme = useContext(ThemeContext);
    
    return(
        <>
        <div className="flex"></div>
        <div className="flex justify-between me-5 ms-5 mt-5 mb-5">
        <div className="">
    <ol className="flex items-center gap-2">
      {headerLayout.map(e => (
        <li className="m-3">{e}</li>
      ))}
      
      {/* Moon Icon */}
      <li className={`rounded-[1rem] p-2 cursor-pointer transition-colors ${
        theme?.theme === "dark" 
          ? 'bg-white hover:bg-white/80' 
          : 'hover:bg-black/10'
      }`}>
        <MoonFilled 
          onClick={() => theme?.setTheme("dark")} 
          style={{ fontSize: "30px" }}
        />
      </li>

      {/* Sun Icon */}
      <li className={`rounded-[1rem] p-2 cursor-pointer transition-colors ${
        theme?.theme === "white" 
          ? 'bg-black hover:bg-white/80 text-white' 
          : 'hover:bg-black/10'
      }`}>
        <SunFilled 
          onClick={() => theme?.setTheme("white")} 
          style={{ fontSize: "30px" }}
        />
      </li>
    </ol>
  </div>

  <div className="">
    <img 
      src={logo} 
      className={`h-15 ${theme?.theme === "dark" ? 'invert' : ''}`}
    />
  </div>
</div>
        </>
    );
}

export default Header;