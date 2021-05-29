import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { types } from '../../types/types';
import { heroImages } from '../../helpers/heroImages';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });

        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary p-1">

            <Link
                className="navbar-brand"
                to="/"
            >
                <img src={heroImages('./avatarHero.png').default} width="80" height="40" className="d-inline-block align-top" alt="" />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                </NavLink>

                </div>
            </div>



            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}