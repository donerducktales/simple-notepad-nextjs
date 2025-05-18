'use client'

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { EllipsisVerticalIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
   const [openContext, setOpen] = useState<boolean>(false);
   
   return (
      <div className={`w-full flex flex-col items-end ${'noteMobileHeaderWrapper'}`}>
         <header className={`w-full h-12 bg-dark-800 text-white px-6 flex flex-row justify-between items-center ${'noteMobileHeader'}`}>
            <Link href={'/home'}> 
               <button className={`flex justify-center items-center ${'mobileHeaderBackButton'}`}>
                  <ArrowLeftIcon className="text-white w-6 h-4"/>
               </button>
            </Link>
            <div className={`flex gap-12 items-center ${'rightPanelWrapper'}`}>
               <PencilIcon className="text-white w-6 h-4"/>
               <button 
                  className={`${'contextMenuToggle'}`}
                  onClick={() => setOpen(!openContext)}
               > 
                  <EllipsisVerticalIcon className="text-white w-6"/>
               </button>
            </div>
         </header>
         {
            openContext && 
            <div className={`rounded-sm w-3xs bg-dark-800 mt-2 mr-4 ${'contextMenu'}`}>
               example
            </div>
         }
      </div>
   )
}
