export default function ServiceCard({Title,Description,icon}){
    return <div data-aos="zoom-out" className="px-10 max-md:px-6 mt-32">
            <img src={icon} className="absolute translate-x-[-75%] translate-y-[-30%] translate(-75%, -30%)"/>
        <div className="px-0">
            <h3 className="font-semibold text-3xl mb-5 tracking-widest ">{Title}</h3>
        <p className="text-base/8 font-light">
            {Description}
        </p>
        </div>
    </div>
}