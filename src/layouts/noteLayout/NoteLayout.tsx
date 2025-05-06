import { poppins } from "@/assets/fonts";
import MainNote from "@/components/MainNote";

export default function NoteLayout() {
   return (
      <div className={`flex flex-col items-start mt-20 ml-12 mr-24 w-full ${'noteLayout'} ${poppins.className} `}>
         <MainNote />
      </div>
   )
}
