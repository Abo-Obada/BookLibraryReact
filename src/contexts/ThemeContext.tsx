import { createContext, useEffect, type ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";


type Theme = "dark" | "white" | "system";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}:{children:ReactNode}){
  const {theme,setTheme} = useTheme();

  useEffect(()=>{
    switch (theme) {
      case "dark":
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.removeItem("theme");
        localStorage.setItem("theme","dark");
        break;
      case "white":
        document.documentElement.removeAttribute("data-theme");
          localStorage.removeItem("theme");
          localStorage.setItem("theme","white");
        break;
      default: {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
          console.log("it is dark");
          document.documentElement.setAttribute("data-theme", "dark");
        }else{
          console.log("it is white");
          document.documentElement.removeAttribute("data-theme");
        }
      }
    }

  },[theme]);
    
    

  return(
    <ThemeContext.Provider value={{theme,setTheme}}> 
      {children}
    </ThemeContext.Provider> 
  )
}
