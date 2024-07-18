"use client" 

import Image from "next/image";
import { useState } from "react";
import * as data from '../data.json';

export default function DynamicPage({ params }: { params: { boardSlug: string } })  {
  
  const { boardSlug } = params;

  const [currentBoard, setCurrentBoard] = useState(data.boards[0]);

  // const [currentBoard, setCurrentBoard] = useState(data.boards.filter((board) => board.name.replace(" ", "-").toLowerCase() === boardSlug[0]));
  // console.log("is fucking", data.boards[0].name.replace(" ", "-").toLowerCase(), "not the same as fucking", boardSlug['0'])

  return (
    <>

        <header className="h-24 bg-white flex justify-between items-center border-b border-gray-200 dark:bg-darkGrey dark:border-gray-700 dark:text-white transition-all">
          <p className="pl-6 text-black heading-xl dark:text-white">{boardSlug['0'].replace("-", " ").toUpperCase()}</p>
          <div className="pr-8 flex justify-center items-center gap-6">
            <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center opacity-25">+ Add New Task</button>
            <Image src="./assets/icon-vertical-ellipsis.svg" alt="Hide Sidebar" width={5} height={20} />
          </div>
        </header>

        <section className="bg-lightGrey grow flex flex-col justify-center items-center gap-8 dark:bg-veryDarkGrey transition-all">
          {
            currentBoard.columns.length > 0 
            ? <div className="grow p-6 flex gap-6 justify-start w-full">
              {currentBoard.columns.map((column) => (
                <div className="flex flex-col grow max-w-[280px] gap-5">
                  <p className="heading-s text-mediumGrey uppercase tracking-widest">{column.name} ({column.tasks.length})</p>
                  {
                    column.tasks.map((task) => (
                      <div className="flex flex-col justify-center items-start px-4 py-6 gap-2 rounded-lg bg-white dark:bg-darkGrey">
                        <p className="heading-m text-black dark:text-white" >{task.title}</p>
                        <p className="body-m text-mediumGrey">
                          {task.subtasks.filter((subtask) => subtask.isCompleted === true).length} 
                          of 
                          {task.subtasks.length} subtasks</p>
                      </div>
                    ))
                  }
                </div>
              ))}
                <div className="flex max-w-[280px] justify-center items-center mt-[35px] grow rounded-lg bg-[#E9EFFA] text-mediumGrey dark:bg-opacity-25 dark:bg-darkGrey hover:text-mainPurple hover:cursor-pointer">
                  <p className="heading-xl ">+ New Column</p>
                </div>
            </div>
            : <>
              <p className="heading-l text-mediumGrey">This board is empty. Create a new column to get started.</p>
              <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center">+ Add New Column</button>
            </>

          }
          

        </section>
      </>
)
}