import Link from "next/link";

export default function Registration() {
   return (
      <div className={`flex flex-col items-center max-w-[540px] bg-dark-800 w-full mx-2 rounded-xl ${'registrationScreen'}`}>
         <h1 className={`mt-4 mb-8 text-white text-2xl ${'registrationScreenHeader'}`}>Sign Up</h1>
         <form className={`flex flex-col items-center gap-2 w-full text-white px-2  ${'registrationForm'}`}>
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
            <input 
               type={'password'}
               placeholder="Confirm password" 
               className={`bg-dark-600 h-12 max-w-[480px] w-full px-2 outline-0 rounded-lg`} 
            />
            <button className={`bg-white text-dark-900 h-12 max-w-[480px] w-full px-2 rounded-lg ${'googleButton'}`}>
               Register with Google
            </button>
            <button 
               className={`h-12 w-60 mt-2 mb-8 bg-primaryBlue rounded-lg ${'registrationSubmit'}`}
            >
               Register
            </button>
         </form>
         <p className={`text-white mb-4 ${'ctaLoginButton'}`}>
            have an account?
            <Link href={'/login'}>
               <span className={`ml-2 underline`}>login</span>
            </Link>
         </p>
      </div>
   )
}
