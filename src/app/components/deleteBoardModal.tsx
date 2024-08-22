"use client"

import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBoard } from "../actions/serverAction";

export default function DeleteBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("deleteBoard");
    const pathname = usePathname();
    const [currentBoard, setCurrentBoard] = useState([])

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const result = await getBoard(modal)
                setCurrentBoard(result[0])
            } catch (err) {
                console.log(err)
            }
        }
    
        fetchBoard()

    },[modal])

    if (!currentBoard) {
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
                <p className="heading-l text-red">Delete this board?</p>
                <p className="body-l text-mediumGrey">Are you sure you want to delete the <b><i>{currentBoard.name}</i></b> board? This action will remove all columns and tasks and cannot be reversed.</p>
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