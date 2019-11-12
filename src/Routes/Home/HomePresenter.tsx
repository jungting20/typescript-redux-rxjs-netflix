import * as React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../../Component/Section';
import Poster from '../../Component/Poster';
import Message from '../../Component/Message';
const Container = styled.div`
  width: 100px;
  background-color: red;
`;

const HomePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
  home,
}: StateType.HomeState) =>
  loading ? null : (
    <Container>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="upcoming Movies">
          {upcoming.map(movie => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

export default HomePresenter;
