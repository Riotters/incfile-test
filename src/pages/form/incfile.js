import React from "react";
import Layout from "../../components/layout";
import PPCIncfileLayout from "../../atomic/partials/ppc/ppc-incfile-layout";

const FormIncfile = () => {
    const content = {
        heroHeadLine: `FREE LLC FILING + STATE FEE`,
        rocket: {
            header: `Ready to Start?`,
            text1: `Getting started is easy. Click the Get Started button below. <br>Fill out the basic form steps and just minutes from now you <br>will have your new LLC.`,
            textButton: `Get Started`
        }
    }

    return (
        <Layout>
            <PPCIncfileLayout content={content} />
        </Layout>
    );
};


export default FormIncfile;
