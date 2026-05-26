import Button from "../Component/Button";
import TitleSection from "../Component/TitleSection";
import separator from "../assets/separator.png";
import ServiceCard from "../Component/ServiceCard";;7
import design from "../assets/icons/design.png"
import development from "../assets/icons/development.png"
import MAINTENANCE from "../assets/icons/MAINTENANCE.png"

export default function About(){
    return <div id="about" className=" w-full bg-[#d6d6d6] py-20 px-32 max-lg:px-6 max-md:px-5  flex justify-center flex-col items-center space-y-12">
        <TitleSection title="About Me" />
        <p className="text-center max-md:w-full text-sm ">Nulla in veilt metus rhoncus tempus . Nulla congue nulla vel sem varius finibus. Sed ormare sit amer iorem sed viverra. in vel uma quis libero viverrra facilists ur ac est.</p>
        <Button title="explore" href='#' color={"black"} />
        <img src={separator} />
        
        <div className="mb-24 flex items-center justify-center flex-wrap  gap-y-10">
            <div className="w-[45%] max-md:w-full ">
                        <ServiceCard   Title="Design" Description="I can design the site based on your reeds and suggestion, I can also design the see from scratchand consult you changing the job" icon={design}  />
            </div>
            <div className="w-[45%] max-md:w-full">
                        <ServiceCard   Title="DEVELOPMENT" Description="Based on a project created by me (or any another one provided by you), I can code the website to be fully functional and responsive." icon={development}  />
            </div>
            <div className="w-[45%] max-md:w-full">
                        <ServiceCard   Title="MAINTENANCE" Description="I will look after your website, and in case of problems or the need for changes, I can introduce new functionalities and solutions." icon={MAINTENANCE}  />
            </div>
        </div>
        <img src={separator}  />
    </div>
}