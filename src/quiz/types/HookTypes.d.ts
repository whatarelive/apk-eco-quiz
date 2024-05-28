export interface CategoryList {
    categories: Category[]
}

export interface Category {
    readonly id: number,
    readonly name: string,
    readonly urlIcon: string,
    readonly questions: Question[]
}

export interface Question {
    readonly id: number,
    readonly pregunta: string,
    readonly correcta: string,
    readonly respuestas: Respuesta[]
}

export interface Respuesta {
    readonly id: string,
    readonly value: string
}

