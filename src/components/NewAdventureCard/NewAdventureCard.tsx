import AddIcon from '../../assets/icons/add.svg';

interface Props {
    createNewAdventure: () => void;
}

const NewAdventureCard = (props: Props) => {

    return (
        <div className='w-[306px] min-h-[474px] h-full rounded-[20px]'>
            <button onClick={props.createNewAdventure} className="w-full rounded-[20px] h-full cursor-pointer hover:bg-neutral/10  bg-base300/49 border border-base-content/29  text-base-content/23 flex justify-center items-center flex-col gap-4">
                <div className='w-[78px] h-[78px] bg-base-content/23 text-base300/70 rounded-[10px] flex justify-center items-center'>
                    <AddIcon />
                </div>
                <span className='font-bold text-[20px]'>Criar aventura</span>
            </button>
        </div>
    )
}

export default NewAdventureCard;