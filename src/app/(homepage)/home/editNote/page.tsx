'use client'

import EditNoteForm from '@/components/EditNote/EditNote'
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function EditNotePage() {
   const id = useSelector((state: RootState) => state.clickNote._id)
   const title = useSelector((state: RootState) => state.clickNote.title);
   const description = useSelector((state: RootState) => state.clickNote.description);
   
   return (
      <EditNoteForm noteId={id?.toString() as string} title={title}  description={description}/>
   )
}
