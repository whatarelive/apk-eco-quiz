import { useContext, useState } from "react";
import { NextQuizContext } from "../context";
import { theme, useImage } from "../../util";
import { Respuesta } from "../types";

// Esta es una variable que devuelve un objeto de estilo inicial dependiendo del estado activo y del id de la respuesta.
const responseStyle = {
    backgroundColor: theme.brown_clay,
    borderColor: theme.brown_lightDark,
};

// Esta variable guarda el estilo de la respuesta incorrecta.
const incorrectRespStyle = {
    backgroundColor: theme.salmon_light,
    borderColor: theme.salmon_dark,
};

// Esta variable guarda el estilo de la respuesta correcta.
const correctRespStyle = {
    backgroundColor: theme.green_base,
    borderColor: theme.green_dark,
};

export const useStyle = ( resp: Respuesta, condicion: boolean ) => {

    const [ color, setColor ] = useState("");
    const { active } = useContext( NextQuizContext );

    const icon = condicion ? "check_circle" : color === "red" ? "error_circle" : "";

    const image = useImage( icon , 'uiImage' );

    const beforeStyle = (resp.id !== active.refId) ? responseStyle : correctRespStyle;

    const conditionalStyle = (color !== "red") ? beforeStyle : incorrectRespStyle;

    const selectStyle = condicion ? correctRespStyle : conditionalStyle;

  return {
    selectStyle,
    setColor,
    image
  };
}