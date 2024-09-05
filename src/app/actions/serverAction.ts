"use server"

import { db } from "../drizzle/db"
import { eq } from "drizzle-orm"
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { Taskboard, TaskboardColumns, Task, Subtask } from "../types"


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

// GET all Taskboards
export async function getTaskboards():Promise<Taskboard[]> {
    // const allBoards = await db.select().from(taskboardTable)
    const allBoards = await db.query.taskboardTable.findMany()
    return allBoards
}

// GET single Taskboard
export async function getBoard(boardId:number):Promise<Taskboard> {
    const currentBoard = await db.select().from(taskboardTable).where(eq(taskboardTable.id, boardId))
    return currentBoard[0]
}

// GET all Columns of a single Taskboard
export async function getColumnsOfBoard(boardId:number):Promise<TaskboardColumns[]> {
    const currentColumnsOfBoard = await db.select().from(columnsTable).where(eq(columnsTable.taskboardId, boardId))
    return currentColumnsOfBoard
}

// GET a single Task
export async function getTask(taskId:number):Promise<Task[]> {
    const currentTask = await db.select().from(tasksTable).where(eq(tasksTable.id, taskId))
    return currentTask
}

// Get all Subtasks of a single Task
export async function getSubtasks(taskId:number):Promise<Subtask[]> {
    const currentSubtasks = await db.select().from(subTasksTable).where(eq(subTasksTable.tasksId, taskId))
    return currentSubtasks
}


    
