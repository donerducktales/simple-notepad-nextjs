import { roboto } from "@/assets/fonts";
import { setDescription, setTitle } from "@/lib/features/clickSlice";
import { AppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function DeleteNoteButtonMobile({_id}: {_id: string}) {
   const dispatch: AppDispatch = useDispatch();
   const router = useRouter();
   
   async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      const response = await fetch('api/notes', {
         body: JSON.stringify({_id: _id}),
         method: 'DELETE',
         cache: 'no-store'
      });

      if (response.ok) {
         dispatch(setTitle('Hello!'));
         dispatch(setDescription('Here will be your notes'));
         router.push('/home');
         return response;
      } else {
         console.error('error in delete note')
      }
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
