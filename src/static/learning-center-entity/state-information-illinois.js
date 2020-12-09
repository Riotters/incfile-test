import NewYorkCorpSVG from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
import PenSVG from "../../images/icons/icon-pen.inline.svg";
import PrinterSVG from "../../images/icons/icon-printer.inline.svg";
import RegisteredAgentSVG from "../../images/icons/icon-registered-agent-cog.inline.svg";
import PriceTagSVG from "../../images/icons/icon-price-tag-documents.inline.svg";
import CoffeeSVG from "../../images/icons/icon-coffee-mug.inline.svg";
import SelfEmployedTaxSVG from "../../images/icons/self-employment-tax.inline.svg";
import CorpoTaxSVG from "../../images/icons/icon-corporation-tax.inline.svg";
import DividentsSVG from "../../images/icons/icon-stock-dividends.inline.svg";

import WebSVG from "../../images/icons/icon-web-browser.inline.svg";
import PhoneSVG from "../../images/icons/icon-virtual-phone.inline.svg";
import LogoSVG from "../../images/icons/icon-design-business-logo.inline.svg";
import CardSVG from "../../images/icons/icon-business-card.inline.svg";
import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
  header: `Why Form a Corporation in Illinois.`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=IL`,
    },
  ],
};
export const launchBusiness = {
  header: `Launch your business with Incfile`,
  text: `No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business!`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=IL`,
  },
};

