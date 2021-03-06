export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/kansas-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/kansas-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/kansas-llc/registered-agents-kansas-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/kansas-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/kansas-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS`,
  },
};
