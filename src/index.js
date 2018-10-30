import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Grid, Header, Container, Button } from "semantic-ui-react";
import Images from "./Images";
import Tint from "./tint";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
const contents = [1, 2, 3, 4];

const ImageHolder = styled.div`

  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  direction: rtl;
  overflow:hidden;
`;
const StyledHeader = styled.h1`
  font-size:4rem;
  margin-bottom: 8px;
`;

const SubTitle = styled.span`
    font-family: Manrope,helvetica;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.8px;
    text-align: left;
    color: #557d46;
    margin-top: 0px;
`;

const Section = styled.div`
margin-top: 32px;
`;
function App() {
  return (
    <Grid as={Tint}>
      <Grid container>
        <Grid.Row>
          <Navbar />
        </Grid.Row>

        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column computer="8">
            <StyledHeader>Expand your tech team.</StyledHeader>
            <SubTitle style={{ color: "#557d46" }}>
              Hire caspar developers
            </SubTitle>
            <Section>
              <p>
                Caspar Coding empowers you to scalably grow your on-site team of
                highly-skilled, motivated software engineers. In doing so,
                you’ll be contributing to the long-term, sustainable growth
                trajectory of African tech talent.
              </p>
            </Section>
            <Section>
              <Button color="red">Explore developers </Button>
            </Section>
          </Grid.Column>
          <Grid.Column computer="7" style={{ padding: 0 }}>
            <ImageHolder>
              <Images contents={contents} />
            </ImageHolder>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
