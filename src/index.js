import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Grid, Header, Container, Button } from "semantic-ui-react";
import Images from "./Images";
import Tint from "./tint";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
const developers = [
  {
    name: "Ben Shiundu",
    title: "Snr. Software Developer - React Native",
    src: "/static/images/profilepic-1.jpg"
  },
  {
    name: "Kevin Barasa",
    title: "snr. Software Developer - PHP",
    src: "/static/images/profilepic-2.jpg"
  },
  {
    name: "Kevin Barasa",
    title: "snr. Software Developer - PHP",
    src: "/static/images/profilepic-3.jpg"
  },
  {
    name: "Mwaleh Muturi",
    title: "Snr.  Software Developer - React",
    src: "/static/images/profilepic-4.jpg"
  }
];

const ImageHolder = styled.div`

  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  direction: rtl;
  overflow:visible;
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
    <>
      <div
        style={{
          backgroundImage: `url('https://source.unsplash.com/600x300/?smile ${Math.random()}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "10% 100%"
        }}
      >
        <Grid as={Tint}>
          <Grid container style={{ padding: "0 40px" }}>
            <Grid.Row>
              <Navbar />
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: 0, minHeight: "500px" }}>
              <Grid.Column computer="8">
                <StyledHeader>Expand your tech team.</StyledHeader>
                <SubTitle style={{ color: "#557d46" }}>
                  Hire caspar developers
                </SubTitle>
                <Section>
                  <div className="two wide computer column">
                    Caspar Coding empowers you to scalably grow your on-site
                    team of highly-skilled, motivated software engineers. In
                    doing so, you’ll be contributing to the long-term,
                    sustainable growth trajectory of African tech talent.
                  </div>
                </Section>
                <Section>
                  <Button color="red">Explore developers </Button>
                </Section>
              </Grid.Column>
              <Grid.Column computer="8" style={{ padding: 0 }}>
                <ImageHolder>
                  <Images contents={developers} />
                </ImageHolder>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid>
      </div>
      <Grid fluid style={{ backgroundColor: "#CCC", marginTop: "15px" }}>
        <Grid
          container
          style={{
            padding: "0 40px",
            minHeight: "500px"
          }}
        >
          hello
        </Grid>
      </Grid>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
