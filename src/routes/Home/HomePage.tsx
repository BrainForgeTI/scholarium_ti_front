import { PageLayout, PageTitle } from "../../components/PageLayout";
import { AdventureCard, adventureCardConfig } from "../../components/AdventureCard";
import { useEffect, useState } from "react";
import { AdventureCardType } from "../../types/AdventureCardType";
import { useApi } from "../../hooks/useApi";
import { NewAdventureCard } from "../../components/NewAdventureCard";

export const HomePage = () => {
    const api = useApi();
    const [adventures, setAdventures] = useState<AdventureCardType[]>([]);
    const [newAdventure, setNewAdventure] = useState<AdventureCardType>({ title: 'Nova Aventura', progress: 0, imageUrl: '', colorFrom: '#000000', colorTo: '#FFFFFF' });
    const [addingNewAdventure, setAddingNewAdventure] = useState(false);

    async function getUserAdventures() {
        const userAdventures = await api.getUserAdventures('');
        console.log(userAdventures)
        setAdventures(userAdventures)
    }

    function createNewAdventure() {
        const colors = adventureCardConfig.suggestedColors[Math.floor(Math.random() * adventureCardConfig.suggestedColors.length)]
        setNewAdventure((prev) => ({
            ...prev,
            colorFrom: colors.colorFrom,
            colorTo: colors.colorTo
        }))

        setAddingNewAdventure(true)
    }

    function cancelAddNewAdventure() {
        console.log('chamou')
        setAddingNewAdventure(false);
        setNewAdventure({ title: 'Nova Aventura', progress: 0, imageUrl: '', colorFrom: '#000000', colorTo: '#FFFFFF' });
    }

    useEffect(() => {
        getUserAdventures();
    }, [])

    return (
        <PageLayout>
            <>
                <PageTitle title="Minhas Aventuras" />
                <div className="w-full mt-10">
                    <div className="p-8 rounded-[20px] border p-8 border-base-content/10">
                        <ul className="md:gap-30 w-full flex flex-wrap justify-center gap-10">
                            {adventures.map((adventure) => {
                                return (
                                    <li key={adventure.id} className="">
                                        <AdventureCard adventure={adventure} setAdventures={setAdventures} />
                                    </li>
                                )
                            })}

                            {
                                addingNewAdventure
                                    ?
                                    <li key={'addingadventurecard'}>
                                        <AdventureCard setNewAdventure={setNewAdventure} cancelAddNewAdventure={cancelAddNewAdventure} addingNewAdventure={addingNewAdventure} adventure={newAdventure} />
                                    </li>
                                    :

                                    <li key={'newadventurecard'} className="">
                                        <NewAdventureCard createNewAdventure={createNewAdventure} />
                                    </li>

                            }
                        </ul>
                    </div>
                </div>
            </>
        </PageLayout>
    )
}