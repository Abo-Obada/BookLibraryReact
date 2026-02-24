import { Divider } from "antd";
import type { ReactNode } from "react";
interface CategoryLayoutProps {
  children: ReactNode;
  categoryName:string
}
export default function CategoryLayout({ children, categoryName }:CategoryLayoutProps) {
  return (
    <div className="bookCategory bg-black/2 dark:bg-black/20 rounded-2xl">
      <div className="title mt-2 ms-2">
        <h1 className="text-[2rem] mt-2">{categoryName}</h1>
      </div>
      <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }} />
      <div className="">
        <li className="list-none">
          {children}
        </li>
      </div>
    </div>
  );
}