import LogoSm from "../../../assets/images/logo_sm.png";

const Menu = () => {
    return (<div className="flex items-center justify-between py-[15px]  px-[150px] text-base-content absolute w-full">
        <div className="flex items-center justify-around gap-[10px]">
            <img src={LogoSm} alt="logo pequena Scholarium" />
            <p>Scholarium</p>
        </div>
        <div className="flex gap-[10px]">
            <a href="" target="_blank" rel="noopener noreferrer">Por que nós?</a>
            <a href="" target="_blank" rel="noopener noreferrer">Gamificação</a>
            <a href="" target="_blank" rel="noopener noreferrer">Planos</a>
        </div>
        <button className="p-[10px] rounded-[15px] w-[150px]">Cadastrar</button>
    </div>);
}

export default Menu;