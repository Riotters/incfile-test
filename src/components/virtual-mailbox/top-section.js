import React from "react";

import Top from "../../atomic/partials/top";
//import Button from "../../atomic/molecules/buttons/button";
//import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";

const VirtualMailboxTopSection = ({ content, state }) => {
    return (
        <>
            <Top imageName="mr-contact-new-sales-9845" imageAlt={`virtual mailbox in ${state}`} ovalColor="green" headlineWidth="500" textWidth="800">
                <h1>{content.header}</h1>
                <p>{content.text}</p>

                {/* Temporary disaled this button --- PLEASE DO NOT remove */}
                {/* <Buttonsbox>
                    <Button externalLink content={content.button[0]} theme="primary56" arrow />
                </Buttonsbox> */}
            </Top>
        </>
    );
};

export default VirtualMailboxTopSection;