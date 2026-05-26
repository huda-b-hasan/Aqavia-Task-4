import Button from "./Button"
export default function Project ({info}){
    const listType=info.type.map((element,index)=>{
        return <li key={index} className=" italic" >
            {element}
            {index==info.type.length-1?"":","}
        </li>
    })
    const listLink = info.link.map((element,index)=>{
        return <Button key={index} title={element} color="white" />
    })
    return <div  data-aos="flip-left" className="w-full h-96 bg-center group  z-10 bg-cover text-white flex  items-center justify-center  "
            style={{backgroundImage:`url(${info.image}) `}}>
            <div className="hidden group-hover:flex items-center justify-center gap-4 flex-col w-full h-full bg-[rgba(0,0,0,0.8)] transition-all duration-700">
                <ul className=" justify-center items-center flex  ">
                    {listType}
                </ul>
                <h4 className="text-3xl font-bold tracking-widest ">
                    {info.title}
                </h4>
                <p className="font-thin text-sm">
                    {info.description}
                </p>
                <div className="flex items-center justify-center gap-4 w-full mt-3">
                    {listLink}
                </div>
            </div>
    </div>
}