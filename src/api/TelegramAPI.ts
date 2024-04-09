import axios from 'axios'
import {FormValuesType} from "../layout/main/mailMe/ContactMeForm";

const telegramBotAPIKey = '6858978765:AAEbKmE1lSoOFTg3GvDgj9-Bz2LTYwD39JA'

export const endpoint = `https://api.telegram.org/bot${telegramBotAPIKey}/`

const instance = axios.create({
    baseURL: `${endpoint}`
})

export const telegramAPI = {
    sendMessage(data: FormValuesType ) {


        const text = ` Имя: ${data.name}\n email: ${data.email}\n Сообщение: ${data.message}`

        return instance.post(`sendMessage`, {
            chat_id: '483509002',
            text: text
        })
    }
}

