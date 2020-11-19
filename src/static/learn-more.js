export const tools = {
  header: `Helpful tools for decision making`,
  text: `Select your business type to see how Incfile can work for you.`,
  buttons: [
    {
      header: `Corporation State Information`,
      url: `/corporation-state-information/`,
    },
    {
      header: `Corporation Tax Calculator`,
      url: `/s-corporation-tax-calculator/`,
    },
    {
      header: `Entity Comparison Chart`,
      url: `/business-entity-comparison/`,
    },
    {
      header: `State Filing Fees`,
      url: `/state-filing-fees/`,
    },
    {
      header: `Ongoing Filing Requirements`,
      url: `/compliance-filing-requirement/`,
    },
    {
      header: `State Filing Times`,
      url: `/state-filings-times/`,
    },
  ],
};

export const help = {
  header: `We are here to help`,
  text: `We understand that questions come up every turn of your business`,
  buttons: [
    {
      text: `Start Now`,
      url: `${process.env.ORDER_URL}/form-order-now.php`,
    },
    {
      text: `Read FAQ`,
      url: `/help-center/`,
    },
  ],
};
