import Button from "../Component/Button"
import LogoITB from '../assets/icons/LogoITB.svg?react';   
export default function Information(){
    return <div  className="bg-[#000000ee] w-full  px-32 max-lg:px-6 max-md:px-5 py-10  relative overflow-hidden z-5 max-md:text-center flex flex-col items-start max-md:items-center">
        <h2  className="font-semibold text-2xl tracking-widest text-white ">IT BERRIES</h2>
        <p className="text-sm my-5 text-[#ffffffc5] "> 
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
        </p>
            <LogoITB className='absolute right-[-60px] top-[-95px]  z-[-1] max-md:top-0 max-md:w-full ' />
        
        <Button title="read more" href='#' color={"white"} />
    </div>
}