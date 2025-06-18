'use client'

import { FunnelIcon } from "@heroicons/react/16/solid";
import { ObjectId, WithId } from "mongodb";
import { useState } from "react";
import useSWR from "swr";

interface Category {
   _id: ObjectId,
   type: string,
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

export default function FilterNotes() {
   const { data, error, isLoading } = useSWR<WithId<Category>[]>('/api/categories', fetcher);
   const [click, setClick] = useState<boolean[]>(Array(data?.length).fill(false));

   if (isLoading) return <div className="text-white mt-4">Loading...</div>;
   if (error) return <div className="text-white mt-4">Error {error.message}</div>;
   if (!data) return <div className="text-white mt-4">There are no categories</div>; 

   const handleFilterClick = (index: number) => {
      const newClickedStates = [...click];
      newClickedStates[index] = !newClickedStates[index];
      setClick(newClickedStates);
   };

   return (
      <div className={`flex flex-col items-start w-full ${'filterNotes'}`}>
         <div className={`flex flex-row items-center gap-1 mb-4 text-dark-600 ${'filterNotesHeader'}`}>
            <FunnelIcon className="w-4 h-4"/>
            <h1 className={`text-sm font-medium`}>Filter</h1>
         </div>
         <div className={`flex flex-row flex-wrap md:gap-2 md:gap-x-2 gap-2.5 gap-x-2.5 ${'filterNotesButtons'}`}>
            {data?.map((el, index) => 
               <button 
                  className={`md:h-[23px] h-8 rounded-2xl border border-solid border-primaryBlue ${click[index] ? 'bg-primaryBlue text-dark-800' : 'bg-dark-800 text-primaryBlue'} font-semibold px-2 py-[3px] flex items-center justify-center`}
                  key={el._id.toString()} onClick={() => handleFilterClick(index)}
               >
                  #{el.type}
               </button>
            )}
         </div>
      </div>
   )
}
