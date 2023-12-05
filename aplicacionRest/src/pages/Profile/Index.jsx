import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById, getFilmFromId, getSpeciesFromId } from '../../services/services';
import { getIdFromUrl } from '../../app/utils';
import { Row } from '../../app/styled';

const Profile = () => {
    const { id } = useParams();
    const [characterData, setCharacterData] = useState([]);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        getCharacterById(id).then(res => {
            const { films, species } = res.data;
            console.log(res.data)
            setCharacterData(res.data);
            // Promise.all devuelve una promesa que se cumplirá cuando todas las promesas del array que recibe como parámetro se haya cumplido.
            Promise.all(films.map(obj => getFilmFromId(getIdFromUrl(obj)))).then((films) => {
                setFilms(films.map(({ data }) => data));
            });
            Promise.all(species.map(obj => getSpeciesFromId(getIdFromUrl(obj)))).then((species) => {
                setSpecies(species.map(({ data }) => data));
            });
        })
    }, []);

    return (
        <div>
            {
                characterData && <Row><div>
                    <h1>{characterData.name}</h1>
                    <p>Height: {characterData.height}</p>
                    <p>Gender: {characterData.gender}</p>
                    <p>Hair Color: {characterData.hair_color}</p>
                    <p>Skin: {characterData.skin_color}</p>
                    <h2>Films</h2>
                    <ul>
                        {
                            films.map((obj, i) => <li key={i}>{obj.title}</li>)
                        }
                    </ul>
                    <h2>Species</h2>
                    <ul>
                        {
                            species.map((obj, i) => <li key={i}>{obj.name}</li>)
                        }
                    </ul>
                </div>
                    <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} alt="imagen" /></Row>

            }

        </div>
    )

};

export default Profile;