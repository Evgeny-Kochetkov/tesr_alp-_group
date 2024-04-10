import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { iris }, device } = theme

export const SFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${iris};
    padding: 60px 260px;

    @media (${device.laptopL}) {
        padding: 40px 130px;
    }

    @media (${device.laptop}) {
        padding: 30px 60px;
    }

    @media (${device.mobileL}) {
        padding: 30px 18px;
        flex-direction: column;
        gap: 18px;

        > a {
            text-align: center;
            font-size: 12px;
            
            &:first-child {
                order: 2;
            }

            &:nth-child(2) {
                order: 1;
            }
        }
    }
`