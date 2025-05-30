import MainNoteMobile from "@/components/MainNoteMobile";
import MobileHeader from "@/components/MobileHeader";

export default function MobileNoteLayout() {
   return (
      <section className={`w-full flex flex-col items-center ${'MobileNoteLayout'}`}>
         <MobileHeader />
         <MainNoteMobile />
      </section>
   )
}
