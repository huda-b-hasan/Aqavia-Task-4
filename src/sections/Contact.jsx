import Button from "../Component/Button";
import Input from "../Component/Input";
import TitleSection from "../Component/TitleSection"
import separator from "../assets/separator.png";
export default function Contact(){
    return <div id="contact" className="w-full bg-[#d6d6d6] py-20 px-32 max-lg:px-6 max-md:px-5 flex flex-col items-center justify-center">
        <TitleSection title={"Contact"}/>
        <p className="font-thin text-center my-10">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
        <img src={separator} alt="" />
        <form action="post"className="w-1/2 max-md:w-full block my-20 flex flex-col items-center justify-center   ">
            <Input type={"name"} name="name" placeholder={"Enter Your Name"} isRequired={true} />
            <Input type={"email"} name="email" placeholder={"Enter Your email"} isRequired={true} />
            <Input type={"number"} name="number" placeholder={"phone number"} isRequired={false} />
            <Input type={"textarea"} name="message" placeholder={"your message"} isRequired={false} />
            <Button title={"submit"} color={"black"} />
        </form>
    </div>  
}