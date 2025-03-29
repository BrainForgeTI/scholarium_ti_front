import { AuthFormsBox, PagelayoutAuth } from "../../components/PagelayoutAuth";
import TreeTravaller from "../../assets/images/treeTravallers.png";
import { ChangeEvent, useEffect, useState } from "react";
import { SignUpFormType } from "../../types/auth_types/SignUpFormType";
import { BackStepButton, AuthSubmitButton, AuthChooseInput } from "./index";
import { AuthStepType } from "../../types/auth_types/AuthStepType";
import { Validator } from "../../utils/validator";

export const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState({
        step: 0,
    });

    const [signUpForm, setSignUpForm] = useState<SignUpFormType>({
        firstName: '',
        lastName: '',
        userName: '',
        profileImage: null,
        dateOfBirth: new Date(),
        gender: 'Masculino',
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
                { fieldId: 'firstName', fieldType: 'text', fieldLabel: "Primeiro nome", fieldPlaceholder: 'Seu nome', fieldValidator: (value: any) => { return !validator.emptyString(value) } },
                { fieldId: 'lastName', fieldType: 'text', fieldLabel: "Último nome", fieldPlaceholder: 'Seu sobrenome', fieldValidator: (value: any) => { return !validator.emptyString(value) } },
                { fieldId: 'userName', fieldType: 'text', fieldLabel: "Nome de usuário", fieldPlaceholder: 'Seu nome de usuário', fieldValidator: (value: any) => { return !validator.emptyString(value) } }
            ]
        },
        {
            title: 'Informações pessoais',
            step: 1,
            showReturn: true,
            buttonLabel: 'Próximo',
            validStep: false,
            fields: [
                { fieldId: 'profileImage', fieldType: 'file', fieldLabel: "", fieldPlaceholder: '', fieldValidator: (value: any) => { return true } },
                { fieldId: 'dateOfBirth', fieldType: 'date', fieldLabel: "Data de nascimento", fieldPlaceholder: 'Data de aniversário', fieldValidator: (value: any) => { return true } },
                { fieldId: 'gender', fieldType: 'select', fieldLabel: "Gênero", fieldPlaceholder: 'Gênero', selectValues: [{ label: 'Masculino', value: 'male' }, { label: 'Feminino', value: 'female' }, { label: 'Outro', value: 'other' }], fieldValidator: (value: any) => { return !validator.emptyString(value) } }
            ]
        },
        {
            title: 'Informações de acesso',
            step: 2,
            showReturn: true,
            buttonLabel: 'Confirmar cadastro',
            validStep: false,
            fields: [
                { fieldId: 'email', fieldType: 'email', fieldLabel: "E-mail", fieldPlaceholder: 'Seu email', fieldValidator: (value: any) => { return true } },
                { fieldId: 'password', fieldType: 'password', fieldLabel: "Senha", fieldPlaceholder: 'Sua senha', fieldValidator: (value: any) => { return true } },
                { fieldId: 'password', fieldType: 'password', fieldLabel: "Confirmar senha", fieldPlaceholder: 'Confirme a senha', fieldValidator: (value: any) => { return true } }
            ]
        },
        {
            title: 'Confirme o seu E-mail',
            step: 3,
            showReturn: false,
            buttonLabel: 'Validar',
            validStep: false,
            fields: [
                { fieldId: 'code1', fieldType: 'text', fieldLabel: "", fieldPlaceholder: '0', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code2', fieldType: 'text', fieldLabel: "", fieldPlaceholder: '0', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code3', fieldType: 'text', fieldLabel: "", fieldPlaceholder: '0', fieldValidator: (value: any) => { return true } },
                { fieldId: 'code4', fieldType: 'text', fieldLabel: "", fieldPlaceholder: '0', fieldValidator: (value: any) => { return true } }
            ]
        }
    ]);

    const validator: Validator = new Validator();

    function handleSignUpFormInput(event: ChangeEvent<HTMLInputElement>, field: string) {
        setSignUpForm((prev) => ({
            ...prev,
            [field]: event.target.value
        }));
    }

    function handleSignUpImageInput(event: ChangeEvent<HTMLInputElement>, field: string) {
        if (event.target.files && event.target.files.length > 0) {

            setSignUpForm((prev) => ({
                ...prev,
                [field]: event.target.files![0]
            }));
        }
    }

    function checkAndSetValidStep(step: number) {
        const foundStep = steps.find((item) => item.step == step)
        if (foundStep) {
            const fields = foundStep.fields;

            let validFieldsAtThisStep = true;

            for (let field of fields) {
                if (!field.fieldValidator(signUpForm[field.fieldId])) {
                    validFieldsAtThisStep = false;
                    break;
                }
            }

            setSteps((prev) =>
                prev.map((item) => item.step === step ? { ...item, validStep: validFieldsAtThisStep } : item)
            )
        }
    }

    function goToNextStep() {
        console.log("oi")
        const nextStep = currentStep.step + 1;
        console.log(steps[0])
        if (steps[currentStep.step].validStep) {
            setCurrentStep({ step: nextStep })
        }
    }

    function backStep() {
        if (currentStep.step > 0) {
            setCurrentStep((prev) => ({ ...prev, step: currentStep.step - 1 }))
        }
    }

    useEffect(() => {
        checkAndSetValidStep(0);
        checkAndSetValidStep(1);
        console.log(signUpForm)
    }, [signUpForm])


    return (
        <PagelayoutAuth right={true} pageText={<p> Comece sua <span className="text-4xl text-primary font-bold">JORNADA</span> agora! </p>} pageImage={TreeTravaller} imageAlt="">
            <div className="w-full">
                <div className="w-[384px]">
                    <h1 className="text-base-content text-[20px] font-medium text-center mb-5">{steps[currentStep.step].title}</h1>

                    <AuthFormsBox>
                        <div className="w-full flex flex-col gap-5">
                            {
                                steps[currentStep.step].showReturn ? <BackStepButton action={backStep} /> : <></>
                            }

                            {
                                currentStep.step === 0 || currentStep.step === 1 || currentStep.step === 2 ?
                                    steps[currentStep.step].fields.map((step, index) => {
                                        return (
                                            <>
                                                {
                                                    step.fieldType !== 'file' ?
                                                        <AuthChooseInput form={signUpForm} step={step} index={index} handleInput={handleSignUpFormInput} />
                                                        :
                                                        <AuthChooseInput form={signUpForm} step={step} index={index} handleInput={handleSignUpImageInput} />
                                                }
                                            </>
                                        )
                                    })
                                    :
                                    <></>
                            }


                            <AuthSubmitButton action={goToNextStep} label={steps[currentStep.step].buttonLabel} styles={steps[currentStep.step].validStep ? 'bg-primary text-primary-content border-transparent mt-6' : 'mt-6 bg-primary/0 border-primary-content/50 text-primary-content/50'} disabled={steps[currentStep.step].validStep} />

                        </div>
                    </AuthFormsBox>
                </div>
            </div>
        </PagelayoutAuth >
    );
}

