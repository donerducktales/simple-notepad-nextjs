import { poppins } from "@/assets/fonts";
import FilterNotes from "@/components/FilterNotes";
import Search from "@/components/Search";

export default function MainMenu() {
   return (
      <div 
         className={`flex flex-col items-center w-[330px] h-[100vh] bg-dark-800 overflow-y-auto px-[15px] ${poppins.className} ${'main'}`}
      >
         <Search />
         <FilterNotes />
      </div>
   )
}
