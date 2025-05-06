'use client'

import { FunnelIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function FilterNotes() {
   const initialFilters = ['laravel', 'javascript', 'css', 'html', 'atom', 'kotlin', 'meeting'];
   const [click, setClick] = useState<boolean[]>(Array(initialFilters.length).fill(false));
   
   const handleFilterClick = (index: number) => {
      const newClickedStates = [...click];
      newClickedStates[index] = !newClickedStates[index];
      setClick(newClickedStates);
   };

   return (
      <div className={`flex flex-col items-start w-full ${'filterNotes'}`}>
         <div className={`flex flex-row items-center gap-1 mb-4 text-dark-600 ${'filterNotesHeader'}`}>
            <FunnelIcon className="w-4 h-4"/>
            <h1 className={`text-sm font-medium`}>Filter</h1>
         </div>
         <div className={`flex flex-row flex-wrap md:gap-2 md:gap-x-2 gap-2.5 gap-x-2.5 ${'filterNotesButtons'}`}>
            {initialFilters.map((el, index) => 
               <button 
                  className={`md:h-[23px] h-8 rounded-2xl border border-solid border-primaryBlue ${click[index] ? 'bg-primaryBlue text-dark-800' : 'bg-dark-800 text-primaryBlue'} font-semibold px-2 py-[3px] flex items-center justify-center`}
                  key={el} onClick={() => handleFilterClick(index)}
               >
                  #{el}
               </button>
            )}
         </div>
      </div>
   )
}
