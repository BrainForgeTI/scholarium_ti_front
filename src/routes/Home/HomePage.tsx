import { PageLayout, PageTitle } from "../../components/PageLayout";
import { AdventureCard } from "../../components/AdventureCard";
import { useEffect, useState } from "react";
import { AdventureCardType } from "../../types/AdventureCardType";
import { useApi } from "../../hooks/useApi";
import { NewAdventureCard } from "../../components/NewAdventureCard";

export const HomePage = () => {
    const api = useApi();
    const [adventures, setAdventures] = useState<AdventureCardType[]>([]);

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
                    <ul className="w-full pt-10 grid grid-cols-4 gap-30">
                        {adventures.map((adventure) => {
                            return (
                                <li key={adventure.id} className="w-full">
                                    <AdventureCard adventure={adventure} />
                                </li>
                            )
                        })}

                        <li key={'newadventurecard'} className="w-full">
                            <NewAdventureCard />
                        </li>
                    </ul>
                </div>
            </>
        </PageLayout>
    )
}