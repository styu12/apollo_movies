import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const Movie = ({ id, bg }) => {
  return <MovieBox to={`/${id}`} bg={bg}></MovieBox>;
};

export default Movie;
