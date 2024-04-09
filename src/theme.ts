const black = '#000000'
const grey = '#4C4C4C'
const irisLight = '#E9EAF9'
const iris = '#4F58C9'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktopS: '1680px',
    desktopM: '1920px',
    desktopL: '2560px'
}

export const device = {
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    tablet: `max-width: ${size.tablet}`,
    laptop: `max-width: ${size.laptop}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktopS: `max-width: ${size.desktopS}`,
    desktopM: `max-width: ${size.desktopM}`,
    desktopL: `max-width: ${size.desktopL}`
}

export const theme = {
    colors: {
        black,
        grey,
        irisLight,
        iris
    },
    device
}