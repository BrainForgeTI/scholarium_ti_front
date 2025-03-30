export type SignUpFormType = {
    firstName: string
    lastName: string
    userName: string
    profileImage: File | null
    dateOfBirth: string
    gender: string
    email: string
    password: string
    confirmPassword: string
    terms: boolean
}