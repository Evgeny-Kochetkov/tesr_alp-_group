'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Link as ScrollLink } from 'react-scroll'

import { navUlConfig } from './config'

import {
    SHeader,
    SNav,
    SNavUl,
    SNavLi,
    SFlexWrap,
    SDescrLogo,
    SContentWrap,
    SPhone,
    SSpan
} from './style'

import logoHeader from '../../../../public/images/logoHeader.svg'

export const Header = () => {
    
    return (
        <SHeader>
            <Link href='/'>
                <SFlexWrap>
                    <Image
                        src={logoHeader}
                        alt='KapibaraLab logo'
                        height={29}
                        priority
                        style={{ 'objectFit': 'contain' }}
                    />
                    <SDescrLogo>
                        Современные методики диагностики
                    </SDescrLogo>
                </SFlexWrap>
            </Link>
            <SNav>
                <SNavUl>
                    {navUlConfig.map(({name, path}) => {
                        return (
                            <SNavLi key={name}>
                                <ScrollLink
                                    to={path}
                                    smooth={true}
                                    duration={500}
                                >
                                    {name}
                                </ScrollLink>
                            </SNavLi>
                        )
                    })}
                </SNavUl>
            </SNav>
            <SPhone href='tel:+71234567890'>
                <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M18.998 23.002C16.9505 20.9545 15.407 18.662 14.3815 16.3363C14.1645 15.8445 14.2923 15.2688 14.672 14.889L16.1053 13.4575C17.2795 12.2833 17.2795 10.6225 16.254 9.59702L14.1995 7.54252C12.8328 6.17577 10.6173 6.17577 9.25051 7.54252L8.10951 8.68352C6.81276 9.98027 6.27201 11.851 6.62201 13.706C7.48651 18.2788 10.143 23.2855 14.4288 27.5713C18.7145 31.857 23.7213 34.5135 28.294 35.378C30.149 35.728 32.0198 35.1873 33.3165 33.8905L34.4558 32.7513C35.8225 31.3845 35.8225 29.169 34.4558 27.8023L32.403 25.7495C31.3775 24.724 29.715 24.724 28.6913 25.7495L27.111 27.3315C26.7313 27.7113 26.1555 27.839 25.6638 27.622C23.338 26.5948 21.0455 25.0495 18.998 23.002Z' stroke='#737BE1' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <SContentWrap>
                    <span>
                        +7 123 456 7890
                    </span>
                    <SSpan>
                        Звонок бесплатный
                    </SSpan>
                </SContentWrap>
            </SPhone>
        </SHeader>
    )
}