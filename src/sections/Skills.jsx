import Skill from '../Component/Skill'
import TitleSection from "../Component/TitleSection";
import Html from '../assets/icons/Html.png';
import CSS from '../assets/icons/CSS.png';
import Sass from '../assets/icons/Sass.png';
import React from '../assets/icons/React.png';
import JS from '../assets/icons/JS.png';
import bootstrap from '../assets/icons/bootstrap.png';
import git from '../assets/icons/git.png';
import figma from '../assets/icons/figma.png';
import NodeJs from '../assets/icons/NodeJs.png';
import MySql from '../assets/icons/MySql.png';
import Mongodb from '../assets/icons/Mongodb.png';
import Ts from '../assets/icons/Ts.png';
import Amrica from '../assets/icons/Amrica.png';
import Spanish from '../assets/icons/Spanish.png';
import C from '../assets/icons/c.png';
import Cpp  from '../assets/icons/Cpp.png';
export default function Skills (){
    return <div id='skills' className=" w-full bg-[#d6d6d6] py-20 px-32 max-lg:px-6 max-md:px-5  "> 
        <TitleSection title={"skills"}/>
        {/* using now  */}
        <div>
            <h3 className="font-bold text-3xl tracking-widest uppercase mt-20" >Using now :</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-16 ">     
                <Skill title="html5" image={Html}/>
                <Skill title="css3" image={CSS}/>
                <Skill title="Sass" image={Sass}/>
                <Skill title="Java Script" image={JS}/>
                <Skill title="React" image={React}/>
                <Skill title="Bootstrap" image={bootstrap}/>
                <Skill title="git" image={git}/>
                <Skill title="figma" image={figma}/>
            </div>
        </div>
        {/* learning now  */}
        <div>
            <h3 className="font-bold text-3xl tracking-widest uppercase mt-20" >Learning:</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-16 ">     
                <Skill title="node JS" image={NodeJs}/>
                <Skill title="MySql" image={MySql}/>
                <Skill title="Mongodb" image={Mongodb}/>
                <Skill title="TypeScript" image={Ts}/>

            </div>
        </div>
        {/* Other Skills */}
        <div>
            <h3 className="font-bold text-3xl tracking-widest uppercase mt-20" >Other Skills:</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 my-16 ">     
                <Skill title="English B1/B2" image={Amrica}/>
                <Skill title="Spanish C1" image={Spanish}/>
                <Skill title="C++" image={Cpp}/>
                <Skill title="C" image={C}/>

            </div>
        </div>
    </div>
};