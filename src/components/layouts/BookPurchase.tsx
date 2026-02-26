export type BtnColor = "red" | "blue" | "green";  
const colorClasses: Record<BtnColor, string> = {
  red: "hover:bg-red-500 p-1 rounded",
  blue: "hover:bg-blue-500 p-1 rounded",
  green: "hover:bg-green-500 p-1 rounded"
};
export type Props = {
    label:string,
    link:string,
    color: BtnColor
}

export default function BookPurchase(props:{pro:Props[]}){
    return (
        <div className="mt-10 border border-current/20 rounded  p-5">
             <h1 className="text-[3rem]">للشراء</h1>
             {props.pro.map((n,index)=>(
                <a key={index} href={n.link} className={`text-[1.5rem] ms-2 me-2  ${colorClasses[n.color]}`} target="_blank">{n.label}</a>
             ))}
        </div>
    );
}