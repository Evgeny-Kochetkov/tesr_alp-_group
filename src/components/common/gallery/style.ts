import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { grey, irisLight, iris }, device } = theme

export const SGallery = styled.section`
    padding: 96px 260px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const SGalleryGrid = styled.ul`
    display: grid;
    gap: 24px;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        'grid1 grid1 grid2 grid2'
        'grid1 grid1 grid3 grid4'
        'grid5 grid6 grid7 grid7';
`