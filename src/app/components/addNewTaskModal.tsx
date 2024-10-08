"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { revalidatePath } from "next/cache";
import { getColumnsOfBoard } from "../actions/serverAction";
import { TaskboardColumns } from "../types";

export default function AddNewTaskModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("addNewTask");
    const pathname = usePathname();

    // let currentColumns:TaskboardColumns[] = []
    const [currentColumns, setCurrentColumns] = useState<TaskboardColumns[]>([])

    // const getColumns = async () => {
    //     const currentColumns = await getColumnsOfBoard(Number(modal))
    // }
    // getColumns();

    useEffect(() => {
        const fetchColumnsOfBoard = async () => {
            try {
                const result = await getColumnsOfBoard(Number(modal))
                setCurrentColumns(result)
            } catch (err) {
                console.log(err)
            }
        }

        fetchColumnsOfBoard()

    }, [modal])


    return (

        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start dark:text-white dark:bg-darkGrey">
            <p className="heading-l">Add New Task</p>
                <form className="w-full flex flex-col gap-6 "> 
                    <label className="body-m text-mediumGrey dark:text-white">Title</label>
                    <input type="text" placeholder="e.g. Coffee Break" className="w-full border h-10 pl-4 rounded focus:outline-mainPurple dark:bg-darkGrey"/>
                    <label className="body-m text-mediumGrey dark:text-white">Description</label>
                    <textarea className="w-full h-28 border p-4 rounded focus:outline-mainPurple dark:bg-darkGrey" 
                        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.">    
                    </textarea>
                    <label className="body-m text-mediumGrey dark:text-white">Subtasks</label>
                    <input type="text" placeholder="e.g. Make coffee" className="w-full border h-10 pl-4 rounded focus:outline-mainPurple dark:bg-darkGrey"/>
                    <input type="text" placeholder="e.g. Drink coffee & smile" className="w-full border h-10 pl-4 rounded focus:outline-mainPurple dark:bg-darkGrey"/>
                    <button className="w-full h-10 justify-center items-center text-mainPurple bg-mainPurple bg-opacity-10 dark:bg-white rounded-3xl font-bold">
                        + Add New Subtask
                    </button>
                    <label className="body-m text-mediumGrey dark:text-white">Status</label>
                    <select className="border h-10 px-4 rounded dark:bg-darkGrey">
                        {
                            currentColumns.map((column) => (
                                <option>{column.name}</option>
                            ))
                        }
                    </select>
                    <button className="w-full h-10 flex justify-center items-center text-white bg-mainPurple rounded-3xl font-bold">
                        Create Task
                    </button>
                </form>
            </dialog>
        </>
    )
}