"use client"

import Image from "next/image";
import * as data from './data.json';

import { useState } from "react";

export default function Home() {

  const boards = data.boards;

  const [currentBoard, setCurrentBoard] = useState(boards[0]);

  return (
    <main className="flex min-h-screen min-w-screen">
      
      <nav className="flex flex-col w-72  bg-gray-700">
        <p><Image src="/assets/logo-dark.svg" alt="Logo" width={153} height={25} /></p>
        <div className="grow">
          <ul>
            <li>All Boards {boards.length}</li>
            {boards.map((board) => (
              <li onClick={() => {setCurrentBoard(board)}}>{board.name}</li>
            ))}
            <li>Create New Board</li>
          </ul>
        </div>
        <div>
          <p>Dark mode switch</p>
          <p>Hide Sidebar</p>
        </div>
      </nav>
      <div className="flex flex-col grow ">
        <header className="h-24  bg-gray-700 flex justify-between items-center">
          <p className="pl-6">{currentBoard.name}</p>
          <div className="pr-8"><button>+ Add New Task</button></div>
        </header>
        <section className="bg-gray-800 grow">


          {currentBoard.columns.map((column) => (
            <div>{column.name}</div>
          ))}
        </section>
      </div>
      
    </main>
  );
}
