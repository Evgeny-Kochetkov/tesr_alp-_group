import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { irisLight, irisMedium }, device } = theme

export const SMainForm = styled.section`
    padding: 48px 260px;
    background-color: ${irisLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media (${device.laptopL}) {
        padding: 40px 130px;
    }

    @media (${device.laptop}) {
        padding: 30px 60px;
        gap: 28px;
    }

    @media (${device.tablet}) {
        align-items: start;
        gap: 18px;
    }

    @media (${device.mobileL}) {
        padding: 30px 18px;
    }
`

export const SP = styled.p`
    font-size: 21px;
    text-align: center;
    max-width: 1020px;

    @media (${device.tablet}) {
        text-align: start;
        font-size: 18px;
    }
`

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    width: 100%;

    @media (${device.tablet}) {
        gap: 18px;
    }
`

export const SInputsWrap = styled.div`
    display: flex;
    gap: 19px;

    @media (${device.tablet}) {
        flex-direction: column;
        width: 100%;
    }
`

export const SInput = styled.input`
    width: 280px;
    height: 53px;
    padding: 0 16px;
    border-radius: 8px;

    @media (${device.tablet}) {
        height: 49px;
        font-size: 18px;
        width: 100%;
    }
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