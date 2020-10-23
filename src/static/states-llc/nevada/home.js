import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in Nevada: Your Complete Guide`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Although it is most famed for Las Vegas, there's far more to the Silver State than entertainment and gambling. Bordered by four other states, Nevada enjoys an arid, desert climate and is famed for its extraordinary natural beauty, especially outside the major cities. Lake Tahoe, the Sierra Nevada Mountains and the Mojave Desert all draw sightseers from around the world. Although tourism and entertainment are a major part of the state’s economy, there are plenty of opportunities for many types of business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Nevada has long heralded itself as a favored state for incorporating, and it has been very popular with many business owners who are determined to incorporate outside of their home state. However, in recent years the fees to maintain a corporation or LLC have increased, meaning NV is no longer as competitive when compared to other states. However, Nevada does not have a state tax, which can make it an attractive option for reducing how much you pay the state government.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Nevada, one of the best ways to do so is by forming a Nevada LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Nevada LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Nevada LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your Nevada LLC`, `Easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 16,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Learn more about the benefits of the LLC business structure here.`,
      url: `/limited-liability-company/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In this guide, we’ll walk you through how to get an LLC in Nevada, as well as any special requirements or regulations you’ll need to consider.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps to Nevada LLC Formation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in NV. On this page you’ll find the basic steps of how to form a Nevada LLC, with more in-depth content throughout the rest of our guide.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Nevada LLC`,
          answer: `<p>You will need a distinctive and original name for your Nevada LLC that’s not used by any other business in NV. To find out if another company is using your chosen business name, carry out a Nevada business entity name search on the NV Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Nevada LLC.</p></br>
            <p><a href="/nevada-llc/how-to-name-your-llc/" target="_blank">Learn about Ohio Nevada business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your NV LLC`,
          answer: `Every Nevada LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Nevada and can be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Nevada LLC`,
          answer: `<p>Every NV LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Nevada Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your NV Registered Agent must have a physical street address in Nevada and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a Nevada Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/nevada-llc/registered-agents-nevada-llc/" target="_blank">Learn more about Nevada Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Nevada LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization With the Nevada Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Nevada LLC, you’ll need to file a formal document with the NV Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Nevada LLC. Here’s what is typically included:</p></br>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of managers or members of the LLC at the time of filing</li>
            <li>Addresses of managers or members of the LLC at the time of filing</li>
            <li>Name of the incorporator</li></br>
            <p>You can file your Nevada LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Nevada. You only need to file your Articles of Organization once.</p></br>
            <p><a href="/" target="_blank">Form your LLC now</a></p>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=ID
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Nevada Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The NV Secretary of State has plenty of information on forming and running a business in Nevada.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `These are all the basic steps for forming an LLC in Nevada. You’ll find other useful information below:`,
      list: [
        `<a href="https://www.nvsos.gov/sos/businesses/start-a-business" target="_blank" rel="noopener noreferrer">Nevada Secretary of State for forming and running your NV LLC</a>`,
        `<a href="http://business.nv.gov/" target="_blank" rel="noopener noreferrer">Nevada Department of Business and Industry for NV employers and hiring</a>`,
        `<a href="https://www.tax.nv.gov/" target="_blank" rel="noopener noreferrer">Nevada Department of Taxation for NV taxes.</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Nevada LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Nevada LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Professional LLCs`,
          answer: `<p>In Nevada, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master, umbrella LLC. These can be very useful if you don’t want to set up a separate Nevada LLC for every individual business you run.</p></br>
            <p><a href="/blog/post/series-llc-why-need-one/" target="_blank" >Decide if a Nevada Series LLC is right for your new business.</a></p>`,
        },
        {
          question: `Form a Professional Nevada LLC`,
          answer: `<p>Some states, including Nevada, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the NV Secretary of State allows to form Nevada professional LLCs:</p></br>
            <li>Architecture, interior design, residential design, engineering and landscape architecture</li>
            <li>Medicine, homeopathy, osteopathy and psychology</li>
            <li>Mental health services, psychologists, social workers, registered nurses, marriage and family therapists and clinical professional counselors</li>`,
        },
        {
          question: `Form a Professional Nevada LLC`,
          answer: `<p>If your business is already operating in another state and expanding to Nevada, you’ll need to form a foreign LLC.</p></br>
            <p><a href="/nevada-llc/form-filling-permit-requirements/" target="_blank" >More information on Nevada filing and licensing requirements here.</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Starting Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Nevada? We’ve got you covered.
      <a href="/after-forming-llc/" target="_blank">Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your Nevada LLC`,
      url: `/nevada-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Nevada business registry of the NV Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Nevada LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Nevada Registered Agents for Your LLC`,
      url: `/nevada-llc/registered-agents-nevada-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Nevada Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Nevada Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Nevada LLC`,
      url: `/nevada-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Nevada rules. Includes details of Employee Identification Numbers (EINs), Nevada and federal business licenses, Nevada Annual Reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Nevada LLC`,
      url: `/nevada-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Nevada government. Includes details of federal taxes like income and self-employment, and Nevada taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Nevada Secretary of State Business Search and Registering Your LLC Name`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your Nevada LLC. From searching for a business entity with the NV Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada Business Entity Search `,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Nevada LLC registered with your desired business name. That means searching the Nevada Secretary of State website using their business search tool. You can easily look up NV entities, LLCs and corporations by name and other details.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Nevada Secretary of State business name search tool.`,
      url: `https://www.nvsos.gov/sosentitysearch/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada Naming Rules Before You Register Your LLC Business`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Nevada Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in NV.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Standard LLC Naming Rules`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Nevada LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Nevada. This is why you should check business name availability on the NV SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your NV LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Nevada.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `For example, you cannot use the following factors to say your name is different from the name of another business:`,
      list: [
        `Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
        `Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
        `The singular, plural or possessive forms of a word`,
        `Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Contain Certain Words`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name May Have Other General Restrictions`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most states will not allow you to form LLCs with names that:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or NV agency or organization (e.g., FBI, FDA, Nevada Department of Taxation, Nevada Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that it would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Specific LLC Naming Rules for Nevada`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Nevada Secretary of State has some specific business naming rules for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will need to follow these rules if you want to name your NV business appropriately:`,
      list: [
        `The following words may not be used in the name or purpose of any entity without prior approval of the Commissioner of Financial Institutions: Bank, Banc, Banque, Savings & Loan, Banker, Bancard, Banq, Thrift, Banking, Banco, Bancor, Trustee, Interbanking, Bancorp, `,
        `Credit Union, Debt Collection, Collection Agency, Trust`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the Commissioner of Mortgage Lending: Financial, Mortgage, Mortgage Banking`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the Commissioner of Insurance: Adjuster, Indemnity, Reinsurance, Underwriter, Annuity, Insurance, Risk Retention Group, Underwriting, Casualty, Life & Accident, Surety, Bail, Bail Bonds, Fugitive Recovery, Bail Bondsman/men, Bounty Hunter, "bale"`,
        `The following words may not be used in the name of any entity without prior approval of the State Board of Engineers: Engineer, Professional Engineer, Engineered, Licensed Engineer, Engineering`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the Real Estate Division: Realtor`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the Ombudsman: Common-interest Community, Community Association, Hoa, Home Owners Association, Master Association, Unit-owners Association, Property OwneRS`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the Nevada State Board of Accountancy: Accountant, Accountancy, Accounting, Auditor, Auditing, Certified Public Accountant, CPA`,
        `The following words may not be used in the name or purpose of any entity without prior approval: College, University, Higher Education`,
        `The following words may not be used in the name or purpose of any entity without prior approval of the State Board of Architecture: Architect, Architectural, Architecture, Licensed Architect, Registered Architect, Licensed Residential Designer, Residential Design, Residential Designer, Registered Interior Design, Registered Interior Designer, Registered Residential Designer`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `More on Nevada Secretary of State business naming rules.`,
      url: `https://www.nvsos.gov/sos/businesses/commercial-recordings/restricted-word-list`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada LLC Fictitious Firm and “Doing Business As” (DBA) Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Nevada, doing business under a different name is known as a “Fictitious Firm Name” or “Doing Business As Name.”`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to use a different name from your NV formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Nevada Strip Entertainment Holdings LLC, and you have a chain called “Acrobatic Delights.” You should file a DBA name to let the Nevada Secretary of State know. You can have Incfile do this on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's assumed business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Nevada LLC Business Name`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Nevada business name, checked availability, followed the naming rules and decided whether you need a Fictitious Name, you can register your NV LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your Nevada LLC right now, you can reserve the business name with the Nevada Secretary of State. You will need to complete a “Name Reservation Request” and file it with the NV SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://www.nvsos.gov/sos/businesses/commercial-recordings/forms-fees/name-reservation" target="_blank" rel="noopener noreferrer">​Nevada SOS LLC name reservation form.</a><p>`,
      },
      {
        text: `If you’re ready to start your Nevada LLC, you can formally file your Articles of Organization with the Nevada SOS, or
          <a href="/" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=CO
      },
    ],
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `How Do I Search for My Nevada LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://www.nvsos.gov/sosentitysearch/" target="_blank">business name search tool</a> and enter your proposed business name. You can search the register of the Nevada Secretary of State, which will tell you if there are any NV corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Nevada LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Nevada). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Nevada?`,
          answer: `Yes. Known as “Assumed Names,” “Fictitious Names,” “Doing Business As Names” or “Trade Names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Nevada LLC?`,
          answer: `Yes. The Nevada Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might find these resources helpful.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Trademarks and Service Marks`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your Nevada LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Appeal to your customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name.`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Nevada Registered Agents and Your LLC`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Nevada Secretary of State requires every NV LLC to have a Registered Agent. Once you have assigned a Nevada Registered Agent, they can receive official correspondence and documents on behalf of your NV business. Registered Agents can be individuals or other specialized Registered Agent service businesses. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Nevada Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing NV Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Rules for Nevada Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Nevada Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Nevada`,
        `If the Registered Agent is a business, they must be able to conduct business in Nevada`,
        `The Registered Agent must have a physical street address in Nevada, not a P.O. Box`,
        `The NV Registered Agent must be available in person during normal business hours to sign for any correspondence`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `text`,
    content: `Note that the NV Registered Agent address does not need to be the same as your Nevada LLC business address. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Purpose of a Nevada Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Nevada Registered Agent carries out several valuable services for your business. They accept official communications and documents from the NV Secretary of State on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the Nevada Secretary of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Nevada LLC has legal proceedings issued against it)`,
        `Official Nevada and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Nevada LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Nevada Registered Agent service for any LLC that’s incorporated in NV. Even better, if you choose to incorporate your Nevada business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Nevada and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s NV Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Nevada Secretary of State or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's Nevada registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Nevada Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Nevada LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint a NV Registered Agent Service When You Create Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Nevada Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the Nevada Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the NV Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Nevada Registered Agent `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Nevada Registered Agent service for the first year, and we’ll include details of your NV Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through IncFile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Change Your Nevada Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your NV Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a “Statement of Change of Registered Agent by Represented Entity” Form With the Nevada Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Nevada Registered Agent, you can complete a form called “Statement of Change of Registered Agent by Represented Entity.” Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s Nevada Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our NV Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Nevada Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's Nevada registered agent service`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Nevada LLC. If you do, you can search the business database of the Nevada Secretary of State, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the NV Registered Agent isn’t available from the searchable business registry, contact the Nevada Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a Nevada Registered Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Nevada Secretary of State?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Nevada Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.`,
        `Losing your status as a Nevada LLC: A NV Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Nevada LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Registered Agent for Your NV LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Nevada, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The NV Registered Agent must have a physical street address in Nevada. If you’re forming an LLC outside NV, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Nevada address to sign for important documents.`,
        `The NV Registered Agent’s name and address are part of the public record and available through the Nevada Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Nevada business address or move out of state, you would need to file additional documentation with the NV Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Nevada Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Nevada Registered Agent?`,
          answer: `Yes. All NV LLCs are required to have a Registered Agent. This is mandated by the Nevada Secretary of State.`,
        },
        {
          question: `When Can I Assign a Nevada Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Nevada business through paperwork filed with the NV Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Nevada?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Nevada Secretary of State.`,
        },
        {
          question: `Does My NV Registered Agent Need to Have an Address in Nevada?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Nevada Registered Agent Services`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a Nevada Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Nevada Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Nevada Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Nevada Business Licenses, Fees and Filing Requirements for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Different types of businesses have different requirements in Nevada, including related fees and costs. Your NV LLC needs to pay various fees to the federal government, Nevada government and other agencies. Some of these fees are levied by the Nevada Secretary of State or statewide organizations, while others come from the federal government. You may also need to acquire business licenses for your Nevada LLC. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Nevada business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada LLC Formation Costs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Nevada, you’ll need to file an LLC with the NV Secretary of State and pay a Nevada filing fee. Here are the current fees and filing times for Nevada:`,
    marginBottom: 16,
  },
  {
    type: `table-simple`,
    content: {
      headers: [`State Fee`, `State Filing Time`, `Expedited Filing Time`],
      rows: [[`$425`, `3 weeks`, `2 days`]],
    },
  },
  {
    type: `arrow-link`,
    content: {
      text: `Compare State Filing Times `,
      url: `/state-filing-times/`,
    },
    marginBottom: 8,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Compare State Filing Prices`,
      url: `/state-filing-fees/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you form your NV LLC through Incfile, we automatically forward this fee to the Nevada Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Nevada</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Nevada LLC through IncFile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/State Tax ID for Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Nevada LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Nevada LLC through IncFile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Nevada`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Nevada LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. This is typically necessary if you have a physical presence, employees or banking in a different state than Nevada. Fees and requirements for Foreign Qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get a foreign qualification/certificate of authority through IncFile`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Annual Reports for Nevada LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states, including Nevada, need you to file a report annually (or on another timeline) with their secretary of state. When you file your NV LLC Annual Report, you will also need to file a business license. Here are the annual filing requirements for Nevada:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Annual Report`,
      list: [
        `Frequency:  Annually`,
        `Due Date:  Due by the last day of the anniversary month of filing.`,
        `Note:  LLCs registered after September 30th of the preceding year are exempt from filing the report in the subsequent year. `,
        `Filing Fee:  $350`,
        `Important: The Initial Annual Report and Business Licence are filed with the  articles of organization.  As such, the $350 fee is added to the $75 filing fee and used to satisfy payment for both the Initial Annual Report and Business License.`,
        `*Client will be responsible for filing Annual Report and Business License in subsequent years. `,
      ],
    },
    marginBottom: 16,
    color: color.blue2,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Nevada LLC filing requirements</a> and business filing deadlines with our helpful Nevada ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Nevada Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada Business Licenses and Permits`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some NV LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Nevada LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Nevada LLC (state, county or city) (e.g., a license to conduct business from the city of Las Vegas)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `list-dot`,
    content: {
      header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Nevada LLC will need`, `The application forms you will need to file with the Nevada, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Nevada and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada LLC Operating Agreements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Nevada business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Nevada Fees or Requirements for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Nevada LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your NV business to trade under a different name, you can file a form with the Nevada Secretary of State. You will need to pay a Nevada filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Nevada Registered Agent for Your NV LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Nevada LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new NV Registered Agent later. Incfile provides a complete Nevada Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your NV business right away, you can reserve a name with the Nevada Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Nevada business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Nevada Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Nevada Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Nevada LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Nevada LLC`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Nevada LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Nevada Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Nevada certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard NV LLC will be required to pay. In some circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Nevada LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for NV LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Nevada LLC Costs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Nevada LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Nevada business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Nevada, require you to file a report for your LLC every year. In Nevada, you will also need to pay a fee for an annual business license. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Nevada LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Nevada LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Nevada LLC Taxes`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your NV LLC will need to pay a variety of taxes to both the federal and Nevada governments. We’ll cover all the main taxes in Nevada including self-employment, payroll, federal and Nevada sales tax. Nevada does not enforce a state tax on its residents.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Nevada LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Nevada LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Nevada LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Nevada LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some NV LLCs pay Nevada sales tax on products`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees`,
      },
      {
        text: `Employees pay federal and payroll tax on their earnings`,
      },
    ],
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Items 1 and 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Nevada personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada State Income Tax Payable on LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Nevada does not levy a state income tax on LLC or other earnings, so there is no NV state tax to pay.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Nevada Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the NV Department of Taxation. Nevada sales tax is collected at the point of purchase. Nevada sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Nevada sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Nevada business might provide`],
    },
    marginBottom: 16,
    color: color.purple3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get details on the Nevada sales tax online here.`,
      url: `https://www.nevadatax.nv.gov/`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Nevada Sales Tax Rates`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your Nevada LLC: Self-Employment and Income Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Nevada LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Nevada LLC Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Nevada LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Nevada business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590`, `On profits of $60,000, you would pay self-employment tax of $9,180`, `On profits of $90,000, you would pay self-employment tax of $13,770`, `On profits of $140,000, you would pay self-employment tax of $21,420`],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Nevada LLC as an S Corporation`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile form 2553 S Corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Nevada LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Nevada LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Nevada LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Nevada LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare or retirement. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Nevada LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer Payroll Tax Withholding for Your Nevada LLC `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer Federal Tax Withholding for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employees May Need to File Tax Returns`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Regardless of whether you withhold federal income tax, your employees may need to file their own tax returns.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Nevada LLC Employee Insurance and Other Requirements`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get more requirements from the Nevada Department of Business and Industry website.`,
      url: `http://business.nv.gov/`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Nevada LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Nevada LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most Nevada LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Nevada LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Nevada LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Nevada Have Sales Tax?`,
          answer: `Yes. Nevada does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Nevada Have a State Tax?`,
          answer: `No, Nevada does not have a general state income tax.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes for your federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const compare = {
  header: `How We Compare. <br>Get more more for less.`,
  table: {
    headers: [null, `Incfile`, `LegalZoom`, `ZenBusiness`],
    rows: [
      [`Business incorporation service`, `$49`, `$149`, `$149`],
      [`Registered Agent included in the price`, `check-green`, `check-red`, `check-red`],
    ],
  },
};

