import { JSX } from "react"
import { SideMenu } from "../SideMenu";
import { LayoutHeader, MainContent } from "../PageLayout";

interface Props {
    children: JSX.Element;
}

const PageLayout = (props: Props) => {
    return (
        <div className="md:h-screen w-screen min-h-dvh font-poppins bg-base100 flex">
            <div className="h-full">
                <SideMenu />
            </div>
            <div className="md:overflow-y-hidden md:overflow-x-hidden relative w-full flex flex-col overflow-y-hidden overflow-x-hidden">
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