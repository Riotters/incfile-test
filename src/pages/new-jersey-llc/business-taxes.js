import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, businessTaxes } from "../../static/states-llc/new-jersey/home";
import { tabPages } from "../../static/states-llc/new-jersey/general";
import { getFullPricesAndFilings } from '../../api/Api';

const BusinessTaxesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('New Jersey').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="New Jersey Business & Sales Taxes | Incfile.com"
                description="Do you have an New Jersey LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={businessTaxes} />
                </MainPageContent>
            </LLCLayout>
            {/*<Helmet>*/}
                {/*<script type="application/ld+json">*/}
                    {/*{`{*/}
                    {/*"@context": "http://schema.org",*/}
                    {/*"@type": "VideoObject",*/}
                    {/*"name": "Forming an LLC in New Jersey by Incfile",*/}
                    {/*"description": "With an LLC formed in New Jersey, you get the protection and advantages of a corporation, but with much simpler rules to follow. And we all like easy rules, don’t we?  The Garden State is filled with big ideas and new innovations. Forming an LLC is the quickest and most legal way to start your business and make your dream a reality. It protects your personal assets from unpleasant situations, such as getting sued or going bankrupt.   How to Start an LLC in New Jersey:  Step 1: Gather Your Members Step 2: Choose a Unique Business Name Step 3: Provide an Official Address Step 4: Assign a Registered Agent Step 5: Get an Employer Identification Number (EIN) Step 6: Make It Official with the State of New Jersey   Here are some links that will be useful in getting your LLC set up:   - https://www.incfile.com/business-name-search/ - https://www.incfile.com/manage-your-company/registered-agent/  - https://www.incfile.com/manage-your-company/tax-id-ein/ - https://www.incfile.com/ - https://www.incfile.com/manage-your-company/  - https://www.incfile.com/free-llc/",*/}
                    {/*"thumbnailUrl": "https://i.ytimg.com/vi/0sh4OgPJ3kE/default.jpg",*/}
                    {/*"uploadDate": "2020-10-05T19:24:12Z",*/}
                    {/*"duration": "PT1M50S",*/}
                    {/*"embedUrl": "https://www.youtube.com/embed/0sh4OgPJ3kE",*/}
                    {/*"interactionCount": "2"*/}
                    {/*}`}*/}
                {/*</script>*/}
            {/*</Helmet>*/}
        </Layout>
    );
}

export default BusinessTaxesPage;