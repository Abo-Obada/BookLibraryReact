import { useContext, useState } from "react";
import Logo from "../../../assets/Logo3.png"
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Alert, Button, Card, Checkbox, ConfigProvider, Form, Input, theme, Watermark } from "antd";
import { query } from "../../../Services/admin/query/auth";



export default function Login() {


    const theme2 = useContext(ThemeContext);
    const { darkAlgorithm, defaultAlgorithm } = theme;
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [remember, setRemember] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const {mutate,isError,isSuccess} = query.server.login();
    const submit = () => {
       mutate({email: email, password: password, remember: remember},{
        onSuccess: () => setMessage("تم التسجيل الدخول بنجاح"),
        onError: () => setMessage("حدث خطب ما أثناء تسجيل الدخول")
       })
    }
    return (
        <ConfigProvider theme={{
            algorithm: theme2?.theme == "dark" ? darkAlgorithm : defaultAlgorithm,
            token: { fontFamily: "GeneralArabicFont" }
        }}>
           <Watermark content={"مكتبة حفّار"} font={{fontSize:50}}>
             <div className="flex  h-screen">
                <div className=" w-screen flex justify-center items-center">
                    <div>
                        <Card title="تسجيل الدخول" size="medium">
                            <Form
                                name="basic"
                                onFinish={() => submit()}
                            >
                                <Form.Item
                                    label=":أسم المستخدم"
                                    name="username"
                                    validateTrigger="onBlur"
                                    hasFeedback
                                    rules={[
                                        { required: true, message: 'الإيميل مطلوب' },
                                        { type: 'email', message: 'يرجى إدخال بريد إلكتروني صالح (example@email.com)' }
                                    ]}
                                    
                                >
                                    <Input onChange={e=>setEmail(e.target.value)} placeholder="example@email.com" />
                                </Form.Item>

                                <Form.Item
                                    label="كلمة المرور"
                                    name="password"
                                    rules={[{ required: true, message: 'كلمة السر مطلوبة' }]}
                                >
                                    <Input.Password onChange={(e)=>setPassword(e.target.value)}/>
                                </Form.Item>

                                <Form.Item>
                                    <Checkbox onChange={e=>setRemember(e.target.checked)}>
                                        <span> تذكرني (سوف يتم طلب تسجيل الدخول مجددا كل 30 يوم.)</span>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit">
                                        تسجيل الدخول
                                    </Button>
                                </Form.Item>
                            </Form>
                           {isSuccess == true ?  <Alert type="success" title={message} /> : ""}
                           {isError == true ?  <Alert type="error" title={message}/> : ""}
                        </Card>
                    </div>
                </div>
                <div className="border-r border-current/20 flex-row gap-5  w-screen flex justify-center items-center">
                    <img className={`${theme2?.theme == "dark" ? "invert" : ""} w-50`} src={Logo} alt="" />
                    <div><h1 className="text-7xl">التسجيل الدخول</h1></div>
                </div>
            </div>
           </Watermark>
        </ConfigProvider>

    );
}