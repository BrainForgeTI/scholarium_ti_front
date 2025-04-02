import { JSX, useContext, useEffect } from "react";
import { AdventureContext } from "./AdventureContext";
import { useNavigate, useParams } from "react-router";
import { useApi } from "../../hooks/useApi";

export const AdventureAuth = ({ children }: { children: JSX.Element }) => {
    const adventureContext = useContext(AdventureContext);
    const { id } = useParams<{ id: string }>();
    const navigation = useNavigate();
    const api = useApi();

    // async function authenticateAdventure() {
    //     if (!adventureContext.adventure) {
    //         if (id) {
    //             const adventure: AdventureCardType | null = await api.getAdventure(id);
    //             if (adventure) {
    //                 adventureContext.setAdventure(adventure);
    //                 return;
    //             }
    //         }

    //         navigation('/home');
    //     }
    // }

    async function authenticateAdventure() {
        console.log("uma vez")
        if (!id) {
            navigation('/home')
            return
        } else {
            if (!adventureContext.adventure) {
                const adventure = await api.getAdventure(id)
                if (adventure) {
                    setTimeout(() => {
                        adventureContext.setAdventure(adventure);
                    }, 1000)
                } else {
                    navigation("/home");
                }
            }
        }
    }

    useEffect(() => {
        authenticateAdventure()
    }, [])


    return children;
}