import { useEffect } from "react"

const ToggleTheme = () => {

    const sysPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        sysPreference && pageClasses.add('dark')
    })
    const toggle = () => {
        pageClasses.toggle('dark')
    }

    return (
        <button onClick={toggle}>Alterar</button>
    )
}

export default ToggleTheme