import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ConfigProvider, theme } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Layout() {
    const myTheme = useContext(ThemeContext);
    const { darkAlgorithm, defaultAlgorithm } = theme;
    return (
        <ConfigProvider theme={{
            algorithm: myTheme?.theme == "dark" ? darkAlgorithm : defaultAlgorithm,
            token: { fontFamily: "GeneralArabicFont" }
        }}>
            <div className="grid grid-cols-1 grid-rows-[auto_1fr_5rem] ">
                <div className="box1">
                    <Header />
                </div>
                <div className="box2">
                    <Outlet />
                </div>
                <div className="box3">
                    <Footer />
                </div>
            </div>
        </ConfigProvider>
    );
}