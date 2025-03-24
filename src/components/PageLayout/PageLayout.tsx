import { JSX } from "react"
import { SideMenu } from "../SideMenu";
import { LayoutHeader, MainContent } from "../PageLayout";

interface Props {
    children: JSX.Element;
}

const PageLayout = (props: Props) => {
    return (
        <div className="w-screen h-screen font-poppins bg-base100 flex">
            <div className="h-full">
                <SideMenu />
            </div>
            <div className="relative w-full flex flex-col">
                <div className="w-full absolute">
                    <LayoutHeader />
                </div>
                <div className="h-[63px]"></div>
                <MainContent>
                    {props.children}
                </MainContent>
            </div>
        </div>
    )
}

export default PageLayout;