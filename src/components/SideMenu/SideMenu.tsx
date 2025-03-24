import { Link, useLocation } from "react-router";
import MenuItem from "./components/MenuItem";
import { sideMenuGlobalRoutes } from "./SideMenuConfig";

export const SideMenu = () => {
    const globalRoutes = sideMenuGlobalRoutes;
    const location = useLocation();

    return (
        <aside className="bg-base200 w-[291px] h-full flex flex-col items-center">
            <nav className="w-[240px]">
                <div className="text-base-content/54 uppercase text-[15px] ps-3 pb-2 font-semibold">{globalRoutes.label}</div>
                <ul className="w-full flex flex-col gap-4">
                    {globalRoutes.routes.map((route) => {
                        const routeActive = location.pathname == route.path;
                        return (
                            <li key={route.path}>
                                <Link to={route.path}>
                                    <MenuItem label={route.label} icon={route.icon} active={routeActive} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default SideMenu;