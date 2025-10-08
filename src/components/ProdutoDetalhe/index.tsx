import { useParams } from "react-router"
import data from "../../../produtos.json"

const ProdutoDetalhe = () => {

  const { id } = useParams();
  const produtos = data
  const produto = produtos.filter(item => id == String(item.id))

  return (
    <div className="p-10">
      <div className="mt-10 flex bg-gray-magros-100 sm:mx-0 md:mx-0 lg:mx-48 gap-5 justify-center">
        <img src={`/src/assets/${produto[0].img}`} alt="Breu para violino" className="w-200"/>
        <div className="ms-5 flex flex-col">
          {produto[0].descricao}
          {produto[0].nome}
          {produto[0].valor}
        </div>
      </div>
    </div>
  )
}

export default ProdutoDetalhe