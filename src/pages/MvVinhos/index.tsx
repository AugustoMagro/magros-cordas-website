import Navbar from "../../components/Navbar"
import PaginaProdutosMv from "../../components/PaginaProdutosMv"
import Categorias from "../../components/Categorias"

function MvVinhos() {
  return (
    <>
      <Navbar tab="MV Vinhos"/>
      <Categorias categoria="Vinhos"/>
      <Categorias categoria="Sucos"/>
    </>
  )
}

export default MvVinhos
