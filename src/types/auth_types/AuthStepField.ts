import { ChangeEvent } from "react"

export type AuthStepFields = {
    fieldId: string
    fieldValidator: (value: any) => boolean
}