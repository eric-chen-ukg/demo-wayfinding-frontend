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
                md:bg-zinc-200 bg-none mobile-btn-blue md:text-black text-center
                hover:cursor-pointer hover:bg-zinc-300 hover:text-black 
                hover:min-w-fit hover:z-10"
            onClick={() => props.onClick(props.option)}
        >
            <div className="relative truncate text-center hover:min-w-fit">
                {props.option.label}
            </div>
        </div>
    )
}

export default OptionButton;