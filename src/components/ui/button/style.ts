import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SButton = styled.button<{ width: string; margin?: string; }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    background-color: ${iris};
    font-size: 21px;
    color: white;
    border-radius: 8px;
    max-width: ${({width}) => width};
    margin: ${({margin}) => margin};
`