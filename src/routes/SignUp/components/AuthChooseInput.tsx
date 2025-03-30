import { AuthFormsInput } from "../../../components/PagelayoutAuth";
import { AuthSelectInput } from "../../../components/PagelayoutAuth/index"
import { AuthStepFields } from "../../../types/auth_types/AuthStepField";
import { SignUpFormType } from "../../../types/auth_types/SignUpFormType";
import AuthImageInput from "./AuthImageInput";

interface Props {
    step: AuthStepFields
    index: number
    form: SignUpFormType
    handleInput: (event: any, index: string) => void
}

const AuthChooseInput = (props: Props) => {
    return (
        <>
            {
                props.step.fieldType === 'text' || props.step.fieldType === 'email' || props.step.fieldType === 'password' || props.step.fieldType === 'date' ?
                    <AuthFormsInput key={`input-${props.index}`} handleInputValue={props.handleInput} value={props.form[props.step.fieldId]} id={props.step.fieldId} label={props.step.fieldLabel} placeholder={props.step.fieldPlaceholder} type={props.step.fieldType} />
                    :
                    <></>
            }

            {
                props.step.fieldType == 'select' ?
                    <AuthSelectInput key={`input-${props.index}`} label={props.step.fieldLabel} handleInputValue={props.handleInput} selectableValues={props.step.selectValues!} id={props.step.fieldId} value={props.form[props.step.fieldId]} />
                    :
                    <></>
            }

            {
                props.step.fieldType == 'file' ?
                    <AuthImageInput key={`input-${props.index}`} handleInputValue={props.handleInput} id={props.step.fieldId} type={props.step.fieldType} key={`input-${props.index}`} value={props.form[props.step.fieldId]} />
                    :
                    <></>
            }
        </>
    )
}

export default AuthChooseInput;