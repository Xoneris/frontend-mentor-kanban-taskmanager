"use server"

import "./globals.css";

import Sidebar from "./components/sidebar";
import AddBoardModal from "./components/addBoardModal";
import AddNewTaskModal from "./components/addNewTaskModal";
import EditBoardModal from "./components/editBoardModal";
import DeleteBoardModal from "./components/deleteBoardModal";
import ShowTaskModal from "./components/showTaskModal";
import DeleteTaskModal from "./components/deleteTaskModal";
import EditTaskModal from "./components/editTaskModal";


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

  // const taskboards = await db.query.taskboardTable.findMany()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>

      <body className="flex min-h-screen min-w-screen relative">
        <Sidebar />

        <main className="flex flex-col grow">
          {children}
        </main>
        
        <AddBoardModal/>
        <EditBoardModal/>
        <DeleteBoardModal/>
        
        <AddNewTaskModal/>
        <ShowTaskModal/>
        <EditTaskModal/>
        <DeleteTaskModal/>

      </body>
    </html>
  );
}