import { MoonIcon, SunIcon } from "@heroicons/react/16/solid"
import { useEffect } from "react"

const ToggleTheme = () => {

    const sysPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        if (sessionStorage.getItem('themePreference') == 'system'){
            sysPreference && pageClasses.add('dark')
        }else{
            return
        }
    })
    const toggle = () => {
        if (sessionStorage.getItem('themePreference') == 'system'){
            sessionStorage.setItem('themePreference', 'user')
        }else{
            sessionStorage.setItem('themePreference', 'system')
        }
        pageClasses.toggle('dark')
    }

    return (
        // <button onClick={toggle}>Alterar</button>
        <div className="hover:cursor-pointer">
            <MoonIcon className="h-8 dark:hidden text-gray-magros-700" onClick={toggle}>Alterar</MoonIcon>
            <SunIcon className="h-8 hidden dark:block text-gray-magros-100" onClick={toggle}>Alterar</SunIcon>
        </div>
    )
}

export default ToggleTheme