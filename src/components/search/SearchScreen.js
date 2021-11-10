import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push(`?q=${searchText}`);
  };

  return (
    <div className="container mb-5">
      <h1 className="display-4 mt-3 text-primary">Busqueda</h1>
      <hr className="bg-secondary" />

      <div className="row">
        <div className="col-sm-6 col-xs-12 mb-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              
              <input
                type="text"
                name="searchText"
                className="form-control"
                placeholder="Encuentra a tu heroe..."
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-sm-6 col-sx-12 ">
        <h4>Resultado:</h4>
                    <hr />
          {q === "" && (
            <div className="alert alert-info text-center">
              Encuentra a tu heroe!
            </div>
          )}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger text-center">
              Heroe no encontrado!
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
