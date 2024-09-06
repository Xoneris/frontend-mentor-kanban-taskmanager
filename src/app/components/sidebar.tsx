"use client"

import Image from "next/image";
import Link from "next/link"
import Navigation from "./navigation";
import DarkModeToggle from "./toggleDarkMode";
import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

export default function Sideboard() {

    const [showSidebar, setShowSidebar] = useState<Boolean>(true)   

    return (
        <>
            <div className={`flex flex-col min-w-[300px] -ml-0 bg-white border-r border-gray-200 dark:bg-darkGrey dark:border-gray-700 transition-all 
                ${showSidebar === true ? null : "-ml-[300px]"}`}>

                <Link href={"/"}>
                    <div className="w-[153px] h-[25px] ml-8 mt-8 bg-logo-dark dark:bg-logo-light"></div>
                </Link>

                <Navigation/>
                
                <div className="mb-8 flex flex-col gap-2">
                    {/* <UserButton /> */}
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