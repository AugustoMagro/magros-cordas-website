import { useState } from "react"
import type { IProduto } from "../../interfaces/IProduto"
import ProdutoSector from "./ProdutoSector"
import data from "../../../produtos.json"


const ProdutosSector = () => {

	const produtos = data

	return (
		<>
			<div className="p-10 bg-white dark:bg-gray-magros-700 text-gray-magros-700 dark:text-gray-magros-100">
				<div className="sm:mx-0 md:mx-0 lg:mx-48 flex justify-between">
					<h3>Produtos</h3>
					<button>Ver mais</button>
				</div>
				<div className="sm:mx-0 md:mx-0 lg:mx-48 my-3 border-b-2" />
				<div className="sm:mx-0 md:mx-0 lg:mx-48 flex flex-wrap gap-5 justify-center">
					{produtos?.map(item => (<ProdutoSector produto={item} />))}
				</div>
			</div>
		</>
	)
}

export default ProdutosSector