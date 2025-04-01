import { JSX, useState } from "react";
import { AdventureContext } from "./AdventureContext";
import { AdventureCardType } from "../../types/AdventureCardType";

export const AdventureProvider = ({ children }: { children: JSX.Element }) => {
    const [adventure, setAdventure] = useState<AdventureCardType | null>(null);

    function leaveAdventure() {
        setAdventure(null);
    }

    function joinAdventure(adventure: AdventureCardType) {
        setAdventure(adventure);
    }

    return (
        <AdventureContext.Provider value={{ adventure, setAdventure, leaveAdventure, joinAdventure }}>
            {children}
        </AdventureContext.Provider>
    )
}