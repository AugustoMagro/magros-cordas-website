import Navbar from "../../components/Navbar"
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
