"use server"

import { db } from "../drizzle/db"
import { taskboardTable } from "../drizzle/schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



export async function addNewBoardAction(boardName:string, pathname: string) {
    
    // const rawFormData = {
    //     boardName: formData.get('formData'),  
    // }

    // await db.insert(taskboardTable).values({

    //     // name: "test something derp",
    //     name: boardName,
    //     })
    //     .returning({
    //     id: taskboardTable.id
    //     })

    return ("it works yay!")

} 


    
