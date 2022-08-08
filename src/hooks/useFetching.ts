import { useState } from "react"
import { IResponse } from "../types/Response"

export interface IUseFetching {
    fetching: (...args: any[]) => void
    isLoading: boolean
    // data: object | boolean
    status: number | boolean
    error: string
}

export const useFetching: (callback: (...args: any[]) => Promise<IResponse>) => IUseFetching = (callback) => {
    // const [data, setData] = useState<object | boolean>(false)
    const [status, setStatus] = useState<number | boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async (...args: any[]) => {
        try {
            setIsLoading(true)
            const response: IResponse = await callback(...args)
            // setData(response.data)
            setStatus(response.status)
            setError(response.error.message)
        } catch (e: any | unknown) {
            if (e?.response?.data.message) {
                setError(e.response.data.message)
            } else {
                setError(e.message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        fetching,
        isLoading,
        // data,
        status,
        error
    }
}