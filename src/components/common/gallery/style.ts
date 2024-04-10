import styled from 'styled-components'

import { theme } from '../../../theme'

const { device } = theme

export const SGallery = styled.section`
    padding: 96px 260px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media (${device.laptopL}) {
        padding: 40px 130px;
    }

    @media (${device.laptop}) {
        padding: 30px 60px;
        gap: 28px;
    }

    @media (${device.mobileL}) {
        padding: 30px 18px;
        gap: 18px;
    }
`

export const SGalleryGrid = styled.ul`
    display: grid;
    gap: 24px;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        'grid1 grid1 grid2 grid2'
        'grid1 grid1 grid3 grid4'
        'grid5 grid6 grid7 grid7';

    > li > img {
        object-fit: cover;
        height: auto;
        width: 100%;
        border-radius: 8px;

        @media (${device.mobileL}) {
            min-height: 246px;
            border-radius: 4px;
        }
    }

    @media (${device.mobileL}) {
        display: flex;
        flex-direction: column;

        > li {
            &:nth-child(5) {
                display: none;
            }
            &:nth-child(6) {
                display: none;
            }
            &:nth-child(7) {
                display: none;
            }
        }
    }
`