import ProdutoSector from "../ProdutosSector/ProdutoSector"
import data from "../../../produtos.json"

const PaginaProdutos = () => {

	const produtos = data

	return (
		<>
			<div className="p-10 bg-white dark:bg-gray-magros-700 text-gray-magros-700 dark:text-gray-magros-100">
				<div className="mt-10 sm:mx-0 md:mx-0 lg:mx-48 flex flex-wrap gap-5 justify-center">
					{produtos?.map(item => (<ProdutoSector produto={item} />))}
				</div>
			</div>
		</>
	)
}

export default PaginaProdutos