import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}
const Button = ({type, title, icon, variant}:ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
        {icon && <Image src={icon} alt="title" height={24} width={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button