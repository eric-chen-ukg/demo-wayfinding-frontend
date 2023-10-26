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

    return (
        <div className="w-full text-black">
            {renderMessage()}
            <table className="table-fixed bg-zinc-50 w-[100%] md:w-[90%] rounded-2xl shadow-sm border border-spacing-0 border-separate">
                <thead>
                    <tr>
                        {columnDefs.map((c, i) => <th className="text-left px-3 py-2 border-b-2" key={i}>{c.field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        rowData.map((row, idx) => (
                            <tr
                                className={`
                                    ${idx % 2 == 0 ? "bg-white" : "bg-zinc-50"}
                                    ${idx == rowData.length - 1 ? "rounded-b-lg" : "rounded-none"}
                                `}
                                key={idx}>
                                {Object.values(row).map((data: any, i) => (
                                    <td key={i}
                                        className={`px-3 py-2
                                        ${(idx == rowData.length - 1) && (i == 0) ? "rounded-bl-xl" : "rounded-none"}
                                        ${(idx == rowData.length - 1) && (i == Object.values(row).length - 1) ? "rounded-br-xl" : "rounded-none"}
                                    `}>
                                        {data}
                                    </td>
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