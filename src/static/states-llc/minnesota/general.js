export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/minnesota-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/minnesota-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/minnesota-llc/registered-agents-minnesota-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/minnesota-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/minnesota-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MN`,
  },
};
