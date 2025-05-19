// import { notes } from "@/assets/notes";
import { ObjectId, WithId } from "mongodb";
import { client } from "@/lib/db";
import NotePreview from "./NotePreview";

interface Notes {
   id: ObjectId;
   title: string;
   description: string;
}

export default async function NoteWrapper() {
   async function getNotes() {
      try {
         const myClient = await client.connect();
         const myDb = myClient.db('notes')
         const myData = await myDb
            .collection('note')
            .find()
            .toArray()

         return myData;
      } catch (error) {
         console.error(error);
         return [];
      }
   }

   const notes = await getNotes() as WithId<Notes>[];

   return (
      <div className={`w-full flex flex-col items-center gap-3 mt-7 mb-4 ${'noteWrapper'}`}>
         {notes.map((el) => 
            <NotePreview
               key={el._id.toString()}
               title={el.title}
               description={el.description}
            />
         )}
      </div>
   )
}
