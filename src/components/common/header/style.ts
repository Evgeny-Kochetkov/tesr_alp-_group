import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 260px;

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

export const SNav = styled.nav`
    display: flex;
    align-items: center;
`

export const SNavUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    @media (${device.laptop}) {
        gap: 12px;
    }

    @media (${device.tablet}) {
        display: none;
    }
`

export const SNavLi = styled.li`
    > a {
        padding: 8px 24px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 4px;
        transition: 0.2s all;

        &:hover {
            background-color: ${irisLight};
            color: ${iris};
        }

        @media (${device.laptop}) {
            padding: 4px 12px;
        }
    }
`

export const SFlexWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media (${device.laptop}) {
        flex-direction: column;
        gap: 6px;
    }
`

export const SDescrLogo = styled.span`
    max-width: 190px;
    font-size: 14px;
    color: ${grey};

    @media (${device.mobileL}) {
        font-size: 12px;
    }
`

export const SContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (${device.mobileL}) {
        display: none;
    }
`

export const SPhone = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 18px;

    @media (${device.mobileL}) {
        align-items: start;
    }
`

export const SSpan = styled.span`
    font-size: 14px;
    color: ${grey};
`