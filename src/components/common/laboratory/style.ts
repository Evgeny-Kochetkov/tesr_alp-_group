import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SLaboratory = styled.section`
    padding: 48px 260px;
    background-color: ${irisLight};
`

export const SContentWrap = styled.div`
    display: flex;
`

export const STextWrap = styled.div`
    display: flex;
    flex-direction: column;

    > p {
        font-size: 21px;
    }

    p:nth-child(2) {
        margin-top: 36px;
    }

    p:nth-child(3) {
        margin-top: 18px;
    }
`

export const SH2 = styled.h2`
    font-size: 36px;
    font-weight: 600;
`
