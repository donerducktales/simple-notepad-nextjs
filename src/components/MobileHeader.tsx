'use client'

import { RootState } from "@/lib/store";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { EllipsisVerticalIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteNoteButtonMobile from "./DeleteNoteButtonMobile";

export default function MobileHeader() {
   const [openContext, setOpen] = useState<boolean>(false);
   const noteId = useSelector((state: RootState) => state.clickNote._id);
   
   return (
      <div className={`w-full flex flex-col items-end ${'noteMobileHeaderWrapper'}`}>
         <header className={`w-full h-12 bg-dark-800 text-white px-6 flex flex-row justify-between items-center ${'noteMobileHeader'}`}>
            <Link href={'/home'}> 
               <button className={`flex justify-center items-center ${'mobileHeaderBackButton'}`}>
                  <ArrowLeftIcon className="text-white w-6 h-4"/>
               </button>
            </Link>
            <div className={`relative flex gap-12 items-center ${'rightPanelWrapper'}`}>
                  <Link href={'/home/editNote'}>
                     <button className={`${'editNoteButton'}`}>
                        <PencilIcon className="text-white w-6 h-4"/>
                     </button>
                  </Link>   
               <button 
                  className={`${'contextMenuToggle'}`}
                  onClick={() => setOpen(!openContext)}
               > 
                  <EllipsisVerticalIcon className="text-white w-6"/>
               </button>
               {
                  openContext && 
                  <div className={`absolute top-8 right-0.5 rounded-sm w-3xs bg-dark-800 mt-3 ${'contextMenu'}`}>
                     <DeleteNoteButtonMobile _id={noteId?.toString() as string}/>
                  </div>
               }  
            </div>
         </header>
      </div>
   )
}
