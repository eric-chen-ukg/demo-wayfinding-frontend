import { TableCardContract } from "@/types/Card";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";



interface TableCardProps {
    card: TableCardContract
}

const TableCard = (props: TableCardProps) => {

    const rowData = props.card.data.table.rowData;
    const columnDefs = props.card.data.table.columnDefs;

    const renderMessage = () => {
        if (props.card.message) {
            return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{props.card.message}</ReactMarkdown>
        }
    }
    console.log(props.card)

    return (
        <div className="w-full mx-auto overflow-x-auto">
            {renderMessage()}
            <table className="table-fixed w-[90%] shadow-md rounded-lg border">
                <thead>
                    <tr>
                        {columnDefs.map((c, i) => <th className="text-left px-3 py-2" key={i}>{c.field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        rowData.map((row, idx) => (
                            <tr
                                className={idx % 2 == 0 ? "bg-white" : "bg-zinc-50"}
                                key={idx}>
                                {Object.values(row).map((data: any, i) => (
                                    <td className="px-3 py-2" key={i}>{data}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCard;