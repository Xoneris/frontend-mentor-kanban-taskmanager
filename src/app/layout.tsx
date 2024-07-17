"use client"

import "./globals.css";
import Image from "next/image";
import * as data from './data.json';



import Router from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import DarkModeToggle from "./components/toggleDarkMode";

import { db } from "./drizzle/db";
import { taskboard } from "./drizzle/schema";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const boards = data.boards;
  // const pathname = usePathname()
  // const [currentBoard, setCurrentBoard] = useState(boards[0]);

  const pathname = usePathname()

  db.insert(taskboard).values({
    name: "Platform Launch"
  })
  const test = await db.query.taskboard.findFirst()
  console.log(test)
  

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>

      <body>
        <main className="flex min-h-screen min-w-screen">
          <nav className="flex flex-col w-72 bg-white border-r border-gray-200 dark:bg-darkGrey dark:border-gray-700 transition-all">
            <Image src="./assets/logo-dark.svg" alt="Logo" width={153} height={25} className="ml-8 mt-8" />
            
            <div className="grow">
              <ul className="mt-14">
                <li className="ml-6 mb-5 uppercase body-m tracking-wide text-mediumGrey">All Boards ({boards.length})</li>
                {boards.map((board) => (
                  <Link href={`/${board.name.replace(" ", "-").toLowerCase()}`}>
                    <li className={`text-mediumGrey h-12 mr-6 pl-8 flex items-center gap-4 heading-m hover:text-mainPurple hover:bg-mainPurple hover:dark:bg-white hover:bg-opacity-10 rounded-r-3xl ${pathname === "/"+board.name.replace(" ", "-").toLowerCase() ? "bg-mainPurple text-white" : null}`}>
                      <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                      {board.name}
                    </li>
                  </Link>
                ))}
                <Link href="/">
                <li className="text-mainPurple h-12 mr-6 pl-8 flex items-center gap-4 heading-m">
                  <Image src="./assets/icon-board.svg" alt="Lightmode Logo" width={18} height={18}/>
                  + Create New Board
                </li>
                </Link>
              </ul>
            </div>

            <div className="mb-8">
              <DarkModeToggle/>
              <div className="h-12 flex items-center mr-6 pl-6 gap-4">
                <Image src="./assets/icon-hide-sidebar.svg" alt="Hide Sidebar" width={18} height={18} />
                <p className="text-mediumGrey heading-m">Hide Sidebar</p>
              </div>
            </div>

          </nav>

        {children}

        </main>
      </body>
    </html>
  );
}
