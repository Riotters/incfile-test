export const variants = {
  header: `Select the package that works best for you`,
  link: {
    text: `Learn more`,
    url: `/`,
  },
  cards: [
    {
      variant: ``,
      header: `Silver`,
      text: ``,
      price: `100`,
      button: {
        text: `Get the Silver package`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=AL`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `0`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `100`,
        },
      ],
      include: `The sliver services includes:`,
      list: [`Prepare & Filing the Articles of Organization`, `Unlimited Name Searches`, `FREE Registered Agent for a year!`],
    },
    {
      variant: `Most popular`,
      header: `Gold`,
      text: `Everything from sliver+`,
      price: `249`,
      button: {
        text: `Get the Gold package`,
        url: `${process.env.ORDER_URL}/form-order-now.php`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `149`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `100`,
        },
      ],
      include: `The sliver package, and:`,
      list: [`EIN Business Tax Number`, `IRS Form 2553`, `Operating Agreement`, `Banking Resolution`, `Express Shipping`, `Lifetime Company Alerts`, `Online Access Dashboard`, `Unlimited Phone & Email Support`, `Business Banking Account`, `Business Tax Consultation`],
    },
    {
      variant: `Best value`,
      header: `Platinum`,
      text: `Everything from sliver & gold+`,
      price: `399`,
      button: {
        text: `Get the Platinum package`,
        url: `${process.env.ORDER_URL}/form-order-now.php`,
      },
      fees: [
        {
          helpmark: `helpmark`,
          text: `Package fee`,
          price: `299`,
        },
        {
          helpmark: `helpmark`,
          text: `State fee`,
          price: `100`,
        },
      ],
      include: `The gold package, and:`,
      list: [`Business Contract Templates`, `Expedited Filing`, `FedEx Delivery`, `Domain Name + Business Email`],
    },
  ],
};
