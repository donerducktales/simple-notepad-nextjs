import { poppins } from "@/assets/fonts";
import { PencilIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Welcome() {
   return (
      <section className={`flex flex-col justify-center items-center gap-4 w-full min-h-[100vh] mx-4 text-white ${'welcomePage'} ${poppins.className}`}>
         <h1 className={`text-2xl font-medium text-center ${'welcomePageHeader'}`}>
            <span className="font-extralight">Welcome to </span>
            SimpleNotepad
         </h1>
         <Link href={'/home'}>
            <button className={`flex flex-row gap-4 w-72 h-12 rounded-xl items-center justify-center bg-primaryBlue font-medium ${'welcomePageButton'}`}>
               <PencilIcon className="text-white w-5"/>
               New Note
            </button>
         </Link>
      </section>
   )
}
