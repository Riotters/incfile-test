import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Pennsylvania`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Pennsylvania is a great place to start a business and is among the top 10 most prosperous states in the country. Located in the eastern U.S., it has a rich history as one of the original 13 colonies and is where the Declaration of Independence and U.S. Constitution were drafted. Pennsylvania is home to some of the biggest insurance and financial businesses in addition to 50 Fortune 500 companies.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in Pennsylvania is by creating a Pennsylvania LLC. A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Pennsylvania corporations but with much simpler rules and regulations.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Pennsylvania LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Pennsylvania LLC`, `Easy tax filing and potential advantages for tax treatment`],
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
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps to Forming an LLC in PA`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Pennsylvania LLC, but you can break down the basics of forming a business in PA into just a few simple steps.`,
    marginBottom: 24,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Pennsylvania LLC`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in Pennsylvania. To find out if another company is using your chosen business name, carry out a business entity name search on the PA Department of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Pennsylvania LLC.</p></br>
            <p><a href="/pennsylvania-llc/pennsylvania-business-names/">Learn about Pennsylvania LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for your PA LLC`,
          answer: `Every Pennsylvania LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Pennsylvania, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Pennsylvania LLC`,
          answer: `<p>Every PA LLC must have a “Registered Agent,” known in Pennsylvania as a “Commercial Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Pennsylvania Department of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your PA Registered Agent must have a physical street address in Pennsylvania and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/pennsylvania-llc/registered-agents-pennsylvania-llc/" target="_blank">Learn more about Pennsylvania Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or Incfile can get one for you as part of the Pennsylvania LLC business formation process.`,
        },
        {
          question: `STEP 6: File A Certificate of Organization With the Pennsylvania Department of State`,
          answer: `<p>Once you've gathered all the information together for your Pennsylvania LLC, you’ll need to file a formal document with the PA Department of State. This document is known as your “Certificate of Organization,” and filing the document creates your Pennsylvania LLC. Here’s what is typically included:</p></br>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of organizers of the LLC at the time of filing</li></br>
            <p>You can file your Pennsylvania LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Pennsylvania. You only need to file your Certificate of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Pennsylvania Department of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Secretary of State has plenty of information on forming and running a business in Pennsylvania.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The PA Department of State has plenty of additional information on forming and running a business in Pennsylvania:`,
      list: [
        `<a href="https://www.dos.pa.gov/BusinessCharities/Business/Resources/Pages/Pennsylvania-Limited-Liability-Company.aspx" target="_blank" rel="noopener noreferrer">Pennsylvania Department of State for forming and running your PA LLC.</a>`,
        `<a href="https://www.dli.pa.gov/Pages/PageNotFoundError.aspx?requestUrl=https://www.dli.pa.gov/Businesses/Pages/Services-and-Information-for-Employers.aspx" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Labor for PA employers and hiring.</a>`,
        `<a href="https://www.revenue.pa.gov/OnlineServices/BusinessTaxes/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue for PA taxes.</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Pennsylvania LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Pennsylvania LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional Pennsylvania LLC`,
          answer: `<p>Some states, including Pennsylvania, allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. Here are the occupations that the PA Department of State allows to form Pennsylvania professional LLCs:</p></br
            <ul>
                <li>Chiropractic</li>
                <li>Dentistry</li>
                <li>Law</li>
                <li>Medicine and surgery</li>
                <li>Optometry</li>
                <li>Osteopathic medicine and surgery</li>
                <li>Podiatric medicine</li>
                <li>Public accounting</li>
                <li>Psychology</li>
                <li>Veterinary medicine</li>
            </ul>`,
        },
        {
          question: `Form a Foreign LLC in Pennsylvania`,
          answer: `<p>If your business is already operating in another state and expanding to Pennsylvania, you’ll need to form a foreign LLC.</p></br>
            <a href="/pennsylvania-llc/form-filling-permit-requirements/" target="_blank">More information on Pennsylvania filing and licensing requirements here</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Pennsylvania LLC`,
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
      text: `Naming Your Pennsylvania LLC`,
      url: `/pennsylvania-llc/pennsylvania-business-names/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Pennsylvania business registry of the PA Department of State and find the right name. Includes information on naming rules, fictitious names, reserving a Pennsylvania LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Pennsylvania Registered Agents for Your LLC`,
      url: `/pennsylvania-llc/registered-agents-pennsylvania-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Pennsylvania Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Pennsylvania Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Pennsylvania LLC`,
      url: `/pennsylvania-llc/fees-filing-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Pennsylvania rules. Includes details of Employee Identification Numbers (EINs), Pennsylvania and federal business licenses, Pennsylvania annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes forYour Pennsylvania LLC`,
      url: `/pennsylvania-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Pennsylvania government. Includes details of federal taxes like income and self-employment and Pennsylvania taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `PA Entity Searches & Naming Your Pennsylvania LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Pennsylvania business name or registering your LLC with the PA Department of State, we can help. We’ve got all the information you need on Pennsylvania business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `PA Corporation Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Before you register your business, you need to confirm that there's not already a registered Pennsylvania LLC that has your desired business name. This requires a search of the PA Secretary of State website, referred to in Pennsylvania as the Department of State. The PA DOS has a business search tool where you can easily look up PA LLCs and corporations by name and other details. A PA business name search verifies that your name is available for you to use and not taken by another PA entity.`,
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
      text: `Pennsylvania Business Entity Search Tool.`,
      url: `https://www.corporations.pa.gov/search/corpsearch`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania Secretary of State Rules for Business Names`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Pennsylvania Department of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in PA.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Business Name Availability Rules`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules as they will influence the name you choose for your Pennsylvania LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Pennsylvania. This is why you should check business name availability on the PA DOS website.`,
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
    content: `It’s not enough for your PA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Pennsylvania.`,
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
        `Are very similar to the name of a federal or PA agency or organization (e.g., FBI, FDA, Pennsylvania Department of Revenue, Pennsylvania Police, Treasury, etc.)`,
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
    content: `Specific Pennsylvania Business Name Availability Rules`,
    size: 4,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Pennsylvania Department of State has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your PA business appropriately.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are certain prohibited and restricted words that have limitations on how they can be used in a Pennsylvania LLC name.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `These include:`,
      list: [
        `"bank," ‘‘banking," ‘‘banker," ‘‘trust," ‘‘college," ‘‘university," ‘‘seminary," ‘‘certified public accountant," ‘‘public accountant," ‘‘architect," ‘‘architecture," ‘‘engineer," "engineering," ‘‘surveyor," ‘‘surveying," ‘‘pharmacist," ‘‘druggist," ‘‘apothecary," ‘‘drug store," ‘‘pharmacy," ‘‘drugs," ‘‘medicine store," ‘‘medicines," ‘‘drug shop," ‘‘pharmaceutical," ‘‘homeopathic," ‘‘homeopathy," “‘annuity," ‘‘assurance," ‘‘beneficial," ‘‘bond," ‘‘casualty," ‘‘endowment," ‘‘fidelity," ‘‘fraternal," ‘‘guaranty," ‘‘indemnity," ‘‘insurance," ‘‘insurer," ‘‘reassurance," ‘‘reinsurance," ‘‘surety," ‘‘title" ‘‘mutual," or “electricity or gas utilities.”`,
      ],
    },
    marginBottom: 16,
    color: color.green2,
  },
  {
    type: `arrow-link`,
    content: {
      text: `More on Pennsylvania Department of State business naming rules.`,
      url: `https://www.dos.pa.gov/BusinessCharities/Business/Documents/FEB2018%2021460%20Guide%20to%20Business%20Registration.pdf`,
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Pennsylvania LLC Fictitious Names`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Pennsylvania, this is known as a “Fictitious Name.” You might choose to use a different name from your PA formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Pennsylvania Sports and Leisure Holding Company LLC and you have a chain called Daper’s Hockey Gear. You should file a fictitious name to let the Pennsylvania Department of State know. In Pennsylvania, you do that through a Fictitious Name Registration form [DSCB:54-311], or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's assumed business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Business Name With the Pennsylvania Department of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Pennsylvania business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your PA LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `If you don’t want to form your Pennsylvania LLC right now, you can reserve the business name. You will need to complete a form and file it with the PA DOS. You do not need to reserve a name if you are forming your business right away.`,
      },
      {
        text: `If you’re ready to start your Pennsylvania LLC, you can file your Certificate of Formation with the Pennsylvania Department of State, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Pennsylvania LLC`,
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
          question: `How Do I Search for My Pennsylvania LLC Business Name?`,
          answer: `<p>You can search the register of the Pennsylvania Department of State, which will tell you if there are any PA corporations or LLCs with that name. Just go to the <a href="https://www.corporations.pa.gov/search/corpsearch" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Pennsylvania Secretary of State, which will tell you if there are any corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Pennsylvania LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Pennsylvania). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Pennsylvania?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name.`,
        },
        {
          question: `Can I Reserve a Name for My Pennsylvania LLC?`,
          answer: `Yes. The Pennsylvania Department of State allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Pennsylvania LLC`,
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
    content: `You must be careful that your Pennsylvania LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Pennsylvania LLC`,
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
    content: `Learn About Pennsylvania Registered Agent Services`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your PA LLC must assign a Pennsylvania Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the Pennsylvania Department of State. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Unlike many other states, PA only requires you to list the registered office (not the name) of your Registered Agent. This is known as a Commercial Registered Office Provider (CROP). We will use those names interchangeably in this section.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Pennsylvania Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing PA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania LLC CROP Service Rules`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Pennsylvania Registered Agent or CROP service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Pennsylvania`,
        `If the Registered Agent is a business, they must be able to conduct business in Pennsylvania`,
        `The Registered Agent must have a physical street address in Pennsylvania, not a P.O. Box`,
        `The PA Registered Agent must be available in person during normal business hours to sign for any correspondence`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Note that the PA Registered Agent address does not need to be the same as your Pennsylvania LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Purpose of a Pennsylvania Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Pennsylvania Registered Agent or CROP carries out several valuable services for your business. They accept official communications and documents from the PA Department of State on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the Pennsylvania Department of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Pennsylvania LLC has legal proceedings issued against it)`,
        `Official Pennsylvania and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `A Complete Pennsylvania Registered Agent Service from Incfile`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Pennsylvania and you need a PA Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Pennsylvania business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `To "We are authorized to conduct business in Pennsylvania and can legally act as your Commercial Registered Office Provider.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s PA Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Pennsylvania Department of State or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Pennsylvania corp service`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing a PA CROP Service for Your Pennsylvania LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Pennsylvania LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Pennsylvania CROP When You Form Your PA LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Pennsylvania Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Certificate of Organization With the Pennsylvania Department of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Organization. This is the form that you file with the PA Department of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Pennsylvania CROP`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Organization based on the information you’ve provided. Additionally, we give you a free Pennsylvania Registered Agent Service for the first year, and we’ll include details of your PA Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign a Different Pennsylvania CROP Service After Incorporation`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your PA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form With the Pennsylvania Department of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Pennsylvania Registered Agent, you can complete a form. Once you’ve filled it out, send it to the department of state so they can update your records. The Pennsylvania DOS may charge a nominal fee to assign or change a Registered Agent.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Pennsylvania CROP Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our PA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the CROP form on your behalf and send it to the Pennsylvania Department of State. We’ll let you know once we officially become your Registered Agent. Note that the Pennsylvania DOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Pennsylvania registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Pennsylvania LLC. If you do, you can search the business database of the Pennsylvania Department of State, as these will often provide details of a specific business’s CROP.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the PA Registered Agent isn’t available from the searchable business registry, contact the Pennsylvania Department of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Issues With Not Having a Pennsylvania CROP`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Pennsylvania Department of State?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Pennsylvania Department of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a Pennsylvania LLC: A PA Registered Agent “proves” to the state that your business exists. without it, you could lose your business entity protections and your Pennsylvania LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Pennsylvania CROP`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Pennsylvania, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The PA Registered Agent must have a physical street address in Pennsylvania. If you’re forming an LLC outside PA, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Pennsylvania address to sign for important documents.`,
        `The PA Registered Agent’s name and address are part of the public record and available through the Pennsylvania Department of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Pennsylvania business address or move out of state, you would need to file additional documentation with the PA Department of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Pennsylvania CROPs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Pennsylvania CROP?`,
          answer: `Yes. All PA LLCs are required to have a Registered Agent. This is mandated by the Pennsylvania Department of State.`,
        },
        {
          question: `When Can I Assign a Pennsylvania CROP?`,
          answer: `You can either do it when you incorporate your Pennsylvania business through paperwork filed with the PA Department of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own CROP in Pennsylvania?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Pennsylvania Department of State.`,
        },
        {
          question: `Does My PA CROP Need to Have an Address in Pennsylvania?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Pennsylvania CROPs`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/" target="_blank">The Main Functions of a Pennsylvania Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Pennsylvania Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/" target="_blank" >What a Pennsylvania Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Pennsylvania Fees and Filing Requirements for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Pennsylvania business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Pennsylvania Department of State, while others are due to the federal or Pennsylvania government. On this page, we’ve summarized the most common requirements and fees.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Pennsylvania business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania LLC Registration & Formation Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Pennsylvania, you’ll file an LLC with the PA Department of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Pennsylvania:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_ar_box`,
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
    content: `When you incorporate through Incfile, we pay the Pennsylvania Department of State on your behalf when we file your paperwork. Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Pennsylvania</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Pennsylvania LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=PA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your Pennsylvania LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Pennsylvania LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Pennsylvania LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Pennsylvania`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Pennsylvania LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Pennsylvania. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get a foreign qualification/certificate of authority through Incfile`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Annual Reporting and Fees for Your Pennsylvania LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your PA LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Pennsylvania:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Pennsylvania annual report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania Business Permits and Licenses`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some PA LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Pennsylvania LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Pennsylvania LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Incfile Business License Research Package for Your Pennsylvania LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Pennsylvania LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `It includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Pennsylvania LLC will need`, `The application forms you will need to file with the Pennsylvania, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Pennsylvania and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your Pennsylvania LLC`,
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
    content: `Pennsylvania LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Pennsylvania business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Pennsylvania Fees or Requirements for Your PA LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Pennsylvania LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Pennsylvania LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your PA business to trade under a different name, you can file a form with the Pennsylvania Department of State. You will need to pay a Pennsylvania filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Pennsylvania CROP for Your PA LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Pennsylvania LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new PA Registered Agent later. Incfile provides a complete Pennsylvania Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania CROP service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Pennsylvania LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your PA business right away, you can reserve a name with the Pennsylvania Department of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts about Your Pennsylvania LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Pennsylvania business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Pennsylvania Department of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Pennsylvania Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Pennsylvania LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Pennsylvania LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Pennsylvania LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Pennsylvania LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Pennsylvania Department of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Pennsylvania certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard PA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Pennsylvania LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for PA LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Pennsylvania LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Pennsylvania LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the department of state on your behalf when forming your Pennsylvania business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Pennsylvania LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Pennsylvania LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Federal, Sales, Self-Employment and Pennsylvania State Taxes Payable by Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your PA LLC will need to pay a variety of taxes to both the federal and Pennsylvania governments. We’ll cover all the main taxes in Pennsylvania including self-employment, payroll, federal, Pennsylvania state tax and Pennsylvania sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Pennsylvania LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Pennsylvania LLC are not taxed at the business level, like those of C Corporations. Instead, tax for a Pennsylvania LLC works as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Pennsylvania LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Pennsylvania LLC owners pay PA state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some PA LLCs pay Pennsylvania sales tax on products`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees`,
      },
      {
        text: `Employees pay federal, state and payroll tax on their earnings`,
      },
    ],
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Pennsylvania personal tax returns and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania Sales Tax, State Tax and Other Taxes for Your PA LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Pennsylvania Department of Revenue: Pennsylvania state income tax and Pennsylvania state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Pennsylvania State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Pennsylvania business owner, you will need to pay PA state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Pennsylvania income tax. You will be taxed at the standard rates for Pennsylvania state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Pennsylvania state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Pennsylvania state tax rate is 3.07 percent.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get more details on the Pennsylvania state tax here.`,
      url: `https://www.revenue.pa.gov/Pages/PageNotFoundError.aspx?requestUrl=https://www.revenue.pa.gov/GeneralTaxInformation/Current%20Tax%20Rates/Pages/Personal%20Income%20Tax%20Rates.aspx`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Your Pennsylvania LLC and PA Sales Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the PA Department of Revenue. Pennsylvania sales tax is collected at the point of purchase. Pennsylvania sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Pennsylvania sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Pennsylvania business might provide`],
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
      text: `Get details on the Pennsylvania sales tax here.`,
      url: `https://www.revenue.pa.gov/GeneralTaxInformation/Tax%20Types%20and%20Information/SUT/Pages/default.aspx`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Pennsylvania Sales Tax Rates`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are the sales tax rates for the major cities in Pennsylvania:`,
      list: [`Philadelphia: 8 percent`, `Pittsburgh: 7 percent`, `Allentown: 6 percent`, `Lancaster: 6 percent`],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Pennsylvania LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Pennsylvania LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Pennsylvania LLC Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Pennsylvania LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Pennsylvania business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $40,000, you would pay self-employment tax of $6,120`, `On profits of $70,000, you would pay self-employment tax of $10,710`, `On profits of $100,000, you would pay self-employment tax of $15,300`, `On profits of $140,000, you would pay self-employment tax of $21,420`],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Pennsylvania LLC as an S Corporation`,
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
      text: `Incfile form 2553 S Corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Pennsylvania LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Pennsylvania LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Pennsylvania LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Pennsylvania LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Pennsylvania LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Pennsylvania LLC Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Pennsylvania LLC Federal and State Tax Withholding`,
          answer: `You may also choose to withhold federal and Pennsylvania state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Pennsylvania state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Pennsylvania LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `arrow-links`,
              content: [
                {
                  styles: { marginTop: `24px` },
                  text: `Get more requirements from the Pennsylvania Department of Labor website.`,
                  url: `https://www.dli.pa.gov/Businesses/Pages/Services-and-Information-for-Employers.aspx`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Pennsylvania LLC`,
          answer: `Depending on the industry you are in, your Pennsylvania LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Pennsylvania LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Pennsylvania LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `Pennsylvania state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Pennsylvania LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Pennsylvania LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Pennsylvania Have Sales Tax?`,
          answer: `Yes. Pennsylvania does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Pennsylvania Have a State Tax?`,
          answer: `Yes. Pennsylvania does have a general state income tax. You can find more information above.`,
        },
        {
          question: `What Is the Sales Tax Rate in Pennsylvania?`,
          answer: `We have listed common sales tax rates in Pennsylvania cities above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Pennsylvania tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const compare = {
  header: `How We Compare. <br>Get more for less.`,
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
