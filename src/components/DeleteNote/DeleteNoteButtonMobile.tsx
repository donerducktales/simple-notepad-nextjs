import { roboto } from "@/assets/fonts";
import { AppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { handleClickDelete } from "./deleteHandleClick";

export default function DeleteNoteButtonMobile({_id, type}: {_id: string, type: string}) {
   const dispatch: AppDispatch = useDispatch();
   const router = useRouter();
   
   async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      await handleClickDelete({_id, type, dispatch})
      router.push("/home")
   }
   
   return (
      <button 
         className={`w-full py-3 px-3 flex flex-row-reverse border-b border-dark-700 text-base text-white font-medium ${'deleteNoteButtonMobile'} ${roboto.className}`}
         onClick={handleClick}
      >
         Delete
      </button>
   )
}
