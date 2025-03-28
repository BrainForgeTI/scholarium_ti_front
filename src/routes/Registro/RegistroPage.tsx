import {Menu} from "../../components/PagelayoutLogin/menu"
import TreeTravaller from "../../assets/images/treeTravallers.png"

import wave from "../../assets/images/wave_bg.png"
export const Registro = () => {
    return ( <div className="flex bg-base200 h-screen w-screen font-poppins ">
            <Menu/>
            <div className="w-2/5  h-full"></div>
            <div className="flex flex-col gap-[30px] w-3/5 bg-cover bg-center h-full text-white  pt-[100px] items-end justify-center pe-[150px]" style={{ backgroundImage:`url('${wave}')` }}>
                <img src={TreeTravaller} alt="Três Viagantes" className="flex w-[400px] " />
                <div className="flex w-[400px] text-3xl justify-center items-end gap-[10px] text-wrap">
                <p>
                    Comece sua <span className="text-4xl text-primary font-bold">JORNADA</span> agora!
                </p>
                </div>

            </div>
            {/* <img src={WaveBg} alt="Wave" className="flex absolute right-0 h-screen " /> */}
           
    </div>);
}

