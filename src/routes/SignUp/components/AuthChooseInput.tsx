import { AuthFormsInput } from "../../../components/PagelayoutAuth";
import { AuthStepFields } from "../../../types/auth_types/AuthStepField";
import { SignUpFormType } from "../../../types/auth_types/SignUpFormType";

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
                props.step.fieldType === 'text' || props.step.fieldType === 'email' || props.step.fieldType === 'password' ?
                    <AuthFormsInput key={`step-${props.index}`} handleInputValue={props.handleInput} value={props.form[props.step.fieldId]} id={props.step.fieldId} label={props.step.fieldLabel} placeholder={props.step.fieldPlaceholder} type={props.step.fieldType} />
                    :
                    <></>
            }
        </>
    )
}

export default AuthChooseInput;