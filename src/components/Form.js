import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Form = () => {
  const [busqueda, setbusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const { categorias } = useContext(CategoriasContext);

  const { setBuscarRecetas, setConsultar } = useContext(RecetasContext);

  const obtenerDatosRecetas = (e) => {
    setbusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setBuscarRecetas(busqueda);
        setConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingredientes"
            onChange={obtenerDatosRecetas}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosRecetas}
          >
            <option value="">--Selecciona categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
