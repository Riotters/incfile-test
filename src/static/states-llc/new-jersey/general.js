export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/new-jersey-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/new-jersey-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/new-jersey-llc/registered-agents-new-jersey-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/new-jersey-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/new-jersey-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
  },
};
