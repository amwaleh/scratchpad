import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "styled-components";

const Imageholder = styled(Grid.Column)`

background-image: ${props => `url('${props.image}')`};
background-size:cover;
background-position:center;
min-width:180px;
height: 125px ;
padding:50px;
&:hover {
    transition-timing-function: linear;
    transition: 0.3s;
    transform: scale(-0.9);
    margin: 0 5px;
    div {
      display: flex;
      flex-flow: column;
      background-color: #000;
      width: 180px;
      height: 60px;
      opacity: 0.75;
      color: #fff;
      font-family: Karla, helvetica;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      text-align: left;
      color: #ffffff;
      cursor: pointer;
      padding: 10px;
    }
  }
  span {
    width: 100%;
  }
  div {
    display: None;
    span.title {
      width: 100%;
      opacity: 0.6;
      font-family: Karla, helvetica;
      font-size: 14px;
      font-weight: normal;
      text-align: left;
      color: #ffffff;
    }
  }
`;
const Images = ({ contents }) =>
  contents.map(image => (
    <Imageholder
      image={`https://source.unsplash.com/600x300/?smile ${Math.random()}`}
    />
  ));

export default Images;
