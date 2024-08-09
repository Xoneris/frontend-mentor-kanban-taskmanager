"use client"

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import { showTaskAction } from "../actions/serverAction";

export default function ShowTaskModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("taskId");
    const pathname = usePathname();

    const [currentTask, setCurrentTask] = useState([])

 
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const result = await showTaskAction(1)
                setCurrentTask(result[0])
            } catch (err) {
                console.log(err)
              }
        }

        fetchTask()

    }, [modal])


    if (!currentTask){
        return
    }

    return (
        
        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start gap-4 dark:text-white dark:bg-darkGrey">
                <div className="w-full flex justify-between">
                    <p className="heading-l">{currentTask.title}</p>
                    <Image src="./assets/icon-vertical-ellipsis.svg" alt="Board options" width={5} height={20} 
                        className="hover:cursor-pointer" 
                        />
                </div>
                

                
                <label>Description</label>
                <p>{currentTask.description}</p>
                <label>Subtasks</label>

                <div className="w-full p-3 bg-veryDarkGrey flex justify-start items-center rounded gap-4">
                    <input type="checkbox" name="test" id="test" value="" className="bg-darkGrey checked:bg-mainPurple w-4 h-4" />
                    <label htmlFor="test" className="text-mediumGrey">Some test or something lmao</label>
                </div>
                

                <label>Current Status</label>
                <select className="w-full p-2 rounded-sm border bg-darkGrey">
                    <option>ToDo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>

            </dialog>
            
        </>
    )
}