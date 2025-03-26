import LogoSm from "../../assets/images/logo_sm.png"
export const Menu = () =>{
    return (<div className="flex items-center justify-around p-[15px] text-base-content">
        <div  className="flex items-center justify-around gap-[10px]">
            <img src= {LogoSm} alt="logo pequena Scholarium" />
            <p>Scholarium</p>
        </div>
        <div>
            <a href="" target="_blank" rel="noopener noreferrer">Por que nós?</a>
            <a href="" target="_blank" rel="noopener noreferrer">Gamificação</a>
            <a href="" target="_blank" rel="noopener noreferrer">Planos</a>
        </div>
        <button>Cadastrar</button>
    </div>);
}