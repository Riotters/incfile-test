import React from "react";
import Layout from "../../components/layout";
import PPCCorporationLayoutV2 from "../../atomic/partials/ppc/ppc-corporation-layout-v2";

const FormTexasLLC = () => {
  return (
    <Layout>
      <PPCCorporationLayoutV2
        stateCode="TX"
        content={{
          topHeader: `The Fastest And Cheapest WayTo Setup A Texas Corporation`,
        }}
      />
    </Layout>
  );
};

export default FormTexasLLC;
