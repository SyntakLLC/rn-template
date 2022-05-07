import styled from 'styled-components';
import { P2 } from '../texts/index.js';
import '../../global.js';

export default function Input({
    color = '#9ca3af',
    borderColor = global.borderColor,
    editable = true,
    label = 'Input',
    placeholder = 'Start typing here...',
    value = '',
    onEdit,
}) {
    return (
        <InputGroup>
            <LabelPadding>
                <P2>{label}</P2>
            </LabelPadding>
            <I
                placeholder={placeholder}
                placeholderTextColor={color}
                value={value}
                onChangeText={onEdit}
                editable={editable}
                style={{
                    borderColor: borderColor,
                    backgroundColor: global.bgColor,
                    color: color,
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
    box-shadow: 4px 4px 0px #00000030;
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
