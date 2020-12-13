import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

// Components
import Button from "../molecules/buttons/button";
import ActionButton from "../molecules/buttons/button-action";
import ArrowLink from "../molecules/buttons/text";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";
import IconListColorBox from "../molecules/text-blocks/icon-h4-list-color";
import Accordion from "../organisms/accordion/accordion";
import NumericList from "../organisms/lists/numeric-boxed-list";
import Image from "../atoms/image/image";
import { IconTextBox } from "../molecules/text-blocks/icon-text-box";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import { TextSpacedBox } from "../molecules/text-blocks/text-spaced-box";
import AccordionWithCheckmark from "../organisms/acccordion-with-checkboxes";
import BusinessNameSearchForm from "../organisms/forms/business-name-search-form";
import ToolsList from "../organisms/lists/tools-list";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import GenericTable from "../organisms/tables/generic-table";
import LLCTable from "../organisms/tables/llc-table";
import Whitebox from "../atoms/boxes/white-box";
import IconChildrenColorBox from "../molecules/text-blocks/icon-h4-children-color";
import RoundedTopImageBox from "../molecules/mixed-blocks/top-image-box-rounded";
import AnnualReportBoxOnly from "../states-llc/annual-report-box-only";
import FilingRequirementBox from "../states-llc/filing-requirement-box";
import LightBoxVideo from "../../components/LightBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
  }
