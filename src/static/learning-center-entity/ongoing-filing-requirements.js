export const top = {
  header: `Research State Ongoing Filing Requirements`,
  text: `Learn the requirements for ongoing filing requests in your state to remain in good standing.`,
};

export const about = {
  header: `State by State Review of Ongoing Filing Requirements`,
  text: `Filing requirements are an important part in maintaining a companies standing with the state. Each state proscribes specific rules regarding when annual reports and franchise tax reports are due. Many states require the annual report to be filed on the anniversary month of the companies date of formation. Where some states set a specific date of filing for corporations and another for LLCs.`,
  box: {
    header: `The reports are mandatory`,
    text: `…and must be filed within the specified time frame in order for the entity to remain in good standing with the state. Failure to file these reports can lead to the company being revoked or administrative dissolution.`,
  },
  text2: `Included with all incorporation packages are lifetime company alerts that will provide courtesy email reminders to inform clients of an upcoming filing requirement.`,
};

export const entityTypeAndState = {
  header: `Choose your entity type and state`,
  text: `Our Business License Search Tool helps you narrow down the requirements for your business. Just enter the relevant information below to learn the likely registrations, permits, or licenses you’ll need.`,
  cards: [`1. Entity Type`, `2. Your State`],
};

export const requirements = {
  header: `Mandatory California Compliance Requirements`,
  columns: [
    {
      header: `Filing time and price`,
      text: `Frequency: Annually`,
      text2: `Due Date: During six-month period ending on last day of anniversary month of incorporation or qualification.`,
      link: {
        text: `State Filing Times`,
        url: `/state-filing-times/`,
      },
    },
    {
      header: `Compliance Requirements`,
      text: `Filing Fee: $25`,
      text2: `Important: The initial Statement of Information filing is due within 90 days of the entity formation date.`,
      link: {
        text: `State Filing Prices`,
        url: `/state-filing-fees/`,
      },
    },
  ],
  header2: `California Franchise Tax`,
  text: `$800 payment for the LLC Franchise Tax is due by 15th day of the 4th month after your LLC is filed. The month your LLC is filed counts as Month 1, regardless if you file on the 1st of the month, the last of the month, or any day of the month, really.`,
  text2: `This means that if you were to file your LLC on March 22nd, then you must pay the $800 fee no later than June 15th (in this example, March is Month 1, April is Month 2, May is Month 3, and June is Month 4). Then, every year after your first payment $800 LLC Franchise Tax will be due April 15th. You pay the $800 LLC Franchise Tax using Form 3522 called the LLC Tax Voucher.`,
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprise.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `Launch your business`,
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};
