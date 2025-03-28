interface Props {
    label: string
    action: () => void
    disabled?: boolean
    backgroundColor?: string
    textColor?: string
    marginTop?: string
}

const AuthSubmitButton = (props: Props) => {
    return (
        <button type="button" className={`text-[18px] hover:scale-[1.03] cursor-pointer transition-all duration-250 rounded-[10px] h-[50px] flex items-center justify-center ${props.marginTop ? props.marginTop : 'mt-6'} ${props.backgroundColor ? props.backgroundColor : 'bg-primary'} ${props.textColor ? props.textColor : 'text-base-content'}`} disabled={props.disabled ? props.disabled : false} >{props.label}</button>
    )
}

export default AuthSubmitButton;