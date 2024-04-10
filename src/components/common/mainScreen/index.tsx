'use client'

import Image from 'next/image'

import bg from '../../../../public/images/mainBG.jpg'
import kapibara from '../../../../public/images/kapibara.png'

import {
    SMainScreen,
    SH1
} from './style'

export const MainScreen = () => {
    return (
        <SMainScreen>
            <Image
                src={bg}
                alt='background'
                height={560}
                priority
                style={{'position': 'absolute', 'zIndex': '-2', 'height': '100%', 'width': '100%', 'objectFit': 'cover'}}
            />
            <SH1>
                <span>
                    ТОЧНЫЕ РЕЗУЛЬТАТЫ
                </span>
                <span>
                    ТОЧНО В СРОК
                </span>
            </SH1>
            <Image
                src={kapibara}
                alt='kapibara'
                height={490}
                priority
                className='kapibara'
            />
        </SMainScreen>
    )
}