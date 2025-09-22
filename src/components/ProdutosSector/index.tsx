import { useState } from "react"
import type { IProduto } from "../../interfaces/IProduto"
import ProdutoSector from "./ProdutoSector"


const ProdutosSector = () => {

	const produtos = [
		{
			"nome":"Breu",
			"valor":"R$ 100",
			"descricao":"Breu para violino de alta qualidade, proporciona melhor aderência do arco às cordas, garantindo som claro e suave."
		},
		{
			"nome":"Breu",
			"valor":"R$ 100",
			"descricao":"Breu para violino de alta qualidade, proporciona melhor aderência do arco às cordas, garantindo som claro e suave."
		},
		{
			"nome":"Breu",
			"valor":"R$ 100",
			"descricao":"Breu para violino de alta qualidade, proporciona melhor aderência do arco às cordas, garantindo som claro e suave."
		},
		{
			"nome":"Breu",
			"valor":"R$ 100",
			"descricao":"Breu para violino de alta qualidade, proporciona melhor aderência do arco às cordas, garantindo som claro e suave."
		},
		{
			"nome":"Breu",
			"valor":"R$ 100",
			"descricao":"Breu para violino de alta qualidade, proporciona melhor aderência do arco às cordas, garantindo som claro e suave."
		}
	]

	return (
		<>
			<div className="p-10 bg-white dark:bg-gray-magros-700 text-gray-magros-700 dark:text-gray-magros-100">
				<div className="mx-96 flex justify-between">
					<h3>Produtos</h3>
					<button>Ver mais</button>
				</div>
				<div className="mx-96 my-3 border-b-2" />
				<div className="mx-96 flex flex-wrap gap-5 justify-center">
					{produtos?.map(item => (<ProdutoSector produto={item} />))}
				</div>
			</div>
		</>
	)
}

export default ProdutosSector