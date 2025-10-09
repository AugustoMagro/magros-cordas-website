import { useParams } from "react-router"
import data from "../../../produtos.json"

const ProdutoDetalhe = () => {

  const { id } = useParams();
  const produtos = data
  const produto = produtos.filter(item => id == String(item.id))

  return (
    <div className="p-10 bg-white dark:bg-gray-magros-700 min-h-[calc(100vh)]">
      <div className="mt-10 sm:mx-0 md:mx-0 lg:mx-48 gap-5 justify-center">
        <div className="flex justify-center">
          <div>
            <img src={`/src/assets/${produto[0].img}`} alt="Breu para violino" className="w-200 object-fill rounded-s-md"/>
          </div>
          <div className="bg-gray-magros-100 dark:text-gray-magros-100 dark:bg-gray-magros-600 flex flex-col min-w-130 max-w-130 rounded-e-md">
            <div className="p-10">
              <h1 className=" font-bold text-3xl">
                {produto[0].nome}
              </h1>
              <p className="mt-5">
                {produto[0].descricao}
              </p>
              <h2 className="mt-10 text-2xl">
                {produto[0].valor}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdutoDetalhe