import { Table } from "antd";
import { query } from "../../../Services/admin/query/Role";
import type { Role } from "../../../Services/admin/model/roleModel";

export default function Role()

{
    const columns  = [
        {title:"ID",
            dataIndex:"col0",
            key:"id"}
        ,
        {title:"أسم الدور", 
        dataIndex:"name",
        key:"name"},

         {title:"الإجراء", 
        dataIndex:"action",
        key:"الإجراء"},

    ];
const {data,isPending} = query.server.get();
const tableData = data ?? [];

    return(
        <div className="m-5 border">
            
            <div>
               <Table<Role> columns={columns} loading={isPending} dataSource={tableData} />
            </div>
        </div>
    )
}