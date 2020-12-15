import React from "react";
import Layout from "../../components/layout";
import PPCLLCLayout from "../../atomic/partials/ppc/ppc-llc-layout";

const FormALCorporation = () => {
    return (
        <Layout>
            <PPCLLCLayout
                content={{
                    top: {
                        header: `Empiece su Compania`,
                        text: `Forme su empresa por solo $0 + la cuota del estado. Para hablar con un representante en español marque 844.830.8267.`
                    }
                }}
            />
        </Layout>
    );
};

export default FormALCorporation;
