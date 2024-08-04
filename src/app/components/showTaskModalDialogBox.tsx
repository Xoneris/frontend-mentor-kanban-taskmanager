// "use server"


// // import {usePathname} from "next/navigation";
// import Link from "next/link";

// import { db } from "../drizzle/db";
// import { eq } from "drizzle-orm";
// import { tasksTable } from "../drizzle/schema";

// export default async function ShowTaskModalDialogBox({TaskId}) {

//     // const pathname = usePathname();

//     const currentTask = await db.select().from(tasksTable).where(eq(tasksTable.id, TaskId))   

//     // console.log(currentTask)

//     return (
//         <>
//             {/* <Link href={pathname} className="cursor-default">
//                 <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
//                 </div>
//             </Link>*/}

//             <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start dark:text-white dark:bg-darkGrey">
//                 <form>
//                     <p className="heading-l">{currentTask[0].title}</p>
//                     <p>{currentTask[0].description}</p>
//                     <p>Subtasks</p>
//                     <p></p>
//                     <p>Current Status:</p>
//                     <select>
//                         <option>Doing</option>
//                         <option>ToDo</option>
//                         <option>Done</option>
//                     </select>
//                 </form>
                


//             </dialog> 
            
//         </>
//     )
// }