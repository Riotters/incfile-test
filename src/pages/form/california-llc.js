import React from "react";
import Layout from "../../components/layout";
import PPCLLCLayout from "../../atomic/partials/ppc/ppc-llc-layout";

const FormALLLC = () => {
  return (
    <Layout>
          <PPCLLCLayout
              stateCode="CA"
              videoID="5A75PcGNC54"
              vimeo={false}
          />
    </Layout>
  );
};


export default FormALLLC;
