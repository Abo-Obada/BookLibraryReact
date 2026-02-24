 interface bookContent{
    title:string,
    value:string
}

export default function BookContentLayout(children:{bookData: bookContent[]}){
    return(
      
        <>
               {children && children.bookData.map((n,index)=>(
                
                <div key={index} className="mt-10">
                    <h1 className="text-[3rem]">{n.title}</h1>
                    <p className="text-[1.5rem]">{n.value}</p>
                </div>

               ))}
</>
          
    )
}