import React from "react";
import { Category, Respuesta } from "./HookTypes"
import { QuizInfo } from '../components/QuizInfo';


// PropsTypes de la funcion del Componente <ProfileScore/>
export type ProfileScoreProps = {
    record: number,
    text: string,
}

// PropsTypes de la funcion del Componente <CategoryItem/>
export type CategoryItemProps = {
    category: Category
}

// PropsTypes de la funcion del Componente <CategoryItem/>
export type CustomButtonProps = {
    title: string,
    handleClick: CallableFunction
}

// PropsTypes de la funcion del Componente <QuizHeader/>
export type QuizHeaderProps = {
    title: string 
}

// PropsTypes de la funcion del Componente <QuizInfo/>
export type QuizInfoProps = {
    id: number,
    total: number
}

// PropsTypes de la funcion del Componente <QuizResponse/>
export type QuizResponseProps = {
    resp: Respuesta
}

// PropsTypes de la funcion del Componente <NavButton/>
export type NavButtonProps = {
    type: string,
    icon1: string,
    icon2: string,
}
// PropsTypes de la funcion del Componente <QuizNextButton/>
export type QuizNextButtonProps = {
    icon1: string,
    icon2: string,
    question: number,
    setQuestion: React.Dispatch<React.SetStateAction<number>>
}

// PropsTypes de la funcion del Componente <QuizNextButton/>
export type QuizActionFooterProps = {
    question: number,
    setQuestion: React.Dispatch<React.SetStateAction<number>>
}

export type RenderList = {
    item: {
        category: Category
    }
}