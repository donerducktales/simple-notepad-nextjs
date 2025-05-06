'use client'

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainNote() {
   const title = useSelector((state: RootState) => state.clickNote.title);
   const description = useSelector((state: RootState) => state.clickNote.description);
   
   return (
      <section className={`w-full flex flex-col items-start text-white ${'mainNote'}`}>
         <h1 className={`text-5xl font-normal ${'mainNoteHeader'}`}>
            {title}
         </h1>
         <span className={`w-full h-[1px] bg-dark-600 my-3 ${'divider'}`}></span>
         <p className={`${'mainNoteDescription'}`}>
            {description}
         </p>
      </section>
   )
}
