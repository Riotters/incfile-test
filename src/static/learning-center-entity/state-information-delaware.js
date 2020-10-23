import DelawareCorpSVG from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";
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

import StockSVG from "../../images/icons/icon-stock-buying.inline.svg";
import FolderProcentSVG from "../../images/icons/icon-folder-procent.inline.svg";

import TodoSVG from "../../images/icons/icon-todo-list.inline.svg";
import QuestionSVG from "../../images/icons/icon-chat-question-mark.inline.svg";
import IdSVG from "../../images/icons/icon-registered-id.inline.svg";
import BillPadSVG from "../../images/icons/icon-bill-pad.inline.svg";
import DollarUpSVG from "../../images/icons/icon-dollar-arrow-up.inline.svg";

import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
  header: `Why Form a Corporation in Delware?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `/`,
    },
  ],
};
export const launchBusiness = {
  header: `Launch your business with Incfile`,
  text: `No Contracts. No Surprise. Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `launch your business`,
    url: `/`,
  },
};
export const requirements = {
  header: `Fees and requirements in Delaware.`,
  rows: [
    {
      box: {
        fields: [
          {
            header: `$109`,
            text: `State fee`,
          },
          {
            header: `15 Business days`,
            text: `State filing time`,
          },
          {
            header: `6 Business days`,
            text: `Expected filling time`,
          },
        ],
      },
      content: {
        columns: [
          // {
          //   header: `Filing time and price`,
          //   text: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
          //   text2: `Ut tincidunt neque a viverra egestas. Suspendisse tempus metu.`,
          //   link: {
          //     text: `State Filing Times`,
          //     url: `/`,
          //   },
          //   link2: {
          //     text: `State Filing Prices`,
          //     url: `/`,
          //   },
          // },
          {
            content: [
              {
                type: `heading`,
                size: 3,
                content: `Filing time and price`,
              },
              {
                type: `paragraph`,
                content: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
              },
              {
                type: `paragraph`,
                content: `Ut tincidunt neque a viverra egestas. Suspendisse tempus metu.`,
              },
              {
                type: `arrow-links`,
                content: {
                  text: `State Filing Times`,
                  url: `/`,
                },
                bottomMargin: 16,
              },
              {
                type: `arrow-links`,
                content: {
                  text: `State Filing Prices`,
                  url: `/`,
                },
              },
            ],
          },
          {
            header: `Compliance  Requirements`,
            text: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state.`,
            text2: `Failure to file this report can lead to the company being revoked or administratively dissolved.`,
            link: {
              text: `Other State's Ongoing`,
              url: `/`,
            },
          },
        ],
      },
    },
    {
      box: {
        fields: [
          {
            header: `Annually`,
            text: `Frequency`,
          },
          {
            header: `$800 (min)`,
            text: `Filing fee`,
          },
        ],
      },
      content: {
        header: `Delaware Franchise Tax`,
        text: `$800 payment for the LLC Franchise Tax is due by 15th day of the 4th month after your LLC is filed. The month your LLC is filed counts as Month 1, regardless if you file on the 1st of the month, the last of the month, or any day of the month, really.`,
        text2: `This means that if you were to file your LLC on March 22nd, then you must pay the $800 fee no later than June 15th (in this example, March is Month 1, April is Month 2, May is Month 3, and June is Month 4). Then, every year after your first payment $800 LLC Franchise Tax will be due April 15th. You pay the $800 LLC Franchise Tax using Form 3522 called the LLC Tax Voucher.`,
      },
    },
    {
      box: {
        fields: [
          {
            header: `Biennially`,
            text: `Frequency`,
          },
          {
            header: `$20`,
            text: `Filing fee`,
          },
        ],
      },
      content: {
        header: `Statement of Information`,
        header2: `Due Date:`,
        text: `During six-month period ending on last day of anniversary month of incorporation or qualification.`,
        header3: `Important:`,
        text2: `The initial Statement of Information filing is due within 90 days of the entity formation date.`,
      },
    },
  ],
};
export const learnMore = {
  header: `Learn more about starting a business in Delaware`,
  text: `Additional resources, guides, and articles for better decision making.`,
  buttons: [
    {
      header: `Business Name`,
      url: `/`,
    },
    {
      header: `Articles of Incorporation`,
      url: `/`,
    },
    {
      header: `Registered Agent`,
      url: `/`,
    },
    {
      header: `Operating Agreement`,
      url: `/`,
    },
    {
      header: `Members`,
      url: `/`,
    },
    {
      header: `Required reports`,
      url: `/`,
    },
    {
      header: `Taxes`,
      url: `/`,
    },
    {
      header: `Foreign Qualifications`,
      url: `/`,
    },
  ],
};
export const quickLinks = {
  header: `Quick links`,
  cards: [
    {
      header: `State Filing Times`,
      text: `Get started wih easy-to-follow guides, wizards, content and support documents. Help is only an email away.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `Starting a Home Business`,
      text: `Learn everything you need to launch your home business.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `LLC State/Corporation State Information`,
      text: `Learn more about LLCs/Corporation in your state.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `Ongoing Filing Requirements`,
      text: `Review your states ongoing filing requirements.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `Business Plan Tips`,
      text: `Read our guide to the 10 things your business plan needs.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `Small Business Workshops`,
      text: `Check out our list of free entrepreneur workshops, seminars, business training and webinars.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `State Filing Fees`,
      text: `Use our comparison tool to determine the processing fee fro each state.`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `S-Corp Tax Calculator`,
      text: `Review the potential tax savings by forming an S-Corporation`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
    {
      header: `Entity Comparison Chart`,
      text: `Ongoing filing and compliance Review the benefits of each entity to determine which type is best for you`,
      link: {
        text: `Learn more`,
        url: `/`,
      },
    },
  ],
};
export const variants = {
  header: `See how easy it can be to get your business incorporated`,

  link: {
    text: `Learn more`,
    url: `/`,
  },
  cards: [
    {
      variant: ``,
      header: `Silver`,
      text: `Our core features for the lowest price`,
      price: `0`,
      button: {
        text: `Get the Silver package`,
        url: `/`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `0`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `109`,
        },
      ],
      include: `The sliver services includes:`,
      list: [`Prepare & Filing the Articles of Organization`, `Unlimited Name Searches`, `FREE Registered Agent for a year!`],
    },
    {
      variant: `Most popular`,
      header: `Gold`,
      text: `Comprehensive features to get your business started`,
      price: `149`,
      button: {
        text: `Get the Gold package`,
        url: `/`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `149`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `109`,
        },
      ],
      include: `The sliver package, and:`,
      list: [`EIN Business Tax Number`, `IRS Form 2553`, `Operating Agreement`, `Banking Resolution`, `Express Shipping`, `Lifetime Company Alerts`, `Online Access Dashboard`, `Unlimited Phone & Email Support`, `Business Banking Account`, `Business Tax Consultation`],
    },
    {
      variant: `Best value`,
      header: `Platinum`,
      text: `Full service features at the best value`,
      price: `299`,
      button: {
        text: `Get the Platinum package`,
        url: `/`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `299`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `109`,
        },
      ],
      include: `The gold package, and:`,
      list: [`Business Contract Templates`, `Expedited Filing`, `FedEx Delivery`, `Domain Name + Business Email`],
    },
  ],
};
export const subscription = {
  header: `Subscribe now to learn more about Corporation and starting a business`,
  button: {
    text: `Subscribe Now`,
    url: `/`,
  },
};
export const tabPages = {
  pages: [
    {
      name: `Delaware Corporations`,
      path: `/delaware-corporation/`,
      icon: DelawareCorpSVG,
    },
    {
      name: `How to guide`,
      path: `/delaware-corporation/start-a-de-corporation`,
      icon: EntitySVG,
    },
    {
      name: `Naming your corporation`,
      path: `/delaware-corporation/how-to-name-your-corporation`,
      icon: PenSVG,
    },
    {
      name: `Registered agents`,
      path: `/delaware-corporation/registered-agents-delaware`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Filing requirements`,
      path: `/delaware-corporation/form-filling-permit-requirements`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/delaware-corporation/taxes-and-fees-for-your-corporation`,
      icon: PriceTagSVG,
    },
    {
      name: `After filing`,
      path: `/delaware-corporation/know-your-ongoing-filing-requirements`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
    type: "header",
    content: "Delaware Corporations",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Delaware is a great place to start a business. Although it’s the second smallest state in the U.S., a combination of a great location, lots of travel hubs, a business-friendly environment, zero sales tax and plenty of people make it an excellent choice.",
    marginBottom: 24
  },
  {
    type: "text",
    content: "Delaware businesses are leaders in many sectors including banking, pharmaceuticals, technology, healthcare, farming, retail and more. In fact, more than half of all U.S. publicly traded companies and almost two thirds of the Fortune 500 are incorporated in Delaware. The state has long been a favored place for large businesses to incorporate because the case law in Delaware strongly protects them.",
    marginBottom: 24
  }, {
    type: "text",
    content: "Although these advantages may protect large national corporations, they do not not necessarily extend to small businesses who do not operate in Delaware — they must still qualify and be able to do business in their home state to be officially recognized. Under most circumstances, we recommend that small businesses operating in a single state incorporate in that state. Of course, if you already live in Delaware, that makes it an ideal choice. ",
    marginBottom: 24
  },
  {
    type: "header",
    content: "What Type of Delaware Corporation Should You Choose? ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "If you want to start a business in Delaware, you have a choice of an LLC, an S Corporation or a C Corporation. Each of these has different rules for how it’s treated by the Delaware Division of Corporations, the law, the IRS and other official bodies. That means it’s important to choose the right business structure for you. ",
    marginBottom: 24
  }, {
    type: "text",
    content: "Here’s a quick overview of each type of <a href='/delaware-entity-search'>business entity</a>.",
    marginBottom: 24
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Delaware Sole Proprietorships and Partnerships",
        text: "These are the simplest type of business and will be the “default” type of DE business you have if you do not choose to form a separate business entity. These types of businesses do not provide you with any special protections or benefits and can leave your personal assets vulnerable. We do not recommend them.",
        svg: ProprietorshipSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "Delaware Limited Liability Companies (LLCs)",
        text: "LLCs are a great option for smaller DE businesses. LLCs are quick and easy to create, inexpensive to administer, light on regulations and have simple taxation and rules.",
        svg: LockpadSVG,
        link: {
          text: "Learn how to create an LLC in Delaware",
          url: "/"
        },
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "Delaware S Corporations",
        text: "You might choose to form a Delaware S Corporation because it’s a good compromise between the simplicity of the LLC and the complexity of the C Corporation. Note that DE S Corporations are subject to more rules and regulations than a DE LLC, but they can mean that you pay less tax.",
        svg: ProcentSVG,
        link: {
          text: "Learn how to create an LLC in Delaware",
          url: "/"
        },
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "Delaware C Corporations",
        text: "Delaware C Corporations are the most complex type of business. They are best suited to larger businesses and are necessary if shares in the business will be traded on public stock markets. C Corporations have much more significant regulation, compliance and legal rules, and they are not as tax efficient as S Corporations or LLCs. ",
        svg: BillSVG,
        link: {
          text: "Learn about forming a C Corporation",
          url: "/"
        },
        backgroundColor: color.yellow2,
        shadowColor: shadow.yellow2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
    ],
    marginBottom: 24,
  },
  {
    type: "colorbox",
    icon: FolderProcentSVG,
    header: "Other Entity Types",
    text: "There are some other business entity structures like nonprofits, Limited Liability Partnerships (LLPs) and B Corporations, but they will not be relevant for the majority of entrepreneurs.",
    curve: true,
    curveColor: color.blue1,
    color: color.blue3,
    marginBottom: 73,
    buttons: [
      {
        content: {
          text: "Start Your S-Corp",
          url: "/"
        },
        arrow: true,
        theme: "primary56"
      },
      {
        content: {
          text: "Start Your C-Corp",
          url: "/"
        },
        arrow: true,
        theme: "primary56"
      },
    ]
  },
  {
    type: "list-dot",
    content: {
      header: "Benefits of Forming a Corporation in the State of Delaware",
      text: "Delaware corporations have several benefits for business owners. ",
      list: [
        "Delaware corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business. ",
        "This means that any liabilities created by your corporation (debts, obligations, damages, bankruptcy or other liabilities) should not impact your personal money, property or assets — they are considered completely separate from a legal perspective. ",
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1
  }, {
    type: "header",
    content: "The Advantages of a Delaware Corporation Versus an LLC ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "There are several reasons an entrepreneur might choose to form a DE corporation instead of a Delaware LLC. ",
    marginBottom: 24
  },
  {
    type: "header",
    content: "You Might Pay Less Tax as a Delaware S Corporation Than as an LLC ",
    size: 5,
    marginBottom: 24
  }, {
    type: "text",
    content: "A Delaware S Corporation will often pay less self-employment tax on owner earnings than an LLC. Note that a DE LLC can choose to be treated as an S Corporation for tax purposes by filing Form 2553 with the IRS, which removes this restriction. Delaware C Corporations do not have this advantage over an LLC. ",
    marginBottom: 24
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about the tax benefits of S Corporations.",
      url: "/"
    },
    marginBottom: 32,
  },
  {
    type: "button",
    content: {
      text: "File From 2553 with the IRS",
      url: "/"
    },
    theme: "primary56",
    marginBottom: 64,
  },
  {
    type: "header",
    content: "Delaware S Corporations and C Corporations Make It Much Easier to Transfer Stock and Ownership ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "If you want to easily transfer ownership through buying and selling stock, you will need a DE C Corporation or an S Corporation. C Corporations have much more flexibility than S Corporations, and both are better than LLCs for stock and ownership transfers. ",
    marginBottom: 24
  },
    {
        type: "list-dot",
        content: {
          header: "Delaware C Corporations Provide the Main Advantages for Buying and Selling Stock",
          text: "C Corporations provide certain benefits when it comes to buying, selling and transferring stock. Here are the rules for both S Corps and C Corps: ",
            list:[
                "If you want up to 100 shareholders who are U.S. citizens or residents and want to issue one type of stock, you can be an S Corporation or a C Corporation. ",
                "If you want more than 100 shareholders, want to issue more than one type of stock or have international shareholders, you will need a C Corporation. ",
                "If you want to allow the public to buy and sell shares in your company after an Initial Public Offering (IPO), you will need a C Corporation. ",
            ]
        },
        color: color.orange3,
        marginBottom: 48,
        curve: true,
        curveColor: color.orange1
    },
  {
    type: "arrow-link",
    content: {
      text: "Learn more about the differences between business entities",
      url: "/"
    },
    marginBottom: 48,
  },
    {
        type: "list-dot",
        content: {
          header: "Advantages of Opening an S Corporation in Delaware ",
          text: "In addition to the general benefits above, DE S Corporations provide several other advantages: ",
          list:[
                "Delaware S Corporations can have up to 100 shareholders.",
                "Running an S Corporation in Delaware is simpler than running a C Corporation.",
                "It is easy to transfer ownership in an S Corporation by selling your stock.",
                "In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax. Find out how this can save you money using our S Corporation Tax Calculator .",
                "LLCs can <a href='/'>choose to be taxed as S Corporations</a> to take advantage of this.",
            ]
        },
        color: color.orange3,
        marginBottom: 48,
        curve: true,
        curveColor: color.orange1
    },
  {
    type: "arrow-link",
    content: {
      text: "Learn more about the advantages of forming an S Corporation. ",
      url: "/"
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Advantages of Setting Up a Delaware C Corporation  ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "In addition to the general benefits above, Delaware C Corporations provide several other advantages. ",
    marginBottom: 24
  },
    {
        type: "list-dot",
        content: {
            list:[
                "Ownership in a Delaware C Corporation is very fluid and determined by who owns stock in the business.",
                "Delaware C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
                "Delaware C Corporations can sell stock to investors inside and outside the U.S.",
                "Delaware C Corporations can issue more than one type of stock.",
                "Delaware C Corporations can raise more funds by issuing more stock.",
            ]
        },
        color: color.orange3,
        marginBottom: 48,
        curve: true,
        curveColor: color.orange1
    },
  {
    type: "header",
    content: "What You Need to Know About Setting up a Delaware Corporation",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Here are some areas to be aware of when you’re creating a corporation in Delaware. ",
    marginBottom: 24
  }, {
    type: "text",
    content: "First, DE corporations are formed on the state level by filing Articles of Incorporation with the Delaware Division of Corporations. Incfile specializes in helping entrepreneurs form Delaware S Corporations and C Corporations and can collect the information and file this form on your behalf. ",
    marginBottom: 24
  },
  {
      type: "arrow-link",
      content: {
          text: "Learn what you need to do to create a Delaware S Corporation or C Corporation ",
          url: "/"
      },
      marginBottom: 24,
  },
  {
    type: "text",
    content: "When you incorporate a business as a corporation, the Delaware Division of Corporations will treat your business as a C Corporation by default. A C Corporation will become an S Corporation when all shareholders wish to change the corporation’s status to an S Corporation with the IRS. You can make this choice when you first form your Delaware corporation or at any time after you incorporate. ",
    marginBottom: 24
  }, {
    type: "text",
    content: "There are some similarities and some differences between S Corps and C Corps: ",
    marginBottom: 24
  },
    {
        type: "list-dot",
        content: {
            list:[
                "<strong>Similarities</strong>: Delaware S Corporations and C Corporations have similar rules and regulations for liability, governance, management and ownership",
                "<strong>Differences</strong>: Key differences are taxation and the ease of buying, selling and transferring stock",
            ]
        },
        color: color.orange3,
        marginBottom: 48,
        curve: true,
        curveColor: color.orange1
    },
    {
        type: "arrow-link",
        content: {
            text: "Learn what you need to do to create a Delaware S Corporation or C Corporation ",
            url: "/"
        },
        marginBottom: 24,
    },
    {
        type: "header",
        content: "Your Delaware Corporation Must Follow Certain Rules and Regulations ",
        size: 4,
        marginBottom: 24
    },
  {
    type: "boxes",
    content: [
      {
        icon: ArrowLeftSVG,
        text: "All DE corporations must issue stock to shareholders",
      },
      {
        icon: ChatSVG,
        text: "All DE corporations must hold Annual General Meetings (AGMs)",
      },
      {
        icon: BoardSVG,
        text: "All DE corporations must have an elected Board of Directors",
      },
      {
        icon: UserCheckmarkSVG,
        text: "All DE corporations must appoint officers",
      },
    ],
    marginBottom: 48
  },
    {
        type: "text",
        content: "All Delaware corporations must follow stringent compliance rules and regulations. These include financial reports, bylaws, corporate formalities, taxes, fees, business licenses and the like. You can find links to these below. ",
        marginBottom: 24
    },
  {
    type: "arrow-link",
    content: {
      text: "Learn about Delaware corporation requirements . ",
      url: "/"
    },
    marginBottom: 24,
  }, {
    type: "arrow-link",
    content: {
      text: "Learn about Delaware corporation taxes and fees . ",
      url: "/"
    },
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Are you ready to start your Delaware corporation? If so, we can help. We provide comprehensive corporation formation services for both S Corporations and C Corporations in Delaware.",
    marginBottom: 32
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
            url: "/"
          }
        },
        noShadow: false,
        color: color.purple3
      },
      {
        roundRight: true,
        image: "c-crop-certificate-3409",
        content: {
          header: "C Corporation",
          link: {
            text: "Incorporate now",
            url: "/"
          }
        },
        noShadow: false,
        color: color.orange3
      }
    ]
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Forming Your Delaware Corporation",
        text: "The six steps you need to take to start a Delaware S Corporation or C Corporation.",
        link: {
          text: "Learn more",
          url: "/"
        },
        svg: TodoSVG,
        backgroundColor: color.red2,
        shadowColor: shadow.red2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false
      },
      {
        header: "Naming Your Delaware Corporation",
        text: "How to search the Delaware business registry of the DE Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Delaware corporation name and more.",
        link: {
          text: "Learn more",
          url: "/"
        },
        svg: QuestionSVG,
        backgroundColor: color.orange3,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false
      },
      {
        header: "Delaware Registered Agents for Your Corporation",
        text: "How to appoint a Delaware Registered Agent to your new corporation or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Delaware Registered Agents.",
        link: {
          text: "Learn more",
          url: "/"
        },
        svg: IdSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false
      },
      {
        header: "Fees and Requirements for Your Delaware Corporation",
        text: "How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Delaware rules. Includes details of Employee Identification Numbers (EINs), Delaware and federal business licenses, Delaware Statement of Information reports and more.",
        link: {
          text: "Learn more",
          url: "/"
        },
        svg: BillPadSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false
      },
      {
        header: "Federal, State, Sales and Other Taxes for Your Delaware Corporation",
        text: "How to understand the various taxes you will need to pay to the federal and Delaware government. Includes details of federal taxes like income and self-employment, and Delaware taxes like sales tax and income tax.",
        link: {
          text: "Learn more",
          url: "/"
        },
        svg: DollarUpSVG,
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        marginTop: "91px",
        textBackgroundColor: "transparent",
        boxShadow: false
      },
    ],
    marginBottom: 24,
  },
];

