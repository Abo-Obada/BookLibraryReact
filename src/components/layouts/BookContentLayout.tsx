 interface bookContent{
    title:string,
    value:string
}

export default function BookContentLayout(children:{bookData: bookContent[]}){
    return(
      
        <>
               {children && children.bookData.map((n,index)=>(
                
                <div key={index} className="mt-10">
                    <h1 className="text-[2.0rem]">{n.title}</h1>
                    <p className="text-[1.1rem]">{n.value}</p>
                </div>

               ))}
</>
          
    )
}