
import NavBar from "../Component/NavBar";
import PersonalImage from "../assets/PersonalImage.png"
    import linkedInIcon from '../assets/icons/linkedInIcon.svg?react';
    import emailIcon from '../assets/icons/emailIcon.svg?react';
    import Vector from '../assets/icons/Vector.svg?react';
    import seperatorWhite from '../assets/icons/seperatorWhite.png';   
    import mobileBackGroundImage from '/mobileBackGroundImage.jpg';   

    
    export default function Hero() {
        const linkIcon = [
            {
                href:"https://email.com",
                icon: emailIcon
            },
            {
                
                href:"https://github.com",
                icon: Vector
            },
            {
                href:"https://linkedin.com",
                icon: linkedInIcon
            },
        ]
    return (
        <>
        <NavBar/>
        <div className={`w-full px-32 max-lg:px-6  max-md:px-5 py-52 md:bg-[#d6d6d6]   min-h-sxreen flex items-center relative overflow-hidden max-md:justify-center max-md:bg-cover max-md:bg-center bg-[url(${mobileBackGroundImage})] `} >
            <div className={`absolute w-full h-full z-[-1] top-0 left-0 md:hidden bg-[#00000057]`}>
                <img src={mobileBackGroundImage}z className="w-full h-full z-[0]" alt="" />
                {/* <div className="absolute w-full h-full top-0 left-0 z-[0] bg-[#0000001e]"/> */}
            </div>
            <div className=" bg-black  absolute w-[55%] h-[120%] right-[-30px] top-[-40px] rotate-6  max-md:hidden " />
            <div  data-aos="fade-right" className=" info w-1/2 max-md:w-full md:pr-4 text-black font-medium max-md:text-center">
                <p className="text-base md:text-xl tracking-wide max-md:hidden ">Hi, I am</p>
                <h1 className="mt-8 mb-2 text-4xl md:text-6xl tracking-tight leading-tight max-md:hidden "> Tomasz Gajda</h1>
                <p className=" text-sm  text-[#909090] uppercase tracking-widest max-md:hidden">Front-end Developer / UI Designer</p>
                 {/* mobile */}
                <p className="text-white font-light md:hidden">my name is Thomas</p>
                <h1 className="text-white text-5xl md:hidden">I'M A DEVELOPER</h1>
                <img src={seperatorWhite} className="md:hidden m-auto my-12" />
                <div className=" flex items-center space-x-6 mt-20 max-md:mt-10 max-md:justify-center">
                    {
                        linkIcon.map((link,index)=>{
                            return <a key={index} href={link.href} className="flex items-center justify-center w-10 h-10 md:p-2 rounded-sm bg-[#C4C4C4] max-md:bg-transparent text-black max-md:text-white  md:shadow-md text-2xl">
                                <link.icon className="text-black max-md:text-white"/>
                            </a>
                        })
                    }
                </div>
            </div>

            <div className="w-1/2  max-md:hidden">
                <img  data-aos="fade-left" src={PersonalImage} className="absolute bottom-0 w-[490px] right-18 " />
            </div>

        </div>
                
        </>
    );
    }