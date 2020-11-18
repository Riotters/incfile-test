import styled from "styled-components";
import React from "react";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import Circle from "../../../atoms/icons/circle";
import Checklist from "../../../../components/checklist/checklist";
import { Tabs } from "@bumaga/tabs";
import { color } from "../../../atoms/styles/colors";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/business-checklist-checklists-top-right.inline.svg";
import OvalSVG2 from "../../../../images/ovals/business-checklist-checklist-center-left.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import parse from "html-react-parser";

const Wrapper = styled.section`
  background-color: ${color.blue3};
  padding: 110px 0 100px;
  position: relative;

  .oval {
    overflow: hidden;
  }
`;

class SingleChecklistSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: 0,
      total: props.content.items.length,
      items: props.content.items,
    };
  }

  updateHandler(checklistState) {
    let done = 0;
    checklistState.map(function (item) {
      if (item.isCompleted) ++done;
    });

    this.setState({
      done: done,
      total: this.state.total,
      items: this.state.items,
    });
  }

  render() {
    const { top } = this.props.content;

    return (
      <ContentCenter contentWidth={970} style={{ "margin-top": "40px" }}>
        <Checklist Items={this.state.items} icon={top.icon} title={top.header} iconBgColor={top.background} iconShadowColor={top.shadow} />
      </ContentCenter>
    );
  }
}

const ChecklistSection = ({ className, content, buttonAction }) => (
  <Wrapper>
    <Oval className="oval" width={715} height={720} top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" width={720} height={720} top={30} left="0">
      <OvalSVG2 />
    </Oval>
    {content.checklists.map((checklist) => (
      <SingleChecklistSection content={checklist} />
    ))}
    <ContentCenter>
      <Button content={content.button} theme="primary56" arrow onClick={buttonAction} margin="0 0 24px 0" />
      <Paragraph mixed>{parse(content.text)}</Paragraph>
    </ContentCenter>
  </Wrapper>
);

export default ChecklistSection;
