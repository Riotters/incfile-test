export const top = {
  header: 
    `Filing Your Business Taxes With Ease`,
  text: 
    `Eliminate the hassle of filing taxes for your LLC, S Corp, C Corp or Nonprofit. Work with a tax professional.`,
}


export const typesOfTaxes = {
  header: 
    `Different types of business taxes`,
  text: 
    `When tax season comes, it’s important to understand your options for filing business taxes. IRS requirements for small business taxes can be more or less complex, depending on the type of business entity. 
    For example, LLC taxes are usually quite simple, while dealing with S Corp taxes can be more complicated and requires a specialized S Corp tax return. However, filing as an S Corporation could save you tax dollars. 
    Meanwhile, if your company is a C Corporation, you need to pay C Corp tax rates on any qualifying corporate profits.`,
  link: {
    text: 
      `Filing as an S Corporation could save you tax dollars`,
    url: 
      `#`,
  },
  text2:
    `Filing a business tax return is part of the annual requirements for managing your small business taxes. Just like your personal tax return, the IRS expects your business to file a business tax return even if your business does not owe taxes.`,
  text3:
    `Here are a few key points to keep in mind when filing business taxes, depending on your choice of business entity:`,
  llcTAxes: {
    header: 
      `LLC Taxes`,
    text: 
      `A Limited Liability Company (LLC) is generally treated as a “pass through” entity or “disregarded entity” for tax purposes, which means that your LLC does not pay taxes itself; 
      all of the LLC’s profits or losses are “passed through” directly to the personal tax returns of the LLC partners.`,
    text2: 
      `However, just because the LLC is a pass through entity does not mean that your LLC does not have to file any tax forms. Your LLC has to file:`,
    list: [
      {
        header: 
          `Form 1065`,
        text: 
          `Partnership Return of Income`,
      },
      {
        header: 
          `Schedule K-1`,
        text: 
          `Per each member`,
      }
    ],
    text3:
      ` If your LLC is a single-member LLC, you need to report the income from your LLC on your personal tax return using Schedule C, and your business will be taxed as a sole proprietorship unless you elect to be classified differently. 
      If you have multiple members in your LLC, your LLC will be treated as a partnership for tax purposes. 
      If you are a two-member LLC, and both members are a married couple, you have the option to elect your tax classification as a single-member or multimember (partnership) LLC. But take note — this caveat only applies to the nine community property states:`,
    list2: [
      "Arizona",
      "California",
      "Idaho",
      "Louisiana",
      "Nevada",
      "New Mexico",
      "Texas",
      "Washington",
      "Wisconsin",
    ],
    text4:
      `Alaska is an opt-in community property state that allows the option to choose to make your property community property with your spouse. 
      "Community property" essentially means that property is owned jointly by both spouses and is divided upon death, annulment or divorce.`,
    text5:
      `The LLC structure offers owners some important flexibility for tax purposes; with an LLC, you can elect to have your LLC file as an S Corporation for tax purposes as described below`,
  },
  sCorpTaxes: {
    header:
      `S Corp Taxes`,
    text:
      `If you set up your company to be an S Corporation, or elect to have your LLC file taxes as an S Corporation, this can have some tax advantages to reduce your self-employment tax liability. However, filing as an S Corporation requires you to file`,
    list: [
      {
        header:
          `Form 8832`,
        text:
          `Entity Classification Election`,
      },
      {
        header:
          `Form 1120S`,
        text:
          `Corporation Income Tax Return`,
      },
      {
        header:
          `Form 1120-A`,
        text:
          `A shortened version of the 1120S form`,
      }
    ],
    text2:
      `S Corporations, like LLCs, do not have to pay corporate income tax. Instead, the company’s income gets passed through to the owners and is reported on the company owners’ personal income tax returns. 
      The tax treatment of S Corporations is different from LLCs, in that the company owner(s) can choose to pay the members a salary (subject to self-employment taxes) and also assign additional 
      income to be treated as a distribution, which is not subject to self-employment taxes. This can give the owners some flexibility in how they pay themselves from the company’s profits, as well as reduce their self-employment taxes.`,
    header2:
      `Review how the S-Corporation can considerably reduce your self employment tax obligations with our`,
    link: {
      text:
        `S Corporation Tax Calculator`,
      url:
        `#`,
    }
  },
  cCorporationTaxes: {
    header: 
      `C Corporation Taxes`,
    text: 
      `A C Corporation is required to pay corporate income tax. Unlike an LLC or S Corporation, this type of business structure is not a “pass through” entity. 
      That means that your C Corporation will be required to pay taxes on the business’s income, and then the business owners will also have to pay personal income tax upon the taxable dividends paid to the owners by the business. 
      This situation is known as “double taxation” because your company has to pay corporate income tax first, and then you as the business owner have to pay personal income tax.C Corporations are required to file:`,
    list: [
      {
        header: 
          `Form 1120`,
        text: 
          `Corporation Income Tax Return`,
      },
      {
        header: 
          `Form 1040`,
        text: 
          `the owners must report their income from the C Corporation (salary and any dividends) on their personal tax returns`,
      }
    ],
    text2:
      `As the owner of a C Corporation, if you pay yourself a salary, you will also have to pay personal income taxes and FICA withholdings (self-employment taxes, etc.) based on your salary.`,
    text3:
      `Filing small business taxes can be complicated and often requires the assistance of professional tax advisers. Getting professional tax help can often make the difference in avoiding costly errors or failing to comply with IRS rules. 
      With that in mind, Incfile has teamed up with an accredited certified public accounting firm that specializes with small business owners nationwide to help you with your tax filing needs this coming tax season.`,
    text4:
      `Since tax season is right around the corner and comes swiftly when you're a busy business owner, we wanted to give you access to a CPA to get your personal and business tax returns prepared professionally. 
      If you have a Partnership, S Corporation or a C Corporation, you will have to file a business tax return regardless of whether you have any activity or not in 2016. 
      Those of you who have single-member LLCs might have a filing requirement for the business as well, but that depends on whether you had activity in 2016 and some states required some form of filing regardless of inactivity.`,
  },
  card: {
    header:
      `Learn more about taxes`,
    inputs: [
      {
        label:
          `Name`,
        placeholder:
          `John Smith`,
      },
      {
        label:
          `Email`,
        placeholder:
          `Your email address`,
      },
      {
        label:
          `Phone number`,
        placeholder:
          `Your phone number`,
      },
    ],
    button: {
      text:
        `Yes, contact me to learn more`,
      url:
        `#`,
    },
  },
}

