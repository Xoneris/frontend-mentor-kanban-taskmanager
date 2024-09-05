"use client"

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Task } from "../types";
import { getTask } from "../actions/serverAction";


export default function DeleteTaskModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("deleteTask");
    const pathname = usePathname();
    const [currentTask, setCurrentTask] = useState<Task>()

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const result = await getTask(Number(modal))
                setCurrentTask(result[0])
            } catch (err) {
                console.log(err)
            }
        }
    
        fetchTask()

    },[modal])

    if (!currentTask) {
        return
    }

    return (
        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col gap-6 justify-center items-start dark:text-white dark:bg-darkGrey">
                <p className="heading-l text-red">Delete this task?</p>
                <p className="body-l text-mediumGrey">Are you sure you want to delete the <b><i>&apos;{currentTask.title}&apos;</i></b> task and its subtasks? This action cannot be reversed.</p>
                <div className="flex w-full gap-4">
                    <button className="w-full h-10 rounded-full text-white font-bold bg-red hover:bg-redHover">
                        Delete
                    </button>
                    
                    <button className="w-full h-10 rounded-full font-bold bg-mainPurple bg-opacity-10 dark:bg-white text-mainPurple hover:bg-opacity-25">
                        <Link href={pathname}>Cancel</Link>
                    </button>
                    
                </div>
            </dialog>
        </>
    )
}