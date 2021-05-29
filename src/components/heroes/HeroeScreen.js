import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if (!hero) return <Redirect to="/" />;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img
                        src={heroImages(`./${heroeId}.jpg`).default}
                        alt={superhero}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>
                <div className="col-8 animate__animated animate__fadeIn">
                    <h3 className="text-danger">{superhero}</h3>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                        <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                    </ul>

                    <h4 className="text-primary">Characters</h4>
                    <p>{characters}</p>

                    <button
                        className="btn btn-outline-success w-50 mt-3"
                        onClick={handleReturn}
                    >
                        Return
                    </button>

                </div>
            </div>
        </div>
    )
}
