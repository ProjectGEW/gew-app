import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from "react";

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import {User, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    text: string;
}

const Login: React.FC<InputProps> = ({name, icon: Icon, text, ...rest}) => {  
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!! inputRef.current?.value);
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    useEffect(() => {
        registerField ({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });        
    }, [fieldName, registerField])

    return (
       <>
        <User isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
            <input required onFocus={handleInputFocus} defaultValue={defaultValue} onBlur={handleInputBlur} ref={inputRef} {...rest} />
            {error && (
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
            <label>{text}</label>
        </User>      
        </>
    );
};

export default Login;