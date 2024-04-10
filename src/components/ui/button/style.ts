import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { irisMedium, iris }, device } = theme

export const SButton = styled.button<{ $width: string; $margin?: string; type?: string; }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    background-color: ${irisMedium};
    font-size: 21px;
    color: white;
    border-radius: 8px;
    max-width: ${({$width}) => $width};
    margin: ${({$margin}) => $margin};
    transition: 0.2s all;

    &:hover {
        background-color: ${iris};
    }

    @media (${device.mobileL}) {
        font-size: 18px;
    }
`