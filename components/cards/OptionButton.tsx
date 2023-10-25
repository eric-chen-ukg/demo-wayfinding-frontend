import { ButtonContract } from "@/types/Card";

interface OptionButtonProps {
    option: ButtonContract,
    onClick: any
}

const OptionButton = (props: OptionButtonProps) => {

    return (
        <div
            className="px-3 py-2 border md:border-none md:shadow-md rounded-full 
                transition duration-300 text-[0.9em] whitespace-nowrap
                md:bg-zinc-200 bg-none mobile-btn-blue md:text-black text-center truncate
                hover:cursor-pointer hover:scale-105 hover:bg-blue-600 hover:text-white"
            onClick={() => props.onClick(props.option)}
        >
            {props.option.label}
        </div>
    )
}

export default OptionButton;