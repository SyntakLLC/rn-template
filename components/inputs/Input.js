import { useState } from 'react';
import styled from 'styled-components';
import { P2 } from '../texts/index.js';
import '../../global.js';

export default function Input({
    color = '#9ca3af', // text color
    borderColor = global.borderColor, // the border color
    editable = true, // is the text input editable
    label, // sets the label above the text input
    placeholder = 'Start typing here...', // placeholder
    keyboardType = 'default', // what keyboard should appear?
    isSecure = false, // true if password
    isCapitalized = false, // should the first letter be caps?
    value = '', // value --> this should be "state"
    onEdit, // edit method --> should be the edit state method
}) {
    const [border, setBorder] = useState(borderColor);
    return (
        <InputGroup>
            {/* Only show the label if it has a value */}
            {label ? (
                <LabelPadding>
                    <P2>{label}</P2>
                </LabelPadding>
            ) : null}
            <I
                autoCapitalize={isCapitalized}
                secureTextEntry={isSecure}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor={color}
                value={value}
                onChangeText={onEdit}
                editable={editable}
                style={{
                    borderColor: border,
                    backgroundColor: global.bgColor,
                    color: color,
                }}
                border={border}
                onFocus={() => {
                    setBorder(global.primaryColor);
                }}
                onBlur={() => {
                    setBorder(borderColor);
                }}
            />
        </InputGroup>
    );
}

const I = styled.TextInput`
    width: 94%;
    width: 100%;
    border-radius: 15px;
    height: 55px;
    background-color: #000;
    justify-content: center;
    margin-vertical: 10px;
    align-items: center;
    box-shadow: 4px 4px 0px ${(props) => props.border};
    flex-direction: row;
    font-weight: 500;
    font-size: 17px;
    border-width: 2px;
    padding-horizontal: 15px;
`;

const InputGroup = styled.View`
    align-items: leading;
`;
const LabelPadding = styled.View`
    padding-horizontal: 15px;
`;
