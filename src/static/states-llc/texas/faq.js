import { color } from "../../../components/styles/colors";

import MrsLeftThumUp from "../../../images/icons/states/mrs-bulb-thumb-up-left-color-01.png";
import SCN from "../../../images/search-for-name-7560.png";
import LightingOrange from "../../../images/lighting-orange-01.png";
import BgBoxTrust from "../../../images/trust-01.png";
import BgBoxChangeOfAgent from "../../../images/change-of-agent-01.png";

export const faqContent = {
  header: {
    title: `Frequently Asked Questions About Texas LLCs`,
    subline: `When you’re starting an LLC in the Lone Star state, you’ll have plenty of questions. We’ve gathered together all of the most frequently asked questions to help you get your Texas LLC up and running. From registering your company in Texas to business licenses and franchise taxes, we’ve got you covered. We’ve answered your questions below and linked extensively to our guides, tools and other services, which make everything fast and easy.`,
  },
  content: [
    {
      type: `heading`,
      styles: { marginTop: `0` },
      size: 2,
      content: `How Do I Decide What the Best Legal Structure Is for My Business?`,
    },
    {
      type: `paragraph`,
      content: `You have a few options when it comes to starting a business in Texas. From a legal perspective, there are <a href="/start-your-company/">three main types</a> of Texas for-profit business entities: LLCs, S Corporations or C Corporations. For most entrepreneurs, we believe an LLC provides the right mix of liability protection and ease of administration.`,
    },
    {
      type: `heading`,
      size: 2,
      content: `What Do I Need to Start a Business in Texas?`,
    },
    {
      type: `paragraph`,
      content: `The bare minimum needed to start a TX LLC is a completed Certificate of Formation, a business name and a fee you pay to the Texas Secretary of State.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      content: {
        header: `We recommend taking some other steps before formally starting your LLC:`,
        list: [
          `<a href="/blog/post/perform-market-research-assess-demand-before-you-start-business/">Research your target market</a> to make sure there’s a demand for the products and services you provide.`,
          `<a href="/blog/post/keys-successful-business-plan/">Create a comprehensive business plan</a> that defines the most important aspects of your Texas business.`,
          `<a href="/research-topics/llc-info/llc-operating-agreement/">Write an Operating Agreement</a> that covers how you will run your LLC.`,
        ],
      },
    },
    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `<a href="/after-forming-llc/">After you’ve created your Texas LLC</a>, you will also need to review your business license requirements, understand ongoing filing needs, set up a separate business bank account and get an accountant.`,
    },

    // How Do I Register a Company in Texas?
    {
      type: `heading`,
      size: 2,
      content: `How Do I Register a Company in Texas?`,
    },
    {
      type: `paragraph`,
      content: `You register a business by completing and filing a Certificate of Formation (Form 205) with the Texas Secretary of State. You will need to gather information about your business, fill out the form and send it to the Secretary of State with your filing fee. This will formally create your LLC in Texas.`,
    },
    {
      type: `paragraph`,
      content: `You can file your Certificate of Formation on the Secretary of State website or mail it in. Alternatively, Incfile can <a href="/texas-llc/">guide you through every step of the process</a> by getting details from you and <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX">filing the form</a> on your behalf — for free! There’s no additional charge for our basic LLC filing service, so all you need to do is pay the Texas state filing fee.`,
    },
    {
      type: `box-cta`,
      color: color.orange3,
      styles: { fontSize: `25px` },
      bgImage: [MrsLeftThumUp],
      content: {
        title: `Incorporate through Incfile for $0 + the Texas state fee — and get a free Registered Agent for a year.`,
        button: {
          text: `Incorporate Your Texas LLC Now`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TX`,
        },
      },
    },

    {
      type: `heading`,
      size: 2,
      content: `How Much Does It Cost to Form a Texas LLC?`,
    },
    {
      type: `paragraph`,
      content: `At the time of writing the fee charged by the Texas Secretary of State is $300. You can always <a href='/state-filing-fees/'>check the latest Texas filing fees here</a>. You can also pay an additional $50 for expedited filing through Incfile, which will create your LLC faster. Some LLC filing services do charge you extra to prepare and submit your filing documents, but at Incfile, we do this for free — so you only pay the state fee.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `How Long Does It Take to Form an LLC in Texas?`,
    },
    {
      type: `paragraph`,
      content: `Once you’ve gathered together all of your information and filed your Certificate of Formation (or had Incfile do it for you), it can take up to a week for the Texas Secretary of State to legally create your LLC. If you pay an additional <a href='/state-filing-fees/'>$50 expedited fee</a>, your LLC can be formed in as few as two days.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `How Do I Perform a Texas Business Search?`,
    },
    {
      type: `paragraph`,
      content: `Your <a href='/texas-llc/texas-business-names/'>Texas LLC</a> name needs to be unique, so you’ll need to check if it’s already in use by another business. You can do that by searching the Texas Secretary of State website, or by using our fast and simple <a href="/business-name-search/">Business Name Search tool</a>.`,
    },
    {
      type: `box-cta`,
      color: color.green3,
      styles: { fontSize: `25px` },
      bgImage: [SCN],
      content: {
        title: `Is your business name available in your state?`,
        subtitle: `Find out using Incfile’s Business Name Search Tool.`,
        button: {
          text: `Free Busineee name Search`,
          url: `/`,
        },
      },
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      styles: { margin: `56px 0` },
      content: {
        header: `There are a few ways to register your Texas LLC name.`,
        list: [
          `If you’re creating a new business and your business name is unique in Texas and meets state naming rules, you simply include it in your Certificate of Formation.`,
          `If you want to change the legal name of your business, file Form 424 - Certificate of Amendment with the Secretary of State.`,
          `If you just want to do business under a different name, file Form 503 - Assumed Name Certificate with the Texas Secretary of State, or <a href="/fictitious-business-or-trade-name/">we can do that on your behalf.</a>`,
        ],
      },
    },
    {
      type: `box-cta`,
      color: color.yellow3,
      styles: { fontSize: `25px` },
      bgImage: [LightingOrange],
      content: {
        title: `Trying to come up with a creative business name?`,
        subtitle: `Try Incfile’s Business Name Generator to brainstorm ideas.`,
        button: {
          text: `Business Name Generator`,
          url: `/business-name-generator/`,
        },
      },
    },

    {
      type: `paragraph`,
      styles: { marginTop: `42px` },
      content: `If you want to prevent people from using your business name across the U.S., you can file a trademark for the name. <a href="/trademark-name-search/">We can help.</a>`,
    },

    {
      type: `heading`,
      size: 2,
      content: `What are Texas Articles of Incorporation?`,
    },
    {
      type: `paragraph`,
      content: `In other states, the formal documents that you file to start a corporation or LLC might be known as “Articles of Incorporation.” In Texas, this document is called a Certificate of Formation, and it performs the same functions as the Articles of Incorporation.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `Does Texas Have Series LLCs?`,
    },
    {
      type: `paragraph`,
      content: `Yes, you can <a href="/blog/post/series-llc-in-texas/">start a Series LLC in Texas</a>. This is a special type of LLC where you create one “overall” business and then have individual, series LLCs within it, each counted as separate legal entities.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `Do I Need a Registered Agent for My Texas LLC?`,
    },
    {
      type: `paragraph`,
      content: `Yes, all legal business entities in Texas, including LLCs, <a href='/texas-llc/registered-agents-texas-llc/'>must have a Registered Agent at all times</a>. Here at Incfile, <a href="/manage-your-company/registered-agent/">we provide a free Texas Registered Agent service for the first year if you file through us.</a>`,
    },
    {
      type: `box-cta`,
      color: color.green3,
      styles: { fontSize: `22px` },
      bgImage: [BgBoxTrust],
      content: {
        title: `Have Incfile act as your registered agent for only $119 a year, or get your first year free when you incorporate your business through us.`,
        arrayButtons: [
          {
            text: `Registered Agennt Service`,
            theme: `primary56`,
            url: `/business-name-generator/`,
          },
          {
            text: `Incorporate Your Texas LLC Now`,
            theme: `secondary56`,
            url: `/business-name-generator/`,
          },
        ],
      },
    },

    {
      type: `heading`,
      size: 2,
      content: `How Do I Change a Registered Agent in Texas? (Form 401)`,
    },
    {
      type: `paragraph`,
      content: `You change your Texas registered agent or office by filing Texas Form 401 with the TX Secretary of State. Here at Incfile, we provide a free Texas Registered Agent service for the first year if you file through us. If you’ve been using a different registered agent and want to switch to us, we’ll file Form 401 on your behalf.`,
    },
    {
      type: `box-cta`,
      color: color.blue3,
      styles: { fontSize: `22px` },
      bgImage: [BgBoxChangeOfAgent],
      content: {
        title: `Need to change your registered agent? Have Incfile file the paperwork for you.`,
        button: {
          text: `Change Of Registred Agent Service`,
          url: `/business-name-generator/`,
        },
      },
    },

    {
      type: `heading`,
      size: 2,
      content: `How Do I Perform a Texas Registered Agent Search?`,
    },
    {
      type: `paragraph`,
      content: `You can find the Registered Agent for a specific <a href="https://mycpa.cpa.state.tx.us/coa/Index.html">Texas business by searching the Texas Comptroller of Public Accounts website</a>. Once you’ve searched, select “Details” and you’ll see the Registered Agent name.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `What Texas Business Taxes Do I Need to Pay?`,
    },
    {
      type: `paragraph`,
      content: `As an LLC, <a href='/business-accounting/'>any business profits</a> you earn will be reported on your personal 1040 filing and reported and taxed as “pass-through” income.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.green3,
      styles: { margin: `56px 0` },
      content: {
        header: `You will typically need to pay:`,
        list: [`Self-employment or payroll tax on all business profits`, `Federal income tax on profits after you meet your tax-free allowance`, `Sales tax for selling taxable products and services`],
      },
    },
    {
      type: `paragraph`,
      content: `Note that unlike many other states, Texas does not have a state income tax.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `What Businesses Need to Pay Texas Sales Tax?`,
    },
    {
      type: `paragraph`,
      content: `Texas charges a 6.25 percent state sales and use tax on all retail sales, leases and rentals of most goods. You will also need to pay sales tax if you provide a taxable service. You can <a href="https://comptroller.texas.gov/taxes/publications/96-259.php">find a full list of taxable services here.</a>`,
    },

    {
      type: `heading`,
      size: 2,
      content: `How Do I Get a Texas Sales Tax ID?`,
    },
    {
      type: `paragraph`,
      content: `You will need to file a Texas State Sales Tax Application with the Texas comptroller. You can <a href="https://comptroller.texas.gov/taxes/permit/">complete this process online.</a>`,
    },

    {
      type: `heading`,
      size: 2,
      content: `How Do I Calculate Texas Sales Tax?`,
    },
    {
      type: `paragraph`,
      content: `The base rate for Texas sales tax is 6.25 percent, and there may be additional sales tax depending on your region, county or city. Once you know your overall sales tax amount, calculate the value of all your taxable products and services. Then, multiply that by your sales tax rate to understand how much you will need to pay.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `When is Texas Sales Tax Due?`,
    },
    {
      type: `paragraph`,
      content: `Once your LLC’s business’s sales tax application has been approved, you will receive a letter with instructions on how often you must file a sales tax return and pay sales taxes. Returns and payments may be due monthly, quarterly, or annually.`,
    },

    {
      type: `heading`,
      size: 2,
      content: `What Do I Need to Know About Texas Franchise Tax?`,
    },
    {
      type: `paragraph`,
      content: `Some businesses will need to pay a franchise tax in Texas.`,
    },
    {
      type: `iconListColorBox`,
      boxColor: color.blue3,
      styles: { margin: `56px 0` },
      content: {
        //header: `You will typically need to pay:`,
        list: [
          `Typically, if your business has margins of less than $1,180,000 (for 2020 and 2021) a year, you will not need to pay franchise tax.`,
          `If your margin is higher than this, you will pay a franchise tax of between 0.375 and 0.75 percent.`,
          `You can find more franchise tax details on the <a href="https://comptroller.texas.gov/taxes/franchise/">Texas comptroller website.</a>`,
        ],
      },
    },

    {
      type: `heading`,
      size: 2,
      content: `Do I Need a License to Do Business in Texas?`,
    },
    {
      type: `paragraph`,
      content: `The types of business licenses you need will vary depending on your type of business, your industry, your location and various other factors. We can <a href="/business-license-research-package/">research the types of business licenses</a> you might need for you.`,
    },

    {
      type: `heading`,
      styles: { marginTop: `56px` },
      size: 3,
      content: `We hope you’ve found this Texas LLC FAQ useful. If you’ve used our services and have a question that isn’t answered here, <a href='/contact/'>let us know</a> and we’d be happy to help.`,
    },
    {
      type: `button`,
      width: `200px`,
      theme: `secondary56`,
      content: {
        text: `Ask a question`,
        url: `/contact/`,
      },
    },
  ],
};