export const startCaCorp = [
  {
    type: "header",
    content: "How to Set up a Corporation in the State of Delaware",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "We hope you’ve chosen the right type of Delaware corporation for your needs. When you choose to form one, we’ll let provide all the information you need to create your DE corporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Starting your Delaware S Corporation or C Corporation with Incfile is fast and easy. We’ll gather all the information we need from you and file it with the DE Division of Corporations. Here are the six steps you need to follow to form a corporation in Delaware.",
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
    content: "The Benefits of Forming a Corporation in Delaware",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Briefly, the benefits of forming a Delaware corporation are:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "A Delaware S Corporation or C Corporation will protect your personal finances and assets by limiting your liability.",
        "S Corporations can provide tax advantages for Delaware business owners by reducing the self-employment tax you pay.",
        "If you want limited options to buy, sell or transfer stock, a Delaware S Corporation gives you some options.",
        "For more options to create, buy, sell or transfer stock (including publicly), a Delaware C Corporation is the option you need",
      ],
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1,
  },
  {
    type: "text",
    content: "If you don’t need the options for buying and selling stock, a Delaware LLC may be a better choice for your business. You can even have your LLC treated as an S Corporation for tax purposes to save you money.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Learn about starting a Delaware LLC",
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Six Steps to Setting up Your Delaware Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Look up the Name of Your Proposed Delaware Corporation and Choose a Unique Business Name",
          answer: "Every DE business needs a unique name, including your corporation. You can carry out a Delaware business entity name search on the DE Division of Corporations website. The name of your Delaware S Corporation or C Corporation cannot be confusable with another business that’s been formed in Delaware. If you’re not forming your corporation right away, you can reserve the name with the DE Division of Corporations. <br/><br />See if the name is available by <a href='/'>searching for it on the Delaware Division of Corporations website</a>.<br /><br /><a href='/'>Learn how to name your Delaware corporation.</a>",
        },
        {
          question: "Establish Street and Mailing Addresses for Your Delaware Corporation",
          answer: "Every Delaware S Corporation or C Corporation must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside DE, but it cannot be a P.O. Box.",
        },
        {
          question: "Appoint a Registered Agent for Your Delaware Corporation",
          text: "Every Delaware corporation must have a “Registered Agent” who receives official legal and tax correspondence and has responsibility for filing reports with the Delaware Division of Corporations. Your Registered Agent must have a physical street address in Delaware.<br/><br />A Registered Agent position for a Delaware S Corporation or C Corporation can be filled in several ways.<br /><br />A Registered Agent could be you, a director or an officer of the corporation. The Delaware Registered Agent for your corporation must have a physical street address in Delaware. They need to be available during business hours to receive important documents for your corporation.<br/><br/>At Incfile, all of our packages include a Delaware Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.<br/><br/>Here at Incfile we always recommend using a proper Delaware Registered Agent service since they provide several benefits:",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agent service to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed in public records on the DE Division of Corporations website. If you do not want your own name and Delaware address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence, since the type of documents delivered to the Registered Agent require a signature on delivery.",
          ],
          arrowLink: {
            text: "Learn more about Delaware Registered Agents.",
            url: "/"
          }
        },
        {
          question: "Create Your Delaware Articles of Incorporation",
          list: [
              "The corporation’s name",
              "The corporation’s mailing address and street address",
              "The corporation's Registered Agent and their address",
              "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
              "The name and address of the incorporator",
          ]
        },
        {
          question: "File Your Certificate of Incorporation With the Delaware Division of Corporations",
          text: "Once your Articles of Incorporation document is drafted, you can file it with the Delaware Division of Corporations. Filing your Articles of Incorporation creates your Delaware corporation. You can do this online, mail in a form or have Incfile do it on your behalf."
        },
        {
          question: "Your DE Corporation Will Need to Meet Certain Legal and Compliance Requirements",
          answer: "Once your Delaware corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
              "File IRS Small Business Tax Election Form 2553 if you want your DE business to be treated as an S Corporation.",
              "​Any Delaware S Corporations formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents.",
              "Create and issue stock certificates to your shareholders.",
              "Apply for business licenses and permits. You may require licenses from the state of Delaware, your county, township and various industry or federal bodies.",
              "Get an Employer Identification Number (EIN).",
              "File for taxes with Delaware Department of Revenue.",
              "Get all formalities in place for employees, including unemployment, disability, payroll, insurance and taxes.",
              "Appoint a Board of Directors for the corporation.",
              "Appoint officers to the corporation.",
              "Get a corporate records book to capture all your important corporate information.",
          ]
        },
      ],
    },
    marginBottom: 48
  },
  {
    type: "header",
    content: "Useful Corporation Information From the State \n" + "of Delaware",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Delaware Secretary of State website",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "General information from the Delaware Secretary of State",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Checking name availability for your Delaware corporation",
      url: "/",
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Special Types of Delaware Corporations  ",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "A regular Delaware S Corporation or C Corporation is suitable for almost all business needs, but you also have a few other options to incorporate a special type of corporation.",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Form a Professional Delaware S Corporation or C Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Some states, including Delaware, allow certain occupations to form “Professional Corporations.” These types of corporations may need special requirements and licensing. The DE Division of Corporations does not specify which professions can form professional corporations, but they do provide some examples:",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "“In addition, and by way of example without limiting the generality thereof, the personal services which come within this chapter are the personal services rendered by architects, certified or other public accountants, chiropodists, chiropractors, doctors of dentistry, doctors of medicine, optometrists, doctors of osteopathy, doctors of podiatric medicine, professional engineers, veterinarians, and, subject to the Rules of the Supreme Court, attorneys-at-law.”",
    marginBottom: 24,
  },
    {
        type: "arrow-link",
        content: {
            text: "You can find more information on professional corporations in Delaware here.",
            url: "/"
        },
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
    content: "Need to Form a Delaware Corporation Quickly \n" + "and Easily?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing your Articles of Incorporation. Our packages also provide a free Registered Agent service for the first year. If you're looking for assistance forming a corporation, we can help you start a DE S Corporation or C Corporation.",
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
    content: "Delaware Corporation Name Search and Registration",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Your Delaware corporation needs a great business name, and we’re here to help. Learn about how to search the DE Division of Corporations business register, the rules for naming your corporation, using a “doing business as” or “fictitious” name and how to get started with registering your Delaware corporation.",
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
    content: "Delaware Division of Corporations Business Entity Search",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Before you can name your DE corporation, you need to make sure there aren’t any other businesses in Delaware with that name. That means searching the Delaware Division of Corporations website using their business search tool. You can easily look up DE corporations by name and other details.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "If the name you want for your Delaware corporation is already used by a DE LLC or corporation, you will need to choose a different name.",
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Delaware Division of Corporations corporation name search tool",
      url: "/",
    },
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Delaware Naming Rules Before You Register Your S Corp or C Corp",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Once you’ve found an original name for your Delaware S Corp or C Corp, you will need to make sure it meets Delaware Division of Corporations naming rules.",
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
    content: "The rules below generally apply to all corporations, wherever they are formed.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "All DE Registered Corporations Must Have a Unique Name",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The name you have chosen for your S Corporation or C Corporation cannot be used by any other registered business in the state of Delaware. This is why you must check business name availability on the DE Division of Corporations website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "The Name of Your Corporation Cannot Be Similar to Other Businesses in Delaware",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Not only must your DE corporation name be unique, it cannot be similar to another corporation or LLC name in Delaware. You cannot use the following factors to say your name is different from the name of another business:",
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
    content: "For example, you can’t claim that Purple People Co., Purple People Corporation, Purple People Incorporated, Purple People Corp. or Purple People are different from one another.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Your Delaware Corporation Name May Have Other Restrictions",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Most states will not allow you to form S Corporations or C Corporations with names that:",
    marginBottom: 24,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Are very similar to the name of a federal or DE agency or organization (e.g., FBI, FDA, Delaware Department of Revenue, Delaware Police, Treasury, etc.)",
        "Suggest affiliation with a federal or DE agency or organization",
        "Use the term “Olympic” or any terms that are trademarks of the Olympic organization",
        "Imply a purpose that it would be illegal for your Delaware corporation to carry out",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Specific Rules for Naming Your Delaware Corporation",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "",
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "The name of your business must include one of the following words: \"association,\" \"company,\" \"corporation,\" \"club,\" \"foundation,\" \"fund,\" \"incorporated,\" \"institute,\" \"society,\" \"union,\" \"syndicate\" or \"limited\"",
        "You cannot use the word “bank” or “trust” in your business name without special permission",
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1
  },
  {
    type: "header",
    content: "Delaware Corporation Fictitious and “Doing Business As” (DBA) Names",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "You may want your Delaware S Corporation or C Corporation to conduct business under a different name from the name it was formed under. In Delaware, this is known as a “fictitious” or “doing business as” name. We can complete this filing on your behalf.",
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
    content: "Rules on Infringing on Service Marks or Trademarks Inside \n" + "or Outside Delaware",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "The naming rules above are not the only areas you need to consider when naming your Delaware S Corporation or C Corporation. You also need to check if your DE business could infringe on the registered service marks or trademarks of another business.",
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our <a href=''/'>Trademark Search and Registration service</a>. You should also bear in mind that your Delaware corporation name cannot be substantially similar to an existing trademark or service mark.",
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
    content: "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your Delaware corporation and form either an S Corporation or a C Corporation today.",
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
    content: "Registered Agents and Your Delaware Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Your Delaware corporation needs to have a DE Registered Agent. They’re chosen by you and can accept legal notices and other correspondence for your Delaware corporation on your behalf from the Delaware Division of Corporations.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "If you choose a person as a Registered Agent, he or she must reside in Delaware",
        "If you choose a business as a Registered Agent, they must be able to conduct business in Delaware",
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
    content: "Incorporate your S Corporation or C Corporation through us to get your first year of Registered Agent services for free.",
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
    content: "Information on the Delaware Division of Corporations and DE Registered Agent Services",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Here’s some important information from the Delaware Division of Corporations on DE Registered Agent services.",
    marginBottom: 24
  }, {
    type: "text",
    content: "Registered Agents are not regulated by the State of Delaware. The legal requirements to be a Registered Agent in Delaware are to maintain a street address and office located in Delaware and be open during normal business hours for the purpose of accepting service of process according to 8 Del. C. § 132. Consumers are encouraged to exercise due diligence in researching the Registered Agent prior to selecting them for representation. It is incumbent upon the consumer to contact the Registered Agent prior to filing.”",
    marginBottom: 48
  },
  {
    type: "header",
    content: "Services Provided by a Delaware Registered Agent to Your Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "What can your corporation expect from your Delaware Registered Agent? Their main function is to accept official documents and correspondence from the DE Division of Corporations that will affect your corporation. This includes:",
    marginBottom: 24,
  },
    {
        type: "list-dot",
        content: {
            list:[
                "Correspondence from the Delaware Division of Corporations, like a notice to file reports and other forms",
                "Service of process documents (for example, if your Delaware corporation has legal proceedings issued against it)",
                "Official Delaware and federal government documents, form filings and requests for information (including taxes, permits and company filings)",
                "Tax forms and requests to complete permits, company filings and reports",
            ]
        },
        color: color.orange3,
        marginBottom: 48,
        curve: true,
        curveColor: color.orange1
    },
  {
    type: "header",
    content: "You May Not Want to Act as Your Own Registered Agent for Your DE Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "If you live in Delaware, you might choose to be the Registered Agent for your corporation. Be aware that there may be some drawbacks to this:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent must have a physical street address in Delaware. Some people establish corporations outside of Delaware and will need to use a Registered Agent service to provide the address.",
        "A person must always be available to sign for legal correspondence during business hours. If you can’t always be around, consider using a third-party Registered Agent service like Incfile.",
        "The Registered Agent’s name and DE address are part of the public record and available through the Delaware Division of Corporations website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
        "If you change your Delaware business address or move out of state, you won’t need to file additional documentation with the DE Division of Corporations for the new address of your Registered Agent if using a service. You will need to set up a new Registered Agent service in the new state.",
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "There are more considerations, but this should help you with your decision to use a <a href='/'>Registered Agent service</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Issues With Not Having a Delaware Registered Agent for Your Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "What are the issues with not having a DE Registered Agent or not providing that information to the Delaware Division of Corporations?",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your Delaware corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Falling out of good standing with the Delaware Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.",
        "Losing your status as a Delaware corporation: A DE Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Delaware corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "A Complete Delaware Corporation Registered Agent Service From Incfile",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Incfile provides a complete Delaware Registered Agent service for any S Corporation or C Corporation that’s incorporated in DE. Even better, if you choose to incorporate your Delaware corporation through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Incfile is authorized to conduct business in Delaware and can legally act as your Registered Agent for your DE corporation.",
    marginBottom: 41,
  },
    {
        type: "text",
        content: "Here’s what you need to know about Incfile’s DE Registered Agent service for corporations:",
        marginBottom: 24
    },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent will always be available to accept documents and letters on your behalf",
        "We automatically notify you whenever we receive correspondence for your business from the Delaware Secretary of State or anyone else",
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
      text: "Order Incfile’s Delaware Registered Agent Service",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 48,
  },
  {
    type: "text",
    content: "Form your C Corporation or S Corporation with us today to get your first year of Registered Agent service for free, including easy access to our comprehensive online dashboard.",
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
    content: "Useful Resources for Delaware Registered Agent \n" + "Services",
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
      text: "The Main Functions of a Delaware Registered Agent",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Changing Your Delaware Registered Agent",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "What a Delaware Registered Agent Does",
      url: "/",
    },
    marginBottom: 24,
  },
];
export const filing = [
  {
    type: "header",
    content: "Delaware Corporation Form and Filing Rules",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "When you’re forming a Delaware S Corporation or C Corporation, you will need to file certain forms and pay certain fees. Requirements can come from various bodies including the federal government, the DE Division of Corporations and elsewhere.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Below is a rundown of what you’ll need to do, together with information on the requirements for your Delaware corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "We provide a paid service to take care of certain filings and forms for your Delaware corporation. Alternatively, you can choose to file these requirements yourself — make sure that you set calendar reminders.",
        marginBottom: 24
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
    content: "File Your Delaware Certificate of Incorporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The Certificate of Incorporation document is the formal paperwork that you file with the Delaware Division of Corporations to create your corporation.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Once the Certificate of Incorporation document is filed with the DE Division of Corporations, your business is legally formed as a Delaware corporation.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "The Certificate of Incorporation typically includes:",
        marginBottom: 41
    },
  {
    type: "list-dot",
    content: {
      list: [
        "The Delaware corporation’s name",
        "The Delaware corporation’s mailing address and street address",
        "The Delaware corporation's Registered Agent and their address",
        "The Delaware corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
        "The name and address of the incorporator",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "When you start your business with us, we gather together all the information we need to create your Certificate of Incorporation. We then file that with the Delaware Division of Corporations on your behalf.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Get the Right Permits and Licenses for Your Delaware S Corp or C Corp",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Depending on the type of Delaware corporation you’re running, you will need to obtain various business licenses and permits. These are not required to form your DE corporation, but you must have them to legally carry out business. It’s vital to understand the permits and licenses required for your business to operate in compliance in your jurisdiction.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "A Local Business Permit or License From Your City",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Various cities in Delaware have slightly different rules and fees for permits and licenses for corporations. Check with your local Delaware city administration to see what their rules are. You will need a separate permit or license for each city your Delaware corporation operates in.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "County and State Licenses and Permits for Your Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of Delaware. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of Delaware website.",
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
    content: "Some corporations will need to get licenses and permits from the federal government and various national agencies. You can find a complete list on the U.S. Small Business Administration website.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Learn What Permits and Licenses Your Delaware Corporation Needs With Incfile",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "The types of permits and licenses you need depend on where you’re located, what your Delaware corporation does and several other factors. Because things can vary so much, we provide a complete research package that tells you the licenses and permits you’ll need.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "Our service provides: ",
        marginBottom: 41
    },
  {
    type: "list-dot",
    content: {
      list: [
          "A comprehensive package of all the licenses, permits and tax registrations required for your business",
        "The application forms to file with the appropriate licensing authorities"
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "Your customized Business License Research Package will be emailed to you within two days of your Delaware Corporation being formed by the Delaware Secretary of State.",
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
    content: "Other Special Requirements for Your Delaware \n" + "S Corp or C Corp",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Because you’re forming a corporation, there are certain other legal, regulatory and compliance areas you need to meet.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Create Bylaws for Your Delaware Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Bylaws are the formal, internal rules that your Delaware corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Defining your Delaware registered office and DE Registered Agent",
        "Stating details of the Annual General Meeting (AGM), including date, place, time and other relevant information",
        "Other details from the AGM, including the order of business, notice, voting record, quorum, proxies, shareholder actions and more",
        "Stating when a special shareholders’ meeting may be held and the circumstances that could lead to it",
        "Details of stock certificates, ownership, issuing and transfer",
        "Details of the Board of Directors including how they are elected and appointed, their number, the powers they have, how they can be removed, regular meetings and agendas, executive committees, remuneration and other areas",
        "Details of the various officers in the corporation including how they are chosen and appointed",
        "Designations of officers in the Delaware corporation including president, vice presidents, secretary, assistant secretaries and treasurer",
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
    content: "Ownership in a Delaware corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
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
        "You must appoint directors to all positions in line with the agreed Delaware corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
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
    content: "Officers are the individuals who manage the Delaware corporation on a day-to-day basis. At minimum a DE corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
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
        "Your Delaware corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
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
        content: "Your Delaware corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
        marginBottom: 24
    },
    {
        type: "header",
        content: "Hire Employees",
        size: 5,
        marginBottom: 24
    },
  {
    type: "text",
    content: "You may need to hire employees for your Delaware corporation. You will need:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: ["An Employer Identification Number (EIN)", "Worker’s Compensation Insurance", "General Liability Insurance"],
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
    content: "Your Delaware Corporation Must Hold an Annual General Meeting",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You must hold a yearly meeting that all directors, officers and shareholders of the DE corporation are invited to. The purpose of an AGM is generally to:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: ["Discuss important information", "Make strategic decisions", "Understand opportunities, risks and issues", "Vote on important resolutions and other matters"],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Delaware Corporation Tax Registration",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You will need to register for certain taxes when you form your corporation. These include:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: ["The corporation’s name", "The corporation’s mailing address and street address", "The corporation's Registered Agent and their address", "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)", "The name and address of the incorporator"],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "You can find details on the <a href='/'> Delaware Department of Revenue</a> and IRS websites.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Your Delaware Corporation Will Need to File an Annual Franchise Tax  Report",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "In Delaware, S Corporations and C Corporations must file an annual Franchise Tax report with the Division of Corporations. Failure to file the report could result in late fees or your DE corporation being dissolved.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "<a href='/'>Learn about your ongoing Delaware corporation filing requirements</a> and business filing deadlines with our helpful Delaware ongoing filing lookup tool.",
        marginBottom: 24
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
    content: "Certificate of Good Standing for Your Delaware \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You may need a Certificate of Good Standing for your Delaware corporation to carry out some business-related services like opening a bank account.",
    marginBottom: 24,
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
    content: "Ready to Start Your Delaware Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Incfile provides a cost-effective service to help you create your Delaware corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Our basic package also provides a free Registered Agent service for the first year. If you're looking for help starting an S Corporation or C Corporation, our comprehensive services provide outstanding value.",
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
    content: "Delaware Corporation Taxes and Fees",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Here’s a breakdown of the likely taxes and fees you’ll incur when you start and run a corporation in Delaware.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Delaware Corporation Fees",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Fees for forming a corporation in Delaware",
          answer: "Learn about <a href='/'>standard filing costs here</a> for DE corporations.",
        },
        {
          question: "Delaware Statement of Information Report Fee",
          answer: "A yearly fee when you file your Franchise Tax report.",
        },
        {
          question: "Delaware Permits and Licenses",
          answer: "These are the fees for creating or renewing your licenses and permits on a regular basis. These depend on the type of Delaware corporation you’re operating and where you’re located.",
        },
      ],
    },
    marginBottom: 47
  },
  {
    type: "header",
    content: "Taxes Payable by Your Delaware Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The way that Delaware S Corporations and C Corporations pay taxes is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Both S Corporations and C Corporations in Delaware Need to Pay \n" + "These Taxes",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "IRS Payroll Tax",
          answer: "Your Delaware corporation will need to pay employer payroll tax to the IRS on salaries paid to employees.",
        },
        {
          question: "Income Tax for the State of Delaware",
          answer: "Anyone who takes earnings out of your Delaware corporation will need to pay Delaware state income tax. Find out more on the <a href='/'>Delaware Division of Revenue website</a>.",
        },
        {
          question: "Sales and Use Tax Payable to the State of Delaware",
          answer: "If your DE corporation is selling products or services in Delaware, you may need to pay a state sales tax. Find out more on the <a href='/'>Delaware Department of Revenue website</a>.",
        },
        {
          question: "Delaware State Sales and Use Tax",
          answer: "The state of Delaware does not charge sales and use tax, but if you sell products or services in a state other than Delaware, you may be liable. Check with your accountant or tax attorney.",
        },
        {
          question: "Other Taxes in Delaware",
          answer: "You may need to pay other taxes and fees, depending on the type of Delaware corporation you run. Find out more on the <a href='/'>Delaware Division of Revenue website</a>. One type of fee that you will need to pay is when you file your annual Franchise Tax report, with fees due as follows:<br />" +
              "“All corporations incorporated in the State of Delaware are required to file an Annual Report and to pay a franchise tax. Exempt domestic corporations do not pay a tax but must file an Annual Report. The Annual Report filing fee for all other domestic corporations is $50.00 plus taxes due upon filing of the Annual Report.<br/><br/>" +
              "Taxes and Annual Reports are to be received no later than March 1st of each year. The minimum tax is $175.00 for corporations using the Authorized Shares method and a minimum tax of $400.00 for corporations using the Assumed Par Value Capital Method.<br /><br/>" +
              "All corporations using either method will have a maximum tax of $200,000.00 unless it has been identified as a Large Corporate Filer, then their tax will be $250,000.00. Taxpayers owing $5,000.00 or more pay estimated taxes in quarterly installments with 40% due June 1, 20% due by September 1, 20% due by December 1, and the remainder due March 1. The penalty for not filing a completed Annual Report on or before March 1st is $200.00 Interest at 1.5% per month is applied to any unpaid tax balance. <br/><br/>" +
              "Although Limited Partnerships, Limited Liability Companies and General Partnerships formed in the State of Delaware do not file an Annual Report, they are required to pay an annual tax of $300.00. Taxes for these entities are due on or before June 1st of each year. Penalty for non-payment or late payment is $200.00. Interest accrues on the tax and penalty at the rate of 1.5% per month.”",
        },
      ],
    },
    marginBottom: 52
  },
  {
    type: "header",
    content: "Your Delaware Corporation Will Need to Pay Estimated Taxes",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Most Delaware corporations will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: ["Federal income tax", "Federal self-employment tax", "Delaware state tax", "Franchise tax, if high enough"],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "Most Delaware S Corporations and C Corporations will pay estimated taxes four times a year. Speak to your accountant for more information.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Employee Insurance and Taxes for Your Delaware Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You may also need to pay tax and insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Get more requirements from the <a href='/'>Delaware Department of Labor website</a>.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Taxes Payable by All Individuals Working for Delaware Corporations",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Delaware Corporation Earnings, Dividends and Distributions Are Subject to Federal Income Tax",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "You will need to pay regular federal income tax when you file your tax return every year.",
        marginBottom: 48
    },
  {
    type: "header",
    content: "Delaware S Corporations — Additional Tax Liabilities",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Self-Employment Tax",
        text: "In a Delaware S Corporation, your earnings “flow through” from the business to your personal tax return. This means you must pay self-employment tax on those earnings at a rate of 15.3 percent. Note that you can deduct standard tax deductions and business expenses.",
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
    content: "You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "On profits of $60,000, you would pay self-employment tax of $9,180",
        "On profits of $90,000, you would pay self-employment tax of $13,770",
        "On profits of $140,000, you would pay self-employment tax of $21,420",
        "On profits of $160,000, you would pay self-employment tax of $24,480",
      ],
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "text",
    content: "In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax.",
    marginBottom: 24,
  },
  {
    type: "button",
    content: {
      text: "File Your Delaware S-Corp Tax Election with Incfile",
      url: "/",
    },
    theme: "primary56",
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Taxes Payable by Delaware C Corporations",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Corporation Tax",
        text:
            "Unlike the the Limited Liability Company and the S Corporation, a Delaware C Corporation is required to file a corporate tax return and pay corporation taxes on any profits. When those taxed profits are paid to shareholders as dividends, they will also be subject to taxation on that individual’s tax return. This is known as “double taxation.”",
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
            "A Delaware C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
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
    content: "Ready to Start Your Delaware Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Incfile provides a cost-effective service to help you create your Delaware corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Our basic package also provides a free Registered Agent service for the first year. If you're looking for help starting an S Corporation or C Corporation, our comprehensive services provide outstanding value.",
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
        "Each state requires different forms such as your business annual reports and state franchise tax reports to be filed at different times. It’s important to understand when each form needs to be filed and when you need to refile the form. Complying with the form filing requirements keeps your business in good standing with the state. Failure to file these reports can lead to the company being revoked or administrative business dissolution. Incfile includes lifetime company alerts with courtesy email reminders to inform clients of an upcoming filing requirement with all of our state filing packages.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Delaware’s Ongoing Filing Requirements:",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Delaware Annual Report",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "table",
    content: {
      headers: false,
      rows: [
        [
          {
            label: "Frequency:",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label: "Annually",
            type: "label",
            textCenter: true,
          },
        ],
        [
          {
            label: "Due Date:",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label: "March 1",
            type: "label",
            className: "left"
          },
        ],
        [
          {
            label: "Filing Fee:",
            type: "label",
            style: { "font-weight": "bold" },
          },
          {
            label: "$225",
            type: "label-boxed",
            className: "highlight",
            style: {
              "align-items": "flex-start"
            }
          },
        ],
      ],
      headerColumnsDef: "200px 1fr",
      rowColumnsDef: "200px 1fr",
    },
    responsive: true,
    settings: {},
    tableScheme: "blue3",
    style: {
      "margin-bottom": "41px"
    },
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
      header: "Benefits of <a href='/'>Incfile's Trademark service</a> include:",
      list: [
          "Legal counsel from an experienced trademark attorney",
        "A thorough search of existing trademarks",
        "A registered trademark with the USPTO",
        "Handling all correspondence with the USPTO until the name is approved."
      ],
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Finances & Accounting for Your Delaware Corporation",
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
    content: "Choose a Bank for Your Delaware Corporation",
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
    content: "Separate Business & Personal Expenses",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your Delaware Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='/'>Expensify</a> to track and tag business expenses from your mobile phone.",
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
    content: "Here are some favorite accounting software options for Corporation business owners:",
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
          url: "/"
        },
        text: "This is a top option for a lot of business owners and starts out at only $10 a month. You can automatically important banking transactions, track your customers and vendors and related bills and expenses, and integrate with a lot of other online finance tools. If you hire an accountant or tax support, they will all likely support QuickBooks. You can even use an online version in addition to a desktop version of their software. The drawback is that the learning curve for QuickBooks can sometimes be a bit steep.",
      },
      {
        link: {
          text: "Xero",
          url: "/"
        },
        text: "Xero is online accounting software that is a great option for those who find QuickBooks to be too complicated and difficult to understand. Their plans start out at $20 per month.",
      },
      {
        link: {
          text: "FreshBooks",
          url: "/"
        },
        text: "Freshbooks is online accounting software that allows you to also track your time, expenses, collaborate on projects and view accounting reports. One drawback is that it doesn’t currently have a way to track invoices that your business needs to pay. But, accounts start out at $15 per month.",
      },
      {
        link: {
          text: "Bench",
          url: "/"
        },
        text: "Bench not only allows you to track your accounts receivable, but they include the help of a real-life bookkeeper to run your accounting every month. For a Bench account starting out at $125 a month, this is quite the deal instead of hiring your own bookkeeper.",
        marginBottom: "52px"
      },
    ]
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
    content: "Business Operations & Marketing for Your Delaware \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Build a Business Website",
        text: "Having a great online presence for your business is the number one way people will find you. You need to start with buying a domain name using a service such as <a href='/'>NameCheap</a>. Then you need to choose a service to host your website such as <a href='/'>SnapWeb</a>. Finally, design your website using a tool such as Squarespace or WordPress. Make sure your website includes important business information such as how to contact you and business hours.",
        svg: WebSVG,
        backgroundColor: color.purple2,
        shadowColor: shadow.purple2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent"
      },
      {
        header: "Choose a Virtual Phone System",
        text: "Your business needs a phone number so that your customers, employees and vendors can reach you. A great option is to look into a tool such as <a href='/'>Grasshopper</a>, which allows you to get a business phone that actually forwards to your cell phone, so you never miss an important call.",
        svg: PhoneSVG,
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent"
      },
      {
        header: "Design a Business Logo",
        text: "A logo will reflect your business branding everywhere your customers interact with you — on your website, on your invoices, in your email signature, on business cards and more. Instead of trying to design a logo yourself, try a logo making service such as <a href='/'>99 Designs</a> or buy some really high-quality pre-made logos you can customize on <a href='/'>CreativeMarket</a>.",
        svg: LogoSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent"
      },
      {
        header: "Get Business Cards Created",
        text: "Once you have a logo, create nice looking business cards that you can hand out when you’re out networking or even running errands. You never know when a conversation about your business will come up, and you want to be able to give someone a place to research your business and contact you. A great tool to create inexpensive business cards is <a href='/'>Vistaprint</a>.",
        svg: CardSVG,
        backgroundColor: color.blue3,
        shadowColor: shadow.blue3,
        marginTop: "91px",
        boxShadow: false,
        textBackgroundColor: "transparent"
      },
    ],
    marginBottom: 50,
  },
  {
    type: "header",
    content: "Choose the Best Business Tools to Run Your Delaware \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "In addition to accounting software, there is a number of online business software options that will lift a number of menial tasks and burdens off your full business-owner plate. Below are important business functions for your Corporation and what we think are the best business tools for your Delaware Corporation.",
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
    tab: true
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
