import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const DcScreen = () => {
    return (
        <div className="container mt-5">
            <h1 className="display-4 text-success">Heroes DC</h1>
            <hr />
            <HeroesList publisher={'DC Comics'} />
        </div>
    )
}
