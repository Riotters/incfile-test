export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/north-dakota-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/north-dakota-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/north-dakota-llc/registered-agents-north-dakota-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/north-dakota-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/north-dakota-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ND`,
  },
};
