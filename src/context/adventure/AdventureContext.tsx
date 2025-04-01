import { createContext } from "react"
import { AdventureCardType } from "../../types/AdventureCardType"

export type AdventureContextType = {
    adventure: AdventureCardType | null
    setAdventure: (adventure: AdventureCardType) => void
    leaveAdventure: () => void
    joinAdventure: (adventure: AdventureCardType) => void
}

export const AdventureContext = createContext<AdventureContextType>(null!);