export const top = {
  header: `Want to keep more of your tax money?`,
  text: `See how an S Coporation could be the right choice to help your business save money on taxes each year.`,
  button: [
    {
      text: "Form Your S Corp Now",
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=SCorporation`,
    },
  ],
};

export const hsForm = {
  header: "Download our Complete Guide to S Corporation",
  text: "Not sure what an S-Corp is? This guide has everything you'll need to know!",
  hs_form_id: `3ff93dce-f089-4dd8-9cbb-2cdea60f2aa6`,
  button: {
    text: "Download now",
    url: "/",
  },
};

export const about = {
  tabs: {
    panels: [`What is an S Corp`, `S Corp, C Corp or LLC?`],
    content: [
      {
        header: `What is an S Corp?`,
        text: `Seeing your small business start to succeed and grow into a well-established company is a dream come true for entrepreneurs. But as your company grows, your tax rate tends to grow too. Growing companies face a variety of complexities during tax season, and that’s why when your company starts growing, you may want to consider forming an S Corporation, otherwise known an S Corp. The S Corp is a business entity that offers significant tax advantages while still preserving your ownership flexibility.`,
        box: {
          text: `An S Corp, also known as the subchapter or small business corporation, is a tax code that was enacted into law by Congress in 1958. The S Corp was created to encourage and support the creation of small and family businesses, while eliminating the double taxation that conventional corporations were subjected to.`,
        },
      },
      {
        header: `What Is a C Corporation?`,
        text: `A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. 
            A C Corp is simply a way to structure ownership of a business, and contrasts with other popular business structures including Limited Liability Companies (LLCs), S Corporations, Sole Proprietorships and others.`,
        card: {
          header: `Generally, a C Corporation structure is better for larger businesses. `,
          text: `This is particularly true if they intend to publicly trade shares, through having an Initial Public Offering, or IPO. 
              A C Corporation is much more attractive to potential investors, including venture capitalists and shareholders because it allows wider ownership of the corporation.`,
        },
        text2: `The majority of larger businesses in the United States are structured as C Corporations, although a C Corp could, theoretically, consist of just one person. 
            The information below will help you decide if a C Corporation structure is right for your business.`,
      },
    ],
  },
};

export const adventages = {
  header: `The Advantages of S Corporations`,
  text: `S Corporations offer several advantages if your company qualifies:`,
  cards: [
    {
      header: `Tax advantages`,
      text: `S Corporations are exempt from federal income tax except for certain capital gains and passive income. Similar to the LLC, the S Corporation allows profit to pass through to its shareholders, and the income is then taxed on the shareholders’ personal tax returns at each shareholder’s individual tax rates. Because the S Corporation is a pass-through entity, this ensures that the corporation’s profits are only taxed once – at the shareholder level. This means that S Corporations avoid having to pay what is often referred to as “double taxation” of dividends. See how much you can save with our <a href="/s-corporation-tax-calculator/">S Corporation Tax Calculator.</a>`,
    },
    {
      header: `Asset protection`,
      text: `If your business is an S Corporation, you have certain legal protections for your personal assets which are separate from the assets of the business. For example, shareholders are not personally liable for the company’s debts or liabilities, and for the most part, creditors are not able to go after the shareholders’ personal assets in order to recover business debts.`,
    },
    {
      header: `Flexible characterization of income`,
      text: `Being an owner of an S Corporation gives you flexibility in how to characterize your income for tax purposes. As the owner/shareholder of an S Corp, you can be an employee of the business and pay yourself a salary. In addition to your salary, you can also pay yourself dividends from the S Corporation or distributions that are generally tax-free or taxed at a lower rate than the employee’s salary. This helps you reduce your self-employment tax liability, as long as you are characterizing your salary and dividends/distributions in a reasonable way. The IRS does not want to see you paying yourself an artificially low salary in order to avoid paying self-employment taxes on the “dividend/distribution” portion of your income.`,
    },
    {
      header: `Easy transfer of ownership`,
      text: `S Corporation ownership interests are easy to transfer to other owners without causing significant tax consequences or terminating the corporate entity. An ownership transfer of an S Corporation does not require adjustments to property basis or compliance with complicated accounting rules.`,
    },
  ],
};

export const disadventages = {
  header: `Drawbacks of an S Corporation`,
  text: `The S Corporation structure is not right for every business’s situation, and it presents certain drawbacks and downsides:`,
  cards: [
    {
      header: `Restrictions on Ownership`,
      text: `S Corporations do not have the same degree of flexibility in their ownership structure, compared with a C Corporation. S Corps can only offer one class of stock, which limits the appeal to different types of investors. Also, the S Corp can only have 100 shareholders (or fewer) and cannot be owned by foreign shareholders or by certain trusts or other corporate entities.`,
    },
    {
      header: `Caution about Wages and Dividends`,
      text: `One of the great aspects of the S Corporation is its flexibility in characterizing income as wages or dividends, but this can also present challenges. The IRS is always on the lookout for business owners that are not fairly or accurately characterizing their payments of wages, so as an S Corporation owner, you have the risk of being asked to re-characterize some of your income and pay higher taxes as a result.`,
    },
    {
      header: `Tax Qualification Mistakes`,
      text: `This is a rare scenario, but it does happen – sometimes, S Corp owners will make mistakes related to their IRS form filing requirements related to stock ownership, election, consent, notification and other aspects of running an S Corp, and this can cause the company to lose its S Corporation status.`,
    },
  ],
};

export const requirements = {
  header: `Requirements for S Corp`,
  text: `According to the IRS, to qualify for S Corporation status, a business must meet these requirements:`,
  list: [
    `Be a domestic corporation`,
    `Have only allowable shareholders – which may include individuals, certain trusts, and estates, but not partnerships, corporations or 	 nonresident alien shareholders`,
    `Have only one class of stock`,
    `Not be an ineligible corporation (i.e. certain financial institutions, insurance companies, and domestic international sales corporations)`,
    `The corporation must also submit Form 2553 to elect S Corporation status for tax purposes.`,
  ],
};

export const differences = {
  header: `What Are the Differences Between an  S Corp, C Corp and LLC?`,
  text: `See how a C Corporation compares to other entities:`,
  box: {
    header: `Enterpreneur 360 (2019)`,
    text: `One of the main differences between C Corps and S Corps / LLCs are how income from the different types of businesses are taxed.`,
  },
  table: {
    headers: [`Entity Type`, `LLC`, `C-Corp`, `S-Corp`, `Non-Profit`],
    rows: [
      [`Has to file a separate tax return`, `Varies`, `check-red`, `check-red`, `check-green`],
      [`Can pass on their profits to shareholders as dividends`, `Varies`, `check-red`, `check-green`, `check-green`],
      [`Is Limited to having a maximum of 100 shareholders`, `Varies`, `check-green`, `check-red`, `check-green`],
    ],
  },
};

export const rocket = {
  header: `Launch`,
  header2: `your business with Incfile`,
  text: `No Contracts. No Surprise.`,
  text2: `Only $0 + State Fee to Launch Your Business.`,
  button: {
    text: `launch your business`,
    url: `/`,
  },
};

export const faq = {
  header: `Common questions on starting S Corporation`,
  link: {
    text: `See all`,
    url: `/research-topics/s-corporation-info/`,
  },
  faq: {
    items: [
      {
        question: `Can a foreign resident be a shareholder in an S Corporation?`,
        answer: `In order to be eligible to be a shareholder of an S-Corporation the individual would need to be classified as a “Resident Alien”. A “Resident Alien” has the legal capacity to work and pay taxes in the United States and therefore should possess a Social Security Number (SSN) or a Individual Taxpayer Identification Number (ITIN).`,
      },
      {
        question: `Is there a limit to the amount of shareholders an S Corporation can have?`,
        answer: `An S Corporation formed before 2004 was limited to 75 shareholders however the limit of shareholders for any S Corporation formed after 2004 was increased to 100 shareholders.`,
      },
      {
        question: `Which entity offers the best tax advantages?`,
          answer: [
              {text: `There are two main types of corporations the S-Corporation and the C-Corporation.`},
              {text: `Every corporation is considered a C corp when it is formed with the Secretary of State. The distinction is made on a federal level and processed by the IRS.`},
              {text: `Corporation that want to be taxed a small business corporation file a form with the IRS called Form 2553 and will file their taxes using 1120s tax return. Corporations that do not file this form are taxed as traditional corporations and file the 1120 tax return.`},
              {text: `A C-corporation file a corporate tax return and will pay taxes on the profits. The post tax income may then be distributed to the corporation shareholders in the the form of dividends. The shareholders are then taxed on dividends, which effectively forces the ownership of a corporation to pay taxes on the same earnings twice- once at the corporate level, and then as individual level. This is what is known as “double taxation.”`}
          ],
      },
    ],
  },
};
