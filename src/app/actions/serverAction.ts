"use server"

import { db } from "../drizzle/db"
import { eq } from "drizzle-orm"
import { taskboardTable, columnsTable, tasksTable, subTasksTable } from "../drizzle/schema"
import { Taskboard, TaskboardColumns, Task, Subtask, test } from "../types"
import TaskboardColumn from "../[...boardSlug]/taskboardColumn"

export async function addNewBoardAction(boardName:string) {
    
    const boardSlug:string = boardName.toLowerCase().replace(" ", "-")

    await db.insert(taskboardTable).values({
            name: boardName,
            slug: boardSlug,
        })
        .returning({
            insertedId: taskboardTable.id
        })

    const newlyAddedBoard:Taskboard[] = await db.select().from(taskboardTable).where(eq(taskboardTable.name, boardName))
    return newlyAddedBoard[0].id
} 

export async function deleteTaskboard(boardId:number) {

    const deleteBoard = await db.delete(taskboardTable).where(eq(taskboardTable.id, boardId))
    return "success"
}

export async function addNewColumns(boardId:number, columns:test[]) {

    for (let i=0; i < columns.length; i++){
        const test = await db.insert(columnsTable).values({
            name: columns[i].name,
            taskboardId: boardId,
        })
    }
    
}

// GET all Taskboards
export async function getTaskboards():Promise<Taskboard[]> {
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