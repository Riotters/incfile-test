import React from "react";
import Layout from "../../components/layout";
import PPCCorporationLayout from "../../atomic/partials/ppc/ppc-corporation-layout";

const FormALCorporation = () => {
    return (
        <Layout>
            <PPCCorporationLayout stateCode="NY" />
        </Layout>
    );
};


export default FormALCorporation;
