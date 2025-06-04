'use client'

import { ObjectId, WithId } from "mongodb";
import NotePreview from "./NotePreview";
import { useEffect, useState } from "react";

interface Notes {
   id: ObjectId;
   title: string;
   description: string;
}

export default function NoteWrapper() {
   const [notes, setNotes] = useState<WithId<Notes>[]>([]);
   
   useEffect(() => {
      const getNote = async () => {
         try {
            const res = await fetch('api/notes', {
               method: 'GET',
               cache: 'no-store'
            });

            if (!res.ok) throw new Error("Failed to fetch notes");

            const data = await res.json() as WithId<Notes>[];

            setNotes(data);
         } catch (error) {
            alert(error)
         }
      }

      getNote();
   }, []);

   return (
      <div className={`w-full flex flex-col items-center gap-3 mt-7 mb-4 ${'noteWrapper'}`}>
         {notes.map((el) => 
            <NotePreview
               key={el._id.toString()}
               title={el.title}
               description={el.description}
               _id={el._id}
            />
         )}
      </div>
   )
}
