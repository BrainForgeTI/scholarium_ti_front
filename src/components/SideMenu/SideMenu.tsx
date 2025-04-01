import { Link, useLocation, useNavigate } from "react-router";
import MenuItem from "./components/MenuItem";
import { sideMenuGlobalRoutes, sideMenuAdventureRoutes } from "./SideMenuConfig";
import LogoSM from "../../assets/images/logo_sm.png";
import MenuIcon from "../../assets/icons/menu.svg";
import GoldImg from "../../assets/images/gold.png";
import { useContext, useEffect, useState } from "react";
import { AdventureContext } from "../../context/adventure/AdventureContext";
import { SideMenuRoutes } from "../../types/side_menu/SideMenuRoutes";

export const SideMenu = () => {
    const globalRoutes = sideMenuGlobalRoutes;
    const adventureRoutes = sideMenuAdventureRoutes;
    const location = useLocation();
    const navigation = useNavigate();

    const adventureContext = useContext(AdventureContext);
    const [menuActive, setMenuActive] = useState(false);

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    function navigateTo(routeType: string, path: string) {
        if (routeType === 'global') {
            adventureContext.setAdventure(null);
        }

        navigation(path);
    }

    function renderRoutes(routes: SideMenuRoutes) {
        return routes.routes.map((route) => {
            const currentPath = location.pathname.split('/')[1];
            const routeActive = `/${currentPath}` == route.path;
            console.log(location.pathname.split('/'))
            return (
                <li key={route.path}>
                    <MenuItem action={() => { navigateTo(routes.type, route.path) }} label={route.label} icon={route.icon} active={routeActive} />
                </li>
            )
        })
    }

    useEffect(() => {
        const html = document.documentElement;
        if (menuActive) {
            html.style.overflowY = 'hidden';
        } else {
            html.style.overflowY = 'auto';
        }
    }, [menuActive])

    useEffect(() => {
        console.log(adventureContext.adventure)
    }, [adventureContext.adventure])

    return (
        <aside className={`fixed lg:static h-full flex gap-[15px] z-50 transition-all duration-350 ${menuActive ? 'left-[0px]' : 'md:left-[-350px] left-[-300px]'}`}>
            <div className="md:w-[350px] bg-base200 w-[300px] h-full flex p-4 flex-col items-center border-e border-base-content/20 overflow-y-auto">
                <div className="flex gap-3 text-base-content/80 font-bold text-[24px] items-center h-[64px]">
                    <img src={LogoSM}></img>
                    <span className="uppercase">Scholarium</span>
                </div>
                <nav className="w-full pt-10 flex flex-col gap-6">
                    {
                        adventureContext.adventure ?
                            <div>
                                <div className="text-base-content/54 uppercase text-[15px] ps-3 pb-2 font-semibold">{adventureRoutes.label}</div>
                                <ul className="w-full flex flex-col gap-4">
                                    {renderRoutes(adventureRoutes)}
                                </ul>
                            </div>
                            :
                            ''
                    }
                    <div className="w-full">
                        <div className="text-base-content/54 uppercase text-[15px] ps-3 pb-2 font-semibold">{globalRoutes.label}</div>
                        <ul className="w-full flex flex-col gap-4">
                            {renderRoutes(globalRoutes)}
                        </ul>
                    </div>
                </nav>

                <div className="lg:hidden w-full border border-base-content/20 rounded-[15px] p-2 mt-10 ">
                    <div className="flex gap-5 items-center">
                        <div className="w-[70px] h-[70px] rounded-[15px] bg-white"></div>
                        <div className="flex flex-col text-base-content">
                            <span className="text-[12px]">Bem vindo</span>
                            <span className="font-medium">Emerson Tanno</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                        <img src={GoldImg}></img>
                        <span className='font-semibold text-[20px] text-base-content'>500</span>
                    </div>
                </div>
            </div>

            <button onClick={toggleMenu} className=" lg:hidden w-[40px] h-[40px] mt-3 bg-base200 border border-base-content/40 rounded-[10px] flex justify-center items-center text-base-content/30">
                <MenuIcon />
            </button>
        </aside>
    )
}

export default SideMenu;