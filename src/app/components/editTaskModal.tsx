"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getTask, getSubtasks } from "../actions/serverAction";

export default function EditTaskModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("editTask");
    const pathname = usePathname();

    const [currentTask, setCurrentTask] = useState([])
    const [currentSubtasks, setCurrentSubtasks] = useState([])

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const result = await getTask(modal)
                setCurrentTask(result[0])
            } catch (err) {
                console.log(err)
            }
        }

        const fetchSubtasks = async () => {
            try {
                const result = await getSubtasks(modal)
                setCurrentSubtasks(result)
            } catch (err) {
                console.log(err)
            }
        }

        fetchTask()
        fetchSubtasks()

    }, [modal])

    if (!currentTask || !currentSubtasks) {
        return
    }

    return (
        
        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col gap-4 justify-center items-start dark:text-white dark:bg-darkGrey">
                <p className="heading-l">Edit Task</p>

                <label className="body-m">Title</label>
                <input type="text" value={currentTask.title} className="w-full border h-10 pl-4 rounded dark:bg-darkGrey"/>

                {/* Description */}

                <label className="body-m">Subtasks</label>
                {
                    currentSubtasks.map((subtask) => (
                        <div className="flex w-full gap-4 items-center" key={subtask.id}>
                            <input type="text" value={subtask.title} className="w-full border h-10 pl-4 rounded dark:bg-darkGrey" />
                            <div>
                                <Image src="./assets/icon-cross.svg" alt="cross-icon" width={18} height={18}/>
                            </div>
                        </div>
                        
                    ))
                }
                <button className="w-full rounded-3xl h-10 dark:bg-white text-mainPurple">+ Add New Subtask</button>

                <label className="body-m">Current Status</label>
                <select className="w-full p-2 rounded-sm border bg-darkGrey">
                    <option>ToDo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>

                <button className="w-full rounded-3xl h-10 bg-mainPurple text-white">Save Changes</button>

            </dialog>
        </>
    )
}