import React from "react";
import Layout from "../../components/layout";
import PPCCorporationLayoutV2 from "../../atomic/partials/ppc/ppc-corporation-layout-v2";

const FormALCorporation = () => {
    return (
        <Layout>
            <PPCCorporationLayoutV2
                stateCode="CA"
                content={{
                    topHeader: `The Fastest And Cheapest WayTo Setup A California Corporation`
                }}
            />
        </Layout>
    );
};


export default FormALCorporation;
