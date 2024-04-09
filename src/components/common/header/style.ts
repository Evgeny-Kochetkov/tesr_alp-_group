import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 260px;
`

export const SNav = styled.nav`
    display: flex;
    align-items: center;
`

export const SNavUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
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
    }
`

export const SFlexWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const SDescrLogo = styled.span`
    max-width: 190px;
    font-size: 14px;
    color: ${grey};
`

export const SPhoneBtn = styled.button`
    display: flex;
    gap: 8px;
`

export const SContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const SPhone = styled.a`
    font-weight: 600;
    font-size: 18px;
`

export const SSpan = styled.span`
    font-size: 14px;
    color: ${grey};
`