import { Button, Space, Table } from "antd";
import { query } from "../../../Services/admin/query/Role";
type Rec = 
{
    id:number, 
    name:string
}
export default function Role()


{
    const handleEdit = (items:Rec) =>
    {
        
    }

    const handleDelete = (id:Rec) =>
    {
       
    }

    const columns  = [
        {title:"ID",
            dataIndex:"id",
            key:"id"}
        ,
        {title:"أسم الدور", 
        dataIndex:"name",
        key:"name"},

         {title:"الإجراء", 
        key:"الإجراء",
    render: (_:any, record: any) => (
        <>
        <Space>
            <Button onClick={() => handleEdit(record)}>تعديل</Button>
        <Button onClick={() => handleDelete(record)}>حذف</Button>
        </Space>
        </>
    )},
    ];

    
const {data,isPending, fetchNextPage} = query.server.get();
const p = data?.pages.flatMap(x => x.data) ?? [];
const total = data?.pages[0].total;
const pageSize = data?.pages[0].per_page;
const page = data?.pages[0].current_page;
    return(
        <div className="m-5 border">
            <div>
                <Table columns={columns} loading={isPending} dataSource={p} pagination={{ 
                    pageSize:pageSize, 
                    total:total,
                    onChange: () => fetchNextPage(), 
                   current: page,
                    }}/>
            </div>
        </div>
    )
}