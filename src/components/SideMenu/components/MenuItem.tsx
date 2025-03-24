interface Props {
    label: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    active: boolean
}

const MenuItem = (props: Props) => {
    return (
        <button className={`select-none relative w-[240px] h-[47px] rounded-[15px] flex gap-8 items-center text-secondary-content border cursor-pointer ${props.active ? 'bg-secondary/20 border-secondary' : 'border-neutral/26 hover:bg-neutral/10'}`}>
            <div className="w-[19px] px-[23px]"><props.icon /></div>
            <span className="overflow-hidden pe-4 text-nowrap text-ellipsis text-[12px]">{props.label}</span>
            <span className={`${props.active ? 'visible' : 'invisible'} w-[6px] h-[19px] bg-secondary rounded-full absolute left-[-4px]`}></span>
        </button>
    )
}

export default MenuItem;