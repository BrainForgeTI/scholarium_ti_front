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
                    <ul className="pt-10 flex flex-wrap justify-around gap-15">
                        {adventures.map((adventure) => {
                            return (
                                <li key={adventure.id}>
                                    <AdventureCard adventure={adventure} />
                                </li>
                            )
                        })}

                        <li key={'newadventurecard'}>
                            <NewAdventureCard />
                        </li>
                    </ul>
                </div>
            </>
        </PageLayout>
    )
}