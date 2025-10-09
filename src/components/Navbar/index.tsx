
import ToggleTheme from "./ToggleTheme"
import BotaoContato from "./BotaoContato"
import Navegacao from "./Navegacao"

interface PageProps {
    tab: string
}

const Navbar = (props: PageProps) => {

    return (
        <nav className="p-2 fixed w-full flex justify-between bg-white dark:bg-gray-magros-700 dark:text-white">
            <h1 className="mt-1 font-bold">Magros Cordas</h1>
            <Navegacao tab={props.tab}/>
            <BotaoContato />
            <ToggleTheme />
        </nav>
    )
}

export default Navbar