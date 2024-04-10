import styled from 'styled-components'

import { theme } from '../../../theme'

const { device } = theme

export const SDescrSection = styled.section`
    padding: 96px 260px;

    @media (${device.laptopL}) {
        padding: 40px 130px;
    }

    @media (${device.laptop}) {
        padding: 30px 60px;
    }

    @media (${device.mobileL}) {
        padding: 70px 18px 30px 18px;
    }
`

export const SP = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    font-style: italic;

    @media (${device.tablet}) {
        font-size: 20px;
    }

    @media (${device.mobileL}) {
        font-size: 18px;
    }
`