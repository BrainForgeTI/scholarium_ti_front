import { ChangeEvent } from "react"

interface Props {
    type: string
    id: string
    label: string
    placeholder: string
    value: string
    handleInputValue: (event: ChangeEvent<HTMLInputElement>, field: string) => void
}

const AuthFormsInput = (props: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={props.id} className="ps-3 text-base-content">{props.label}</label>
            <input onChange={(event) => {
                console.log("executou")
                props.handleInputValue(event, props.id)
            }} value={props.value} id={props.id} type={props.type} placeholder={props.placeholder} className="w-full h-[50px] bg-base300 border border-neutral/31 rounded-[10px] text-[15px] text-base-content px-4 py-3" />
        </div>
    )
}

export default AuthFormsInput;