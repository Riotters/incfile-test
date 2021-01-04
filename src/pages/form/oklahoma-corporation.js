import React from "react";
import Layout from "../../components/layout";
import PPCCorporationLayout from "../../atomic/partials/ppc/ppc-corporation-layout-v2";

const FormALCorporation = () => {
  return (
    <Layout>
      <PPCCorporationLayout
        stateCode="OK"
        content={{
          topHeader: `The Fastest And Cheapest Way To Setup An Oklahoma Corporation`,
        }}
      />
    </Layout>
  );
};

export default FormALCorporation;
