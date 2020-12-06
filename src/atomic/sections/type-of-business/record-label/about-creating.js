import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Adventages from "../../../../components/adventages";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Heading} from "../../../atoms/typography/heading";
import TextCenterLayout from "../../../partials/heading-center";
import {gradient} from "../../../atoms/styles/colors";
import {color} from "../../../../components/styles/colors";
import Curve2SVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";
import Curve from "../../../atoms/icons/curve";

const AboutCreating = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline={`What to Know About Creating a Record Label`} text={`Let’s break down some of the key facts you’ll need to be aware of if you want to start an independent record company:`}/>
            <AdventagesBox>
                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Finding artists that can appeal to a range of fans can be tough.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        You’ll need to network, go and see bands, talk to audiences and spend time on A&R (artists and repertoire) to find the right type of music.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Curve top="-110" right="-30" color={color.green2}>
                        <Curve2SVG/>
                    </Curve>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Starting a record company can be expensive.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        From renting studios and hiring producers to spending on marketing and promotion, initial and ongoing outlays may be expensive. You’ll need to keep a very close eye on finances.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Managing multiple areas will be challenging.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        You’ll be scheduling recording sessions, arranging
                        to have people in the right place at the right time, promoting music on social media and more. You’ll need to be a master of the calendar and the to-do list.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Learning as you go is par for the course.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        Music and creativity can sometimes mean surprises. You'll need to react well to unexpected challenges and keep a cool head.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Identifying the music’s unique selling points is essential.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        Music is very personal to people, so understanding what can appeal to a reasonable number of fans is necessary for success.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Marketing is (almost) everything.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        There’s a large amount of music already out there. You’ll need unique, distinct branding and advertising to help your artists stand out from the crowd. This will help you get a competitive advantage. Think about radio play, fliers, posters, print media, internet ads and social media.
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Understanding distribution is necessary.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}}>
                        You will want to establish how you’re going to get music to fans. Will you opt for a digital-only strategy with downloads and streaming, or will you plan
                        to release physical products like CDs or vinyl?
                    </Paragraph>
                </AdventagesWithLongText>

                <AdventagesWithLongText>
                    <Paragraph style={{fontFamily: "Avenir", fontWeight: "900", color: "#1d1d1d", marginBottom: 0}} big>
                        Making use of digital services is very useful.
                    </Paragraph>
                    <Paragraph style={{marginBottom: 0}} mixed>
                        Music services like <a href="https://soundcloud.com/" target="_BLANK">SoundCloud</a>, <a href="https://bandcamp.com/" target="_BLANK">Bandcamp</a>, <a href="https://www.apple.com/itunes/" target="_BLANK">iTunes</a>, <a href="https://music.amazon.com/" target="_BLANK">Amazon Music</a>, <a href="https://www.pandora.com/" target="_BLANK">Pandora</a>, <a href="https://play.google.com/music" target="_BLANK">Google Play Music</a> or <a href="https://www.spotify.com/" target="_BLANK">Spotify</a> make distribution easier and can help potential fans discover your music.
                    </Paragraph>
                </AdventagesWithLongText>
            </AdventagesBox>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 103px;
    background-image: ${gradient.green3};
`;

const AdventagesBox = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

export default AboutCreating;
