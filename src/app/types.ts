export interface Taskboard {
    id: number, 
    name: string,
    slug: string,
}

export interface TaskboardColumns {
    id: number,
    name: string,
    taskboardId: number,
}

export interface ColumnsToInsert {
    name: string,
    taskboardId: number,
}

export interface TempColumns {
    id: number,
    name: string,
    error: string,
}

export interface ColumnError {
    error: string,
    index: number|null,
}

export interface Task {
    id: number,
    title: string,
    description: string|null,
    status: "todo" | "doing" | "done",
    columnsId: number,
}

export interface Subtask {
    id: number,
    title: string,
    isCompleted: boolean,
    tasksId: number,
}