import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { irisLight, iris }, device } = theme

export const SMainScreen = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    height: 560px;

    @media (${device.mobileL}) {
        height: 243px;
    }

    .kapibara {
        position: absolute;
        bottom: 0;
        right: 385px;
        z-index: -1;
        width: auto;
        height: 90%;
        object-fit: contain;

        @media (${device.laptopL}) {
            right: 130px;
        }

        @media (${device.laptop}) {
            right: 60px;
        }

        @media (${device.mobileL}) {
            right: 50%;
            transform: translateX(50%); 
        }
    }
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
        border-radius: 4px 4px 4px 0;
    }

    span:nth-child(2) {
        background-color: white;
        color: ${iris};
        border-radius: 0 0 4px 4px;
    }

    @media (${device.laptopL}) {
        margin: 0 130px;
        transform: translateY(100%);
    }

    @media (${device.laptop}) {
        margin: 0 60px;
    }

    @media (${device.tablet}) {
        font-size: 34px;
    }

    @media (${device.mobileL}) {
        margin: 0 18px;
        font-size: 24px;
        position: absolute;
        bottom: 0;
        transform: translateY(50%);

        > span {
            padding: 8px 12px;
        }

        span:nth-child(2) {
            background-color: ${irisLight};
        }
    }

    @media (${device.mobileM}) {
        font-size: 20px;
    }
`