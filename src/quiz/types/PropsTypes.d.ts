import { Category } from "./HookTypes"

// PropsTypes de la funcion del Componente <ProfileScore/>
export type ProfileScoreProps = {
    record: number,
    text: string,
}

export type RenderList = {
    item: {
        category: Category
    }
}