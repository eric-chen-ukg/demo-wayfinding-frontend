import { ButtonContract } from "@/types/Card";

interface OptionButtonProps {
    option: ButtonContract,
    onClick: any
}

const OptionButton = (props: OptionButtonProps) => {

    return (
        <div
            className="px-3 py-2 border shadow-sm rounded-full 
                transition duration-300 overflow-x-auto text-[0.9em]
                bg-zinc-200 text-center
                hover:cursor-pointer hover:scale-105 hover:bg-blue-600 hover:text-white"
            onClick={() => props.onClick(props.option)}
        >
            {props.option.label}
        </div>
    )
}

export default OptionButton;