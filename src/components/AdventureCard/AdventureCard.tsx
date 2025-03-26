import { useEffect } from 'react';
import FireIcon from '../../assets/icons/fire.svg';
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
            <button className='cursor-pointer absolute text-base-content/34 w-[21px] h-[21px] bg-base300/74 rounded-[5px] flex justify-center items-center right-[30px] top-[20px]'>
                <EditIcon />
            </button>

            <div className='w-full h-[217px] rounded-b-[20px] rounded-t-[20px]' style={{ backgroundImage: `linear-gradient(to right, ${props.adventure.colorFrom}, ${props.adventure.colorTo})` }}>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className='w-[80px] h-[80px] bg-cover bg-center rounded-[10px]' style={{ backgroundImage: `url("${props.adventure.imageUrl}")` }}></div>
                    <span className={`font-bold pt-5`} style={{ color: getTextConstrastColorGradient(props.adventure.colorFrom, props.adventure.colorTo) }}>{props.adventure.title}</span>
                </div>
            </div>

            <div className='w-[90px] h-[90px] mt-2 flex justify-center items-center'>
                <img src={props.adventure.character.imageUrl}></img>
            </div>

            <div className='w-full flex gap-3 justify-center items-center pt-2'>
                <span className='font-bold font-[12px] text-base-content'>{props.adventure.character.name}</span>
                <div className='flex gap-2 text-[#FFB60B] items-center'>
                    <FireIcon />
                    <span className='font-bold'>{props.adventure.character.level}</span>
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
