import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";

export function useToast() {
    const { show } = useContext(ToastContext)

    return {
        show
    }
}