import { AuthFormsBox, AuthFormsInput, PagelayoutAuth } from "../../components/PagelayoutAuth";
import Castle from "../../assets/images/castle.png";


export const SignInPage = () => {
    return (<div>
    
            <PagelayoutAuth right={false} pageText={<p className="text-xl lg:w-[300px] xl:w-auto 2xl:w-auto text-end"> Aprenda, <span className="text-3xl 2xl:text-4xl text-primary font-bold">CONQUISTE,</span> evolua </p>} pageImage={Castle} imageAlt="Um castelo iluminado">
                <div>
                <AuthFormsBox>
                    <div>
                        {/* <AuthFormsInput type="email" id="Email" label="EmailUser" placeholder="Seu Email" value="text" handleInputValue={function()}></AuthFormsBox> */}
                    </div>
                </AuthFormsBox>
                </div>
            </PagelayoutAuth>
        </div>
        
        );
}

