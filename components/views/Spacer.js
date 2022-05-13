import styled from 'styled-components'

export default function Spacer({ children }) {
    return <S>{children}</S>
}

const S = styled.View`
    width: 15px;
    height: 15px;
`
