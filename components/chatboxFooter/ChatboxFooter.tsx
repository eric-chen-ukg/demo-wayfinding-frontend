import { useState } from "react";

import Input from "../common/Input";

import { IoMdSend } from "react-icons/io";



interface ChatboxFooterProps {
    userInput: string,
    setUserInput: any,
    sendMessage: any

}



const ChatboxFooter = (props: ChatboxFooterProps) => {
    const [focused, setFocused] = useState(false);
    const handleEnterPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            props.sendMessage();
        }
    };

    const onFocus = (e: any) => {
        setFocused(true);
    }

    const onBlur = (e: any) => {
        setFocused(false);
    }

    const divStyles = () => {
        if (focused) {
            return "w-full border-2 rounded-full h-full flex border-blue-500";
        } else {
            return "w-full border rounded-full h-full flex border-gray-500";
        }
    }

    return (
        <div
            className="w-full h-[10%] px-4 py-3
                    rounded-full absolute bottom-0"
        >
            <div className={divStyles()}>
                <div className="w-[95%] my-auto">
                    <Input value={props.userInput} onChange={props.setUserInput} onKeyDown={handleEnterPress} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div
                    className="text-[1.75em] my-auto
                    text-blue-600 bottom hover:cursor-pointer"
                    onClick={() => props.sendMessage(props.userInput)}
                ><IoMdSend /></div>
            </div>
        </div>
    )
}

export default ChatboxFooter;