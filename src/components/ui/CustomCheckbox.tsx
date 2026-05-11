import { useState, type ReactNode } from "react"

type props = 
{
    name :string, 
}
export default function CustomCheckbox({name}: props)
{
    const [checked, setChecked] = useState(false);
    return (
         <div className="p-8  ">
           <div className="">
             <input type="checkbox" id={`${name}-checkbox`} name={name} checked={checked} onChange={() => setChecked(!checked)}/>
           </div>
        </div>
    )
}