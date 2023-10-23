import { useEffect, useRef } from "react";
import ChatboxMessage from "../chatboxMessage/ChatboxMessage";

interface ChatboxMessagesProps {
    messageList: any[],
    loading: boolean,
    optionClick?: any
}

const ChatboxMessages: React.FC<ChatboxMessagesProps> = ({
    messageList,
    loading,
    optionClick
}) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, []);

    return (
        <div className="w-full h-auto max-h-[75%] flex flex-col-reverse overflow-x-hidden overflow-y-auto">
            {loading && (
                <div>
                    <ChatboxMessage user={false} message={[]} optionClick={optionClick}  />
                </div>
            )}
            {messageList.map((message, idx) => (
                <div key={idx}>
                    <ChatboxMessage user={message.user} message={message.message} optionClick={optionClick} />
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default ChatboxMessages;