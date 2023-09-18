import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await fetchReviews(id);
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Item key={review.id}>
            <b>
              <p>Author: {review.author}</p>
            </b>
            <p> {review.content}</p>
          </Item>
        ))
      ) : (
        <li>No reviews available</li>
      )}
    </ul>
  );
};

export default Reviews;
