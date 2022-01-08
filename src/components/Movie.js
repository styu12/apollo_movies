import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieBox = styled(Link)`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  cursor: pointer;
`;

const LikeBtn = styled.button`
  width: 50px;
  height: 20px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
`;

const LIKE_MOVIE = gql`
  mutation LikeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: +id },
  });

  return (
    <Container>
      <MovieBox to={`/${id}`} bg={bg}></MovieBox>
      <LikeBtn onClick={likeMovie}>{isLiked ? "Unlike" : "Like"}</LikeBtn>
    </Container>
  );
};

export default Movie;
