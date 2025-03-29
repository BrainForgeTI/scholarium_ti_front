import { ChangeEvent } from "react"

export type AuthStepFields = {
    fieldId: string
    fieldType: string
    fieldLabel: string
    fieldPlaceholder: string
    selectValues?: Array<string>
    fieldValidator: (value: any) => boolean
}