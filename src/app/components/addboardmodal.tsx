"use client"

import {useSearchParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { revalidatePath } from "next/cache";
import { TempColumns, ColumnError } from "../types";

import { addNewBoardAction, addNewColumns } from "../actions/serverAction";

export default function AddBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("newBoard");
    const pathname = usePathname();
    const router = useRouter()

    const [boardName, setBoardName] = useState<string>("")
    const [boardNameError, setBoardNameError] = useState<string>("")

    const [columnIdCounter, setColumnIdCounter] = useState<number>(4)
    const [columns, setColumns] = useState<TempColumns[]>([
        {id: 1, name: "ToDo", error: ""},
        {id: 2, name: "Doing", error: ""},
        {id: 3, name: "Done", error: ""},
    ]);
    const [columnsError, setColumnsError] = useState<ColumnError[]>([])
      
    // Check if Taskboard name is empty
    const checkBoardName = () => {
        if (boardName === undefined || boardName === null || boardName === "") {
            setBoardNameError("Please enter a name for the Taskboard")
        } else {
            setBoardNameError("")
        }
    }

    // Check if any of the Columnnames are empty
    const checkColumn = (column: TempColumns) => {
        
        const updatedColumns = [...columns]

        if (column.name === "") {
            for (let i=0; i < updatedColumns.length; i++) {
                if( updatedColumns[i].id === column.id) {
                    updatedColumns[i].error = "Please enter a name for the Column"
                }
            }
            setColumns(updatedColumns)
            
        } else {
            for (let i=0; i < updatedColumns.length; i++) {
                if( updatedColumns[i].id === column.id) {
                    updatedColumns[i].error = ""
                }
            }
            setColumns(updatedColumns)
        }
    }

    const handleSubmit  = async (e:React.FormEvent) => {
        e.preventDefault()

        if (boardNameError !== "") {
            alert("Please enter a name for the taskboard")
            return
        }

        for (let i=0; i<columns.length; i++) {
            if( columns[i].error !== "") {
                alert("Please enter a name for every column")
                return
            }
        }
        
        const boardSlug:string = boardName.toString().toLowerCase().replace(" ", "-")
        const newBoardId = await addNewBoardAction(boardName)
        console.log(columns)
        if (typeof newBoardId === "number") {
            await addNewColumns(newBoardId, columns)
        }
        setBoardName("")
        setColumns([
            {id: 1, name: "ToDo", error: ""},
            {id: 2, name: "Doing", error: ""},
            {id: 3, name: "Done", error: ""},
        ])
        alert("New Taskboard created!")
        router.push(boardSlug)
    }

    return (

        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start dark:text-white dark:bg-darkGrey">
                <p className="heading-l">Add New Board</p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 ">
                    <div className="mt-4 flex flex-col gap-2">
                        <label className="body-m text-mediumGrey dark:text-white">Name</label>
                        <input type="text" name="boardName" 
                            value={boardName} 
                            onChange={(e) => setBoardName(e.target.value)} 
                            onBlur={(e) => checkBoardName()}
                            placeholder="e.g. Web Design" 
                            className={`w-full border h-10 pl-4 rounded dark:bg-darkGrey focus:outline-mainPurple ${boardNameError !== "" ? "border-red" : null}` }
                        />
                        { boardNameError !== "" 
                          ? <p className="text-red">{boardNameError}</p>
                          : null }
                    </div>
                    
                    <label className="body-m text-mediumGrey dark:text-white">Columns</label>
                    {columns.map((column,index) => (
                        <div key={index}>
                            <div className="flex w-full gap-4 items-center" >
                                <input type="text" 
                                    className={`border grow h-10 pl-4 rounded dark:bg-darkGrey focus:outline-mainPurple ${column.error !== "" ? "border-red" : null}`} 
                                    value={column.name} 
                                    onBlur={() => checkColumn(column)}
                                    onChange={(e) => {
                                        const updatedColumns = [...columns]
                                        updatedColumns[index].name = e.target.value  
                                        setColumns(updatedColumns) 
                                    }}
                                />
                                <div onClick={() => setColumns(columns.filter(prev_column => prev_column.id !== column.id ))}>
                                    <Image src="./assets/icon-cross.svg" alt="cross-icon" width={18} height={18}/>
                                </div>
                                
                            </div>
                            { column.error !== ""
                              ? <p className="text-red">{column.error}</p>
                              : null }
                        </div>
                    ))}

                    <button type="button" className="w-full h-10 justify-center items-center text-mainPurple bg-mainPurple bg-opacity-10 dark:bg-white rounded-3xl font-bold"
                        onClick={() => {
                            setColumnIdCounter(columnIdCounter+1)
                            setColumns(columns => [...columns, {id: columnIdCounter, name: "New column", error: ""}])
                        }}
                    >
                        + Add New Column
                    </button>

                    <button type="submit" className="w-full h-10 flex justify-center items-center text-white bg-mainPurple rounded-3xl font-bold">
                        Create New Board
                    </button>
                </form>
            </dialog>
        </>
    )
}
