import NewYorkCorpSVG from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
import EntitySVG from "../../images/icons/note-magnifing-glass.inline.svg";
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

import ProprietorshipSVG from "../../images/icons/icon-sole-proprietorship.inline.svg";
import LockpadSVG from "../../images/icons/icon-user-lockpad.inline.svg";
import ProcentSVG from "../../images/icons/icon-user-percentge.inline.svg";
import BillSVG from "../../images/icons/icon-person-bill.inline.svg";

import ArrowLeftSVG from "../../images/icons/icon-user-arrow-left.inline.svg";
import ChatSVG from "../../images/icons/icon-chat.inline.svg";
import BoardSVG from "../../images/icons/icon-board-of-directors.inline.svg";
import UserCheckmarkSVG from "../../images/icons/icon-user-checkmark.inline.svg";
import TodoSVG from "../../images/icons/icon-todo-list.inline.svg";
import QuestionSVG from "../../images/icons/icon-chat-question-mark.inline.svg";
import IdSVG from "../../images/icons/icon-registered-id.inline.svg";
import BillPadSVG from "../../images/icons/icon-bill-pad.inline.svg";
import DollarUpSVG from "../../images/icons/icon-dollar-arrow-up.inline.svg";

import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

const ORDER_URL = `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=NY`;

export const top = {
  header: `Why Form a Corporation in New York?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See Detailed Pricing`,
      url: ORDER_URL,
    },
  ],
};
export const launchBusiness = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business!`,
    url: ORDER_URL,
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
      name: `New York Corporations`,
      path: `/new-york-corporation/`,
      icon: NewYorkCorpSVG,
    },
    {
      name: `How To Guide`,
      path: `/new-york-corporation/start-a-ny-corporation`,
      icon: EntitySVG,
    },
    {
      name: `Naming Your Corporation`,
      path: `/new-york-corporation/how-to-name-your-corporation`,
      icon: PenSVG,
    },
    {
      name: `Registered Agents`,
      path: `/new-york-corporation/registered-agents-new-york`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Filing Requirements`,
      path: `/new-york-corporation/form-filling-permit-requirements`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/new-york-corporation/taxes-and-fees-for-your-corporation`,
      icon: PriceTagSVG,
    },
    {
      name: `After Forming`,
      path: `/new-york-corporation/know-your-ongoing-filing-requirements`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
    type: "header",
    content: "Choosing the Right Type of New York Corporation",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "New York is a great state in which to start a business. From the metropolis of the Big Apple to the other cities and regions of the Empire State, there are plenty of opportunities for entrepreneurs. If you’re looking to form a corporation in NY, you’re in the right place — this is where we’ll guide you through every step of what you need to do to start a business in New York State.",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "Should You Form an LLC, an S Corporation or a C Corporation in New York State?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most New York entrepreneurs will need to decide between making their business an LLC, an S Corporation or a C Corporation. Each entity is treated differently by the NY Department of State, the law, the IRS and other official bodies.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here’s a quick overview of each type of <a href='/new-york-entity-search/'>business entity</a>.",
    // content: "Here’s a quick overview of each type of business entity.",
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    header: 3,
    content: [
      {
        header: "New York Sole Proprietorships and Partnerships",
        text:
          "These are the simplest type of business and will be the “default” type of NY business you have if you do not choose to form a separate business entity. These types of businesses do not provide you with any special protections or benefits and can leave your personal assets vulnerable. We do not recommend them.",
        svg: ProprietorshipSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "New York Limited Liability Companies (LLCs)",
        text:
          "LLCs are a great option for smaller NY businesses. LLCs are quick and easy to create, inexpensive to administer, light on regulations and have simple taxation and rules.",
        svg: LockpadSVG,
        link: {
          text: "Learn how to create an LLC in New York",
          url: "/new-york-llc/",
        },
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "New York S Corporations",
        text:
          "A NY S Corporation is the middle-ground between a simple LLC and the more complex C Corporation. They have more complex regulations, taxation, compliance and legal requirements than an LLC, but they do provide tax advantages for their owners.",
        svg: ProcentSVG,
        link: {
          text: "Learn about forming an S Corporation.",
          url: "/what-is-s-corporation/",
        },
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "New York C Corporations",
        text:
          "If you plan to start a large business or want to trade your shares on the public stock market, a NY C Corporation is your only choice. Be aware that New York C Corporations are subject to many rules and regulations, and they have a substantial amount of administrative overhead. Additionally, the tax rules for a New York C Corporation are not as advantageous as for a NY S Corporation or LLC.",
        svg: BillSVG,
        link: {
          text: "Learn about forming a C Corporation",
          url: "/what-is-c-corporation/",
        },
        backgroundColor: color.yellow2,
        shadowColor: shadow.yellow2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
    ],
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are some other business entity structures, including nonprofits, Limited Liability Partnerships (LLPs) and B Corporations, but they will not be relevant for the majority of entrepreneurs.",
    marginBottom: 24,
  },
  {
    button: [
      {
        content: {
          text: "Start Your New York S-Corporation",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        arrow: true,
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your New York C-Corporation",
          url: ORDER_URL,
        },
        arrow: true,
        theme: "primary56",
      },
    ],
  },
  {
    type: "header",
    content: "The Advantages of Forming a Corporation in New York State",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      text: "New York corporations have several benefits for business owners. ",
      list: [
        "New York corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business. ",
        "This means that any liabilities created by your corporation (debts, obligations, damages, bankruptcy or other liabilities) should not impact your personal money, property or assets — they are considered completely separate from a legal perspective. ",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content: "Choosing a New York S Corp or C Corp Over an LLC",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are several reasons an entrepreneur might choose to form a NY corporation instead of a New York LLC.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "When you incorporate a business as a corporation, the New York Department of State will treat your business as a C Corporation by default. A C Corporation will become an S Corporation when all shareholders wish to change the corporation’s status to an S Corporation with the IRS. You can make this choice when you first form your New York corporation or at any time after you incorporate.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are some similarities and some differences between S Corps and C Corps:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      list: [
        "Similarities: New York S Corporations and C Corporations have similar rules and regulations for liability, governance, management and ownership",
        "Differences: Key differences are taxation and the ease of buying, selling and transferring stock",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Taxation Benefits of a New York S Corporation Over an LLC ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A New York S Corporation will often pay less self-employment tax on owner earnings than an LLC. Note that a NY LLC can choose to be treated as an S Corporation for tax purposes by filing Form 2553 with the IRS, which removes this restriction. New York C Corporations do not have this advantage over an LLC. ",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about the tax benefits of S Corporations.",
      url: "/research-topics/c-corporation-info/what-is-the-form-2553/",
    },
    marginBottom: 32,
  },
  {
    type: "button",
    content: {
      text: "File From 2553 with the IRS",
      url: `${process.env.ORDER_URL}/s-corp-election-form`,
    },
    theme: "primary56",
    marginBottom: 64,
  },
  {
    type: "header",
    content:
      "New York State S Corporations and C Corporations Make It Much Easier to Transfer Stock and Ownership",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you want to easily transfer ownership through buying and selling stock, you will need a NY C Corporation or an S Corporation. C Corporations have much more flexibility than S Corporations, and both are better than LLCs for stock and ownership transfers. ",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "If You Want Maximum Flexibility for Buying and Selling Stock, Choose a New York State C Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      text:
        "C Corporations provide certain benefits when it comes to buying, selling and transferring stock. Here are the rules for both S Corps and C Corps: ",
      list: [
        "If you want up to 100 shareholders who are U.S. citizens or residents and want to issue one type of stock, you can be an S Corporation or a C Corporation. ",
        "If you want more than 100 shareholders, want to issue more than one type of stock or have international shareholders, you will need a C Corporation. ",
        "If you want to allow the public to buy and sell shares in your company after an Initial Public Offering (IPO), you will need a C Corporation. ",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn more about the differences between business entities",
      url: "/start-your-company/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Advantages of S Corporations in New York State",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      text:
        "In addition to the general benefits above, NY S Corporations provide several other advantages: ",
      list: [
        "New York S Corporations can have up to 100 shareholders.",
        "Running an S Corporation in New York is simpler than running a C Corporation.",
        "It is easy to transfer ownership in an S Corporation by selling your stock.",
        "In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax. Find out how this can save you money using our <a href='/s-corporation-tax-calculator/'>S Corporation Tax Calculator</a>.",
        "LLCs can <a href='/research-topics/llc-info/can-a-limited-liability-company-llc-be-taxed-as-an-s-corporation/'>choose to be taxed as S Corporations</a> to take advantage of this.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn more about the advantages of forming an S Corporation. ",
      url:
        "https://www.incfile.com/blog/post/why-an-s-corporation-might-secure-success-for-your-small-business/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Advantages of C Corporations in New York State",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, New York C Corporations provide several other advantages. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Ownership in a New York C Corporation is very fluid and determined by who owns stock in the business.",
        "New York C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
        "New York C Corporations can sell stock to investors inside and outside the U.S.",
        "New York C Corporations can issue more than one type of stock.",
        "New York C Corporations can raise more funds by issuing more stock.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content: "Important Points About Forming a Corporation in New York ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here are some areas to be aware of when you’re creating a corporation in New York. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "First, NY corporations are formed on the state level by filing Articles of Incorporation with the New York Division of Corporations. Incfile specializes in helping entrepreneurs form New York S Corporations and C Corporations and can collect the information and file this form on your behalf. ",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text:
        "Learn what you need to do to create a New York S Corporation or C Corporation ",
      url: "/new-york-corporation/start-a-ny-corporation/",
    },
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Rules and Regulations for New York Corporations",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "boxes",
    content: [
      {
        icon: ArrowLeftSVG,
        text: "All NY corporations must issue stock to shareholders",
      },
      {
        icon: ChatSVG,
        text: "All NY corporations must hold Annual General Meetings (AGMs)",
      },
      {
        icon: BoardSVG,
        text: "All NY corporations must have an elected Board of Directors",
      },
      {
        icon: UserCheckmarkSVG,
        text: "All NY corporations must appoint officers",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "All New York corporations must follow stringent compliance rules and regulations. These include financial reports, bylaws, corporate formalities, taxes, fees, business licenses and the like. You can find links to these below. ",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about New York corporation requirements . ",
      url: "/new-york-corporation/form-filling-permit-requirements/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about New York corporation taxes and fees . ",
      url: "/new-york-corporation/taxes-and-fees-for-your-corporation/",
    },
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Are you ready to start your New York corporation? If so, we can help. We provide comprehensive corporation formation services for both S Corporations and C Corporations in New York.",
    marginBottom: 32,
  },
  {
    type: "rounded-boxes",
    marginBottom: 72,
    content: [
      {
        roundLeft: true,
        image: "s-corp-certificate-5609",
        content: {
          header: "S Corporation",
          link: {
            text: "Incorporate now",
            externalLink: true,
            url: ORDER_URL,
          },
        },
        noShadow: false,
        color: color.purple3,
      },
      {
        roundRight: true,
        image: "c-crop-certificate-3409",
        content: {
          header: "C Corporation",
          link: {
            text: "Incorporate now",
            externalLink: true,
            url: ORDER_URL,
          },
        },
        noShadow: false,
        color: color.orange3,
      },
    ],
  },
  {
    type: "header",
    content: "Detailed Information for Your New York State Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You’ll find plenty more insight and guidance on the other pages of this guide, including:",
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    header: 3,
    content: [
      {
        header: "Forming Your New York Corporation",
        text:
          "The six steps you need to take to start a New York S Corporation or C Corporation.",
        link: {
          text: "Learn more",
          url: "/new-york-corporation/start-a-ny-corporation/",
        },
        svg: TodoSVG,
        backgroundColor: color.red2,
        shadowColor: shadow.red2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Naming Your New York Corporation",
        text:
          "How to search the New York business registry of the NY Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a New York corporation name and more.",
        link: {
          text: "Learn more",
          url: "/new-york-corporation/how-to-name-your-corporation/",
        },
        svg: QuestionSVG,
        backgroundColor: color.orange3,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "New York Registered Agents for Your Corporation",
        text:
          "How to appoint a New York Registered Agent to your new corporation or change to a different Registered Agent. Includes information on Registered Agent rules and searching for New York Registered Agents.",
        link: {
          text: "Learn more",
          url: "/new-york-corporation/registered-agents-new-york/",
        },
        svg: IdSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Fees and Requirements for Your New York Corporation",
        text:
          "How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and New York rules. Includes details of Employee Identification Numbers (EINs), New York and federal business licenses, New York Statement of Information reports and more.",
        link: {
          text: "Learn more",
          url: "/new-york-corporation/form-filling-permit-requirements/",
        },
        svg: BillPadSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header:
          "Federal, State, Sales and Other Taxes for Your New York Corporation",
        text:
          "How to understand the various taxes you will need to pay to the federal and New York government. Includes details of federal taxes like income and self-employment, and New York taxes like sales tax and income tax.",
        link: {
          text: "Learn more",
          url: "/new-york-corporation/taxes-and-fees-for-your-corporation/",
        },
        svg: DollarUpSVG,
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
    ],
    marginBottom: 24,
  },
];

export const startCaCorp = [
  {
    type: "header",
    content: "How to Incorporate in NY",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Setting up a NY corporation doesn’t have to be complicated. We’ve created this straightforward guide to get you started.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Want Incfile to do the work for you? We make starting a New York S Corporation or C Corporation fast and easy.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Benefits of New York State Incorporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Briefly, the benefits of forming a New York corporation are:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "A New York S Corporation or C Corporation will protect your personal finances and assets by limiting your liability.",
        "If you want to pay less self-employment tax, a New York S Corporation can save you money.",
        "NY S Corporations give you some options for creating, transferring and selling stock.",
        "For more options to create, buy, sell or transfer stock (including publicly), a New York C Corporation is the option you need.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "text",
    content:
      "If you don’t need the options for buying and selling stock, a New York LLC may be a better choice for your business. You can even have your LLC treated as an S Corporation for tax purposes to save you money.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about starting a New York LLC",
      url: "/new-york-llc/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Six Steps to Setting up Your New York Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "accordion",
    header: 3,
    content: {
      items: [
        {
          question:
            "1. Search For and Choose the Right Name for Your NY Corporation",
          list: [
            "You will need to choose a unique, distinct, original name for your New York corporation",
            "This name cannot be used by or confused with another business in New York",
            "The name of your business must end with “Corporation,” “Incorporated,” “Limited” or an abbreviation of one of these",
          ],
          text:
            "<a href='https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_SEARCH_ENTRY'>See if the name is available by searching for it on the New York Department of State website. </a>",
          arrowLink: {
            text: "Learn how to name your New York corporation",
            url: "/new-york-corporation/how-to-name-your-corporation/",
          },
        },
        {
          question:
            "2. Provide an Official Address for Your NY State Corporation",
          answer:
            "Every New York State S Corporation or C Corporation must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside NY, but it cannot be a P.O. Box.",
        },
        {
          question:
            "3. Assign a Registered Agent for Your New York Corporation",
          answer:
            "Every New York corporation must have a “Registered Agent” who receives official legal and tax correspondence and has responsibility for filing reports with the New York Department of State. Your Registered Agent must have a physical street address in New York.<br/><br/>" +
            "A Registered Agent position for a New York S Corporation or C Corporation can be filled in several ways.<br><br>" +
            "A Registered Agent could be you, a director or an officer of the corporation. The New York Registered Agent for your corporation must have a physical street address in New York. They need to be available during business hours to receive important documents for your corporation.<br><br>" +
            "Here at Incfile we always recommend using a proper New York Registered Agent service since they provide several benefits:",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agent service to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed in public records on the NY Division of Corporations website. If you do not want your own name and New York address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence, since the type of documents delivered to the Registered Agent require a signature on delivery.",
          ],
          text:
            "At Incfile, all of our packages include a New York Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.",
          arrowLink: {
            text: "Learn more about New York Registered Agents.",
            url: "/new-york-corporation/registered-agents-new-york/",
          },
        },
        {
          question: "4. Draft and File Certificate of Incorporation",
          answer:
            "The legal document required to create your new corporation is called the “Certificate of Incorporation.” You will need to gather various details for your New York filing with the department of state including:",
          list: [
            "The corporation’s name",
            "The corporation’s mailing address and street address",
            "The corporation's Registered Agent and their address",
            "The name and address of the incorporator",
          ],
        },
        {
          question:
            "5. File Your Certificate of Incorporation With the New York Department of State",
          text:
            "Once your Certificate of Incorporation document is drafted, you can file it with the New York Department of State. Filing your Certificate of Incorporation creates your New York corporation. You can do this online, mail in a form or have Incfile do it on your behalf.",
        },
        {
          question:
            "6. Your NY Corporation Will Need to Meet Certain Legal and Compliance Requirements",
          answer:
            "Once your New York corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
            "File IRS Small Business Tax Election Form 2553 if you want your NY business to be treated as an S Corporation. Any New York S Corporations formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents.",
            "Create and issue stock certificates to your shareholders.",
            "Apply for <a href='/business-license-research-package/'>business licenses and permits</a>. You may require licenses from the state of New York, your county, township and various industry or federal bodies.",
            "Get an <a href='/manage-your-company/tax-id-ein/'>Employer Identification Number (EIN)</a>.",
            "File for taxes with New York Department of Taxation and Finance.",
            "Get all formalities in place for employees, including unemployment, disability, payroll, insurance and taxes.",
            "Appoint a Board of Directors for the corporation.",
            "Appoint officers to the corporation.",
            "Get a corporate records book to capture all your important corporate information.",
          ],
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Starting a Corporation in NY — Useful Resources",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "New York Department of State website",
      url: "https://www.dos.ny.gov/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Corporation information from the New York Department of State",
      url: "https://www.dos.ny.gov/corps/bus_entity_search.html",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Checking name availability for your New York corporation",
      url:
        "https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_SEARCH_ENTRY",
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Other Types of NY State Corporations",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A regular New York S Corporation or C Corporation is suitable for almost all business needs, but you also have a few other options to incorporate a special type of corporation.",
    marginBottom: 52,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Form a Professional New York S Corporation or C Corporation`,
          answer: `Some states, including New York, allow certain occupations to form “Professional Corporations.” These types of corporations may need special requirements and licensing. NY State does not list the specific professions that can form professional corporations, although the name of the corporation must end with the words “Professional Corporation” or the abbreviation “P.C.”`,
        },
        {
          question: `Form a Foreign LLC in New York`,
          answer: `A “foreign” filing is when you have a regular, domestic corporation in a state (typically the one where you first formed your business) and need the company to be able to operate in another state. This is where you would file a “Foreign Qualification” to the new state for your domestic corporation to be able to operate in both states. You must have an existing domestic corporation before you can file as a foreign corporation.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: "header",
    content: "Need to Form a New York Corporation Quickly \n" + "and Easily?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing your Articles of Incorporation. Our packages also provide a free Registered Agent service for the first year. If you're looking for assistance forming a corporation, we can help you start a NY S Corporation or C Corporation.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
  },
];
export const naming = [
  {
    type: "header",
    content: "Find the Right Name for Your New York State Corporation",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Whether you’re searching for the right New York corporation name or registering your business with the NY Department of State, we can help. We’ve got all the information you need on New York corporation searches, S Corporation and C Corporation naming rules, fictitious names and registering your business.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "New York Department of State Corporation Business Search",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The best way to start naming your business is through a New York corporation name search with the department of state. They have a helpful tool on their website that lets you search the register of NY corporations to see if someone already has your desired business name.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If your S Corporation or C Corporation name is already used by any type of business entity in New York, that means it’s not available and you won’t be able to register it. Try searching for a different NY corporation name instead.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "New York Department of State corporation name search tool",
      url:
        "https://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_SEARCH_ENTRY",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Follow These Rules to Name Your New York Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you’ve found an original name for your New York S Corp or C Corp, you will need to make sure it meets New York Department of State naming rules.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "General Rules for Naming Your S Corp or C Corp",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The rules below generally apply to all corporations, wherever they are formed.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Your New York Corporation Name Must Be Unique",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name you have chosen for your S Corporation or C Corporation cannot be used by any other registered business in the state of New York. This is why you must check business name availability on the NY Secretary of State website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "The Name of Your Corporation Cannot Be Similar to Other Businesses in New York",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name of your NY S Corporation or C Corporation cannot be similar to another formal business name in New York. The following terms can’t be used to say your business name is different from another business name:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.",
        "Definite articles like “A,” “And,” “An,” “&,” “The,” etc.",
        "The singular, plural or possessive forms of a word",
        "Abbreviations, punctuation, symbols, fonts, typefaces, etc.",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "For example, you can’t claim that Purple People Co., Purple People Corporation, Purple People Incorporated, Purple People Corp. or Purple People are different from one another.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Your New York Corporation Name Must Contain Certain Words",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The words “Incorporated,” “Corporation,” “Limited” or their abbreviations generally need to appear in your business name, normally at the end.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Other General Rules on Naming Your New York Corporation",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The New York Department of State will not typically allow you to name S Corporations or C Corporations that breach the following rules:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Are very similar to the name of a federal or NY agency or organization (e.g., FBI, FDA, New York Department of Revenue, New York Police, Treasury, etc.)",
        "Suggest affiliation with a federal or NY agency or organization",
        "Use the term “Olympic” or any terms that are trademarks of the Olympic organization",
        "Imply a purpose that it would be illegal for your New York corporation to carry out",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Specific Rules for Naming Your New York Corporation",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The general rules above are a good starting point for naming your NY S Corporation or C Corporation, but they are not the only ones. The New York Department of State has some specific business naming rules for corporations. You will need to follow these rules if you want to name your NY business appropriately.",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "You must obtain consent from the appropriate licensing body or agency to use terms in your corporation name related to licensed professions or businesses",
        "You cannot use any language considered obscene, derogatory or that states or implies any unlawful activity",
        'Restricted words include: "America Espirito Sport Fraternite," "Citius Altius Fortius," academy, acceptance, annuity, arboretum, assurance, bank, benefit, blind, bond, casualty, college, conservatory, council, doctor, education, elementary, endowment, exchange, fidelity, finance, guaranty, handicapped, historical, historical society, history, indemnity, industrial organization, industrial organization, institute, insurance, investment, kindergarten, labor, lawyer, library, loan, mortgage, museum, Olympiad, prekindergarten, preschool, savings, school, secondary, surety, title, trust, underwriter, union, United Nations, university',
        "Prohibited words include: attorney, board of trade, chamber of commerce, community, cooperation, cooperative, corporation, incorporated, partnership, redevelopment, state police, state trooper, tenant relocation, urban development, urban relocation",
      ],
    },
    color: color.orange3,
    marginBottom: 24,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "arrow-link",
    content: {
      text: "More on New York Department of State business naming rules.",
      url: "https://www.dos.ny.gov/corps/restricted_words.html",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "New York Corporation “Doing Business As” (DBA) and Assumed Names",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Some corporations choose to do business under a different name from the name they were formed under. In New York, doing business under a different name is known as a “Fictitious Name.” We can file a Fictitious Name for your New York corporation on your behalf with the county in which your principal place of business is located.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Incfile’s Assumed Business Name Service ",
      url: "/fictitious-business-or-trade-name/",
    },
    theme: "primary56",
  },
  {
    type: "header",
    content:
      "Why You Don’t Want to Infringe on Trademark or Service Mark Names",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the rules above, it’s also vital to see if your New York corporation name might infringe on the trademark or service mark of another business. For example, it might not be a good idea to call yourself “General Electric Research Services,” since General Electric is a trademark.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our <a href='/trademark-name-search/'>Trademark Search and Registration</a> service. You should also bear in mind that your New York corporation name cannot be substantially similar to an existing trademark or service mark.",
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
      "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your New York corporation and form either an S Corporation or a C Corporation today.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
  },
];
export const agents = [
  {
    type: "header",
    content:
      "Registered Agent Services — What You Need for Your New York Corporation",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "The New York Department of State requires every NY corporation to have a Registered Agent. Once you have assigned a New York Registered Agent, they can receive official correspondence and documents on behalf of your NY business. Registered Agents can be individuals or other specialized Registered Agent service businesses.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you choose a person as a Registered Agent, he or she must reside in New York",
        "If you choose a business as a Registered Agent, they must be able to conduct business in New York",
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
      "Incorporate your S Corporation or C Corporation through us to get your first year of Registered Agent services for free.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Services Provided by a New York Registered Agent to Your Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Your New York Registered Agent carries out several valuable services for your corporation. They accept official communications and documents from the NY Division of Corporations on your behalf. This may include:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Correspondence from the New York Division of Corporations, like a notice to file reports and other forms",
        "Service of process documents (for example, if your New York corporation has legal proceedings issued against it)",
        "Official New York and federal government documents, form filings and requests for information (including taxes, permits and company filings)",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content: "Acting as Your Own Registered Agent for Your NY Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You can choose to act as your own NY Registered Agent for your New York S Corp or C Corp.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent must have a physical street address in New York. Some people establish corporations outside of New York and will need to use a Registered Agent service to provide the address.",
        "You always need to have someone on hand at your corporation to receive important documents for your business during business hours (typically 9 a.m. to 5 p.m. Monday to Friday).",
        "The Registered Agent’s name and NY address are part of the public record and available through the New York Division of Corporations website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
        "If you change your New York business address or move out of state, you won’t need to file additional documentation with the NY Division of Corporations for the new address of your Registered Agent if using a service. You will need to set up a new Registered Agent service in the new state.",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
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
      "Possible Outcomes of Not Assigning a Registered Agent \n" +
      "for Your New York Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "What are the issues with not having a NY Registered Agent or not providing that information to the New York Department of State?",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your New York corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Falling out of good standing with the New York Department of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.",
        "Losing your status as a New York corporation: A NY Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your New York corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "A Complete New York Corporation Registered Agent Service From Incfile",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you have an S Corporation or C Corporation that’s incorporated in New York and you need a NY Registered Agent, we can help. Incfile provides a complete Registered Agent service for any New York corporation. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "We are authorized to conduct business in New York and can legally act as your Registered Agent for your NY corporation.",
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Here’s what you need to know about Incfile’s NY Registered Agent service for corporations:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent will always be available to accept documents and letters on your behalf",
        "We automatically notify you whenever we receive correspondence for your business from the New York Secretary of State or anyone else",
        "We scan your correspondence and upload it to a dashboard, so you can review it when convenient",
        "We forward all correspondence to an address you choose",
      ],
    },
    color: color.orange3,
    marginBottom: 32,
    curve: false,
  },
  {
    type: "button",
    content: {
      text: "Order Incfile’s New York Registered Agent Service",
      url: "/manage-your-company/registered-agent/",
    },
    theme: "primary56",
    marginBottom: 48,
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 72,
  },
  {
    type: "header",
    content: "Useful Resources for New York Registered Agent \n" + "Services",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You might find these resources helpful:",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "The Main Functions of a New York Registered Agent",
      url:
        "/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Changing Your New York Registered Agent",
      url: "/manage-your-company/change-of-registered-agent/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "What a New York Registered Agent Does",
      url:
        "/research-topics/registered-agent-help/what-does-a-registered-agent-do/",
    },
    marginBottom: 24,
  },
];
export const filing = [
  {
    type: "header",
    content:
      "New York Forms and Filing Requirements for Your NY State Corporation",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "When you’re forming a New York S Corporation or C Corporation, you will need to file certain forms and pay certain fees. Requirements can come from various bodies including the federal government, the NY Department of State and elsewhere.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Below is a rundown of what you’ll need to do, together with information on the requirements for your New York corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "We provide a paid service to take care of certain filings and forms for your New York corporation. Alternatively, you can choose to file these requirements yourself — make sure that you set calendar reminders.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "File Your Certificate of Incorporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The New York Department of State requires a formal document from you to form your NY S Corporation or C Corporation. This document is known as your Certificate of Incorporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once the Certificate of Incorporation document is filed with the NY Department of State, your business is legally formed as a New York corporation.",
    marginBottom: 40,
  },
  {
    type: "text",
    content: "The Certificate of Incorporation typically includes:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The New York corporation’s name",
        "The New York corporation’s mailing address and street address",
        "The New York corporation's Registered Agent and their address",
        "The name and address of the incorporator",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "When you start your business with us, we gather together all the information we need to create your Certificate of Incorporation. We then file that with the New York Department of State on your behalf.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Business Licenses and Permits for Your New York State Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most NY corporations will need to file and pay for various permits and business licenses as you will need them to legally carry out business in New York. We can help you understand the exact permits and licenses required for your business to be compliant.",
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
      "Various cities in New York have slightly different rules and fees for permits and licenses for corporations. Check with your local New York city administration to see what their rules are. You will need a separate permit or license for each city your New York corporation operates in.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "County and State Business Permits and Licenses",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of New York. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of New York website.",
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
      "Some corporations will need to get licenses and permits from the federal government and various national agencies. You can find a complete list on the U.S. Small Business Administration website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Incfile Business License Research Package for Your New York Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The types of permits and licenses you need depend on where you’re located, what your New York corporation does and several other factors. Because things can vary so much, we provide a complete research package that tells you the licenses and permits you’ll need.",
    marginBottom: 41,
  },
  {
    type: "text",
    content: "Our services provide:",
    marginBottom: 24,
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
      "Your customized Business License Research Package will be emailed to you within two days of your New York Corporation being formed by the New York Department of State.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Get the Incfile License Research Package",
      url: "/business-license-research-package/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Special New York Corporation Requirements",
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
    content: "Your New York Corporation Must Have Certain Bylaws",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Bylaws are the formal, internal rules that your New York corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Defining your New York registered office and NY Registered Agent",
        "Stating details of the Annual General Meeting (AGM), including date, place, time and other relevant information",
        "Other details from the AGM, including the order of business, notice, voting record, quorum, proxies, shareholder actions and more",
        "Stating when a special shareholders’ meeting may be held and the circumstances that could lead to it",
        "Details of stock certificates, ownership, issuing and transfer",
        "Details of the Board of Directors including how they are elected and appointed, their number, the powers they have, how they can be removed, regular meetings and agendas, executive committees, remuneration and other areas",
        "Details of the various officers in the corporation including how they are chosen and appointed",
        "Designations of officers in the New York corporation including president, vice presidents, secretary, assistant secretaries and treasurer",
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
    content: "Corporation Shareholders Must Be Issued Stock",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Ownership in a New York corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
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
      "You must appoint directors to all positions in line with the agreed New York corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
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
      "Officers are the individuals who manage the New York corporation on a day-to-day basis. At minimum a NY corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
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
      "Your New York corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
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
    content:
      "You may need to hire employees for your New York corporation. You will need:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "An Employer Identification Number (EIN)",
        "Worker’s Compensation Insurance",
        "General Liability Insurance",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "button",
    content: {
      text: "Get an EIN through Incfile",
      url: "/manage-your-company/tax-id-ein/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Hold an Annual General Meeting for Your New York Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must hold a yearly meeting that all directors, officers and shareholders of the NY corporation are invited to. The purpose of an AGM is generally to:",
    marginBottom: 41,
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
    content: "New York Corporation Tax Registration",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to register for certain taxes when you form your corporation. These include:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Federal income tax",
        "Corporation tax (only for C Corporations)",
        "New York state tax",
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
      "You can find details on the New York Department of Revenue and IRS websites.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn more about taxes for your New York corporation.",
      url: "/new-york-corporation/taxes-and-fees-for-your-corporation/",
    },
    marginBottom: 32,
  },
  {
    type: "header",
    content: "Your New York Corporation Will Need to File a Biennial Report",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must file a biennial report with the New York Department of State for your New York corporation. If you do not file your report regularly, you will be charged a late fee and your NY corporation may be dissolved.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "<a href='/business-filing-deadlines/'>Learn about your ongoing New York corporation filing requirements</a> and business filing deadlines with our helpful New York ongoing filing lookup tool.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Have Incfile File Your Report for You",
      url: "/manage-your-company/annual-report/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Your New York Corporation May Need a Certificate of Good Standing",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You may need a Certificate of Good Standing for your New York corporation to carry out some business-related services like opening a bank account.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Get a Certificate of Good Standing Through Incfile",
      url: "/manage-your-company/certificate-of-good-standing/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Ready to Start Your New York Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your New York corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
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
    content: "Fees and Taxes for Your New York State Corporation",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "You’ll need to pay certain taxes and fees for your New York S Corp or C Corp. We’ve included the more common ones below.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Common Fees for a New York Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "1. Fees for forming a corporation in New York",
          answer:
            "Learn about <a href='/state-filing-fees/'>standard filing costs here</a> for NY corporations.",
        },
        {
          question: "2. New York State Biennial Report Fee",
          answer: "A fee every other year when you file your biennial report.",
        },
        {
          question: "3. New York Permits and Licenses",
          answer:
            "These are the fees for creating or renewing your licenses and permits on a regular basis. These depend on the type of New York corporation you’re operating and where you’re located.",
        },
      ],
    },
    marginBottom: 47,
  },
  {
    type: "button",
    content: {
      text: "Get the Incfile Business License Research Package",
      url: "/business-license-research-package/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Taxes Payable by Your New York Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The way that New York S Corporations and C Corporations pay taxes is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Taxes Payable by Both S Corporations and C Corporations in New York",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "accordion",
    header: 4,
    content: {
      items: [
        {
          question: "Payroll Tax Payable to the IRS",
          answer:
            "Your New York corporation will need to pay employer payroll tax to the IRS on salaries paid to employees.",
        },
        {
          question: "New York State Income Tax",
          answer:
            "Anyone who takes earnings out of your New York corporation will need to pay New York state income tax. Find out more on the <a href='/'>New York State Department of Taxation and Finance website</a>.",
        },
        {
          question: "New York State Sales and Use Tax",
          answer:
            "If your NY corporation is selling products or services in New York, you may need to pay a state sales tax. Find out more on the New York State Department of Taxation and Finance website.",
        },
        {
          question: "New York State Corporation Employee Taxes and Insurance",
          answer:
            "You may also need to pay tax and insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.<br /><br />Get more requirements from the <a href='https://www.labor.ny.gov/home/'>New York State Department of Labor website.</a>",
        },
        {
          question:
            "Your New York Corporation Will Need to Pay Estimated Taxes",
          answer:
            "Most New York corporations will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:",
          list: [
            "Federal income tax",
            "Federal self-employment tax",
            "New York state tax",
          ],
          text:
            "Most New York S Corporations and C Corporations will pay estimated taxes four times a year. Speak to your accountant for more information.",
        },
        {
          question: "Other Taxes in New York",
          answer:
            "You may need to pay other taxes and fees, depending on the type of New York corporation you run. Find out more on the New York Department of Taxation and Finance website.<br /><br /><a href='https://www.tax.ny.gov/'>New York State Department of Taxation and Finance website.</a>",
        },
      ],
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Taxes Payable by New York S Corporations",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Self-Employment Tax",
        text:
          "Because your New York corporation income flows through to your personal tax return, you must pay self-employment tax (also known as FICA, Social Security or Medicare tax) on your earnings. This is typically at a rate of 15.3 percent. You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.",
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
    type: "button",
    content: {
      text: "Get a Tax Consultation from Incfile",
      url: "/business-accounting/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "On profits of $20,000, you would pay self-employment tax of $3,060",
        "On profits of $50,000, you would pay self-employment tax of $7,650",
        "On profits of $90,000, you would pay self-employment tax of $13,770",
        "On profits of $140,000, you would pay self-employment tax of $21,420",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "File Your New York S-Corp Tax Election with Incfile",
      url: "/llc-s-corp-election/",
    },
    theme: "primary56",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Taxes Payable by New York C Corporations",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Corporation Tax",
        text:
          "New York C Corporations must file corporate tax returns with the IRS and pay corporation taxes on their profits. Shareholders must also pay tax on dividends received from a New York C Corporation, which does result in “double taxation.”",
        svg: CorpoTaxSVG,
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        marginTop: "71px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Stock Dividends From C Corporations",
        text:
          "A New York C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
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
    content:
      "Taxes Payable by All Individuals Working for New York Corporations",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "header",
    size: 4,
    template: 5,
    content:
      "Pay Federal Income Tax on New York Corporation Earnings, Dividends and Distributions",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to pay regular federal income tax when you file your tax return every year.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Ready to Start Your New York Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your New York corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=NY`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: ORDER_URL,
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
    content: "Understand Your Ongoing Corporate Filing Requirements",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content: `Each state requires different forms such as your business <a href="/manage-your-company/annual-report/">annual reports</a> and state franchise tax reports to be filed at different times. It’s important to understand when each form needs to be filed and when you need to refile the form. Complying with the <a href="/compliance-filing-requirement/">form filing requirements</a> keeps your business in <a href="/manage-your-company/certificate-of-good-standing/">good standing</a> with the state. Failure to file these reports can lead to the company being revoked or administrative <a href="/manage-your-company/dissolution/">business dissolution</a>. Incfile includes lifetime company alerts with courtesy email reminders to inform clients of an upcoming filing requirement with all of our state filing packages.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "New York's Ongoing Corporate File Requirements:",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "dynamic_filing_requirement",
  },

  {
    type: "header",
    content: "Protect Your NY Business Name With a Trademark",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A trademark is an essential asset for your business because it protects the brand name and identity that you worked so hard to create. When you secure a federal trademark for your business brand, it gives you exclusive rights to use your business name, logo or slogan once the trademark is approved. Federal Trademark Protection also prevents other businesses from using your brand name and brand identity. Incfile is happy to help with conducting a trademark name search on your Corporation business name. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing is properly prepared and submitted to the government office, and provide sound legal advice throughout the entire process.",
    marginBottom: 41,
  },
  {
    type: "text",
    content:
      "Benefits of <a href='/trademark-name-search/'>Incfile's Trademark service</a> include:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
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
    content: "Finances & Accounting for Your New York Corporation",
    size: 2,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you form your corporation in New York, there are important next steps to ensure your business finances and accounting are organized for tax season and peace of mind, and that your personal and business finances are kept separate to ensure safety of your personal assets. With the right accounting steps, your business will run smoothly and be set up for increased profits and success.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Choose a Bank for Your New York Corporation",
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
      "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your New York Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='http://expensify.com/'>Expensify</a> to track and tag business expenses from your mobile phone.",
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
          url: "https://www.xero.com/us/",
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
      "If you use QuickBooks or Freshbooks, you’ll be able to accept credit cards to pay for invoices. If you have a brick and mortar location for your small business, you want to look into offering payments through a service such as <a href='https://www.shopify.com/'>Shopify</a> or <a href='https://squareup.com/us/en'>Square</a>.",
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
      "Business Operations & Marketing for Your New York \n" + "Corporation",
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
      "Choose the Best Business Tools to Run Your New York \n" + "Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to accounting software, there is a number of online business software options that will lift a number of menial tasks and burdens off your full business-owner plate. Below are important business functions for your Corporation and what we think are the best business tools for your Georgia Corporation.",
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
    content: "Get a “Start a NY Business Checklist” to Follow",
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
