import TitleSection from "../Component/TitleSection";
import PortofolioBackground from '../assets/icons/PortofolioBackground.png'
import ProjectOne from '../assets/icons/ProjectOne.png'
import ProjectTwo from '../assets/icons/ProjectTwo.png'
import ProjectThree from '../assets/icons/ProjectThree.png'
import Project from "../Component/Project";
import { useState } from "react";
export default function Porfolio (){
    const project = [
        {
            type:["coded","design"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["demo","more"],
            image:ProjectOne
        },
        {
            type:["coded"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["more"],
            image:ProjectTwo
        },
        {
            type:["design"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["demo"],
            image:ProjectThree
        },
        {
            type:["design"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["demo"],
            image:ProjectThree
        },
        {
            type:["coded","design"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["demo","more"],
            image:ProjectOne
        },
        {
            type:["coded"],
            title:"eatsome",
            description:"Restaurant browsing in React.js (Using Yelp API)",
            link:["more"],
            image:ProjectTwo
        },
    ]
    const [projectShow,setProject]=useState(project)
    const [activeFilter,setActiveFilter]=useState("all")

    function filterProject(e){
        const filterType= e.target.id;
        setActiveFilter(filterType)
        
        if(filterType=="all"){
            setProject(project)
        }else {
            const filtered=project.filter((p)=> p.type.includes(filterType))
            setProject(filtered)
        }
    }
    return <div id="portfolio" className="w-full bg-[#d6d6d6] py-8   ">
        <div className="px-32 max-lg:px-6 max-md:px-5 py-28 bg-cover bg-center"  style={{backgroundImage:`url(${PortofolioBackground}) `}}>
            <TitleSection title={"Portfolio"} />
        </div>
        <div className="bg-[#1A1A1A] px-32 max-lg:px-6 max-md:px-5 py-8 flex items-center justify-center" >
            <button onClick={filterProject} id="all" className={` px-14 max-md:px-5 py-2 text-[#ffffff42] border-b-2 border-[#ffffff42] uppercase ${activeFilter=="all"?"clicked":""}`}>
                All
            </button>
            <button onClick={filterProject} id="coded" className={`px-14 max-md:px-5 py-2 text-[#ffffff42] border-b-2 border-[#ffffff42]  uppercase ${activeFilter=="coded"?"clicked":""}`}>
                Coded
            </button>
            <button onClick={filterProject}  id="design" className={`px-14 max-md:px-5 py-2 text-[#ffffff42] border-b-2 border-[#ffffff42] uppercase ${activeFilter=="design"?"clicked":""}`}>
                Disign
            </button>      
        </div>
        <div className="bg-black grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {projectShow.map((p,index)=>{
                return <Project key={index} info={p}/>
            })}

        </div>
        <div className="text-center text-white  bg-[#1A1A1A] py-5 text-xl ">
            And Many More To come!
        </div>
    </div>
}