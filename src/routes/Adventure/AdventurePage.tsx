import { useContext, useEffect } from "react"
import { PageLayout } from "../../components/PageLayout"
import { AdventureContext } from "../../context/adventure/AdventureContext"

export const AdventurePage = () => {
    const adventureContext = useContext(AdventureContext);

    useEffect(() => {
        console.log(adventureContext.adventure)
    })

    return (
        <PageLayout>
            <div>oi</div>
        </PageLayout>
    )
}