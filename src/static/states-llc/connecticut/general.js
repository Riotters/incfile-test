export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/connecticut-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/connecticut-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/connecticut-llc/registered-agents-connecticut-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/connecticut-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/connecticut-llc/business-taxes/`,
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
  text: `No Contracts. No Surprise.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Start Now`,
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT`,
  },
};
