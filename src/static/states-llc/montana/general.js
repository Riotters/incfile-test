export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/montana-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/montana-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/montana-llc/registered-agents-montana-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/montana-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/montana-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MT`,
  },
};
