import { JSX, useEffect, useState } from "react";
import { AdventureContext } from "./AdventureContext";
import { AdventureCardType } from "../../types/AdventureCardType";
import { useNavigate } from "react-router";

export const AdventureProvider = ({ children }: { children: JSX.Element }) => {
    const [adventure, setAdventure] = useState<AdventureCardType | null>(null);
    const navigation = useNavigate();

    function leaveAdventure() {
        setAdventure(null);
    }

    function joinAdventure(adventure: AdventureCardType) {
        setAdventure(adventure);
    }

    useEffect(() => {
        if (adventure) {
            navigation("/adventure");
        }
    }, [adventure])

    return (
        <AdventureContext.Provider value={{ adventure, setAdventure, leaveAdventure, joinAdventure }}>
            {children}
        </AdventureContext.Provider>
    )
}