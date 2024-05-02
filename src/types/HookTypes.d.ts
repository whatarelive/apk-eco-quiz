import { ImageURISource } from "react-native"

export type Return = {
    data: Category[],
    isLoading: boolean,
}

export interface CategoryList {
    categories: Category[]
}

export interface Category {
    id: number,
    name: string,
    urlIcon: string,
    questions: Question[]
}

export interface Question {
    readonly pregunta: string,
    readonly correcta: string,
    readonly respuestas: String[]
}
