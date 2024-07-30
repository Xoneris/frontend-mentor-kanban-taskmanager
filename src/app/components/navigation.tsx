"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image";

import * as data from '../data.json';

import { db } from "../drizzle/db";
import { taskboardTable } from "../drizzle/schema";

export default function Navigation({taskboards}) {

    const pathname = usePathname()
    // const boards = data.boards;
    const boards = taskboards;

    // function greet(person: { name: string; age: number }) {
    //     return "Hello " + person.name;
    //   }

    
    

    return (
        <nav className="grow mt-14">
            <ul>
                <li className="ml-6 mb-5 uppercase body-m tracking-wide text-mediumGrey w">All Boards ({boards.length})</li>
                {boards.map((board) => (
                    <Link href={`/${board.name.replace(/ /g, "-").toLowerCase()}`}>
                    <li className={`text-mediumGrey h-12 mr-6 pl-8 flex items-center gap-4 heading-m hover:text-mainPurple hover:bg-mainPurple hover:dark:bg-white      hover:bg-opacity-10 rounded-r-3xl ${pathname === "/"+board.name.replace(/ /g, "-").toLowerCase() ? "bg-mainPurple text-white" : null}`}
                    key={board.name}>
                        <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                        {board.name}
                    </li>
                    </Link>
                ))}

                <Link href="/">
                <li className="text-mainPurple h-12 mr-6 pl-8 flex items-center gap-4 heading-m">
                    <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                    <Link href={"?newBoard=true"}>
                        + Create New Board
                    </Link>
                </li>
                </Link>
            </ul>

        </nav>
    )
}