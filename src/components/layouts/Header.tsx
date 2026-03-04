import { MoonFilled, SunFilled } from "@ant-design/icons";
import logo from "../../assets/Logo3.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import CustomModal from "../ui/CustomModal";
import { Button, Form, Input } from "antd";
import { query } from "../../Services/query/auth";


const headerLayout = [{ name: "الكتب", link: "/books" },
{ name: "القائمة الرئيسية", link: "/" },
{ name: "حول", link: "/about" }
];

function Header() {
  const { mutate } = query.server.login();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submit = () => {

    if (password && email) {
      mutate({ email: email, password: password }, {
        onSuccess: () => {

        }
      });
    }
    setIsModalOpen(false);
  }

  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="flex"></div>
      <div className="flex justify-between me-5 ms-5 mt-5 mb-5">
        <div className="">
          <ol className="flex items-center gap-2">
            {headerLayout.map(e => (
              <li className="m-3"><Link to={e.link}>{e.name}</Link></li>
            ))}

            {/* Moon Icon */}
            <li className={`rounded-[10rem] p-2 cursor-pointer transition-colors ${theme?.theme === "dark"
              ? 'bg-white hover:bg-white/80 text-black'
              : 'hover:bg-black/10'
              }`}>
              <MoonFilled
                onClick={() => theme?.setTheme("dark")}
                style={{ fontSize: "30px" }}
              />
            </li>

            {/* Sun Icon */}
            <li className={`rounded-[10rem] p-2 cursor-pointer transition-colors ${theme?.theme === "white"
              ? 'bg-black hover:bg-white/80 text-white'
              : 'hover:bg-black/10'
              }`}>
              <SunFilled
                onClick={() => theme?.setTheme("white")}
                style={{ fontSize: "30px" }}
              />
            </li>

            <li className="m-3">
              <CustomModal
                onOpen={() => setIsModalOpen(true)}
                onClose={() => setIsModalOpen(false)}
                open={isModalOpen}
                btnName="تسجيل الدخول"
                title="سجل الدخول الأن " >
                <Form autoComplete="on" onFinish={submit}>
                  <Form.Item label="أيميل" name={"username"} rules={[
                    { required: true, message: "الرجاء ملئ الحقل " },
                    { type: "email", message: "يجب أن يكون أيميل" },
                  ]}
                    labelAlign="right">
                    <Input type={"email"} onChange={(e) => setEmail(e.target.value)} placeholder="ضع الإيميل " />
                  </Form.Item>

                  <Form.Item label="كلمة المرور" name={"password"} rules={[
                    { required: true, message: "الرجاء ملئ الحقل " },
                  ]} labelAlign="right">
                    <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="ضح كلمة المرور" />
                  </Form.Item>
                  <Button htmlType="submit">
                    سجل الأن
                  </Button>
                </Form>

              </CustomModal>
            </li>
            <li>
            </li>
          </ol>
        </div>

        <div className="">
          <img
            src={logo}
            className={`h-15 ${theme?.theme === "dark" ? 'invert' : ''}`}
          />
        </div>
      </div >
    </>
  );
}

export default Header;