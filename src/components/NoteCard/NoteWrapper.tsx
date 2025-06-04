'use client'

import { ObjectId, WithId } from "mongodb";
import NotePreview from "./NotePreview";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface Notes {
   id: ObjectId;
   title: string;
   description: string;
}

const fetcher = async (url: string) => {
   const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store' // Забезпечуємо, щоб завжди отримувалися свіжі дані
   });

   if (!res.ok) {
      throw new Error("Failed to fetch notes");
   }

   return res.json();
};

export default function NoteWrapper() {
   const { data: notes, error, isLoading} = useSWR<WithId<Notes>[]>('/api/notes', fetcher, { suspense: true });

   if (isLoading) return <div className="text-white mt-4">Loading...</div>;
   if (error) return <div className="text-white">Error {error.message}</div>;
   if (!notes) return <div className="text-white">There are no notes</div>; 

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
