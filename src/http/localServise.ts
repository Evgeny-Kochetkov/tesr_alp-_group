import $api from '.'

import { AxiosResponse } from 'axios'

export default class localServise {
    
    static async addForm(
        id: string,
        lastName: string,
        firstName: string,
        fatherName: string
    ): Promise<AxiosResponse> {
        return $api.post(`/api/form`, JSON.stringify({
            id: id,
            lastName: lastName,
            firstName: firstName,
            fatherName: fatherName
        }))
    }
}