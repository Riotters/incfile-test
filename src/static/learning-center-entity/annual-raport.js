export const top = {
  header: `Find the Business Filing Date for Your Upcoming Annual or Biennial Report`,
  text: `You Must File a Business Report with Your State by a Certain Date to Keep Your Business in Good Standing`,
  buttons: [
    {
      text: `Check my due date now`,
      url: `/`,
    },
  ],
};

export const about = {
  box: {
    header: `In most state, businesses must file an annual or biennial report.`,
    text: `You'll need to prepare and send this report to the state government entity that manages business administration, which is normally the secretary of state. You must file a report to remain in good standing; if you don't file one, your business could be dissolved.`,
  },
  text: `Requirements, filing dates and fees do vary significantly from state to state, so we've created a helpful tool that tells you exactly when your business need to file.`,
  text2: `Just enter your details in the link below, and we'll let you know what need to do`,
  link: {
    text: `Learn more about compilance requirements`,
    url: `/compliance-filing-requirement/`,
  },
};

export const nextStateDue = {
  header: `When is my next state filing report due?`,
  header2: `Relax. Here's the Information You Need.`,
  text: `We provide the details you need about when you should file your next business report. Just fill in your information, and we'll let you know when the report due.`,
  form: {
    header: `Please enter below information`,
    field: {
      label: `Company`,
    },
    field2: {
      label: `State of Incorporation`,
    },
    field3: {
      label: `Select Entity Type*`,
    },
    link: {
      text: `Not sure?`,
      url: `/`
    },
    field4: {
      label: `Date of Formation`,
    },
    button: {
      text: `Check Due Date Now`,
      url: `/`,
    },
  },
};

export const nextStateFiling = {
  header: `Next state filing due date for Riotters`,
  box: {
    header: `Mar 31, 2020`,
    text: `Statement of Information due date for Riotters`,
    details: [
      {
        title: `State Requirement`,
        text: `Statement of Information`,
      },
      {
        title: `Due date`,
        text: `Mar 31, 2020`,
      },
    ],
    header: `What are the ongoing compliance requirements in California?`,
    header: `Statement of Information`,
    table: [
      {
        title: `Frequency:`,
        text: `Annualy`,
      },
      {
        title: `Due Date:`,
        text: `During six-month period ending on last day of anniversary month of incorporation or qualification.`,
      },
      {
        title: `Filing Fee:`,
        text: `$25`,
      },
      {
        title: `Important:`,
        text: `The initial Statement of Information filing is due within 90 days of the entity formation date.`,
      },
    ],
    header: `California Franchise Tax`,
    table2: [
      {
        title: `Frequency:`,
        text: `Annually`,
      },
      {
        title: `Fee:`,
        text: `$800 (minimum)`,
        text: `The California Franchise Tax Board requires that all corporations registered in the State of California pay a franchise tax. For new corporations, the minimum franchise tax is $800 per year. However, Franchise Tax  is waived the 1st year for corporations but not LLCs. 
                New corporations that incorporate in California  are exempt from the 1st year minimum tax, however the corporate owners are still responsible for paying the applicable franchise tax on any net income earned during the 1st year. Starting in the second year corporations are subject to the annual $800 minimum franchise tax rule.`,
        text: `(We do not assist in the filing of the Franchise Tax Report)`,
      },
    ],
    buttons: [
      {
        text: `File Your Annual or Biennal Report`,
        utl: `${process.env.ORDER_URL}/annual-report.php`,
      },
      {
        text: `Check Another Due Date`,
        utl: `/`,
      },
    ],
  },
};
export const faq = {
  header: `Common Questions About Your Business Report`,
  faq: {
    items: [
      {
        question: `What types of businesses need to file reports?`,
        answer: `Generally, if you’re an incorporated business — a Limited Liability Company (LLC), Limited Liability Partnership (LLP), S Corporation or C Corporation — you will need to file a report.`,
      },
      {
        question: `Are Annual Report known as anything else?`,
        answer: `Sometimes. A report that’s filed every two years is known as a “biennial report.” Some states call Annual Report “statements of information.”`,
      },
      {
        question: `What information is included in an Annual Report?`,
        answer: `It varies from state to state, but typically includes any changes to:`,
        list: [
          `The management structure of your business (like managers, members or directors)`,
          `The names or addresses of senior people in your business`,
          `Your business name or address`,
          `Your registered agent details`,
          `Main business activities`,
          `Share structures or amounts`,
          `Other authorized signatories`,
          `Some other areas`,
        ],
      },
      {
        question: `What happens if I don’t file a report?`,
        answer: `If you don’t file a report, you may have to pay a penalty fee or taxes. If you continue not to file, your business may be involuntarily dissolved, meaning it will lose its legal status (which can have serious implications).`,
      },
      {
        question: `Once I have filed my official Annual Report, do I need to produce other reports?`,
        answer: [
          {
            text: `You may. Our `,
          },
          {
            text: `compliance tool`,
            url: `/compliance-filing-requirement/`,
          },
          {
            text: ` will tell you what the business administration entity in your state needs. Of course, you may also produce other annual or interim reports for your business shareholders, employees or other stakeholders, but that will generally be defined in your `,
          },
          {
            text: `operating agreement`,
            url: `/research-topics/llc-info/llc-operating-agreement/`,
          },
          {
            text: ` or other `,
          },
          {
            text: `corporate bylaws`,
            url: `/research-topics/c-corporation-info/what-are-bylaws/`,
          },
        ],
      },
      {
        question: `Does every state require a report?`,
        answer: `No. Some states like Pennsylvania, Nebraska, Ohio, Oklahoma and others don’t require a report. Enter your details into our tool above, and we'll show you the specific details for your state.
                    `,
      },
      {
        question: `Does the complexity of Annual Reports vary from state to state?`,
        answer: `Yes. Some reports are straightforward and simple, while others have much more complex and stringent requirements.`,
      },
      {
        question: `Do I need to file a report in each state where I do business?`,
        answer: `Yes. You will need to file a report in each state where your business is incorporated either as a domestic or foreign entity.`,
      },
      {
        question: `Can you file my report on my behalf?`,
        answer: [
          {
            text: `Yes. We have a low-cost `,
          },
          {
            text: `Annual Report filing service.`,
            url: `/manage-your-company/annual-report/`,
          },
        ],
      },
      {
        question: `Do filing dates vary between corporations or LLCs?`,
        answer: `Not generally, but you should still check your dates in our tools.`,
      },
      {
        question: `Are there other regular filing requirements?`,
        answer: `Yes. You may need to file for taxes, employees, franchise fees and other compliance requirements. These will not be covered by your Annual Report filing.`,
      },
    ],
  },
};
