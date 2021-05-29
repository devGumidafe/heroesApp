import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (event) => {
        event.preventDefault();

        history.push(`?q=${searchText}`)
    }

    return (

        <div className="container">
            <h1 className="display-4 mt-5 text-primary">SearchScreen</h1>
            <hr className="bg-secondary" />

            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSubmit}>

                        <div className="form-group mb-3">
                            <label
                                htmlFor="searchText"
                                className="form-label"
                            >
                                <h4>Search:</h4>
                            </label>
                            <input
                                type="text"
                                name="searchText"
                                className="form-control"
                                placeholder="Find your hero"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results:</h4>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info text-center">
                            Search hero!
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger text-center">
                            Hero not found!
                        </div>
                    }

                    {heroesFiltered.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                    }

                </div>
            </div>
        </div>
    )
}
