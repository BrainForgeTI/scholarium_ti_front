import { JSX } from "react"
import { SideMenu } from "../SideMenu";

interface Props {
    children: JSX.Element;
}

export const PageLayout = (props: Props) => {
    return (
        <div className="w-screen h-screen font-poppins">
            <SideMenu />
        </div>
    )
}