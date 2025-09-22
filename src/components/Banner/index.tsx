

const Banner = () => {
    return (
        <div className="flex flex-col justify-center bg-[url(/src/assets/bannerImg.jpeg)] bg-cover h-[calc(100vh-3rem)]">
            <h1 className="ms-96 text-gray-magros-100 font-bold text-7xl">Magros Cordas</h1>
            <h1 className="ms-96 text-gray-magros-100 font-bold text-7xl">e Acessórios</h1>
            <p className="ms-96 text-gray-magros-100 font-bold text-3xl">Uma loja para atender o que o músico<br></br>precisa com excelência</p>
        </div>
        // <img src="/src/assets/bannerImg.jpeg" alt="" />
    )
}

export default Banner