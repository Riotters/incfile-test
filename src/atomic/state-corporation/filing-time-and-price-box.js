import React from 'react';
import { color } from '../../components/styles/colors';
import GenericTable from "../organisms/tables/generic-table";
import TitleWithInfoBox from "../molecules/blocks/table-title";

const FilingTimeAndPriceBox = ({ data }) => {
    const title = {
        text: `${data?.prices ? data.prices.state : ''} Filing Time & Price`,
        popupContent: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
    }

    const table = {
        headers: false,
        rows: [
            [
                {
                    label: "State Fee:",
                    type: "label",
                    style: { "font-weight": "bold" },
                },
                {
                    label: `$${data?.prices ? data.prices.statefee : 0}`,
                    type: "label",
                    textCenter: true,
                },
            ],
            [
                {
                    label: "State Filing Time:",
                    type: "label",
                    style: { "font-weight": "bold" },
                },
                {
                    label: `${data?.prices ? data.prices.slow : 'loading...'}`,
                    type: "label",
                    textCenter: true,
                },
            ],
            [
                {
                    label: "Expedited Filing Time:",
                    type: "label",
                    style: { "font-weight": "bold" },
                },
                {
                    label: `${data?.prices ? data.prices.fast : 'loading...'}`,
                    type: "label",
                    textCenter: true,
                },
            ],
        ],
        rowColumnsDef: "1fr 2fr",
        headerColumnsDef: "1fr 2fr",
    };

    return (
        <>
            <TitleWithInfoBox
                title={title.text}
                style={{ marginBottom: "24px" }}
                hasInfoBox
                infoBoxText={title.popupContent}
                questionMarkColor={color.blue1} />
            
            <GenericTable
                className="blue3 headers-start left"
                content={table}
                style={{ "margin-bottom": "56px", width: "100%" }}
            />
        </>
    );
}

export default FilingTimeAndPriceBox;