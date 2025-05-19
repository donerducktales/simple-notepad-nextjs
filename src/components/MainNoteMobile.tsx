'use client'

import { open_sans, roboto } from "@/assets/fonts";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainNoteMobile() {
   const title = useSelector((state: RootState) => state.clickNote.title);
   const description = useSelector((state: RootState) => state.clickNote.description);

   return (
      <section className={`w-full max-w-[100%] mt-8 flex flex-col items-start ${'mainNoteMobile'}`}>
         <h1 className={`font-medium text-2xl text-white ml-6 ${'noteMobileHeader'} ${roboto.className}`}>
            {title}
         </h1>
         <span className={`w-full h-[1px] bg-dark-600 my-3 ${'divider'}`}></span>
         <p className={`mx-6 text-sm text-white font-normal ${'noteMobileDescription'} ${open_sans.className}`}>
            {description}
         </p>
      </section>
   )
}
