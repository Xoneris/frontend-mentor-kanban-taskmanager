// "use client" 

// import Image from "next/image";
// import { useState } from "react";
// import * as data from '../data.json';
// import Link from "next/link";

// export default function Taskboard()  {
  
//   const [currentBoard, setCurrentBoard] = useState(data.boards[0]);
//   const [showBoardOptions, setShowBoardOptions] = useState(false)


//   return (
//     <>
//       <header className="h-24 bg-white flex justify-between items-center border-b border-gray-200 dark:bg-darkGrey dark:border-gray-700 dark:text-white transition-all">
//         <p className="pl-6 text-black heading-xl dark:text-white">{boardSlug['0'].replace(/-/g, " ").toUpperCase()}</p>
//         <div className="pr-8 flex justify-center items-center gap-6">
//           <Link href={"?addNewTask=true"}>
//             <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center hover:bg-mainPurpleHover">+ Add New Task</button>
//           </Link>
//           <div>
//             <Image src="./assets/icon-vertical-ellipsis.svg" alt="Board options" width={5} height={20} 
//               className="hover:cursor-pointer" 
//               onClick={() => setShowBoardOptions(!showBoardOptions)} />
//             {
//               showBoardOptions === true 
//               ?
//               <div className="absolute flex flex-col p-4 gap-4 w-48 h-24 top-[88px] top border right-7 bg-white rounded-lg dark:bg-veryDarkGrey dark:border-gray-700">
//                 <p className="text-mediumGrey">
//                   <Link href={"?editBoard=true"} onClick={() => setShowBoardOptions(false)}>Edit Board</Link>
//                 </p>
//                 <p className="text-red">
//                   <Link href={"?deleteBoard=true"}  onClick={() => setShowBoardOptions(false)}>Delete Board</Link>
//                 </p>
//               </div>
//               : null }
//           </div>
          
//         </div>
//       </header>

//       <section className="bg-lightGrey grow flex flex-col justify-center items-center gap-8 dark:bg-veryDarkGrey transition-all">
//         {
//           currentBoard.columns.length > 0 
//           ? <div className="grow p-6 flex gap-6 justify-start w-full">
//             {currentBoard.columns.map((column) => (
//               <div className="flex flex-col grow max-w-[280px] gap-5">
//                 <p className="heading-s text-mediumGrey uppercase tracking-widest">{column.name} ({column.tasks.length})</p>
//                 {
//                   column.tasks.map((task) => (
//                     <div className="flex flex-col justify-center items-start px-4 py-6 gap-2 rounded-lg bg-white dark:bg-darkGrey">
//                       <p className="heading-m text-black dark:text-white" >{task.title}</p>
//                       <p className="body-m text-mediumGrey">
//                         {task.subtasks.filter((subtask) => subtask.isCompleted === true).length} 
//                         of 
//                         {task.subtasks.length} subtasks</p>
//                     </div>
//                   ))
//                 }
//               </div>
//             ))}
//               <div className="flex max-w-[280px] justify-center items-center mt-[35px] grow rounded-lg bg-[#E9EFFA] text-mediumGrey dark:bg-opacity-25 dark:bg-darkGrey hover:text-mainPurple hover:cursor-pointer">
//                 <p className="heading-xl ">+ New Column</p>
//               </div>
//           </div>
//           : <>
//             <p className="heading-l text-mediumGrey">This board is empty. Create a new column to get started.</p>
//             <button className="bg-mainPurple h-12 p-4 rounded-3xl text-white flex justify-center items-center">+ Add New Column</button>
//           </>

//         }

//         {/* <div>
//           {boardSlug['0'].replace("-", " ").toUpperCase()}
//         </div> */}

//       </section>
//     </>
// )
// }