import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SMainScreen = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    height: 560px;
`

export const SH1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 48px;
    margin-left: 260px;

    > span {
        padding: 12px 18px;
    }

    span:first-child {
        background-color: ${iris};
        color: white;
        border-radius: 4px 4px 0 0;
    }

    span:nth-child(2) {
        background-color: white;
        color: ${iris};
        border-radius: 0 0 4px 4px;
    }
`