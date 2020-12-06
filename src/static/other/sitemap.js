import { chunk } from "lodash";
import { related as LLCArticles } from "../research-topics/llc-info";
import { related as generalArticles } from "../research-topics/general-research";
import { related as CorpArticles } from "../research-topics/c-corporation-info";
import { related as SCorpArticles } from "../research-topics/s-corporation-info";
import { related as NonprofitArticles } from "../research-topics/nonprofit-info";
import { related as RAArticles } from "../research-topics/registered-agent";
import { related as BusinessTaxArticles } from "../research-topics/business-taxes";
import { related as IndividualStateInfoArticles } from "../research-topics/state-info";

import { states } from "../states";

const _chunkArray = (items, size = 3) => {
    const arrayLinks = [];
    const chunks = chunk(items, size);
    chunks.map((chunk) => {
        return arrayLinks.push({
            links: chunk
        });
    });
    
    return arrayLinks;
}

const _generateStateLinks = (prefix = 'LLC') => {
    const urls = [];
    const _states = states.map(state => {
        const stateName = `${state.name} ${prefix}`;
        const stateURL = stateName.replaceAll(" ", "-").toLowerCase();
      
        return {
            text: stateName,
            url: `/${stateURL}/`
        }
    });

    chunk(_states, 3).map((items) => {
        return urls.push({
            links: items
        });
    });

    return urls;
}

///////////////////////////////////////////
const LLCArticlesSitemap = _chunkArray(LLCArticles.buttons);
const generalInfoArticles = _chunkArray(generalArticles.buttons);
const CorpInfoArticles = _chunkArray(CorpArticles.buttons);
const SCorpInfoArticlesSitemap = _chunkArray(SCorpArticles.buttons);
const RAArticlesSitemap = _chunkArray(RAArticles.buttons);
const NonprofitArticlesSitemap = _chunkArray(NonprofitArticles.buttons);
const InStateInfoArticlesSitemap = _chunkArray(IndividualStateInfoArticles.buttons);
const BusinessTaxArticlesSitemap = _chunkArray(BusinessTaxArticles.buttons);

export const seo = {
  title: `Read reviews & testimonials for Incfile | Incfile Reviews`,
  desc: `Incfile Customer Reviews & Testimonials`,
};

export const top = {
  header: `Sitemap`,
};

