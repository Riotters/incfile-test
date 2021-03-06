export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/vermont-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/vermont-llc/how-to-your-name-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/vermont-llc/registered-agents-vermont-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/vermont-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/vermont-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VT`,
  },
};
