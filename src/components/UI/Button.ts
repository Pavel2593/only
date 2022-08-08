import styled from 'styled-components'

interface ButtonProps {
    readonly disabled?: boolean,
    backgroundColor?: string
    color?: string
    width?: string
}

export const Button = styled.button<ButtonProps>`
    width: ${(props) => {
        let result = 'auto'
        props.width && (result = props.width)
        return result
    }};
    padding: 19px 75px;
    border: none;
    border-radius: 8px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => {
        let result = '#FFFFFF'
        props.color && (result = props.color)
        return result
    }};
    background-color: ${(props) => {
        let result = '#4A67FF'
        props.backgroundColor && (result = props.backgroundColor)
        props.disabled && (result = '#99A9FF')
        return result
    }};
    cursor: pointer;
`;