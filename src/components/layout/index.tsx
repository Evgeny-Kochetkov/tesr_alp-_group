'use client'

import { Header } from '../common/header'
import { Footer } from '../common/footer'

export const Layout = ({ children } : { children: React.ReactNode; }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}