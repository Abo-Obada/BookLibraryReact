import { Button, Space, Table } from "antd";
import { query } from "../../../Services/admin/query/Role";
import Item from "antd/es/list/Item";
import { useState } from "react";
type Rec = 
{
    id:number, 
    name:string
}
export default function Role()


{
    const handleEdit = (items:Rec) =>
    {
     console.log(items)   
    }

    const handleDelete = (id:Rec) =>
    {
       console.log(id) 
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

    
const [page, setPage] = useState(1);
const { data, isPending } = query.server.get(page);


    return(
        <div className="m-5 border">
          <div>
             <Table
    columns={columns}
    loading={isPending}
    dataSource={data?.data}
    rowKey="id"
    pagination={{
        current: data?.current_page,
        total: data?.total,
        pageSize: data?.per_page,
        onChange: (newPage) => setPage(newPage),
    }}
/>

           </div>
           
        </div>
    )
}



