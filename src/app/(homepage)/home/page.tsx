import MainMenu from "@/layouts/mainmenu/MainMenu";
import NoteLayout from "@/layouts/noteLayout/NoteLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Home",
   description: "home page",
};

export default function Home() {
   return (
      <div className={`flex flex-row max-h-[100vh] h-full overflow-y-hidden ${'main'}`}>
         <MainMenu />
         <NoteLayout /> 
      </div>
   )
}
