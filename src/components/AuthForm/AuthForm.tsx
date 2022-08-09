import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, CheckBox, ErrorText, Input, Label, ServerError } from '../UI'
import styled from 'styled-components'
import { useFetching } from '../../hooks/useFetching'
import { check, login } from '../../http/authAPI'
import { useNavigate } from 'react-router'
import ServerErrorIcon from './../../assets/images/ServerErrorLogo.svg'

const Form = styled.form`
    margin: 0 auto;
    max-width: 650px;
    width: 100%;
`

type IFormData = {
    email: string
    password: string
    save: boolean
}

const AuthForm: React.FunctionComponent = () => {
    const navigate = useNavigate()
    const [isSavePassword, setIsSavePassword] = useState<boolean>(false)
    const requestLogin = useFetching(login)
    const requestCheck = useFetching(check)

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormData>({
        defaultValues: {
            email: 'steve.jobs@example.com',
            password: 'password'
        }
    })

    const Submit = handleSubmit((data) => {
        requestLogin.fetching(data)
    })

    useEffect(() => {
        requestCheck.fetching(localStorage.getItem('token'))
    }, [])

    useEffect(() => {
        if (requestLogin.status === 200 || requestCheck.status === 200) {
            navigate('/only/profile')
        }
    }, [requestLogin.status, requestCheck.status])
    return (
        <Form onSubmit={Submit}>
            {requestLogin.error &&
                <ServerError className=''>
                    <img className='icon' src={ServerErrorIcon} alt="error-icon" />
                    <div className='text'>{requestLogin.error}</div>
                </ServerError>
            }
            <div className='mb-20'>
                <Label className='mb-10'>Логин</Label>
                <Input
                    error={errors?.email ? true : false}
                    {...register(
                        'email',
                        {
                            required: `Обязательное поле`,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                message: 'Некорректный email'
                            }
                        }
                    )}
                />
                {errors?.email &&
                    <ErrorText>{errors.email?.message}</ErrorText>
                }
            </div>
            <div className='mb-20'>
                <Label className='mb-10'>Пароль</Label>
                <Input
                    error={errors?.password ? true : false}
                    type='password'
                    {...register(
                        'password',
                        {
                            required: `Обязательное поле`
                        }
                    )}
                />
                {errors?.password &&
                    <ErrorText>{errors.password?.message}</ErrorText>
                }
            </div>
            <div>
                <CheckBox
                    className='mb-40'
                    checked={isSavePassword}
                    setChecked={setIsSavePassword}
                >
                    Запомнить пароль
                </CheckBox>
            </div>
            <Button
                type='submit'
                width='100%'
                disabled={requestLogin.isLoading}
                onClick={() => {
                    setValue('save', isSavePassword);
                }}
            >
                Войти
            </Button>
        </Form>
    )
};

export default AuthForm;
