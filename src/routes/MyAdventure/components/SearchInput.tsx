import { ChangeEvent } from "react"

interface Props {
    value: string
    placeholder: string
    handleInput: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = (props: Props) => {
    return (
        <div className="w-full h-full border border border-base-content/17 rounded-[10px] flex">
            <input placeholder={props.placeholder} onChange={props.handleInput} value={props.value} className="w-full h-full text-base-content px-6 py-2 font-normal outline-none rounded-[10px]" type="text" />
            <div className="h-full flex items-center px-3">
                <div className="w-[48px] h-[36px] bg-neutral/11 flex items-center rounded-[10px]">
                    {/* adicionar lupa */}
                </div>
            </div>
        </div>
    )
}

export default SearchInput;