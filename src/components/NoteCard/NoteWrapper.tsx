'use client'

import { ObjectId, WithId } from "mongodb";
import NotePreview from "./NotePreview";
import useSWR from "swr";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setInitialSearchValue } from "@/lib/features/searchNoteSlice";

interface Notes {
   id: ObjectId;
   title: string;
   description: string;
}

const fetcher = async (url: string) => {
   const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store'
   });

   if (!res.ok) {
      throw new Error("Failed to fetch notes");
   }

   return res.json();
};

export default function NoteWrapper() {
   const searchResult = useSelector((state: RootState) => state.searchNotes.result);
   const dispatch: AppDispatch = useDispatch();
   const { data: notes, error, isLoading} = useSWR<WithId<Notes>[]>('/api/notes', fetcher, { suspense: true });

   useEffect(() => {
      dispatch(setInitialSearchValue(notes))
   }, [notes]);

   if (isLoading) return <div className="text-white mt-4">Loading...</div>;
   if (error) return <div className="text-white mt-4">Error {error.message}</div>;
   if (!notes || searchResult.length === 0) return <div className="text-white mt-4">There are no notes</div>; 

   return (
      <div className={`w-full flex flex-col items-center gap-3 mt-7 mb-4 ${'noteWrapper'}`}>
         {searchResult.map((el) => 
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
