import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (
        <div className="layout-container">
            <aside>
                <Menu/>
            </aside>
            
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;