import {Link, NavLink} from "react-router-dom";
import logo from "../assets/logo.svg"

const base = "min-w-[120px] px-6 py-3 rounded-full font-semibold text-center transition-colors";
const linkClass = ({ isActive }) =>
    `${base} ${isActive ? 'bg-accent text-white' : 'hover:bg-black/5 dark:hover:bg-white/10'}`;

const Navbar = () => {
    return (
        <nav
            aria-label="Main navigation"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-full
            bg-white dark:bg-neutral-900 border border-neutral-200
            dark:border-neutral-800 shadow-lg" >
                <NavLink to={"/"} className={linkClass} end>Photos</NavLink>
                <Link to="/" aria-label="Home" className="rounded-xl">
                    <img src={logo} alt="" width="40" height="40" />
                </Link>
                <NavLink to={"/albums"} className={linkClass}>Albums</NavLink>
        </nav>
    );
};

export default Navbar;