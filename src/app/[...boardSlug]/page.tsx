"use server" 

// import Image from "next/image";
// import { useState } from "react";
// import * as data from '../data.json';
// import Link from "next/link";

import { db } from "../drizzle/db";
import { eq, lt, gte, ne } from 'drizzle-orm';
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema";
// import Taskboard from "./taskboard";
import TaskBoardHeader from "./taskboardHeader"
import TaskboardColumn from "./taskboardColumn";

export default async function DynamicPage({ params }: { params: { boardSlug: string } })  {
  
  const { boardSlug } = params;

  // const [currentBoard, setCurrentBoard] = useState(data.boards[0]);
  // const [showBoardOptions, setShowBoardOptions] = useState(false)

  
  const currentTaskBoard = await db.select().from(taskboardTable).where(eq(taskboardTable.slug, boardSlug))
  const currentTaskBoardColumns = await db.select().from(columnsTable).where(eq(columnsTable.taskboardId, currentTaskBoard[0].id))

  
  // const currentTaskBoardSubtasks = await db.select().from(subTasksTable).where(eq(columnsTable.taskboardId, currentTaskBoard[0].id))

  const findTasksOfColumn = async (id:number) => {

    const currentTaskBoardTasks = await db.select().from(tasksTable).where(eq(tasksTable.columnsId, id))
    // console.log(currentTaskBoardTasks)
    return currentTaskBoardTasks
    // return (<h1>test</h1>)
  }

  // const test = findTasksOfColumn(1)
  // console.log(test)

  return (
    <>
      <TaskBoardHeader taskboardName={currentTaskBoard[0].name}/>

      <section className="bg-lightGrey grow flex flex-col justify-center items-center gap-8 dark:bg-veryDarkGrey transition-all">
        {
          currentTaskBoardColumns.length > 0 
            ? <div className="grow p-6 flex gap-6 justify-start w-full">
              {currentTaskBoardColumns.map((boardColumn) => (
                <TaskboardColumn 
                  columnName={boardColumn.name} 
                  columnId={boardColumn.id}
                  key={boardColumn.id}
                  />
              ))}
                <div className="flex max-w-[280px] justify-center items-center mt-[35px] grow rounded-lg bg-[#E9EFFA] text-mediumGrey dark:bg-opacity-25 dark:bg-darkGrey hover:text-mainPurple hover:cursor-pointer">
                  <p className="heading-xl ">+ New Column</p>
                </div>
              </div>
            : <>
              <p className="heading-l text-mediumGrey">This board is empty. Create a new column to get started.</p>
              <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center">
                + Add New Column
              </button>
            </>
        }
      </section>
    </>
)
}