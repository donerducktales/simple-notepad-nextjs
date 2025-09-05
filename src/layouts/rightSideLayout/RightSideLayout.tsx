'use client'

import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import NoteLayout from "../noteLayout/NoteLayout";
import CreatePost from "@/components/CreatePost/CreatePost";
import useViewPortSize from "@/assets/customHooks/useViewPortSize";
import EditNoteForm from "@/components/EditNoteForm";

export default function RightSideLayout() {
   const clickState = useSelector((state: RootState) => state.clickPost.click);
   const id = useSelector((state: RootState) => state.clickNote._id)
   const title = useSelector((state: RootState) => state.clickNote.title);
   const description = useSelector((state: RootState) => state.clickNote.description);
   const viewPortSize = useViewPortSize();
   
   if (viewPortSize.width < 768) {
      return;
   } else {
      if (clickState === 'createPost') {
         return <CreatePost />
      } else if (clickState === 'updatePost') {
         return <EditNoteForm noteId={id?.toString() as string} title={title} description={description} />
      } else {
         return <NoteLayout />
      }
   }
}
