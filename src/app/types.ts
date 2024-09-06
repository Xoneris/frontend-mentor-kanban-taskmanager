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

export interface test {
    name: string,
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