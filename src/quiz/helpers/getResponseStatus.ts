import { getCategoryById } from "./getCategoryById";
import { getQuestionById } from "./getQuestionById";


export const getResponseStatus = ( categoryID: string, questionID: number, respID: string ) => {

    const category = getCategoryById( categoryID );
    const question = getQuestionById( questionID, category );
    const response = question.respuestas.filter( quest => quest.id === respID ).pop();

    if ( response!.value === question.correcta ) {
        return true;
    }

    if( response!.value !== question.correcta ) {
        return false;
    }
}