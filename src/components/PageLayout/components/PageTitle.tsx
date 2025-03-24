interface Props {
    title: string
}

const PageTitle = (props: Props) => {
    return (
        <h1 className="font-bold text-[36px] py-8">{props.title}</h1>
    )
}

export default PageTitle;