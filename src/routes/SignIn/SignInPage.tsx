import { AuthFormsBox, AuthFormsInput, PagelayoutAuth } from "../../components/PagelayoutAuth";
import Castle from "../../assets/images/castle.png";
import { useEffect, useState } from "react";
import { AuthStepFields } from "../../types/auth_types/AuthStepField";
import { ChangeEvent } from "react"

export const SignInPage = () => {
    const [loginForm,setLoginForm] = useState({
        email:"",
        password:""
    })

    function handleInputValue(event:ChangeEvent<HTMLInputElement>,fieldId:string){

        setLoginForm((prev)=>({
            ...prev,
            [fieldId]:event.target.value
        }))
    }
    const [emailValue,setEmailValue] = useState<AuthStepFields>(
        {
            fieldId:"email",
            fieldLabel:"Email",
            fieldPlaceholder:"Seu Email",
            fieldType:"email",
            fieldValidator:()=>{return true}
        }
    )

    const [senhaValue,setSenhaValue] = useState<AuthStepFields>(
        {
            fieldId:"password",
            fieldLabel:"Senha",
            fieldPlaceholder:"Sua Senha",
            fieldType:"password",
            fieldValidator:()=>{return true}
        }
    )
    useEffect(()=>{
        console.log(loginForm)
    },[loginForm])
    return (<div>
    
            <PagelayoutAuth right={false} pageText={<p className="text-xl lg:w-[300px] xl:w-auto 2xl:w-auto text-end"> Aprenda, <span className="text-3xl 2xl:text-4xl text-primary font-bold">CONQUISTE,</span> evolua </p>} pageImage={Castle} imageAlt="Um castelo iluminado">
                <div className="w-full flex justify-end">
                    <div className="w-[320px] lg:w-[384px] flex lg:block justify-center">
                        <AuthFormsBox>
                            <div className="w-full flex flex-col gap-5">
                                <AuthFormsInput type={emailValue.fieldType} id={emailValue.fieldId} label={emailValue.fieldLabel} placeholder={emailValue.fieldPlaceholder} value={loginForm.email} handleInputValue={handleInputValue}></AuthFormsInput>
                                <AuthFormsInput type={senhaValue.fieldType} id={senhaValue.fieldId} label={senhaValue.fieldLabel} placeholder={senhaValue.fieldPlaceholder} value={loginForm.password} handleInputValue={handleInputValue}></AuthFormsInput>
                            </div>
                        </AuthFormsBox>
                        <div className="border border-white">
                            <p>Qualquer coisa</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </PagelayoutAuth>
        </div>
        
        );
}

