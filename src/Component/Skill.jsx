export default function Skill ({title , image}){
    return <div  data-aos="zoom-in-up" className="flex flex-col justify-center items-center mb-16"> 
        <img src={image} alt="html" />      
        <h4 className="text-3xl font-thin tracking-wider mt-8 uppercase">{title}</h4>
    </div>
}