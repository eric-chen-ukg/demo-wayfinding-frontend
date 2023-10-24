import { useEffect, useRef, useState } from "react";
import ChatboxFooter from "../chatboxFooter/ChatboxFooter";
import ChatboxHeader from "../chatboxHeader/ChatboxHeader";
import ChatboxMessages from "../chatboxMessages/ChatboxMessages";
import { IntentContext } from "@/contexts/intentContext";
import { useContext } from "react";
import { Message } from "@/types/Message";
import axios from 'axios';
import { ButtonContract, CardContract } from "@/types/Card";

const list: Message[] = [];

const Chatbox = () => {
    const { intent, setIntent } = useContext(IntentContext);
    const [messageList, setMessageList] = useState(list);
    const [userInput, setUserInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    // hardcoded
    const url = `http://localhost:3009/answer`;

    const handleUserSend = (customMessage: string = userInput, customIntent: string = intent) => {
        const message: Message = {
            user: true,
            message: [customMessage]
        }
        setMessageList(prev => [message, ...prev]);
        queryServer(customMessage, customIntent);
        setUserInput('');
    }

    const handleAISendResponse = (aiMessage: any[]) => {
        const message: Message = {
            user: false,
            message: aiMessage
        }
        setMessageList(prev => [message, ...prev]);
    }

    const queryServer = async (message: string, customIntent: string = intent) => {
        setIsLoading(true);
        try {
            const response = await axios.get(url, {
                params: {
                    intent: customIntent,
                    query: message
                }
            }).then(res => res.data);

            // console.log(response);
            handleAISendResponse(response);
        } catch (error) {
            console.error(error);
            handleAISendResponse(['A server error occured...'])
        }
        setIsLoading(false);
    }

    const handleOptionClick = (button: ButtonContract) => {
        // switch intent
        if (button.data?.action === 'change-intent') {
            console.log('switching intent to:', button.data.target);
            setIntent(button.data.target);
            // send message
            if (button.userQuery) {
                handleUserSend(button.userQuery, button.data.target);
            }
        } else if (button.userQuery) {
            handleUserSend(button.userQuery);
        }
    }

    return (
        <div
            className='flex justify-center items-center 
                overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 
                outline-none bg-neutral-800/40
            '
        >
            <div className="relative w-3/5 mx-auto h-5/6 my-auto">
                <div className="translate duration-300 h-full opacity-100 my-auto">
                    <div className="translate my-auto h-full border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none">
                        <ChatboxHeader intent={intent} setIntent={setIntent} />
                        <ChatboxMessages messageList={messageList} loading={isLoading} optionClick={handleOptionClick} />
                        <ChatboxFooter userInput={userInput} setUserInput={setUserInput} sendMessage={handleUserSend} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbox;