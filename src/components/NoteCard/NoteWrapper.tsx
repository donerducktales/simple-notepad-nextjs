import { notes } from "@/assets/notes";
import NotePreview from "./NotePreview";

export default function NoteWrapper() {
   return (
      <div className={`w-full flex flex-col items-center gap-3 mt-7 mb-4 ${'noteWrapper'}`}>
         {notes.map((el) => 
            <NotePreview 
               key={el.id}
               title={el.title}
               description={el.description}
            />
         )}
      </div>
   )
}
