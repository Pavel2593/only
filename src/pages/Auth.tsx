import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { PageWrapper, Title } from '../components/UI';

interface IAuthProps {
}

const Auth: React.FunctionComponent<IAuthProps> = () => {
    return (
        <PageWrapper>
            <Title textAlign='center'>ONLY.</Title>
            <AuthForm />
        </PageWrapper>
    )
};

export default Auth;