export const list = {
  sections: [
    {
      header: `Pages`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `Cancellation Policy`,
                  url: `/cancellation-policy/`,
                },
                {
                  text: `Privacy Policy`,
                  url: `/privacy-policy/`,
                },
                {
                  text: `Legal Disclaimer`,
                  url: `/disclaimer/`,
                },
                {
                  text: `Incfile Incorporate`,
                  url: `/`,
                },
                {
                  text: `Get started now`,
                  url: `${process.env.ORDER_URL}/form-order-now.php`,
                },
                {
                  text: `Testimonials`,
                  url: `/reviews/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Affiliates`,
                  url: `/affiliates/`,
                },
                {
                  text: `Form Your LLC`,
                  url: `/form-an-llc/`,
                },
                {
                  text: `Free LLC Filing + State Fee`,
                  url: `/free-llc/`,
                },
                {
                  text: `How to Start an LLC`,
                  url: `/form-an-llc/`,
                },
                {
                  text: `Form Your Corporation`,
                  url: `/what-is-s-corporation/`,
                },
                {
                  text: `Why choose Us`,
                  url: `/why-choose-incfile/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Learning Center`,
                  url: `/learn-more/`,
                },
                {
                  text: `Compare LLC Filing Times`,
                  url: `/compare-state-filing-times/`,
                },
                {
                  text: `About`,
                  url: `/about/`,
                },
                {
                  text: `Contact - Existing Clients`,
                  url: `/contact/existing-clients/`,
                },
                {
                  text: `Contact - New Sales`,
                  url: `/contact/new-sales/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Review Entity Types`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `LLC`,
                  url: `/limited-liability-company/`,
                },
                {
                  text: `Nonprofit`,
                  url: `/what-is-non-profit-corporation/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `S-Corporation`,
                  url: `/what-is-s-corporation/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `C-Corporation`,
                  url: `/what-is-c-corporation/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Manage Your Company`,
      rows: [
        {
          header: `Corporate Filings`,
          columns: [
            {
              links: [
                {
                  text: `Annual Reports`,
                  url: `/manage-your-company/annual-report/`,
                },
                {
                  text: `Certificate of Good Standing`,
                  url: `/manage-your-company/certificate-of-good-standing/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Change of Registered Agent`,
                  url: `/manage-your-company/change-of-registered-agent/`,
                },
                {
                  text: `Foreign Qualification`,
                  url: `/manage-your-company/foreign-qualification/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Amendment`,
                  url: `/manage-your-company/amendment/`,
                },
                {
                  text: `Dissolution`,
                  url: `/manage-your-company/dissolution/`,
                },
              ],
            },
          ],
        },
        {
          header: `Corporate Services`,
          columns: [
            {
              links: [
                {
                  text: `Registered Agent Services`,
                  url: `/manage-your-company/registered-agent/`,
                },
                {
                  text: `Corporate/LLC Kit`,
                  url: `/manage-your-company/corporatellc-kit/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business License Research`,
                  url: `/business-license-research-package/`,
                },
                {
                  text: `File Business Taxes`,
                  url: `/business-accounting/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Trademark Name Search`,
                  url: `/trademark-name-search/`,
                },
                {
                  text: `Fictitious Business Name`,
                  url: `/fictitious-business-or-trade-name/`,
                },
              ],
            },
          ],
        },
        {
          header: `IRS Filings`,
          columns: [
            {
              links: [
                {
                  text: `EIN Employer Identification Number`,
                  url: `/manage-your-company/tax-id-ein/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `S-Corp Tax Election – Form 2553`,
                  url: `/llc-s-corp-election/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `File S Corp Tax Election`,
                  url: `/llc-s-corp-election/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Resource Tools`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `Renew Registered Agent`,
                  url: `/`, // dashboard file doesn't exist
                },
                {
                  text: `State Filing Times`,
                  url: `/state-filing-times/`,
                },
                {
                  text: `State Filing Prices`,
                  url: `/state-filing-fees/`,
                },
                {
                  text: `Glossary`,
                  url: `/glossary/`,
                },
                {
                  text: `Ongoing Filing Requirements`,
                  url: `/compliance-filing-requirement/`,
                },
                {
                  text: `Business Startup Guides`,
                  url: `/start-a-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Checklist`,
                  url: `/starting-a-business-checklist/`,
                },
                {
                  text: `Help Center`,
                  url: `/help-center/`,
                },
                {
                  text: `S Corporation Tax Calculator`,
                  url: `/s-corporation-tax-calculator/`,
                },
                {
                  text: `Check Order Status`,
                  url: `${process.env.ORDER_URL}/dashboard`,
                },
                {
                  text: `Entity Comparison Chart`,
                  url: `/business-entity-comparison/`,
                },
                {
                  text: `LLC State Information`,
                  url: `/llc-state-information/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Corporation State Information`,
                  url: `/corporation-state-information/`,
                },
                {
                  text: `Annual Report Due Date Tool`,
                  url: `/business-filing-deadlines/`,
                },
                {
                  text: `After Formation`,
                  url: `/after-forming-llc/`,
                },
                {
                  text: `State Sales Tax Calculator`,
                  url: `/sales-tax-calculator/`,
                },
                {
                  text: `Search Business Licenses`,
                  url: `/business-license-tool/`,
                },
                {
                  text: `Registered Agents`,
                  url: `/registered-agents/`,
                },
              ],
            },
          ],
        },
        {
          header: `Corporate Services`,
          columns: [
            {
              links: [
                {
                  text: `Search your name availability in New York`,
                  url: `/new-york-entity-search/`,
                },
                {
                  text: `Search your name availability in Delaware`,
                  url: `/delaware-entity-search/`,
                },
                {
                  text: `Search your name availability in New Jersey`,
                  url: `/new-jersey-entity-search/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Search your name availability in Virginia`,
                  url: `/virginia-entity-search/`,
                },
                {
                  text: `Search your name availability in Michigan`,
                  url: `/michigan-entity-search/`,
                },
                {
                  text: `Search your name availability in Florida`,
                  url: `/florida-entity-search/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Search your name availability in Georgia`,
                  url: `/georgia-entity-search/`,
                },
                {
                  text: `Search your name availability in Texas`,
                  url: `/texas-entity-search/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Help Center`,
      rows: [
        {
              header: `General Information`, //files doesn't exist
            columns: generalInfoArticles,
        },
        {
            header: `LLC Information`,
            columns: LLCArticlesSitemap,
        },
        {
          header: `C Corporation Information`,
          columns: CorpInfoArticles,
        },
        {
          header: `S Corporation Information`,
          columns: SCorpInfoArticlesSitemap,
        },
        {
          header: `Nonprofit Information`,
          columns: NonprofitArticlesSitemap,
        },
        {
          header: `Registered Agent Information`,
          columns: RAArticlesSitemap,
        },
        {
          header: `Individual State Information`,
          columns: InStateInfoArticlesSitemap,
        },
        {
          header: `Business Taxes`,
          columns: BusinessTaxArticlesSitemap,
        },
        {
          header: `Video Library`,
          columns: [
            {
              links: [
                {
                  text: `How Easy Is Forming an LLC or Corporation`,
                  url: `/research-topics/video-library/forming-llc-or-corp/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Protect Your Personal Assets`,
                  url: `/research-topics/video-library/protect-assets/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Learn How To Save Money With Incfile`,
                  url: `/research-topics/video-library/save-with-incfile/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Blog Categories`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `Amazon Business`,
                  url: `/blog/tag/start-a-business/business-types/amazon-business/`,
                },
                {
                  text: `Branding`,
                  url: `/blog/tag/start-a-business/business-logistics/branding/`,
                },
                {
                  text: `Business Credit and Loans`,
                  url: `/blog/tag/grow-a-business/financial-management/business-credit-and-loans/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Ideas`,
                  url: `/blog/tag/start-a-business/business-logistics/business-ideas/`,
                },
                {
                  text: `Business License and Permits`,
                  url: `/blog/tag/form-a-business/entity-requirements/business-license-and-permits/`,
                },
                {
                  text: `Business Names`,
                  url: `/blog/tag/start-a-business/business-logistics/business-names/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Surveys and Data`,
                  url: `/blog/tag/start-a-business/business-logistics/business-surveys-and-data/`,
                },
                {
                  text: `Business Trademark`,
                  url: `/blog/tag/form-a-business/entity-requirements/business-trademark/`,
                },
                {
                  text: `Certificate of Good Standing`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/certificate-of-good-standing/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Cryptocurrency`,
                  url: `/blog/tag/start-a-business/business-types/cryptocurrency/`,
                },
                {
                  text: `Dissolution`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/dissolution/`,
                },
                {
                  text: `Entity Requirements`,
                  url: `/blog/tag/form-a-business/entity-requirements/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Food Trucks`,
                  url: `/blog/tag/start-a-business/business-types/food-trucks/`,
                },
                {
                  text: `Founders & Entrepreneurs`,
                  url: `/blog/tag/start-a-business/business-logistics/founders-entrepreneurs/`,
                },
                {
                  text: `Growth Management`,
                  url: `/blog/tag/grow-a-business/growth-management/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Incfile Info`,
                  url: `/blog/tag/incfile-info/`,
                },
                {
                  text: `Leadership`,
                  url: `/blog/tag/grow-a-business/growth-management/leadership/`,
                },
                {
                  text: `New Business Finances`,
                  url: `/blog/tag/form-a-business/new-business-finances/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Order Info`,
                  url: `/blog/tag/incfile-info/order-info/`,
                },
                {
                  text: `Registered Agent`,
                  url: `/blog/tag/form-a-business/entity-requirements/registered-agent/`,
                },
                {
                  text: `Retirement`,
                  url: `/blog/tag/grow-a-business/financial-management/retirement/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Solopreneurs & Freelancers`,
                  url: `/blog/tag/start-a-business/business-types/solopreneurs-freelancers/`,
                },
                {
                  text: `State & IRS Filing`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/`,
                },
                {
                  text: `Veterans`,
                  url: `/blog/tag/start-a-business/business-types/veterans/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Annual Report`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/annual-report/`,
                },
                {
                  text: `Business Accounting`,
                  url: `/blog/tag/form-a-business/new-business-finances/business-accounting/`,
                },
                {
                  text: `Business Entities`,
                  url: `/blog/tag/form-a-business/business-entities/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Insurance`,
                  url: `/blog/tag/grow-a-business/business-protection/business-insurance/`,
                },
                {
                  text: `Business Logistics`,
                  url: `/blog/tag/start-a-business/business-logistics/`,
                },
                {
                  text: `Business Protection`,
                  url: `/blog/tag/grow-a-business/business-protection/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Tax`,
                  url: `/blog/tag/form-a-business/new-business-finances/business-tax/`,
                },
                {
                  text: `Business Types`,
                  url: `/blog/tag/start-a-business/business-types/`,
                },
                {
                  text: `Consultants`,
                  url: `/blog/tag/start-a-business/business-types/consultants/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `DBA`,
                  url: `/blog/tag/start-a-business/business-logistics/dba/`,
                },
                {
                  text: `DIYers`,
                  url: `/blog/tag/start-a-business/business-types/diy-llc/`,
                },
                {
                  text: `Etsy Store`,
                  url: `/blog/tag/start-a-business/business-types/etsy-store/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Foreign Qualification`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/foreign-qualification/`,
                },
                {
                  text: `Franchise`,
                  url: `/blog/tag/start-a-business/business-types/franchise/`,
                },
                {
                  text: `Hiring & People`,
                  url: `/blog/tag/grow-a-business/growth-management/hiring-people/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Incfile News`,
                  url: `/blog/tag/incfile-info/incfile-news/`,
                },
                {
                  text: `Legal Contracts`,
                  url: `/blog/tag/grow-a-business/business-protection/legal-contracts/`,
                },
                {
                  text: `Nonprofits`,
                  url: `/blog/tag/form-a-business/business-entities/nonprofits/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Product Updates`,
                  url: `/blog/tag/incfile-info/product-updates/`,
                },
                {
                  text: `Remote Work`,
                  url: `/blog/tag/start-a-business/business-types/remote-work/`,
                },
                {
                  text: `Series LLC`,
                  url: `/blog/tag/form-a-business/business-entities/series-llc/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Spotlight of the Month`,
                  url: `/blog/tag/start-a-business/business-types/spotlight-of-the-month/`,
                },
                {
                  text: `State Information`,
                  url: `/blog/tag/start-a-business/business-logistics/state-information/`,
                },
                {
                  text: `Virtual Business Address`,
                  url: `/blog/tag/form-a-business/entity-requirements/virtual-business-address/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Article of Amendment`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/article-of-amendment/`,
                },
                {
                  text: `Business Banking`,
                  url: `/blog/tag/form-a-business/new-business-finances/business-banking/`,
                },
                {
                  text: `Business Forms`,
                  url: `/blog/tag/grow-a-business/state-irs-filing/business-forms/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Legislation`,
                  url: `/blog/tag/start-a-business/business-logistics/business-legislation/`,
                },
                {
                  text: `Business Marketing`,
                  url: `/blog/tag/grow-a-business/growth-management/business-marketing/`,
                },
                {
                  text: `Business Sales`,
                  url: `/blog/tag/grow-a-business/growth-management/business-sales/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Business Technology`,
                  url: `/blog/tag/start-a-business/business-logistics/business-technology/`,
                },
                {
                  text: `Cannabis`,
                  url: `/blog/tag/start-a-business/business-types/cannabis/`,
                },
                {
                  text: `Corporations`,
                  url: `/blog/tag/form-a-business/business-entities/corporations/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Digital Nomads`,
                  url: `/blog/tag/start-a-business/business-types/digital-nomads/`,
                },
                {
                  text: `EIN`,
                  url: `/blog/tag/form-a-business/entity-requirements/ein/`,
                },
                {
                  text: `Financial Management`,
                  url: `/blog/tag/grow-a-business/financial-management/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Form a Business Today`,
                  url: `/blog/tag/form-a-business/`,
                },
                {
                  text: `Grow Your Business`,
                  url: `/blog/tag/grow-a-business/`,
                },
                {
                  text: `Home Business`,
                  url: `/blog/tag/start-a-business/business-types/home-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Kid/Teen`,
                  url: `/blog/tag/start-a-business/business-types/kidteen/`,
                },
                {
                  text: `LLCs`,
                  url: `/blog/tag/form-a-business/business-entities/llcs/`,
                },
                {
                  text: `Operating Agreement`,
                  url: `/blog/tag/form-a-business/entity-requirements/operating-agreement/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Real Estate Investors`,
                  url: `/blog/tag/start-a-business/business-types/real-estate-investors/`,
                },
                {
                  text: `Retail`,
                  url: `/blog/tag/start-a-business/business-types/retail/`,
                },
                {
                  text: `Small Business`,
                  url: `/blog/tag/start-a-business/business-types/small-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Start a Business Soon`,
                  url: `/blog/tag/start-a-business/`,
                },
                {
                  text: `Uncategorized`,
                  url: `/blog/tag/uncategorized/`,
                },
                {
                  text: `Women in Business`,
                  url: `/blog/tag/start-a-business/business-types/women-in-business/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `LLC State Information`,
      rows: [
        {
          columns: _generateStateLinks('LLC'),
        },
      ],
    },
    {
      header: `Corporation State Information`,
      rows: [
        {
          columns: _generateStateLinks('Corporation'),
        },
      ],
    },
    {
      header: `Start A Business`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `Digital Nomad Business`,
                  url: `/start-a-business/digital-nomad-business/`,
                },
                {
                  text: `Real Estate Business`,
                  url: `/start-a-business/real-estate-business/`,
                },
                {
                  text: `Cleaning Business`,
                  url: `/start-a-business/cleaning-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Laundromat Business`,
                  url: `/start-a-business/laundromat/`,
                },
                {
                  text: `T-shirt Business`,
                  url: `/start-a-business/tshirt-business/`,
                },
                {
                  text: `Beauty Salon Business`,
                  url: `/start-a-business/beauty-salon-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Landscaping Business`,
                  url: `/start-a-business/landscaping-business/`,
                },
                {
                  text: `Catering Business`,
                  url: `/start-a-business/catering-business/`,
                },
                {
                  text: `Consulting Business`,
                  url: `/start-a-business/consulting-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Teen Business`,
                  url: `/start-a-business/teen-business/`,
                },
                {
                  text: `Summer Business`,
                  url: `/start-a-business/summer-business/`,
                },
                {
                  text: `Dog Walking Business`,
                  url: `/start-a-business/dog-walking/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Online Business`,
                  url: `/start-a-business/online-business/`,
                },
                {
                  text: `Franchise Business`,
                  url: `/start-a-business/franchise-business/`,
                },
                {
                  text: `With No Money Business`,
                  url: `/start-a-business/with-no-money-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Amazon Business`,
                  url: `/start-a-business/amazon-business/`,
                },
                {
                  text: `Bar or Club Business`,
                  url: `/start-a-business/bar-nightclub/`,
                },
                {
                  text: `Restaurant Business`,
                  url: `/start-a-business/restaurant-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Photography Business`,
                  url: `/start-a-business/photography-business/`,
                },
                {
                  text: `Side Business`,
                  url: `/start-a-business/side-business/`,
                },
                {
                  text: `Brewery Business`,
                  url: `/start-a-business/brewery-business/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Home Business`,
                  url: `/start-a-business/home-business/`,
                },
                {
                  text: `Women Business`,
                  url: `/start-a-business/women-business/`,
                },
                {
                  text: `Airbnb Business`,
                  url: `/start-a-business/airbnb/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Construction Company`,
                  url: `/start-a-business/construction-company/`,
                },
                {
                  text: `Daycare`,
                  url: `/start-a-business/daycare-business/`,
                },
                {
                  text: `Travel`,
                  url: `/start-a-business/travel-agency/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Gym`,
                  url: `/start-a-business/gym-personal-training/`,
                },
                {
                  text: `Publishing Company Business`,
                  url: `/start-a-business/publishing-company-business/`,
                },
                {
                  text: `Business Contract Templates`,
                  url: `/start-a-business/business-contract-templates/`, //file doesn't exist
                },
              ],
            },
            {
              links: [
                {
                  text: `Party Planning Business`,
                  url: `/start-a-business/event-planning/`,
                },
                {
                  text: `Food Truck`,
                  url: `/start-a-business/food-truck-business/`,
                },
                {
                  text: `Bed & Breakfast`,
                  url: `/start-a-business/bed-and-breakfast/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Bookstore`,
                  url: `/start-a-business/bookstore/`,
                },
                {
                  text: `Blockchain`,
                  url: `/start-a-business/blockchain/`,
                },
                {
                  text: `Handyman`,
                  url: `/start-a-business/handyman/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Unique Business`,
                  url: `/start-a-business/unique-business/`,
                },
                {
                  text: `Bakery Business`,
                  url: `/start-a-business/bakery/`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: `Virtual Mailbox`,
      rows: [
        {
          columns: [
            {
              links: [
                {
                  text: `Arizona Mailbox`,
                  url: `/arizona-virtual-mailbox/`,
                },
                {
                  text: `California Mailbox`,
                  url: `/california-virtual-mailbox/`,
                },
                {
                  text: `Colorado Mailbox`,
                  url: `/colorado-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Delaware Mailbox`,
                  url: `/delaware-virtual-mailbox/`,
                },
                {
                  text: `Florida Mailbox`,
                  url: `/florida-virtual-mailbox/`,
                },
                {
                  text: `Georgia Mailbox`,
                  url: `/georgia-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Illinois Mailbox`,
                  url: `/illinois-virtual-mailbox/`,
                },
                {
                  text: `Massachusetts Mailbox`,
                  url: `/massachusetts-virtual-mailbox/`,
                },
                {
                  text: `New Jersey Mailbox`,
                  url: `/new-jersey-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `New Mexico Mailbox`,
                  url: `/new-mexico-virtual-mailbox/`,
                },
                {
                  text: `New York Mailbox`,
                  url: `/new-york-virtual-mailbox/`,
                },
                {
                  text: `Nevada Mailbox`,
                  url: `/nevada-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `North Carolina Mailbox`,
                  url: `/north-carolina-virtual-mailbox/`,
                },
                {
                  text: `Ohio Mailbox`,
                  url: `/ohio-virtual-mailbox/`,
                },
                {
                  text: `Oregon Mailbox`,
                  url: `/oregon-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Pennsylvania Mailbox`,
                  url: `/pennsylvania-virtual-mailbox/`,
                },
                {
                  text: `South Carolina Mailbox`,
                  url: `/south-carolina-virtual-mailbox/`,
                },
                {
                  text: `South Dakota Mailbox`,
                  url: `/south-dakota-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Texas Mailbox`,
                  url: `/texas-virtual-mailbox/`,
                },
                {
                  text: `Utah Mailbox`,
                  url: `/utah-virtual-mailbox/`,
                },
                {
                  text: `Virginia Mailbox`,
                  url: `/virginia-virtual-mailbox/`,
                },
              ],
            },
            {
              links: [
                {
                  text: `Washington Mailbox`,
                  url: `/washington-virtual-mailbox/`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const trust = {
  header: `Trusted by over <span style="color:#fd8550">500,000</span> business owners worldwide since 2004!`,
  button1: {
    text: `See Plans & Pricing`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
  button2: {
    text: `Explore more benefits`,
    url: `/why-choose-incfile/`,
  },
};
