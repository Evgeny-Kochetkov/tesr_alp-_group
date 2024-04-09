import { SButton } from './style'

export const Button = ({ text, width, margin, arrow }: { text: string; width: string; margin?: string; arrow?: boolean; }) => {
    return (
        <SButton $width={width} $margin={margin}>
            {text}
            {arrow
                ?  <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M19 12.5H5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    <path d='M14 17.5L19 12.5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                    <path d='M14 7.5L19 12.5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                : null
            }
        </SButton>
    )
}