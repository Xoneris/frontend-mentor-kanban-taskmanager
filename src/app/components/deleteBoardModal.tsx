"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";

export default function DeleteBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("deleteBoard");
    const pathname = usePathname();

    return (
        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col gap-6 justify-center items-start dark:text-white dark:bg-darkGrey">
                <p className="heading-l text-red">Delete this board?</p>
                <p className="body-l text-mediumGrey">Are you sure you want to delete the {"Cool Name"} board? This action will remove all columns and tasks and cannot be reversed.</p>
                <div className="flex w-full gap-4">
                    <button className="w-full h-10 rounded-full font-bold bg-red hover:bg-redHover">Delete</button>
                    
                        <button className="w-full h-10 rounded-full font-bold bg-white text-mainPurple">
                            <Link href={pathname}>Cancel</Link>
                        </button>
                    
                </div>
                
            </dialog>
        </>
    )
}