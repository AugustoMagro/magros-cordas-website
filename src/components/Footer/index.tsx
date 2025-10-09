import { UserIcon } from "@heroicons/react/16/solid"

const Footer = () => {
    return (
        <div className="p-10 flex justify-center text-gray-magros-100 bg-gray-magros-100 dark:bg-gray-magros-600">
            <div className="p-5 flex flex-col bg-green-magros rounded-md dark:bg-blue-magros">
                <div className="flex">
                    <UserIcon className="h-10"></UserIcon>
                    <h1 className="ms-3 text-2xl font-bold">Contato</h1>
                </div>
                <div className="mt-5">
                    <h2 className=" text-lg font-bold">Endereço</h2>
                    <h5 className="">Rua Padre Anibal Difrancia, 113, Jardim Mangalot, São Paulo - SP, CEP - 05135-160</h5>
                </div>
                <div className="mt-5">
                    <h2 className=" text-lg font-bold">WhatsApp</h2>
                    <a className="border-b-1" href="https://api.whatsapp.com/send?phone=5511944583970">(11) 94458-3970</a>
                </div>
            </div>
        </div>
    )
}

export default Footer