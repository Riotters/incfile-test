import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

import { Link } from "gatsby";
import ContentCenter from "../atomic/partials/content-center";
import Searchbar from "../atomic/sections/other/business-name-generator/search-bar";
import ShapeCurve from "../atomic/atoms/shapes/curve";
import { color } from "../atomic/atoms/styles/colors";
import RelativeElement from "../atomic/elements/relative-e";
import AbsoluteShapCure from "../atomic/elements/absolute-shape-curve-e";
import ArrowLeft from "../images/arrow-circle.inline.svg";
import Oval from "../atomic/atoms/icons/oval";
import OvalSVG from "../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalSVG2 from "../images/ovals/bottom-right-transparent-blue2.inline.svg";
import styled from "styled-components";
import Container from "../atomic/container";

// text
import { seo, resultLists } from "../static/other/business-name-generator";
import ResultSection from "../atomic/sections/other/business-name-generator/result-lists";

const Wrapper = styled.div`
  position: relative;
  padding: 120px 0 100px 0;

  .back-link {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${color.black};
    span {
      transform: rotate(-90deg);
      margin-right: 8px;
    }
  }
`;

const BusinessNameGeneratorResult = ({ location }) => {
  const [keyword, setKeyWord] = React.useState("");
  const [businessNames, setBusinessNames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let keyword = typeof window !== `undefined` ? location.state.keyword : "";
    setKeyWord(keyword);

    getBusinessNames(keyword).then((data) => {
      setBusinessNames(data);
      setIsLoading(false);
    });
  }, []);

  const getBusinessNames = async (keyword) => {
    const data = await fetch(
      `${process.env.INCFILE_API_URL}/businessNameGenerator`,
      {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `keywords=${keyword}`,
      }
    ).then((response) => response.json());

    return data;
  };

  const reloadBusinessNames = (keyword) => {
    setIsLoading(true);
    getBusinessNames(keyword).then((data) => {
      setBusinessNames(data);
      setKeyWord(keyword);
      setIsLoading(false);
    });
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.desc} />

      <Wrapper>
        <Oval className="oval" height="570" width="570" top="0" left="0" y="35">
          <OvalSVG />
        </Oval>

        <Oval
          className="oval"
          height="570"
          width="570"
          bottom="0"
          right="0"
          y="-30"
        >
          <OvalSVG2 />
        </Oval>

        <Container>
          <Link to="/business-name-generator/" className="back-link">
            <span>
              <ArrowLeft />
            </span>
            Back
          </Link>

          <ContentCenter>
            <RelativeElement
              maxWidth="670px"
              margin="60px 0 0 0"
              style={{ width: `100%` }}
            >
              <AbsoluteShapCure rotate={0} right="-30px" top="0">
                <ShapeCurve color={color.orange1} />
              </AbsoluteShapCure>
              <Searchbar
                contentWidth="auto"
                typeSubmit="itself"
                getBusinessNames={reloadBusinessNames.bind(this)}
              />
            </RelativeElement>

            <ResultSection
              content={businessNames}
              keyword={keyword}
              isLoading={isLoading}
            />
          </ContentCenter>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default BusinessNameGeneratorResult;
