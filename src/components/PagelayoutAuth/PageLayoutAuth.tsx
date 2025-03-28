import { JSX } from "react";
import WaveImage from '../../assets/images/wave_bg.png';
import WaveReverseImage from '../../assets/images/wave_bg_reverse.png';
import { Menu } from './index';

interface Props {
    pageImage: string
    imageAlt: string
    pageText: JSX.Element
    children: JSX.Element
    right: boolean
}

const PagelayoutAuth = (props: Props) => {
    return (
        <div className={`flex ${props.right ? '' : 'flex-row-reverse'} bg-base200 h-screen w-screen font-poppins`}>
            <Menu />
            <div className={`w-2/5 h-full pt-[100px] ${props.right ? 'items-start ps-[150px]' : 'items-end pe-[150px]'}`}>
                {props.children}
            </div>
            <div className={`flex flex-col gap-[30px] w-3/5 bg-cover h-full text-white pt-[100px] ${props.right ? 'items-end pe-[150px]' : 'items-start ps-[150px]'} justify-center`} style={{ backgroundImage: `url('${props.right ? WaveImage : WaveReverseImage}')` }}>
                <img src={props.pageImage} alt={props.imageAlt} className="flex" />
                <div className="flex w-[400px] text-3xl justify-center items-end gap-[10px] text-wrap">
                    {props.pageText}
                </div>

            </div>

        </div>
    )
}


export default PagelayoutAuth;
