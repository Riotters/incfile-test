import React from "react";
import Layout from "../../components/layout";
import PPCIncfileLayout from "../../atomic/partials/ppc/ppc-incfile-layout";

const FormTexasLLC = () => {
    const content = {
        heroHeadLine: `FREE LLC FILING + TEXAS STATE FEE`,
        heroTitle: `The Fastest & Easiest Way To Set Up Your Texas LLC`,
        rocket: {
            header: `Ready to Start?`,
            text1: `Getting started is easy. Click the Get Started button below. <br>Fill out the basic form steps and just minutes from now you <br>will have your new Texas LLC.`,
            textButton: `Launch My LLC`
        }
    }
    return (
        <Layout>
            <PPCIncfileLayout
                content={content}
                stateCode="TX"
                entityType="LLC"
                videoID="wGAzGRmy6m8"
                vimeo={false}
                seoTitle="The Fastest And Cheapest Way To Setup A Texas LLC"
                seoDesc="Form an LLC (Limited Liability Company) in Texas"
            />
        </Layout>
    );
};

export default FormTexasLLC;
