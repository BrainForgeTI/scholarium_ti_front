import { PageLayout, PageTitle } from "../../components/PageLayout";
import { AdventureCard } from "../../components/AdventureCard";
import { useEffect, useState } from "react";
import { AdventureCardType } from "../../types/AdventureCardType";
import { useApi } from "../../hooks/useApi";
import { NewAdventureCard } from "../../components/NewAdventureCard";

export const HomePage = () => {
    const api = useApi();
    const [adventures, setAdventures] = useState<AdventureCardType[]>([]);
    const [newAdventure, setNewAdventure] = useState<AdventureCardType>({ title: '', progress: 0, imageUrl: '', colorFrom: '#000000', colorTo: '#FFFFFF' });
    const [addingNewAdventure, setAddingNewAdventure] = useState(false);

    async function getUserAdventures() {
        const userAdventures = await api.getUserAdventures('');
        console.log(userAdventures)
        setAdventures(userAdventures)
    }

    useEffect(() => {
        getUserAdventures();
    }, [])

    return (
        <PageLayout>
            <>
                <PageTitle title="Minhas Aventuras" />
                <div className="w-full">
                    <div className="p-8 rounded-[20px] border py-20 border-base-content/10">
                        <ul className="w-full flex flex-wrap justify-center gap-30">
                            {adventures.map((adventure) => {
                                return (
                                    <li key={adventure.id} className="">
                                        <AdventureCard adventure={adventure} />
                                    </li>
                                )
                            })}

                            {
                                addingNewAdventure
                                    ?
                                    <li key={'addingadventurecard'}>
                                        <AdventureCard adventure={newAdventure} />
                                    </li>
                                    :

                                    <li key={'newadventurecard'} className="">
                                        <NewAdventureCard setAddingNewAdventure={setAddingNewAdventure} />
                                    </li>

                            }
                        </ul>
                    </div>
                </div>
            </>
        </PageLayout>
    )
}