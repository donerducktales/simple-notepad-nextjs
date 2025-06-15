import Login from "@/components/Authpanel/Login";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Login",
   description: "Login page",
};

export default function LoginPage() {
   return (
      <section className={`flex flex-col items-center justify-center w-full min-h-[100vh] px-2 ${'loginPage'}`}>
         <Link href={'/'}>
            <ArrowLeftIcon className="w-6 text white absolute top-4 left-4 text-white" />
         </Link>
         <Login />
      </section>
   )
}
