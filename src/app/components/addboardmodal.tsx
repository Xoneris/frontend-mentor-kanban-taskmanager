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
    const [columns, setColumns] = useState<TempColumns[]>([
        {name: "ToDo"},
        {name: "Doing"},
        {name: "Done"},
    ]);
    const [columnsError, setColumnsError] = useState<ColumnError[]>([{error: "", index: null}])
    
    // ------
    
    // Check if Taskboard name is empty
    const checkBoardName = () => {
        
        if (boardName === "" || boardName === null || boardName === undefined) {
            setBoardNameError("Please enter a name for the Taskboard")
        } else {
            setBoardNameError("")
        }
    }

    const checkColumName = (columnName:string, columnIndex:number) => {
        // Check if any of the Columnnames are empty

        if (columnName === "") {

            // if (!columnsError.some(error => error.index === columnIndex)){
            //     setColumnsError([...columnsError, {error: "Please enter a name for the Column", index: columnIndex}])
            // }
            setColumnsError(columnsError.map(error => error.index === columnIndex ? {...error, error: "Please enter a name for the column"} : error ))

        } else if (columnName.length === 1) {
            // setColumnsError([...columnsError, {error: "purged", index: null}])
            setColumnsError(columnsError.map(error => error.index === columnIndex ? {...error, error: ""} : error ))
        }

        //  for (let i=0; i < columns.length; i++) {
        //     if (columns[i].name === "" || columns[i].name === null || columns[i].name === undefined)
        //     setColumnsError({error: "Please enter a name for the Column", index: i})
        //     console.log(columnsError)
        //     return
        // }
    }

    const handleSubmit  = async (e:React.FormEvent) => {
        e.preventDefault()

        checkBoardName()

        const boardSlug:string = boardName.toString().toLowerCase().replace(" ", "-")
        const newBoardId = await addNewBoardAction(boardName)
        console.log(columns)
        alert(columns)

        if (typeof newBoardId === "number") {

            await addNewColumns(newBoardId, columns)

        }

        setBoardName("")
        setColumns([
            {name: "ToDo"},
            {name: "Doing"},
            {name: "Done"},
        ])

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
                            className={`w-full border h-10 pl-4 rounded dark:bg-darkGrey ${boardNameError !== "" ? "border-red" : null}` }
                        />
                        { boardNameError !== "" 
                          ? <p className="text-red">{boardNameError}</p>
                          : null }
                    </div>
                    <label className="body-m text-mediumGrey dark:text-white">Columns</label>
                    {columns.map((column,index) => (
                        <div>
                            <div className="flex w-full gap-4 items-center" key={index}>
                                <input type="text" className={`border grow h-10 pl-4 rounded dark:bg-darkGrey`} 
                                    value={column.name} 
                                    onBlur={(e) => checkColumName(column.name, index)}
                                    onChange={(e) => {
                                        const updatedColumns = [...columns]
                                        updatedColumns[index].name = e.target.value  
                                        setColumns(updatedColumns) 
                                    }}
                                />
                                <div onClick={() => setColumns(columns.filter(prev_column => prev_column.name !== column.name ))}>
                                    <Image src="./assets/icon-cross.svg" alt="cross-icon" width={18} height={18}/>
                                </div>
                                
                            </div>
                            { 
                                columnsError.map((error) => (
                                    
                                    error.index === index 
                                        ? error.error !== ""
                                            ? <p className="text-red">{error.error}</p>
                                            : null
                                        : null 
                                    
                                ))
                                // columnsError.index === index 
                                // ? columnsError.error !== "" 
                                //     ? <p>{columnsError.error}</p>
                                //     : null
                                // : null
                                
                            }
                        </div>
                    ))}
                    <button type="button" className="w-full h-10 justify-center items-center text-mainPurple bg-mainPurple bg-opacity-10 dark:bg-white rounded-3xl font-bold"
                        onClick={() => {
                            setColumns(columns => [...columns, {id: columns.length, name: "New column"}])
                        }
                    }>
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
