import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      rating
      language
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  padding: 0 18%;
  align-items: center;
  background: linear-gradient(-45deg, #fab1a0, #fd79a8);
`;

const MovieContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 40%;
  color: white;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Info = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 13px;
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const PhotoContainer = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  width: 35%;
  height: 500px;
`;

const SuggestionContainer = styled.div`
  width: 100%;
  height: 25%;
  margin-top: 25px;
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const SuggestionPoster = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  height: 300px;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  console.log(data);

  return (
    <Container>
      <MovieContainer>
        <TextContainer>
          <Title>
            {loading ? "Loading..." : data.movie.title}{" "}
            {data?.movie.isLiked ? "💖" : "😰"}
          </Title>
          <Info>
            {data?.movie?.language} • {data?.movie?.rating}
          </Info>
          <Desc>{data?.movie?.description_intro}</Desc>
        </TextContainer>

        <PhotoContainer bg={data?.movie?.medium_cover_image} />
      </MovieContainer>

      <SuggestionContainer>
        {data?.suggestions.map((s) => (
          <SuggestionPoster key={s.id} bg={s.medium_cover_image} />
        ))}
      </SuggestionContainer>
    </Container>
  );
};
