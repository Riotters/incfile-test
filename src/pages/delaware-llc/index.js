import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import LLCLayout from "../../atomic/partials/states-llc/louisiana";
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, howToGuide } from "../../static/states-llc/delaware/home";
import { tabPages } from "../../static/states-llc/delaware/general";
import { getFullPricesAndFilings } from '../../api/Api';
import { Helmet } from "react-helmet";

function DelawareIndexPage() {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Delaware').then(data => {
            setDataApi(data);
        });
    }, []);
    
    return (
        <Layout>
            <SEO title="LLCs in Delaware | Guide to Forming an LLC in Delaware" description="Ready to form your Delaware LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} nonDIY />
                <MainPageContent>
                    <ContentMap content={howToGuide} data={dataApi} />
                </MainPageContent>
            </LLCLayout>

            <Helmet>
                <script type="application/ld+json">
                    {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Forming an LLC in Delaware by Incfile",
                    "description": "If you’re looking to start a business in Delaware, you’re in luck. There’s zero sales tax and a few unique state laws that benefit businesses, making it a popular place to form an LLC.   If you’re forming an LLC in Delaware, you’ll benefit from easier maintenance and compliance, great tax benefits and personal asset protection.  To form an LLC in Delaware, first round up all the necessary information of all co-founders.   Second, pick a unique name that’s legally available in Delaware. Check out Incfile’s Business Name Search Tool to know if your LLC name is available.   Next, provide your business address and name a Registered Agent. You’ll get one full free year of Registered Agent service when you file your LLC with us for $0 plus state fee!   Then, you’ll need an EIN from the IRS.   And finally, file a Certificate of Formation with the Delaware Division of Corporations.   And you are on!  Don’t forget to check out the links below and get all the help you need:   - https://www.incfile.com/delaware-llc/  - https://www.incfile.com/business-name-search/  - https://www.incfile.com/manage-your-company/registered-agent/ - https://www.incfile.com/manage-your-company/tax-id-ein/ - https://www.incfile.com/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/imnAJolDWoU/default.jpg",
                    "uploadDate": "2020-09-07T17:07:19Z",
                    "duration": "PT1M5S",
                    "embedUrl": "https://www.youtube.com/embed/imnAJolDWoU",
                    "interactionCount": "51"
                }`}
                </script>
            </Helmet>
        </Layout>
    );
}

export default DelawareIndexPage;
