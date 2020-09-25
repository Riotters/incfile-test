import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../atomic/container";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alig-items: center;
  padding-top: 50px;

  @media (min-width: 769px) {
    padding-top: 150px;
  }

  & > h1,
  h2 {
    text-align: left;
    margin: 35px 0 25px;
  }

  a {
    text-decoration: none;
    color: #797a79;
    font-family: Avenir;
    transition: color 0.3s ease;
    margin-bottom: 16px;

    &:hover {
      color: #fd8550;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <Wrapper>
        <h1>List of all sites</h1>

        <h2>LLC States Information</h2>
        <Link to="/texas-llc/">Texas LLC</Link>

        <h2>Forms</h2>
        <Link to="/forms/ficitious-business-name">Ficitious Business Name (WIP)</Link>

        <h2>Manage Your Company</h2>
        <Link to="/manage-your-company">Manage your company</Link>
        <Link to="/manage-your-company/annual-report">Annual report</Link>
        <Link to="/manage-your-company/business-license">Business license</Link>
        <Link to="/manage-your-company/certificate-of-good-standing">Certificate of good standing</Link>
        <Link to="/manage-your-company/change-of-registered-agent">Change of registered agent</Link>
        <Link to="/manage-your-company/trademark-name-search">Trademark name search</Link>
        <Link to="/manage-your-company/tax-id-ein">EIN tax identification number</Link>
        <Link to="/manage-your-company/dissolution">Filing Articles of Dissolution</Link>
        <Link to="/manage-your-company/foreign-qualification">Foreign Qualification</Link>
        <Link to="/manage-your-company/registered-agent">Registered Agent</Link>
        <Link to="/manage-your-company/llc-s-corp-election">S Corp Tax Election (no details)</Link>
        <Link to="/manage-your-company/corporate-llc-kit">Corporate LLC Kit</Link>
        <Link to="/manage-your-company/filling-business-taxes">Filling Business Taxes</Link>
        <Link to="/manage-your-company/fictitious-business">Fictitious Business</Link>
        <h2>Review Entity Type</h2>
        <Link to="/review-entity-type/nonprofit">Nonprofit (WIP)</Link>
        <Link to="/review-entity-type/c-corporation">C Corporation (no details)</Link>
        <Link to="/review-entity-type/s-corporation">S Corporation (no details)</Link>
        <Link to="/review-entity-type/llc">LLC (no details)</Link>
        <h2>Learning Center Entity</h2>
        <Link to="/learning-center-entity/help-center">Help Center</Link>
        <Link to="/learning-center-entity/help-center-article">Help Center Article (no video)</Link>
        <Link to="/learning-center-entity/comparison-chart">Comparison Chart (no video)</Link>
        <Link to="/learning-center-entity/business-checklist">Business Checklist (WIP)</Link>
        <Link to="/learning-center-entity/annual-report">Annual Report Due Date</Link>
        <Link to="/learning-center-entity/business-license-req">Business License Requirements (no API)</Link>
        <Link to="/learning-center-entity/start-a-business">Business Startup Guides (no details)</Link>
        <Link to="/learning-center-entity/guide-to-start">Guide To Start</Link>
        <Link to="/learning-center-entity/registered-agents">Registered Agents</Link>
        <Link to="/learning-center-entity/s-corp-tax-calculator">S Corp Tax Calculator (WIP)</Link>
        <Link to="/learning-center-entity/sales-tax-calculator">Sales Tax Calculator</Link>
        <Link to="/learning-center-entity/state-filing-times">State Filing Times (no details)</Link>
        <Link to="/learning-center-entity/state-information-california">State Information California (WIP)</Link>
        <Link to="/learning-center-entity/ongoing-filing-requirements">Ongoing Filing Requirements (no details)</Link>
        <Link to="/learning-center-entity/business-resources">Business Resources (WIP)</Link>
        <Link to="/learning-center-entity/business-name-search">Business Name Search (no details)</Link>
        <h2>Other</h2>
        <Link to="/other/form-an-llc">Form An LLC (WIP)</Link>
        <Link to="/other/form-your-corporation">Form Your Corporation (WIP)</Link>
        <Link to="/other/start-an-llc">Start An LLC (WIP)</Link>
        <Link to="/other/general-research-topics">General Research Topics (WIP)</Link>
        <Link to="/other/incfile-coupon-promo-code">Incfile Coupon Promo Code (WIP)</Link>
        <Link to="/other/new-york-entity-search">New York Entity Search (WIP)</Link>
        <Link to="/other/virginia-entity-search">Virginia Entity Search (WIP)</Link>
        <Link to="/other/new-jersey-entity-search">New Jersey Entity Search (WIP)</Link>
        <Link to="/other/daleware-entity-search">Daleware Entity Search (WIP)</Link>
        <Link to="/other/how-it-works">How It Works (WIP)</Link>
        <Link to="/other/free-llc">Free LLC (WIP)</Link>
        <Link to="/other/arizona-publication-newspaper-list">Arizona Publication Newspaper List (WIP)</Link>
        <Link to="/other/after-forming-llc">After Forming LLC (WIP)</Link>
        <Link to="/404">404</Link>
        <Link to="/503">503</Link>
        <h2>Blog</h2>
        <Link to="/blog">Blog (no API)</Link>
        <Link to="/article">Article (no API)</Link>
        <h2>Type of Business</h2>
        <Link to="/type-of-business/airbnb">Airbnb</Link>
        <Link to="/type-of-business/coach">Coach</Link>
        <Link to="/type-of-business/moving-company">Moving Company</Link>
        <Link to="/type-of-business/boutique-clothing-business">Boutique Clothing Business</Link>
        <Link to="/type-of-business/social-media-influencer">Social Media Influencer</Link>
        <Link to="/type-of-business/etsy-business">Etsy Business</Link>
        <Link to="/type-of-business/amazon-business">Amazon Business</Link>
        <Link to="/type-of-business/daycare-business">Daycare business</Link>
        <Link to="/type-of-business/travel-agency">Travel Agency</Link>
        <Link to="/type-of-business/construction-company">Construction Company</Link>
        <Link to="/type-of-business/publishing-company-business">Publishing Company Business</Link>
        <Link to="/type-of-business/tshirt-business">T-Shirt Business</Link>
        <Link to="/type-of-business/food-truck-business">Food Truck Business</Link>
        <Link to="/type-of-business/gym-personal-training">Gym Personal Training</Link>
        <Link to="/type-of-business/real-estate-business">Real Estate Business</Link>
        <Link to="/type-of-business/digital-nomad">Digital Nomad</Link>
        <Link to="/type-of-business/beauty-salon">Beauty Salon</Link>
        <Link to="/type-of-business/cleaning-business">Cleaning Business</Link>
        <Link to="/type-of-business/catering-business">Catering Business</Link>
        <Link to="/type-of-business/unique-business">Unique Business</Link>
        <Link to="/type-of-business/handyman">Handyman</Link>
        <Link to="/type-of-business/bar-nightclub">Bar Nightclub</Link>
        <Link to="/type-of-business/side-business">Side Business</Link>
        <Link to="/type-of-business/franchise-business">Franchise Business</Link>
        <Link to="/type-of-business/event-planning">Event Planning</Link>
        <Link to="/type-of-business/online-business">Online Business</Link>
        <Link to="/type-of-business/teen-business">Teen Business</Link>
        <Link to="/type-of-business/consulting-business">Consulting Business</Link>
        <Link to="/type-of-business/with-no-money-business">With No Money Business</Link>
        <Link to="/type-of-business/photography-business">Photography Business</Link>
        <Link to="/type-of-business/women-business">Women Business</Link>
        <Link to="/type-of-business/restaurant-business">Restaurant Business</Link>
        <Link to="/type-of-business/summer-business">Summer Business</Link>
        <Link to="/type-of-business/dog-walking">Dog Walking</Link>
        <Link to="/type-of-business/brewery-business">Brewery Business</Link>
        <Link to="/type-of-business/blockchain">Blockchain</Link>
        <Link to="/type-of-business/bookstore">Bookstore</Link>
        <Link to="/type-of-business/bed-and-breakfast">Bed and Breakfast</Link>
        <Link to="/type-of-business/laundromat">Laundromat</Link>
        <Link to="/type-of-business/landscaping-business">Landscaping Business</Link>
        <Link to="/type-of-business/home-business">Home Business</Link>
        <h2>Additional sites</h2>
        <Link to="/components">Components</Link>
      </Wrapper>
    </Container>
  </Layout>
);

export default IndexPage;
