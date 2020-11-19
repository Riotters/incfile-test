export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/indiana-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/indiana-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/indiana-llc/registered-agents-indiana-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/indiana-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/indiana-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN`,
  },
};