export const requirements = {
  header: `Fees and requirements in California.`,
  rows: [
    {
      box: {
        fields: [
          {
            header: `$75`,
            text: `State fee`,
          },
          {
            header: `15 days`,
            text: `State filing time`,
          },
          {
            header: `5 days`,
            text: `Expected filling time`,
          },
        ],
      },
      content: {
        columns: [
          {
            content: [
              {
                type: `heading`,
                size: 3,
                content: `Filing time and price`,
              },
              {
                type: `paragraph`,
                content: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
              },
              {
                type: `paragraph`,
                content: `Ut tincidunt neque a viverra egestas. Suspendisse tempus metu.`,
              },
              {
                type: `arrow-link`,
                content: {
                  text: `State Filing Times`,
                  url: `/`,
                },
                bottomMargin: 16,
              },
              {
                type: `arrow-link`,
                content: {
                  text: `State Filing Prices`,
                  url: `/`,
                },
              },
            ],
          },
          {
            header: `Compliance  Requirements`,
            text: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state.`,
            text2: `Failure to file this report can lead to the company being revoked or administratively dissolved.`,
            link: {
              text: `Other State's Ongoing`,
              url: `/`,
            },
          },
        ],
      },
    },
    {
      box: {
        fields: [
          {
            header: `Annually`,
            text: `Frequency`,
          },
          {
            header: `$800 (min)`,
            text: `Filing fee`,
          },
        ],
      },
      content: {
        header: `California Franchise Tax`,
        text: `$800 payment for the LLC Franchise Tax is due by 15th day of the 4th month after your LLC is filed. The month your LLC is filed counts as Month 1, regardless if you file on the 1st of the month, the last of the month, or any day of the month, really.`,
        text2: `This means that if you were to file your LLC on March 22nd, then you must pay the $800 fee no later than June 15th (in this example, March is Month 1, April is Month 2, May is Month 3, and June is Month 4). Then, every year after your first payment $800 LLC Franchise Tax will be due April 15th. You pay the $800 LLC Franchise Tax using Form 3522 called the LLC Tax Voucher.`,
      },
    },
    {
      box: {
        fields: [
          {
            header: `Biennially`,
            text: `Frequency`,
          },
          {
            header: `$20`,
            text: `Filing fee`,
          },
        ],
      },
      content: {
        header: `Statement of Information`,
        header2: `Due Date:`,
        text: `During six-month period ending on last day of anniversary month of incorporation or qualification.`,
        header3: `Important:`,
        text2: `The initial Statement of Information filing is due within 90 days of the entity formation date.`,
      },
    },
  ],
};
