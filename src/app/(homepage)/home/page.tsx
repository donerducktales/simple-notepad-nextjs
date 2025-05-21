import CreateButton from "@/components/CreateButton";
import MainMenu from "@/layouts/mainmenu/MainMenu";
import RightSideLayout from "@/layouts/rightSideLayout/RightSideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Home",
   description: "home page",
};

export default function Home() {
   return (
      <div className={`flex flex-row max-h-[100vh] h-full overflow-y-hidden ${'main'}`}>
         <MainMenu />
         {/* <NoteLayout /> */}
         <RightSideLayout />
         <CreateButton />
      </div>
   )
}
