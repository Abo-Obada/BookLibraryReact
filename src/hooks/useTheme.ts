import {useState } from "react";
type Theme = "dark" | "white" | "system";

function getCurrentTheme():Theme{
const stored = localStorage.getItem("theme");
if(stored ==="dark" || stored === "white" ){
    return stored
}
return "system"
}


export function useTheme(){
    const [theme,setTheme] = useState<Theme>(getCurrentTheme());
    return  {theme,setTheme};
}

