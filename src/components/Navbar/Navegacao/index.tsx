import { Link } from "react-router"

interface NavProps{
    tab: string
} 

const Navegacao = (props: NavProps) => {

    return (
        <ul className="flex">
            <li className={`${props.tab=='Home' ? 'border-b-2' : 'border-b-0'} border-gray-magros-700 dark:border-gray-magros-100`}>
                <Link to="/">Home</Link>
            </li>
            <li className={`ms-5 ${props.tab=='Produtos' ? 'border-b-2' : 'border-b-0'} border-gray-magros-700 dark:border-gray-magros-100`}>
                <Link to="/Produtos">Produtos</Link>
            </li>
        </ul>
    )
}

export default Navegacao