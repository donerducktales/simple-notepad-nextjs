'use client'

import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import NoteLayout from "../noteLayout/NoteLayout";
import CreatePost from "@/components/CreatePost";

export default function RightSideLayout() {
   const clickState = useSelector((state: RootState) => state.clickPost.click);
   
   return clickState ? <CreatePost /> : <NoteLayout />
}
