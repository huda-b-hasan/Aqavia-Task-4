export default function Input({type , name , placeholder,isRequired}){
    return <>{
        type=="textarea" ? <textarea name={name} 
         className="mb-12 text-[#8B8B8B] h-28 font-bold uppercase bg-transparent w-full border-l-[5px] border-b-[5px] pl-3 py-1 border-black " required={isRequired} placeholder={placeholder}/> 
        :<input type={type} name={name} placeholder={placeholder}
        className="mb-12 text-[#8B8B8B]  font-bold uppercase bg-transparent w-full border-l-[5px] border-b-[5px] pl-3 py-1 border-black " required={isRequired} />

    }
    </>
}