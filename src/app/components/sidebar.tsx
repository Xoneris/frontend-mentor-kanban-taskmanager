"use client"

import Image from "next/image";

import Navigation from "./navigation";
import DarkModeToggle from "./toggleDarkMode";
import { useState } from "react";

export default function Sideboard() {

    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <div className={`flex flex-col min-w-[300px] bg-white border-r border-gray-200 dark:bg-darkGrey dark:border-gray-700 transition-all 
                ${showSidebar === true ? null : "hidden"}`}>

                <Image src={"./assets/logo-dark.svg"} alt="Logo" width={153} height={25} className="ml-8 mt-8" />
            
                <Navigation/>

                <div className="mb-8 flex flex-col gap-2">

                    <DarkModeToggle/>

                    <div className="h-12 flex items-center mr-6 pl-6 gap-4 hover:text-mainPurple hover:bg-mainPurple hover:dark:bg-white hover:bg-opacity-10 hover:cursor-pointer rounded-r-3xl">
                        <Image src="./assets/icon-hide-sidebar.svg" alt="Hide Sidebar" width={18} height={18} />
                        <p 
                            className="text-mediumGrey heading-m"
                            onClick={() => {setShowSidebar(false)}}>
                            Hide Sidebar
                        </p>
                    </div>

                </div>
            </div>

            <div className={`flex justify-center items-center fixed left-0 bottom-8 w-14 h-12 rounded-r-3xl bg-mainPurple hover:cursor-pointer hover:bg-opacity-80
                ${showSidebar === true ? "hidden" : null}`}
                onClick={() => {setShowSidebar(true)}}>
                <Image src={"./assets/icon-show-sidebar.svg"} alt="show Sidebar" width={16} height={11}/>
            </div>
        </>
    )
    
}