import { useEffect } from 'react';
import FireIcon from '../../assets/icons/fire.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import EditIcon from '../../assets/icons/edit.svg';
import { getTextConstrastColorGradient } from '../../utils/getColorContrastGradient.ts';
import { AdventureCardType } from '../../types/AdventureCardType.ts';

interface Props {
    adventure: AdventureCardType
}

const AdventureCard = (props: Props) => {

    useEffect(() => {
        console.log(getTextConstrastColorGradient('#DE9673', '#E06527'))
    }, [])

    return (
        <div className="relative w-[306px] min-h-[474px] bg-base300 rounded-[20px] p-3 pb-10 flex flex-col items-center">
            <button className='cursor-pointer absolute text-base-content/60 w-[28px] border border-neutral-content/50  h-[28px] bg-base300/74 rounded-[5px] flex justify-center items-center right-[30px] top-[20px] hover:scale-[1.1] transition-all duration-150'>
                {
                    props.adventure.id ?
                        <EditIcon />
                        :
                        <TrashIcon />
                }
            </button>

            <svg width="281" height="217" viewBox="0 0 281 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C0 8.95428 8.9543 0 20 0H261C272.046 0 281 8.95431 281 20V170.347C281 173.063 280.445 175.83 279.259 178.273C242.899 253.158 136.273 200.433 16.714 177.454C7.09941 175.606 0 167.281 0 157.49V20Z" fill={`url(#paint0_linear_143_284_${props.adventure.id})`} />
                <defs>
                    <linearGradient id={`paint0_linear_143_284_${props.adventure.id}`} x1="6.5" y1="171.5" x2="276" y2="4.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={props.adventure.colorFrom} />
                        <stop offset="1" stopColor={props.adventure.colorTo} />
                    </linearGradient>
                </defs>
                <foreignObject x="0" y="0" width="281" height="175">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        {
                            props.adventure.id ?
                                <div className='w-[80px] h-[80px] bg-cover bg-center rounded-[10px]' style={{ backgroundImage: `url("${props.adventure.imageUrl}")` }}></div>
                                :
                                <div className='relative w-[80px] h-[80px] rounded-[10px] border border-base-content/50' style={{ backgroundColor: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo), opacity: 0.8 }}>
                                    <button className='absolute bottom-[-10px] right-[-10px] w-[30px] h-[30px] border border-base-content/50 rounded-[5px] text-base-content flex justify-center items-center cursor-pointer hover:scale-[1.1] transition duration-150' style={{ backgroundColor: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo) }}>
                                        <EditIcon />
                                    </button>
                                </div>

                        }
                        <span className={`font-bold pt-5`} style={{ color: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo) }}>{props.adventure.title}</span>
                    </div>
                </foreignObject>
            </svg>

            <div className='w-[90px] h-[90px] mt-2 flex justify-center items-center'>
                <img src={props.adventure.character?.imageUrl}></img>
            </div>

            <div className='w-full flex gap-3 justify-center items-center pt-2'>
                <span className='font-bold font-[12px] text-base-content'>{props.adventure.character?.name}</span>
                <div className='flex gap-2 text-[#FFB60B] items-center'>
                    <FireIcon />
                    <span className='font-bold'>{props.adventure.character?.level}</span>
                </div>
            </div>

            <div className='relative w-[181px] p-1 rounded-full bg-base-content/10 mt-2 flex items-center'>
                <div className={`w-full h-[10px] rounded-full opacity-50`} style={{ backgroundImage: `linear-gradient(to right, ${props.adventure.colorFrom}, ${props.adventure.colorTo})`, width: `${props.adventure.progress}%` }}></div>
                <span className='absolute text-[12px] font-bold' style={{ left: '50%', transform: 'translateX(-50%)', color: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo) }}>{props.adventure.progress}%</span>
            </div>

            <button className='cursor-pointer hover:scale-[1.01] transiion-all duration-150 w-[188px] h-[43px] text-[12px] font-medium rounded-[10px] mt-6' style={{ backgroundImage: `linear-gradient(to right, ${props.adventure.colorFrom}, ${props.adventure.colorTo})`, color: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo) }}>{props.adventure.progress !== 0 ? "Continuar aventura" : "Começar aventura"}</button>
        </div>
    )
}

export default AdventureCard;
