import React from 'react';
import styled, { ThemedStyledFunction } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div<CustomPropsTypes.PosterImage>`
  background-image: url(${props => props.bgurl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
}: CustomPropsTypes.PosterProps) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgurl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : //: require('../assets/noPosterSmall.png')
                'asd장'
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ❤️
          </span>{' '}
        </Rating>
      </ImageContainer>
      <Title>
        {title && title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year />
    </Container>
  </Link>
);

export default Poster;
