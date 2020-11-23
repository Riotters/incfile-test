import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";

//Sections
import Top from "../atomic/partials/top";
import WhyChooseUs from "../atomic/sections/other/about/why-choose-us";
import OurProcessSection from "../atomic/sections/other/about/our-process";
import WhatWeDoSection from "../atomic/sections/other/about/what-we-do";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";

//Texts
import { seo, hero, whyChooseUsList, ourProcess, whatWeDo, rocket } from "../static/other/about";

const About = () => (
  <Layout>
        <SEO
            title={seo.title}
            description={seo.desc}
        />

        <Top imageName="mrs-and-mr-about-us"
            imageAlt="about incfile"
            ovalColor="purple1"
            contentWidth="55"
            contentPaddingTop="0"
            headlineWidth="700"
            tabletVariantClass="tablet--shopper"
            tabletImgPosX={33}
            tabletImgPosY={-510}
            tabletImgScale={.8}>
            <h1>{hero.header}</h1>
            <p>{hero.subtitle}</p>
            <p style={{ fontWeight: `bold` }}>{hero.subtitle2}</p>
            <Buttonsbox>
                <Button content={hero.button} theme="primary56" arrow />
            </Buttonsbox>
        </Top>

        <WhyChooseUs content={whyChooseUsList} />
        <OurProcessSection content={ourProcess} />
        <WhatWeDoSection content={whatWeDo} />
        <Rocket content={rocket} />
  </Layout>
);

export default About;
