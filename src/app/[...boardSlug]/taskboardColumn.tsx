"use client" 

import Image from "next/image";
import { useState } from "react";
import * as data from '../data.json';
import Link from "next/link";

export default function TaskboardColumn({columnName, columnTasks})  {

    console.log(columnName)
    console.log(columnTasks)

  return (
    <>
        
            <div className="flex flex-col grow max-w-[280px] gap-5">
            <p className="heading-s text-mediumGrey uppercase tracking-widest">{columnName} ({columnTasks.length})</p>
            {/* {columnTasks} */}
            {/* {
                columnTasks > 0 
                ? columnTasks.map((task) => (
                <div className="flex flex-col justify-center items-start px-4 py-6 gap-2 rounded-lg bg-white dark:bg-darkGrey">
                    <p className="heading-m text-black dark:text-white" >{task.title}</p>
                    <p className="body-m text-mediumGrey">
                        {task.subtasks.filter((subtask) => subtask.isCompleted === true).length} 
                        of 
                        {task.subtasks.length} subtasks
                        Something
                    </p>
                </div>
                ))
                : null
                
            } */}
            </div>

            {/* <div className="flex max-w-[280px] justify-center items-center mt-[35px] grow rounded-lg bg-[#E9EFFA] text-mediumGrey dark:bg-opacity-25 dark:bg-darkGrey hover:text-mainPurple hover:cursor-pointer">
            <p className="heading-xl ">+ New Column</p>
            </div> */}
    </>
)
}