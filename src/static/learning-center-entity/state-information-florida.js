import FloridaCorpSVG from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
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
  header: `Why Form a Corporation in Florida?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See Detailed Pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
    },
  ],
};
export const launchBusiness = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business!`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
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
      name: `Florida Corporations`,
      path: `/florida-corporation/`,
      icon: FloridaCorpSVG,
    },
    {
      name: `How To Guide`,
      path: `/florida-corporation/start-a-fl-corporation/`,
      icon: EntitySVG,
    },
    {
      name: `Naming Your Corporation`,
      path: `/florida-corporation/how-to-name-your-corporation/`,
      icon: PenSVG,
    },
    {
      name: `Registered Agents`,
      path: `/florida-corporation/registered-agents-florida/`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Filing Requirements`,
      path: `/florida-corporation/form-filling-permit-requirements/`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/florida-corporation/taxes-and-fees-for-your-corporation/`,
      icon: PriceTagSVG,
    },
    {
      name: `After Formation`,
      path: `/florida-corporation/know-your-ongoing-filing-requirements/`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
    type: "header",
    content: "Florida Corporations",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Florida is a great place to start a business. A combination of a rich culture, beautiful cities like Miami, Orlando or Tampa Bay, and access to the world’s transport networks makes the state home to some of the biggest businesses in the U.S. Headquarters of companies like Publix, Tupperware, Burger King and more are proud to call Florida home. One of the world’s largest entertainment companies, Disney, is famous for its Disney World theme park in Orlando. The lack of a state tax can also make it financially advantageous to start a business there. ",
    marginBottom: 32,
  },
  {
    type: "header",
    content: "What Type of Florida Corporation Should You Choose? ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "video",
    image: "what-is-a-corporation-8899",
    id: `oYZShvmf9eQ`,
    marginBottom: 32,
  },
  {
    type: "text",
    content: `When it comes to incorporating a business in Florida, you have a few options for the type of corporation you want to create. This is known as your <a href="/florida-entity-search/">“legal business entity”</a>, and it defines how your Florida business will be treated by the FL Division of Corporations, the law, the IRS and other official bodies. `,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most new entrepreneurs have a choice of several FL business types: sole proprietorship, partnership, Limited Liability Company (LLC), S Corporation or C Corporation. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here’s a quick overview of each type of <a href='/florida-entity-search/'>business entity</a>.",
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Florida Sole Proprietorships and Partnerships",
        text:
          "These are the simplest type of business and will be the “default” type of FL business you have if you do not choose to form a separate business entity. These types of businesses do not provide you with any special protections or benefits and can leave your personal assets vulnerable. We do not recommend them.",
        svg: ProprietorshipSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "Florida Limited Liability Companies (LLCs)",
        text:
          "LLCs are a great option for smaller FL businesses. LLCs are quick and easy to create, inexpensive to administer, light on regulations and have simple taxation and rules.",
        svg: LockpadSVG,
        link: {
          text: "You can learn how to create an LLC in Florida here.",
          url: "/florida-llc/",
        },
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px",
      },
      {
        header: "Florida S Corporations",
        text:
          "You might choose to form a Florida S Corporation because it’s a good compromise between the simplicity of the LLC and the complexity of the C Corporation. Note that FL S Corporations are subject to more rules and regulations than a FL LLC, but they can mean that you pay less tax.",
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
        header: "Florida C Corporations",
        text:
          "Florida C Corporations are the most complex type of business. They are best suited to larger businesses and are necessary if shares in the business will be traded on public stock markets. C Corporations have much more significant regulation, compliance and legal rules, and they are not as tax efficient as S Corporations or LLCs.",
        svg: BillSVG,
        link: {
          text: "Learn about forming a C Corporation.",
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
    type: "colorbox",
    icon: FolderProcentSVG,
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        arrow: true,
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C-Corp",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        arrow: true,
        theme: "primary56",
      },
    ],
  },
  {
    type: "header",
    content: "Advantages of Forming a Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 32,
  },
  {
    type: "text",
    content: "Florida corporations have several benefits for business owners. ",
    marginBottom: 32,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      list: [
        "Florida corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business. ",
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
    content: "The Advantages of a Florida Corporation Versus an LLC ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are several reasons an entrepreneur might choose to form a FL corporation instead of a Florida LLC. ",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Taxation Benefits of a Florida S Corporation Over an LLC ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A Florida S Corporation will often pay less self-employment tax on owner earnings than an LLC. Note that a FL LLC can choose to be treated as an S Corporation for tax purposes by filing Form 2553 with the IRS, which removes this restriction. Florida C Corporations do not have this advantage over an LLC. ",
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
      "Florida S Corporations and C Corporations Make It Much Easier to Transfer Stock and Ownership ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you want to easily transfer ownership through buying and selling stock, you will need a FL C Corporation or an S Corporation. C Corporations have much more flexibility than S Corporations, and both are better than LLCs for stock and ownership transfers. ",
    marginBottom: 24,
  },
  {
    type: "header",
    content:
      "Florida C Corporations Provide the Main Advantages for Buying and Selling Stock",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "C Corporations provide certain benefits when it comes to buying, selling and transferring stock. Here are the rules for both S Corps and C Corps: ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
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
    content: "Advantages of Opening an S Corporation in Florida ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, FL S Corporations provide several other advantages: ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      header: "",
      list: [
        "Florida S Corporations can have up to 100 shareholders.",
        "Running an S Corporation in Florida is simpler than running a C Corporation.",
        "It is easy to transfer ownership in an S Corporation by selling your stock.",
        `In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax. Find out how this can save you money using our <a href="/s-corporation-tax-calculator/">S Corporation Tax Calculator</a> .`,
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
    content: "Advantages of Opening a C Corporation in Florida ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to the general benefits above, Florida C Corporations provide several other advantages. ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Ownership in a Florida C Corporation is very fluid and determined by who owns stock in the business.",
        "Florida C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
        "Florida C Corporations can sell stock to investors inside and outside the U.S.",
        "Florida C Corporations can issue more than one type of stock.",
        "Florida C Corporations can raise more funds by issuing more stock.",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content:
      "Important Points About How to Start a Corporation in the State of Florida ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Here are some areas to be aware of when you’re creating a corporation in Florida. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "First, FL corporations are formed on the state level by filing Articles of Incorporation with the Florida Division of Corporations. Incfile specializes in helping entrepreneurs form Florida S Corporations and C Corporations and can collect the information and file this form on your behalf. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "When you incorporate a business as a corporation, the Florida Division of Corporations will treat your business as a C Corporation by default. A C Corporation will become an S Corporation when all shareholders wish to change the corporation’s status to an S Corporation with the IRS. You can make this choice when you first form your Florida corporation or at any time after you incorporate. ",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "There are some similarities and some differences between S Corps and C Corps: ",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "<strong>Similarities</strong>: Florida S Corporations and C Corporations have similar rules and regulations for liability, governance, management and ownership",
        "<strong>Differences</strong>: Key differences are taxation and the ease of buying, selling and transferring stock",
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
      text:
        "Learn what you need to do to create a Florida S Corporation or C Corporation ",
      url: "/florida-corporation/start-a-fl-corporation/",
    },
    marginBottom: 32,
  },
  {
    type: "header",
    content:
      "Your State of Florida Corporation Must Follow Certain Rules and Regulations ",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "boxes",
    content: [
      {
        icon: ArrowLeftSVG,
        text: "All FL corporations must issue stock to shareholders",
      },
      {
        icon: ChatSVG,
        text: "All FL corporations must hold Annual General Meetings (AGMs)",
      },
      {
        icon: BoardSVG,
        text: "All FL corporations must have an elected Board of Directors",
      },
      {
        icon: UserCheckmarkSVG,
        text: "All FL corporations must appoint officers",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "text",
    content:
      "All Florida corporations must follow stringent compliance rules and regulations. These include financial reports, bylaws, corporate formalities, taxes, fees, business licenses and the like. You can find links to these below. ",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about Florida corporation requirements. ",
      url: "/florida-corporation/form-filling-permit-requirements/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about Florida corporation taxes and fees. ",
      url: "/florida-corporation/taxes-and-fees-for-your-corporation/",
    },
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Are you ready to start your Florida corporation? If so, we can help. We provide comprehensive corporation formation services for both S Corporations and C Corporations in Florida.",
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
          header: "Start your S Corp with Incfile",
          link: {
            text: "Incorporate now",
            externalLink: true,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
          },
        },
        noShadow: false,
        color: color.purple3,
      },
      {
        roundRight: true,
        image: "c-crop-certificate-3409",
        content: {
          header: "Start your C Corp with Incfile",
          link: {
            text: "Incorporate now",
            externalLink: true,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
          },
        },
        noShadow: false,
        color: color.orange3,
      },
    ],
  },
  {
    type: "header",
    content: "Detailed Information for Your Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 32,
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
        header: "Forming Your Florida Corporation",
        text:
          "The six steps you need to take to start a Florida S Corporation or C Corporation.",
        link: {
          text: "Learn more",
          url: "/florida-corporation/start-a-fl-corporation/",
        },
        svg: TodoSVG,
        backgroundColor: color.red2,
        shadowColor: shadow.red2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Naming Your Florida Corporation",
        text:
          "How to search the Florida business registry of the FL Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Florida corporation name and more.",
        link: {
          text: "Learn more",
          url: "/florida-corporation/how-to-name-your-corporation/",
        },
        svg: QuestionSVG,
        backgroundColor: color.orange3,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Florida Registered Agents for Your Corporation",
        text:
          "How to appoint a Florida Registered Agent to your new corporation or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Florida Registered Agents.",
        link: {
          text: "Learn more",
          url: "/florida-corporation/registered-agents-florida/",
        },
        svg: IdSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false,
      },
      {
        header: "Fees and Requirements for Your Florida Corporation",
        text:
          "How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Florida rules. Includes details of Employee Identification Numbers (EINs), Florida and federal business licenses, Florida Statement of Information reports and more.",
        link: {
          text: "Learn more",
          url: "/florida-corporation/form-filling-permit-requirements/",
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
          "Federal, State, Sales and Other Taxes for Your Florida Corporation",
        text:
          "How to understand the various taxes you will need to pay to the federal and Florida government. Includes details of federal taxes like income and self-employment, and Florida taxes like sales tax and income tax.",
        link: {
          text: "Learn more",
          url: "/florida-corporation/taxes-and-fees-for-your-corporation/",
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
    content: "How to Form a Corporation in Florida",
    size: 2,
    template: 3,
    left: true,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Opening a FL corporation doesn’t have to be complicated. We’ve created this straightforward guide on how to form a corporation in Florida.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Starting your Florida S Corporation or C Corporation with Incfile is fast and easy. We’ll gather all the information we need from you and file it with the FL Division of Corporations. Here are the six steps you need to follow to form a corporation in Florida.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "How to Form a Corporation in Florida — The Benefits",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Briefly, the benefits of forming a Florida corporation are:",
    marginBottom: 32,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "A Florida S Corporation or C Corporation will protect your personal finances and assets by limiting your liability.",
        "S Corporations can provide tax advantages for Florida business owners by reducing the self-employment tax you pay.",
        "If you want limited options to buy, sell or transfer stock, a Florida S Corporation gives you some options.",
        "FL C Corporations give you the most flexibility for creating, transferring and selling stock.",
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
      "If you don’t need the options for buying and selling stock, a Florida LLC may be a better choice for your business. You can even have your LLC treated as an S Corporation for tax purposes to save you money.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about starting a Florida LLC",
      url: "/florida-llc/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "How to Create a Corporation in Florida in Six Steps",
    size: 2,
    template: 3,
    marginBottom: 32,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question:
            "Carry Out a Florida Corporation Search and Choose the Right Name for Your Business",
          answer: `Every FL business needs a unique name, including your corporation. You can carry out a Florida business entity name search on the FL Division of Corporations website. The name of your Florida S Corporation or C Corporation cannot be confusable with another business that’s been formed in Florida. If you’re not forming your corporation right away, you can reserve the name with the FL Division of Corporations. <br/><br />See if the name is available by <a href="https://dos.myflorida.com/sunbiz/search/" target="_blank" rel="noopener noreferrer">searching for it on the Florida Division of Corporations website</a>.<br /><br /><a href="/florida-corporation/how-to-name-your-corporation/" target="_blank">Learn how to name your Florida corporation.</a>`,
        },
        {
          question:
            "Establish Street and Mailing Addresses for Your Florida Corporation",
          answer:
            "Every Florida S Corporation or C Corporation must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside FL, but it cannot be a P.O. Box.",
        },
        {
          question: "Appoint a Registered Agent for Your Florida Corporation",
          text:
            "Every Florida corporation must have a “Registered Agent” who receives official legal and tax correspondence and has responsibility for filing reports with the Florida Division of Corporations. Your Registered Agent must have a physical street address in Florida.<br/><br />A Registered Agent position for a Florida S Corporation or C Corporation can be filled in several ways.<br /><br />A Registered Agent could be you, a director or an officer of the corporation. The Florida Registered Agent for your corporation must have a physical street address in Florida. They need to be available during business hours to receive important documents for your corporation.<br/><br/>At Incfile, all of our packages include a Florida Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.<br/><br/>Here at Incfile we always recommend using a proper Florida Registered Agent service since they provide several benefits:",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agent service to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed in public records on the FL Division of Corporations website. If you do not want your own name and Florida address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence, since the type of documents delivered to the Registered Agent require a signature on delivery.",
          ],
          arrowLink: {
            text: "Learn more about Florida Registered Agents.",
            url: "/florida-corporation/registered-agents-florida/",
          },
        },
        {
          question: "Create Your Florida Articles of Incorporation",
          list: [
            "The corporation’s name",
            "The corporation’s purpose",
            "The corporation’s mailing address and street address",
            "The corporation's Registered Agent and their address",
            "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
            "The names and addresses of officers and directors",
            "The effective date",
            "The name and address of the incorporator",
          ],
        },
        {
          question:
            "Send Your Florida Articles of Incorporation to the Secretary of State",
          text:
            "Once your Articles of Incorporation document is drafted, you can file it with the Florida Division of Corporations. Filing your Articles of Incorporation creates your Florida corporation. You can do this online, mail in a form or have Incfile do it on your behalf.",
        },
        {
          question:
            "Your FL Corporation Will Need to Meet Certain Legal and Compliance Requirements",
          answer:
            "Once your Florida corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
            "File IRS Small Business Tax Election Form 2553 if you want your FL business to be treated as an S Corporation.",
            "​Any Florida S Corporations formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents.",
            "Create and issue stock certificates to your shareholders.",
            `Apply for <a href="/business-license-research-package/">business licenses and permits</a>. You may require licenses from the state of Florida, your county, township and various industry or federal bodies.`,
            `Get an <a href="/manage-your-company/tax-id-ein/">Employer Identification Number (EIN).</a>`,
            "File for taxes with Florida Department of Revenue.",
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
    content: "Opening Your Florida Corporation — Useful Resources",
    size: 2,
    template: 3,
    marginBottom: 32,
  },
  {
    type: "arrow-link",
    content: {
      text: "Florida Secretary of State website",
      url: "https://dos.myflorida.com/sunbiz/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "General information from the Florida Secretary of State",
      url:
        "https://dos.myflorida.com/sunbiz/start-business/know-before-starting/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Checking name availability for your Florida corporation",
      url: "https://dos.myflorida.com/sunbiz/search/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Special Types of Florida Corporations  ",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A regular Florida S Corporation or C Corporation is suitable for almost all business needs, but you also have a few other options to incorporate a special type of corporation.",
    marginBottom: 48,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional Florida S Corporation or C Corporation`,
          answer: `<p>Some states, including Florida, allow certain occupations to form “Professional Corporations.” These types of corporations may need special requirements and licensing. The Florida Secretary of State allows for the formation of professional corporations but does not provide a defined list of professions. Instead, they state the following:</br></br></p>
          <p>“Before submitting the completed form, contact the Florida state board or agency that controls your profession to find out if your profession is authorized to be a corporation in Florida and if there are any specific corporate name style rules.”</p>`,
        },
        {
          question: `Form a Foreign LLC in Florida`,
          answer: `"A “foreign” filing is when you have a regular, domestic corporation in a state (typically the one where you first formed your business) and need the company to be able to operate in another state. This is where you would file a “Foreign Qualification” to the new state for your domestic corporation to be able to operate in both states. You must have an existing domestic corporation before you can file as a foreign corporation.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Need to Form a Florida Corporation Quickly \n" + "and Easily?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing your Articles of Incorporation. Our packages also provide a free Registered Agent service for the first year. If you're looking for assistance forming a corporation, we can help you start a FL S Corporation or C Corporation.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
  },
];
export const naming = [
  {
    type: "header",
    content: `Florida Name Lookup and Registration for Your Florida Corporation`,
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "You need the right name for your Florida corporation. Choosing the right name is vital because it tells your suppliers, customers and employees what your business does. The Florida Division of Corporations has several rules and regulations about what you can call your new business. Let’s explore what they are.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Florida Corporation Search",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Before you can name your FL corporation, you need to make sure there aren’t any other businesses in Florida with that name. That means searching the Florida Secretary of State website using their business search tool. You can easily look up FL corporations by name and other details.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If your S Corporation or C Corporation name is already used by any type of business entity in Florida, that means it’s not available and you won’t be able to register it. Try searching for a different FL corporation name instead.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Florida Division of Corporations corporation name search tool",
      url: "http://search.sunbiz.org/Inquiry/CorporationSearch/ByName",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Florida Division of Corporations Rules for Naming Your Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you’ve checked whether another business in FL is using your corporation name and confirmed availability, you’ll need to understand Florida Division of Corporations naming rules.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "General Corporation Naming Rules",
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
    content: "All FL Registered Corporations Must Have a Unique Name",
    size: 4,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The name you have chosen for your S Corporation or C Corporation cannot be used by any other registered business in the state of Florida. This is why you must check business name availability on the FL Secretary of State website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Your FL Corporation Name Must Not Be Confusable With \n" +
      "Another Business Name",
    size: 4,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Not only must your FL corporation name be unique, it cannot be similar to another corporation or LLC name in Florida. You cannot use the following factors to say your name is different from the name of another business:",
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
    content: "Your Florida Corporation Name Must Contain Certain Words",
    size: 4,
    template: 4,
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
    content: "Other General Rules on Naming Your Florida Corporation",
    size: 4,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The Florida Division of Corporations will not typically allow you to name S Corporations or C Corporations that breach the following rules:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Are very similar to the name of a federal or FL agency or organization (e.g., FBI, FDA, Florida Department of Revenue, Florida Police, Treasury, etc.)",
        "Suggest affiliation with a federal or FL agency or organization",
        "Use the term “Olympic” or any terms that are trademarks of the Olympic organization",
        "Imply a purpose that it would be illegal for your Florida corporation to carry out",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Florida Corporation Fictitious Names",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Some corporations choose to do business under a different name from the name they were formed under. In Florida, doing business under a different name is known as a “Fictitious Name.” We can file a Fictitious Name for your Florida corporation on your behalf with the county in which your principal place of business is located.",
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
      "In addition to the rules above, it’s also vital to see if your Florida corporation name might infringe on the trademark or service mark of another business. For example, it might not be a good idea to call yourself “General Electric Research Services,” since General Electric is a trademark.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our <a href='/trademark-name-search/'>Trademark Search and Registration</a> service. You should also bear in mind that your Florida corporation name cannot be substantially similar to an existing trademark or service mark.",
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
      "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your Florida corporation and form either an S Corporation or a C Corporation today.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
  },
];
export const agents = [
  {
    type: "header",
    content: "Why Your Florida Corporation Needs a Registered Agent Service",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Every corporation in Florida needs to formally appoint a person or business to act as a Registered Agent. Your Florida Registered Agent provides various services to FL S Corporations and C Corporations, including the acceptance of formal documents and correspondence from the Florida Division of Corporations.",
    marginBottom: 32,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you choose a person as a Registered Agent, he or she must reside in Florida",
        "If you choose a business as a Registered Agent, they must be able to conduct business in Florida",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Services Provided by a Florida Registered Agent to Your Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Your Florida Registered Agent carries out several valuable services for your corporation. They accept official communications and documents from the FL Division of Corporations on your behalf. This may include:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Correspondence from the Florida Division of Corporations, like a notice to file reports and other forms",
        "Service of process documents (for example, if your Florida corporation has legal proceedings issued against it)",
        "Official Florida and federal government documents, form filings and requests for information (including taxes, permits and company filings)",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "header",
    content:
      "Why Assigning Yourself as the Florida Registered Agent for Your Corporation Might Be a Bad Idea",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you live in Florida, you might choose to be the Registered Agent for your corporation. Be aware that there may be some drawbacks to this:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent must have a physical street address in Florida. Some people establish corporations outside of Florida and will need to use a Registered Agent service to provide the address.",
        "A person must always be available to sign for legal correspondence during business hours. If you can’t always be around, consider using a third-party Registered Agent service like Incfile.",
        "The Registered Agent’s name and FL address are part of the public record and available through the Florida Division of Corporations website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
        "If you change your Florida business address or move out of state, you won’t need to file additional documentation with the FL Division of Corporations for the new address of your Registered Agent if using a service. You will need to set up a new Registered Agent service in the new state.",
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
      "The Problems Caused When You Don’t Appoint a Florida Registered Agent Service",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "What happens if you choose not to assign or provide details of a Registered Agent to the Florida Secretary of State? There are several possible ramifications, including:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your Florida corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Falling out of good standing with the Florida Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.",
        "Losing your status as a Florida corporation: A FL Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Florida corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content:
      "A Complete Florida Corporation Registered Agent Service From Incfile",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "If you have an S Corporation or C Corporation that’s incorporated in Florida and you need a FL Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Florida corporation. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "We are authorized to conduct business in Florida and can legally act as your Registered Agent for your FL corporation.<br /><br /> Here’s what you need to know about Incfile’s FL Registered Agent service for corporations:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent will always be available to accept documents and letters on your behalf",
        "We automatically notify you whenever we receive correspondence for your business from the Florida Secretary of State or anyone else",
        "We scan your correspondence and upload it to a dashboard, so you can review it when convenient",
        "We forward all correspondence to an address you choose",
      ],
    },
    color: color.orange3,
    marginBottom: 0,
    curve: false,
  },
  {
    type: "button",
    content: {
      text: "Order Incfile’s Florida Registered Agent Service",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 72,
  },
  {
    type: "header",
    content: "Useful Resources for Florida Registered Agent \n" + "Services",
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
      text: "The Main Functions of a Florida Registered Agent",
      url:
        "/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Changing Your Florida Registered Agent",
      url: "/manage-your-company/change-of-registered-agent/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "What a Florida Registered Agent Does",
      url:
        "/research-topics/registered-agent-help/what-does-a-registered-agent-do/",
    },
    marginBottom: 24,
  },
];
export const filing = [
  {
    type: "header",
    content: "Florida Corporation Form, Filing and Permit Requirements",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "When you’re forming a Florida S Corporation or C Corporation, you will need to file certain forms and pay certain fees. Requirements can come from various bodies including the federal government, the FL Division of Corporations and elsewhere.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Below is a rundown of what you’ll need to do, together with information on the requirements for your Florida corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "We provide a paid service to take care of certain filings and forms for your Florida corporation. Alternatively, you can choose to file these requirements yourself — make sure that you set calendar reminders.",
    marginBottom: 24,
  },
  {
    type: "buttons",
    content: [
      {
        content: {
          text: "Start Your S Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
    ],
    marginBottom: 48,
  },
  {
    type: "header",
    content: "File Your Articles of Incorporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The Articles of Incorporation document is the formal paperwork that you file with the Florida Division of Corporations to create your corporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once the Articles of Incorporation document is filed with the FL Division of Corporations, your business is legally formed as a Florida corporation. The Articles of Incorporation typically includes:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Florida corporation’s name",
        "The Florida corporation’s purpose",
        "The Florida corporation’s mailing address and street address",
        "The Florida corporation's Registered Agent and their address",
        "The Florida corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
        "The names and addresses of officers and directors",
        "The effective date",
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
      "Here at Incfile, we automatically create and file your Articles of Incorporation on your behalf when you start your S Corporation or C Corporation with us.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Business Licenses and Permits for Your Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Depending on the type of Florida corporation you’re running, you will need to obtain various business licenses and permits. These are not required to form your FL corporation, but you must have them to legally carry out business. It’s vital to understand the permits and licenses required for your business to operate in compliance in your jurisdiction.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "City Licenses and Permits for Your Corporation",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Various cities in Florida have slightly different rules and fees for permits and licenses for corporations. Check with your local Florida city administration to see what their rules are. You will need a separate permit or license for each city your Florida corporation operates in.",
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
      "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of Florida. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of Florida website.",
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
      "Incfile Business License Research Package for Your Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Because permits vary widely depending on the type of Florida corporation you are operating and where you are located, we provide a comprehensive Business License Research Package. It’s designed to tell you all of the licenses and permits necessary for your new corporation. It includes:",
    marginBottom: 40,
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
      "Your customized Business License Research Package will be emailed to you within two days of your Florida Corporation being formed by the Florida Secretary of State.",
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
    content:
      "Other Special Requirements for Your Florida \n" + "S Corp or C Corp",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Because you’re forming a corporation, there are certain other legal, regulatory and compliance areas you need to meet.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Create Bylaws for Your Florida Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Bylaws are the formal, internal rules that your Florida corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Defining your Florida registered office and FL Registered Agent",
        "Stating details of the Annual General Meeting (AGM), including date, place, time and other relevant information",
        "Other details from the AGM, including the order of business, notice, voting record, quorum, proxies, shareholder actions and more",
        "Stating when a special shareholders’ meeting may be held and the circumstances that could lead to it",
        "Details of stock certificates, ownership, issuing and transfer",
        "Details of the Board of Directors including how they are elected and appointed, their number, the powers they have, how they can be removed, regular meetings and agendas, executive committees, remuneration and other areas",
        "Details of the various officers in the corporation including how they are chosen and appointed",
        "Designations of officers in the Florida corporation including president, vice presidents, secretary, assistant secretaries and treasurer",
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
      "Ownership in a Florida corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
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
      "You must appoint directors to all positions in line with the agreed Florida corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
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
      "Officers are the individuals who manage the Florida corporation on a day-to-day basis. At minimum a FL corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
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
      "Your Florida corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
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
      "You may need to hire employees for your Florida corporation. You will need:",
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
    content: "Your Florida Corporation Must Hold an Annual General Meeting",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must hold a yearly meeting that all directors, officers and shareholders of the FL corporation are invited to. The purpose of an AGM is generally to:",
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
    content: "Florida Corporation Tax Registration",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You will need to register for certain taxes when you form your corporation. These include:",
    marginBottom: 40,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The corporation’s name",
        "The corporation’s mailing address and street address",
        "The corporation's Registered Agent and their address",
        "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
        "The name and address of the incorporator",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: `You can find details on the <a href='https://floridarevenue.com/pages/default.aspx' target="_blank" rel="noopener noreferrer">Florida Department of Revenue</a> and IRS websites.`,
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Your Florida Corporation Will Need to File an Annual Report",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You must file an annual report with the Florida Division of Corporations for your Florida corporation. If you do not file your report regularly, you will be charged a late fee and your FL corporation may be dissolved.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "<a href='/business-filing-deadlines/'>Learn about your ongoing Florida corporation filing requirements</a> and business filing deadlines with our helpful Florida ongoing filing lookup tool.",
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
    content: "Your Florida Corporation May Need a Certificate of Good Standing",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You may need a Certificate of Good Standing for your Florida corporation to carry out some business-related services like opening a bank account.",
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
    content: "Ready to Start Your Florida Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Florida corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
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
    content: "Florida Corporation Taxes and Fees",
    size: 2,
    template: 3,
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "You’ll need to pay certain taxes and fees for your Florida S Corp or C Corp. We’ve included the more common ones below.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Common Fees for a Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 32,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Fees for forming a corporation in Florida",
          answer:
            "Learn about <a href='/state-filing-fees/'>standard filing costs here</a> for FL corporations.",
        },
        {
          question: "Florida Statement of Information Report Fee",
          answer: "A yearly fee when you file your Annual Repo",
        },
        {
          question: "Florida Permits and Licenses",
          answer:
            "These are the fees for creating or renewing your licenses and permits on a regular basis. These depend on the type of Florida corporation you’re operating and where you’re located.",
        },
      ],
    },
    marginBottom: 47,
  },
  {
    type: "header",
    content: "Taxes Payable by Your Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "The way that Florida S Corporations and C Corporations pay taxes is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Both S Corporations and C Corporations in Florida \n" +
      "Need to Pay These Taxes",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "IRS Payroll Tax",
          answer:
            "Your Florida corporation will need to pay employer payroll tax to the IRS on salaries paid to employees.",
        },
        {
          question: "Florida State Income Tax",
          answer: "Florida does not have a state income tax.",
        },
        {
          question: "Sales and Use Tax Payable to the State of Florida",
          answer: `If your FL corporation is selling products or services in Florida, you may need to pay a state sales tax. Find out more on the <a href='https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx'target="_blank" rel="noopener noreferrer">Florida Department of Revenue website</a>.`,
        },
        {
          question: "Other Taxes in Florida",
          answer: `You may need to pay other taxes and fees depending on the type of Florida corporation you run. Find out more on the <a href='https://floridarevenue.com/Pages/info_business.aspx'target="_blank" rel="noopener noreferrer">Florida Department of Revenue website</a>.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Estimated Taxes for Your Florida Corporation",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Most Florida corporations will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Federal income tax",
        "Federal self-employment tax",
        "Florida state tax",
      ],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content:
      "Most Florida S Corporations and C Corporations will pay estimated taxes four times a year. Speak to your accountant for more information.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Florida Corporation Employee Taxes and Insurance",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "You may also need to pay tax and insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Get more requirements from the <a href='https://www.dol.gov/general/maps/2019/fl'>Florida Department of Labor website</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content:
      "Individuals Working for Florida Corporations Are Liable for These Taxes",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Florida Corporation Earnings, Dividends and Distributions Are Subject to Federal Income Tax.",
    marginBottom: 16,
  },
  {
    type: "text",
    content:
      "You will need to pay regular federal income tax when you file your tax return every year.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Florida S Corporations — Additional Tax Liabilities",
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
          "In a Florida S Corporation, your earnings “flow through” from the business to your personal tax return. This means you must pay self-employment tax on those earnings at a rate of 15.3 percent. Note that you can deduct standard tax deductions and business expenses.",
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
        "On profits of $10,000, you would pay self-employment tax of $1,530",
        "On profits of $40,000, you would pay self-employment tax of $6,120",
        "On profits of $70,000, you would pay self-employment tax of $10,710",
        "On profits of $100,000, you would pay self-employment tax of $15,300",
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
      text: "File Your Florida S-Corp Tax Election with Incfile",
      url: "/llc-s-corp-election/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Taxes Payable by Florida C Corporations",
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
          "Unlike the the Limited Liability Company and the S Corporation, a Florida C Corporation is required to file a corporate tax return and pay corporation taxes on any profits. When those taxed profits are paid to shareholders as dividends, they will also be subject to taxation on that individual’s tax return. This is known as “double taxation.”",
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
          "A Florida C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
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
    content: "Ready to Start Your Florida Corporation?",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Incfile provides a cost-effective service to help you create your Florida corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation&entityState=FL`,
        },
        theme: "primary56",
      },
      {
        content: {
          text: "Start Your C Corp with Incfile",
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=FL`,
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
    marginBottom: 40,
  },
  {
    type: "text",
    content: `Each state requires different forms such as your business <a href="/manage-your-company/annual-report/">annual reports</a> and state franchise tax reports to be filed at different times. It’s important to understand when each form needs to be filed and when you need to refile the form. Complying by the <a href="/compliance-filing-requirement/">form filing requirements</a> keeps your business in <a href="/manage-your-company/certificate-of-good-standing/">good standing</a> with the state. Failure to file these reports can lead to the company being revoked or administrative <a href="/manage-your-company/dissolution/">business dissolution</a>. Incfile includes lifetime company alerts with courtesy email reminders to inform clients of an upcoming filing requirement with all of our state filing packages.`,
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Florida's Ongoing Corporate File Requirements:",
    size: 3,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "dynamic_filing_requirement",
  },

  {
    type: "header",
    content: "Protect Your Business Name with a Trademark",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "A trademark is an essential asset for your business because it protects the brand name and identity that you worked so hard to create. When you secure a federal trademark for your business brand, it gives you exclusive rights to use your business name, logo or slogan once the trademark is approved. Federal Trademark Protection also prevents other businesses from using your brand name and brand identity. Incfile is happy to help with conducting a trademark name search on your Corporation business name. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing is properly prepared and submitted to the government office, and provide sound legal advice throughout the entire process.",
    marginBottom: 40,
  },
  {
    type: "text",
    content:
      "Benefits of <a href='/trademark-name-search/'>Incfile's Trademark service</a> include:",
    marginBottom: 32,
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
    content: "Finances & Accounting for Your Florida Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "Once you form your corporation in Florida, there are important next steps to ensure your business finances and accounting are organized for tax season and peace of mind, and that your personal and business finances are kept separate to ensure safety of your personal assets. With the right accounting steps, your business will run smoothly and be set up for increased profits and success.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Choose a Bank for Your Florida Corporation",
    size: 3,
    template: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: `The right business checking account for your business should have minimum fees, so that your money goes into the business or your own checking account instead of spending on hidden, tricky bank fees. <a href="https://www.nerdwallet.com/best/banking/free-business-checking-accounts"target="_blank" rel="noopener noreferrer">According to NerdWallet</a> — who looked at the 10 biggest banks in the U.S. and some additional online banks — these are the best four free business checking accounts for your corporation:`,
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
      "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your Florida Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='http://expensify.com/'>Expensify</a> to track and tag business expenses from your mobile phone.",
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
      "Business Operations & Marketing for Your Florida \n" + "Corporation",
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
      "Choose the Best Business Tools to Run Your Florida \n" + "Corporation",
    size: 2,
    template: 3,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
      "In addition to accounting software, there is a number of online business software options that will lift a number of menial tasks and burdens off your full business-owner plate. Below are important business functions for your Corporation and what we think are the best business tools for your Florida Corporation.",
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
    content: "Get a “Start a Business Checklist” to Follow",
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
