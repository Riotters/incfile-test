export const top = {
  header: `Help Center`,
  text: `Instant answers. What can we help you with?`,
};

export const about = {
  links: [
    {
      text: `View All Topics`,
      url: `/`,
    },
    {
      text: `General`,
      url: `/`,
    },
  ],
  header: `Should I Assume That If I Form An LLC Or Incorporate That No One Else Can Use The Same Name?`,
  box: {
    header: `The short answer is no`,
    text: `if you form an LLC or incorporate a company it means that a corporation or LLC cannot be filed using the same name in that state of formation. However it does not preclude anyone else from incorporating that same name in any of the other 49 states.`,
  },
  text: `What we often suggest to clients before submitting an order is that they search to see if the corresponding URL is available. In this day in age most companies will own the URL of their respective company.`,
  text2: `If you form a corporation or LLC in a state and want to protect the name from being used by someone a trademark application will need to be filed with the United States Patent Office. If you own a trademark then it would provide you with legal recourse if another company in the same industry were to initiate a business using the same name.`,
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprises.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};

export const categories = {
  header: `More answers to your questions`,
  buttons: [
    {
      header: `General`,
      url: `/research-topics/general-research-topics/`,
    },
    {
      header: `LLC`,
      url: `/research-topics/llc-info/`,
    },
    {
      header: `S Corporation`,
      url: `/research-topics/s-corporation-info/`,
    },
    {
      header: `C Corporation`,
      url: `/research-topics/c-corporation-info/`,
    },
    {
      header: `Nonprofit`,
      url: `/research-topics/nonprofit-info/`,
    },
    {
      header: `Registered Agent`,
      url: `/research-topics/registered-agent-help/`,
    },
    {
      header: `Business Tax`,
      url: `/research-topics/business-taxes/`,
    },
    {
      header: `Employer Identification Number (EIN)`,
      url: `/research-topics/ein-info/`,
    },
    {
      header: `Individual State Information`,
      url: `/research-topics/individual-state-info/`,
    },
    {
      header: `Video Library`,
      url: `/research-topics/video-library/`,
    },
  ],
};

export const service = {
  header: `How our service works`,
  text: `Take a moment to view our instructional video and see how easy it can be to get your business incorporated.`,
};

export const tools = {
  header: `Helpful tools for decision making`,
  text: `Select your business type to see how Incfile can work for you.`,
  buttons: [
    {
      header: `Corporation State Information`,
      url: `/corporation-state-information/`,
    },
    {
      header: `S Corporation Tax Calculator`,
      url: `/s-corporation-tax-calculator/`,
    },
    {
      header: `Entity Comparison Chart`,
      url: `/business-entity-comparison/`,
    },
    {
      header: `State Filing Fees`,
      url: `/state-filing-fees/`,
    },
    {
      header: `Ongoing Filing Requirements`,
      url: `/compliance-filing-requirement/`,
    },
    {
      header: `State Filing TImes`,
      url: `/compare-state-filing-times/`,
    },
  ],
};
