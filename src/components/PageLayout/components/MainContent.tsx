import { JSX } from "react";

interface Props {
    children: JSX.Element
}

const MainContent = (props: Props) => {
    return (
        <main className="w-full h-[calc(100%-60px)] px-8 py-4 overflow-y-auto overflow-x-hidden">
            {props.children}
        </main>
    )
}

export default MainContent;