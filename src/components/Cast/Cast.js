import { useParams } from 'react-router-dom';
import { List, Item } from './Cast.styled';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { cast } = await fetchMovieCredits(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <List>
      {cast.slice(0, 20).map(info => (
        <Item key={info.id}>
          {info.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${info.profile_path}`}
              alt={info.name}
            />
          ) : (
            <img
              width="200"
              height="300"
              src="https://livableworld.org/wp-content/uploads/2020/03/Cain-profile-200x300.jpg"
              alt="error"
            />
          )}
          <p>{info.name}</p>
          <p>Character: {info.character}</p>
        </Item>
      ))}
    </List>
  );
};

export default Cast;
