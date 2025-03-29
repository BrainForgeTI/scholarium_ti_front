export type SignUpFormType = {
    firstName: string
    lastName: string
    userName: string
    profileImage: File | null
    dateOfBirth: Date
    gender: string
    email: string
    password: string
    confirmPassword: string
}