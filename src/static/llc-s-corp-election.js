export const top = {
  header: `Prepare and File an S Corporation Tax Election with Form 2553`,
  text: `Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes`,
  button: [
    {
      text: "File your S Corp Tax Election",
      url: `${process.env.ORDER_URL}/s-corp-election-form?action=new&type=24`,
    },
  ],
};

export const about = {
  header: `Reducing Your Income Tax`,
  text: `The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). 
    The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in 
    the name of the business and to properly pay and account for any wage/payroll employees of your company. Incfile will 
    obtain your federal EIN electronically and have it back to you via email within one business day.`,
  button: [
    {
      text: "Let Incfile help you file your s corporation tax election",
      url: `${process.env.ORDER_URL}/s-corp-election-form?action=new&type=24`,
    },
  ],
};

export const llcsTax = {
  header: `How LLCs Are Normally Taxed`,
  text: `When it comes to the amount of tax you owe the federal and state government, 
    your income from an LLC is normally taxed similarly to that of sole proprietorship businesses. 
    For a small, one-person LLC, this typically works as follows...`,
  list: [
    "Your business earns revenue",
    "You deduct any allowable business expenses",
    "The amount remaining is your business profit, which you pay to yourself",
    "You pay self-employment tax of around 15 percent on any profits",
    "You pay federal tax at various income bands on any profits",
    "You pay state tax on any profits",
  ],
  red: `An S Corporation Tax Election reduces the amount of tax you pay in step 4, self-employment tax. It has no impact on any other taxes.`,
};

export const howSaveMoney = {
  header: `An Example of How an LLC Filing as an
    S Corporation Can Save Money`,
  text: `Let's illustrate this with an example.`,
  header2: `Self-Employment Tax as an LLC`,
  text2: `Under a standard LLC tax arrangement where the income “flows through” to your 1040 tax return and business schedule C, you would pay self-employment tax on all of that $90,000. At approximately 15 percent, the tax on that money would be $13,500. You would still pay standard federal and state taxes on any earnings.`,
  header3: `Payroll Tax as an S Corporation`,
  text3: `If you choose to be taxed as an S Corporation, you could say that your salary is $50,000 and take the other $40,000 out of your business as a distribution. You would pay standard payroll tax on that $50,000 for a total of around $7,500. You would not pay any payroll or self-employment tax on the $40,000 distribution, saving you around $6,000. You would still pay standard federal and state taxes on both your salary and your distribution.`,
  circle: `120,000`,
  text4: `Your business revenue a year`,
  profits: `90,000`,
  expenses: `30,000`,
};

export const taxCalculator = {
  header: `Check the Savings Yourself with our S Corporation Tax Calculator`,
  text: `The S Corporation tax calculator lets you choose how much to withdraw from your business each year, 
    and how much of it you will take as salary (with the rest being taken as a distribution). 
    It will then show you how much money you can save in taxes.`,
  header2: `Use our S Corporation Tax Calculator to view your potential tax savings`,
  link: {
    text: `Go to our S Corporation Tax Calculator`,
    url: `/s-corporation-tax-calculator/`,
  },
  header3: `What’s your estimated yearly net income for the business?`,
  income: `72,000`,
  text3: `Estimated yearly income`,
  savings: `Total Savings`,
};

export const fairSalary = {
  header: `Assigning a fair salary`,
  text: `One important part of the S Corporation Tax Election is that you must pay yourself a fair salary, which the IRS defines as “reasonable compensation.” 
    If you do not, the IRS could audit you and levy taxes and penalties. For example, you cannot pay yourself a salary of $10,000 and take $80,000 in distributions. 
    When it comes to setting a fair salary, look at what full-time roles similar to yours are paying someone with similar expertise and experience, and use that as a baseline. 
    Speak with your accountant or attorney for more information.`,
};

export const overhead = {
  header: `Administrative Overhead Of the S Corporation Election`,
  text: `Because it can reduce your tax burden by such a substantial amount, the S Corporation Tax Election is a good idea for most LLC owners. 
    But it’s important to understand the additional overhead this might create for you, your business and your accountant.`,
  cards: [
    {
      header: `Setting up monthly payroll`,
      text: `You will need to set up a monthly payroll where you pay yourself and submit your payroll taxes`,
    },
    {
      header: `Additional accounting fees`,
      text: `Your accountant will need to file your taxes in a slightly different way, which may increase your accounting fees`,
    },
  ],
  text2: `This will likely be more than counterbalanced by the money you save in tax payments.`,
};

export const fileForm = {
  header: `File Form 2553, S Corporation Tax Election Yourself`,
  text: `If you want to complete the filing process yourself, here are the steps you need to follow:`,
  list: [
    `Go to the Internal Revenue Service website`,
    `Find the section on S Corporation Tax Elections`,
    `Download form 2553`,
    `Gather the required information for form 2553 and fill it in`,
    `Send the form back to the IRS, typically by mail or fax`,
    `Wait for notification of acceptance of your tax election`,
  ],
};

export const behalfFile = {
  header: `Have Incfile File on Your Behalf`,
  text: `Alternatively, Incfile can take care of your S Corporation Tax Election for you. Just order the service below and we’ll collect all the information we need. We deal with all the forms and filing on your behalf. It’s fast, simple and hassle-free.`,
  header2: `Use anytime`,
  text2: `You can take advantage of our service when you first`,
  link: `incorporate your business`,
  text3: `or at`,
  link2: `certain times`,
  text4: `after that.`,
  button: {
    text: `Help me file my S Corporation tax election today!`,
    url: `${process.env.ORDER_URL}/s-corp-election-form?action=new&type=24`,
  },
};

export const help = {
  header: `Help File My LLC S Corporation Tax Election`,
  saveYourTime: {
    header: `Save your time, we’ll handle the paperwork`,
    text: `We provide a complete S Corporation Tax Election service to register and file your LLC tax status with the IRS on your behalf. Just place an order and we’ll collect the right information to guide you through the process, and the IRS will notify you of your updated tax status.`,
  },
  button: {
    text: `Help me file my S Corporation tax election today!`,
    url: `${process.env.ORDER_URL}/s-corp-election-form?action=new&type=24`,
  },
  header2: `Common Questions About Filing Your S Corporation Tax Election`,
};

export const faq = {
  items: [
    {
      question: `Does filing form 2553 remove any LLC protections?`,
      answer: `No. You still get the same limited liability protections as with a regular limited liability company.`,
    },
    {
      question: `How much could I save by being treated as an S Corporation for tax purposes?`,
      answer: [
        {
          text: `You could save yourself thousands of dollars a year. We’ve got a`,
        },
        {
          text: `handy calculator`,
          url: `/s-corporation-tax-calculator/`,
        },
        {
          text: `that shows you exactly how much you could reduce your self-employment tax burden.`,
        },
      ],
    },
    {
      question: `Do I have to file my S Corporation Tax Election at a certain time?`,
      answer: [
        {
          text: `Yes. There are certain limitations on when you can file form 2553.`,
        },
        {
          text: `This article`,
          url: "/research-topics/c-corporation-info/form-2553/",
        },
        {
          text: `gives you all the details you need.`,
        },
      ],
    },
    {
      question: `Can I file an S Corporation Tax Election if there are more owners in the business?`,
      answer: `Yes. S Corporation Tax Elections are available to most LLCs. For more information, speak to your accountant or attorney.`,
    },
  ],
};
