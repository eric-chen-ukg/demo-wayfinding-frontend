import { CardContract } from "@/types/Card";
import aiStar from "assets/images/ai-star.png";
import userAvatar from "assets/images/user-avatar.jpeg";
import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import Card from "../cards/Card";

interface ChatboxMessageProps {
    user: boolean;
    message: any[];
    optionClick: any
}

const ChatboxMessage: React.FC<ChatboxMessageProps> = ({
    user,
    message,
    optionClick
}) => {
    const processMessage = (msg: any[]) => {
        return (
            <div>
                {msg.map((res, idx) => (
                    <div key={idx} className="mb-4">
                        {typeof res === "string" ?
                            <div>{res}</div> :
                            processResponse(res)}
                    </div>
                ))}
            </div>
        )
    }

    const processResponse = (response: CardContract) => {
        return (
            <div><Card card={response} optionClick={optionClick} /></div>
        )
    }

    return (
        <div className={`
            w-full h-auto flex px-4 py-3
            ${user ? "bg-white" : "bot-bg"}
        `}>
            {user ?
                <div className="mx-6 rounded-full">
                    <Image
                        className="rounded-[100%] aspect-square my-2 object-cover"
                        src={userAvatar} width={50} alt="user-avatar" />
                </div> :
                <div className="mx-6 rounded-full">
                    <Image
                        className="rounded-[100%] aspect-square my-2 object-cover"
                        src={aiStar} width={50} alt="ai-avatar" />
                </div>
            }
            <div className="mb-2 mt-2 flex flex-col gap-2 w-full">
                {processMessage(message)}
                {!user && message.length > 0 && (
                    <div className="flex gap-3">
                        <div className="font-light text-gray-500 text-[0.9em]">Is this helpful?</div>
                        <div className="like-dislike-color text-[1.5em] -translate-y-1 hover:cursor-pointer"><AiOutlineLike /></div>
                        <div className="like-dislike-color text-[1.5em] -translate-y-1 hover:cursor-pointer"><AiOutlineDislike /></div>
                    </div>)
                }
                {!user && message.length == 0 && (
                    <div className="typing-ellipsis">
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatboxMessage;