import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({type = "text", className = "", ...props}: InputProps) {
    return (
        <input
            type="text"
            className={`border-black border-b-2 outline-0 bg-white py-3 px-4 flex-1 ${className}`}
            {...props}
        />
    ) 
}