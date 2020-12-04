import TexasCorpSVG from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
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
import FolderProcentSVG from "../../images/icons/icon-folder-procent.inline.svg";
import TodoSVG from "../../images/icons/icon-todo-list.inline.svg";
import QuestionSVG from "../../images/icons/icon-chat-question-mark.inline.svg";
import IdSVG from "../../images/icons/icon-registered-id.inline.svg";
import BillPadSVG from "../../images/icons/icon-bill-pad.inline.svg";
import DollarUpSVG from "../../images/icons/icon-dollar-arrow-up.inline.svg";

import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
  header: `Why Form a Corporation in Texas?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
  ],
};
export const launchBusiness = {
  header: `Launch your business with Incfile`,
  text: `No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business!`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=TX`,
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
      name: `Texas Corporations`,
      path: `/texas-corporation/`,
      icon: TexasCorpSVG,
    },
    {
      name: `How To Guide`,
      path: `/texas-corporation/start-a-tx-corporation`,
      icon: EntitySVG,
    },
    {
      name: `Naming Your Corporation`,
      path: `/texas-corporation/how-to-name-your-corporation`,
      icon: PenSVG,
    },
    {
      name: `Registered Agents`,
      path: `/texas-corporation/registered-agents-texas`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Filing Requirements`,
      path: `/texas-corporation/form-filling-permit-requirements`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/texas-corporation/taxes-and-fees-for-your-corporation`,
      icon: PriceTagSVG,
    },
    {
      name: `After Forming`,
      path: `/texas-corporation/know-your-ongoing-filing-requirements`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
    type: "header",
    content: "Texas Corporations",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "WIth its busy cities and enormous landscapes, Texas is a state as beautiful as it is prosperous. If you want to start a successful business, then the Lone Star State could be a great choice — and the lack of a state income tax can be a good incentive! Whether you want to be headquartered in Houston, Austin or Dallas — or you want to build a presence in a smaller city — you have plenty of choices.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here’s our guide to Texas corporations and deciding if starting one could be the right choice for you.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "What Type of Texas Corporation Should You Choose?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most entrepreneurs will have a choice of starting an LLC, an S Corporation or a C Corporation in Texas. We’ll help you select the right type of business entity, as each one is treated differently by the TX Secretary of State, the law, the IRS and other official bodies.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Here’s a quick overview of each type of business entity.",
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Texas Sole Proprietorships and Partnerships",
        text:
          "These are the simplest type of business and will be the “default” type of TX business you have if you do not choose to form a separate business entity. These types of businesses do not provide you with any special protections or benefits and can leave your personal assets vulnerable. We do not recommend them.",
        svg: ProprietorshipSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "Texas Limited Liability Companies (LLCs)",
        text:
          "LLCs are a great option for smaller TX businesses. LLCs are quick and easy to create, inexpensive to administer, light on regulations and have simple taxation and rules.",
        svg: LockpadSVG,
        link: {
          text: "Learn how to create an LLC in Texas",
          url: "/",
        },
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "Texas S Corporations",
        text:
          "You might choose to form a Texas S Corporation because it’s a good compromise between the simplicity of the LLC and the complexity of the C Corporation. Note that TX S Corporations are subject to more rules and regulations than a TX LLC, but they can mean that you pay less tax.",
        svg: ProcentSVG,
        link: {
          text: "Learn how to create an LLC in Texas",
          url: "/",
        },
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "Texas C Corporations",
        text:
          "If you plan to start a large business or want to trade your shares on the public stock market, a TX C Corporation is your only choice. Be aware that Texas C Corporations are subject to many rules and regulations, and they have a substantial amount of administrative overhead. Additionally, the tax rules for a Texas C Corporation are not as advantageous as for a TX S Corporation or LLC.",
        svg: BillSVG,
        link: {
          text: "Learn about forming a C Corporation",
          url: "/",
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
    type: "colorbox",
    icon: FolderProcentSVG,
    header: "Other Entity Types",
    text:
      "There are some other business entity structures like nonprofits, Limited Liability Partnerships (LLPs) and B Corporations, but they will not be relevant for the majority of entrepreneurs.",
    curve: true,
    curveColor: color.blue1,
    color: color.blue3,
    marginBottom: 73,
    buttons: [
      {
        content: {
          text: "Start Your S-Corp",
          url: "/",
        },
        arrow: true,
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C-Corp",
          url: "/",
        },
        arrow: true,
        theme: "primary56",
      },
    ],
  },
  {
    type: "header",
    content: "Advantages of Forming a Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Texas corporations have several benefits for business owners",
    marginBottom: 48,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Texas corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business.",
        "This means that any liabilities created by your corporation (debts, obligations, damages, bankruptcy or other liabilities) should not impact your personal money, property or assets — they are considered completely separate from a legal perspective.",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: true,
    curveColor: color.green1,
  },
  {
    type: "header",
    content:
      "The Advantages of Incorporating a Texas S Corp or C Corp Over an LLC",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Why might you want to choose to incorporate as a TX S Corp or C Corp instead of an LLC? Here are a few reasons.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "When you incorporate a business as a corporation, the Texas Secretary of State will treat your business as a C Corporation by default. A C corporation will become an S Corporation when all shareholders wish to change the corporation’s status to an S Corporation with the IRS. You can make this choice when you first form your Texas corporation or at any time after you incorporate.",
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
      header: "S Corporations and C Corporations in Texas",
      list: [
        "<strong>Similarities:</strong> Texas S Corporations and C Corporations have similar rules and regulations for liability, governance, management and ownership",
        "<strong>Differences:</strong> Key differences are taxation and the ease of buying, selling and transferring stock",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Taxation Benefits of a Texas S Corporation Over an LLC",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A Texas S Corporation will often pay less self-employment tax on owner earnings than an LLC. Note that a TX LLC can choose to be treated as an S Corporation for tax purposes by filing Form 2553 with the IRS, which removes this restriction. Texas C Corporations do not have this advantage over an LLC.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about the tax benefits of S Corporations.",
      url: "/",
    },
    marginBottom: 32,
  },
  {
    type: "button",
    content: {
      text: "File From 2553 with the IRS",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 64,
  },
  {
    type: "header",
    content:
      "If You Need to Transfer Stocks and Ownership Easily, Choose a Texas S Corporation or C Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you want to easily transfer ownership through buying and selling stock, you will need a TX C Corporation or an S Corporation. C Corporations have much more flexibility than S Corporations, and both are better than LLCs for stock and ownership transfers.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Texas C Corporations Provide the Main Advantages for Buying and Selling Stock",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "C Corporations provide certain benefits when it comes to buying, selling and transferring stock. Here are the rules for both S Corps and C Corps:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you want up to 100 shareholders who are U.S. citizens or residents and want to issue one type of stock, you can be an S Corporation or a C Corporation.",
        "If you want more than 100 shareholders, want to issue more than one type of stock or have international shareholders, you will need a C Corporation.",
        "If you want to allow the public to buy and sell shares in your company after an Initial Public Offering (IPO), you will need a C Corporation.",
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
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Advantages of Incorporating as a C Corporation in Texas",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, Texas C Corporations provide several other advantages.",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "Rules for Buying, Selling and Transferring Stocks",
      list: [
        "Ownership in a Texas C Corporation is very fluid and determined by who owns stock in the business.",
        "Texas C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
        "Texas C Corporations can sell stock to investors inside and outside the U.S.",
        "Texas C Corporations can issue more than one type of stock.",
        "Texas C Corporations can raise more funds by issuing more stock.",
      ],
    },
    color: color.blue3,
    marginBottom: 72,
    curve: false,
  },
  {
    type: "text",
    content:
      "Here are some areas to be aware of when you’re creating a corporation in Texas.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "First, TX corporations are formed on the state level by filing Articles of Incorporation with the Secretary of State. Incfile specializes in helping entrepreneurs form Texas S Corporations and C Corporations and can collect the information and file this form on your behalf.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text:
        "Learn what you need to do to create a Texas S Corporation or C Corporation",
      url: "/",
    },
    marginBottom: 40,
  },
  {
    type: "header",
    content: "Your Texas Corporation Must Follow Certain Rules and Regulations",
    size: 4,
    marginBottom: 32,
  },
  {
    type: "boxes",
    content: [
      {
        icon: ArrowLeftSVG,
        text: "All TX corporations must issue stock to shareholders",
      },
      {
        icon: ChatSVG,
        text: "All TX corporations must hold Annual General Meetings (AGMs)",
      },
      {
        icon: BoardSVG,
        text: "All TX corporations must have an elected Board of Directors",
      },
      {
        icon: UserCheckmarkSVG,
        text: "All TX corporations must appoint officers",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "All Texas corporations must follow stringent compliance rules and regulations. These include financial reports, bylaws, corporate formalities, taxes, fees, business licenses and the like. You can find links to these below.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about Texas corporation requirements.",
      url: "/",
    },
    marginBottom: 32,
  },
  {
    type: "button",
    content: {
      text: "Learn about Texas Corporation Taxes and Fees ",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "Are you ready to start your Texas corporation? If so, we can help. We provide comprehensive corporation formation services for both S Corporations and C Corporations in Texas.",
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
            url: "/",
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
            url: "/",
          },
        },
        noShadow: false,
        color: color.orange3,
      },
    ],
  },
  {
    type: "header",
    content: "Detailed Information for Your Texas Corporation",
    size: 4,
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
    content: [
      {
        header: "Forming Your Texas Corporation",
        text:
          "The six steps you need to take to start a Texas S Corporation or C Corporation.",
        link: {
          text: "Learn more",
          url: "/",
        },
        svg: TodoSVG,
        backgroundColor: color.red2,
        shadowColor: shadow.red2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Naming Your Texas Corporation",
        text:
          "How to search the Texas business registry of the TX Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Texas corporation name and more.",
        link: {
          text: "Learn more",
          url: "/",
        },
        svg: QuestionSVG,
        backgroundColor: color.orange3,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Texas Registered Agents for Your Corporation",
        text:
          "How to appoint a Texas Registered Agent to your new corporation or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Texas Registered Agents.",
        link: {
          text: "Learn more",
          url: "/",
        },
        svg: IdSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Fees and Requirements for Your Texas Corporation",
        text:
          "How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Texas rules. Includes details of Employee Identification Numbers (EINs), Texas and federal business licenses, Texas Statement of Information reports and more.",
        link: {
          text: "Learn more",
          url: "/",
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
          "Federal, State, Sales and Other Taxes for Your Texas Corporation",
        text:
          "How to understand the various taxes you will need to pay to the federal and Texas government. Includes details of federal taxes like income and self-employment, and Texas taxes like sales tax and income tax.",
        link: {
          text: "Learn more",
          url: "/",
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
    content: "Six Easy Steps to Form Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Setting up a TX corporation doesn’t have to be complicated. We’ve created this straightforward guide on how to form a corporation in Texas.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Want Incfile to take care the paperwork for you? Starting your Texas S Corporation or C Corporation with Incfile is fast and easy. We’ll gather all the information we need from you and file it with the TX Secretary of State.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Benefits of Forming a Corporation in Texas",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Briefly, the benefits of forming a Texas corporation are:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Texas corporations provide strong liability protection. They insulate your personal assets and finances from those of your business.",
        "If you want to pay less self employment tax, a Texas S Corporation can save you money.",
        "TX S Corporations give you some options for creating, transferring and selling stock.",
        "For more options to create, buy, sell or transfer stock (including publicly), a Texas C Corporation is the option you need.",
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
      "If you don’t need the options for buying and selling stock, a Texas LLC may be a better choice for your business. You can even have your LLC treated as an S Corporation for tax purposes to save you money.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about starting a Texas LLC",
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Six Steps to Setting up Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question:
            "Search For and Choose a Unique Business Name for Your Texas Corporation",
          text:
            "Every TX business needs a unique name, including your corporation. You can carry out a Texas business entity name search on the <a href='/'>Texas Comptroller of Public Accounts website</a> or by using <a href='/'>Texas SOSDirect</a>. The name of your Texas S Corporation or C Corporation cannot be confusable with another business that’s been formed in Texas. If you’re not forming your TX corporation right away, you can reserve the name with the secretary of state.",
          arrowLink: {
            text: "Learn how to name your Texas corporation.",
            url: "/",
          },
        },
        {
          question:
            "Establish Street and Mailing Addresses for Your Texas Corporation",
          answer:
            "A Texas corporation must have a designated address. That could be your home address (if you’re running the company from your residence), where your office is located or any physical address of your preference. The address can be outside the state of Texas and can be a P.O. Box.",
        },
        {
          question: "Assign a Registered Agent for Your Texas Corporation",
          text:
            "When your TX corporation is formed, it must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Texas Secretary of State.<br/><br/>" +
            "A Registered Agent position for a Texas S Corporation or C Corporation can be filled in several ways.<br/><br/>" +
            "This position can be carried out by you, another accountable person in the business or a dedicated Registered Agent service. Your TX Registered Agent must have a physical street address in Texas and must be present to receive important documents for your company during business hours.<br/><br/>" +
            "At Incfile, all of our packages include a Texas Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.<br/><br/>" +
            "Here at Incfile we always recommend using a proper Texas Registered Agent service since they provide several benefits:",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agent service to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed in public records on the secretary of state website. If you do not want your own name and Texas address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence, since the type of documents delivered to the Registered Agent require a signature on delivery.",
          ],
        },
        {
          question: "Create Your Texas Certificate of Formation",
          answer:
            "Once you've gathered all the information for your Texas corporation, you’ll need to file a formal document with the TX Secretary of State. This document is known as your “Certificate of Formation,” and filing the document creates your TX corporation. Here’s what the Certificate of Formation normally includes:",
          list: [
            "The corporation’s name",
            "The corporation's Registered Agent and their address",
            "The names and addresses of directors",
            "The corporation’s purpose",
            "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
            "The name and address of the organizer",
          ],
        },
        {
          question:
            "File Your Certificate of Formation With the Texas Secretary of State",
          answer:
            "You can file your Texas corporation Certificate of Formation online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start a corporation in Texas. You only need to file your Certificate of Formation once.",
        },
        {
          question:
            "Complete the Legal and Compliance Requirements for Your Texas Corporation",
          answer:
            "Once your Texas corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
            "File IRS Small Business Tax Election form 2553 if you want your TX business to be treated as an S Corporation. Any Texas S Corporations formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents.",
            "Create and issue stock certificates to your shareholders.",
            "Apply for business licenses and permits. You may require licenses from the state of Texas, your county, township and various industry or federal bodies.",
            "Get an Employer Identification Number (EIN).",
            "File for taxes with the Texas Comptroller of Taxes",
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
    type: "header",
    content: "Useful Corporation Information From the State of Texas",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Texas Secretary of State website",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Other Types of TX Corporations",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A regular Texas S Corporation or C Corporation is suitable for almost all business needs, but you also have a few other options to incorporate a special type of corporation.",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Form a Professional Texas S Corporation or C Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Some states, including Texas, allow certain occupations to form “Professional Corporations.” These types of corporations may need special requirements and licensing. Below, you will find a list that the",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "TX Secretary of State allows to form Texas professional corporations:",
    marginBottom: 32,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Accountant/CPA",
        "Acupuncturist",
        "Architect",
        "Athletic Trainer",
        "Attorney",
        "Audiologist",
        "Chemical Dependency Counselor, Licensed",
        "Chiropractor",
        "Counselor, Licensed (Mental Health or Professional)",
        "Dental Hygienist",
        "Dentist",
        "Electronic Access Control",
        "EMS Personnel: EMT, Attendant, Paramedic",
        "EMS Providers",
        "Engineer",
        "Equine Dentistry",
        "Geoscientist, Licensed Professional",
        "Hearing Aid Dispenser",
        "Inspector Real Estate or Home",
        "Insurance Agent/Broker",
        "Investment Advisor, Registered",
        "Locksmith",
        "Marriage/Family Therapist, Licensed",
        "Massage Therapist",
        "Massage School/Massage Therapy Instructor",
        "Medical Physicist, Licensed",
        "Mental Health Professional, Licensed",
        "Midwives",
        "Mold Assessment",
        "Mold Remediation",
        "Mortgage Broker",
        "Nurse",
        "Nurse Anesthetist",
        "Nurse, Psychiatric",
        "Occupational Therapist",
        "Optometrist",
        "Orthotist",
        "Perfusionist",
        "Pharmacist",
        "Physical Therapist",
        "Physician Assistant",
        "Podiatrist",
        "Polygraph Examiner",
        "Private Investigator",
        "Private Security",
        "Prosthetist",
        "Psychologist",
        "Psychotherapist",
        "Radiology Technician, Medical",
        "Real Estate Agent",
        "Real Estate Broker",
        "Respiratory Care Therapist",
        "Sanitarian, Professional",
        "Securities Broker/ Dealer",
        "Social Worker— Licensed clinical, baccalaureate, or master",
        "Speech Pathologist, Speech/Language Pathologist",
        "Surveyor-Professional, Public or Regular",
        "Therapeutic Optometrist",
        "Therapist, Licensed Mental Health",
        "Veterinarian",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Professional corporations may be owned by a professional individual or another professional organization. The name of a professional corporation must contain the word “corporation,” “company,” “incorporated,” “limited,” “professional corporation” or an abbreviation.",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "File as a Foreign Corporation to Operate in Another State",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A “foreign” filing is when you have a regular, domestic corporation in a state (typically the one where you first formed your business) and need the company to be able to operate in another state. This is where you would file a “Foreign Qualification” to the new state for your domestic corporation to be able to operate in both states. You must have an existing domestic corporation before you can file as a foreign corporation.",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Need to Form a Texas Corporation Quickly \n" + "and Easily?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing your Articles of Incorporation. Our packages also provide a free Registered Agent service for the first year. If you're looking for assistance forming a corporation, we can help you start a TX S Corporation or C Corporation.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
  },
];
export const naming = [
  {
    type: "header",
    content: "Naming Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You need the right name for your Texas corporation. Choosing the right name is vital because it tells your suppliers, customers and employees what your business does. The Texas Secretary of State has several rules and regulations about what you can call your new business. Let’s explore what they are.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas Corporation Name Business Search",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Before you can name your TX corporation, you need to make sure there aren’t any other businesses in Texas with that name. That means searching the Texas Secretary of State or Comptroller of Public Accounts websites using their business search tools. You can easily look up TX corporations by name and other details.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If your S Corporation or C Corporation name is already used by any type of business entity in Texas, that means it’s not available and you won’t be able to register it. Try searching for a different TX corporation name instead.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Texas Comptroller taxable entity search tool",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Texas SOS Direct corporation name search",
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Follow These Rules to Name Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you’ve checked whether another business in TX is using your corporation name and confirmed availability, you’ll need to understand Texas Secretary of State naming rules.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "General Rules for Naming Your S Corp or C Corp",
    size: 4,
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
    content: "Your Texas Corporation Name Must Be Unique",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name you have chosen for your S Corporation or C Corporation cannot be used by any other registered business in the state of Texas. This is why you must check business name availability on the TX Secretary of State website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "The Name of Your Corporation Cannot Be Similar to Other Businesses in Texas",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name of your TX S Corporation or C Corporation cannot be similar to another formal business name in Texas. The following terms can’t be used to say your business name is different from another business name:",
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
    content: "Your Texas Corporation Name Must Contain Certain Words",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name of your business typically needs to contain the words “Corporation,” “Incorporated” or “Limited,” normally at the end of the name. These suffixes can be abbreviated.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Your Texas Corporation Name May Have Other Restrictions",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most states will not allow you to form S Corporations or C Corporations with names that:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Are very similar to the name of a federal or TX agency or organization (e.g., FBI, FDA, Texas Department of Revenue, Texas Police, Treasury, etc.)",
        "Suggest affiliation with a federal or TX agency or organization",
        "Use the term “Olympic” or any terms that are trademarks of the Olympic organization",
        "Imply a purpose that it would be illegal for your Texas corporation to carry out",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Specific Rules for Naming Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are additional, specific rules you will need to follow from the Texas Secretary of State for naming your TX S Corporation or C Corporation.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "More on Texas Secretary of State business naming rules",
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas Corporation Assumed Names",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Some corporations choose to do business under a different name from the name they were formed under. In Texas, doing business under a different name is known as an “Assumed Name.” We can file an Assumed Business Name for your Texas corporation on your behalf.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Incfile’s Assumed Business Name Service ",
      url: "/",
    },
    theme: "primary56",
  },
  {
    type: "header",
    content:
      "Rules on Infringing on Service Marks or Trademarks Inside or Outside Texas",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the rules above, it’s also vital to see if your Texas corporation name might infringe on the trademark or service mark of another business. For example, it might not be a good idea to call yourself “General Electric Research Services,” since General Electric is a trademark.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our <a href='/'>Trademark Search and Registration</a> service. You should also bear in mind that your Texas corporation name cannot be substantially similar to an existing trademark or service mark.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "You’ve Found the Perfect Name, What Next?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your Texas corporation and form either an S Corporation or a C Corporation today.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
  },
];
export const agents = [
  {
    type: "header",
    content: "Why Your Texas Corporation Needs a Registered Agent Service",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Your Texas corporation needs to have a TX Registered Agent. They’re chosen by you and can accept legal notices and other correspondence for your Texas corporation on your behalf from the Texas Secretary of State.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you choose a person as a Registered Agent, he or she must reside in Texas",
        "If you choose a business as a Registered Agent, they must be able to conduct business in Texas",
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
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Information on the Texas Secretary of State and TX Registered Agent Services",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Below, you’ll find what the Texas Secretary of State says about TX Registered Agent services.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "“The Texas Business Organizations Code (“BOC”) requires every domestic or foreign filing entity to maintain a registered agent and office in Texas. The BOC also permits the filing of an appointment of agent for service of process by an unincorporated nonprofit association. Additionally, the Texas Finance Code permits a Texas financial institution to appoint an agent for service of process.",
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "An entity’s registered agent is an agent of the entity on whom may be served any process, notice or demand required or permitted by law to be served on the entity.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "An entity’s registered office must be a physical address in Texas where the registered agent can be served with process during business hours. The registered office is also where the Office of the Secretary of State will mail correspondence. A registered office is the business office address of the registered agent and may be the same as the entity’s place of business. It cannot, however, be a post office box that is part of a commercial mail or message service unless that commercial enterprise is the registered agent.”",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "Services Provided by a Texas Registered Agent to Your Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A Texas Registered Agent may receive, on behalf of your corporation:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Correspondence from the Texas Secretary of State",
        "Service of process notices (e.g., if your TX corporation is sued or required to appear in court)",
        "Official Texas state and federal government correspondence and notifications",
        "Tax forms and requests to complete permits, company filings and reports",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "Why You Might Not Want to Appoint Yourself as Your Own Texas Registered Agent",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You can choose to act as your own TX Registered Agent for your Texas S Corp or C Corp, but it’s not often recommended for the following reasons.",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent must have a physical street address in Texas. Some people establish corporations outside of Texas and will need to use a Registered Agent service to provide the address.",
        "A person must always be available to sign for legal correspondence during business hours. If you can’t always be around, consider using a third-party Registered Agent service like Incfile.",
        "The Registered Agent’s name and TX address are part of the public record and available through the Texas Secretary of State website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
        "If you change your Texas business address or move out of state, you won’t need to file additional documentation with the secretary of state for the new address of your Registered Agent if using a service. You will need to set up a new Registered Agent service in the new state.  ",
      ],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "There are more considerations, but this should help you with your decision to use a <a href='/'>Registered Agent service</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "The Problems Caused When You Don’t Appoint a Texas Registered Agent Service",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "What are the issues with not having a TX Registered Agent or not providing that information to the Texas Secretary of State?",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your Texas corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Falling out of good standing with the Texas Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.",
        "Losing your status as a Texas corporation: A TX Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Texas corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "Incfile Provides a Free Texas Corporation Registered Agent Service for the First Year",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you have an S Corporation or C Corporation that’s incorporated in Texas and you need a TX Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Texas corporation. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "We are authorized to conduct business in Texas and can legally act as your Registered Agent for your TX corporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      " Here’s what you need to know about Incfile’s TX Registered Agent service for corporations:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent will always be available to accept documents and letters on your behalf",
        "We automatically notify you whenever we receive correspondence for your business from the Texas Secretary of State or anyone else",
        "We scan your correspondence and upload it to a dashboard, so you can review it when convenient",
        "We forward all correspondence to an address you choose",
      ],
    },
    color: color.orange3,
    marginBottom: 24,
    curve: false,
  },
  {
    type: "button",
    content: {
      text: "Order Incfile’s Texas Registered Agent Service",
      url: "/",
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
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
    marginBottom: 72,
  },
  {
    type: "header",
    content: "Useful Resources for Texas Registered Agent \n" + "Services",
    size: 4,
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
      text: "The Main Functions of a Texas Registered Agent",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Changing Your Texas Registered Agent",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "What a Texas Registered Agent Does",
      url: "/",
    },
    marginBottom: 24,
  },
];
export const filing = [
  {
    type: "header",
    content: "Texas Corporation Form and Filing Rules",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "When you’re forming a Texas S Corporation or C Corporation, you will need to file certain forms and pay certain fees. Requirements can come from various bodies including the federal government, the TX Secretary of State and elsewhere.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Below is a rundown of what you’ll need to do, together with information on the requirements for your Texas corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a paid service to take care of certain filings and forms for your Texas corporation. Alternatively, you can choose to file these requirements yourself — make sure that you set calendar reminders.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "File Your Certificate of Formation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The Certificate of Formation document is the formal paperwork that you file with the Texas Secretary of State to create your corporation. Once the Certificate of Formation document is filed with the TX Secretary of State, your business is legally formed as a Texas corporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The Certificate of Formation typically includes:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The corporation’s name",
        "The corporation's Registered Agent and their address",
        "The names and addresses of directors",
        "The corporation’s purpose",
        "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
        "The name and address of the organizer",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Here at Incfile, we automatically create and file your Articles of Incorporation on your behalf when you start your S Corporation or C Corporation with us.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Get the Right Permits and Licenses for Your Texas S Corp or C Corp",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most TX corporations will need to file and pay for various permits and business licenses as you will need them to legally carry out business in Texas. We can help you understand the exact permits and licenses required for your business to be compliant.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "City Licenses and Permits for Your Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Various cities in Texas have slightly different rules and fees for permits and licenses for corporations. Check with your local Texas city administration to see what their rules are. You will need a separate permit or license for each city your Texas corporation operates in.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "County and State Business Permits and Licenses",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of Texas. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of Texas website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Federal Licenses and Permits",
    size: 5,
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
      "Learn What Permits and Licenses Your Texas \n" +
      "Corporation Needs With Incfile",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Because permits vary widely depending on the type of Texas corporation you are operating and where you are located, we provide a comprehensive Business License Research Package. It’s designed to tell you all of the licenses and permits necessary for your new corporation. It includes:",
    marginBottom: 41,
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
      "Your customized Business License Research Package will be emailed to you within two days of your Texas Corporation being formed by the Texas Secretary of State.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "Get the Incfile License Research Package",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Other Special Requirements for Your Texas S Corp or C Corp",
    size: 4,
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
    content: "Your Texas Corporation Must Have Certain Bylaws",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Bylaws are the formal, internal rules that your Texas corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Defining your Texas registered office and TX Registered Agent",
        "Stating details of the Annual General Meeting (AGM), including date, place, time and other relevant information",
        "Other details from the AGM, including the order of business, notice, voting record, quorum, proxies, shareholder actions and more",
        "Stating when a special shareholders’ meeting may be held and the circumstances that could lead to it",
        "Details of stock certificates, ownership, issuing and transfer",
        "Details of the Board of Directors including how they are elected and appointed, their number, the powers they have, how they can be removed, regular meetings and agendas, executive committees, remuneration and other areas",
        "Details of the various officers in the corporation including how they are chosen and appointed",
        "Designations of officers in the Texas corporation including president, vice presidents, secretary, assistant secretaries and treasurer",
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
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Ownership in a Texas corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "A Board of Directors Must Be Appointed",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must appoint directors to all positions in line with the agreed Texas corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Assign Officers to the Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Officers are the individuals who manage the Texas corporation on a day-to-day basis. At minimum a TX corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Get a Corporate Records Book",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Your Texas corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Get a Corporate Records Book",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You may need to hire employees for your Texas corporation. You will need:",
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
      url: "/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Hold an Annual General Meeting for Your Texas Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must hold a yearly meeting that all directors, officers and shareholders of the TX corporation are invited to. The purpose of an AGM is generally to:",
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
    content: "Texas Corporation Tax Registration",
    size: 4,
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
        "Sales and Use Tax",
        "Employment taxes",
        "Texas Franchise Tax",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "You can find details on the <a href='/'>Texas Comptroller of Public Accounts</a> and IRS websites.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "<a href='/'>Learn more about taxes for your Texas corporation</a>",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Annual Statement of Information Report for Your \n" +
      "Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most states need to file an annual (or other periodic) report with their Secretary of State. Texas has two annual filing requirements for corporation reports:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: ["Public Information Report", "Franchise Tax Report"],
    },
    color: color.red3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "<a href='/'>Learn about your ongoing Texas corporation filing requirements</a> and business filing deadlines with our helpful Texas ongoing filing lookup tool.",
    marginBottom: 0,
  },
  {
    type: "button",
    content: {
      text: "Have Incfile File Your Report for You",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Franchise Tax Report for Your Texas LLC",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to file a franchise tax report with the <a href='/'>comptroller of public accounts</a>. These are due by May 15 every year.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Certificate of Good Standing for Your Texas \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You may need a Certificate of Good Standing for your Texas corporation to carry out some business-related services like opening a bank account.",
    marginBottom: 0,
  },
  {
    type: "button",
    content: {
      text: "Get a Certificate of Good Standing Through Incfile",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Ready to Start Your Texas Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Texas corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
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
    content: "Fees and Taxes for Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You’ll need to pay certain taxes and fees for your Texas S Corp or C Corp. We’ve included the more common ones below.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas Corporation Fees",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Fees for forming a corporation in Texas",
          answer: "Learn about standard filing costs here for TX corporations.",
        },
        {
          question: "Texas Statement of Information Report Fee",
          answer: "A yearly fee when you file your Annual Report.",
        },
        {
          question: "Texas Permits and Licenses",
          answer:
            "These are the fees for creating or renewing your licenses and permits on a regular basis. These depend on the type of Texas corporation you’re operating and where you’re located.",
        },
      ],
    },
    marginBottom: 47,
  },
  {
    type: "header",
    content: "Taxes Payable by Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The way that Texas S Corporations and C Corporations pay taxes is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Both S Corporations and C Corporations in Texas Need to Pay \n" +
      "These Taxes",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Payroll Tax Payable to the IRS",
          answer:
            "Your Texas corporation will need to pay employer payroll tax to the IRS on salaries paid to employees.",
        },
        {
          question: "Sales and Use Tax Payable to the State of Texas",
          answer:
            "If your TX corporation is selling products or services in Texas, you may need to pay a state sales tax. Find out more on the Texas <a href='/'>Department of Revenue website</a>.",
        },
        {
          question: "Franchise Tax",
          answer:
            "You may need to pay a franchise tax if your annual revenue is above a certain amount.",
        },
        {
          question: "Employee Insurance and Taxes for Your Texas Corporation",
          answer:
            "If your TX corporation employs workers, you will need to pay insurance and taxes to the state for each employee.",
          text:
            "Get more requirements from the <a href='/'>Texas Department of Labor website.</a>.",
        },
        {
          question: "Other Taxes in Texas",
          answer:
            "You may need to pay other taxes and fees, depending on the type of Texas corporation you run. Find out more on the <a href='/'>Texas Comptroller of Public Accounts website</a>.",
        },
      ],
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Estimated Taxes for Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most Texas corporations will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Federal income tax",
        "Federal self-employment tax",
        "Texas state tax",
      ],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Most Texas S Corporations and C Corporations will pay estimated taxes four times a year. Speak to your accountant for more information.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas Corporation Employee Taxes and Insurance",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If your TX corporation employs workers, you will need to pay insurance and taxes to the state for each employee.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Get more requirements from the <a href='/'>Texas Labor and Workforce Development Agency website</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Taxes Payable by All Individuals Working for Texas Corporations",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Pay Federal Income Tax on Texas Corporation Earnings, Dividends and Distributions. You will need to pay regular federal income tax when you file your tax return every year.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas S Corporations — Additional Tax Liabilities",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Self-Employment Tax",
        text:
          "In a Texas S Corporation, your earnings “flow through” from the business to your personal tax return. This means you must pay self-employment tax on those earnings at a rate of 15.3 percent. Note that you can deduct standard tax deductions and business expenses.",
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
      url: "/",
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
        "On profits of $30,000, you would pay self-employment tax of $4,590",
        "On profits of $70,000, you would pay self-employment tax of $10,710",
        "On profits of $100,000, you would pay self-employment tax of $15,300",
        "On profits of $160,000, you would pay self-employment tax of $24,480",
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
      text: "File Your Texas S-Corp Tax Election with Incfile",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Texas C Corporations — Additional Tax Liabilities",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Corporation Tax",
        text:
          "Unlike the the Limited Liability Company and the S Corporation, a Texas C Corporation is required to file a corporate tax return and pay corporation taxes on any profits. When those taxed profits are paid to shareholders as dividends, they will also be subject to taxation on that individual’s tax return. This is known as “double taxation.”",
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
          "A Texas C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
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
    content: "Ready to Start Your Texas Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Texas corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: "/",
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: "/",
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
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Each state requires different forms such as your business annual reports and state franchise tax reports to be filed at different times. It’s important to understand when each form needs to be filed and when you need to refile the form. Complying by the form filing requirements keeps your business in good standing with the state. Failure to file these reports can lead to the company being revoked or administrative business dissolution. Incfile includes lifetime company alerts with courtesy email reminders to inform clients of an upcoming filing requirement with all of our state filing packages.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Texas's Ongoing Corporate File Requirements:",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "dynamic_filing_requirement",
  },
  {
    type: "header",
    content: "Protect Your Business Name with a Trademark",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A trademark is an essential asset for your business because it protects the brand name and identity that you worked so hard to create. When you secure a federal trademark for your business brand, it gives you exclusive rights to use your business name, logo or slogan once the trademark is approved. Federal Trademark Protection also prevents other businesses from using your brand name and brand identity. Incfile is happy to help with conducting a trademark name search on your Corporation business name. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing is properly prepared and submitted to the government office, and provide sound legal advice throughout the entire process.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      header:
        "Benefits of <a href='/'>Incfile's Trademark service</a> include:",
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
    content: "Finances & Accounting for Your Texas Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you form your LLC in Delaware, there are important next steps to ensure your business finances and accounting are organized for tax season and peace of mind, and that your personal and business finances are kept separate to ensure safety of your personal assets. With the right accounting steps, your business will run smoothly and be set up for increased profits and success.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Choose a Bank for Your Texas Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The right business checking account for your business should have minimum fees, so that your money goes into the business or your own checking account instead of spending on hidden, tricky bank fees. According to NerdWallet — who looked at the 10 biggest banks in the U.S. and some additional online banks — these are the best four free business checking accounts for your Corporation:",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Best Free Business Checking Accounts",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "table",
    content: {
      headers: false,
      rows: [
        [
          {
            label: "U.S Bank Silver Business",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label:
              "Allows 150 transactions a month for free. Has 3.000 bank branches in addition to online banking.",
            type: "label",
            textCenter: true,
          },
        ],
        [
          {
            label: "Capital One Spark Business",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label: "Online banking with no monthly limit on transactions.",
            type: "label",
            textCenter: true,
          },
        ],
        [
          {
            label: "Well Fargo Business Choise",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label:
              "Make 10 debit transactions a month and the $14 monthly free is waived. Offers a total of 200 free monthly transactions and no charge for the first $7.500 in cash deposits each month.",
            type: "label",
            textCenter: true,
          },
        ],
        [
          {
            label: "Bank of Internet Federal Bank Basic Business",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label:
              "Online-only bank that offers 200 free transactions a month and unlimited fee reimbursement for ATMs in the US.",
            type: "label",
            textCenter: true,
          },
        ],
      ],
      headerColumnsDef: "1fr 1fr",
      rowColumnsDef: "1fr 1fr",
    },
    responsive: true,
    settings: {},
    style: {
      "margin-bottom": "41px",
    },
  },
  {
    type: "header",
    content: "Separate Business & Personal Expenses",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your Texas Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='/'>Expensify</a> to track and tag business expenses from your mobile phone.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Set Up Accounting Software",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here are some favorite accounting software options for Corporation business owners:",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Choosing the right accounting software will allow you to track your accounts receivable — the money that is flowing in and out of your Corporation. Accounting software will allow you to track bills, invoices, expenses and customers. This is also another important step in simplifying your year-end tax burden. With a clear, separate business checking account and card and an organized accounting software system, you’ll (barely) dread tax season as a business owner.",
    marginBottom: 24,
  },
  {
    type: "whiteboxes",
    content: [
      {
        link: {
          text: "QuickBooks",
          url: "/",
        },
        text:
          "This is a top option for a lot of business owners and starts out at only $10 a month. You can automatically important banking transactions, track your customers and vendors and related bills and expenses, and integrate with a lot of other online finance tools. If you hire an accountant or tax support, they will all likely support QuickBooks. You can even use an online version in addition to a desktop version of their software. The drawback is that the learning curve for QuickBooks can sometimes be a bit steep.",
      },
      {
        link: {
          text: "Xero",
          url: "/",
        },
        text:
          "Xero is online accounting software that is a great option for those who find QuickBooks to be too complicated and difficult to understand. Their plans start out at $20 per month.",
      },
      {
        link: {
          text: "FreshBooks",
          url: "/",
        },
        text:
          "Freshbooks is online accounting software that allows you to also track your time, expenses, collaborate on projects and view accounting reports. One drawback is that it doesn’t currently have a way to track invoices that your business needs to pay. But, accounts start out at $15 per month.",
      },
      {
        link: {
          text: "Bench",
          url: "/",
        },
        text:
          "Bench not only allows you to track your accounts receivable, but they include the help of a real-life bookkeeper to run your accounting every month. For a Bench account starting out at $125 a month, this is quite the deal instead of hiring your own bookkeeper.",
        marginBottom: "52px",
      },
    ],
  },
  {
    type: "header",
    content: "Determine How You’ll Accept Credit Cards",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you use QuickBooks or Freshbooks, you’ll be able to accept credit cards to pay for invoices. If you have a brick and mortar location for your small business, you want to look into offering payments through a service such as <a href='https://shopify.com/'>Shopify</a> or <a href='/'>Square</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Look Into Business Funding Options",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In case your business runs out of cash flow, you want to have a backup option so your business doesn’t go under. You can raise capital from investors, ask friends or family for loans, get a business credit card, take an online business loan, or look into government financing using the <a href='/'>SBA & BusinessUSA’s financing tools</a>. Also, it’s important to remember that you can also bootstrap your business — which means, only using the funds you have in your bank account and not expanding until you get more business income.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Business Operations & Marketing for Your Texas \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Build a Business Website",
        text:
          "Having a great online presence for your business is the number one way people will find you. You need to start with buying a domain name using a service such as <a href='/'>NameCheap</a>. Then you need to choose a service to host your website such as <a href='/'>SnapWeb</a>. Finally, design your website using a tool such as Squarespace or WordPress. Make sure your website includes important business information such as how to contact you and business hours.",
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
          "Your business needs a phone number so that your customers, employees and vendors can reach you. A great option is to look into a tool such as <a href='/'>Grasshopper</a>, which allows you to get a business phone that actually forwards to your cell phone, so you never miss an important call.",
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
          "A logo will reflect your business branding everywhere your customers interact with you — on your website, on your invoices, in your email signature, on business cards and more. Instead of trying to design a logo yourself, try a logo making service such as <a href='/'>99 Designs</a> or buy some really high-quality pre-made logos you can customize on <a href='/'>CreativeMarket</a>.",
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
          "Once you have a logo, create nice looking business cards that you can hand out when you’re out networking or even running errands. You never know when a conversation about your business will come up, and you want to be able to give someone a place to research your business and contact you. A great tool to create inexpensive business cards is <a href='/'>Vistaprint</a>.",
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
      "Choose the Best Business Tools to Run Your Texas \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to accounting software, there is a number of online business software options that will lift a number of menial tasks and burdens off your full business-owner plate. Below are important business functions for your Corporation and what we think are the best business tools for your Texas Corporation.",
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
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you want to track your progress in getting your new business set up properly, we have a great virtual <a href='/'>Start a Business Checklist</a> that includes everything you need to do to launch your business. It even features downloadable PDFs you can access to download and print.",
    marginBottom: 24,
  },
];
