"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AddBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("newBoard");
    const pathname = usePathname();

    const [columns, setColumns] = useState([
        {id: 1, name: "ToDo"},
        {id: 2, name: "Doing"},
    ]);

    return (
        <>
        {
            modal && 
            <dialog className="absolute top-0 left-0 min-h-screen min-w-full bg-black bg-opacity-40 flex justify-center items-center">
                <div className="w-[416px] bg-white rounded-xl p-8 flex flex-col justify-center items-start gap-6 dark:text-white dark:bg-darkGrey">
                    <p className="heading-l">Add New Board</p>

                        <label className="body-m text-mediumGrey dark:text-white">Name</label>
                        <input type="text" placeholder="e.g. Web Design" className="w-full border h-10 pl-4 rounded dark:bg-darkGrey"/>
                        <label className="body-m text-mediumGrey dark:text-white">Columns</label>
                        {columns.map((column) => (
                            <div className="flex w-full gap-4 items-center" key={column.id}>
                                <input type="text" className="border grow h-10 pl-4 rounded dark:bg-darkGrey" placeholder={column.name} 
                                // onBlur={() => setColumns([...columns, ])}
                                // onChange={(column) => handleChange}
                                />
                                <div onClick={() => setColumns(columns.filter(prev_column => prev_column.name !== column.name ))}>
                                    <Image src="./assets/icon-cross.svg" alt="cross-icon" width={18} height={18}/>
                                </div>
                                
                            </div>
                        ))}
                        <button className="w-full h-10 justify-center items-center text-mainPurple bg-mainPurple bg-opacity-10 dark:bg-white rounded-3xl font-bold"
                            onClick={() => setColumns([...columns, {id: columns.length+1, name: ""}])}>
                            + Add New Column
                        </button>

                    <button className="w-full h-10 flex justify-center items-center text-white bg-mainPurple rounded-3xl font-bold">
                        <Link href={pathname}>Create New Board</Link>
                    </button>
                    
                </div>
                
            </dialog>
        }
        </>
    )

}