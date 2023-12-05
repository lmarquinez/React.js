import { useEffect, useState } from 'react';
import { getPeople } from '../../services/services';
import { Box, Container, PageLink } from '../../app/styled';
import { getIdFromUrl, getPaginationLinks } from '../../app/utils';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [people, setPeople] = useState(null);
    const [peopleAmount, setPeopleAmount] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPeople(id).then((res) => {
            console.log(res)
            setPeople(res.data.results)
            setPeopleAmount(res.data.count);
        });
    }, [id]);

    return (
        <div>
            <Container>
                {
                    people && people.map((obj, i) => <Box to={"profile/" + getIdFromUrl(obj.url)} key={i}><img src={"https://starwars-visualguide.com/assets/img/characters/" + getIdFromUrl(obj.url) + ".jpg"} alt="imagen" /> <p>{obj.name}</p></Box>)
                }
            </Container>
            <div>
                {
                    peopleAmount && getPaginationLinks(peopleAmount, 10).map((obj, i) => <PageLink key={i} to={'/swapi/' + obj}>{obj} &nbsp;</PageLink>)
                }
            </div>
        </div>
    );
};

export default Home;