import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { iris }, device } = theme

export const SFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${iris};
    padding: 60px 260px;
`