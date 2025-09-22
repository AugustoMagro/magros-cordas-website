import type { IProduto } from "../../../interfaces/IProduto"

interface PropsProduto {
	produto: IProduto
}

const ProdutoSector = ({produto}: PropsProduto) => {

	return (
		<div className="rounded-sm w-72 bg-gray-magros-600">
			<img src="/src/assets/breu.jpeg" alt="Breu para violino" />
			<div className="p-3">
				<div className="flex flex-row justify-between">
					<h6 className="text-2xl">{produto.nome}</h6>
					<h6 className="text-2xl">{produto.valor}</h6>
				</div>
				<p className="mt-7">{produto.descricao}</p>
				<button className="p-2 mt-7 text-center text-sm bg-blue-magros w-full rounded-sm">DETALHE</button>
			</div>
		</div>
	)
}

export default ProdutoSector