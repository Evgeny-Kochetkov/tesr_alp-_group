import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, irisMedium, iris }, device } = theme

export const SMainForm = styled.section`
    padding: 48px 260px;
    background-color: ${irisLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    height: 448px;
`

export const SP = styled.p`
    font-size: 21px;
    text-align: center;
    max-width: 1020px;
`

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`

export const SInputsWrap = styled.div`
    display: flex;
    gap: 19px;
`

export const SInput = styled.input`
    width: 280px;
    height: 53px;
    padding: 0 16px;
    border-radius: 8px;
`

export const SSuccessWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;

    > p {
        font-size: 24px;
        color: ${irisMedium};
    }
`