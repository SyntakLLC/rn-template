import styled from 'styled-components'

export default function PositionAtBottom({ children }) {
    return <B>{children}</B>
}

const B = styled.View`
    position: absolute;
    width: 100%;
    bottom: 15px;
    align-self: center;
    align-items: center;
`
