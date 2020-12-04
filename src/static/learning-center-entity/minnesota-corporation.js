import Tab1Icon from "../../images/icons/icon-manage-your-company-color-business-license-research.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/icon-32-multi-color-registered-agent.inline.svg";
import Tab4Icon from "../../images/icons/icon-learning-center-color-how-to-guide.inline.svg";
import Tab5Icon
  from "../../images/icons/icon-learning-center-color-all-ca-corporations-must-have-elected-board-of-directors.inline.svg";
import Tab6Icon from "../../images/icons/icon-start-a-business-color-maintaining-your-cleaning-business.inline.svg";
import Tab7Icon from "../../images/icons/icon-learning-center-color-business-taxes.inline.svg";

export const top = {
  header: `Form a Corporation in Minnesota.`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `Start my corporation`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=MN`,
    },
  ],
};

export const service = {
  header: `How our service works`,
  text: `Take a moment to view our instructional video and see how easy it can be to get your business incorporated.`,
};

export const fillingRequirements = {
  mainHeader: "Annual California Filing Requirements",
  tableScheme: "blue3",
  header1: "Minnesota Filing Time & Price",
  header1infoBox: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
  header2: "Minnesota Compliance Requirements",
  header2infoBox: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state. Failure to file this report can lead to the company being revoked or administratively dissolved.`,
  header3: "Annual Report",
  table: {
    headers: false,
    rows: [
      [
        {
          label: "Start Fee:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "$250",
          type: "label",
          textCenter: true,
        },
      ],
      [
        {
          label: "State Filing Time:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "5 Business Days",
          type: "label",
          textCenter: true,
        },
      ],
      [
        {
          label: "Expedited Filing Time:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "1 Business Day",
          type: "label",
          textCenter: true,
        },
      ],
    ],
    rowColumnsDef: "1fr 2fr",
    headerColumnsDef: "1fr 2fr",
  },
  table2: {
    headers: false,
    rows: [
      [
        {
          label: "Initial Report:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "Domestic (Minnesotan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution.",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
      [
        {
          label: "Due Date:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "Within 6 months of the date of formation.",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
      [
        {
          label: "Filing Fee:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "$0",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
    ],
    rowColumnsDef: "1fr 2fr",
    headerColumnsDef: "1fr 2fr",
  },
  table3: {
    headers: false,
    rows: [
      [
        {
          label: "Frequency:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "Biennially",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
      [
        {
          label: "Due Date:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "By January 2nd of the filing year.",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
      [
        {
          label: "Filing Fee:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "$100",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
      [
        {
          label: "Note:",
          type: "label",
          style: { "font-weight": "bold" },
        },
        {
          label: "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years.",
          type: "label",
          textCenter: true,
          className: "text-left",
        },
      ],
    ],
    rowColumnsDef: "1fr 2fr",
    headerColumnsDef: "1fr 2fr",
  },
};

export const questions = {
  header: `Commonly Asked Questions For Starting a Minnesota Corporation`,
  items: [
    {
      question: `How is a Corporation Taxed?`,
      answer: `Unlike many other business entities in which the profits pass through to the owners' personal tax return (e.g. LLCs, S Corporations, etc.), the C Corporation is a completely separate taxable entity. The C Corporation pays federal taxes on the net profits (after all expenses, including salaries and bonuses) of the business by filing the 1120 form with the IRS. The after tax profits can be paid out to the owners (shareholders) in the form of dividends, or retained for reinvestment of the business. The first $50,000 of net income is only federally taxed at 15% rate, and the next $25,000 is taxed at a 25% rate. Different states have different rules on how they tax corporations.`,
    },
    {
      question: `What is the Management Structure of an Corporation?`,
      answer: `An LLC is typically managed by its members/owners (referred to as member-managed). In that respect an LLC is unlike a corporation, which has a much more rigid and defined management structure, including directors and officers. All owners of the LLC are typically referred to as members, and they can have control and voting interest proportional to their ownership interest, or in proportions different from their ownership interest; however the members agree.`,
    },
    {
      question: `Are Non-U.S. Residents Allowed to Own a Corporation or LLC?`,
      answer: `There are no citizenship or residence requirements for ownership of a C Corporation or an LLC. The S Corporation however does not allow nonresident aliens to be shareholders (owner), but any US citizen or resident alien may be a shareholder (owner). You would, of course, require an in state street address for the state to forward official legal and tax correspondence including service of process, known as the registered agent address, but neither residency nor citizenship is required for ownership of a C Corporation or an LLC.`,
    },
    {
      question: `Can I form an Corporation with just one member?`,
      answer: `There was a time when almost every state required the LLC to have two or more members, but that is no longer the case. This important change came in response to revised IRS regulations that clearly permitted single-member LLCs. As a result, in most states, if you plan to be the sole owner of a business and you wish to limit your personal liability, you can choose between forming a corporation or an LLC.`,
    },
    {
      question: `What is an Operating Agreement?`,
      answer: `The operating agreement is akin to a partnership agreement for a General Partnership or Limited Liability Partnership (LLP). It is an internal contract amongst the members/owners of the LLC, and it lays out such things as ownership interest, member responsibilities, accounting method, adding or removing members, terms for concluding the LLC, etc. It is generally not required by a given state for forming an LLC (with the exception of New York), although it is certainly recommended. When dealing with private companies for financing issues (loans, mortgages, etc.) it may be required by that company. A customizable operating agreement is included with the LLC/Corp Kit.`,
    },
    {
      question: `Can another business entity be a member of an Corporation?`,
      answer: `In the majority of states, The members of an LLC can be individuals, corporations, or other LLCs. These members of the LLC can be out of state residents or even foreign nationals. Furthermore there is no limit to the amount of members that an LLC can have. The flexibility of an LLC in contrast to an S Corporation is stark considering the S corporations are limited to 75 shareholders who must either be United States citizens or Lawful Permanent Residents.`,
    },
  ],
};

export const info = {
  header: `Included in all of our packages`,
  items: [
    {
      headline: `Verify Company Name Availability`,
      text: `We conduct a thorough name search with the state corporation database and will work with you as long 
as needed to find an available company name.`,
    },
    {
      headline: `Preparation & Filing of Articles`,
      text: `We will review the information, prepare your incorporation documents, and send them to the state 
of formation.`,
    },
    {
      headline: `Next Business Day Processing`,
      text: `We strive to ensure that every order received 
is prepared and forwarded to the state within 
1 business day.`,
    },
    {
      headline: `Lifetime Customer Support`,
      text: `We are always here to help no matter how long ago you placed your order, whether you have a general question or need a copy of a previously filed document.`,
    },
    {
      headline: `Lifetime Company Alerts`,
      text: `Never miss an important filing date again. Lifetime Company Alerts is designed to send email notifications informing clients of compulsory state filings such as Annual Reports, Business Licenses, Statement of Information etc.`,
    },
    {
      headline: `Free Business Tax Consultation`,
      text: `Incorporating a new business can burden owners with complicated tax filings . As a client you are entitled to receive a free no obligation 1 hour consultation with a certified tax professional who can answer questions regarding the tax commitments of your company.`,
    },
    {
      headline: `Registered Agent Service 
(1st Year FREE)`,
      text: `Every new incorporation order is eligible for 1 full year 
of FREE Registered Agent service. As your Registered Agent, we will use our address to accept official legal correspondence and then deliver it to you. This is an invaluable service that will eliminate junk mail and limit personal information available to third parties.`,
    },
    {
      headline: `Online Access to Incorporation 
Documents`,
      text: `You will be able to access your incorporation documents online 24/7. You can also download your documents at anytime you wish, review company information, and track all orders in real-time.`,
    },
    {
      headline: `Online Order Status Tracking`,
      text: `This feature allows you to review the status of your order in real time.`,
    },
  ],
};

export const articlesOfIncorporation = {
  box1: {
    header: `The following information must be included in the articles of incorporation:`,
    list: [
      `The name(s) and address(es) of the incorporator(s)`,
      `The mailing address of the corporation’s principal office`,
      `The number of shares the corporation is authorized to issue`,
      `The street address of the corporation’s initial registered office`,
      `The name of its initial registered agent at that office`,
    ],
  },
  box2: {
    header: `Minnesota also permits optional provisions to be integrated into the articles of incorporation, such as:`,
    list: [
      `The duration of the corporation’s existence, if not perpetual`,
      `Cumulative voting for directors`,
      `The names of the initial directors`,
      `Actions by the board which require more than a simple majority vote`,
      `Non-shareholder voting rights`,
      `Regulation regarding the powers of the corporation, its board of directors, and shareholders`,
      `The limitation or elimination of directors’ liability for breach of fiduciary duty to the corporation or the shareholders`,
    ],
  },
};

export const corporationName = {
  header: `An available corporate name may be reserved for up to 120 days for $25.`,
  text: `A proposed corporate name may be registered for an annual fee of $25. It is important to note that Minnesota state law does not allow businesses to register fictitious or assumed (“doing business as”) names.`,
};

export const tabs = {
  panels: [
    {
      icon: Tab1Icon,
      name: `Corporation Name`
    },
    {
      icon: Tab2Icon,
      name: `Articles of Incorporation`
    },
    {
      icon: Tab3Icon,
      name: `Registered Agent`
    },
    {
      icon: Tab4Icon,
      name: `Bylaws`
    },
    {
      icon: Tab5Icon,
      name: `Directors`
    },
    {
      icon: Tab6Icon,
      name: `Required Reports`
    },
    {
      icon: Tab7Icon,
      name: `Taxes`
    },
  ]
}
