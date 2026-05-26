import Arrow from '../assets/icons/arrow.svg?react';
import Facebook from '../assets/icons/Facebook.svg?react';
import Email from '../assets/icons/Email.svg?react';
import Linkedin from '../assets/icons/Linkedin.svg?react';
import Instagram from '../assets/icons/Instagram.svg?react';

export default function Footer(){
    const listLink=[
        {
            href:"https://facebook.com",
            icon:Facebook
        },
        {
            href:"https://Instagram.com",
            icon:Instagram
        },
        {
            href:"https://Linkedin.com",
            icon:Linkedin
        },
        {
            href:"https://Email.com",
            icon:Email
        },
    ]
    return <div className="bg-[#1A1A1A] w-full py-10 px-32 max-lg:px-6 max-md:px-5 flex flex-col items-center justify-center">
        <Arrow data-aos="fade-up"  className="w-8 h-8"/>
        <h4 data-aos="fade-up"  className='font-bold tracking-widest text-white text-2xl mt-5 mb-8'>BACK TO TOP</h4>
        <div data-aos="fade-up"  className='flex items-center justify-between gap-5 mb-8'>
            {
            listLink.map((l,index)=>{
                return <a key={index} href={l.href} >
                    <l.icon/>
                </a>
            })
        }
        </div>
        <p data-aos="fade-up"  className='text-white'> <strong>@2020 Tomasz Gajda</strong> All Rights Reserved.</p>
    </div>
}