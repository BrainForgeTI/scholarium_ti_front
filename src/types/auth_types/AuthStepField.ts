import { ChangeEvent } from "react"
import { SelectInputType } from "./SelectInputType"

export type AuthStepFields = {
    fieldId: string
    fieldType: string
    fieldLabel: string
    fieldPlaceholder: string
    selectValues?: SelectInputType[]
    fieldValidator: (value: any) => boolean
}