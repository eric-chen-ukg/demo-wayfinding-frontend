import Image from "next/image";
import aiStar from "assets/images/ai-star.png";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const options = [
    'exploratory',
    'gptw',
    'submitpto',
    'schedule',
    'schedrec',
    'personsearch',
    'accruals',
    'benefits',
    'punches',
    'addresschange',
    'shiftswap',
    'paychecks',
    'availability',
    'locationPreference',
    'companypolicy',
    'conversational'
];

interface ChatboxHeaderProps {
    intent: string,
    setIntent: (intent: string) => void
}

const ChatboxHeader = (props: ChatboxHeaderProps) => {

    const intent = props.intent;
    const setIntent = props.setIntent;

    const handleIntentChange = (selectedOption: any) => {
        setIntent(selectedOption.value);
    }

    return (
        <div className="p-4 w-full h-[15%] bg-zinc-100/90 rounded-t-xl flex justify-between relative">
            <div className="flex">
                <div className="flex h-full">
                    <Image className="object-cover" src={aiStar} alt="ai-star" />
                    <span className="text-purple-900/80 font-semibold text-[1.5em] px-3 my-auto">
                        BryteAI
                    </span>
                </div>
                <div className="my-auto ml-8">
                    <Dropdown
                        className="opacity-0 hover:opacity-100"
                        options={options.map(option => ({ value: option, label: option }))}
                        onChange={handleIntentChange}
                        value={{ value: intent, label: intent }}
                    />
                </div>
            </div>
            <div className="mx-4 mt-3 text-3xl hover:cursor-pointer"><AiOutlineClose /></div>
        </div>
    )
}

export default ChatboxHeader;