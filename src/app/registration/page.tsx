import Registration from "@/components/Authpanel/Registration";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Register",
   description: "Register",
};

export default function RegistrationPage() {
   return (
      <section className={`flex flex-col items-center justify-center w-full min-h-[100vh] px-2 ${'registrationPage'}`}>
         <Link href={'/'}>
            <ArrowLeftIcon className="w-6 text white absolute top-4 left-4 text-white" />
         </Link>
         <Registration />
      </section>
   )
}
