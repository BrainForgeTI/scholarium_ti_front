import { useState, ChangeEvent } from "react";
import ActionButton from "../../components/ActionButton/ActionButton";
import { PageLayout, PageTitle } from "../../components/PageLayout"
import { SearchInput } from './index';
import EditIcon from '../../assets/icons/edit.svg';

const MyAdventurePage = () => {
    const [searchValue, setSearchValue] = useState('');

    function handleSearchValue(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value);
    }

    return (
        <PageLayout awaitAdventureLoad={true}>
            <div className="w-full">
                <PageTitle title="Aventura" />

                <div className="w-full flex gap-10">
                    <div className="min-w-[137px]">
                        <ActionButton action={() => { }} label="+ Capítulo" style="bg-primary text-primary-content text-[14px]" />
                    </div>

                    <div className="w-full h-[53px]">
                        <SearchInput value={searchValue} handleInput={handleSearchValue} placeholder="Buscar capítulo..." />
                    </div>

                    <div className="min-w-[137px]">
                        <ActionButton action={() => { }} label="Ver anotações" style="bg-neutral/11 text-neutral text-[14px]" />
                    </div>

                    <div className="min-w-[137px] text ">
                        <ActionButton Icon={EditIcon} action={() => { }} label="Editar" style="bg-action-prev/11 border border-action-prev/89 gap-5 text-action-prev-content" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default MyAdventurePage;