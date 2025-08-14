import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ type = "button", className = "", ...props }: ButtonProps) {
    return (
        <button
            type={type}
            className={`bg-pink-600 py-3 px-4 bg-black text-white font-medium hover:translate-y-0.5 hover:opacity-90 cursor-pointer border-black border-2 shadow-[6px_6px_0_0] shadow-black ${className}`}
        >
            CADASTRAR
        </button>
    )
}
