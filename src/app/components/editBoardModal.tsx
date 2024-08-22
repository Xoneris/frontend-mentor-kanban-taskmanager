"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getBoard, getColumnsOfBoard } from "../actions/serverAction";

export default function EditBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("editBoard");
    const pathname = usePathname();

    const [currentBoard, setCurrentBoard] = useState([])
    const [currentColumns, setCurrentColumns] = useState([])

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const result = await getBoard(modal)
                setCurrentBoard(result[0])
            } catch (err) {
                console.log(err)
            }
        }

        const fetchColumnsOfBoard = async () => {
            try {
                const result = await getColumnsOfBoard(modal)
                setCurrentColumns(result)
            } catch (err) {
                console.log(err)
            }
        }

        fetchBoard()
        fetchColumnsOfBoard()

    }, [modal])

    if (!currentBoard || !currentColumns) {
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
                <p className="heading-l">Edit Board</p>

                <label className="body-m">Board Name</label>
                <input type="text" value={currentBoard.name} className="w-full border h-10 pl-4 rounded dark:bg-darkGrey"/>

                <label className="body-m">Board Columns</label>
                {
                    currentColumns.map((column) => (
                        <div className="flex w-full gap-4 items-center" key={column.id}>
                            <input type="text" value={column.name} className="w-full border h-10 pl-4 rounded dark:bg-darkGrey" />
                            <div>
                                <Image src="./assets/icon-cross.svg" alt="cross-icon" width={18} height={18}/>
                            </div>
                        </div>
                        
                    ))
                }
                <button className="w-full rounded-3xl h-10 dark:bg-white text-mainPurple">+ Add New Column</button>
                <button className="w-full rounded-3xl h-10 bg-mainPurple text-white">Save Changes</button>

            </dialog>
        </>
    )
}