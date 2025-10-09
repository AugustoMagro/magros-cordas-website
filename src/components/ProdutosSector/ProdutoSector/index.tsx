import { Link } from "react-router";
import type { IProduto } from "../../../interfaces/IProduto"

interface PropsProduto {
	produto: IProduto
}

const ProdutoSector = ({produto}: PropsProduto) => {

	return (
		<div className="flex flex-col justify-between rounded-sm min-w-72 max-w-72 bg-gray-magros-100 dark:bg-gray-magros-600 shadow-sm dark:shadow-gray-magros-700 border-1 border-gray-magros-200 dark:border-gray-magros-500">
			<img src={`/dist/${produto.img}`} alt="Foto produto" className="h-76"/>
			<div className="flex flex-col justify-between gap-2">
				<div className="p-3 flex flex-row justify-between">
					<h6 className="text-2xl">{produto.nome}</h6>
					{/* <h6 className="text-2xl">{produto.valor}</h6> */}
				</div>
				<div className="p-3">
					<p className="">{produto.descricao}</p>
				</div>
			</div>
			<div className="p-3">
				<Link to={`/produto/${produto.id}`} className="p-2 flex justify-center text-gray-magros-100 text-sm bg-green-magros dark:bg-blue-magros rounded-sm hover:bg-green-magros-bt dark:hover:bg-blue-magros-bt">DETALHE</Link>
			</div>
		</div>
	)
}

export default ProdutoSector