export const subscription = {
  header: `Subscribe now to learn more about LLC and starting a business`,
  button: {
    text: `Subscribe Now`,
    url: `/`,
  },
};
export const tabPages = {
  pages: [
    {
      name: `The Quick 6 Steps`,
      path: `/illinois-corporation/`,
      icon: NewYorkCorpSVG,
    },
    {
      name: `Entity Search & Name`,
      path: `/illinois-corporation/how-to-name-your-corporation/`,
      icon: PenSVG,
    },
    {
      name: `Registered Agents`,
      path: `/illinois-corporation/registered-agents-illinois/`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Corporation Requirements`,
      path: `/illinois-corporation/form-filling-permit-requirements/`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/illinois-corporation/taxes-and-fees-for-your-corporation/`,
      icon: PriceTagSVG,
    },
    {
      name: `What To Do After?`,
      path: `/illinois-corporation/know-your-ongoing-filing-requirements/`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
    type: "header",
    content: "Choosing the Right Type of Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "video",
    image: "what-is-a-corporation-8899",
    id: `oYZShvmf9eQ`,
    marginBottom: 32,
  },
  {
    type: "text",
    content:
      "As the sixth most populous state in the U.S., home to Chicago and the natural wonders of the Great Lakes, Illinois is a great place to live and to start a business. The Port of Chicago connects to the Atlantic through a network of lakes, and this state is a central hub for domestic and international travel. Known as a bellwether of culture and politics, Illinois is a place where great movements and businesses are born. The industries that dominate in Illinois include agriculture, manufacturing, services and energy. ",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "What Type of Illinois Business Entity Should You Choose?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "When it comes to starting a business in Illinois, you have a few options for the type of business you want to create. This is known as your “legal business entity,” and it defines how your business will be treated by the state, the law, the IRS and other official bodies. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most new entrepreneurs have a choice of several business types — sole proprietorship, partnership, Limited Liability Company (LLC), S Corporation or C Corporation. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Here’s a quick overview of each. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Sole proprietorships and partnerships are the simplest type of business. They do not provide any special protections or benefits to entrepreneurs and can make your personal assets vulnerable. We do not recommend them.",
        `Limited Liability Companies (LLCs) are a great option for smaller businesses. They are quick and easy to create, inexpensive to administer, light on regulation and have simple taxation and rules. You can <a href="/illinois-llc/">learn how to create an LLC in Illinois here.</a>`,
        `S Corporations are the simplest type of corporation an entrepreneur can create and are good for many types of businesses. The regulations, taxation, compliance and legalities are more complex than for an LLC, but they do provide tax advantages for their owners. You can <a href="what-is-s-corporation/">find more information on S Corporations here.</a>`,
        `C Corporations are the most complex type of corporation. They are best for large businesses and are a necessity if the business will be traded on public stock markets. C Corporations have much more significant regulation, compliance and legalities; they are not as tax efficient as S Corporations or LLCs. You can <a href="/what-is-c-corporation/">find more information on C Corporations here.</a>`,
        `Other business entity structures include nonprofits, Limited Liability Partnerships (LLPs) and B Corporations, but they will not be relevant for the majority of entrepreneurs.`,
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: "header",
    content: "Advantages of a Corporation Over an LLC",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are several reasons an entrepreneur might choose to form a corporation instead of an LLC in Illinois.",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you want to pay lower self-employment taxes than an LLC, you will need an S Corporation.",
        "If you want to easily transfer ownership through buying and selling stock, you will need a C Corporation or an S Corporation.",
        "If you want up to 100 shareholders who are U.S. citizens or residents and want to issue one type of stock, you will need an S Corporation.",
        "If you want more than 100 shareholders, want to issue more than one type of stock or have international shareholders, you will need a C Corporation.",
        "If you want to allow the public to buy and sell shares in your company after an Initial Public Offering (IPO), you will need a C Corporation.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: true,
    curveColor: color.yellow1,
  },
  {
    type: "text",
    content:
      "Here’s a side-by-side comparison between the various business types. This table focuses on the areas apart from company stock and shareholders. ",
    marginBottom: 32,
  },
  {
    type: "text",
    content: `<b>General Comparison Between Business Entity Types in Illinois</b>`,
    marginBottom: 16,
  },
  {
    type: "table",
    content: {
      headers: [
        {
          header: true,
          label: "Area",
        },
        {
          header: true,
          label: "Sole Proprietorship/ Partnership ",
        },
        {
          header: true,
          label: "LLC",
        },
        {
          header: true,
          label: "S Corp",
        },
        {
          header: true,
          label: "C Corp",
        },
      ],
      rows: [
        [
          {
            type: "label",
            label: "Fee for creating business entity?",
          },
          {
            type: "minus",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
        ],
        [
          {
            type: "label",
            label: "Ongoing fee for maintaining business entity? ",
          },
          {
            type: "minus",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
        ],
        [
          {
            type: "label",
            label: "Limited liability? ",
          },
          {
            type: "minus",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
          {
            type: "label",
            label: "Yes - strong",
          },
        ],
        [
          {
            type: "label",
            label: "How ownership of business is determined ",
          },
          {
            type: "label",
            label: "You are the business",
          },
          {
            type: "label",
            label: "By defined members",
          },
          {
            type: "label",
            label: "Private investors who own stock ",
          },
          {
            type: "label",
            label: "Public investors who own stock ",
          },
        ],
        [
          {
            type: "label",
            label: "Management structure ",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label",
            label: "As per operating agreement",
          },
          {
            type: "label",
            label: "Elected by shareholders",
          },
          {
            type: "label",
            label: "Elected by shareholders",
          },
        ],
        [
          {
            type: "label",
            label: "Must be domestic business entity?",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
          {
            type: "minus",
          },
        ],
        [
          {
            type: "label",
            label: "Have shareholders, directors and officers?",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label",
            label: "No - members only",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
        ],
        [
          {
            type: "label",
            label: "Raising capital",
          },
          {
            type: "label",
            label: "Loans and financing",
          },
          {
            type: "label",
            label: "Loans and financing",
          },
          {
            type: "label",
            label: "Loans, financing and selling private stock",
          },
          {
            type: "label",
            label: "Loans, financing and selling public stock",
          },
        ],
        [
          {
            type: "label",
            label: "File annual report?",
          },
          {
            type: "minus",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
          {
            type: "checkmark",
          },
        ],
        [
          {
            type: "label",
            label: "Compliance and regulations",
          },
          {
            type: "label",
            label: "Very light",
          },
          {
            type: "label",
            label: "Light",
          },
          {
            type: "label",
            label: "Moderate",
          },
          {
            type: "label",
            label: "Heavy",
          },
        ],
        [
          {
            type: "label",
            label: "Owner’s taxation type",
          },
          {
            type: "label",
            label: "Individual tax",
          },
          {
            type: "label",
            label: "Individual tax (pass through)",
          },
          {
            type: "label",
            label: "Distribution and individual tax (pass through)",
          },
          {
            type: "label",
            label: "Corporation tax and individual tax",
          },
        ],
      ],
      headerColumnsDef: "150px 150px 1fr 1fr 1fr",
      rowColumnsDef: "150px 150px 1fr 1fr 1fr",
    },
    responsive: true,
    settings: {
      padding: 12,
    },
    style: {
      "margin-bottom": "48px",
    },
  },
  {
    type: "text",
    content:
      "This table shows the differences between Illinois business entities when it comes to issuing, buying and selling stock. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content: `
    <b>Stocks and Shares Comparison Between Business Entity Types in Illinois</b>`,
    marginBottom: 16,
  },
  {
    type: "table",
    content: {
      headers: [
        {
          header: true,
          label: "Area",
        },
        {
          header: true,
          label: "Sole Proprietorship/ Partnership ",
        },
        {
          header: true,
          label: "LLC",
        },
        {
          header: true,
          label: "S Corp",
        },
        {
          header: true,
          label: "C Corp",
        },
      ],
      rows: [
        [
          {
            type: "label",
            label: "Maximum shareholders",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "100",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Unlimited",
            className: "highlight",
          },
        ],
        [
          {
            type: "label",
            label: "Ownership/stock freely transferrable? ",
          },
          {
            type: "label-boxed",
            label: "No",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "No",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Yes",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Yes",
            className: "highlight",
          },
        ],
        [
          {
            type: "label",
            label: "Shareholder nationality",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "U.S citizen or resident",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Any",
            className: "highlight",
          },
        ],
        [
          {
            type: "label",
            label: "Public buying and selling of stock? ",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "No",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Yes, after IPO",
            className: "highlight",
          },
        ],
        [
          {
            type: "label",
            label: "No. of classes of stock",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "N/A",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "One",
            className: "highlight",
          },
          {
            type: "label-boxed",
            label: "Many",
            className: "highlight",
          },
        ],
      ],
      headerColumnsDef: "175px 150px 1fr 1fr 1fr",
      rowColumnsDef: "175px 150px 1fr 1fr 1fr",
    },
    responsive: true,
    settings: {
      padding: 12,
    },
    style: {
      "margin-bottom": "48px",
    },
  },
  {
    type: "header",
    content:
      "A Quick Note on the Differences Between Illinois S Corporations and C Corporations ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `When a corporation is initially created, it is automatically assumed to be a C Corporation and only becomes an S Corporation (and will be taxed as such) if you file the <a href="https://www.irs.gov/forms-pubs/about-form-2553" target="_blank" rel="noopener noreferrer">IRS Small Business Tax Election form 2553</a>.`,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In most cases when we discuss “corporations” in this guide, we’re talking about both C Corporations and S Corporations. If anything is relevant to just one or the other, we’ll declare that. ",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Advantages of Forming a Corporation in Illinois",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Illinois corporations have several benefits for business owners. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business.",
        "This means that any liabilities created by your corporation (debts, obligations, damages, bankruptcy or other liabilities) should not impact your personal money, property or assets — they are considered to be completely separate from a legal perspective.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content: "Advantages of Forming an S Corporation in Illinois",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, Illinois S Corporations provide several other advantages. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "S Corporations can have up to 100 shareholders.",
        "Running an S Corporation in Illinois is simpler than running a C Corporation.",
        "It is easy to transfer ownership in an S Corporation by selling your stock.",
        `In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax. Find out how this can save you money using our <a href="/s-corporation-tax-calculator/">S Corporation tax calculator.</a>`,
        `LLCs can <a href="/research-topics/llc-info/can-a-limited-liability-company-llc-be-taxed-as-an-s-corporation/">choose to be taxed as S Corporations</a> to take advantage of this.`,
        `You can find more <a href="https://www.incfile.com/blog/post/why-an-s-corporation-might-secure-success-for-your-small-business/">advantages of forming an S Corporation</a> in Illinois.`,
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Advantages of Forming a C Corporation in Illinois",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, Illinois C Corporations provide several other advantages. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Ownership in a C Corporation is very fluid and determined by who owns stock in the business.",
        "C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
        "C Corporations can sell stock to investors inside and outside the U.S.",
        "C Corporations can issue more than one type of stock.",
        "C Corporations can raise more funds by issuing more stock.",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Points About Forming a Corporation in Illinois",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here are some areas to be aware of when you’re creating a corporation in Illinois. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Corporations are formed on the state level. You will need to form a new corporation for any state where you want to have an office or do business.",
        "All Illinois corporations must issue stock to shareholders.",
        "All Illinois corporations must hold Annual General Meetings (AGMs).",
        "All Illinois corporations must have an elected Board of Directors.",
        "All Illinois corporations must appoint officers.",
        "Money earned by Illinois C Corporations will be subject to “double taxation” through tax paid on both company profits and dividends paid to shareholders.",
        "Only U.S. citizens and residents can own stock in Illinois S Corporations.",
        "S Corporations are limited to 100 shareholders and one class of stock.",
        "All Illinois corporations must follow stringent compliance, rules and regulations. This includes financial reports, adopting bylaws, corporate formalities and the like.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "text",
    content: `Are you ready to start your Illinois corporation? If so, we can help. We provide comprehensive corporation formation services for both <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=IL">S Corporations</a> and <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=IL">C Corporations</a> in Illinois.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Start Your Illinois Corporation in Six Steps ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Now that you’ve decided a corporation is right for you, here’s how to form one. At Incfile, we make the corporation formation process easy. With prices starting at just $0 plus the Illinois filing fee, you get excellent value too. ",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Start your Illinois S Corporation now ",
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Start your Illinois C Corporation now ",
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
    },
    marginBottom: 56,
  },
  {
    type: "accordion",
    header: 3,
    content: {
      items: [
        {
          question: "Step One — Name Your Illinois Corporation",
          list: [
            "Choose a unique, distinct, original name for your Illinois corporation",
            "This name cannot be used by another business in Illinois",
            "This name cannot be confused with the name of another business in Illinois",
            `See if the name is available by searching for it on the <a href="https://www.ilsos.gov/corporatellc/"target="_blank" rel="noopener noreferrer">Illinois Secretary of State website</a>`,
            "The name of your business must end with “Corporation,” “Incorporated,” “Limited” or an abbreviation of one of these",
            "For example: “Illinois Natural Resources Survey Reports Corporation” or “Chicago Sports Appreciation, Inc”",
            "If you’re not forming the business right away, you can reserve the name",
          ],
        },
        {
          question:
            "Step Two — Establish Street and Mailing Addresses for Your Illinois Corporation",
          answer:
            "An Illinois corporation must have a designated address. That could be your home address (if you’re running the company from your residence), where your office is located or any physical address of your preference — even outside of Illinois. It cannot be a P.O. Box. ",
        },
        {
          question:
            "Step Three — Appoint a Registered Agent for Your Illinois Corporation",
          answer:
            `Every Illinois corporation must have a “ <a href="/manage-your-company/registered-agent/">Registered Agent</a> ” who receives official legal and tax correspondence and has responsibility for filing reports with the Illinois Secretary of State. Your Registered Agent must have a physical street address in Illinois. <br/><br>` +
            "A Registered Agent could be you, a director or an officer of the corporation. Here at Incfile we always recommend using a proper Registered Agent service since they provide several benefits: ",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agentservice to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed on public records on the Secretary of State's website. If you do not want your own name and address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence delivered, since the type of documents delivered to the registered agent require a signature on delivery.",
            "Some people travel or are not always at their business location to receive these documents.",
          ],
          text: `At Incfile, all of our packages include a <a href="/manage-your-company/registered-agent/">Registered Agent service</a> that is free for the first year and $99 per year thereafter. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf. `,
        },
        {
          question: "Step Four — Draft Your Articles of Incorporation",
          answer: `The legal document required to create your new corporation is called the <a href="https://www.incfile.com/blog/post/what-are-articles-of-incorporation-and-do-i-need-to-purchase-them-from-incfile/">Articles of Incorporation</a>. You will need to gather various details for your Illinois filing including:`,
          list: [
            "The corporation’s name",
            "The corporation’s purpose",
            "The corporation’s mailing address and street address",
            "The corporation's Registered Agent and their address",
            "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
            "How long the corporation will exist (this can be perpetual)",
            "The name and address of the incorporator",
          ],
        },
        {
          question:
            "Step Five — File Your Articles of Incorporation With the Illinois Secretary of State",
          answer: `Once your articles are drafted, you can file them with the Illinois Secretary of State. Filing your Articles of Incorporation creates your Illinois corporation. You can do this online, mail in a form or have <a href="${process.env.ORDER_URL}/form-order-now.php">Incfile do it on your behalf. </a>`,
        },
        {
          question:
            "Step Six — Complete the Legal and Compliance Requirements for Your Illinois Corporation",
          answer:
            "Once your corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
            "File IRS Small Business Tax Election form 2553 if you want to be treated as an S Corporation",
            "Any S Corporations that are formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents",
            "Create and issue stock certificates to your shareholders",
            `Apply for <a href="/business-license-research-package/">business licenses and permits</a>. You may require licenses from your state, county, township and various industry or federal bodies`,
            `Get an <a href="/manage-your-company/tax-id-ein/">Employer Identification Number (EIN)</a>`,
            "File for taxes with Illinois Department of Revenue",
            "Get all formalities in place for employees, including unemployment, disability, payroll, insurance and taxes",
            "Appoint a board of directors for the corporation",
            "Appoint officers to the corporation",
            "Get a corporate records book to capture all your important corporate information",
          ],
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Starting Your Illinois Corporation — Useful Resources ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Illinois Secretary of State website ",
      url: "http://www.cyberdriveillinois.com/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Business information from the Illinois Secretary of State ",
      url:
        "http://www.cyberdriveillinois.com/publications/business_services/dfc.html",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Checking name availability for your Illinois corporation ",
      url: "https://www.ilsos.gov/corporatellc/",
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Form an Illinois Corporation Without Breaking the Bank",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing the Articles of Incorporation or Certificate of Formation. Our basic package also provides a free Registered Agent service for the first year. If you're looking for help to start a corporation, we can help you start an S Corporation or a C Corporation .",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
  },
];

export const naming = [
  {
    type: "header",
    content: "Naming Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "You need the right name for your Illinois corporation. Choosing the right name is vital because it tells your suppliers, customers and employees what your business does. Illinois has several rules and regulations about what you can call your new business. Let’s explore what they are.",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "General Illinois Secretary of State Rules on Naming Your Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The name of your corporation needs to be unique and not used by another corporation or business operating in Illinois",
        `The name cannot be confused with any other business operating in Illinois
        <ul></br>
        <li>You can <a href="https://www.ilsos.gov/corporatellc/" target="_blank" rel="noopener noreferrer">search for other businesses in Illinois here</a></li>
        <ul>`,
        "The name of your business must end with “Corporation,” “Incorporated” or “Limited”",
        "These suffixes can be abbreviated",
        "If you’re not forming the business right away, you can reserve the name.",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "Don't Confuse Your Illinois Corporation Name With Another Business Name",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        `The following terms can’t be used to say your business name is different from another business name:
        <ul></br>
        <li>Suffixes like Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., corporation</li>
        <li>Definite articles like “A,” “And,” “An,” “&,” “The,” etc.</li>
        <li>The singular, plural or possessive forms of a word</li>
        <li>Punctuation and symbols</li>
        <li>Abbreviations of words</li>
        <li>Different typefaces, fonts, superscript, subscript, etc.</li>
        </ul>`,
        "It should not be possible to confuse the name of your business with the name of another Illinois business",
        "For example, you can’t claim that Purple People Co., Purple People Corporation, Purple People Incorporated, Purple People Corp. or Purple People are different from one another.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Rules on Words You Can’t Use in Your Business Name",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        `Language stating/implying that the corporation will conduct the business of:
        <ul></br>
        <li>Insurance, assurance, indemnity or the acceptance of savings deposits</li>
        <li>Banking, unless otherwise allowed by the Commissioner of Banks and Real Estate</li>
        <li>A corporate fiduciary, unless otherwise allowed by the Corporate Fiduciary Act</li>
        </ul>`,
        "The Illinois corporation name can’t suggest affiliation with any federal or state government entity or agency.",
        `You can also be an Illinois corporation with a different “doing business as” name. In Illinois these are known as “assumed names” and need to be registered with the Secretary of State. Learn about <a href="/blog/post/understanding-dba-doing-business-as/">DBA names</a> in your state.`,
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Illinois Information on Naming a Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "You can reserve a name. Please note that you do not need to reserve a name if you are forming a corporation right away.",
        "By registering a corporation, the name will automatically be held for your business. You would normally only reserve a name if you are not planning on forming the new company anytime soon.",
        "A name can be used to form any type of business entity, not just a corporation.",
        "Just filing a name registration doesn’t guarantee you will be granted the name. You should wait until your corporation is legally formed before using the name for anything else.",
        `You might also want to use a “<a href="https://www.incfile.com/blog/post/understanding-dba-doing-business-as/">Doing Business As (DBA)</a>” or “Assumed Name” if you are trading under a different name than your official company name.`,
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "Rules on Infringing on Service Marks or Trademarks Inside or Outside Illinois",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the rules above, it’s also vital to see if your Illinois corporation name might infringe on the trademark or service mark of another business. For example, it might not be a good idea to call yourself “General Electric Research Services,” since General Electric is a trademark.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: `The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our new <a href="/trademark-name-search/">Trademark Search and Registration service</a>. You should also bear in mind that your Illinois business entity name cannot be substantially similar to an existing trademark or service mark.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "What Should You Call Your Illinois corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      text:
        "Finding the perfect name can be tough. You want a business name that:",
      list: [
        "Describes what your Illinois business does",
        "Appeals to your planned audience",
        "Makes your business easy to find",
        "Is relatively unique",
        "Doesn’t limit you to a particular location or type of product or service",
      ],
    },
    color: color.green3,
    marginBottom: 24,
    curve: false,
  },
  {
    type: "text",
    content: `Fortunately, we have some good advice on seeking out the perfect business name for your Illinois corporation. <a href="https://www.incfile.com/blog/post/llc-name-search-50-states/">Check out our guidance on naming your business</a> and get inspired.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "You’ve Found the Perfect Name, What Next?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your Illinois corporation and form either an S Corporation or a C Corporation today.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
  },
];
export const agents = [
  {
    type: "header",
    content: "Registered Agents and Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content: `Your Illinois corporation needs to have a <a href="/manage-your-company/registered-agent/">Registered Agent</a>. They’re chosen by you and can accept legal notices and other correspondence for your Illinois corporation on your behalf. There are some rules on choosing Registered Agents:`,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you choose a person as a Registered Agent, he or she must reside in Illinois",
        "If you choose a business as a Registered Agent, they must be able to conduct business in Illinois",
        "Your Registered Agent must have a physical street address (not a P.O. Box)",
        "They must be available in person to sign for any delivered correspondence during normal business hours",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Our Registered Agent service includes a dashboard where you can review documents received, get automatic notification of correspondence and get free forwarding of all official, legal correspondence.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incorporate your S Corporation or C Corporation through us to get your first year of Registered Agent services for free.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Illinois Registered Agents: What Type of Legal Notices Might They Receive?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "An Illinois Registered Agent may receive, on behalf of your corporation:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Correspondence from the Illinois Secretary of State",
        "Service of process notices (e.g., if your corporation is sued or required to appear in court)",
        "Official Illinois state and federal government correspondence and notifications",
        "Tax forms and requests to complete permits, company filings and reports",
      ],
    },
    color: color.blue3,
    marginBottom: 32,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: "text",
    content:
      "Note that the Illinois Secretary of State does need the address of your Registered Agent and it needs to be a street address, not a P.O. Box.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Acting as Your Own Registered Agent for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you live in Illinois, you might choose to be the Registered Agent for your corporation. Be aware that there may be some drawbacks to this:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent must have a physical street address in the state where you are forming the company. Some people establish companies outside of the state they live in and will need to use a Registered Agent service to provide the address.",
        "You always need to have someone on hand to receive important documents for your business during business hours (typically 9 a.m. to 5 p.m. Monday to Friday). A person must always be available to sign for legal correspondence. If you can’t always be around, consider using a third-party Registered Agent service like Incfile.",
        "The Registered Agent’s name and address are part of the public record and available through the Illinois Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
        "If you change your Illinois business address or move out of state, you don’t need to file additional documentation with the Secretary of State for the new address of your Registered Agent. You will need to set up a new Registered Agent service in the new state.",
      ],
    },
    color: color.orange3,
    marginBottom: 24,
    curve: false,
  },
  {
    type: "text",
    content:
      "There are more considerations, but this should help you with your decision to use a <a href='/manage-your-company/registered-agent/'>Registered Agent service</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "If You Don’t Have a Registered Agent for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Failing to have a Registered Agent in Illinois can cause your business issues. These include:",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your Illinois corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Illinois corporations need to remain in good standing with the Secretary of State. If correspondence is undeliverable, certain states may revoke your right to do business.",
        "A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Illinois corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "Incfile Will Provide a Registered Agent for Illinois on Behalf of Your Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here at Incfile, we have a reliable Registered Agent Service. We provide the first year of this service completely free if you choose to form your corporation with us. After the first year, it’s only $99 per year — a small price for your peace of mind. Here’s what our service provides:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "An always available Registered Agent service that can receive correspondence, documents and legal proceedings on your behalf",
        "A digital dashboard where you can access, store and retrieve any information we’ve received for your business",
        "Email notification whenever we receive documents for your business",
        "Automatic forwarding of all legal correspondence, documentation and information directly to you",
      ],
    },
    color: color.orange3,
    marginBottom: 0,
    curve: false,
  },
  {
    type: "text",
    content:
      "Form your C Corporation or S Corporation with us today to get your first year of Registered Agent service for free, including easy access to our comprehensive online dashboard.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 72,
  },
];
export const filing = [
  {
    type: "header",
    content: "Illinois Corporation Form, Filing and Permit Requirements",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "If you want to form a corporation in Illinois, there are certain forms, requirements and legalities you must have in place.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Below is a rundown of what you’ll need to do, together with information on the requirements for your Illinois corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to set reminders in your calendar to file forms regularly if you're filing yourself. At Incfile, we provide an optional, paid renewal service and can take care of certain renewals for you when you instruct us to do so.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Articles of Incorporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `<a href="https://www.incfile.com/blog/post/what-are-articles-of-incorporation-and-do-i-need-to-purchase-them-from-incfile/">The Articles of Incorporation</a> are the formal documents filed with the Illinois Secretary of State to create your corporation. They provide certain information about your business. Once the documents are filed with the Secretary of State, they legally create your business as a corporation in Illinois. Here’s what’s typically included:`,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The corporation’s name",
        "The corporation’s purpose",
        "The corporation’s mailing address and street address",
        "The corporation's Registered Agent and their address",
        "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
        "How long the corporation will exist (this can be perpetual)",
        "The name and address of the incorporator",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: `Here at Incfile, we automatically create and file your Certificate of Formation/Articles of Incorporation on your behalf when you start your <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL">S Corporation</a> or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL">C Corporation</a> with us. You only need to file your certificate once. There is a fee levied by the Secretary of State of Illinois to cover your filing.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Business Licenses and Permits for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of Illinois corporation you’re running, you will need to obtain various business licenses and permits. These are not required to form your IL corporation, but you must have them to legally carry out business. It’s vital to understand the permits and licenses required for your business to operate in compliance in your jurisdiction.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "A Local Business Permit or License From Your City",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Various cities in Illinois have slightly different rules and fees for permits and licenses for corporations. Check with your local Illinois city administration to see what their rules are. You will need a separate permit or license for each city your Illinois corporation operates in.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Additional Local Business Permits and Licenses",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of Illinois. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of Illinois website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Federal Licenses and Permits",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of Illinois business you are running, you may need to get licenses and permits from the federal government and various national agencies. You can find a complete list on the U.S. Small Business Administration website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Incfile Business License Research Package for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `Because permits vary widely depending on the type of Illinois corporation you are operating and where you are located, we provide a comprehensive <a href="/business-license-research-package/">Business License Research Package</a>. It’s designed to tell you all of the licenses and permits necessary for your new corporation. It includes:`,
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "A comprehensive package of all the licenses, permits and tax registrations required for your business",
        "The application forms to file with the appropriate licensing authorities",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Your customized Business License Research Package will be emailed to you within two days of your Illinois Corporation being formed by the Illinois Secretary of State.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Special Illinois Corporation Requirements",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Because you’re forming a corporation, there are certain other legal, regulatory and compliance areas you need to meet.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Create Bylaws for Your Illinois Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Bylaws are the formal, internal rules that your Illinois corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Defining your Illinois registered office and IL Registered Agent",
        "Stating details of the Annual General Meeting (AGM), including date, place, time and other relevant information",
        "Other details from the AGM, including the order of business, notice, voting record, quorum, proxies, shareholder actions and more",
        "Stating when a special shareholders’ meeting may be held and the circumstances that could lead to it",
        "Details of stock certificates, ownership, issuing and transfer",
        "Details of the Board of Directors including how they are elected and appointed, their number, the powers they have, how they can be removed, regular meetings and agendas, executive committees, remuneration and other areas",
        "Details of the various officers in the corporation including how they are chosen and appointed",
        "Designations of officers in the Illinois corporation including president, vice presidents, secretary, assistant secretaries and treasurer",
        "Rules around dividends, declarations and reserves",
        "Any other formalities the corporation believes need to be documented",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Issue Stock to Shareholders",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Ownership in a Illinois corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Appoint a Board of Directors",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must appoint directors to all positions in line with the agreed Illinois corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Assign Officers to the Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Officers are the individuals who manage the Illinois corporation on a day-to-day basis. At minimum a IL corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Get a Corporate Records Book",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Your Illinois corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Hire Employees",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `You may need to hire additional employees for your Illinois corporation. You will need an <a href="/manage-your-company/tax-id-ein/">Employer Identification Number (EIN).</a> You may also need to get <a href="https://www2.illinois.gov/sites/iwcc/about/Pages/insurance.aspx" target="_blank" rel="noopener noreferrer">Worker’s Compensation Insurance</a> and General Liability Insurance.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Hold an Annual General Meeting for Your Illinois Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must hold a yearly meeting that all directors, officers and shareholders of the IL corporation are invited to. The purpose of an AGM is generally to:",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Discuss important information",
        "Make strategic decisions",
        "Understand opportunities, risks and issues",
        "Vote on important resolutions and other matters",
      ],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Illinois Corporation Tax Registration",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to register for certain taxes when you form your corporation. These include:",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Federal income tax",
        "Corporation tax (only for C Corporations)",
        "Illinois state tax",
        "Sales and Use Tax",
        "Employment taxes",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "You can find details on the <a href='http://www.revenue.state.il.us/'>Illinois Department of Revenue website</a>.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Annual Report for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must file an annual report with the Illinois Secretary of State on an annual basis. If you do not file your annual report each year, you will be charged a late fee and your corporation may be dissolved. Here at Incfile, we can file your annual report on your behalf.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "As you can see, there are several forms and permits you need to submit to conduct business, both initially and on an annual basis.",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "Certificate of Good Standing for Your Illinois \n" + "Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      'You may need a <a href="/manage-your-company/certificate-of-good-standing/">Certificate of Good Standing</a> for certain business-related services like opening a bank account. You can order one from us and we will also send you courtesy emails when your compliance due date nears.',
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Ready to Start Your Illinois Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Illinois corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Our basic package also provides a free Registered Agent service for the first year. If you're looking for help starting an S Corporation or C Corporation, our comprehensive services provide outstanding value.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 24,
  },
];
export const taxes = [
  {
    type: "header",
    content: "Taxes and Fees for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Here’s a breakdown of the likely taxes and fees you’ll incur when you start and run a corporation in Illinois.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Illinois Corporation Fees",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Turnaround times for forming a corporation in Illinois",
          answer: `You will normally have the option of a “Standard” turnaround time and an “Expedited” turnaround time for forming your corporation. <a href="/state-filing-times/">You can learn about those times here.</a>`,
        },
        {
          question: "Fees for forming a corporation in Illinois",
          answer:
            "Learn about <a href='/state-filing-fees/'>standard filing costs here</a>.",
        },
        {
          question: "Illinois State Annual Report Fee",
          answer: "A yearly fee when you file your annual report.",
        },
        {
          question: "Illinois Permits and Licenses",
          answer: `Various fees for renewing your licenses and permits on a regular basis. These depend on the type of business you are operating and where you are located. They vary from city to city and industry to industry. <a href="/business-license-research-package/">We have a service</a> that will tell you what permits and licenses you need. `,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: "text",
    content:
      "The way that S Corporations and C Corporations pay tax is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Taxes You and Your Illinois Corporation Need to Pay",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Taxes Payable by All Corporations",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    header: 4,
    content: {
      items: [
        {
          question: "Payroll Tax",
          answer:
            "Your corporation will need to pay employer payroll tax on salaries paid to employees.",
        },
        {
          question: "Illinois State Income Tax",
          answer:
            "You will pay Illinois state income tax on your earnings. <a href='http://www.revenue.state.il.us/#&panel1-1'>Find out more here</a>.",
        },
        {
          question: "Illinois State Sales/Use Tax",
          answer: `If you’re selling products or services in Illinois you may need to pay a state sales tax. <a href="https://www2.illinois.gov/rev/Pages/default.aspx">You can register and pay state sales tax here.</a>`,
        },
        {
          question: "Illinois Other Taxes",
          answer: `You may need to pay other taxes and fees, depending on the type of business you run. <a href="http://www.revenue.state.il.us/Businesses/">Learn about other Illinois taxes.</a>`,
        },
      ],
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Employee Insurance and Taxes",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you employ others, you will need to pay insurance and taxes to the state for each employee. <a href='https://www2.illinois.gov/idol/Employers/Pages/default.aspx'>Here’s how to register for the various employee taxes, insurance and other costs</a>.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Taxes Payable by All Individuals Working for Corporations",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Federal Income Tax on Earnings, Dividends and Distributions",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will also need to pay regular federal income tax when you file your tax return every year. Note that you will be able to apply your standard deduction, personal exemption and business expenses to this tax.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Taxes Payable by S Corporations",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Self-Employment Tax",
        text: `Because your Illinois corporation income flows through to your personal tax return, you must pay self-employment tax (also known as FICA, Social Security or Medicare tax) on your earnings. This is typically at a rate of 15.3 percent. You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary” so it would not be subject to self-employment tax. <a href="s-corporation-tax-calculator/">Find out how this can save you money.</a>`,
        svg: SelfEmployedTaxSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        marginTop: "71px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
    ],
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Taxes Payable by C Corporations",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Corporation Tax",
        text:
          "Unlike the Limited Liability Company and the S Corporation, a C Corporation is required to file a corporate tax return and pay corporation taxes on any profits. When those taxed profits are paid to shareholders as dividends, they will also be subject to taxation on that individual’s tax return. This is known as “double taxation.”",
        svg: CorpoTaxSVG,
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        marginTop: "71px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "C Corporation Tax Rates",
        text:
          "The income of the C Corporation is taxed at the corporate level and then again at the shareholder level. The standard corporation tax rate is 21 percent.",
        svg: PhoneSVG,
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        marginTop: "71px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Stock Dividends From C Corporations",
        text:
          "A C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
        svg: DividentsSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "71px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Ready to Start Your Illinois Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Illinois corporation. We guide you through the process and handle most of the administrative steps, such as filing the Articles of Incorporation/Certificate of Formation on your behalf. Our basic package also provides a free Registered Agent service for the first year.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=S-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=C-Corporation&entityState=IL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 24,
  },
];
export const afterFormation = [
  {
    type: "header",
    content: "Understand Your Ongoing Corporation Filing Requirements",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content: `Each state requires different forms such as your business <a href="/manage-your-company/annual-report/">annual reports</a> and state franchise tax reports to be filed at different times. It’s important to understand when each form needs to be filed and when you need to refile the form. Complying with the <a href="/compliance-filing-requirement/">form filing requirements</a> keeps your business in <a href="/manage-your-company/certificate-of-good-standing/">good standing</a> with the state. Failure to file these reports can lead to the company being revoked or administrative <a href="/manage-your-company/dissolution/">business dissolution</a>. Incfile includes lifetime company alerts with courtesy email reminders to inform clients of an upcoming filing requirement with all of our state filing packages.`,
    marginBottom: 48,
  },
  {
    type: "text",
    content: "<b>Illinois's Ongoing Corporate File Requirements:</b>",
    marginBottom: 24,
  },
  {
    type: "dynamic_filing_requirement",
  },

  {
    type: "header",
    content: "Protect Your Business Name With a Trademark",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A trademark is an essential asset for your business because it protects the brand name and identity that you worked so hard to create. When you secure a federal trademark for your business brand, it gives you exclusive rights to use your business name, logo or slogan once the trademark is approved. Federal Trademark Protection also prevents other businesses from using your brand name and brand identity. Incfile is happy to help with conducting a trademark name search on your Corporation business name. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing is properly prepared and submitted to the government office, and provide sound legal advice throughout the entire process.",
    marginBottom: 48,
  },
  {
    type: "text",
    content: "Benefits of Incfile's Trademark service include:",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      list: [
        "Legal counsel from an experienced trademark attorney",
        "A thorough search of existing trademarks",
        "A registered trademark with the USPTO",
        "Handling all correspondence with the USPTO until the name is approved.",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Finances & Accounting for Your Illinois Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you form your corporation in Illinois, there are important next steps to ensure your business finances and accounting are organized for tax season and peace of mind, and that your personal and business finances are kept separate to ensure safety of your personal assets. With the right accounting steps, your business will run smoothly and be set up for increased profits and success.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Choose a Bank for Your Illinois Corporation",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `The right business checking account for your business should have minimum fees, so that your money goes into the business or your own checking account instead of spending on hidden, tricky bank fees. According to <a href="https://www.nerdwallet.com/best/banking/free-business-checking-accounts">NerdWallet</a> — who looked at the 10 biggest banks in the U.S. and some additional online banks — these are the best four free business checking accounts for your Corporation:`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Separate Business & Personal Expenses",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your Illinois Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='http://expensify.com/'>Expensify</a> to track and tag business expenses from your mobile phone.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Set Up Accounting Software",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Choosing the right accounting software will allow you to track your accounts receivable — the money that is flowing in and out of your Corporation. Accounting software will allow you to track bills, invoices, expenses and customers. This is also another important step in simplifying your year-end tax burden. With a clear, separate business checking account and card and an organized accounting software system, you’ll (barely) dread tax season as a business owner.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here are some favorite accounting software options for Corporation business owners:",
    marginBottom: 24,
  },
  {
    type: "whiteboxes",
    content: [
      {
        link: {
          text: "QuickBooks",
          url:
            "https://quickbooks.intuit.com/oa/selfemployed/?utm_source=oaqbse_aff&utm_medium=aff&utm_content=priorityCode=3969702399&cid=aff_cj_7898336&cvosrc=affiliate.cj.7898336&cvo_campaign=qbo_trial&priorityCode=3969702399&aid=12170614",
        },
        text:
          "This is a top option for a lot of business owners and starts out at only $10 a month. You can automatically important banking transactions, track your customers and vendors and related bills and expenses, and integrate with a lot of other online finance tools. If you hire an accountant or tax support, they will all likely support QuickBooks. You can even use an online version in addition to a desktop version of their software. The drawback is that the learning curve for QuickBooks can sometimes be a bit steep.",
      },
      {
        link: {
          text: "Xero",
          url: "https://www.xero.com/",
        },
        text:
          "Xero is online accounting software that is a great option for those who find QuickBooks to be too complicated and difficult to understand. Their plans start out at $20 per month.",
      },
      {
        link: {
          text: "FreshBooks",
          url:
            "https://www.freshbooks.com/?ref=10400&utm_source=sas&utm_medium=affiliate&utm_campaign=938781",
        },
        text:
          "Freshbooks is online accounting software that allows you to also track your time, expenses, collaborate on projects and view accounting reports. One drawback is that it doesn’t currently have a way to track invoices that your business needs to pay. But, accounts start out at $15 per month.",
      },
      {
        link: {
          text: "Bench",
          url: "https://bench.co/",
        },
        text:
          "Bench not only allows you to track your accounts receivable, but they include the help of a real-life bookkeeper to run your accounting every month. For a Bench account starting out at $125 a month, this is quite the deal instead of hiring your own bookkeeper.",
        marginBottom: "48px",
      },
    ],
  },
  {
    type: "header",
    content: "Determine How You’ll Accept Credit Cards",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you use QuickBooks or Freshbooks, you’ll be able to accept credit cards to pay for invoices. If you have a brick and mortar location for your small business, you want to look into offering payments through a service such as <a href='https://shopify.com/'>Shopify</a> or <a href='https://squareup.com/us/en'>Square</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Look Into Business Funding Options",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `In case your business runs out of cash flow, you want to have a backup option so your business doesn’t go under. You can raise capital from investors, ask friends or family for loans, get a <a href="http://t.tihop.com/cgi/r?;n=203;c=1666272;s=7273;x=7936;f=201908011042310;u=j;z=TIMESTAMP;src=663024"target="_blank" rel="noopener noreferrer">business credit card</a>, take an online business loan, or look into government financing using the <a href='https://www.sba.gov/node/13710'target="_blank" rel="noopener noreferrer">SBA & BusinessUSA’s financing tools</a>. Also, it’s important to remember that you can also bootstrap your business — which means, only using the funds you have in your bank account and not expanding until you get more business income.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Business Operations & Marketing for Your Illinois \n" + "Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Build a Business Website",
        text:
          "Having a great online presence for your business is the number one way people will find you. You need to start with buying a domain name using a service such as <a href='https://www.namecheap.com/?utm_source=SAS&utm_medium=Affiliate&utm_campaign=938781&affnetwork=sas'>NameCheap</a>. Then you need to choose a service to host your website such as <a href='http://xoopah.com/'>Xoopah.com</a>. Finally, design your website using a tool such as Squarespace or WordPress. Make sure your website includes important business information such as how to contact you and business hours.",
        svg: WebSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent",
      },
      {
        header: "Choose a Virtual Phone System",
        text:
          "Your business needs a phone number so that your customers, employees and vendors can reach you. A great option is to look into a tool such as <a href='https://grasshopper.o9o4.net/c/1320313/503375/8652'>Grasshopper</a>, which allows you to get a business phone that actually forwards to your cell phone, so you never miss an important call.",
        svg: PhoneSVG,
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent",
      },
      {
        header: "Design a Business Logo",
        text:
          "A logo will reflect your business branding everywhere your customers interact with you — on your website, on your invoices, in your email signature, on business cards and more. Instead of trying to design a logo yourself, try a logo making service such as <a href='http://www.jdoqocy.com/click-7898336-11012409-1442446947000?cm_mmc=CJ-_-4607662-_-7898336-_-99designs%20-%20Text'>99 Designs</a> or buy some really high-quality pre-made logos you can customize on <a href='https://creativemarket.com/'>CreativeMarket</a>.",
        svg: LogoSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent",
      },
      {
        header: "Get Business Cards Created",
        text:
          "Once you have a logo, create nice looking business cards that you can hand out when you’re out networking or even running errands. You never know when a conversation about your business will come up, and you want to be able to give someone a place to research your business and contact you. A great tool to create inexpensive business cards is <a href='https://www.vistaprint.com/business-cards?txi=15626&%3bxnid=TopNav_Business+Cards&%3bxnav=TopNav&%3bGP=04%2f28%2f2017+14%3a14%3a22&%3bGPS=4378726571&%3bGNF=0&rd=1'>Vistaprint</a>.",
        svg: CardSVG,
        backgroundColor: color.blue3,
        shadowColor: shadow.blue3,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent",
      },
    ],
    marginBottom: 50,
  },
  {
    type: "header",
    content:
      "Choose the Best Business Tools to Run Your Illinois \n" + "Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to accounting software, there is a number of online business software options that will lift a number of menial tasks and burdens off your full business-owner plate. Below are important business functions for your Corporation and what we think are the best business tools for your Illinois Corporation.",
    marginBottom: 24,
  },
  {
    type: "tools-list",
    content: [
      {
        title: "Project Management",
        tools: ["Asana", "Basecamp", "Trello"],
      },
      {
        title: "Productivity",
        tools: ["Todoist", "Evernote"],
      },
      {
        title: "Collaboration",
        tools: ["Google Docs", "Dropbox", "Box"],
      },
      {
        title: "Social Media Management",
        tools: ["Hootsuite", "Buffer", "Sprout Social", "BuzzSumo"],
      },
      {
        title: "Communication",
        tools: ["Skype", "Grasshopper", "Slack", "Yammer"],
      },
      {
        title: "Email Marketing",
        tools: ["MailChimp", "CampaignMonitor"],
      },
      {
        title: "Advertising",
        tools: ["Google AdWords", "Bing Ads"],
      },
      {
        title: "Marketing Automation",
        tools: ["Hubspot", "Hatchbuck"],
      },
      {
        title: "Customer Relationship Management (CRM)",
        tools: ["SalesForce", "Insightly", "Zoho CRM"],
      },
      {
        title: "Customer Support",
        tools: ["ZenDesk", "GetSatisfaction", "SurveyMonkey"],
      },
      {
        title: "Human Resources",
        tools: ["Gusto", "Hire Athena"],
      },
      {
        title: "Legal",
        tools: ["DocuSign", "RightSignature"],
      },
      {
        title: "Ecommerce",
        tools: ["Shopify", "Recurly", "Vendio", "Square"],
      },
      {
        title: "Website Development",
        tools: ["SnapWeb", "Squarespace", "Jira", "Wordpress"],
      },
      {
        title: "Analytics",
        tools: ["Google Analytics", "SumAll"],
      },
      {
        title: "SEO",
        tools: ["SemRush", "KWFinder", "Moz", "AHREFS"],
      },
    ],
    tab: true,
  },
  {
    type: "header",
    content: "Start a Business Checklist",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you want to track your progress in getting your new business set up properly, we have a great virtual <a href='/starting-a-business-checklist/'>Start a Business Checklist</a> that includes everything you need to do to launch your business. It even features downloadable PDFs you can access to download and print.",
    marginBottom: 24,
  },
];
