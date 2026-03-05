import { MoonFilled, SunFilled } from "@ant-design/icons";
import logo from "../../assets/Logo3.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import CustomModal from "../ui/CustomModal";
import { Button, Form, Input, message } from "antd";
import { query } from "../../Services/query/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authContext } from "../../contexts/AuthContext";


const headerLayout = [{ name: "الكتب", link: "/books" },
{ name: "القائمة الرئيسية", link: "/" },
{ name: "حول", link: "/about" }
];

function Header() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate: loginMuatate, isPending: isPendingMutate } = useMutation({ mutationFn: query.server.login });
  const { mutate: logoutMutate, isPending: isPendingLogoutMutate } = useMutation({ mutationFn: query.server.logout });
  const auth = useContext(authContext);
  const isLogged = auth?.isSuccess === true;
  const queryClient = useQueryClient();

  const submit = () => {
    if (password && email) {
      loginMuatate({ email: email, password: password }, {
        onSuccess: () => {
          setIsModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ['me'] });
          messageApi.success("تم تسجيل الدخول بنجاح", 3);
        }, onError: () => {
          messageApi.error("حدث خطب ما في تسجيل الدخول", 5);
        }
      });
    }
  }

  const theme = useContext(ThemeContext);
  return (

    <>
      {contextHolder}
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
              {!isLogged ? <CustomModal
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
                  <Button htmlType="submit" loading={isPendingMutate}>
                    سجل الأن
                  </Button>
                </Form>

              </CustomModal> : null}
            </li>

            <li className="m-3">
              {!isLogged ? undefined : <Button onClick={() => logoutMutate(undefined, {
                onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ['me'] });
                  messageApi.success("تم تسجيل الخروج بنجاح")
                },
                onError: () => {
                  messageApi.error("حدث خطب ما في تسجيل الخروج")
                }
              })} loading={isPendingLogoutMutate}>تسجيل الخروج</Button>}
            </li>


          </ol>
        </div>

        <div className="flex justify-center items-center gap-10">

          <img src={logo} className={`h-15 ${theme?.theme === "dark" ? 'invert' : ''}`}
          />
        </div>

      </div >
    </>
  );
}

export default Header;