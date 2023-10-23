interface InputProps {
    value: string,
    onChange: any,
    onKeyDown?: any
}

const Input = (props: InputProps) => {
    return (
        <div className="w-full flex">
            <input
                className={`
                    w-full px-4 py-2 focus:outline-none rounded-full h-auto
                    my-auto
                `}
                placeholder="Search or ask for anything"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={props.onKeyDown}
            ></input>
        </div>
    )
}

export default Input;