import { Outlet } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Header from ".././admin/Header";
import Sidebar from "./Sidebar";

export function LayoutAdmin() {
    const myTheme = useContext(ThemeContext);
    const { darkAlgorithm, defaultAlgorithm } = theme;
    return (
        <ConfigProvider theme={{
            algorithm: myTheme?.theme == "dark" ? darkAlgorithm : defaultAlgorithm,
            token: { fontFamily: "GeneralArabicFont" }
        }}>
            <div className="grid grid-cols-[15rem_auto] grid-rows-[auto_1fr_5rem] min-h-screen">
                <div className=" border-e border-e-current/20 row-span-3 flex flex-col items-center bg-sidebar-Color-dark"><Sidebar/></div>
                <div className=" row-span-1"><Header/></div>
                <div className=" "><Outlet/></div>
                <div className=""></div>
            </div>
        </ConfigProvider>
    );
}