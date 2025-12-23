
import ProdutoSector from "../ProdutosSector/ProdutoSector"
import data from "../../../produtomv.json"

const PaginaProdutosMv = () => {

	const produtos = data

	return (
		<>
			<div className="p-10 min-h-[calc(100vh)] bg-white dark:bg-gray-magros-700 text-gray-magros-700 dark:text-gray-magros-100">
				<div className="mt-10 sm:mx-0 md:mx-0 lg:mx-48 flex flex-wrap gap-5 justify-center">
					{produtos?.map(item => (<ProdutoSector produto={item} key={item.id}/>))}
				</div>
			</div>
		</>
	)
}

export default PaginaProdutosMv
