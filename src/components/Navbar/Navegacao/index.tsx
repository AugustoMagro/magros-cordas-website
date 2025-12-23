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
            <li className={`ms-5 ${props.tab=='MV Vinhos' ? 'border-b-2' : 'border-b-0'} border-gray-magros-700 dark:border-gray-magros-100`}>
                <Link to="/mvvinhos">MV Vinhos</Link>
            </li>
        </ul>
    )
}

export default Navegacao
