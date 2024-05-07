import { Category } from "./HookTypes"
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
    icon: string,
    title: string 
}

// PropsTypes de la funcion del Componente <QuizInfo/>
export type QuizInfoProps = {
    id: number
}

// PropsTypes de la funcion del Componente <QuizResponse/>
export type QuizResponseProps = {
    resp: string
}


export type RenderList = {
    item: {
        category: Category
    }
}