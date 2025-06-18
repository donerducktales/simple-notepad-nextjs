'use client'

import { fetchResults, setSearchValue } from "@/lib/features/searchNoteSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
   const dispatch: AppDispatch = useDispatch();
   const value = useSelector((state: RootState) => state.searchNotes.value);

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      
      try {
         dispatch(fetchResults(value));
      } catch (error) {
         throw error;
      }
   }
   
   return (
      <form 
         className={`flex items-center justify-center mb-4 mt-8 w-full ${'searchForm'}`}
         onSubmit={handleSubmit}
      >
         <div className={`flex flex-row w-full bg-dark-700 rounded-lg ${'searchInputWrapper'}`}>
            <input 
               type="text" 
               className={`h-10 rounded-lg md:max-w-[244px] w-full bg-dark-700 text-light-900 outline-none placeholder-light-900 px-3 mr-2`}
               placeholder="Search"
               value={value}
               onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
            {
               value.length >= 1 && <button
                  className={`pr-2 ${'clearButton'}`}
                  onClick={() => {dispatch(fetchResults('')); dispatch(setSearchValue(''));}}
               >
                  <XMarkIcon className="w-5 text-white" /> 
               </button>
            }
         </div>
         <button className={`flex items-center justify-center bg-primaryBlue max-w-10 w-full h-10 ml-2 rounded-xl`}>
            <MagnifyingGlassIcon className="text-light-900 w-6 h-6"/>
         </button>
      </form>
   )
}
