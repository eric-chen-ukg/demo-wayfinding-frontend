import { CardContract, MarkdownCardContract, TableCardContract } from "@/types/Card";
import MarkdownCard from "./MarkdownCard";
import TableCard from "./TableCard";
import OptionButton from "./OptionButton";

interface CardProps {
    card: CardContract,
    optionClick: any
}

const Card = (props: CardProps) => {

    const type = props.card.type;
    const optionClick = props.optionClick;

    const renderCard = () => {
        console.log(props.card)
        if (type === 'markdown') {
            return <MarkdownCard card={props.card as MarkdownCardContract} />
        } else if (type === 'table') {
            return <TableCard card={props.card as TableCardContract} />
        }
    }

    const renderOptions = () => {
        if (props.card.options) {
            return (
                <div
                    className={`
                        ${"grid-rows-" + Math.ceil(props.card.options.length / 5)}
                        grid gap-4 mt-4
                        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        `
                    }
                >
                    {props.card.options.map((o, i) => <OptionButton option={o} key={i} onClick={optionClick} />)}
                </div>
            )
        }
    }

    return (
        <div>
            {renderCard()}
            {renderOptions()}
        </div>
    )
}

export default Card;