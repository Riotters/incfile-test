export const tabPages = {
  pages: [
    {
      name: `How To Guide`,
      path: `/tennessee-llc/`,
    },
    {
      name: `Name Your Business`,
      path: `/tennessee-llc/how-to-name-your-llc/`,
    },
    {
      name: `Registered Agent`,
      path: `/tennessee-llc/registered-agents-tennessee-llc/`,
    },
    {
      name: `Filing Fee & Requirements`,
      path: `/tennessee-llc/form-filling-permit-requirements/`,
    },
    {
      name: `Business Taxes`,
      path: `/tennessee-llc/business-taxes/`,
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
    url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=TN`,
  },
};
