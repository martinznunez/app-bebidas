import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [infoReceta, setInfoReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

      const respuesta = await axios.get(url);
      setInfoReceta(respuesta.data.drinks[0]);
    };

    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        infoReceta,
        setInfoReceta,
        setIdReceta,
        idReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
