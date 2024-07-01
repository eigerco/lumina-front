'use client';

// Imports
// ------------
import React from 'react';
import Icon from '@icon';

// Styles
// ------------
import { Jacket, Field } from './styles';

// Component
// ------------
const Textarea = ({
    name,
    value,
    onChange,
    placeholder,
    light,
}) => {
    return (
        <Jacket>
            <Field $light={light} name={name} onChange={onChange} placeholder={placeholder}>{value ? value : ''}</Field>
        </Jacket>
    );
}

export default Textarea;