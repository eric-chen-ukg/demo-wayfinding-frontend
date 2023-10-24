import { useEffect, useRef } from "react";
import ChatboxMessage from "../chatboxMessage/ChatboxMessage";
import Image from "next/image";
import aiStar from "assets/images/ai-star.png";
import Card from "../cards/Card";

const welcomeOptionsCard = {
    type: "markdown",
    options: [
        {
            id: "submitpto",
            label: "Time Off",
            userQuery: "I want to take some time off.",
            data: {
                action: "change-intent",
                target: "submitpto"
            }
        }, {
            id: "benefits",
            label: "Benefits",
            userQuery: "I want to see my benefits.",
            data: {
                action: "change-intent",
                target: "benefits"
            }
        }, {
            id: "paychecks",
            label: "Pay History",
            userQuery: "I want to see my recent pay stubs.",
            data: {
                action: "change-intent",
                target: "paychecks"
            }
        }, {
            id: "companypolicy",
            label: "Company Policy",
            userQuery: "I want to see my company's policy documents.",
            data: {
                action: "change-intent",
                target: "companypolicy"
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
        messagesEndRef.current?.scrollIntoView();
    }, []);

    return (
        <div className="w-full h-auto max-h-[75%] flex flex-col-reverse overflow-x-hidden overflow-y-auto">
            {loading && (
                <div>
                    <ChatboxMessage user={false} message={[]} optionClick={optionClick} />
                </div>
            )}
            {messageList.map((message, idx) => (
                <div key={idx}>
                    <ChatboxMessage user={message.user} message={message.message} optionClick={optionClick} />
                </div>
            ))}
            <div className={`
                w-full h-auto flex px-4 py-3 bot-bg
            `}>
                <div className="mx-6 rounded-full">
                    <Image
                        className="aspect-square my-2 object-cover"
                        src={aiStar} width={50} alt="ai-avatar" />
                </div>
                <div className="w-[75%] flex flex-col gap-4 mb-4">
                    <div className="text-[1.5em] header-text-color font-semibold">Hi, I'm UKG's AI</div>
                    <div className="text-[1.2em] header-text-color">I'm here to make your life easier, so you can focus on the things that matter most to you.</div>
                    <div className="header-text-color">Was there anything specific you wanted to ask or maybe we can start with?</div>
                    <Card card={welcomeOptionsCard} optionClick={optionClick} />
                </div>
            </div>
            <div ref={messagesEndRef} />
        </div>
    )
}

export default ChatboxMessages;