import { Character } from "./CharacterType"

export type AdventureCardType = {
    id?: string
    imageUrl: string
    colorFrom: string
    colorTo: string
    title: string
    character?: Character
    progress: number
}