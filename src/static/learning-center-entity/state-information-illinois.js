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
  header: `Why Form a Corporation in Illinois?`,
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
  header: `Fees and requirements in Illinois.`,
  rows: [
    {
      box: {
        fields: [
          {
            header: `$179`,
            text: `State fee`,
          },
          {
            header: `2 Weeks`,
            text: `State filing time`,
          },
          {
            header: `1 Business day`,
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
        header: `Illinois Franchise Tax`,
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
  header: `Learn more about starting a business in Illinois`,
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
      price: `179`,
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
          price: `179`,
        },
      ],
      include: `The sliver services includes:`,
      list: [`Prepare & Filing the Articles of Organization`, `Unlimited Name Searches`, `FREE Registered Agent for a year!`],
    },
    {
      variant: `Most popular`,
      header: `Gold`,
      text: `Comprehensive features to get your business started`,
      price: `328`,
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
          price: `179`,
        },
      ],
      include: `The sliver package, and:`,
      list: [`EIN Business Tax Number`, `IRS Form 2553`, `Operating Agreement`, `Banking Resolution`, `Express Shipping`, `Lifetime Company Alerts`, `Online Access Dashboard`, `Unlimited Phone & Email Support`, `Business Banking Account`, `Business Tax Consultation`],
    },
    {
      variant: `Best value`,
      header: `Platinum`,
      text: `Full service features at the best value`,
      price: `478`,
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
          price: `179`,
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
      name: `The Quick 6 Steps`,
      path: `/illinois-corporation/`,
      icon: NewYorkCorpSVG,
    },
    {
      name: `Entity Search & Name`,
      path: `/illinois-corporation/how-to-name-your-corporation`,
      icon: PenSVG,
    },
    {
      name: `Registered agents`,
      path: `/illinois-corporation/registered-agents-illinois`,
      icon: RegisteredAgentSVG,
    },
    {
      name: `Corporation requirements`,
      path: `/illinois-corporation/form-filling-permit-requirements`,
      icon: PrinterSVG,
    },
    {
      name: `Taxes & Fees`,
      path: `/illinois-corporation/taxes-and-fees-for-your-corporation`,
      icon: PriceTagSVG,
    },
    {
      name: `What To Do After?`,
      path: `/illinois-corporation/know-your-ongoing-filing-requirements`,
      icon: CoffeeSVG,
    },
  ],
};

