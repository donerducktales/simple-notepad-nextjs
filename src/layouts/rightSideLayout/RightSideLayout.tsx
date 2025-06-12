'use client'

import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import NoteLayout from "../noteLayout/NoteLayout";
import CreatePost from "@/components/CreatePost";
import useViewPortSize from "@/assets/customHooks/useViewPortSize";

export default function RightSideLayout() {
   const clickState = useSelector((state: RootState) => state.clickPost.click);
   const viewPortSize = useViewPortSize();
   
   if (viewPortSize.width < 768) {
      return;
   } else {
      return clickState === 'createPost' ? <CreatePost /> : <NoteLayout />
   }
}
