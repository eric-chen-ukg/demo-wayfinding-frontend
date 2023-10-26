import { useEffect, useRef } from "react";
import ChatboxMessage from "../chatboxMessage/ChatboxMessage";
import Image from "next/image";
import aiStar from "assets/images/ai-star.png";
import Card from "../cards/Card";

const welcomeOptionsCard = {
    type: "markdown",
    options: [
        {
            id: "benefits",
            label: "My Benefits",
            userQuery: "I want to see my benefits.",
            data: {
                action: "change-intent",
                target: "benefits"
            }
        }, {
            id: "paychecks",
            label: "My Pay History",
            userQuery: "I want to see my recent pay stubs.",
            data: {
                action: "change-intent",
                target: "paychecks"
            }
        }, {
            id: "submitpto",
            label: "Request Time Off",
            userQuery: "I want to take some time off.",
            data: {
                action: "change-intent",
                target: "submitpto"
            }
        }, {
            id: "handbook",
            label: "Company Policy",
            userQuery: "I want to see my company's policy documents.",
            data: {
                action: "change-intent",
                target: "handbook"
            }
        }
    ]
};

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
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({
                block: "end",
                behavior: "smooth",
            });
        }, 1000);
    }, []);

    return (
        <div className="w-full h-auto max-h-[80%] md:max-h-[75%] flex flex-col-reverse overflow-x-auto overflow-y-auto">
            {loading && (
                <div ref={messagesEndRef}>
                    <ChatboxMessage user={false} message={[]} optionClick={optionClick} />
                </div>
            )}
            {messageList.map((message, idx) => (
                <div key={idx}>
                    <ChatboxMessage user={message.user} message={message.message} optionClick={optionClick} />
                </div>
            ))}
            <div className={`w-full h-auto flex md:px-4 py-3 bot-bg`}>
                <div className="mx-6 rounded-full">
                    <Image
                        className="aspect-square my-2 object-cover"
                        src={aiStar} width={50} alt="ai-avatar" />
                </div>
                <div className="w-[75%] pr-6 flex flex-col gap-4 mb-4">
                    <div className="text-[1.5em] header-text-color font-semibold">Welcome to Bryte AI</div>
                    <div className="text-[1.2em] header-text-color md:block hidden">You can ask about things like taking time off, to see your most recent pay statement, or to review details about your benefits.</div>
                    <div className="header-text-color md:block hidden">Here are some ideas to get you started:</div>
                    <div className="header-text-color md:hidden">Here are some topics you might be interested in:</div>
                    <Card card={welcomeOptionsCard} optionClick={optionClick} />
                </div>
            </div>
        </div>
    )
}

export default ChatboxMessages;