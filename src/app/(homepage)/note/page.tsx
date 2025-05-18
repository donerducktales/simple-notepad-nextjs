import MobileNoteLayout from "@/layouts/MobileNoteLayout/MobileNoteLayout";

export default function NoteMobile() {
   return (
      <section className={`w-full flex flex-col items-center ${'noteMobile'}`}>
         <MobileNoteLayout />
      </section>
   )
}