`;

const Content = ({ content, data, modalAction }) => {
  return (
    <Wrapper>
      {content.map((item, i) => (
        <>
          {item.type === "header" && (
            <Heading
              size={item.size}
              bottomMargin={item.marginBottom}
              template={item.template}
              left={item.left}
              style={item.style}
            >
              {item._no_parse ? item.content : parse(item.content)}
            </Heading>
          )}

          {item.type === "text" && (
            <Paragraph big mixed bottomMargin={item.marginBottom}>
              {(item?.content && item?.content.length > 0) ? parse(item.content) : ''}
            </Paragraph>
          )}

          {item.type === "arrow-link" && (
            <ArrowLink
              content={item.content}
              bottomMargin={item.marginBottom}
            />
          )}
					{item.type === "list-dot" && (
						<IconListColorBox
							color={item.color}
							content={item.content}
							curve={item.curve}
							curveColor={item.curveColor}
							rounded
							bottomMargin={item.marginBottom}
						/>
					)}
					{item.type === "boxes" && (
						<div style={{ "margin-bottom": item.marginBottom + "px" }}>
							{item.content.map((box) => (
								<IconTextBox content={box} />
							))}
						</div>
					)}
					{item.type === "taxes" && (
						<ul style={{ "margin-bottom": item.marginBottom + "px" }}>
							{item.content.map((box) => (
								<TextSpacedBox content={box} useListType={item.useListType} />
							))}
						</ul>
					)}
					{item.type === "button" && (
						<Button
							content={item.content}
							theme={item.theme}
							arrow={item.arrow ?? true}
							margin={
								item.marginBottom ? `0 auto ${item.marginBottom}px 0` : false
							}
							marginSM={item.marginBottom ? false : "24px auto 24px 0"}
							marginMD={item.marginBottom ? false : "42px auto 56px 0"}
						/>
					)}
                    {item.type === "modal-trigger" && (typeof modalAction === "function") && (
                        <ActionButton
                            content={item.content}
                            theme={item.theme}
                            arrow={item.arrow ?? true}
                            onClick={modalAction}
                            margin={
                              item.marginBottom ? `0 auto ${item.marginBottom}px 0` : false
                            }
                            marginSM={item.marginBottom ? false : "24px auto 24px 0"}
                            marginMD={item.marginBottom ? false : "42px auto 56px 0"}
                        />
                    )}
					{item.type === "buttons" && (
						<div style={{ "margin-bottom": item.marginBottom + "px" }}>
							<Buttonsbox>
								{item.content.map((button) => (
									<Button
										content={button.content}
										theme={button.theme}
										arrow={button.arrow ?? true}
										margin="0 16px 0 0"
									/>
								))}
							</Buttonsbox>
						</div>
					)}
					{item.type === "tabbed-checklist" && (
						<AccordionWithCheckmark
							content={item.content}
							tab
							curve={item.curve}
							listColor={item.listColor}
							curveRight={item.curveRight}
							bottomMargin={item.marginBottom}
						/>
					)}
					{item.type === "business-name-search" && (
						<div style={{ "margin-bottom": item.marginBottom + "px" }}>
							<BusinessNameSearchForm noMaxWidth content={item.content} />
						</div>
					)}
					{item.type === "accordion" && (
						<Accordion
							tab
							content={item.content}
							bottomMargin={item.marginBottom}
							header={item.header}
                            action={modalAction}
						/>
					)}
					{item.type === "numeric-list" && (
						<NumericList
							noBox={item.noBox ?? false}
							content={item.content}
							bottomMargin={item.marginBottom}
						/>
					)}
					{item.type === "image" && (
						<Image filename={item.content} bottomMargin={item.marginBottom} />
					)}
					{item.type === "tools-list" && (
						<div style={{ "margin-bottom": "48px" }}>
							<ToolsList tools={item.content} tab={item.tab} />
						</div>
					)}
					{item.type === "svg-color-text-box" && (
						<div
							style={{
								"margin-bottom": item.marginBottom + "px",
								"margin-top": "0",
							}}
						>
							{item.content.map((box) => (
								<TextBlockWithImage
									SvgImage={box.svg}
									paddingLeft={0}
									paddingRight={0}
									paddingBottom={0}
									boxShadow={box.boxShadow}
									textBackgroundColor={box.textBackgroundColor}
									style={{ "margin-top": box.marginTop }}
									imageBackgroundColor={box.backgroundColor}
									imageShadowColor={box.shadowColor}
									width={100}
									widthUnit="%"
								>
									<Heading size={3} template={4}>
										{box.header}
									</Heading>
									<Paragraph mixed={true} bottomMargin="0">
										{parse(box.text)}
									</Paragraph>
									{box.link && (
										<ArrowLink
											content={box.link}
											bottomMargin={24}
											topMargin={24}
										/>
									)}
								</TextBlockWithImage>
							))}
						</div>
					)}
					{item.type === "table" && (
						<GenericTable
							responsive={item.responsive}
							settings={item.settings}
							style={item.style}
							content={item.content}
						/>
					)}
					{item.type === "table-simple" && <LLCTable content={item.content} />}
					{item.type === "whiteboxes" &&
						item.content.map((box) => (
							<div
								className="whitebox-wrapper"
								style={{ "margin-bottom": box.marginBottom ?? "8px" }}
							>
								<Whitebox padding="32px 40px">
									<ArrowLink content={box.link} bottomMargin={24} />
									<Paragraph bottomMargin={24} mixed={true}>
										{parse(box.text)}
									</Paragraph>
								</Whitebox>
							</div>
						))}
					{item.type === "colorbox" && (
						<IconChildrenColorBox
							curve={item.curve}
							curveColor={item.curveColor}
							rounded
							color={item.color}
							Icon={item.icon}
							bottomMargin={item.marginBottom}
						>
							{item.header && (
								<Heading size={4} bottomMargin={24}>
									{item.header}
								</Heading>
							)}
							<Paragraph mixed bottomMargin={32}>
								{item.text}
							</Paragraph>
							{item.buttons && (
								<Buttonsbox>
									{item.buttons.map((button) => (
										<Button
											content={button.content}
											theme={button.theme}
											arrow={button.arrow ?? true}
											margin="0 16px 0 0"
										/>
									))}
								</Buttonsbox>
							)}
						</IconChildrenColorBox>
					)}
					{item.type === "rounded-boxes" && (
						<Grid marginBottom={item.marginBottom ?? 24}>
							{item.content.map((box) => (
								<RoundedTopImageBox
									roundLeft={box.roundLeft}
									roundRight={box.roundRight}
									image={box.image}
									content={box.content}
									noShadow={box.noShadow}
									color={box.color}
									align="center"
								/>
							))}
						</Grid>
					)}

          {item.type === "dynamic_ar_box" && (
            <AnnualReportBoxOnly data={data} />
          )}

          {item.type === "dynamic_filing_requirement" && (
            <FilingRequirementBox data={data} margin="0 0 42px 0" />
          )}

          {item.type === "video" && (
            <LightBoxVideo
              thumbnailVideo={item.image}
              videoID={item.id}
              bottomMargin={item.marginBottom}
            />
          )}
        </>
      ))}
    </Wrapper>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: ${(props) => props.marginBottom}px;

  grid-gap: 30px;
`;

export default Content;
