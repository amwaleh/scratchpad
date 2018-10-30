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
& ::hover {
  tranform:translateY(10)
}

`;
const Images = ({ contents }) =>
  contents.map(image => (
    <Imageholder
      computer={9}
      tablet={4}
      mobile={8}
      image={`https://source.unsplash.com/600x300/?smile ${Math.random()}`}
    />
  ));

export default Images;
