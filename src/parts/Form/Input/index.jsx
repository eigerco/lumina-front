'use client';

// Imports
// ------------
import React from 'react';

// Styles
// ------------
import { Jacket, Field } from './styles';

// Component
// ------------
const Input = ({
    name,
    value,
    onChange,
    onClick,
    placeholder,
    type = 'text',
    light,
}) => {
    return (
        <Jacket>
            <Field $light={light} name={name} type={type} onClick={onClick} onChange={onChange} value={value ? value : ``} placeholder={placeholder} />
        </Jacket>
    );
}

export default Input;