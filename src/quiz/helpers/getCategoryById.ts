import { categories } from "../data/Quiz.json";


export const getCategoryById = ( categoryId: string | undefined ) => {
    if ( !categoryId ) {
        throw new Error(`${categoryId} is not valid ID for Category Array`);
    }

    const categorys = categories.filter( (category) => category.category.id === +categoryId );
    const category = categorys.shift()?.category;

    if ( !category ) {
       throw new Error(`This ${category} is an undefined`);
    } 
        
    return category;
}