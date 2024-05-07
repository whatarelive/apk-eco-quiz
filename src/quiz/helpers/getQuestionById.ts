import { Category } from '../types/HookTypes';

export const getQuestionById = ( questionID: number, category: any ) => {
    const questions = (category as Category).questions;
    const question = questions.filter( quest => quest.id === questionID ).shift();

    if ( !question ) {
        throw new Error(`This ${question} is an undefined`);
    }

    return question;
} 