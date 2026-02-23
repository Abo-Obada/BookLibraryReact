import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  XOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/Logo3.png";

export default function Footer() {
  const date = new Date().getFullYear();
  const isDark = localStorage.getItem("theme") === "dark";

  return (
    <footer className="mt-20 border-t dark:border-white/10 border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-14 dark:bg-black/40 bg-white/60 backdrop-blur">

    
        <div className="space-y-4">
          <img
            src={Logo}
            alt="Haffar Logo"
            className={`w-32 ${isDark ? "invert" : ""}`}
          />
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            مكتبة حفّار منصة مستقلة لمراجعة الكتب وتقديم ملخصات دقيقة
            مع اهتمام خاص بجودة اللغة والفهم العميق لمحتوى الكتاب.
          </p>
        </div>

       
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="hover:underline cursor-pointer">الكتب</li>
            <li className="hover:underline cursor-pointer">أحدث المراجعات</li>
            <li className="hover:underline cursor-pointer">من نحن</li>
            <li className="hover:underline cursor-pointer">تواصل معنا</li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">تابعنا</h3>

          <div className="flex items-center gap-3 text-lg cursor-pointer hover:text-pink-500 transition">
            <InstagramOutlined />
            <span className="text-sm">Instagram</span>
          </div>

          <div className="flex items-center gap-3 text-lg cursor-pointer hover:text-blue-600 transition">
            <FacebookOutlined />
            <span className="text-sm">Facebook</span>
          </div>

          <div className="flex items-center gap-3 text-lg cursor-pointer hover:text-gray-500 transition">
            <XOutlined />
            <span className="text-sm">X / Twitter</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <MailOutlined />
            <span className="text-sm">user123@example.com</span>
          </div>
        </div>
      </div>

    
      <div className="text-center text-xs py-4 dark:text-gray-400 text-gray-600">
        © {date} جميع حقوق النشر محفوظة لموقع حفّار للكتب
      </div>
    </footer>
  );
}