'use client'

import { Link as ScrollLink } from 'react-scroll'

import Image from 'next/image'

import { Button } from '@/components/ui/button'

import laboratoryImg from '../../../../public/images/laboratoryImg.jpg'

import {
    SLaboratory,
    SContentWrap,
    STextWrap,
    SH2
} from './style'

export const Laboratory = () => {
    return (
        <SLaboratory>
            <SContentWrap>
                <STextWrap>
                    <SH2> 
                        Лаборатория
                    </SH2>
                    <p>
                        Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом. 
                    </p>
                    <p>
                        Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.
                    </p>
                    <Button text='Оставить заявку' width='249px' margin='36px 0 0 0' arrow/>
                </STextWrap>
                <Image
                    src={laboratoryImg}
                    alt='laboratory img'
                    height={314}
                    style={{ 'objectFit': 'contain', 'borderRadius': '8px'}}
                />
            </SContentWrap>
        </SLaboratory>
    )
}