"use client"

import { createContext, useContext, useState } from "react";

type ToastProviderProps = {
    children: React.ReactNode
}

type ToastContextValue = {
    _message?: string
    show: (message: string) => void
}

export const ToastContext = createContext<ToastContextValue>({} as ToastContextValue)

export default function ToastProvider({ children }: ToastProviderProps) {

    const [_message, setMessage] = useState<string>()

    function show(message: string) {
        setMessage(message)
    }

    return (
        <ToastContext.Provider value={{ _message, show }}>
            { children }
        </ToastContext.Provider>
    )
}
