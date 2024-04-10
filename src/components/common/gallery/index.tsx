'use client'

import Image from 'next/image'

import { galleryConfig } from './config'

import {
    SGallery,
    SGalleryGrid
} from './style'

import { SH2 } from '../laboratory/style'

export const Gallery = () => {
    return (
        <SGallery id='gallery'>
            <SH2>
                Галерея
            </SH2>
            <SGalleryGrid>
                {galleryConfig.map((item, i) => {
                    return (
                        <li key={i} style={{'gridArea': `grid${i+1}`}}>
                            <Image
                                src={item}
                                alt='gallery'
                                height={i ? 246 : 516}
                                width={0}
                                style={{ 'objectFit': 'contain', 'height': 'auto' }}
                            />
                        </li>
                    )
                })}
            </SGalleryGrid>
        </SGallery>
    )
}