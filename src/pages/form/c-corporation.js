import React from "react";
import PPCCorporationLayout from "../../atomic/partials/ppc/ppc-corporation-layout";
import PPCIncfileLayout from "../../atomic/partials/ppc/ppc-incfile-layout";
import PPCLLCLayout from "../../atomic/partials/ppc/ppc-llc-layout";
import Layout from "../../components/layout";

const FormALLLC = () => {
  return (
    <Layout>
        <PPCCorporationLayout stateCode="AL" />
    </Layout>
  );
};


export default FormALLLC;
