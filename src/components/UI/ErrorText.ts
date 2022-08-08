import styled from 'styled-components'

interface ErrorTextProps {
    readonly error?: boolean;
}

export const ErrorText = styled.span<ErrorTextProps>`
    display: inline-block;
    padding-top: 8px;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F;
`;