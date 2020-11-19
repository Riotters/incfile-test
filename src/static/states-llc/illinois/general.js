export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/illinois-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/illinois-llc/illinois-business-names/`,
    },
    {
      name: `Registered Agent`,
      path: `/illinois-llc/registered-agents-illinois-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/illinois-llc/fees-filing-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/illinois-llc/business-taxes/`,
    },
    {
      name: `What To Do Next?`,
      path: `/after-forming-llc/`,
    },
  ],
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprises.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Start Now`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IL`,
  },
};
