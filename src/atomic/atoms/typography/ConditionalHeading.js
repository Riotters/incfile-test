import {PHeading} from "./p-to-heading";
import parse from "html-react-parser";
import {Heading} from "./heading";
import React from "react";


const ChooseHeadingType = ({ paragraphHeader, headerSize, headerTemplateSize, content, ...rest }) => {
    return (
        <>
            {paragraphHeader && (
                <PHeading size={headerSize} template={headerTemplateSize} {...rest}>{parse(content)}</PHeading>
            )}
            {!paragraphHeader && (
                <Heading size={headerSize} template={headerTemplateSize} {...rest}>{parse(content)}</Heading>
            )}
        </>
    );
};

export default ChooseHeadingType;