"use server"

import { db } from "../drizzle/db"
import { eq } from "drizzle-orm"
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



export async function addNewBoardAction(boardName:string, pathname: string) {
    
    // const rawFormData = {
    //     boardName: formData.get('formData'),  
    // }

    // await db.insert(taskboardTable).values({

    //     // name: "test something derp",
    //     name: boardName,
    //     })
    //     .returning({
    //     id: taskboardTable.id
    //     })

    return ("it works yay!")

} 

export async function getTaskboards() {
    // const allBoards = await db.select().from(taskboardTable)
    const allBoards = await db.query.taskboardTable.findMany()
    return allBoards
}

export async function showBoardAction(boardId) {
    
    const currentBoard = await db.select().from(taskboardTable).where(eq(taskboardTable.id, boardId))
    return currentBoard
}

export async function showTaskAction(taskId) {

    const currentTask = await db.select().from(tasksTable).where(eq(tasksTable.id, taskId))
    return currentTask
}

    
