import Link from "next/link";

export default function Login() {
   return (
      <div className={`flex flex-col items-center max-w-[540px] bg-dark-800 w-full mx-2 rounded-xl ${'loginScreen'}`}>
         <h1 className={`mt-4 mb-8 text-white text-2xl ${'loginScreenHeader'}`}>Sign In</h1>
         <form className={`flex flex-col items-center gap-2 w-full text-white px-2  ${'loginForm'}`}>
            <input 
               type="text" 
               placeholder="Email" 
               className={`bg-dark-600 h-12 max-w-[480px] w-full px-2 outline-0 rounded-lg`} 
            />
            <input 
               type={'password'}
               placeholder="Password" 
               className={`bg-dark-600 h-12 max-w-[480px] w-full px-2 outline-0 rounded-lg`} 
            />
            <button className={`bg-white text-dark-900 h-12 max-w-[480px] w-full px-2 rounded-lg ${'googleButton'}`}>
               Continue with Google
            </button>
            <button 
               className={`h-12 w-60 mt-2 mb-8 bg-primaryBlue rounded-lg ${'loginSubmit'}`}
            >
               Login
            </button>
         </form>
         <p className={`text-white mb-4 ${'ctaRegisterButton'}`}>
            don&apos;t have account? 
            <Link href={'/registration'}>
               <span className={`ml-2 underline`}>register</span>
            </Link>
         </p>
      </div>
   )
}
