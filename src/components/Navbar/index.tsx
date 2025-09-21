import { useEffect } from "react"
import ToggleTheme from "./ToggleTheme"
import BotaoContato from "./BotaoContato"

const Navbar = () => {

    return (
        <nav className="p-2 flex justify-between bg-white dark:bg-gray-magros-700 dark:text-white">
            <h2>Magros Cordas</h2>
            <li className="flex align-middle">
                <ul>Home</ul>
                <ul className="ms-5">Produtos</ul>
            </li>
            <BotaoContato />
            <ToggleTheme />
        </nav>
    )
}

export default Navbar