import { MarkdownCardContract } from "@/types/Card";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

interface MarkdownCardProps {
    card: MarkdownCardContract
}

const MarkdownCard = (props: MarkdownCardProps) => {

    const { type, message, options } = props.card;

    return (
        <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >{message}</ReactMarkdown>
        </div>
    );
}

export default MarkdownCard;