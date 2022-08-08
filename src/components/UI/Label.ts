import styled from 'styled-components'

interface LabelProps {
    readonly error?: boolean;
}

export const Label = styled.label<LabelProps>`
    display: inline-block;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
`;