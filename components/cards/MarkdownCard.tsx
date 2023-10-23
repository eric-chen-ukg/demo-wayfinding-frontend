import { MarkdownCardContract } from "@/types/Card";
import ReactMarkdown from 'react-markdown';

interface MarkdownCardProps {
    card: MarkdownCardContract
}

const MarkdownCard = (props: MarkdownCardProps) => {

    const { type, message, options } = props.card;

    return (
        <div>
            <ReactMarkdown>{message}</ReactMarkdown>
        </div>
    );
}

export default MarkdownCard;