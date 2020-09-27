import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import TopSection from '../../atomic/sections/other/business-name-generator/top';
import UniqueSection from '../../atomic/sections/other/business-name-generator/unique';
import WhyBrandNameSection from '../../atomic/sections/other/business-name-generator/why-brand-name';


const BusinessNameGenerator = () => (
    <Layout>
        <SEO />
        <TopSection />
        <WhyBrandNameSection />
        <UniqueSection />        
    </Layout>
);

export default BusinessNameGenerator;