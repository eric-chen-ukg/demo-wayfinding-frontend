import { MarkdownCardContract } from "@/types/Card";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import OptionButton from "./OptionButton";

interface MarkdownCardProps {
    card: MarkdownCardContract
}

const MarkdownCard = (props: MarkdownCardProps) => {
    const { type, message, options, navigation } = props.card;
    let processedMessage;
    message == "**Go to**" ? processedMessage = "**Bryte AI**" : processedMessage = message;

    const handleGoToUrl = (nav: any) => {
        window.open(nav.url, "_blank");
    };

    const renderNavigation = () => {
        if (navigation) {
            return (
                <div
                    className={`
                        ${"grid-rows-" + Math.ceil(navigation.length / 3)}
                        grid gap-4 mt-4
                        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        `
                    }
                >
                    {navigation.map((nav, i) => <OptionButton option={nav} key={i} onClick={() => handleGoToUrl(nav)} />)}
                </div>
            )
        }
    }

    return (
        <div>
            <ReactMarkdown className="whitespace-pre-wrap" rehypePlugins={[rehypeRaw]}>{processedMessage}</ReactMarkdown>
            {/* {renderNavigation()} */}
        </div>
    );
}

export default MarkdownCard;