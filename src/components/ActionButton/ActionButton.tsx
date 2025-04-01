interface Props {
    label: string
}

const ActionButton = (props: Props) => {
    return (
        <button className="w-full min-h-[50px] py-2 bg-primary hover:scale-[1.02] transition-all duration-300 text-primary-content rounded-[10px] cursor-pointer">{props.label}</button>
    )
}

export default ActionButton;