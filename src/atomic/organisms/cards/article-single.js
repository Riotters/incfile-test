import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Tags from "../../molecules/lists/blog-article-tags";
import Header from "../../molecules/text-blocks/article-header";
import Content from "../../molecules/text-blocks/article-content";
import Socials from "../../molecules/lists/article-socials";
import Footer from "../../molecules/mixed-blocks/article-footer";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;
    overflow: unset;

    @media (min-width: 576px) {
      padding: 32px;
    }
  }
`;
const aaa = {
  title: "​Steps You Can Take Today to Get Your Home Business Off the Ground",
  meta: {
    date: "February 25, 2020",
    author: "Melissa Clark",
    from: "State Information",
  },
  content: {
    paragraph1: `One of the most difficult parts of starting a business is finding the perfect name. You need to find the right balance of functionality and appeal — letting your customers know what you do with a business name that’s memorable and builds trust. You’ll also need to conduct a corporation/LLC name search with your state to make sure it isn’t already in use before you can officially register your business.  Read on for our advice on choosing the perfect name and how to run a business entity search in your state so you can get your business up and running.`,
    image1: `baloons`,
    subtitle1: `Why the Right Business Name Matters`,
    paragraph1: `Now that you have a short list of names that are unique and not used by another business in your state, you can decide on your favorite. For each name on your list, go through the questions again and make sure the name fits with your intent for your business. Talk to the people you know, speak with potential customers and get feedback on the name. Then, you can make the final decision and get your business started.
                    Don’t forget that Incfile makes it easy to start your business. If you use our Business Name Search tool, you can choose to form your business with us once you’ve settled on a name. Incfile provides unmatched customer service and has formed well over 500,000 companies. Our experience provides us with vast knowledge and experience in filing business entities, and we are familiar with the nuances of each of the 50 states.`,
  },
};

const ArticleSingle = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Whitebox className="card" overflow>
        <div>
          <Tags content={["Business Logistics"]} />
          <Header content={aaa} />
        </div>
        <Content content={aaa.content} />
        <Socials />
        <Footer />
      </Whitebox>
    </Wrapper>
  );
};

export default ArticleSingle;
