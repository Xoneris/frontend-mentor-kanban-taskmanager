"use server" 

import { db } from "../drizzle/db";
import { eq, lt, gte, ne } from 'drizzle-orm';
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema";
import TaskBoardHeader from "./taskboardHeader"
import TaskboardColumn from "./taskboardColumn";
import { Taskboard, TaskboardColumns } from "../types";
import TaskboardHeader from "./taskboardHeader";

export default async function DynamicPage({ params }: { params: { boardSlug: string|null } })  {
  
  const { boardSlug } = params;

  let currentTaskBoard:Taskboard[] = []
  let currentTaskBoardColumns:TaskboardColumns[] = []

  if (boardSlug !== null){
    currentTaskBoard = await db.select().from(taskboardTable).where(eq(taskboardTable.slug, boardSlug))
  }  
  
  if (currentTaskBoard !== undefined && currentTaskBoard.length !== 0) {
    currentTaskBoardColumns = await db.select().from(columnsTable).where(eq(columnsTable.taskboardId, currentTaskBoard[0].id))
  } else {
    return (
      <>
        <TaskboardHeader 
          taskboardName={"404 - No Taskboard found"}
          taskboardId={null}
        />
        <section className="bg-lightGrey grow flex flex-col justify-center items-center gap-8 dark:bg-veryDarkGrey transition-all">
          No Taskboard found.
        </section>
      </>
    )
  }



  return (
    <>
      <TaskBoardHeader 
        taskboardName={currentTaskBoard[0].name}
        taskboardId={currentTaskBoard[0].id}  
      />

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