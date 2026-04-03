import { Outlet } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Header from ".././admin/Header";
import Footer from ".././admin/Footer";
import Sidebar from "./Sidebar";

export function LayoutAdmin() {
    const myTheme = useContext(ThemeContext);
    const { darkAlgorithm, defaultAlgorithm } = theme;
    return (
        <ConfigProvider theme={{
            algorithm: myTheme?.theme == "dark" ? darkAlgorithm : defaultAlgorithm,
            token: { fontFamily: "GeneralArabicFont" }
        }}>
            <div className="grid grid-cols-[10rem_auto] grid-rows-[5rem_1fr_5rem] min-h-screen">
                <div className="border border-e-amber-300 row-span-3"><Sidebar/></div>
                <div className="border border-amber-100 row-span-1"><Header/></div>
                <div className="border border-amber-800 "><Outlet/></div>
                <div className="border border-b-blue-200"><Footer/></div>
            </div>
        </ConfigProvider>
    );
}