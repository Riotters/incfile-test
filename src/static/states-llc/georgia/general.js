export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/georgia-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/georgia-llc/georgia-business-names/`,
    },
    {
      name: `Registered Agent`,
      path: `/georgia-llc/registered-agents-georgia-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/georgia-llc/fees-filing-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/georgia-llc/business-taxes/`,
    },
    {
      name: `What To Do Next?`,
      path: `/other/after-forming-llc/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=GA`,
  },
};
