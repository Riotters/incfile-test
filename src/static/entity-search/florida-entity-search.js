export const top = {
  header: `Perform a Florida Company Name Search and See If Your Business Name Is Available`,
  text: `Learn If Your Proposed Business Name Is Available in Florida`,
  button: [
    {
      text: "Check Name Availability",
      url: "#form",
    },
  ],
};

export const about = {
  header: `When you have a unique name for your Florida corporation or LLC, we’ll help you legally form your business through our quick, easy and inexpensive FL entity formation process.`,
  text: `To search for Florida business entities, just enter your details in the box below, and we’ll take care of everything else.`,
  box: {
    header: `If you’re thinking of forming a new Florida corporation or LLC, you can start by finding the perfect name.`,
    text: `Our helpful Florida LLC and corporation search tool lets you look up business names in FL to see if they’re available. Easily check for existing company names with the Florida Division of Corporations registry of businesses.`,
  },
};

export const search = {
  header: `Use Our Free Business Name Search Tool To Find Out If Your Company Name Is Available`,
  header2: `We’ll Take Care of the Entity Search.`,
  text: `We’ll tell you if your business name is available with the Florida Division of Corporations. Just fill in your proposed business name, and we’ll search the company registrar for you.`,
  form: {
    header: `Please enter the business name information`,
    field: {
      label: `First Name*`,
    },
    field2: {
      label: `Entity Type`,
      link: {
        text: `Not sure?`,
        url: `/business-entity-comparison/`,
      },
      options: [`LLC`, `Corporation`],
    },
    header2: `Let us know where we can let you know if your business name is available`,
    field3: {
      label: `First Name*`,
    },
    field4: {
      label: `Last Name*`,
    },
    field5: {
      label: `Email*`,
    },
    button: {
      text: `Check Name Availability`,
      url: `/`,
    },
  },
};

export const newRules = {
  header: `Florida Rules on Naming Your Corporation or LLC`,
  text: `All businesses formed in Florida must be named following certain rules.`,
  cards: [
    {
      text: `Your Florida business name should not be confusable with or similar to another business in FL.`,
    },
    {
      text: `If your Florida business is an LLC, it must contain “Limited Liability Company” or an abbreviation. If it’s a corporation, it must contain a word like “Incorporated,” “Corporation” or something similar.`,
    },
    {
      text: `Normally, you cannot imply connection with a Florida state entity or that you will be carrying out activities your FL business is not legally able to provide.`,
    },
  ],
};

export const startBusiness = {
  header: `Learn More About Forming an LLC or Corporation in Florida`,
  text: `We have a full guide to starting a new business in Florida. Learn about how to start a FL LLC or a FL corporation.`,
  button: {
    text: `FL LLC`,
    url: `/llc-state-information/florida-llc`,
  },
  button2: {
    text: `FL Corporation`,
    url: `/corporation-state-information/florida-corporation`,
  },
};

export const faq = {
  header: `Common Questions About Florida Business Searches`,
  items: [
    {
      question: `How Do I Search the Business Registry of the Florida Division of Corporations?`,
      answer: `Just use the Florida Business Name Search Tool above and enter your proposed FL LLC or corporation name. We’ll search the business name database of the Florida Division of Corporations and tell you if there are any matches.`,
    },
    {
      question: `Do I Need to Follow Any Naming Rules for My Florida Corporation or LLC?`,
      answer: `Florida business entities do have to follow some general and specific naming rules. We’ve covered the main ones above.`,
    },
    {
      question: `Can I Do Business Under a Different Name Than My Legal Name in Florida?`,
      answer: `You can normally choose to conduct business under a different name in Florida. This can be known as an “assumed name”, “fictitious name”, “doing business as name” or “trade name.” We can file your <a href="/manage-your-company/fictitious-business/">FL Fictitious Business Name</a> with the Florida Division of Corporations on your behalf.`,
    },
    {
      question: `I Need to Change the Name of My Florida Business Entity — Can You Help?`,
      answer: `You can change your Florida legal business entity name by filing an amendment to your Articles of Incorporation or Articles of Organization. We can <a href="/manage-your-company/amendment/">file an amendment on your behalf</a>, including changing the name of your Florida corporation or LLC.`,
    },
    {
      question: `What Do I Need to Think About When Deciding on a Florida Business Name?`,
      answer: `The perfect Florida business name can be elusive. We have a <a href="/blog/post/llc-name-search-50-states/">complete guide to choosing the right FL business name</a> —
        you'll want to choose a name that will:`,
      list: [`Matter to business customers`, `Be memorable enough to stand out`, `Tell people what your business does`, `Not be used by another business in Florida`],
    },
    {
      question: `How Do I Protect My Florida Business Name?`,
      answer: `The easiest way to protect your Florida business name is to incorporate your business in Florida, generally as a Limited Liability Company (LLC) or a corporation. We can help you do that — just choose “Incorporate Now” above to get started.`,
      text: `If you want extra protection, you could consider <a href="/manage-your-company/trademark-name-search/">registering your Florida business name as a trademark</a>. Note that filing a fictitious or “doing business as" (DBA) name in Florida will not be sufficient to protect it.`,
    },
    {
      question: `What Organization Registers and Manages Business Names in Florida?`,
      answer: `Businesses are incorporated in Florida via the Division of Corporations. They manage the Florida company register, and it is their business name database that we will search on your behalf.`,
    },
  ],
};
