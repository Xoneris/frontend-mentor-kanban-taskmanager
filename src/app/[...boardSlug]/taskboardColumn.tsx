"use server" 

import Link from "next/link";
import { db } from "../drizzle/db";
import { eq, lt, gte, ne, sql } from 'drizzle-orm';
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema";

interface props {
    columnName: string,
    columnId: number,
}

export default async function TaskboardColumn({columnName, columnId}:props)  {

    const currentColumnTasks = await db.select().from(tasksTable).where(eq(tasksTable.columnsId, columnId))

    const completedSubtasksOfTask = async (taskId:number) => {
        const completedSubtasks = await db.select().from(subTasksTable).where(sql`${subTasksTable.tasksId} = ${taskId} and ${subTasksTable.isCompleted} = true`)
        return completedSubtasks.length
    }

    const allSubtasksOfTask = async (taskId:number) => {
        const allSubtasks = await db.select().from(subTasksTable).where(eq(subTasksTable.tasksId, taskId))
        return allSubtasks.length
    }

    return (
        <div className="flex flex-col grow min-w-[280px] max-w-[280px] gap-5">
            <p className="heading-s text-mediumGrey uppercase tracking-widest">{columnName} ({currentColumnTasks.length})</p>
            {
                currentColumnTasks.length > 0 
                ? currentColumnTasks.map((task) => (
                <Link href={"?taskId="+task.id} key={task.id}>
                    <div className="flex flex-col justify-center items-start px-4 py-6 gap-2 rounded-lg bg-white dark:bg-darkGrey hover:cursor-pointer group" key={task.id}>
                        <p className="heading-m text-black dark:text-white group-hover:text-mainPurple" >{task.title}</p>
                        <p className="body-m text-mediumGrey">
                            {completedSubtasksOfTask(task.id)} of {allSubtasksOfTask(task.id)} subtasks
                        </p>
                    </div>
                </Link>
                ))  
                : null
            }
        </div>
    )
}