export const corporation = [
  {
      type: "header",
      content: "Choosing the Right Type of Illinois Corporation",
      size: 4,
      marginBottom: 24
  },
    {
        type: "text",
        content: "As the sixth most populous state in the U.S., home to Chicago and the natural wonders of the Great Lakes, Illinois is a great place to live and to start a business. The Port of Chicago connects to the Atlantic through a network of lakes, and this state is a central hub for domestic and international travel. Known as a bellwether of culture and politics, Illinois is a place where great movements and businesses are born. The industries that dominate in Illinois include agriculture, manufacturing, services and energy. ",
        marginBottom: 48
    },
  {
    type: "header",
    content: "What Type of Illinois Business Entity Should You Choose?",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "When it comes to starting a business in Illinois, you have a few options for the type of business you want to create. This is known as your “legal business entity,” and it defines how your business will be treated by the state, the law, the IRS and other official bodies. ",
    marginBottom: 24
  }, {
    type: "text",
    content: "Most new entrepreneurs have a choice of several business types — sole proprietorship, partnership, Limited Liability Company (LLC), S Corporation or C Corporation. ",
    marginBottom: 24
  }, {
    type: "text",
    content: "Here’s a quick overview of each. ",
    marginBottom: 24
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "California Sole Proprietorships and Partnerships",
        text: "These are the simplest type of business and will be the “default” type of CA business you have if you do not choose to form a separate business entity. These types of businesses do not provide you with any special protections or benefits and can leave your personal assets vulnerable. We do not recommend them.",
        svg: ProprietorshipSVG,
        backgroundColor: color.orange2,
        shadowColor: shadow.orange2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "California Limited Liability Companies (LLCs)",
        text: "LLCs are a great option for smaller CA businesses. LLCs are quick and easy to create, inexpensive to administer, light on regulations and have simple taxation and rules.",
        svg: LockpadSVG,
        link: {
          text: "Learn how to create an LLC in California",
          url: "/"
        },
        backgroundColor: color.babyblue2,
        shadowColor: shadow.babyblue2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "California S Corporations",
        text: "You might choose to form a California S Corporation because it’s a good compromise between the simplicity of the LLC and the complexity of the C Corporation. Note that CA S Corporations are subject to more rules and regulations than a CA LLC, but they can mean that you pay less tax.",
        svg: ProcentSVG,
        link: {
          text: "Learn how to create an LLC in California",
          url: "/"
        },
        backgroundColor: color.green2,
        shadowColor: shadow.green2,
        boxShadow: false,
        textBackgroundColor: "transparent",
        marginTop: "91px"
      },
      {
        header: "California C Corporations",
        text: "If you plan to start a large business or want to trade your shares on the public stock market, a CA C Corporation is your only choice. Be aware that California C Corporations are subject to many rules and regulations, and they have a substantial amount of administrative overhead. Additionally, the tax rules for a California C Corporation are not as advantageous as for a CA S Corporation or LLC.",
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
    type: "header",
    content: "Advantages of a Corporation Over an LLC",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "There are several reasons an entrepreneur might choose to form a corporation instead of an LLC in Illinois.",
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "If you want to pay lower self-employment taxes than an LLC, you will need an S Corporation.",
        "If you want to easily transfer ownership through buying and selling stock, you will need a C Corporation or an S Corporation.",
        "If you want up to 100 shareholders who are U.S. citizens or residents and want to issue one type of stock, you will need an S Corporation.",
        "If you want more than 100 shareholders, want to issue more than one type of stock or have international shareholders, you will need a C Corporation.",
        "If you want to allow the public to buy and sell shares in your company after an Initial Public Offering (IPO), you will need a C Corporation.",
      ]
    },
    color: color.blue3,
    marginBottom: 48,
    curve: true,
    curveColor: color.blue1
  }, {
    type: "text",
    content: "Here’s a side-by-side comparison between the various business types. This table focuses on the areas apart from company stock and shareholders. ",
    marginBottom: 24
  },
    {
        type: "table",
        content: {
            headers: [
              {
                header: true,
                label: "Area"
              },
              {
                header: true,
                label: "Sole Proprietorship/ Partnership "
              },
              {
                header: true,
                label: "LLC"
              },
              {
                header: true,
                label: "S Corp"
              },
              {
                header: true,
                label: "C Corp"
              },
            ],
            rows: [
              [
                {
                  type: "label",
                  label: "Fee for creating business entity?"
                },
                {
                  type: "minus"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "checkmark"
                },
              ],
              [
                {
                  type: "label",
                  label: "Ongoing fee for maintaining business entity? "
                },
                {
                  type: "minus"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "checkmark"
                },
              ],
              [
                {
                  type: "label",
                  label: "Limited liability? "
                },
                {
                  type: "minus"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "checkmark"
                },
                {
                  type: "label",
                  label: "Yes - strong"
                },
              ],
              [
                {
                  type: "label",
                  label: "How ownership of business is determined "
                },
                {
                  type: "label",
                  label: "You are the business"
                },
                {
                  type: "label",
                  label: "By defined members"
                },
                {
                  type: "label",
                  label: "Private investors who own stock "
                },
                {
                  type: "label",
                  label: "Public investors who own stock "
                },
              ],
              [
                {
                  type: "label",
                  label: "Management structure "
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label",
                  label: "As per operating agreement"
                },
                {
                  type: "label",
                  label: "Elected by shareholders"
                },
                {
                  type: "label",
                  label: "Elected by shareholders"
                },
              ],
              [
                {
                  type: "label",
                  label: "Must be domestic business entity?"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
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
                  label: "Have shareholders, directors and officers?"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label",
                  label: "No - members only"
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
                  label: "Raising capital"
                },
                {
                  type: "label",
                  label: "Loans and financing",
                },
                {
                  type: "label",
                  label: "Loans and financing"
                },
                {
                  type: "label",
                  label: "Loans, financing and selling private stock"
                },
                {
                  type: "label",
                  label: "Loans, financing and selling public stock"
                },
              ],
              [
                {
                  type: "label",
                  label: "File annual report?"
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
                  label: "Compliance and regulations"
                },
                {
                  type: "label",
                  label: "Very light"
                },
                {
                  type: "label",
                  label: "Light"
                },
                {
                  type: "label",
                  label: "Moderate"
                },
                {
                  type: "label",
                  label: "Heavy"
                },
              ],
              [
                {
                  type: "label",
                  label: "Owner’s taxation type"
                },
                {
                  type: "label",
                  label: "Individual tax"
                },
                {
                  type: "label",
                  label: "Individual tax (pass through)"
                },
                {
                  type: "label",
                  label: "Distribution and individual tax (pass through)"
                },
                {
                  type: "label",
                  label: "Corporation tax and individual tax"
                },
              ],
            ],
            headerColumnsDef: "150px 150px 1fr 1fr 1fr",
            rowColumnsDef: "150px 150px 1fr 1fr 1fr",
        },
        responsive: true,
        settings: {
          padding: 12
        },
        style: {
          "margin-bottom": "41px"
        },
    },
    {
        type: "text",
        content: "This table shows the differences between Illinois business entities when it comes to issuing, buying and selling stock. ",
        marginBottom: 24
    },
    {
        type: "table",
        content: {
            headers: [
              {
                header: true,
                label: "Area"
              },
              {
                header: true,
                label: "Sole Proprietorship/ Partnership "
              },
              {
                header: true,
                label: "LLC"
              },
              {
                header: true,
                label: "S Corp"
              },
              {
                header: true,
                label: "C Corp"
              },
            ],
            rows: [
                [
                  {
                    type: "label",
                    label: "Maximum shareholders"
                  },
                  {
                    type: "label-boxed",
                    label: "N/A",
                    className: "highlight"
                  },
                  {
                    type: "label-boxed",
                    label: "N/A",
                    className: "highlight"
                  },
                  {
                    type: "label-boxed",
                    label: "100",
                    className: "highlight"
                  },
                  {
                    type: "label-boxed",
                    label: "Unlimited",
                    className: "highlight"
                  },
                ],
              [
                {
                  type: "label",
                  label: "Ownership/stock freely transferrable? "
                },
                {
                  type: "label-boxed",
                  label: "No",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "No",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "Yes",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "Yes",
                  className: "highlight"
                }
              ],
              [
                {
                  type: "label",
                  label: "Shareholder nationality"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "U.S citizen or resident",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "Any",
                  className: "highlight"
                }
              ],
              [
                {
                  type: "label",
                  label: "Public buying and selling of stock? "
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "No",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "Yes, after IPO",
                  className: "highlight"
                }
              ],
              [
                {
                  type: "label",
                  label: "No. of classes of stock"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "N/A",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "One",
                  className: "highlight"
                },
                {
                  type: "label-boxed",
                  label: "Many",
                  className: "highlight"
                }
              ],
            ],
            headerColumnsDef: "175px 150px 1fr 1fr 1fr",
            rowColumnsDef: "175px 150px 1fr 1fr 1fr",
        },
        responsive: true,
        settings: {
          padding: 12
        },
        style: {
          "margin-bottom": "41px"
        },
    },
  {
    type: "header",
    content: "A Quick Note on the Differences Between Illinois S Corporations and C Corporations ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "When a corporation is initially created, it is automatically assumed to be a C Corporation and only becomes an S Corporation (and will be taxed as such) if you file the IRS Small Business Tax Election form 2553 . ",
    marginBottom: 24
  }, {
    type: "text",
    content: "In most cases when we discuss “corporations” in this guide, we’re talking about both C Corporations and S Corporations. If anything is relevant to just one or the other, we’ll declare that. ",
    marginBottom: 48
  },
  {
    type: "header",
    content: "Advantages of Forming a Corporation in Illinois",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Illinois corporations have several benefits for business owners. ",
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "Corporations provide the strongest form of liability protection possible. They insulate your personal assets and finances from those of your business.",
        "This means that any liabilities created by your corporation (debts, obligations, damages, bankruptcy or other liabilities) should not impact your personal money, property or assets — they are considered to be completely separate from a legal perspective.",
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1
  },
  {
    type: "header",
    content: "Advantages of Forming an S Corporation in Illinois",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "In addition to the general benefits above, Illinois S Corporations provide several other advantages. ",
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "S Corporations can have up to 100 shareholders.",
        "Running an S Corporation in Illinois is simpler than running a C Corporation.",
        "It is easy to transfer ownership in an S Corporation by selling your stock.",
        "In some cases, part of the income from an S Corporation can be paid as a “distribution” rather than “salary,” so it would not be subject to self-employment tax. Find out how this can save you money using our S Corporation tax calculator .",
        "LLCs can choose to be taxed as S Corporations to take advantage of this.",
        "You can find more advantages of forming an S Corporation in Illinois.",
      ]
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Advantages of Forming a C Corporation in Illinois",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "In addition to the general benefits above, Illinois C Corporations provide several other advantages. ",
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "Ownership in a C Corporation is very fluid and determined by who owns stock in the business.",
        "C Corporations can list their shares on a public stock exchange. This stock can be bought and sold by anyone.",
        "C Corporations can sell stock to investors inside and outside the U.S.",
        "C Corporations can issue more than one type of stock.",
        "C Corporations can raise more funds by issuing more stock.",
      ]
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Points About Forming a Corporation in Illinois",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Here are some areas to be aware of when you’re creating a corporation in Illinois. ",
    marginBottom: 24
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
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: true,
    curveColor: color.orange1
  }, {
    type: "text",
    content: "Are you ready to start your Illinois corporation? If so, we can help. We provide comprehensive corporation formation services for both S Corporations and C Corporations in Illinois. ",
    marginBottom: 48
  },
  {
    type: "header",
    content: "Start Your Illinois Corporation in Six Steps ",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "Now that you’ve decided a corporation is right for you, here’s how to form one. At Incfile, we make the corporation formation process easy. With prices starting at just $0 plus the Illinois filing fee, you get excellent value too. ",
    marginBottom: 24
  }, {
    type: "arrow-link",
    content: {
      text: "Start your Illinois S Corporation now ",
      url: "/"
    },
    marginBottom: 24,
  }, {
    type: "arrow-link",
    content: {
      text: "Start your Illinois C Corporation now ",
      url: "/"
    },
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Name Your Illinois Corporation",
          list: [
            "Choose a unique, distinct, original name for your Illinois corporation",
            "This name cannot be used by another business in Illinois",
            "This name cannot be confused with the name of another business in Illinois",
            "See if the name is available by searching for it on the Illinois Secretary of State website",
            "The name of your business must end with “Corporation,” “Incorporated,” “Limited” or an abbreviation of one of these",
            "For example: “Illinois Natural Resources Survey Reports Corporation” or “Chicago Sports Appreciation, Inc”",
            "If you’re not forming the business right away, you can reserve the name",
          ]
        },
        {
          question: "Establish Street and Mailing Addresses for Your Illinois Corporation ",
          answer:
              "An Illinois corporation must have a designated address. That could be your home address (if you’re running the company from your residence), where your office is located or any physical address of your preference — even outside of Illinois. It cannot be a P.O. Box. ",
        },
        {
          question: "Appoint a Registered Agent for Your Illinois Corporation ",
          answer: "Every Illinois corporation must have a “ Registered Agent ” who receives official legal and tax correspondence and has responsibility for filing reports with the Illinois Secretary of State. Your Registered Agent must have a physical street address in Illinois. <br/><br>" +
              "A Registered Agent could be you, a director or an officer of the corporation. Here at Incfile we always recommend using a proper Registered Agent service since they provide several benefits: ",
          list: [
            "Some people establish companies outside of the state they live in and will use a Registered Agentservice to provide an address for receiving legal documentation in the state.",
            "The Registered Agent address is listed on public records on the Secretary of State's website. If you do not want your own name and address to be registered, you should use a Registered Agent service.",
            "The Registered Agent must be present or available during normal business hours (9 a.m. to 5 p.m. Monday to Friday) to receive any legal correspondence delivered, since the type of documents delivered to the registered agent require a signature on delivery.",
            "Some people travel or are not always at their business location to receive these documents.",
          ],
          text: "At Incfile, all of our packages include a Registered Agent service that is free for the first year and $99 per year thereafter. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf. "
        },
        {
          question: "Draft Your Articles of Incorporation",
          answer: "The legal document required to create your new corporation is called the Articles of Incorporation . You will need to gather various details for your Illinois filing including:",
          list: [
            "The corporation’s name",
            "The corporation’s purpose",
            "The corporation’s mailing address and street address",
            "The corporation's Registered Agent and their address",
            "The corporation’s capital structure (number of shares to be issued, who owns them, pricing, etc.)",
            "How long the corporation will exist (this can be perpetual)",
            "The name and address of the incorporator",
          ]
        },
        {
          question: "File Your Articles of Incorporation With the Illinois Secretary of State",
          answer: "Once your articles are drafted, you can file them with the Illinois Secretary of State. Filing your Articles of Incorporation creates your Illinois corporation. You can do this online, mail in a form or have Incfile do it on your behalf. ",
        },
        {
          question: "Complete the Legal and Compliance Requirements for Your Illinois Corporation ",
          answer: "Once your corporation has been created, you will need to get certain legal requirements in place. These include:",
          list: [
            "File IRS Small Business Tax Election form 2553 if you want to be treated as an S Corporation",
            "Any S Corporations that are formed through Incfile will also include a prepared Form 2553 that will be delivered with the state formation documents",
            "Create and issue stock certificates to your shareholders",
            "Apply for business licenses and permits . You may require licenses from your state, county, township and various industry or federal bodies",
            "Get an Employer Identification Number (EIN)",
            "File for taxes with Illinois Department of Revenue",
            "Get all formalities in place for employees, including unemployment, disability, payroll, insurance and taxes",
            "Appoint a board of directors for the corporation",
            "Appoint officers to the corporation",
            "Get a corporate records book to capture all your important corporate information",
          ]
        },
      ],
    },
    marginBottom: 48
  },
  {
    type: "header",
    content: "Starting Your Illinois Corporation — Useful Resources ",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Illinois Secretary of State website ",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Business information from the Illinois Secretary of State ",
      url: "/",
    },
    marginBottom: 24,
  },
  {
    type: "arrow-link",
    content: {
      text: "Checking name availability for your Illinois corporation ",
      url: "/",
    },
    marginBottom: 52,
  },
  {
    type: "header",
    content: "Form an Illinois Corporation Without Breaking the Bank",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Incfile provides a cost-effective service to help you create your corporation. We guide you through the process and handle most of the administrative steps on your behalf, such as filing your Articles of Incorporation. Our packages also provide a free Registered Agent service for the first year. If you're looking for assistance forming a corporation, we can help you start a CA S Corporation or C Corporation.",
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
    content: "Naming Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "You need the right name for your Illinois corporation. Choosing the right name is vital because it tells your suppliers, customers and employees what your business does. Illinois has several rules and regulations about what you can call your new business. Let’s explore what they are.",
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
    content: "General Illinois Secretary of State Rules on Naming Your Corporation",
    size: 4,
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "The name of your corporation needs to be unique and not used by another corporation or business operating in Illinois",
        "The name cannot be confused with any other business operating in Illinois",
        "You can search for other businesses in Illinois here",
        "The name of your business must end with “Corporation,” “Incorporated” or “Limited”",
        "These suffixes can be abbreviated",
        "If you’re not forming the business right away, you can reserve the name.",
      ]
    },
    color: color.blue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Don't Confuse Your Illinois Corporation Name With Another Business Name",
    size: 4,
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "The following terms can’t be used to say your business name is different from another business name:",
        "Suffixes like Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., corporation",
        "Definite articles like “A,” “And,” “An,” “&,” “The,” etc.",
        "The singular, plural or possessive forms of a word",
        "Punctuation and symbols",
        "Abbreviations of words",
        "Different typefaces, fonts, superscript, subscript, etc.",
        "It should not be possible to confuse the name of your business with the name of another Illinois business",
        "For example, you can’t claim that Purple People Co., Purple People Corporation, Purple People Incorporated, Purple People Corp. or Purple People are different from one another.",
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Rules on Words You Can’t Use in Your Business Name",
    size: 4,
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "Language stating/implying that the corporation will conduct the business of:",
        "Insurance, assurance, indemnity or the acceptance of savings deposits",
        "Banking, unless otherwise allowed by the Commissioner of Banks and Real Estate",
        "A corporate fiduciary, unless otherwise allowed by the Corporate Fiduciary Act",
        "The Illinois corporation name can’t suggest affiliation with any federal or state government entity or agency.",
        "You can also be an Illinois corporation with a different “doing business as” name. In Illinois these are known as “assumed names” and need to be registered with the Secretary of State. Learn about DBA names in your state.",
      ]
    },
    color: color.orange3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Illinois Information on Naming a Corporation",
    size: 4,
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      list: [
        "You can reserve a name. Please note that you do not need to reserve a name if you are forming a corporation right away.",
        "By registering a corporation, the name will automatically be held for your business. You would normally only reserve a name if you are not planning on forming the new company anytime soon.",
        "A name can be used to form any type of business entity, not just a corporation.",
        "Just filing a name registration doesn’t guarantee you will be granted the name. You should wait until your corporation is legally formed before using the name for anything else.",
        "You might also want to use a “Doing Business As (DBA)” or “Assumed Name” if you are trading under a different name than your official company name.",
      ]
    },
    color: color.green3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Rules on Infringing on Service Marks or Trademarks Inside or Outside Illinois",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "In addition to the rules above, it’s also vital to see if your Illinois corporation name might infringe on the trademark or service mark of another business. For example, it might not be a good idea to call yourself “General Electric Research Services,” since General Electric is a trademark.",
    marginBottom: 24
  }, {
    type: "text",
    content: "The easiest way to see if your proposed business name infringes is to carry out a trademark search. You can do that via the United States Patent and Trademark Office, or Incfile can help you protect your business with our new Trademark Search and Registration service. You should also bear in mind that your Illinois business entity name cannot be substantially similar to an existing trademark or service mark.",
    marginBottom: 48
  },
  {
    type: "header",
    content: "What Should You Call Your Illinois corporation?",
    size: 4,
    marginBottom: 24
  }, {
    type: "list-dot",
    content: {
      text: "Finding the perfect name can be tough. You want a business name that:",
      list: [
        "Describes what your Illinois business does",
        "Appeals to your planned audience",
        "Makes your business easy to find",
        "Is relatively unique",
        "Doesn’t limit you to a particular location or type of product or service",
      ]
    },
    color: color.green3,
    marginBottom: 41,
    curve: false,
  }, {
    type: "text",
    content: "Fortunately, we have some good advice on seeking out the perfect business name for your Illinois corporation. Check out our guidance on naming your business and get inspired.",
    marginBottom: 48
  },
  {
    type: "header",
    content: "You’ve Found the Perfect Name, What Next?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Once you’ve found the right name for your business, it’s time to make it a reality. Check out our packages for starting your Illinois corporation and form either an S Corporation or a C Corporation today.",
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
    content: "Registered Agents and Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Your Illinois corporation needs to have a Registered Agent. They’re chosen by you and can accept legal notices and other correspondence for your Illinois corporation on your behalf. There are some rules on choosing Registered Agents:",
    marginBottom: 41,
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
    content: "Illinois Registered Agents: What Type of Legal Notices Might They Receive?",
    size: 4,
    marginBottom: 24
  }, {
    type: "text",
    content: "An Illinois Registered Agent may receive, on behalf of your corporation:",
    marginBottom: 24
  }, {
      type: "list-dot",
      content: {
          list:[
              "Correspondence from the Illinois Secretary of State",
              "Service of process notices (e.g., if your corporation is sued or required to appear in court)",
              "Official Illinois state and federal government correspondence and notifications",
              "Tax forms and requests to complete permits, company filings and reports",
          ]
      },
      color: color.blue3,
      marginBottom: 32,
      curve: true,
      curveColor: color.blue1
  },
    {
        type: "text",
        content: "Note that the Illinois Secretary of State does need the address of your Registered Agent and it needs to be a street address, not a P.O. Box.",
        marginBottom: 48
    },
  {
    type: "header",
    content: "Acting as Your Own Registered Agent for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "If you live in Illinois, you might choose to be the Registered Agent for your corporation. Be aware that there may be some drawbacks to this:",
    marginBottom: 24,
  },
    {
        type: "list-dot",
        content: {
            list:[
              "The Registered Agent must have a physical street address in the state where you are forming the company. Some people establish companies outside of the state they live in and will need to use a Registered Agent service to provide the address.",
              "You always need to have someone on hand to receive important documents for your business during business hours (typically 9 a.m. to 5 p.m. Monday to Friday). A person must always be available to sign for legal correspondence. If you can’t always be around, consider using a third-party Registered Agent service like Incfile.",
              "The Registered Agent’s name and address are part of the public record and available through the Illinois Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.",
              "If you change your Illinois business address or move out of state, you don’t need to file additional documentation with the Secretary of State for the new address of your Registered Agent. You will need to set up a new Registered Agent service in the new state.",
            ]
        },
        color: color.orange3,
        marginBottom: 41,
        curve: false,
    },
    {
        type: "text",
        content: "There are more considerations, but this should help you with your decision to use a <a href='/'>Registered Agent service</a>.",
        marginBottom: 48
    },
  {
    type: "header",
    content: "If You Don’t Have a Registered Agent for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Failing to have a Registered Agent in Illinois can cause your business issues. These include:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "Getting served or sued and not finding out about it: If your Illinois corporation is sued and you don’t know about it, you could lose to a default judgment in your absence.",
        "Falling out of good standing with the Illinois Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.",
        "Losing your status as a Illinois corporation: A IL Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Illinois corporation may be dissolved.",
      ],
    },
    color: color.yellow3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Incfile Will Provide a Registered Agent for Illinois on Behalf of Your Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "If you have an S Corporation or C Corporation that’s incorporated in Illinois and you need a IL Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Illinois corporation. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "We are authorized to conduct business in Illinois and can legally act as your Registered Agent for your IL corporation.<br /><br /> Here’s what you need to know about Incfile’s IL Registered Agent service for corporations:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
        "The Registered Agent will always be available to accept documents and letters on your behalf",
        "We automatically notify you whenever we receive correspondence for your business from the Illinois Secretary of State or anyone else",
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
      text: "Order Incfile’s Illinois Registered Agent Service",
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
];
export const filing = [
  {
    type: "header",
    content: "Illinois Corporation Form, Filing and Permit Requirements",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "If you want to form a corporation in Illinois, there are certain forms, requirements and legalities you must have in place.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Below is a rundown of what you’ll need to do, together with information on the requirements for your Illinois corporation. Some of these forms you only need to submit once, while others must be filed on a regular basis.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "You will need to set reminders in your calendar to file forms regularly if you're filing yourself. At Incfile, we provide an optional, paid renewal service and can take care of certain renewals for you when you instruct us to do so.",
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
    content: "Articles of Incorporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The Articles of Incorporation are the formal documents filed with the Illinois Secretary of State to create your corporation. They provide certain information about your business. Once the documents are filed with the Secretary of State, they legally create your business as a corporation in Illinois. Here’s what’s typically included:",
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
    content: "When you start your business with us, we gather together all the information we need to create your Articles of Incorporation. We then file that with the Illinois Secretary of State on your behalf.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Business Licenses and Permits for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Depending on the type of Illinois corporation you’re running, you will need to obtain various business licenses and permits. These are not required to form your IL corporation, but you must have them to legally carry out business. It’s vital to understand the permits and licenses required for your business to operate in compliance in your jurisdiction.",
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
        "Various cities in Illinois have slightly different rules and fees for permits and licenses for corporations. Check with your local Illinois city administration to see what their rules are. You will need a separate permit or license for each city your Illinois corporation operates in.",
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
    content: "Depending on the type of business you are running, you may need to get additional permits and licenses from the county or state of Illinois. You can get an idea of the types of permits and licenses your S Corporation or C Corporation might need from the State of Illinois website.",
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
    content: "Incfile Business License Research Package for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content:
        "Because permits vary widely depending on the type of Illinois corporation you are operating and where you are located, we provide a comprehensive Business License Research Package. It’s designed to tell you all of the licenses and permits necessary for your new corporation. It includes:",
    marginBottom: 41,
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
    content: "Your customized Business License Research Package will be emailed to you within two days of your Illinois Corporation being formed by the Illinois Secretary of State.",
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
    content: "Special Illinois Corporation Requirements",
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
    content: "Create Bylaws for Your Illinois Corporation",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Bylaws are the formal, internal rules that your Illinois corporation must follow to stay active. You will need to create and agree to bylaws in certain areas.",
    marginBottom: 41,
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
    content: "Corporation Shareholders Must Be Issued Stock",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Ownership in a Illinois corporation is expressed through the issuance of shares. You must create stock certificates and formally issue stock to any agreed initial shareholders in the corporation.",
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
        "You must appoint directors to all positions in line with the agreed Illinois corporation bylaws. The Board of Directors is responsible for the strategic direction and overall management of the corporation. The board selects officers who will manage the day-to-day activities of the corporation.",
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
    content: "Officers are the individuals who manage the Illinois corporation on a day-to-day basis. At minimum a IL corporation should have a president, secretary and treasurer. Theoretically, one person could hold more than one position.",
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
        "Your Illinois corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
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
        content: "Your Illinois corporation will need a book to record important information about the business. This book will include details like your Articles of Incorporation, corporate bylaws, meeting minutes, AGM details, directors, officers, stock certificate information, transfer documents and more.",
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
    content: "You may need to hire employees for your Illinois corporation. You will need:",
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
    content: "Your Illinois Corporation Must Hold an Annual General Meeting",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You must hold a yearly meeting that all directors, officers and shareholders of the IL corporation are invited to. The purpose of an AGM is generally to:",
    marginBottom: 41,
  },
  {
    type: "list-dot",
    content: {
      list: [
          "Discuss important information", "Make strategic decisions", "Understand opportunities, risks and issues", "Vote on important resolutions and other matters"],
    },
    color: color.babyblue3,
    marginBottom: 48,
    curve: false,
  },
  {
    type: "header",
    content: "Illinois Corporation Tax Registration",
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
    content: "You can find details on the <a href='/'> Illinois Department of Revenue</a> and IRS websites.",
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Annual Report for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You must file an annual report with the Illinois Secretary of State on an annual basis. If you do not file your annual report each year, you will be charged a late fee and your corporation may be dissolved. Here at Incfile, we can file your annual report on your behalf.",
    marginBottom: 24,
  },
    {
        type: "text",
        content: "As you can see, there are several forms and permits you need to submit to conduct business, both initially and on an annual basis.",
        marginBottom: 24
    },
  {
    type: "text",
    content: "<a href='/'>Learn about your ongoing Illinois corporation filing requirements</a> and business filing deadlines with our helpful Illinois ongoing filing lookup tool.",
    marginBottom: 24,
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
    content: "Certificate of Good Standing for Your Illinois \n" + "Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "You may need a Certificate of Good Standing for your Illinois corporation to carry out some business-related services like opening a bank account.",
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
    content: "Ready to Start Your Illinois Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Incfile provides a cost-effective service to help you create your Illinois corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
    content: "Taxes and Fees for Your Illinois Corporation",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Here’s a breakdown of the likely taxes and fees you’ll incur when you start and run a corporation in Illinois.",
    marginBottom: 48,
  },
  {
    type: "header",
    content: "Illinois Corporation Fees",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Turnaround times for forming a corporation in Illinois",
          answer: "You will normally have the option of a “Standard” turnaround time and an “Expedited” turnaround time for forming your corporation. You can learn about those times here. ",
        },
        {
          question: "Fees for forming a corporation in Illinois",
          answer: "Learn about <a href='/'>standard filing costs here</a>.",
        },
        {
          question: "Illinois State Annual Report Fee",
          answer: "A yearly fee when you file your annual report.",
        },
        {
          question: "Illinois Permits and Licenses",
          answer: "Various fees for renewing your licenses and permits on a regular basis. These depend on the type of business you are operating and where you are located. They vary from city to city and industry to industry. We have a service that will tell you what permits and licenses you need. ",
        },
      ],
    },
    marginBottom: 47
  },
  {
    type: "header",
    content: "Taxes You and Your Illinois Corporation Need to Pay",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "The way that S Corporations and C Corporations pay tax is different. We’ll take each one separately.",
    marginBottom: 48,
  },
  {
    type: "accordion",
    content: {
      items: [
        {
          question: "Payroll Tax",
          answer: "Your corporation will need to pay employer payroll tax on salaries paid to employees.",
        },
        {
          question: "Illinois State Income Tax",
          answer: "You will pay Illinois state income tax on your earnings. <a href='/'>Find out more here</a>.",
        },
        {
          question: "Illinois State Sales/Use Tax",
          answer: "If you’re selling products or services in Illinois you may need to pay a state sales tax. You can register and pay state sales tax here.",
        },
        {
          question: "Illinois Other Taxes",
          answer: "You may need to pay other taxes and fees, depending on the type of Illinois corporation you run. Find out more on the Illinois Department of Revenue website.",
        },
      ],
    },
    marginBottom: 52
  },
  {
    type: "header",
    content: "Employee Insurance and Taxes",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "If you employ others, you will need to pay insurance and taxes to the state for each employee. <a href='/'>Here’s how to register for the various employee taxes, insurance and other costs</a>.",
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Get more requirements from the <a href='/'>Illinois Department of Labor website</a>.",
    marginBottom: 48,
  },
  {
      type: "header",
      content: "Taxes Payable by Illinois S Corporations",
      size: 4,
      marginBottom: 24
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Self-Employment Tax",
        text: "Because your Illinois corporation income flows through to your personal tax return, you must pay self-employment tax (also known as FICA, Social Security or Medicare tax) on your earnings. This is typically at a rate of 15.3 percent. You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.",
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
    type: "header",
    content: "Taxes Payable by Illinois C Corporations",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "svg-color-text-box",
    content: [
      {
        header: "Corporation Tax",
        text:
            "Unlike the the Limited Liability Company and the S Corporation, a Illinois C Corporation is required to file a corporate tax return and pay corporation taxes on any profits. When those taxed profits are paid to shareholders as dividends, they will also be subject to taxation on that individual’s tax return. This is known as “double taxation.”",
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
            "A Illinois C Corporation may pay shareholders dividends as a share of the profits of the company. The value of dividends that each shareholder is entitled to depends on how many shares they own.<br /><br />Dividends that are distributed to shareholders are taxed twice: first at the corporate level as profit (on the corporation’s Form 1120) and again at the individual level as stock dividends (on the shareholder's Form 1040).",
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
    content: "Taxes Payable by All Individuals Working for Illinois Corporations",
    size: 5,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Federal Income Tax on Earnings, Dividends and Distributions",
    marginBottom: 24
  },
  {
    type: "text",
    content: "You will also need to pay regular federal income tax when you file your tax return every year. Note that you will be able to apply your standard deduction, personal exemption and business expenses to this tax.",
    marginBottom: 48
  },
  {
    type: "header",
    content: "Ready to Start Your Illinois Corporation?",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "text",
    content: "Incfile provides a cost-effective service to help you create your Illinois corporation. We guide you through the process and handle most of the administrative steps, such as filing the necessary forms on your behalf.",
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
    content: "Understand Your Ongoing Corporation Filing Requirements",
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
    content: "Illinois's Ongoing Corporate File Requirements:",
    size: 4,
    marginBottom: 24,
  },
  {
    type: "header",
    content: "Illinois Annual Report",
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
            label: "Within 60 days immediately preceding first day of anniversary month",
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
            label: "$153",
            type: "label-boxed",
            className: "highlight",
            style: {
              "align-items": "flex-start"
            }
          },
        ],
      ],
      headerColumnsDef: "250px 1fr",
      rowColumnsDef: "250px 1fr",
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
    content: "Protect Your Business Name With a Trademark",
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
    content: "Finances & Accounting for Your Illinois Corporation",
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
    content: "Choose a Bank for Your Illinois Corporation",
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
        "Once your form your Corporation, it’s important to keep your business and personal assets separate to protect your personal assets from liability. It also makes tax season a whole lot easier when you have one clear account with all your business expenses, instead of all expenses mixed up within two accounts that need to be sorted. Once you choose a business checking account for your Illinois Corporation, make sure you receive a business checking card or apply for a business credit card that you can use for all business expenses. You can also use a tool like <a href='/'>Expensify</a> to track and tag business expenses from your mobile phone.",
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
    content: "Business Operations & Marketing for Your Illinois \n" + "Corporation",
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
    content: "Choose the Best Business Tools to Run Your Illinois \n" + "Corporation",
    size: 4,
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