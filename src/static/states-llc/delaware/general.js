export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/delaware-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/delaware-llc/delaware-business-names/`,
    },
    {
      name: `Registered Agent`,
      path: `/delaware-llc/registered-agents-delaware-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/delaware-llc/fees-filing-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/delaware-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DE`,
  },
};
