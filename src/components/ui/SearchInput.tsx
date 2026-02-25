import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { SearchOutlined } from "@ant-design/icons";

type InputProps = {
    width:number,
    placeholder:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function SearchInput(input:InputProps){
    const theme = useContext(ThemeContext);
    return(
       <div className={`m-5  flex justify-between padding-1 w-${input.width} h-10 rounded outline-1 ${theme?.theme == "dark" ? 'outline-white/50' : 'outline-black/50'}`}>
         <input type="text" className={`w-${input.width} focus:outline-none`} placeholder={input.placeholder} name="" id="" /> <button onClick={input.onClick} className="w-15 hover:bg-blue-400"><SearchOutlined/></button>
       </div>
    )
}