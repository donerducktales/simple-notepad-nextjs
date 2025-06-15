import Welcome from "@/components/Welcome";

export default function WelcomePage() {
   return (
      <main className={`flex flex-row max-h-[100vh] h-full ${'main'}`}>
         <Welcome />
      </main>
   );
}
