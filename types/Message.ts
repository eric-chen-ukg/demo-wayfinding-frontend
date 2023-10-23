import { CardContract } from "./Card"

export interface Message {
    user: boolean // true if user, false if AI,
    message: (CardContract | string)[]
}