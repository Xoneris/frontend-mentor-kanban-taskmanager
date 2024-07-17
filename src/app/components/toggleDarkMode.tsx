"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function DarkModeToggle () {

    const [toggleDarkMode, setToggleDarkMode] = useState(false)

    useEffect(() => {

        if (toggleDarkMode === true){
            document.documentElement.classList.add("dark")
        } else if (toggleDarkMode === false) {
            document.documentElement.classList.remove("dark")
        }

    }, [toggleDarkMode])

    return (
        
        <div className="w-64 h-12 m-auto flex justify-center items-center bg-lightGrey rounded-lg dark:bg-veryDarkGrey transition-all">
            <Image src="./assets/icon-light-theme.svg" alt="Lightmode Logo" width={18} height={18}/>
            <div className="mr-6 ml-6 w-10 h-5 rounded-full bg-mainPurple relative hover:bg-mainPurpleHover"
                onClick={() => {setToggleDarkMode(!toggleDarkMode)}}>
                <div 
                    className="absolute w-4 h-4 rounded-full bg-white mt-0.5 ml-0.5 dark:ml-[22px] transition-all"
                    >
                </div>
            </div>
            <Image src="./assets/icon-dark-theme.svg" alt="Darkmode Logo" width={18} height={18}/>
        </div>
    )
}