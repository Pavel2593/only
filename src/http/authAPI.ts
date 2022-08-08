import { IResponse } from "../types/Response"

interface IRequest {
    email: string
    password: string
    save: boolean
}

export const login: (request: IRequest) => Promise<IResponse> = async ({ email, password, save }) => {
    if (email !== 'steve.jobs@example.com') {
        return {
            status: 400,
            error: {
                message: `Пользователя ${email} не существует`
            }
        }
    }

    if (password !== 'password') {
        return {
            status: 400,
            error: {
                message: `Неверный пароль`
            }
        }
    }
    if (save) {
        localStorage.setItem('token', email)
        localStorage.setItem('email', email)
    } else {
        localStorage.removeItem('token')
        localStorage.setItem('email', email)
    }
    return {
        status: 200,
        error: {
            message: ``
        }
    }
}

export const check: (token: string) => Promise<IResponse> = async (token) => {
    if (token === 'steve.jobs@example.com') {
        return {
            status: 200,
            error: {
                message: ``
            }
        }
    }

    return {
        status: 400,
        error: {
            message: `Неверный токен`
        }
    }
}