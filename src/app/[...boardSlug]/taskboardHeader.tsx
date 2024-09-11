"use client" 

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface props {
  taskboardName: string|null,
  taskboardId: number|null,
  currentColumns: number|null,
}

export default function TaskboardHeader({taskboardName, taskboardId, currentColumns}:props)  {
  
  const [showBoardOptions, setShowBoardOptions] = useState<boolean>(false)


  return (
    <header className="h-24 bg-white flex justify-between items-center border-b border-gray-200 dark:bg-darkGrey dark:border-gray-700 dark:text-white transition-all">
      
      <div className="flex items-center">
        {/* <div className="px-6 py-9 border-r dark:border-gray-700">
          <Image src="./assets/logo-dark.svg" alt="Logo" width={153} height={26} />
        </div> */}
        
        <p className="pl-6 text-black heading-xl dark:text-white">{taskboardName}</p>
      </div>
      { taskboardId !== null 
      ? <div className="pr-8 flex justify-center items-center gap-6">
        <Link href={"?addNewTask="+taskboardId}>
          <button className={`bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center ${currentColumns === 0 ? "opacity-50" : "hover:bg-mainPurpleHover" } ` } 
          disabled={currentColumns === 0 ? true : false}
          >+ Add New Task</button>
        </Link>
        <div>
          <Image src="./assets/icon-vertical-ellipsis.svg" alt="Board options" width={5} height={20} 
            className="hover:cursor-pointer" 
            onClick={() => setShowBoardOptions(!showBoardOptions)} />
          {
            showBoardOptions === true 
            ?
            <div className="absolute flex flex-col p-4 gap-4 w-48 h-24 top-[88px] top border right-7 bg-white rounded-lg dark:bg-veryDarkGrey dark:border-gray-700">
              <p className="text-mediumGrey">
                <Link href={"?editBoard="+taskboardId} onClick={() => setShowBoardOptions(false)}>Edit Board</Link>
              </p>
              <p className="text-red">
                <Link href={"?deleteBoard="+taskboardId}  onClick={() => setShowBoardOptions(false)}>Delete Board</Link>
              </p>
            </div>
            : null }
        </div>
      </div>
      : null }
    </header>
)
}