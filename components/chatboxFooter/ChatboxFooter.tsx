import Input from "../common/Input";
import { IoMdSend } from "react-icons/io";

interface ChatboxFooterProps {
    userInput: string,
    setUserInput: any,
    sendMessage: any
}

const ChatboxFooter = (props: ChatboxFooterProps) => {

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.sendMessage();
        }
    };

    return (
        <div
            className="w-full h-[10%] px-4 pt-2 pb-3
                    rounded-full absolute bottom-0"
        >
            <div className="w-full border rounded-full h-full flex">
                <div className="w-[95%]">
                    <Input value={props.userInput} onChange={props.setUserInput} onKeyDown={handleEnterPress} />
                </div>
                <div
                    className="text-[1.75em] my-auto
                    text-blue-600 bottom hover:cursor-pointer"
                    onClick={props.sendMessage}
                ><IoMdSend /></div>
            </div>
        </div>
    )
}

export default ChatboxFooter;