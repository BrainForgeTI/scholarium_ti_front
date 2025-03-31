import React, { ChangeEvent } from "react";
import { SignUpFormType } from "../../../types/auth_types/SignUpFormType";
import { AuthStepFields } from "../../../types/auth_types/AuthStepField";

interface Props {
    id: string
    ref: React.RefObject<HTMLInputElement | null>
    value: string
    step: AuthStepFields
    form: SignUpFormType
    index: number
    handleInput: (event: ChangeEvent<HTMLInputElement>, field: string, index: number) => void
}

const AuthCodeInput = (props: Props) => {
    return (
        <input className="w-[56px] h-[62px] bg-base200/10 border-2 border-base-content/14 rounded-[6px] text-[32px] font-bold text-center" id={props.id} ref={props.ref} value={props.form[props.id]} onChange={(event) => { props.handleInput(event, props.id, props.index) }} type="text" placeholder="0" ></input>
    )
}

export default AuthCodeInput;