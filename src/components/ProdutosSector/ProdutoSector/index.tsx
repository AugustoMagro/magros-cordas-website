import { Link, useNavigate } from "react-router";
import type { IProduto } from "../../../interfaces/IProduto"

interface PropsProduto {
	produto: IProduto
}

const ProdutoSector = ({produto}: PropsProduto) => {

	return (
		<div className="rounded-sm w-72 bg-gray-magros-100 dark:bg-gray-magros-600 shadow-sm dark:shadow-gray-magros-700 border-1 border-gray-magros-200 dark:border-gray-magros-500">
			<img src={`/src/assets/${produto.img}`} alt="Breu para violino" />
			<div className="p-3">
				<div className="flex flex-row justify-between">
					<h6 className="text-2xl">{produto.nome}</h6>
					<h6 className="text-2xl">{produto.valor}</h6>
				</div>
				<div className="h-36">
					<p className="mt-7 mb-5">{produto.descricao}</p>
				</div>
				<div>
					<Link to={`/produto/${produto.id}`} className="p-2 mt-7 flex justify-center text-center text-gray-magros-100 text-sm bg-green-magros dark:bg-blue-magros rounded-sm hover:bg-green-magros-bt dark:hover:bg-blue-magros-bt">DETALHE</Link>
				</div>
			</div>
		</div>
	)
}

export default ProdutoSector