export const taxReturn = {
  header: 
    `Tax Return Due Dates`,
  table: {
    headers: [
      `September 15 2020`,
      `September 15 2020`,
    ],
    rows: [
      [`S Corporations`, `One Owner LLC`],
      [`C Corporations`, `Partnerships`],
      [``, `Personal 1040`],
      [``, `Multi- Member LLC`],
    ]
  },
}

export const pricing = {
  header:
  `Simple and affordable pricing. No hidden fees`,
  cards: [
    {
      header:
        `Business tax return`,
      price:
        `599`,
      text:
        `$299 Zero-Income Tax Return `,
      bracket:
        `(no activity to report)`,
    },
    {
      header:
        `Personal tax return`,
      price:
        `299`,
      text:
        `1040 Tax Return`,
      bracket:
        `($250 if you don’t have a state return)`,
    },
  ],
  text: 
    `15% combined discount if you have both your Business and Personal returns prepared.`,
}

export const benefits = {
  header:
    `What are the benefits?`,
  cards: [
    {
      header:
        `Ease the burden`,
      text:
        `Some tax returns can be complicated. A small-business owner who itemizes his deductions has to complete and file IRS 1040, Schedule A, Schedule C and Schedule SE, among other forms.`
    },
    {
      header:
        `Reduce Errors`,
      text:
        `While we are all human and not perfect, the chances of making a simple mistake on a return are reduced when you use a professional tax service.`
    },
    {
      header:
        `Professional Tax Advice`,
      text:
        `The tax rules are complicated. Before you can use a deduction or credit, you must qualify for it. A tax professional can help find deductions and credits for which you qualify for, and can give advice on certain tax issues.`
    },
    {
      header:
        `Avoid Adverse Consequences`,
      text:
        `When you sign the end of your tax return, you declare that the information is true and accurate to the best of your knowledge. 
        If the IRS audits your return and finds errors, you could face potentially serious legal consequences. Having a professional prepare your tax return adds a little safeguard to potential liability.`
    }
  ]
}

