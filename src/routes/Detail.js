import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      rating
      language
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18%;
  align-items: center;
  background: linear-gradient(-45deg, #fab1a0, #fd79a8);
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

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  return (
    <>
      {loading && (
        <Container>
          <Title>LOADING...</Title>
        </Container>
      )}
      {!loading && data.movie && (
        <Container>
          <TextContainer>
            <Title>{data.movie.title}</Title>
            <Info>
              {data.movie.language} • {data.movie.rating}
            </Info>
            <Desc>{data.movie.description_intro}</Desc>
          </TextContainer>

          <PhotoContainer bg={data.movie.medium_cover_image} />
        </Container>
      )}
    </>
  );
};
