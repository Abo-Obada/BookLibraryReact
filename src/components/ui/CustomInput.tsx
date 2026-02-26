
type Props ={
    width:string,
    height:string,
    placeholder:string,
    type: string

}
export default function CustomInput({props}:{props:Props}){
    return(
            <input className={`${props.width} ${props.height} border border-current/20 focus:outline-blue-400 transition-all duration-200`} type="text" name="" id="" placeholder={`${props.placeholder}`} />
    );
}