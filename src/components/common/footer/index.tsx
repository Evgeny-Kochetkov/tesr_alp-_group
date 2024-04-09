import Image from 'next/image'
import Link from 'next/link'

import {
    SFooter
} from './style'

import logoFooter from '../../../../public/images/logoFooter.svg'

export const Footer = () => {
    return (
        <SFooter>
            <Link
                href='#'
                style={{'color': 'white'}}
            >
                {`© ${new Date().getFullYear()} Все права защищены Российской Ассоциацией Капибар`}
            </Link>
            <Link href='/'>
                <Image
                    src={logoFooter}
                    alt='KapibaraLab logo'
                    height={29}
                    style={{ 'objectFit': 'contain' }}
                />
            </Link>
        </SFooter>
    )
}