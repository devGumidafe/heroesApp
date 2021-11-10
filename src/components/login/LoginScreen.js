import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'User'
            }
        })

        history.replace(lastPath);
    }

    return (
        <div className="mt-5 d-flex justify-content-center">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center mb-3">Entrar a HeroesApp</h5>
                        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
