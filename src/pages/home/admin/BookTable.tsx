import { Button, Flex, Row, Space, Table, Tag, type TableProps } from "antd";

export function BookTable()
{

    const columns  = [
        {title:"ID",dataIndex:"col0",key:"ID"}
        ,
        {title:"أسم الكتاب", 
        dataIndex:"col1",
        key:"أسم الكتاب"},

         {title:"أسم الراوي", 
        dataIndex:"col2",
        key:"أسم الراوي"},

         {title:"تاريخ إصدار الكتاب ", 
        dataIndex:"col3",
        key:"تاريخ إصدار الكتاب"},

         {title:"عدد الصفحات", 
        dataIndex:"col4",
        key:"عدد الصفحات "},

         {title:"الإجراء", 
        dataIndex:"col5",
        key:"الإجراء"},

    ];

    const dataSource = 
    [
    {
    col0: '0',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },
 {
    col0: '1',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

     {
    col0: '2',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

     {
    col0: '3',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ,

     {
    col0: '4',
    col1: 'Mike',
    col2: 32,
    col3: '10 Downing Street',
    col4:"Go",
    col5:<>
    <Button variant="solid" color="primary" style={{marginLeft:"7px"}}>تعديل</Button>
    <Button variant="solid" color="danger">حذف</Button>
    </>
    },

    ]

    return(
        <div className="m-5 border">
            
            <div>
                <Table  columns={columns} dataSource={dataSource}>
                </Table>
            </div>
        </div>
    )
}