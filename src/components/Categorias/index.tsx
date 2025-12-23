import ProdutoSector from "../ProdutosSector/ProdutoSector"
import data from "../../../produtomv.json"
import { Link } from "react-router"

interface PropsVitrini {
  categoria: string
}

const Categorias = (props: PropsVitrini) => {

  const produtos = data
  const vitrini = produtos.filter(item => props.categoria == item.categoria)

	return (
		<>
			<div className="p-10 bg-white dark:bg-gray-magros-700 text-gray-magros-700 dark:text-gray-magros-100">
				<div className="mt-10 sm:mx-0 md:mx-0 lg:mx-48 flex justify-between">
					<h3>{props.categoria}</h3>
					<Link to="/produtos">Ver mais</Link>
				</div>
				<div className="sm:mx-0 md:mx-0 lg:mx-48 my-3 border-b-2" />
				<div className="sm:mx-0 md:mx-0 lg:mx-48 flex flex-wrap gap-5 justify-center">
					{vitrini?.map(item => (<ProdutoSector produto={item} key={item.id}/>))}
				</div>
			</div>
		</>
	)
}

export default Categorias
