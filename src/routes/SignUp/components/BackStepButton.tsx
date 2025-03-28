import ArrowLeftIcon from "../../../assets/icons/arrow_left.svg";

interface Props {
    action: () => void
}

const BackStepButton = () => {
    return (
        <button className="flex gap-2 cursor-pointer items-center text-[14px] text-white/50 mb-8">
            <ArrowLeftIcon />
            <span className="underline">Voltar</span>
        </button>
    )
}

export default BackStepButton;