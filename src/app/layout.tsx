"use server"

import "./globals.css";
import Image from "next/image";

import { db } from "./drizzle/db";
import { taskboardTable, columnsTable } from "./drizzle/schema";

import Navigation from "./components/navigation";
import DarkModeToggle from "./components/toggleDarkMode";

import AddBoardModal from "./components/addBoardModal";
import AddNewTaskModal from "./components/addNewTaskModal";
import EditBoardModal from "./components/editBoardModal";
import DeleteBoardModal from "./components/deleteBoardModal";
import ShowTaskModal from "./components/showTaskModal";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // let logo = ""
  // if (document.documentElement.classList.contains("dark")){ 
  //     logo = "logo-dark.svg"

  // }
  // else {
  //     logo = "logo-light.svg"
  // }

  const taskboards = await db.query.taskboardTable.findMany()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>

      <body className="flex min-h-screen min-w-screen relative">
        <div className="flex flex-col min-w-[300px] bg-white border-r border-gray-200 dark:bg-darkGrey dark:border-gray-700 transition-all">
          <Image src={"./assets/logo-dark.svg"} alt="Logo" width={153} height={25} className="ml-8 mt-8" />
          
          <Navigation taskboards={taskboards}/>

          <div className="mb-8 flex flex-col gap-2">

            <DarkModeToggle/>

            <div className="h-12 flex items-center mr-6 pl-6 gap-4 hover:text-mainPurple hover:bg-mainPurple hover:dark:bg-white hover:bg-opacity-10 hover:cursor-pointer rounded-r-3xl">
              <Image src="./assets/icon-hide-sidebar.svg" alt="Hide Sidebar" width={18} height={18} />
              <p className="text-mediumGrey heading-m">Hide Sidebar</p>
            </div>

          </div>
        </div>

        <main className="flex flex-col grow">
          {children}
        </main>
        
        <AddBoardModal/>
        <EditBoardModal/>
        <DeleteBoardModal/>
        
        <AddNewTaskModal/>
        <ShowTaskModal/>

      </body>
    </html>
  );
}