import { ButtonLink } from "@/types/Card";
import { VscFilePdf } from 'react-icons/vsc';
import { CgFileDocument } from 'react-icons/cg';
import { BiLinkExternal } from 'react-icons/bi';

interface LinkButtonProps {
    link: ButtonLink,
}

const LinkButton = (props: LinkButtonProps) => {
    return (
        <div
            className="bg-white font-light text-zinc-600 border border-zinc-300/80 rounded-xl shadow-sm px-3 py-2 flex hover:cursor-pointer"
            onClick={() => window.open(props.link.url)}
        >
            {props.link.icon == "pdf" ?
                <div className="mr-2 my-auto mx-auto text-[1.1em]">
                    <VscFilePdf />
                </div> :
                <div className="mr-2 my-auto mx-auto text-[1.1em]">
                    <CgFileDocument />
                </div>}
            <div className="truncate text-[0.9em]">
                {props.link.label}
            </div>
            {props.link.icon == "pdf" &&
                <div className="ml-1 my-auto mx-auto">
                    <BiLinkExternal />
                </div>
            }
        </div>
    )
}

export default LinkButton;