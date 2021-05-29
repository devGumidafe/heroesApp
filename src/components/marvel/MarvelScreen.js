import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
    return (
        <div className="container mt-5">
            <h1 className="display-4 text-danger">Heroes Marvel</h1>
            <hr />
            <HeroesList publisher={'Marvel Comics'} />
        </div>
    )
}
