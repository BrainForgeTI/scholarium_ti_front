interface Props {
    index: string
    title: string
}

const ChapterSection = (props: Props) => {
    return (
        <div className="w-full bg-neutral/5 font-bold text-[20px] text-neutral rounded-[10px] h-[63px] flex justify-between items-center px-5">
            <p>{`${props.index}. ${props.title}`}</p>
        </div>
    )
}

export default ChapterSection;