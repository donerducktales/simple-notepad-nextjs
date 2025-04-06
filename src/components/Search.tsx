import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Search() {
   return (
      <div className={`flex ${'search'}`}>
         <form className={`flex gap-2 items-center mb-4 mt-8 ${'searchForm'}`}>
            <input 
               type="text" 
               className={`h-10 w-[227px] rounded-lg bg-dark-700 text-light-900 outline-none px-2`}
            />
            <button className={`flex items-center justify-center bg-primaryBlue w-10 h-10 rounded-xl`}>
               <MagnifyingGlassIcon className="text-light-900 w-6 h-6"/>
            </button>
         </form>
      </div>
   )
}
