import { JSX } from "react"
import { SideMenu } from "../SideMenu";
import { LayoutHeader } from "../PageLayout";

interface Props {
    children: JSX.Element;
}

const PageLayout = (props: Props) => {
    return (
        <div className="w-screen h-screen font-poppins bg-base100 flex">
            <div className="h-full">
                <SideMenu />
            </div>
            <LayoutHeader />
        </div>
    )
}

export default PageLayout;