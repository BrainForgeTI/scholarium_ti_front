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
        <div className={`flex ${props.right ? '' : 'flex-row-reverse'} bg-base200 min-h-screen w-full font-poppins`}>
            <Menu />
            <div className={`w-full xl:w-1/2 2xl:w-2/5 h-full pt-[100px] pb-20 ${props.right ? 'ps-0 lg:ps-[150px]' : 'pe-0 lg:pe-[150px]'}`}>
                {props.children}
            </div>
            <div className={`hidden xl:flex flex-col gap-[30px] xl:w-1/2 2xl:w-3/5 bg-cover text-white pt-[150px] ${props.right ? 'pe-0 items-end lg:pe-[150px]' : 'ps-0 items-start lg:ps-[150px]'}`} style={{ backgroundImage: `url('${props.right ? WaveImage : WaveReverseImage}')` }}>
                <img src={props.pageImage} alt={props.imageAlt} className="flex xl:w-[400px] 2xl:w-[500px]" />
                <div className="flex w-[400px] text-3xl justify-center xl:mt-10 items-end gap-[10px] text-wrap">
                    {props.pageText}
                </div>

            </div>

        </div>
    )
}


export default PagelayoutAuth;
