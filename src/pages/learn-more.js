import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import ButtonsBox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import Resources from "../atomic/sections/learn-more/resources";

const LearnMore = () => (
    <Layout>
        <SEO title="Everything about forming a business at your fingertips."
             description="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum."/>

        <Top ovalColor="purple-2" imageName="research-tools" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>Everything about forming a business at your fingertips.</h1>
            <p>Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{text: `Read FAQ`, url: `/`}} />
            </ButtonsBox>
        </Top>

        <Resources />
    </Layout>
);

export default LearnMore;
