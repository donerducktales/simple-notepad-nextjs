import CreatePost from "@/components/CreatePost";

export default function createNote() {
   return (
      <section className={`w-full flex flex-col items-center ${'createNotePage'}`}>
         <CreatePost />
      </section>
   )
}
