'use client'

import localServise from '@/http/localServise'

import {
    useState,
    useCallback
} from 'react'

import { Button } from '@/components/ui/button'

import { SH2 } from '../laboratory/style'

import {
    SMainForm,
    SP,
    SForm,
    SInputsWrap,
    SInput,
    SSuccessWrap
} from './style'

export const MainForm = () => {

    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [validLastName, setValidLastName] = useState<boolean | null>(null)
    const [validFirstName, setValidFirstName] = useState<boolean | null>(null)
    const [validFatherName, setValidFatherName] = useState<boolean | null>(null)

    const [status, setStatus] = useState(false)

    const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'lastName':
                setLastName(e.target.value)
                break
            case 'firstName':
                setFirstName(e.target.value)
                break
            case 'fatherName':
                setFatherName(e.target.value)
                break
            default: return
        }
    }, [])

    const blurHandler = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch(e.target.name) {
            case 'lastName':
                checkValid(e.target.value) ? setValidLastName(true) : setValidLastName(false)
                break
            case 'firstName':
                checkValid(e.target.value) ? setValidFirstName(true) : setValidFirstName(false)
                break
            case 'fatherName':
                checkValid(e.target.value) ? setValidFatherName(true) : setValidFatherName(false)
                break
            default: return
        }
    }, [])

    const checkValid = useCallback((s: string) => {
        return /^[a-zA-Zа-яА-Я\s]+$/.test(s)
    }, [])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        try {
            if(validLastName && validFirstName && validFatherName) {
                const id = `${((Math.random()*1e8)).toString(16)}`
                const res = await localServise.addForm(
                    id,
                    lastName,
                    firstName,
                    fatherName
                )
                if(res.status === 200) {
                    console.log('Успешно')
                    setStatus(true)
                }
            }
            
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SMainForm id='form'>
            {!status ? 
                <>
                    <SH2>
                        Заявка на диагностику
                    </SH2>
                    <SP>
                        Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!
                    </SP>
                    <SForm onSubmit={(e) => handleSubmit(e)}>
                        <SInputsWrap>
                            <SInput
                                type='text'
                                name='lastName'
                                placeholder='Фамилия'
                                value={lastName}
                                onChange={inputChange}
                                onBlur={(e) => blurHandler(e)}
                                style={validLastName === null ? undefined : validLastName ? {'border': '1px solid #737BE1'}: {'border': '1px solid #EB5757'}}
                            />
                            <SInput
                                type='text'
                                name='firstName'
                                placeholder='Имя'
                                value={firstName}
                                onChange={inputChange}
                                onBlur={(e) => blurHandler(e)}
                                style={validFirstName === null ? undefined : validFirstName ? {'border': '1px solid #737BE1'}: {'border': '1px solid #EB5757'}}
                            />
                            <SInput
                                type='text'
                                name='fatherName'
                                placeholder='Отчество'
                                value={fatherName}
                                onChange={inputChange}
                                onBlur={(e) => blurHandler(e)}
                                style={validFatherName === null ? undefined : validFatherName ? {'border': '1px solid #737BE1'}: {'border': '1px solid #EB5757'}}
                            />
                        </SInputsWrap>
                        <Button
                            text='Отправить'
                            type='submit'
                            width='188px'
                        />
                    </SForm>
                </>
                : <SSuccessWrap>
                    <svg width='90' height='91' viewBox='0 0 90 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M42.1875 53.9375L35.5 47.5' stroke='#737BE1' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M56.25 39.875L42.1875 53.9375' stroke='#737BE1' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                        <path fillRule='evenodd' clipRule='evenodd' d='M45 79.25C26.3604 79.25 11.25 64.1396 11.25 45.5V45.5C11.25 26.8604 26.3604 11.75 45 11.75V11.75C63.6396 11.75 78.75 26.8604 78.75 45.5V45.5C78.75 64.1396 63.6396 79.25 45 79.25V79.25Z' stroke='#737BE1' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <p>
                        Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.
                    </p>
                  </SSuccessWrap>
            }
        </SMainForm>
    )
}