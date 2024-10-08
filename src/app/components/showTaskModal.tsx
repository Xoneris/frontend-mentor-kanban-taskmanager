"use client"

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Task, Subtask } from "../types";
import { getTask, getSubtasks } from "../actions/serverAction";

export default function ShowTaskModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("taskId");
    const pathname = usePathname();

    const [currentTask, setCurrentTask] = useState<Task>()
    const [currentSubtasks, setCurrentSubtasks] = useState<Subtask[]>()
    const [showTaskOptions, setShowTaskOptions] = useState<boolean>(false)

 
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const result = await getTask(Number(modal))
                setCurrentTask(result[0])
            } catch (err) {
                console.log(err)
              }
        }

        const fetchSubtasks = async () => {
            try {
                const result = await getSubtasks(Number(modal))
                setCurrentSubtasks(result)
            } catch (err) {
                console.log(err)
            }
        }

        fetchTask()
        fetchSubtasks()

    }, [modal])


    if (!currentTask || !currentSubtasks){
        return
    }

    return (
        
        modal && 
        <>
            <Link href={pathname} className="cursor-default" onClick={() => setShowTaskOptions(false)}>
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start gap-4 dark:text-white dark:bg-darkGrey">
                <div className="w-full flex justify-between">
                    <p className="heading-l">{currentTask.title}</p>
                    <div className="flex items-center">
                        <Image src="./assets/icon-vertical-ellipsis.svg" alt="Board options" width={5} height={20} 
                            className="hover:cursor-pointer"
                            onClick={() => setShowTaskOptions(!showTaskOptions)} 
                        />
                        {
                            showTaskOptions === true 
                            ? <div className="absolute flex flex-col p-4 gap-4 w-48 h-24 top-20 border -right-16 bg-white rounded-lg dark:bg-veryDarkGrey dark:border-gray-700">
                            <p className="text-mediumGrey hover:cursor-pointer">
                                <Link href={"?editTask="+currentTask.id} onClick={() => setShowTaskOptions(false)}>Edit Task</Link>
                            </p>
                            <p className="text-red hover:cursor-pointer">
                                <Link href={"?deleteTask="+currentTask.id}  onClick={() => setShowTaskOptions(false)}>Delete Task</Link>
                            </p>
                        </div>
                            : null }
                        
                    </div>
                </div>
                
                <label className="body-m">Description</label>
                <p>{currentTask.description ? currentTask.description : <i className="text-gray-500">This Task has no desccription</i>}</p>
                <label className="body-m">Subtasks</label>
                {
                    currentSubtasks.map((subtask) => (
                        <div className="w-full p-3 bg-veryDarkGrey flex justify-start items-center rounded gap-4" key={subtask.id}>
                            <input type="checkbox" name="test" id="test" value="" className="bg-darkGrey checked:bg-mainPurple w-4 h-4" 
                            checked={subtask.isCompleted} />
                            <label htmlFor="test" className="text-mediumGrey">{subtask.title}</label>
                        </div> 
                    ))
                }
                

                <label className="body-m">Current Status</label>
                <select className="w-full p-2 rounded-sm border bg-darkGrey">
                    <option>ToDo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>

            </dialog>
            
        </>
    )
}