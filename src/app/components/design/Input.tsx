import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({type = "text", className = "", ...props}: InputProps) {
    return (
        <input
            type="text"
            className={`outline-0 bg-white py-3 px-4 flex-1 border-black border-2 border-b-3 shadow-[6px_6px_0_0] shadow-black ${className}`}
            {...props}
        />
    ) 
}