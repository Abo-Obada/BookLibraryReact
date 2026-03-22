import { LikeOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Empty, Rate } from "antd";
import type { ReactNode } from "react";
import type { CommentResponse } from "../../Services/model/commentModel";


type CommentProps = {
  comment: CommentResponse[] | undefined,
  children: ReactNode
}


export default function CommentLayout({ comment, children }: CommentProps) {
  return (
    <>
      {//**entire Parent */ 
      }
      <div className="parent border border-current/20 rounded">

        {//**Top content */ 
        }
        <div className="topContentContainer  border-b m-5 ">
          <div className="topContentBox flex justify-center  items-start  gap-2">
            <h1>التعليقات</h1>
            <span className="rounded-[10rem] pe-2 ps-2 bg-amber-800">{comment &&  comment[0]?.data.length != 0 ? comment[0]?.data.length : 0}</span>

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
            
            { comment &&  comment[0]?.data.length != 0 ?  comment.map(z => (
             

             
             z && z.data.map(n=>(
                <div className="card border border-current/20 mt-4 rounded">
                {
                  //**Top Card */
                }
                <div className="topCard flex mt-5 mb-5 justify-between align-center">
                  {//**Right side */ 
                  }
                  <div className="flex align-baseline items-center gap-2 ms-2">
                    <Avatar  size={50} />
                    <h1>{n.comment_owner != undefined ? n.comment_owner.name :"N/A" }</h1>
                    <span className="ms-2 text-current/50">{n.updated_at}</span>
                  </div>

                  {//**Right side */ 
                  }
                  <div className="flex flex-col">
                    <div className="self-end mb-3 me-5">
                      <Dropdown menu={{
                        items: [
                          { key: `${n.uuid}-edit`, label: "Edit" },
                          { key: `${n.uuid}-delete`, label: "Delete" }
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
                    <div className="me-2"><Rate size="small" value={n.rate == undefined ? 0 : Number(n.rate)} /></div>
                  </div>

                </div>
                <div className="cardCotnent m-5 flex  justify-between">
                  <div>
                    <p>{n.comment}</p>
                  </div>
                  <div>
                    {//likes count
                    //
                    }

                    
                    <LikeOutlined /> <span>{n.get_reaction_count_per_comment?.map(t=>{
                     const like = n.get_reaction_count_per_comment?.filter(g=>g.reaction == "1").length;
                      return (
                        like
                      )
                    })}</span>
                  </div>
                </div>

              </div>
              ))


            )) : <Empty description={"لا يوجد تعليقات"}/>}
          </div>
          {
            //**Input */ 
          }
          <div className="bottomCommentBar mt-5 flex flex-col ">
            <div className="TopContentInputComment self-center">
              <Rate defaultValue={5} />
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