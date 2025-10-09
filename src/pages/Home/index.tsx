import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import ProdutosSector from "../../components/ProdutosSector"

function Home() {
  return (
    <>
      <Navbar tab="Home"/>
      <Banner />
      <ProdutosSector />
      <Footer />
    </>
  )
}

export default Home