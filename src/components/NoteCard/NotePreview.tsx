'use client'

import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import { nunito } from "@/assets/fonts";
import { setDescription, setId, setTitle } from "@/lib/features/clickSlice";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteNoteButton from "../DeleteNoteButton";
import { ObjectId } from "mongodb";

export default function NotePreview(
   {_id, title, description}: 
   {_id: ObjectId, title: string, description: string}
) {
   const [click, setClick] = useState<boolean>(false);
   const dispatch: AppDispatch = useDispatch();

   const router = useRouter();
   const viewPortSize = useViewPortSize();
   
   function handleClick() {
      dispatch(setId(_id));
      dispatch(setTitle(title));
      dispatch(setDescription(description));
      dispatch(setClickPost('inactive'));
      
      if (viewPortSize.width < 768) {
         router.push('/note')
      } else {
         return;
      }
   }

   const editedDescription = description.length < 75 ? description : description.slice(0, 75) + ' ...';

   return (
      <div className={`w-full ${'notePreviewWrapper'}`} onClick={handleClick}>
         <div className={`flex flex-col items-start p-3 w-full min-h-[115px] rounded-lg bg-dark-900 ${'notePreview'}`}>
            <div className={`flex flex-col items-start gap-[6px] ${'notePreviewText'}`}>
               <h1 className={`text-base text-white font-medium`}>{title}</h1>
               <p className={`text-xs text-light-800 mr-8 leading-5`}>{editedDescription}</p>
            </div>
            <div className={`w-full flex flex-col items-end mt-1 ${'notePreviewDropdownButtonWrapper'}`}>
               <button 
                  className={`flex items-center justify-center rounded-[100%] w-7 h-7 max-md:hidden ${click ? 'bg-dark-900 border border-[#232938]' : 'bg-[#232938] border-none'} ${'notePreviewDropdownButton'}`}
                  onClick={() => setClick(!click)}
               >
                  <EllipsisVerticalIcon className="w-6 text-primaryBlue" />
               </button>
            </div>
         </div>
         {
            click && <div 
               className={`w-full flex flex-col items-end ${'dropdownMenu'}`}
            >
               <div className={`flex flex-col gap-[1px] mt-1 w-24 h-12 bg-dark-600 ${nunito.className}`}>
                  <button 
                     className={`flex flex-row justify-start items-center pl-3 gap-2 text-white text-sm bg-dark-900 h-[30px] w-full`}
                  >
                     <PencilSquareIcon className="w-4 text-primaryBlue" /> 
                     update
                  </button>
                  <DeleteNoteButton _id={_id.toString()}/>
               </div>
            </div>
         }
      </div>
   )
}
