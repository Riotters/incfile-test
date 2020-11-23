import React, { useEffect } from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import TextCheck from "../../molecules/text-blocks/text-check";
import Button from "../buttons/button";
import HelpMarkSVG from "../../../images/icons/help-mark.inline.svg";
import Image from "../../atoms/image/image_nobase64";
import ReactTooltip from "react-tooltip";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
  padding: 40px;
  position: relative;
  border: ${(props) => (props.border ? `solid 1px ${color.grey4}` : "")};
  background-color: ${(props) => (props.color ? props.color : "")};
  border-radius: 5px;
  
  .package-description {
    min-height: 48px;
  }

  & > h4,
  & > p {
    text-align: center;
  }

  & > p {
    max-width: 210px;
    color: ${color.grey1};
  }

  ul {
    width: 100%;
    list-style: none;

    li {
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey1};

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${color.white};
  border: 2px solid ${color.blue1};
  border-radius: 5px;
  padding: 12px 16px;
  margin-bottom: 8px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    font-family: MarkPro, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
    color: ${color.blue1};
    text-transform: uppercase;
  }
`;

const ImageWrapper = styled.div`
  height: 120px;
  width: 120px;
  margin-bottom: 8px;
`;

const Price = styled.span`
  font-family: MarkPro, sans-serif;
  font-size: 40px;
  line-height: 48px;
  color: ${color.black};
  margin-bottom: 24px;
`;

const Package = styled(Whitebox)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin-bottom: 24px;

  span {
    font-family: Avenir, sans-serif;
    font-size: 12px;
    line-height: 1;
    font-weight: 900;
    color: ${color.grey1};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Fee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
  }

  .help-mark {
    display: flex;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
  }

  .text,
  .price {
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  .text {
    color: ${color.grey1};
  }

  .price {
    ${color.black};
  }
`;

const TooltipWrapper = styled.div`
    .tooltip-content {
        font-size: 16px;
        max-width: 350px;
        padding: 40px;
        line-height: 24px;
    }
    
    & > div.show {
        opacity: 1;
        box-shadow: ${shadow.white2};
        border-radius: 16px;
        padding: 0;
    }
`;

const toolTipTexts = {
    "Package fee": "<p class='tooltip-content'>The Package Price covers the cost to create, prepare and file all required legal paperwork on your behalf to properly form your new business entity. It also includes the cost for additional services and products in your chosen package.</p>",
    "State fee": "<p class='tooltip-content'>The State Fee is what your selected state charges to file a new business entity. This amount is pass-through and goes 100% directly to the Secretary of State; Incfile does not keep any part of this fee.</p>"
};

const PricingCard = ({ className, content, image, compacted = false, ...rest }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });
  return (
    <Wrapper className={className} {...rest}>
        <TooltipWrapper>
            <ReactTooltip id={"benefitTooltip-" + content.header} />
        </TooltipWrapper>
        {content.variant && (
        <Box>
          <span>{content.variant}</span>
        </Box>
      )}
      <Heading size="4" marginBottom="16">
        {content.header}
      </Heading>
      <Paragraph bottomMargin="8" className="package-description">{content.text}</Paragraph>
      <ImageWrapper>
        <Image filename={image} />
      </ImageWrapper>
      <Price>${content.price}</Price>
      <Button theme="primary48" content={content.button} margin="0 0 32px 0" wrap arrow />
      <ul style={{ marginBottom: "48px" }}>
        {content.fees.map((fee) => (
          <li>
            <Fee>
              <div>
                <span className="help-mark" data-tip={ toolTipTexts[ fee.text ] } data-html={true} data-type="light" data-for={"benefitTooltip-" + content.header}>
                  <HelpMarkSVG />
                </span>
                <span className="text">{fee.text}</span>
              </div>
              <span className="price">${fee.price}</span>
            </Fee>
          </li>
        ))}
      </ul>
        {!compacted && (
            <>
                {content.include && (
                    <Package>
                        <span>{content.include}</span>
                    </Package>
                )}
                <ul className="list">
                    {content.list &&
                    content.list.map((item) => (
                        <li>
                            <TextCheck>{item}</TextCheck>
                        </li>
                    ))}
                </ul>
                {content.fee && <Paragraph bottomMargin="6">{content.fee}</Paragraph>}
            </>
        )}
    </Wrapper>
  );
};

export default PricingCard;
