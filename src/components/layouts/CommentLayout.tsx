import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Avatar,  Empty, message, Rate, Spin } from "antd";
import { useContext,  type ReactNode } from "react";
import type { CommentResponse } from "../../Services/model/commentModel";
import InfiniteScroll from "react-infinite-scroll-component";
import { query } from "../../Services/query/reaction";
import { useQueryClient } from "@tanstack/react-query";
import { authContext } from "../../contexts/AuthContext";


type CommentProps = {
  comment: CommentResponse[] | undefined,
  children: ReactNode,
  hasNext : boolean,
  hasPrevious: boolean
  fetchNext :  () => void
}


export default function CommentLayout({ comment, children, hasNext, fetchNext }: CommentProps) {

  const myUuid = useContext(authContext);
  // Total count across ALL pages
  const totalCount = comment?.[0]?.total ?? 0;
 const totalCount2 = comment?.[comment.length - 1]?.to ?? 0;
const {mutate} = query.server.reaction.update();
 const queryClient  = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();

const submit = (data: string, uuid: string) => {
  if (!data) return;

  mutate(
    { uuid: uuid, reaction: data },
    {
      onSuccess: () => {
        messageApi.success("تم بنجاح");
        queryClient.invalidateQueries({ queryKey: ['comments'] }); 
      },
      onError: () => {
        messageApi.error("حدث خطب ما");
      }
    }
  );
};


  return (
    <>
   {contextHolder}
      <div className="parent border border-current/20 rounded">

        <div className="topContentContainer border-b m-5">
          <div className="topContentBox flex justify-center items-start gap-2">
            <h1>التعليقات</h1>
            <span className="rounded-[10rem] pe-2 ps-2 bg-amber-800">
              {totalCount}
            </span>
          </div>
        </div>

        <div className="content m-5">

          {/* Give the scroll container an id and fixed height */}
            <div id="scrollableDiv" className="overflow-auto h-[500px] no-scrollbar">
            <InfiniteScroll
              dataLength={totalCount2}          
              hasMore={!!hasNext}
              next={fetchNext}
              loader={<h4><Spin /></h4>}
              scrollableTarget="scrollableDiv" 
            >
              {Number(totalCount) > 0 ? (
                comment?.map(page =>
                  page?.data.map(n => {
                    const date = new Date(n.updated_at);
                    
                    return (
                      
                      <div key={n.uuid} className="card border border-current/20 mt-4 rounded">
                        <div className="topCard flex mt-5 mb-5 justify-between align-center">
                          <div className="flex align-baseline items-center gap-2 ms-2">
                            <Avatar size={50} />
                            <h1>{n.comment_owner?.username ?? "N/A"}</h1>
                            <span className="ms-2 text-current/50">{date.toLocaleDateString()}</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="self-end mb-3 me-5">
                            
                            </div>
                            <div className="me-2">
                              <Rate size="small"  value={Number(n.rate) || 0} />
                            </div>
                          </div>
                        </div>

                        <div className="cardCotnent m-5 flex justify-between">
                          <p>{n.comment}</p>
                          {(()=>{
const userReaction = n.get_reaction_count_per_comment?.find(
          r => r.user.user_uuid == myUuid?.data?.uuid
        )?.reaction;
                            return (
                              <div className="flex ">
                            <div>
                             
                              <div className="me-2">

                              {userReaction == "1" ?  <LikeFilled onClick={() => {
                              userReaction == "1" ? submit("-1",n.uuid) : submit("1",n.uuid);
                            }} /> 
                            :  <LikeOutlined onClick={() => {
                              submit("1",n.uuid);
                            }} />}

                             <span className="">
                              {n.get_reaction_count_per_comment?.filter(g => g.reaction === "1").length ?? 0}
                            </span>
                              </div>

                            </div>
                           
                           <div>
                              {userReaction == "0" ?  <DislikeFilled onClick={() => {
                              userReaction == "0" ? submit("-1",n.uuid) : submit("0",n.uuid);
                            }} /> :  <DislikeOutlined onClick={() => {
                              submit("0",n.uuid);
                            }} />}
                         <span className="ms-1">
                              {n.get_reaction_count_per_comment?.filter(g => g.reaction === "0").length ?? 0}
                            </span>
                             </div>
                          </div>
                            )
                            })()}
                          </div>


                      </div>
                    );
                  })
                )
              ) : (
                <Empty description={"لا يوجد تعليقات"} />
              )}
            </InfiniteScroll>
          </div>

          <div className="bottomCommentBar mt-5 flex flex-col">
            <div className="TopContentInputComment self-center" />
            <div className="BottomContentInputComponent gap-2 flex mt-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}