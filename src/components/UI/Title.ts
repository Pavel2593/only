import styled from 'styled-components'

interface TitleProps {
    readonly textAlign?: string;
}

export const Title = styled.h1<TitleProps>`
    position: absolute;
    top: 40px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    text-align: ${(props) => (props.textAlign || 'left')};
    color: #000000;
`;