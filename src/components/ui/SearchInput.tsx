import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { SearchOutlined } from "@ant-design/icons";

type InputProps = {
  width: string,
  placeholder: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  height: string
}
export default function SearchInput(input: InputProps) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`m-5  flex justify-between padding-1 ${input.width} ${input.height} rounded outline-1 ${theme?.theme == "dark" ? 'outline-white/50' : 'outline-black/50'}`}>
      <input type="text" className={`${input.width}  focus:outline-none `} placeholder={input.placeholder} name="" id="" /> <button onClick={input.onClick} className="w-15 hover:bg-blue-400"><SearchOutlined /></button>
    </div>
  )
}

