import CreatePost from "@/components/CreatePost/CreatePost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note",
  description: "Create note",
};

export default function createNote() {
   return (
      <section className={`w-full flex flex-col items-center ${'createNotePage'}`}>
         <CreatePost />
      </section>
   )
}
