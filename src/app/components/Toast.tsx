"use client"

import { useContext } from "react"
import { ToastContext } from "../context/ToastProvider"

type ToastProps = {}

export default function Toast({}: ToastProps) {
    const { _message } = useContext(ToastContext)

    if (_message) return (
        <div className="text-lg font-medium text-white px-6 py-4 w-full max-w-sm bg-rose-600 absolute top-4 right-4 border-black border-2 border-b-3 shadow-[6px_6px_0_0] shadow-black">
            { _message }
        </div>
    )
}