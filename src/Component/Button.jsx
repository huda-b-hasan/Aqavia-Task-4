export default function Button({ title, href, color }) {
  return (
    <a 
      href={href}
      className={`uppercase font-semibold px-7 py-1 border-x-2 border-${color} text-${color} 
        duration-500  hover:px-3 
        transition-all w-fit block cursor-pointer  `}
    >
      {title}
    </a>
  );
}
