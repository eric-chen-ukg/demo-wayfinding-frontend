interface InputProps {
    value: string,
    onChange: any,
    onKeyDown?: any,
    onFocus?: any,
    onBlur?: any
}



const Input = (props: InputProps) => {
    return (
        <div className="w-full flex">
            <input
                className={`
                    w-full px-4 focus:outline-none rounded-full h-auto
                    my-auto bg-transparent
                `}
                placeholder="Search or ask for anything"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            ></input>
        </div>
    )
}

export default Input;