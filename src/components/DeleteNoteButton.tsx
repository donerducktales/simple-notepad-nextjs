'use client'

import { setDescription, setTitle } from "@/lib/features/clickSlice";
import { AppDispatch } from "@/lib/store";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { mutate } from "swr";

export default function DeleteNoteButton({_id}: {_id: string}) {
   const dispatch: AppDispatch = useDispatch();
   
   async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      const response = await fetch('api/notes', {
         body: JSON.stringify({_id: _id}),
         method: 'DELETE',
         cache: 'no-store'
      });

      if (response.ok) {
         dispatch(setTitle('Hello!'));
         dispatch(setDescription('Here will be your notes'));
         mutate('/api/notes')
         return response;
      } else {
         console.error('error in delete note')
      }
   }
   
   return (
      <button 
         className={`flex flex-row justify-start items-center pl-3 gap-2 text-white text-sm bg-dark-900 h-[30px] w-full ${'deleteNoteButton'}`}
         onClick={handleClick}
      >
         <TrashIcon className="w-4 text-primaryRed" /> 
         delete
      </button>
   );
}
