'use client'

import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import { setClickPost } from "@/lib/features/createPostSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function CreateButton() {
   const dispatch: AppDispatch = useDispatch();
   const clickState = useSelector((state: RootState) => state.clickPost.click)
   const viewPortSize = useViewPortSize();

   function handleClick() {
      if (viewPortSize.width < 768) {
         return;
      } else {
         dispatch(setClickPost(!clickState));
      }
   }

   return !clickState && <Link href={''} className="fixed md:right-10 md:bottom-9 right-4 bottom-6">
      <button 
         className={`w-14 h-14 rounded-full bg-primaryBlue flex justify-center items-center ${"createButton"}`}
         onClick={handleClick}
      >
         <PlusIcon className="w-6 text-white"/>
      </button>
   </Link>
}
