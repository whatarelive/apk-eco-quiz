import React from "react";
import { Category, Question, Respuesta } from "./HookTypes"


// PropsTypes de la funcion del Componente <ProfileScore/>
export interface ProfileScoreProps {
  record: number,
  text: string,
}

// PropsTypes de la funcion del Componente <CategoryItem/>
export interface CategoryItemProps {
  category: Category
}

// PropsTypes de la funcion del Componente <CategoryItem/>
export interface CustomButtonProps {
  title: string,
  icon: string,
  color: string,
  handleClick: CallableFunction,
}

// PropsTypes de la funcion del Componente <QuizInfo/>
export interface QuizInfoProps {
  id: number,
  total: number
}

// PropsTypes de la funcion del Componente <QuizResponse/>
export interface QuizResponseProps {
  resp: Respuesta;
  correct: string;
}

// PropsTypes de la funcion del Componente <QuizListResponse/>
export interface QuizResponseListProps {
  respuestas: Respuesta[];
  correct: string;
}

// PropsTypes de la funcion del Componente <QuizNextButton/>
export interface QuizNextButtonProps {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
};

// PropsTypes de la funcion del Componente <QuizNextButton/>
export interface QuizCheckButtonProps {
  category: Category;
  questionA: Question;
};

// PropsTypes de la funcion del Componente <QuizCrono/>
export interface QuizCronoProps {
  restart: number;
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}

// PropsTypes de la funcion del Componente <QuizNextButton/>
export interface QuizActionFooterProps {
  category: Category;
  questionA: Question;
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}

export interface RenderList {
  item: {
    category: Category
  }
}