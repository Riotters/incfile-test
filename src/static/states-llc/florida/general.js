export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/florida-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/florida-llc/florida-business-names/`,
    },
    {
      name: `Registered Agent`,
      path: `/florida-llc/registered-agents-florida-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/florida-llc/fees-filing-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/florida-llc/business-taxes/`,
    },
    {
      name: `FAQ`,
      path: `/florida-llc/faq/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
  },
};
