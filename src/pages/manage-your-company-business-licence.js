import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Colorbox from "../components/color-box"
import TextCenterLayout from "../components/partials/layouts/text-center"
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/sections/left-image-right-content";
import Articles from "../components/partials/sections/articles";
import ArrowLink from "../components/arrow-link";
import { color } from "../components/styles/colors"
import BusinessLicenseSVG from "../images/icons/business-license.inline.svg"


const BusinessOwnerResponsibilities = styled.section`
    position: relative;

    h3, p {
        max-width: 100%;
        padding-bottom: 24px;
    }

    h3 {
        &.pt72 {
            padding-top: 72px;
        }
    }

    p {
        &.pb32 {
            padding-bottom: 32px; 
        }

        &.pb40 {
            padding-bottom: 40px; 
        }
    }

    .bluebox, .orangebox {
        margin-bottom: 48px;
    }

    .bluebox {
        margin-top: 48px;
    }
`;

const RequirementsByState = styled.section`
    background-color: ${color.blue3};
    padding-top: 148px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1frl
    grid-gap: 30px;
    position: relative;
`;

const Buttonsbox = styled.div`
  display: flex;
`;

const ManageYourCompany = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-license" imageAlt="Mr Bulb with business license">
      <h1>Business License Research Package</h1>
      <p>Only $99</p>
      <Buttonsbox>
        <Button href="#" theme="primary56" width="200px" arrow>
          Get started
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
        <ImageContent image="registered-agents" paddingTop="60">
            <h3>Business Owner Responsibilities</h3>
            <p>
                As a business owner, you are responsible for making sure your business has the proper federal, state and local licenses and permits to operate legally. 
                A business license ensures you are legitimately doing business in a particular locale. Every new business must apply for a business license. 
                But, don't be fooled, your corporation or LLC may need more than one license, or permit, to fully operate at the state level.
            </p>
            <p className="pb40">
                At Incfile we take the guesswork out of how to obtain a business license and the necessary permits. 
                Not only do we inform you of the necessities, we offer to do the paperwork for you.
            </p>
            <Button href="#" theme="primary56" margin="0 auto 0 0" arrow>
                Get the Business License Research package
            </Button>
            <Colorbox className="bluebox" theme="icon" Icon={BusinessLicenseSVG} color={color.babyblue3} curve curveColor={color.babyblue1}>
                <h4>What is a Business License?</h4>
                <p>
                    A business license authorizes a company to "do business" in a certain geographical jurisdiction. It is a certificate that authenticates your 
                    company is properly registered with the particular county or city in which your office(s) are located.
                </p>
            </Colorbox>
            <p className="pb32">
                The cost and policies governing an LLC do vary from state to state. Check out our LLC State Information resource for additional info on your state.
            </p>
            <ArrowLink>Incfile's Business License Search Tool</ArrowLink>
            <h3 className="pt72">What Licenses Does My Business Need?</h3>
            <p>
                There are two categories of business licenses, namely federal and state. This is just the first step in operating legally in both your jurisdiction and in the country.
            </p>
            <p>
                The federal government often requires a license to be obtained when you have a very specialized industry or one with a high level of liability. 
                Some examples include serving alcohol, running a fishery, opening a gun shop, or transporting live animals across state lines.
            </p>
            <p>
                The state government always requires a license to operate within your particular locale and rules can differ based on whether your LLC or corporation is inside city limits or not. 
                For example, you'll need to research whether you can have particular types of home businesses, especially when living in the city or a multi-family dwelling.
            </p>
            <h3>What Licenses Does My Business Need?</h3>
            <p>
                There are two categories of business licenses, namely federal and state. This is just the first step in operating legally in both your jurisdiction and in the country.
            </p>
            <Colorbox className="orangebox" color={color.orange3} dotsColor={color.orange1}>
                <h4>You might need a permit if...</h4>
                <ul>
                    <li>Your LLC or corporation plans to serve alcohol or food</li>
                    <li>You will need to build or add a structure to your company's building.</li>
                    <li>Your business is going to construct a building or structure on new land.</li>
                    <li>Your LLC plans to put up an exterior sign.</li>
                    <li>You want to designate street parking for your business.</li>
                    <li>Your industry is governed by a state association.</li>
                </ul>
            </Colorbox>
            <p>
                This is not an exhaustive list by any means, therefore, working with Incfile to identify every situation is a key factor in starting your business off right.
            </p>
            <Buttonsbox>
                <Button href="#" theme="primary56" arrow marginMD="0 16px 0 0">
                    Have Incfile research for you
                </Button>
                <Button href="#" theme="secondary56" arrow>
                    Do the research yourself
                </Button>
            </Buttonsbox>
            <h3 className="pt72">How Do I Apply For A Business License?</h3>
            <span>Place for numeric boxes</span>
        </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
        <TextCenterLayout 
            headline="Business License and Permit Requirements by State" 
            text="Every state has different licensing needs based on the type of business you've incorporated, where it's located and the government rules in that state. 
            We will research your business license needs for you with our Business License Research Package, but you can also do initial research yourself with the following resources:"
            headlineWidth="700"
            linkText="Business License Research Package"
            linkUrl="#"
        />
        <Grid>
            
        </Grid>
    </RequirementsByState>
    <Articles />
  </Layout>
);

export default ManageYourCompany;
