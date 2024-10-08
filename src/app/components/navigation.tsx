"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Taskboard } from "../types";
import { getTaskboards } from "../actions/serverAction";


export default function Navigation() {

    const pathname = usePathname()
    const [boards, setBoards] = useState<Taskboard[]>()
    // const [isLoading, setIsLoading] = useState<Boolean>(false)

    useEffect(() => {
        // setIsLoading(true)
        const fetchTaskboards = async () => {
            try {
                const result = await getTaskboards()
                setBoards(result)
                // setIsLoading(false)
            } catch (err) {
                console.log(err)
                // setIsLoading(false)
              }
        }

        fetchTaskboards()

    }, [])
    
    // if (isLoading === true) {
    //     return (
    //         <nav className="grow mt-14">
    //             Loading Taskboards...
    //         </nav>
    //     )
    // }

    if (!boards){
        return (
            <nav className="grow mt-14">
                
            </nav>
        )    
    }

    return (
        <nav className="grow mt-14">
            <ul>
                <li className="ml-6 mb-5 uppercase body-m tracking-wide text-mediumGrey w">All Boards ({boards.length})</li>
                {boards.map((board) => (
                    <Link href={"/"+board.slug} key={board.id}>
                        <li className={`text-mediumGrey h-12 mr-6 pl-8 flex items-center gap-4 heading-m  rounded-r-3xl ${pathname === "/"+board.slug ? "bg-mainPurple text-white" : "hover:text-mainPurple hover:bg-mainPurple hover:dark:bg-white hover:bg-opacity-10"}`}
                        key={board.name}>
                            <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                            {board.name}
                        </li>
                    </Link>
                ))}

                
                <li className="text-mainPurple h-12 mr-6 pl-8 flex items-center gap-4 heading-m">
                    <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                    <Link href={"?newBoard=true"}>
                        + Create New Board
                    </Link>
                </li>
            </ul>
        </nav>
    )
}