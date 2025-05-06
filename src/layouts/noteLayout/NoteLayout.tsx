import { poppins } from "@/assets/fonts";
import MainNote from "@/components/MainNote";

export default function NoteLayout() {
   return (
      <div className={`flex flex-col items-start mr-32 max-md:hidden w-full ${'noteLayout'} ${poppins.className} `}>
         <MainNote />
      </div>
   )
}
