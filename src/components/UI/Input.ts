import styled from 'styled-components'

interface InputProps {
    readonly error?: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: ${(props) => (props.error ? '1px solid #E26F6F' : 'none')};
    border-radius: 8px;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #232323;
    background: #F5F5F5;

    &:focus {
        outline: none
    }
`;