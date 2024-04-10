import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { irisLight }, device } = theme

export const SLaboratory = styled.section`
    padding: 48px 260px;
    background-color: ${irisLight};

    @media (${device.laptopL}) {
        padding: 40px 130px;
    }

    @media (${device.laptop}) {
        padding: 30px 60px;
    }

    @media (${device.mobileL}) {
        padding: 30px 18px;
    }
`

export const SContentWrap = styled.div`
    display: flex;
    gap: 48px;
    margin-top: 36px;

    .laboratoryImg {
        margin-top: -80px;
        width: 100%;
        object-fit: contain;
        border-radius: 8px;
        object-position: left bottom;

        @media (${device.tablet}) {
            margin: 0;
        }
    }

    @media (${device.tablet}) {
        flex-direction: column;
        align-items: center;
        > div {
            &:first-child {
                order: 1;
            }

            &:nth-child(2) {
                order: 2;
            }
        }
    }
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

    @media (${device.tablet}) {
        > p {
            font-size: 18px;
        }

        p:nth-child(2) {
            margin-top: 18px;
        }
    }
`

export const SH2 = styled.h2`
    font-size: 36px;
    font-weight: 600;

    @media (${device.tablet}) {
        font-size: 32px;
    }

    @media (${device.mobileL}) {
        font-size: 28px;
    }
`
