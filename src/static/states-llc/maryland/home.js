import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MD`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Maryland Business Registration for Your LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Located on the east coast of the U.S., Maryland borders Delaware, Pennsylvania, Virginia, West Virginia and Washington, D.C. In fact, it donated part of its land to form Washington in the late 18th century. Due to its location between many economically strong states and Washington, it currently boasts the highest household median income anywhere in the U.S. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in Maryland is by creating a Maryland LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Maryland corporations, but with much simpler rules and regulations.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Maryland LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Maryland LLC`, `Easy tax filing and potential advantages for your tax treatment`],
    },
    marginBottom: 48,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here</a>.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Form an Maryland LLC in Six Quick Steps`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to create your Maryland LLC, but you can break down the basics of forming a business in MD into just a few simple steps.`,
    marginBottom: 32,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Maryland LLC`,
          answer: `<p>You will need a distinctive and original name for your Maryland LLC that’s not used by any other business in MD. To find out if another company is using your chosen business name, carry out a Maryland business entity name search on the MD Business Express website.</p></br>
                     <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Maryland LLC.</p></br>
                     <a href="/maryland-llc/how-to-name-your-llc/"> Learn about Maryland LLC business naming rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your MD LLC`,
          answer: `Every Maryland LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Maryland, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Resident Agent for Your Maryland LLC`,
          answer: `<p>Every MD LLC must have a “Registered Agent,” known in Maryland as a “Resident Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with Maryland Business Express.</p></br>
  
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your MD Registered Agent must have a physical street address in Maryland and must be present to receive important documents for your company during business hours. </p></br>
            
            <p>At Incfile, all of our packages include a Maryland Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf. </p></br>
            <a href="/maryland-llc/registered-agents-maryland-llc/">Learn more about Maryland Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Maryland LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with Maryland Business Express`,
          answer: `<p> Once you've gathered all the information for your Maryland LLC, you’ll need to file a formal document with MD Business Express. This document is known as your “Articles of Organization,” and filing the document creates your Maryland LLC. Here’s what is typically included:</p></br>
                     <ul>
                     <li> Your business name and address </li>
                     <li> Details of your Registered Agent </li>
                     <li> Purpose of your business </li>
                     <li> Name of the incorporator </li>
                     </ul>
                     </br>
                     <p>You can file your Maryland LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Maryland. You only need to file your Articles of Organization once. </p></br>
                     <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MD"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from Maryland Business Express`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `The MD Business Express website has plenty of information on forming and running a business in Maryland. These are all the basic steps for forming an LLC in Maryland. You’ll find other useful information below.`,
      list: [
        `<a href="https://egov.maryland.gov/businessexpress" target="_blank" rel="noopener noreferrer">Maryland Business Express for forming and running your MD LLC</a>`,
        `<a href="https://www.dllr.state.md.us/" target="_blank" rel="noopener noreferrer">Maryland Department of Labor for MD employers and hiring</a>`,
        `<a href="https://www.marylandtaxes.gov/" target="_blank" rel="noopener noreferrer">Maryland Comptroller for MD taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Maryland`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `<p>If your business is already operating in another state and expanding to Maryland, you’ll need to form a foreign LLC. </p></br>
                <p> More information on Maryland filing and licensing requirements here <link to state subpage once published> </p>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Starting Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Maryland? We’ve got you covered. <a href="/after-forming-llc/"> Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Learn More About How to Start a Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your Maryland LLC`,
      url: `/maryland-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Maryland business registry of MD Business Express and find the right name. Includes information on naming rules, fictitious names, reserving a Maryland LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Maryland Resident Agents for Your LLC`,
      url: `/maryland-llc/registered-agents-maryland-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Maryland Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Maryland Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Maryland LLC`,
      url: `/maryland-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Maryland rules. Includes details of Employer Identification Numbers (EINs), Maryland and federal business licenses, Maryland annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Maryland LLC`,
      url: `/maryland-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Maryland government. Includes details of federal taxes like income and self-employment, and Maryland taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Business Name Searches and Name Registration for Your Maryland LLC `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your Maryland LLC. From searching for a business name with MD Business Express to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland Business Entity Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Before filing your LLC, you’ll need to check whether there’s already another MD LLC registered with your desired business name. That means searching the Maryland Business Express website using their business search tool. You can easily perform a Maryland LLC search by name and other details. `,
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
      text: `Maryland Business Express business search tool`,
      url: `https://egov.maryland.gov/businessexpress/entitysearch`,
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Business Name Registration Rules for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Maryland Business Express naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in MD.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Maryland. This is why you should check business name availability on the MD Business Express website.`,
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
    content: `It’s not enough for your MD LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Maryland. For example, you cannot use the following factors to say your name is different from the name of another business:`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
        `Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
        `The singular, plural or possessive forms of a word`,
        `Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
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
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or MD agency or organization (e.g., FBI, FDA, Maryland Comptroller, Maryland Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that it would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Maryland LLC DBA or Trade Names`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Maryland, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your MD formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Maryland Commercial Real Estate Holding Company LLC and you have a chain called “Baltimore Property Rentals.” You should file a trade name to let Maryland Business Express know. You can have Incfile do it on your behalf through our Assumed Business Name service.`,
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
    content: `Business Name Registration for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Maryland business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your MD LLC name. There are a couple of ways to do this.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If you don’t want to form your Maryland LLC right now, you can reserve the business name with Maryland Business Express. You will need to contact <a href="sdat.charterhelp@maryland.gov" target="_blank" rel="noopener noreferrer"> sdat.charterhelp@maryland.gov</a>. You do not need to reserve a name if you are forming your business right away.`,
        `If you’re ready to start your Maryland LLC, you can formally file your Articles of Organization with Maryland Business Express, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MD">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
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
          question: `How Do I Search for My Maryland LLC Business Name?`,
          answer: `Just go to the <a href="https://egov.maryland.gov/businessexpress/entitysearch/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of Maryland Business Express, which will tell you if there are any MD corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Maryland LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Maryland). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Maryland?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Maryland LLC?`,
          answer: `Yes. Maryland Business Express allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might find these other resources helpful.`,
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
    content: `You must be careful that your Maryland LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Maryland LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Appeal to your customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business`],
    },
    marginBottom: 40,
    color: color.blue3,
  },

  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 32,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Getting a Maryland Registered Agent for Your LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Every business entity formed in Maryland needs to formally appoint a person or business to act as a Registered Agent. Your Maryland Registered Agent provides various services to MD LLCs, including the acceptance of formal documents and correspondence from Maryland Business Express.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Maryland Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing MD Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What Maryland Business Express Says About MD Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In Maryland, a Registered Agent is formally known as a “Resident Agent.” We’ll use those names interchangeably in this guide. Their functions and requirements are identical to those of Registered Agents described above. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Rules for Maryland Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Maryland Registered Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If the Registered Agent is a person, they must reside in Maryland.`,
        `If the Registered Agent is a business, they must be able to conduct business in Maryland.`,
        `The Registered Agent must have a physical street address in Maryland, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the MD Registered Agent address does not need to be the same as your Maryland LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a Maryland Resident Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Maryland Registered Agent carries out several valuable services for your business. They accept official communications and documents from MD Business Express on your behalf. This may include:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from Maryland Business Express, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Maryland LLC has legal proceedings issued against it)`,
        `Official Maryland and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Maryland LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Maryland and you need a MD Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Maryland business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Maryland and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Incfile MD Registered Agent service provides for your LLC:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf.`,
        `We automatically notify you whenever we receive correspondence for your business from the Maryland Business Registration Division or anyone else.`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
        `We forward all correspondence to an address you choose.`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `More about registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Maryland Resident Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Maryland LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Maryland Resident Agent When You Form Your MD LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a Maryland Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `File Articles of Organization with Maryland Business Express`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with MD Business Express to formally create your business.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Maryland Registered Agent `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Maryland Registered Agent service for the first year, and we’ll include details of your MD Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MD`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Maryland Resident Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your MD Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and Make the Change with Maryland Business Express`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Maryland Registered Agent, you can file an online update on the MD Business Express website. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Maryland Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our MD Registered Agent service, we take care of all the filing for you. We’ll collect important information about your business and send it to Maryland Business Express. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Maryland registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Maryland Resident Agent Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Maryland LLC. If you do, you can search the business database of Maryland Business Express, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the MD Registered Agent isn’t available from the searchable business registry, contact Maryland Business Express to request the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Issues with Not Having a Maryland Resident Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to Maryland Business Express? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with Maryland Business Express:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a Maryland LLC:</b> A MD Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Maryland LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Resident Agent for Your MD LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in Maryland, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The MD Registered Agent must have a physical street address in Maryland. If you’re forming an LLC outside MD, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Maryland address to sign for important documents.`,
        `The MD Registered Agent’s name and address are part of the public record and available through the Maryland Business Express website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Maryland business address or move out of state, you would need to file additional documentation with MD Business Express for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Maryland Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Maryland Registered Agent?`,
          answer: `Yes. All MD LLCs are required to have a Registered Agent. This is mandated by Maryland Business Express.`,
        },
        {
          question: `When Can I Assign a Maryland Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Maryland business through MD Business Express or afterward by filing online. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Maryland?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to Maryland Business Express.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Maryland?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Maryland Registered Agent Services`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of a Maryland Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Maryland Registered Agent</a>`,
        `<a href-"/research-topics/registered-agent/registered-agent-tasks/">What a Maryland Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Licenses, Fees and Filing Requirements for Maryland LLCs`,
    size: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Maryland, including related fees and costs. Your MD LLC needs to pay various fees to the federal government, Maryland government and other agencies. Some of these fees are levied by Maryland Business Express or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Maryland business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Initial Filing Costs for Forming an LLC in Maryland`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Maryland, you’ll need to file an LLC with MD Business Express and pay a Maryland filing fee. Here are the current fees and filing times for Maryland:`,
    marginBottom: 32,
  },
  {
    type: `dynamic_ar_box`,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Compare State Filing Times`,
      url: `/state-filing-times/`,
    },
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Compare State Filing Prices`,
      url: `/state-filing-fees/`,
    },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you form your MD LLC through Incfile, we automatically forward this fee to Maryland Business Express when we file your incorporation paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/"> compare state filing times and fees here, including expedited fees for Maryland.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Maryland LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MD`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every Maryland LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Maryland LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Maryland`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your Maryland LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Maryland. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 24,
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
    content: `Maryland Annual Reports and LLC Costs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most states need you to file an annual (or other periodic) report. When you file your MD LLC annual report, you will need to pay a fee. Here are the annual filing requirements for Maryland: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Maryland LLC filing requirements</a> and business filing deadlines with our helpful Maryland filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Maryland Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Maryland Business Licenses and Permits`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some MD LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis. `,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Maryland LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Maryland LLC (state, county or city) (e.g., a license to conduct business from the city of Baltimore)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`A complete report on all the licenses, permits and tax registrations your Maryland LLC will need`, `The application forms you will need to file with the Maryland, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Maryland and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>).  If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Maryland business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc Maryland Fees or Requirements for Your MD LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Maryland LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Trade Name for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your MD business to trade under a different name, you can file a form with Maryland Business Express. You will need to pay a Maryland filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Maryland Registered Agent for Your MD LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Maryland LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new MD Registered Agent later. Incfile provides a complete Maryland Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you don’t want to form your MD business right away, you can reserve a name with Maryland Business Express. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Maryland business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with Maryland Business Express. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Maryland Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Maryland LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Maryland LLC`],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Maryland LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from Maryland Business Express. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Maryland certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard MD LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Maryland LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for MD LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Maryland LLC Costs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Maryland LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to MD Business Express on your behalf when forming your Maryland business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Maryland requires you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Maryland LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                    <ul>
                    <li>The type of business you run</li>
                    <li>Where you are located</li>
                    <li>Governing organizations in your industry</li>
                    <li>Federal, state and local regulations</li>
                    </ul></br>
                    That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Maryland LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Your MD LLC Will Need to Pay`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Maryland LLC will need to pay. These include tax that’s payable to the Maryland government, like Maryland sales taxes and Maryland state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Maryland LLC Will Be Taxed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a Maryland LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Maryland LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Maryland LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Maryland LLC owners pay MD state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some MD LLCs pay Maryland sales tax on products.`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees.`,
      },
      {
        text: `Employees pay federal, state and payroll tax on their earnings.`,
      },
    ],
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Maryland personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland Taxes Payable to the MD Comptroller`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Maryland Comptroller: Maryland state income tax and Maryland state sales tax.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Maryland State Income Tax `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As a Maryland business owner, you will need to pay MD state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Maryland income tax. You will be taxed at the standard rates for Maryland state taxes, and you will also get to apply regular allowances and deductions. Any salaried employees will also need to pay personal Maryland state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Maryland state tax rate varies between 2 and 5.75 percent, based on earnings. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://www.marylandtaxes.gov/pros/index.php" target="_blank" rel="noopener noreferrer">Get details on the Maryland state tax here.</a> `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Maryland Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the MD Comptroller. Maryland sales tax is collected at the point of purchase. Maryland sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Maryland sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Maryland business might provide`],
    },
    marginBottom: 16,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href="https://www.marylandtaxes.gov/business/sales-use/index.php/" target="_blank" rel="noopener noreferrer"> Maryland sales tax here.</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland Sales Tax Rates`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Maryland LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All Maryland LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Maryland business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [
        `On profits of $70,000, you would pay self-employment tax of $10,710.`,
        `On profits of $120,000, you would pay self-employment tax of $18,360.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
        `On profits of $160,000, you would pay self-employment tax of $24,480.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Maryland LLC as an S Corporation`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incifle Form 2553 S corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Maryland LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Maryland LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Maryland LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Maryland LLC Employer Payroll Tax Withholding`,
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
    content: `Employer Federal and State Tax Withholding for Your Maryland LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal and Maryland state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
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
    content: `Regardless of whether you withhold federal and Maryland state income tax, your employees may need to file their own tax returns.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Maryland LLC Employee Insurance and Other Requirements`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get more requirements from <a href="https://www.dllr.state.md.us/" target="_blank" rel="noopener noreferrer">the Maryland Department of Labor website.</a>`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Maryland LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Maryland LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most Maryland LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Maryland state tax`],
    },
    marginBottom: 24,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Maryland LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Maryland LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Maryland Have Sales Tax?`,
          answer: `Yes. Maryland does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Maryland Have a State Tax?`,
          answer: `Yes. Maryland does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Maryland tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 24,
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
                type: `arrow-links`,
                content: {
                  text: `State Filing Times`,
                  url: `/`,
                },
                bottomMargin: 16,
              },
              {
                type: `arrow-links`,
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
