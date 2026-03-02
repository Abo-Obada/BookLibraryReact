import type { ChangeEventHandler } from "react";

type Props = {
    width: string,
    height: string,
    placeholder: string,
    type: string
    onChange?: ChangeEventHandler

}
export default function CustomInput({ props }: { props: Props }) {
    return (
        <input onChange={props.onChange} className={`${props.width} ${props.height} border border-current/20 focus:outline-blue-400 transition-all duration-200`} type={props.type} name="" id="" placeholder={`${props.placeholder}`} />
    );
}