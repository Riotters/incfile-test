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
        <Link to="/llc-state-information">LLC State Information</Link>
        <Link to="/alabama-llc/">Alabama LLC</Link>
        <Link to="/alaska-llc/">Alaska LLC</Link>
        <Link to="/arizona-llc/">Arizona LLC</Link>
        <Link to="/arkansas-llc/">Arkansas LLC</Link>
        <Link to="/california-llc/">California LLC</Link>
        <Link to="/colorado-llc/">Colorado LLC</Link>
        <Link to="/connecticut-llc/">Connecticut LLC</Link>
        <Link to="/delaware-llc/">Delaware LLC</Link>
        <Link to="/florida-llc/">Florida LLC</Link>
        <Link to="/georgia-llc/">Georgia LLC</Link>
        <Link to="/hawaii-llc/">Hawaii LLC</Link>
        <Link to="/idaho-llc/">Idaho LLC</Link>
        <Link to="/indiana-llc/">Indiana LLC</Link>
        <Link to="/iowa-llc/">Iowa LLC</Link>
        <Link to="/illinois-llc/">Illinois LLC</Link>
        <Link to="/kansas-llc/">Kansas LLC</Link>
        <Link to="/kentucky-llc/">Kentucky LLC</Link>
        <Link to="/louisiana-llc/">Louisiana LLC</Link>
        <Link to="/maine-llc/">Maine LLC</Link>
        <Link to="/maryland-llc/">Maryland LLC</Link>
        <Link to="/massachusetts-llc/">Massachusetts LLC</Link>
        <Link to="/michigan-llc/">Michigan LLC</Link>
        <Link to="/minnesota-llc/">Minnesota LLC</Link>
        <Link to="/mississippi-llc/">Mississippi LLC</Link>
        <Link to="/missouri-llc/">Missouri LLC</Link>
        <Link to="/montana-llc/">Montana LLC</Link>
        <Link to="/nebraska-llc/">Nebraska LLC</Link>
        <Link to="/new-york-llc/">New York LLC</Link>
        <Link to="/nevada-llc/">Nevada LLC</Link>
        <Link to="/new-hampshire-llc/">New Hampshire LLC</Link>
        <Link to="/new-jersey-llc/">New Jersey LLC</Link>
        <Link to="/new-mexico-llc/">New Mexico LLC</Link>
        <Link to="/north-carolina-llc/">North Carolina LLC</Link>
        <Link to="/north-dakota-llc/">North Dakota LLC</Link>
        <Link to="/ohio-llc/">Ohio LLC</Link>
        <Link to="/oklahoma-llc/">Oklahoma LLC</Link>
        <Link to="/oregon-llc/">Oregon LLC</Link>
        <Link to="/pennsylvania-llc/">Pennsylvania LLC</Link>
        <Link to="/rhode-island-llc/">Rhode Island LLC</Link>
        <Link to="/south-carolina-llc/">South Carolina LLC</Link>
        <Link to="/south-dakota-llc/">South Dakota LLC</Link>
        <Link to="/tennessee-llc/">Tennessee LLC</Link>
        <Link to="/texas-llc/">Texas LLC</Link>
        <Link to="/utah-llc/">Utah LLC</Link>
        <Link to="/vermont-llc/">Vermont LLC</Link>
        <Link to="/virginia-llc/">Virginia LLC</Link>
        <Link to="/washington-llc/">Washington LLC</Link>
        <Link to="/washington-dc-llc/">Washington DC LLC</Link>
        <Link to="/west-virginia-llc/">West Virginia LLC</Link>
        <Link to="/wisconsin-llc/">Wisconsin LLC</Link>
        <Link to="/wyoming-llc/">Wyoming LLC</Link>

        <h2>Contact Pages</h2>
        <Link to="/contact/existing-clients/">Existing clients</Link>
        <Link to="/contact/new-sales/">New Sales</Link>

        <h2>About</h2>
        <Link to="/why-choose-incfile">Why Choose Incfile</Link>
        <Link to="/about/">About us</Link>

        <h2>Manage Your Company</h2>
        <Link to="/manage-your-company/">Manage your company</Link>
        <Link to="/manage-your-company/annual-report/">Annual report</Link>
        <Link to="/manage-your-company/amendment/">Amendment</Link>
        <Link to="/business-license-research-package/">Business license</Link>
        <Link to="/manage-your-company/certificate-of-good-standing/">Certificate of good standing</Link>
        <Link to="/manage-your-company/change-of-registered-agent/">Change of registered agent</Link>
        <Link to="/trademark-name-search/">Trademark name search</Link>
        <Link to="/manage-your-company/tax-id-ein/">EIN tax identification number</Link>
        <Link to="/manage-your-company/dissolution/">Filing Articles of Dissolution</Link>
        <Link to="/manage-your-company/foreign-qualification/">Foreign Qualification</Link>
        <Link to="/manage-your-company/registered-agent/">Registered Agent</Link>
        <Link to="/llc-s-corp-election/">S Corp Tax Election (no details)</Link>
        <Link to="/manage-your-company/corporatellc-kit/">Corporate LLC Kit</Link>
        <Link to="/business-accounting/">Filling Business Taxes</Link>
        <Link to="/fictitious-business-or-trade-name/">Fictitious Business</Link>
        <Link to="/home-page-v3/">Home Page v3</Link>
        <Link to="/manage-your-company/compare-state-filling-time">Compare State Filling Time</Link>

        <h2>Review Entity Types</h2>
        <Link to="/start-your-company/">Start Your Company</Link>
        <Link to="/what-is-non-profit-corporation/">Nonprofit (WIP)</Link>
        <Link to="/what-is-c-corporation/">C Corporation (no details)</Link>
        <Link to="/what-is-s-corporation/">S Corporation (no details)</Link>
        <Link to="/limited-liability-company/">LLC (no details)</Link>

        <h2>Learning Center Entity</h2>
        <Link to="/help-center">Help Center</Link>
        <Link to="/learning-center-entity/help-center-article">Help Center Article</Link>
        <Link to="/business-entity-comparison/">Comparison Chart</Link>
        <Link to="/business-checklist">Business Checklist (WIP)</Link>
        <Link to="/learning-center-entity/annual-report">Annual Report Due Date</Link>
        <Link to="/business-license-tool/">Business License Tools (no API)</Link>
        <Link to="/start-a-business/">Business Startup Guides (no details)</Link>
        <Link to="/guides-start-business/">Guide To Start a Business</Link>
        <Link to="/registered-agents/">Registered Agents</Link>
        <Link to="/s-corporation-tax-calculator/">S Corp Tax Calculator (WIP)</Link>
        <Link to="/sales-tax-calculator/">Sales Tax Calculator</Link>
        <Link to="/state-filing-times/">State Filing Times (no details)</Link>
        <Link to="/ongoing-filing-requirements/">Ongoing Filing Requirements (no details)</Link>
        <Link to="/learning-center-entity/business-resources/">Business Resources (WIP)</Link>
        <Link to="/learning-center-entity/business-name-search/">Business Name Search (no details)</Link>
        <Link to="/business-entity-quiz">Business Entity Quiz</Link>

        <Link to="/learning-center-entity/alaska-corporation">Alaska Corporation</Link>
        <h2>Corporation State Information</h2>
        <Link to="/corporation-state-information">Corporation State Information</Link>
        <Link to="/corporation-state-information/california-corporation">California Corporation (WIP)</Link>

        <h2>Virtual Mailbox</h2>
        <Link to="/virtual-mailbox/">Virtual mailbox</Link>
        <Link to="/arizona-virtual-mailbox/">Arizona Virtual mailbox</Link>
        <Link to="/california-virtual-mailbox/">California Virtual mailbox</Link>
        <Link to="/colorado-virtual-mailbox/">Colorado Virtual mailbox</Link>
        <Link to="/delaware-virtual-mailbox/">Delaware Virtual mailbox</Link>
        <Link to="/florida-virtual-mailbox/">Florida Virtual mailbox</Link>
        <Link to="/georgia-virtual-mailbox/">Georgia Virtual mailbox</Link>
        <Link to="/illinois-virtual-mailbox/">Illinois Virtual mailbox</Link>
        <Link to="/massachusetts-virtual-mailbox/">Massachusetts Virtual mailbox</Link>
        <Link to="/nevada-virtual-mailbox/">Nevada Virtual mailbox</Link>
        <Link to="/new-york-virtual-mailbox/">New York Virtual mailbox</Link>
        <Link to="/new-mexico-virtual-mailbox/">New Mexico Virtual mailbox</Link>
        <Link to="/new-jersey-virtual-mailbox/">New Jersey Virtual mailbox</Link>
        <Link to="/north-carolina-virtual-mailbox/">North Carolina Virtual mailbox</Link>
        <Link to="/ohio-virtual-mailbox/">Ohio Virtual mailbox</Link>
        <Link to="/south-carolina-virtual-mailbox/">South Carolina Virtual mailbox</Link>
        <Link to="/oregon-virtual-mailbox/">Oregon Virtual mailbox</Link>
        <Link to="/south-dakota-virtual-mailbox/">South Dakota Virtual mailbox</Link>
        <Link to="/texas-virtual-mailbox/">Texas Virtual mailbox</Link>
        <Link to="/pennsylvania-virtual-mailbox/">Pennsylvania Virtual mailbox</Link>
        <Link to="/utah-virtual-mailbox/">Utah Virtual mailbox</Link>
        <Link to="/virginia-virtual-mailbox/">Virginia Virtual mailbox</Link>
        <Link to="/washington-virtual-mailbox/">Washington Virtual mailbox</Link>

        <h2>Search your name availability</h2>
        <Link to="/entity-search/new-york-entity-search">New York Entity Search</Link>
        <Link to="/entity-search/virginia-entity-search">Virginia Entity Search</Link>
        <Link to="/entity-search/new-jersey-entity-search">New Jersey Entity Search</Link>
        <Link to="/entity-search/delaware-entity-search">Daleware Entity Search</Link>
        <Link to="/entity-search/michigan-entity-search">Michigan Entity Search</Link>
        <Link to="/entity-search/florida-entity-search">Florida Entity Search</Link>
        <Link to="/entity-search/georgia-entity-search">Georgia Entity Search</Link>
        <Link to="/entity-search/texas-entity-search">Texas Entity Search</Link>

        <h2>Other</h2>
        <Link to="/form-an-llc/">Form An LLC (WIP)</Link>
        <Link to="/form-your-corporation/">Form Your Corporation</Link>
        <Link to="/form-an-llc-bk/">Start An LLC (no details)</Link>
        <Link to="/general-research-topics/">General Research Topics</Link>
        <Link to="/incfile-coupon-promo-code/">Incfile Coupon Promo Code</Link>
        <Link to="/how-it-works/">How It Works</Link>
        <Link to="/free-llc/">Free LLC</Link>
        <Link to="/incfile-reviews/">Customer Service Reviews</Link>
        <Link to="/reviews/">Testimonials</Link>
        <Link to="/arizona-publication-newspaper-list/">Arizona Publication Newspaper List</Link>
        <Link to="/after-forming-llc/">After Forming LLC</Link>
        <Link to="/business-name-generator/">Business Name Generator</Link>
        <Link to="/affiliates">Affiliates</Link>
        <Link to="/incorporate">Incorporate now</Link>
        <Link to="/404">404</Link>
        <Link to="/503">503</Link>
        <Link to="/privacy-policy/">Privacy policy</Link>
        <Link to="/cancellation-policy/">Cancellation policy</Link>
        <Link to="/legal-disclaimer/">Legal disclaimer</Link>
        <Link to="/glossary/">Glossary</Link>

        <h2>Research Topics</h2>
        <Link to="/research-topics/business-taxes">Business taxes</Link>
        <Link to="/research-topics/business-taxes/sellers-permit">How to Get a Seller's Permit?</Link>
        <Link to="/research-topics/business-taxes/minimizing-tax-expenses">Minimizing tax expenses</Link>
        <Link to="/research-topics/business-taxes/tax-advantages">Which entity offers the best tax advantages?</Link>
        <Link to="/research-topics/business-taxes/s-corp-taxing">How is an S Corporation Taxed?</Link>
        <Link to="/research-topics/business-taxes/nonprofit-tax-exempt">Is nonprofit the same as tax exempt?</Link>
        <Link to="/research-topics/business-taxes/c-corp-taxing">How is a C Corporation Taxed?</Link>

        <Link to="/research-topics/c-corporation-info">C-Corporation</Link>
        <Link to="/research-topics/c-corporation-info/corp-seal">What is a Corporate Seal?</Link>
        <Link to="/research-topics/c-corporation-info/tax-advantages">Which entity offers the best tax advantages?</Link>
        <Link to="/research-topics/c-corporation-info/filing-a-c-corporation">The benefits of filing a C-corporation</Link>
        <Link to="/research-topics/c-corporation-info/llcs-vs-c-corporation">LLCs vs C-Corporation: Which Is Best for Your Business?</Link>
        <Link to="/research-topics/c-corporation-info/corp-managing">How is a Corporation Managed?</Link>
        <Link to="/research-topics/c-corporation-info/c-corp-taxing">How is a C Corporation Taxed?</Link>
        <Link to="/research-topics/c-corporation-info/corporate-meetings">Am I Required to Hold Corporate Meetings?</Link>
        <Link to="/research-topics/c-corporation-info/corporation-need">How Many Shares of Stock will my Corporation Need?</Link>
        <Link to="/research-topics/c-corporation-info/what-are-bylaws">What are Bylaws?</Link>
        <Link to="/research-topics/c-corporation-info/stock-par-value">What is Stock Par Value?</Link>
        <Link to="/research-topics/c-corporation-info/form-2553">What is the Form 2553?</Link>
        <Link to="/research-topics/c-corporation-info/directors-and-shareholders">What are the Differences Between Officers, Directors and Shareholders?</Link>
        <Link to="/research-topics/c-corporation-info/own-a-corporation-or-llc">Are Non-U.S. Residents Allowed to Own a Corporation or LLC?</Link>
        <Link to="/research-topics/c-corporation-info/require-an-attorney">Does Forming an LLC (Limited Liability Company) or Corporation Require an Attorney?</Link>
        <Link to="/research-topics/c-corporation-info/publication-requirement">What is a Publication Requirement?</Link>
        <Link to="/research-topics/c-corporation-info/customized-corp-llc-kit">What is the Customized Corporate/LLC Kit?</Link>

        <Link to="/research-topics/s-corporation-info">S-Corporation</Link>
        <Link to="/research-topics/s-corporation-info/corporate-meetings">Am I Required to Hold Corporate Meetings?</Link>
        <Link to="/research-topics/s-corporation-info/foreign-resident-shareholder">Can a foreign resident be a shareholder in an S Corporation?</Link>
        <Link to="/research-topics/s-corporation-info/require-an-attorney">Does Forming an LLC (Limited Liability Company) or Corporation Require an Attorney?</Link>
        <Link to="/research-topics/s-corporation-info/corp-managing">How is a Corporation Managed?</Link>
        <Link to="/research-topics/s-corporation-info/s-corp-taxing">How is an S Corporation Taxed?</Link>
        <Link to="/research-topics/s-corporation-info/amount-of-shareholders">Is there a limit to the amount of shareholders an S Corporation can have?</Link>
        <Link to="/research-topics/s-corporation-info/llc-vs-s-corporation">LLC vs. S Corporation</Link>
        <Link to="/research-topics/s-corporation-info/s-corp-form-advantages">The Advantages of Forming an S Corporation</Link>
        <Link to="/research-topics/s-corporation-info/what-are-bylaws">What are Bylaws?</Link>
        <Link to="/research-topics/s-corporation-info/s-corp-advantages">What are the Advantages of an S Corporation?</Link>
        <Link to="/research-topics/s-corporation-info/directors-and-shareholders">What are the Differences Between Officers, Directors and Shareholders?</Link>
        <Link to="/research-topics/s-corporation-info/s-corp-disadvantages">What are the Disadvantages of an S Corporation?</Link>
        <Link to="/research-topics/s-corporation-info/publication-requirement">What is a Publication Requirement?</Link>
        <Link to="/research-topics/s-corporation-info/customized-corp-llc-kit">What is the Customized Corporate/LLC Kit?</Link>
        <Link to="/research-topics/s-corporation-info/s-corporation-status">Who Will Typically Elect the S Corporation Status?</Link>
        <Link to="/research-topics/s-corporation-info/s-corp-distribution">How to Take a Distribution from an S Corp?</Link>
        <Link to="/research-topics/s-corporation-info/corporation-need">How Many Shares of Stock will my Corporation Need?</Link>
        <Link to="/research-topics/s-corporation-info/corp-seal">What is a Corporate Seal?</Link>
        <Link to="/research-topics/s-corporation-info/tax-advantages">Which entity offers the best tax advantages?</Link>

        <Link to="/research-topics/llc-info">LLC</Link>
        <Link to="/research-topics/llc-info/own-a-corporation-or-llc">Are Non-U.S. Residents Allowed to Own a Corporation or LLC?</Link>
        <Link to="/research-topics/llc-info/llc-business-entity-member">Can another business entity be a member of an LLC?</Link>
        <Link to="/research-topics/llc-info/forming-llc-with-one-member">Can I Form an LLC with just one Member?</Link>
        <Link to="/research-topics/llc-info/require-an-attorney">Does Forming an LLC (Limited Liability Company) or Corporation Require an Attorney?</Link>
        <Link to="/research-topics/llc-info/llc-taxed-as-an-s-corp">Can a Limited Liability Company (LLC) be taxed as an S Corporation?</Link>
        <Link to="/research-topics/llc-info/llc-without-listing-members">Can an LLC be formed without listing the member on the articles of organization?</Link>
        <Link to="/research-topics/llc-info/llc-for-your-entity">Is an LLC the best fit for your entity?</Link>
        <Link to="/research-topics/llc-info/llc-vs-c-corporation">LLC vs. C Corporation</Link>
        <Link to="/research-topics/llc-info/llcs-vs-c-corporation">LLCs vs C-Corporation: Which Is Best for Your Business?</Link>
        <Link to="/research-topics/llc-info/starting-llc-by-steps">Steps to starting a Limited Liability Company (LLC)</Link>
        <Link to="/research-topics/llc-info/forming-llc-benefits">The Benefits of Forming an LLC</Link>
        <Link to="/research-topics/llc-info/llc-operating-agreement">The LLC Operating Agreement</Link>
        <Link to="/research-topics/llc-info/llc-meaning">What Does LLC Mean?</Link>
        <Link to="/research-topics/llc-info/publication-requirement">What is a Publication Requirement?</Link>
        <Link to="/research-topics/llc-info/what-is-an-llc">What is an LLC (Limited Liability Company)?</Link>
        <Link to="/research-topics/llc-info/customized-corp-llc-kit">What is the Customized Corporate/LLC Kit?</Link>
        <Link to="/research-topics/llc-info/changing-llc-name">What is the process involved in changing the name of an LLC?</Link>
        <Link to="/research-topics/llc-info/tax-advantages">Which entity offers the best tax advantages?</Link>
        <Link to="/research-topics/llc-info/choosing-entity-type">Which entity type should I choose?</Link>
        <Link to="/research-topics/llc-info/llc-members-operating-agreement">Why it’s important for the members on an LLC to have an operating agreement in place?</Link>

        <Link to="/research-topics/ein-info">Employer Identification Number (EIN)</Link>
        <Link to="/research-topics/ein-info/identification-number">Employer Identification Number</Link>

        <Link to="/research-topics/nonprofit-info">Nonprofit</Link>
        <Link to="/research-topics/nonprofit-info/what-is-a-nonprofit">What is a Nonprofit Corporation?</Link>
        <Link to="/research-topics/nonprofit-info/corporate-meetings">Am I Required to Hold Corporate Meetings?</Link>
        <Link to="/research-topics/nonprofit-info/profit-from-nonprofit">Can a Nonprofit Corporation Make a Profit?</Link>
        <Link to="/research-topics/nonprofit-info/require-an-attorney">Does Forming an LLC (Limited Liability Company) or Corporation Require an Attorney?</Link>
        <Link to="/research-topics/nonprofit-info/forming-nonprofit-corp">Forming a Nonprofit Corporation</Link>
        <Link to="/research-topics/nonprofit-info/nonprofit-corp-name">How do I Choose a Name for my Nonprofit Corporation?</Link>
        <Link to="/research-topics/nonprofit-info/corp-managing">How is a Corporation Managed?</Link>
        <Link to="/research-topics/nonprofit-info/directors-and-officers-in-nonprofit">How many Directors or Officers are Nonprofit Corporations required to have?</Link>
        <Link to="/research-topics/nonprofit-info/nonprofit-tax-exempt">Is “Nonprofit” the Same as “Tax-Exempt”?</Link>
        <Link to="/research-topics/nonprofit-info/nonprofit-compensation">May a Nonprofit Corporation Pay Compensation to its Officers, Directors and/or Employees?</Link>
        <Link to="/research-topics/nonprofit-info/not-for-profit-vs-nonprofit">Not-for-Profit and Nonprofit: What’s the Difference?</Link>
        <Link to="/research-topics/nonprofit-info/what-are-bylaws">What are Bylaws?</Link>
        <Link to="/research-topics/nonprofit-info/directors-and-shareholders">What are the Differences Between Officers, Directors and Shareholders?</Link>
        <Link to="/research-topics/nonprofit-info/customized-corp-llc-kit">What is the Customized Corporate/LLC Kit?</Link>
        <Link to="/research-topics/nonprofit-info/non-profit-by-steps">What Steps Need to be Taken to Form a Nonprofit Corporation?</Link>
        <Link to="/research-topics/nonprofit-info/where-to-form-nonprofit">Where Should I Form my Nonprofit Corporation?</Link>

        <Link to="/research-topics/general-research">General</Link>
        <Link to="/research-topics/general-research/require-an-attorney">Does Forming an LLC (Limited Liability Company) or Corporation Require an Attorney?</Link>
        <Link to="/research-topics/general-research/incfile-discount-coupon">Does Incfile have a Discount or Coupon Code?</Link>
        <Link to="/research-topics/general-research/llc-inc-designator-companies-name">Does the designator “LLC” or “Inc.” always need to be included in your companies name?</Link>
        <Link to="/research-topics/general-research/how-to-get-trademark">How to Get a Trademark: A Complete Guide?</Link>
        <Link to="/research-topics/general-research/forming-llc-or-corp">In Which State Should I Form my LLC or Corporation?</Link>
        <Link to="/research-topics/general-research/llc-and-corporation-requirements">LLC and Corporation Ongoing Compliance Requirements</Link>
        <Link to="/research-topics/general-research/llc-incorporate-name">Should I assume that if I form an LLC or incorporate that no one else can use the same name?</Link>
        <Link to="/research-topics/general-research/corp-seal">What is a Corporate Seal?</Link>
        <Link to="/research-topics/general-research/what-is-a-nonprofit">What is a Nonprofit Corporation?</Link>
        <Link to="/research-topics/general-research/publication-requirement">What is a Publication Requirement?</Link>
        <Link to="/research-topics/general-research/what-is-an-llc">What is an LLC (Limited Liability Company)?</Link>
        <Link to="/research-topics/general-research/customized-corp-llc-kit">What is the Customized Corporate/LLC Kit?</Link>
        <Link to="/research-topics/general-research/registered-agent-function">What is the main function of the Registered Agent?</Link>
        <Link to="/research-topics/general-research/required-business-account-paperwork">What Do I Need to Open a Business Bank Account?</Link>
        <Link to="/research-topics/general-research/entity-remains-compliant">What steps do I need to take to ensure that my entity remains compliant?</Link>
        <Link to="/research-topics/general-research/tax-advantages">Which entity offers the best tax advantages?</Link>
        <Link to="/research-topics/general-research/choosing-entity-type">Which entity type should I choose?</Link>

        <Link to="/research-topics/state-info">Individual State Information</Link>
        <Link to="/research-topics/state-info/publish-inc-notice-georgia">How To Publish Your Notice Of Incorporation In Georgia?</Link>
        <Link to="/research-topics/state-info/ny-publication-requirement">How to Meet New York LLC Publication Requirements?</Link>

        <Link to="/research-topics/registered-agent">Registered Agent</Link>
        <Link to="/research-topics/registered-agent/own-registered-agent">Can I Be My Own Registered Agent?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-company">Can the registered agent be a company?</Link>
        <Link to="/research-topics/registered-agent/service-cost">How much will it cost to renew my Registered Agent service?</Link>
        <Link to="/research-topics/registered-agent/service-process-notify">How will I be notified if service of process is received?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-renew">How will I know when it is time to renew my Registered Agent?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-tasks">What does a Registered Agent do?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-signature">What happens if I require the signature of my Registered Agent?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-function">What is the main function of the Registered Agent?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-address">What is the name and address of my Registered Agent?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-resigns">What will happen to my company if the registered agent resigns?</Link>
        <Link to="/research-topics/registered-agent/registered-agent-info-update">Who will be responsible for updating the Registered Agent information with the state?</Link>

        <Link to="/research-topics/video-library">Video Library</Link>
        <Link to="/research-topics/video-library/forming-llc-or-corp">How Easy Is Forming an LLC or Corporation</Link>
        <Link to="/research-topics/video-library/save-with-incfile">Learn How To Save Money With Incfile</Link>
        <Link to="/research-topics/video-library/protect-assets">Protect Your Personal Assets</Link>

        <h2>Blog</h2>
        <Link to="/blog">Blog (no API)</Link>
        <Link to="/article">Article (no API)</Link>

        <h2>Type of Business</h2>
        <Link to="/start-a-business/airbnb">Airbnb</Link>
        <Link to="/start-a-business/coach">Coach</Link>
        <Link to="/start-a-business/moving-company">Moving Company</Link>
        <Link to="/start-a-business/boutique-clothing-business">Boutique Clothing Business</Link>
        <Link to="/start-a-business/social-media-influencer">Social Media Influencer</Link>
        <Link to="/start-a-business/etsy-business">Etsy Business</Link>
        <Link to="/start-a-business/amazon-business">Amazon Business</Link>
        <Link to="/start-a-business/daycare-business">Daycare business</Link>
        <Link to="/start-a-business/travel-agency">Travel Agency</Link>
        <Link to="/start-a-business/construction-company">Construction Company</Link>
        <Link to="/start-a-business/publishing-company-business">Publishing Company Business</Link>
        <Link to="/start-a-business/tshirt-business">T-Shirt Business</Link>
        <Link to="/start-a-business/food-truck-business">Food Truck Business</Link>
        <Link to="/start-a-business/gym-personal-training">Gym Personal Training</Link>
        <Link to="/start-a-business/real-estate-business">Real Estate Business</Link>
        <Link to="/start-a-business/digital-nomad-business/">Digital Nomad</Link>
        <Link to="/start-a-business/beauty-salon">Beauty Salon</Link>
        <Link to="/start-a-business/cleaning-business">Cleaning Business</Link>
        <Link to="/start-a-business/catering-business">Catering Business</Link>
        <Link to="/start-a-business/unique-business">Unique Business</Link>
        <Link to="/start-a-business/handyman">Handyman</Link>
        <Link to="/start-a-business/bar-nightclub">Bar Nightclub</Link>
        <Link to="/start-a-business/side-business">Side Business</Link>
        <Link to="/start-a-business/franchise-business">Franchise Business</Link>
        <Link to="/start-a-business/event-planning">Event Planning</Link>
        <Link to="/start-a-business/online-business">Online Business</Link>
        <Link to="/start-a-business/teen-business">Teen Business</Link>
        <Link to="/start-a-business/consulting-business">Consulting Business</Link>
        <Link to="/start-a-business/with-no-money-business">With No Money Business</Link>
        <Link to="/start-a-business/photography-business">Photography Business</Link>
        <Link to="/start-a-business/women-business">Women Business</Link>
        <Link to="/start-a-business/restaurant-business">Restaurant Business</Link>
        <Link to="/start-a-business/summer-business">Summer Business</Link>
        <Link to="/start-a-business/dog-walking">Dog Walking</Link>
        <Link to="/start-a-business/brewery-business">Brewery Business</Link>
        <Link to="/start-a-business/blockchain">Blockchain</Link>
        <Link to="/start-a-business/bookstore">Bookstore</Link>
        <Link to="/start-a-business/bed-and-breakfast">Bed and Breakfast</Link>
        <Link to="/start-a-business/laundromat">Laundromat</Link>
        <Link to="/start-a-business/landscaping-business">Landscaping Business</Link>
        <Link to="/start-a-business/home-business">Home Business</Link>

        <h2>Additional sites</h2>
        <Link to="/components">Components</Link>
      </Wrapper>
    </Container>
  </Layout>
);

export default IndexPage;
