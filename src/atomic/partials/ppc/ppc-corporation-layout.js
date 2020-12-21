import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { opinions, care } from "../../../static/form/page";
import CartBlock from "../../molecules/blocks/cart-block";
import RatingBlock from "../../molecules/blocks/rating-block";
import RatingRow from "../../atoms/boxes/rating-row";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button";
import Rocket from "../../sections/rocket";
import Opinions from "../../sections/form/opinions";
import Care from "../../sections/form/care";
import SEO from "../../../components/seo";
import Top from "../top";
import ButtonVideo from "../../molecules/buttons/button-video";
import PPCWhyChooseIncfile from "./ppc-why-choose-incfile";
import { statesArray } from "../../../static/states-v2";

const PPCCorporationLayout = ({ stateCode, videoID, vimeo, quotes }) => {
  const state = stateCode
    ? statesArray.filter((state) => state.code === stateCode)[0]
    : false;
  const stateName = state ? state.name : "";
  const firstCharacterState = state ? state.name.slice(0, 1) : "";
  const addLetter =
    state && ["A", "E", "I", "O", "U", "H"].includes(firstCharacterState)
      ? "An"
      : "A";

  const buttonInfo = {
    text: `Launch My Corporation`,
    url: `${
      process.env.ORDER_URL
    }/form-order-now.php?entityType=CCorporation&entityState=${
      stateCode ?? ""
    }`,
  };

  const top = {
    header: `The Fastest & Easiest Way To Set Up Your ${stateName} Corporation`,
    text: `Join Over <span>500,000</span> Businesses Launched With Incfile Since <span>2004</span>`,
  };

  const whyChooseIncfile = {
    header: `Why Choose Incfile For Your ${stateName} Corporation?`,
    text1: "We're entrepreneurs - just like you.",
    text2: `${addLetter} ${stateName} Corporation can be the fastest and easiest way to start a business in ${stateName}.`,
    text3: `We make registering a company as easy as possible, so you can focus on the important things. Beyond that, we have a full suite of startup services (like banking and bookkeeping), which means Incfile not only helps you get started, but supports you in your continued success as your one-stop shop.`,
    text4: `Our mission is to provide you with a superior and modern experience at an unparalleled value.`,
  };

  return (
    <>
      <SEO
        robots="noindex, follow"
        title={`${stateName} Corporation Filing`}
        description={`Form a Corporation in ${stateName}`}
      />

      <Top
        ovalColor="darkblue"
        imageName="corp-get-started-09122020"
        imageAlt=""
        headlineWidth={700}
        textWidth={400}
        imageMobilePosition="-8%"
      >
        <h1>{top.header}</h1>
        <p>{parse(top.text)}</p>
        <Buttonsbox>
          <Button
            externalLink
            content={buttonInfo}
            theme="primary56"
            arrow
            margin="0 0 32px 0"
          />
          {vimeo ? (
            <ButtonVideo videoID={videoID} vimeo />
          ) : (
            <ButtonVideo videoID={videoID} />
          )}
        </Buttonsbox>
        <RatingRow topMargin="0">
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <Opinions content={opinions} quotes={quotes} stateName={stateName} />
      <PPCWhyChooseIncfile content={whyChooseIncfile} />
      <Care content={care} />
      <Rocket
        externalLink
        textHeading={`Easily Start Your ${stateName} <br>Corporation Today`}
        text1="There's A Reason More Than <b>500,000</b> Businesses <br>Have Started With Incfile"
        text2=" "
        textButton="Launch My Corporation"
        url={`?entityType=CCorporation&entityState=${stateCode ?? ""}`}
      />
    </>
  );
};

export default PPCCorporationLayout;

PPCCorporationLayout.propTypes = {
  state: PropTypes.string,
  vimeo: PropTypes.bool,
};

PPCCorporationLayout.defaultProps = {
  videoID: "oYZShvmf9eQ",
  vimeo: false,
  quotes: [
    {
      text: `Its been an easy process with them. They practically do everything for you and the provide you with all the tools that you need to start your business running.`,
      author: `Martin G`,
      state: ``,
    },
    {
      text: `Life and business are uncertain enough - go ahead and delegate this vital task to a team that has been perfecting their craft for 16 years strong!`,
      author: `Tim A`,
      state: ``,
    },
  ],
};
