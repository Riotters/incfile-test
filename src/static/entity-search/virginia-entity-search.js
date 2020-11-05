export const top = {
  header: `Find Out If the Virginia Business Name You Want Is Available`,
  text: `Check Virginia Company Name Availability for Your New Entity`,
  button: [
    {
      text: "Check Name Availability",
      url: "#form",
    },
  ],
};

export const about = {
  header: `The Commonwealth of Virginia is one of the most friendly states to start a small business.`,
  text: `It features a strong statewide economy, a highly educated population and great transportation links with Washington, D.C., Maryland, West Virginia and North Carolina. It’s also well-placed internationally, with several good options for traveling outside the US.`,
  text2: `In addition to a very strong technology sector, Virginia also enjoys economic growth from businesses in the software, defense and communications sectors.`,
  box: {
    header: `If you want to start a new business in Virginia, you need the right name.`,
    text: `We’ll look up your proposed business name in Virginia and see if it’s available for you to form a corporation or LLC. You can easily check for existing company names with the Virginia State Corporation Commission registry of businesses.`,
  },
  text3: `When you have a unique name for your Virginia corporation or LLC, we’ll help you legally form your business through our quick, easy and inexpensive VA entity formation process. Get started by searching your proposed Virginia business name in the box below, and we’ll check it with the VA State Corporation Commission.`,
};

export const search = {
  header: `Use Our Free Business Name Search Tool To Find Out If Your Company Name Is Available`,
  header2: `We’ll Take Care of the Entity Search.`,
  text: `We’ll tell you if your business name is available with the Virginia Division of Corporations. Just fill in your proposed business name, and we’ll search the company registrar for you.`,
};

export const newRules = {
  header: `Rules About How You Should Name Your Virginia Business`,
  text: `All businesses formed in Virginia must be named following certain rules.`,
  cards: [
    { text: `Typically, the Virginia State Corporation Commission will not allow you to form a business with a name that implies association with a VA state entity, or one that implies an illegal purpose for your business.` },
    { text: `If your Virginia business is an LLC, it must contain “Limited Liability Company” or an abbreviation. If it’s a corporation, it must contain a word like “Incorporated,” “Corporation” or something similar.` },
    { text: `Your Virginia business name should not be confusable with or similar to another business in VA.` },
  ],
};

export const specificRules = {
  header: `Other Virginia Business Naming Rules`,
  text: `The Virginia State Corporation Commission has several other rules on the words you cannot use in a business name:`,
  list: [
    `The name of a corporation, limited liability company or limited partnership may not include any word, abbreviation or combination of characters that states or implies that it is a different type of business entity. Under this standard, for example, the name of a limited liability company may not include the word “corporation” or “incorporated” or the designation “Corp.” or “Inc.”`,
    `The name of a corporation may not imply that it is or will be conducting business as a bank, trust company, insurance company, or public service company, such as a railroad, telephone company, utility, or water or sewer company, unless it will actually be engaged in such business.`,
    `No business entity’s name may include the word “bank” or “trust” unless it will be engaged in the banking or trust company business, or it is clear from the context of the remaining words that it will not be engaged in such business.`,
    `No business entity’s name may include the word or words “engineer,” “architecture” or “land surveying,” or any modification or derivation of such words, unless the entity will be lawfully engaged in such services or it is clear from the context of the remaining words that the entity will not conduct such business.`,
    `The words “United States,” “national,” “Federal” and “reserve” may not be included in the name of a business entity that is engaged in the banking, loan, building and loan, brokerage, factorage, insurance, indemnity, savings or trust business.`,
  ],
};

export const startBusiness = {
  header: `Form Your Virginia LLC or Corporation Quickly and Easily`,
  text: `Ready to start your business? Incfile will take care of the paperwork for you and file it with the Virginia State Corporation Commission—all for as little as $0 + state fee.`,
  button: {
    text: `Start a VA Buisness Now`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityState=VA`,
  },
};

export const faq = {
  header: `Common Questions About Virginia Entity Searches`,
  items: [
    {
      question: `What else should I know before I start my LLC or Corporation?`,
      answer: [
        {
          text: `We’ve put together comprehensive guides on how to start an LLC or corporation in Virginia, including information on business formation, annual reports, registered agents, and Virginia business taxes. See the`,
        },
        {
          text: `VA LLC`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA`,
        },
        {
          text: `or`,
        },
        {
          text: `VA Corporation`,
          url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=VA`,
        },
        {
          text: `guides for more information.`,
        },
      ],
    },
    {
      question: `How Do I Search for My Virginia LLC or Corporation Business Name?`,
      answer: `Just use the Virginia Business Name Search Tool above and enter your proposed VA LLC or corporation name. We’ll search the business name database of the Virginia State Corporation Commission and tell you if there are any matches.`,
    },
    {
      question: `What Are the Rules on Naming My Virginia Business Entity?`,
      answer: `Virginia business entities do have to follow some general and specific naming rules. We’ve covered the main ones above.`,
    },
    {
      question: `I Want to Carry Out Business Under a Different Business Name in Virginia — Is That Possible?`,
      answer: [
        {
          text: `You can normally choose to conduct business under a different name in Virginia. This can be known as an “assumed name,” “fictitious name,” “doing business as name” or “trade name.” We can file your`,
        },
        {
          text: `VA Fictitious Business Name`,
          url: `/fictitious-business-or-trade-name/`,
        },
        {
          text: `with the Virginia State Corporation Commission on your behalf.`,
        },
      ],
    },
    {
      question: `Can I Change the Name of My Virginia LLC or Corporation?`,
      answer: [
        {
          text: `You can change your Virginia legal business entity name by filing an amendment to your Articles of Incorporation or Articles of Organization. We can`,
        },
        {
          text: `file an amendment on your behalf,`,
          url: `/manage-your-company/amendment/`,
        },
        {
          text: `including changing the name of your Virginia corporation or LLC.`,
        },
      ],
    },
    {
      question: `Can You Help Me Choose the Right Virginia Business Name?`,
      answer: [
        {
          text: `The perfect Virginia business name can be elusive. We have a`,
        },
        {
          text: `complete guide to choosing the right VA business name`,
          url: `/`,
        },
        {
          text: `— you'll want to choose a name that will:`,
        },
      ],
      list: [`Matter to business customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business in Virginia`],
    },
    {
      question: `What’s the Best Way to Stop My Virginia Business Name From Being Used by Someone Else?`,
      answer: `The easiest way to protect your Virginia business name is to incorporate your business in Virginia, generally as a Limited Liability Company (LLC) or a corporation. We can help you do that — just choose “Incorporate Now” above to get started.`,
      text: [
        {
          text: `If you want extra protection, you could consider`,
        },
        {
          text: `registering your Virginia business name as a trademark.`,
          url: `/trademark-name-search/`,
        },
        {
          text: `Note that filing a fictitious or “doing business as" (DBA) name in Virginia will not be sufficient to protect it.`,
        },
      ],
    },
    {
      question: `What Virginia Agency Is Responsible for Managing and Registering Business Names in VA?`,
      answer: `Businesses are incorporated in Virginia via the State Corporation Commission. They manage the Virginia company register, and it is their business name database that we will search on your behalf.`,
    },
  ],
};
