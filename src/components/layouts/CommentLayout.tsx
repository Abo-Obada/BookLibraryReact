import { LikeFilled, LikeOutlined, UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Rate, type MenuProps } from "antd";
import type { ReactNode } from "react";


type Users = {
    id:string | number, 
    username: string, 
    comment:string,
    rating: undefined | number,
    date: string,
    like: string
    profileImage:string
}
type CommentProps = { 
    users:Users[],
    children: ReactNode
}
export default function CommentLayout({users, children }:CommentProps){
    return(
        <>
         {//**entire Parent */ 
       }
       <div className="parent border border-current/20 rounded">
         
         {//**Top content */ 
       }
        <div className="topContentContainer  border-b m-5 ">
          <div className="topContentBox flex justify-center  items-start  gap-2">
          <h1>التعليقات</h1>
          <span className="rounded-[10rem] pe-2 ps-2 bg-amber-800">{users.length}</span>
          
        </div>

        </div>


         {//**main content */ 
          }
          <div className="content m-5">
            {
              //**scrolling comments */
            }
           
             <div className="overflow-auto no-scrollbar scrollbar-none h-100">
            {
            //**comment */ 
            }

            {users.map(n=>(
            <div className="card border border-current/20 mt-4 rounded">
              {
                //**Top Card */
              }
              <div className="topCard flex mt-5 mb-5 justify-between align-center">
                {//**Right side */ 
                }
                <div className="flex align-baseline items-center gap-2 ms-2">
                  <Avatar src={n.profileImage} size={50}/>
                  <h1>{n.username}</h1>
                  <span className="ms-2 text-current/50">{n.date}</span>
                </div>

                {//**Right side */ 
                }
                <div className="flex flex-col">
                  <div className="self-end mb-3 me-5">
                    <Dropdown menu={{
             items: [
               { key: `${n.id}-edit`, label: "Edit" },
               { key: `${n.id}-delete`, label: "Delete" }
             ],
             onClick: ({ key }) => {
               if (key.endsWith("edit")) {
               }
               if (key.endsWith("delete")) {
               }
             }
                }} placement="top" className="bg-amber-700">
                    ...
                    </Dropdown>
                  </div>
                  <div className="me-2"><Rate size="small" defaultValue={ n.rating == undefined ? 0 : n.rating }/></div>
                </div>

              </div>
              <div className="cardCotnent m-5 flex  justify-between">
               <div>
                 <p>{n.comment}</p>
               </div>
               <div>
                <LikeOutlined/> <span>{n.like}</span>
               </div>
              </div>
              
            </div>

           
           ))}
        </div>
            {
             //**Input */ 
            }
            
            <div className="bottomCommentBar mt-5 flex flex-col ">
              
              <div className="TopContentInputComment self-center">
                <Rate defaultValue={5}/>
              </div>
              <div className="BottomContentInputComponent gap-2 flex mt-5">
              {children}
              
              </div>
            </div>
          </div> 
       </div>
    
        </>
    )
}