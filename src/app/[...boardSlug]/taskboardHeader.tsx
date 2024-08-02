"use client" 

import Image from "next/image";
import { useState } from "react";
import * as data from '../data.json';
import Link from "next/link";

export default function TaskboardHeader({taskboardName})  {
  
  const [showBoardOptions, setShowBoardOptions] = useState(false)


  return (
    <>
      <header className="h-24 bg-white flex justify-between items-center border-b border-gray-200 dark:bg-darkGrey dark:border-gray-700 dark:text-white transition-all">
        <p className="pl-6 text-black heading-xl dark:text-white">{taskboardName}</p>
        <div className="pr-8 flex justify-center items-center gap-6">
          <Link href={"?addNewTask=true"}>
            <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center hover:bg-mainPurpleHover">+ Add New Task</button>
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
                  <Link href={"?editBoard=true"} onClick={() => setShowBoardOptions(false)}>Edit Board</Link>
                </p>
                <p className="text-red">
                  <Link href={"?deleteBoard=true"}  onClick={() => setShowBoardOptions(false)}>Delete Board</Link>
                </p>
              </div>
              : null }
          </div>
          
        </div>
      </header>
    </>
)
}