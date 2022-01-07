import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(to right, #fab1a0, #fd79a8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;

const Loading = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: gray;
`;

const MovieContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  transform: translateY(-35px);
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo Movies</Title>
        <Subtitle>I love Movies and Apollo!</Subtitle>
      </Header>
      <MovieContainer>
        {loading && <Loading>Loading...</Loading>}
        {data?.movies.map((movie) => (
          <>
            <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image} />
            <button>{movie.isLiked ? "Unlike" : "Like"}</button>
          </>
        ))}
      </MovieContainer>
    </Container>
  );
};

export default Home;
