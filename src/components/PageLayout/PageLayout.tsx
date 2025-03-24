import { JSX } from "react"
import { SideMenu } from "../SideMenu/SideMenu";

interface Props {
    children: JSX.Element;
}

export const PageLayout = (props: Props) => {
    return (
        <div className="w-screen h-screen">
            <SideMenu />
        </div>
    )
}