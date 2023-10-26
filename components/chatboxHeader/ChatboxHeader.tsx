import Image from "next/image";
import aiStar from "assets/images/ai-star.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
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
    'handbook',
    'conversational',
    'companypolicy',

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
        <div className="w-full sm:h-[10%] bot-bg md:h-[15%] md:rounded-t-xl flex justify-between relative">
            <div className="md:block hidden p-4 flex">
                <div className="flex h-full">
                    <Image className="object-contain" width={50} src={aiStar} alt="ai-star" />
                    <span className="header-text-color font-semibold text-[1.5em] px-3 my-auto">
                        Bryte AI
                    </span>
                    <div className="hidden md:block my-auto ml-8">
                        <Dropdown
                            className="opacity-0 hover:opacity-100"
                            options={options.map(option => ({ value: option, label: option }))}
                            onChange={handleIntentChange}
                            value={{ value: intent, label: intent }}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-4 mt-3 p-4 text-3xl hidden md:block hover:cursor-pointer"><AiOutlineClose /></div>
            <div className="md:hidden block p-4 w-full ukg-green-bg">
                <div className="md:hidden block flex justify-start">
                    <div className="my-auto px-4 text-white/90 text-[1.5em]"><AiOutlineArrowLeft /></div>
                    <div className="my-auto text-white/90 text-[1.75em]">Bryte AI</div>
                    <div className="my-auto ml-8">
                        <Dropdown
                            className="opacity-0 hover:opacity-100"
                            options={options.map(option => ({ value: option, label: option }))}
                            onChange={handleIntentChange}
                            value={{ value: intent, label: intent }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatboxHeader;
