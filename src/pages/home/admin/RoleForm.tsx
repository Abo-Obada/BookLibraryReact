import { Button, Checkbox, Divider } from "antd";
import { useState } from "react";


export default function RoleForm() {
  
  const listOptions = [{name :"Can delete", isChecked : true},
    {name :"mango", isChecked : true},
    {name :"banana", isChecked : true},
    {name :"Cucumber", isChecked : true},
    {name :"tea", isChecked : false},
    {name :"idk", isChecked : true},
    {name :"lol", isChecked : true},
    {name :"hide", isChecked : true},
    {name :"and seek", isChecked : true},
  ];


  const [checked, setChecked] = useState<boolean[]>(
    listOptions.map(x => x.isChecked)
  );

  const handleChanges = (index: number) => {
    setChecked(prev => prev.map((value, i)=> i === index ? !value : value))
  }

  const selectAllToggle = () => {
    setChecked(prev => {
      const checker = prev.every(v => v === true);
      return prev.map(() => !checker);
    });
  }

 return (
  <>
    <div className="m-5">
      
      <h1 className="text-5xl font-bold mb-2">إنشاء صلاحيات</h1>
      <div className="text-gray-500 dark:text-gray-400 mb-4">
        أسم الدور: <span className="font-semibold text-black dark:text-white">Owner</span>
      </div>

      <Divider />

      <div className="mt-10 bg-card3-Color-white rounded-xl dark:bg-card3-Color-dark p-6 shadow-sm">
        
        {/* Top Button */}
        <div className="mb-5 flex justify-end">
          <Button
            className="px-4 py-2 text-sm"
            onClick={() => selectAllToggle()}
          >
            تحديد الكل
          </Button>
        </div>

        {/* List */}
        <div className="space-y-2">
          {listOptions.map((item, index) => (
            <div
  key={index}
  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
  onClick={() => handleChanges(index)}
>
  <span className="text-sm">{item.name}</span>

  <Checkbox
    onChange={() => handleChanges(index)}
    onClick={(e) => e.stopPropagation()}
    name={item.name}
    checked={checked[index]}
  />
</div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-6 flex justify-end">
          <Button className="px-6">
            موافقة
          </Button>
        </div>

      </div>
    </div>
  </>
);
}
  


