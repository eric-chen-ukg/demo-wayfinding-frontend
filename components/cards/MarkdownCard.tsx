import { MarkdownCardContract } from "@/types/Card";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

interface MarkdownCardProps {
    card: MarkdownCardContract
}

const MarkdownCard = (props: MarkdownCardProps) => {
    const { type, message, options } = props.card;
    console.log(message)
    return (
        <div>
            <ReactMarkdown className="whitespace-pre-wrap" rehypePlugins={[rehypeRaw]} >{message}</ReactMarkdown>
        </div>
    );
}

export default MarkdownCard;