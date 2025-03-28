import { AuthFormsBox, AuthFormsInput, PagelayoutAuth } from "../../components/PagelayoutAuth";
import TreeTravaller from "../../assets/images/treeTravallers.png";
import { ChangeEvent, useState } from "react";
import { SignUpFormType } from "../../types/auth_types/SignUpFormType";
import { BackStepButton, AuthSubmitButton } from "./index";
import { AuthStepType } from "../../types/auth_types/AuthStepType";

export const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState({
        step: 1,
        action: () => { }
    });

    const [signUpForm, setSignUpForm] = useState<SignUpFormType>({
        firstName: '',
        lastName: '',
        userName: '',
        profileImage: '',
        dateOfBirth: new Date(),
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [steps, setSteps] = useState<AuthStepType[]>([
        {
            title: 'Crie sua conta',
            step: 0,
            showReturn: false,
            buttonLabel: 'Próximo',
            validStep: false,
            fields: [
                { fieldId: 'firstName', fieldValidator: (value: any) => { return true } },
                { fieldId: 'lastName', fieldValidator: (value: any) => { return true } },
                { fieldId: 'userName', fieldValidator: (value: any) => { return true } }
            ]
        },
        {
            title: 'Informações pessoais',
            step: 1,
            showReturn: true,
            buttonLabel: 'Próximo',
            validStep: false,
            fields: [
                { fieldId: 'profileImage', fieldValidator: (value: any) => { return true } },
                { fieldId: 'dateOfBirth', fieldValidator: (value: any) => { return true } },
                { fieldId: 'gender', fieldValidator: (value: any) => { return true } }
            ]
        },
        {
            title: 'Informações de acesso',
            step: 2,
            showReturn: true,
            buttonLabel: 'Confirmar cadastro',
            validStep: false,
            fields: [
                { fieldId: 'email', fieldValidator: (value: any) => { return true } },
                { fieldId: 'password', fieldValidator: (value: any) => { return true } },
                { fieldId: 'password', fieldValidator: (value: any) => { return true } }
            ]
        },
        {
            title: 'Confirme o seu E-mail',
            step: 3,
            showReturn: false,
            buttonLabel: 'Validar',
            validStep: false,
            fields: [
                { fieldId: 'code1', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code2', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code3', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code4', fieldValidator: (value: any) => { return true } }
            ]
        }
    ]);

    function handleSignUpFormInput(event: ChangeEvent<HTMLInputElement>, field: string) {
        setSignUpForm((prev) => ({
            ...prev,
            [field]: event.target.value
        }));
    }

    function validStep(step: number) {

    }

    return (
        <PagelayoutAuth right={true} pageText={<p> Comece sua <span className="text-4xl text-primary font-bold">JORNADA</span> agora! </p>} pageImage={TreeTravaller} imageAlt="">
            <div className="w-full">
                <div className="w-[384px]">
                    <h1 className="text-base-content text-[20px] font-medium text-center mb-5">{steps[currentStep.step].title}</h1>

                    <AuthFormsBox>
                        <div className="w-full flex flex-col gap-5">
                            {
                                steps[currentStep.step].showReturn ? <BackStepButton /> : <></>
                            }

                            {
                                currentStep.step == 1 ?
                                    // <>
                                    //     <AuthFormsInput handleInputValue={handleSignUpFormInput} value={signUpForm.firstName} id="firstName" label="Primeiro nome" placeholder="Seu nome" type="text" />
                                    //     <AuthFormsInput handleInputValue={handleSignUpFormInput} value={signUpForm.lastName} id="lastName" label="Último nome" placeholder="Seu sobrenome" type="text" />
                                    //     <AuthFormsInput handleInputValue={handleSignUpFormInput} value={signUpForm.userName} id="userName" label="Nome de usuário" placeholder="Seu nome de usuário" type="text" />
                                    // </>

                                    steps[currentStep.step].fields.map((step, index) => {
                                        return (
                                            <AuthFormsInput key={`step-${index}`} handleInputValue={handleSignUpFormInput} value={signUpForm[step.fieldId]} id={step.fieldId} label="Primeiro nome" placeholder="Seu nome" type="text" />
                                        )
                                    })
                                    :
                                    <></>
                            }

                            <AuthSubmitButton action={currentStep.action} label={steps[currentStep.step].buttonLabel} />

                        </div>
                    </AuthFormsBox>
                </div>
            </div>
        </PagelayoutAuth >
    );
}

