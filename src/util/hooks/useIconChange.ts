import { useRef, useState } from "react";


export const useIconChange = ( icon1: string, icon2: string ) => {
  
    // Se guarda la referencia del tema seleccionado.
    const tema = useRef("ligth");
    
    // Funcion que permite seleccionar el icono en funcion del tema.
    const selectIcon = () => tema.current === "ligth" ? icon1 : icon2;
    
    // Estado para realizar el cambio de icono cuando se cambie el tema.
    const [ icon, setIcon ] = useState(selectIcon);

    // Se actualiza la refencia al nuevo tema seleccionado
    const selectionTheme = () => tema.current = tema.current === "ligth" ? "black" : "ligth";

  return {
    icon,
    setIcon,
    selectIcon,
    selectionTheme,
  };
};