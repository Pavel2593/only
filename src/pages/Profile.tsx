import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button, PageWrapper, Title } from '../components/UI';

const Hello = styled.div`
    margin-bottom: 50px;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000;
`

const FontBold = styled.span`
    font-weight: 700;
`

const App: React.FunctionComponent = () => {
    const navigate = useNavigate()
    return (
        <PageWrapper>
            <Title textAlign='center'>ONLY.</Title>
            <Hello>Здравствуйте, <FontBold>{localStorage.getItem('email')}</FontBold></Hello>
            <Button
                color='#000'
                backgroundColor= '#fff'
                onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('email')
                    navigate('/login')
                }
            }>
                Выйти
            </Button>
        </PageWrapper>
    )
};

export default App;
