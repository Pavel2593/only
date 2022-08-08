import React, { useState } from "react"
import styled from 'styled-components'

const CheckboxWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const CheckboxInput = styled.input`
    display: none;

    & + .label::before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px solid #000;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        background-color: #fff;
        cursor: pointer;
    }

    &:checked + .label::after {
        content: '';
        width: 14px;
        height: 14px;
        margin: 0 3px;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        background-color: #4A67FF;
        background-repeat: no-repeat;
        background-position: 3px 3px;
    }
`

const Label = styled.label`
    display: inline-block;
    padding-left: 34px;
    font-family: 'Helvetica Neue';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
    cursor: pointer;
`

interface ICheckboxProps {
    id?: number,
    className?: string,
    children?: React.ReactNode,
    checked: boolean
    setChecked: (value: boolean) => void
}

const Checkbox: React.FunctionComponent<ICheckboxProps> = (({ checked, setChecked, children, className, ...props }) => {
    return (
        <CheckboxWrapper className={className}>
            <CheckboxInput
                type="checkbox"
                checked={checked}
                readOnly
            />
            <Label
                className='label'
                onClick={() => { setChecked(!checked) }}
            >{children}</Label>
        </CheckboxWrapper>
    )
});

export default Checkbox;