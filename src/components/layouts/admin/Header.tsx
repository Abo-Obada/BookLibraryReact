import { useContext } from "react"
import { authContext } from "../../../contexts/AuthContext"
import { Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { AuthAdminContext } from "../../../contexts/AuthAdminContext";

export default function Header(){
const username = useContext(AuthAdminContext);
    return(
    <header >
   <div className="m-5 flex items-center justify-between border-b border-b-current/20">
     <div >أهلا بك مجددا {username?.user.username ?? "ضيف"}</div>
     <div className="mb-5"><Avatar icon={<UserAddOutlined/>}/></div>
   </div>
</header>
)
}