"use client"

import {useSearchParams, usePathname, redirect} from "next/navigation";
import Link from "next/link";

export default function EditBoardModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("editBoard");
    const pathname = usePathname();

    return (
        
        modal && 
        <>
            <Link href={pathname} className="cursor-default">
                <div className="absolute top-0 left-0 min-h-full min-w-full bg-black bg-opacity-40">
                </div>
            </Link>

            <dialog className="absolute w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 flex flex-col justify-center items-start dark:text-white dark:bg-darkGrey">
                <p className="heading-l">Edit Board</p>
            </dialog>
        </>
    )
}