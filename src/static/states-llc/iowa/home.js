import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IA`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Iowa`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Located in the middle of the continental United States, Iowa is bordered by six neighbors and three large rivers. The Hawkeye state started with an agricultural economy, but over the last few decades it has increasingly moved towards manufacturing, technology and green energy.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Iowa, one of the best ways to do so is by forming an Iowa LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Iowa LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting an Iowa LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Iowa LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
      ],
    },
    marginBottom: 24,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Learn more about the
      <a href="/limited-liability-company/" target="_blank">benefits of the LLC business structure here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps for Forming Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to start your Iowa LLC, but you can break down the basics of creating a business in IA into just a few simple steps.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Iowa LLC`,
          answer: `<p>You will need a distinctive and original name for your Iowa LLC that’s not used by any other business in IA. To find out if another company is using your chosen business name, carry out an Iowa business entity name search on the IA Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Iowa LLC.</p></br>
            <p><a href="/iowa-llc/how-to-name-your-llc/" target="_blank">Learn about Iowa LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your IA LLC`,
          answer: `Every Iowa LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Iowa but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Iowa LLC`,
          answer: `<p>Every IA LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Iowa Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your IA Registered Agent must have a physical street address in Iowa and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include an Iowa Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/iowa-llc/registered-agents-iowa-llc/" target="_blank">Learn more about Iowa Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Iowa LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Iowa Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Iowa LLC, you’ll need to file a formal document with the IA Secretary of State. This document is known as your “Certificate of Organization,” and filing the document creates your Iowa LLC. Here’s what is typically included:</p></br>
          <ul>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Name of the incorporator</li>
            </ul></br>
            <p>You can file your Iowa LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Iowa. You only need to file your Certificate of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IA" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from the Iowa Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The IA Secretary of State has plenty of information on forming and running a business in Iowa.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These are all the basic steps for forming an LLC in Iowa. You’ll find other useful information below:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="https://sos.iowa.gov/business/FormsAndFees.html" target="_blank" rel="noopener noreferrer">Iowa Secretary of State for forming and running your IA LLC</a>`,
        `<a href="https://www.iowadivisionoflabor.gov/" target="_blank" rel="noopener noreferrer">Iowa Division of Labor for IA employers and hiring</a>`,
        `<a href="https://tax.iowa.gov/" target="_blank" rel="noopener noreferrer">Iowa Department of Revenue for IA taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Iowa LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Iowa LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form an Iowa Series LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In Iowa, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master umbrella LLC. These can be very useful if you don’t want to set up a separate Iowa LLC for every individual business you run.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="/blog/post/series-llc-why-need-one/" target="_blank" rel="noopener noreferrer">Decide if an Iowa Series LLC is right for your new business.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Professional Iowa LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states, including Iowa, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Iowa does not list the specific occupations that can from a professional LLC, but an Iowa professional LLC may practice a profession through licensed members, managers, employees or agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Iowa`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If your business is already operating in another state and expanding to Iowa, you’ll need to form a foreign LLC.<br>
    <a href="/iowa-llc/">More information on Iowa filing and licensing requirements here.</a>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Iowa? We’ve got you covered.
      <a href="/after-forming-llc/">Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/iowa-llc/how-to-name-your-llc/">Naming Your Iowa LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Iowa business registry of the IA Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving an Iowa LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/iowa-llc/registered-agents-iowa-llc/">Iowa Registered Agents for Your LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint an Iowa Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Iowa Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/iowa-llc/form-filling-permit-requirements/">Fees and Requirements for Your Iowa LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Iowa rules. Includes details of Employer Identification Numbers (EINs), Iowa and federal business licenses, Iowa annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/iowa-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your Iowa LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Iowa government. Includes details of federal taxes like income and self-employment, and Iowa taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Search for and Register Your LLC Name with the Iowa Secretary of State`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Iowa business name or registering your LLC with the IA Secretary of State, we can help. We’ve got all the information you need on an Iowa business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Iowa Secretary of State Business Searches for LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Iowa LLC registered with your desired business name. That means searching the Iowa Secretary of State website using their business entity search tool. You can easily look up IA LLCs and corporations by name and other details.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try running an LLC search for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://sos.iowa.gov/search/business/search.aspx" target="_blank" rel="noopener noreferrer">Iowa Secretary of State business name search tool.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Iowa Secretary of State Rules for Naming Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Iowa Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in IA.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Iowa. This is why you should check business name availability on the IA SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable with Another Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your IA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Iowa. For example, you cannot use the following factors to say your name is different from the name of another business:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
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
    size: 3,
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
    size: 3,
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
      list: [
        `Are very similar to the name of a federal or IA agency or organization (e.g., FBI, FDA, Iowa Department of Revenue, Iowa Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that it would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `DBA/Fictitious Names in Iowa`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Iowa, doing business under a different name is known as a “Fictitious Name.” You might choose to use a different name from your formal IA LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Iowa Recycling Holding Company LLC and you provide services as New Bins Composting and Recycling. You should file a fictitious name to let the Iowa Secretary of State know. In Iowa, you do that through a fictitious name form or you can have Incfile file it on your behalf through our Fictitious Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile’s fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Business Name with the Iowa Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Iowa business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your IA LLC name. There are a couple of ways to do this.`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your Iowa LLC right now, you can reserve the business name with the Iowa Secretary of State. You will need to complete an Application for Reservation of Name and file it with the IA SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://sos.iowa.gov/business/pdf/635_0051.pdf" target="_blank" rel="noopener noreferrer">Iowa SOS LLC name reservation form.</a><p>`,
      },
      {
        text: `If you’re ready to start your Iowa LLC, you can formally file your Certificate of Organization with the Iowa SOS, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IA" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `How Do I Search for My Iowa LLC Business Name?`,
          answer: `Just go to the
            <a href="https://sos.iowa.gov/search/business/search.aspx" target="_blank" rel="noopener noreferrer">business name search tool</a>
            and enter your proposed business name. You can search the register of the Iowa Secretary of State, which will tell you if there are any IA corporations or LLCs with that name.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Iowa?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Iowa LLC?`,
          answer: `Yes. The Iowa Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
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
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your Iowa LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Iowa LLC`,
    size: 3,
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
      list: [
        `Appeal to your customers`,
        `Be memorable enough to stand out`,
        `Best represent your product or services`,
        `Not be used by another business`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `text`,
    content: `<a href="/blog/post/llc-name-search-50-states/" target="_blank" rel="noopener noreferrer">Incfile guide to choosing a business name.</a>`,
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Iowa Registered Agents for LLCs`,
    size: 1,
    template: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your IA LLC is legally required to have an Iowa Registered Agent. Your Registered Agent is a person or a business who is formally recognized by the Iowa Secretary of State to accept business documents and correspondence on behalf of your company.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have an Iowa Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing IA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `IA Registered Agents: The Rules You Need to Follow`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing an Iowa Registered Agent service for your business. They are:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in Iowa.`,
        `If the Registered Agent is a business, they must be able to conduct business in Iowa.`,
        `The Registered Agent must have a physical street address in Iowa, not a P.O. Box.`,
        `The IA Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the IA Registered Agent address does not need to be the same as your Iowa LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What an IA Registered Agent Does`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Iowa Registered Agent carries out several valuable services for your business. They accept official communications and documents from the IA Secretary of State on your behalf. This includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the Iowa Secretary of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Iowa LLC has legal proceedings issued against it)`,
        `Official Iowa and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Iowa LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Iowa Registered Agent service for any LLC that’s incorporated in IA. Even better, if you choose to incorporate your Iowa business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Iowa and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Infile Iowa Registered Agent service provides for your IA LLC:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available Iowa Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Iowa business`,
        `Email notification whenever we receive documents for your Iowa business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you `,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Iowa registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing an IA Registered Agent Service for Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Iowa LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appoint an IA Registered Agent Service When You Create Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business needs to have an Iowa Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Certificate of Organization with the Iowa Secretary of State`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Organization. This is the form that you file with the IA Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Iowa Registered Agent`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Organization based on the information you’ve provided. Additionally, we give you a free Iowa Registered Agent service for the first year, and we’ll include details of your IA Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign a Different Iowa Registered Agent Service After Incorporation`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your IA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form with the Iowa Secretary of State`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Iowa Registered Agent, you can complete a form. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Iowa Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our IA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Iowa Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Iowa registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Searching for IA Registered Agents for Other LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Iowa LLC. If you do, you can search the business database of the Iowa Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the IA Registered Agent isn’t available from the searchable business registry, contact the Iowa Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint an Iowa Registered Agent Service`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Iowa Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<b>Getting served or sued and not finding out about it: </b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Iowa Secretary of State: </b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as an Iowa LLC: </b> An IA Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Iowa LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Iowa Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Iowa, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The IA Registered Agent must have a physical street address in Iowa. If you’re forming an LLC outside IA, you will need to use an in-state Registered Agent. You always need to have someone on hand during business hours at the Iowa address to sign for important documents.`,
        `The IA Registered Agent’s name and address are part of the public record and available through the Iowa Secretary of State's website. If you would prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Iowa business address or move out of state, you need to file additional documentation with the IA Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `FAQs About Iowa Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Do I Need to Appoint an Iowa Registered Agent?`,
          answer: `Yes. All IA LLCs are required to have a Registered Agent. This is mandated by the Iowa Secretary of State.`,
        },
        {
          question: `When Can I Assign an Iowa Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Iowa business through paperwork filed with the IA Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Iowa?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Iowa Secretary of State.`,
        },
        {
          question: `Does My IA Registered Agent Need to Have an Address in Iowa?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Iowa Registered Agent Services`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might find these resources helpful:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/" target="_blank">The Main Functions of an Iowa Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Iowa Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/" target="_blank" >What an Iowa Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Business Licenses, Fees and Filing Requirements for Your Iowa LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Iowa, including related fees and costs. Your IA LLC needs to pay various fees to the federal government, Iowa government and other agencies. Some of these fees are levied by the Iowa Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Iowa business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Initial Filing and Costs for Forming an LLC in Iowa`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Iowa, you’ll file an LLC with the IA Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Iowa:`,
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
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you incorporate through Incfile, we forward this fee to the Iowa Secretary of State on your behalf when we file your paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Iowa.</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Iowa LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your IA LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Iowa LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Iowa LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Iowa`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Iowa LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Iowa. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Iowa LLC Annual Reporting and Ongoing Fees`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need you to file an annual (or other periodic) report with their secretary of state. When you file your IA LLC annual report, you may need to pay a fee. Here are the filing requirements for Iowa:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Iowa LLC filing requirements</a>
      and business filing deadlines with our helpful Iowa filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Iowa Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Licenses and Permits in Iowa`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some IA LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Permits and licenses vary based on:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your Iowa LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Iowa LLC (state, county or city) (e.g., a license to conduct business from the city of Des Moines)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `A complete report on all the licenses, permits and tax registrations your Iowa LLC will need`,
        `The application forms you will need to file with the Iowa, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Iowa and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `An Operating Agreement is extremely useful for several reasons 
      (<a href="/research-topics/llc-info/llc-operating-agreement/" target="_blank">learn about them here</a>).
      If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Iowa business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Iowa Fees or Requirements for Your IA LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Iowa LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Iowa LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your IA business to trade under a different name, you can file a form with the Iowa Secretary of State. You will need to pay an Iowa filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Iowa Registered Agent for Your IA LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Iowa LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new IA Registered Agent later. Incfile provides a complete Iowa Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Iowa LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your IA business right away, you can reserve a name with the Iowa Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Iowa LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Iowa business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Iowa Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Iowa Articles of Amendment for include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing an Iowa LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your Iowa LLC`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Iowa LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Iowa LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Iowa Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Iowa certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard IA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Iowa LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for IA LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Iowa LLC Costs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Iowa LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Iowa business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `No, reports in Iowa are due every other year. You can find out more on the
            <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Get Business Licenses and Permits from for My Iowa LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Iowa LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Federal and State Taxes Payable by Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Iowa LLC will need to pay. These include tax that’s payable to the Iowa government, like Iowa sales taxes and Iowa state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete
      <a href="/business-accounting/">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Iowa LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of an Iowa LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Iowa LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Iowa LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Iowa LLC owners pay IA state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some IA LLCs pay Iowa sales tax on products.`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees.`,
      },
      {
        text: `Employees pay federal, state and payroll tax on their earnings.`,
      },
    ],
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Iowa personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Iowa State Income Tax Payable on LLC Earnings`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As an Iowa business owner, you will need to pay IA state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Iowa income tax. You will be taxed at the standard rates for Iowa state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Iowa state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Iowa state tax rates are between 0.36 and 8.98 percent, depending on income.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://tax.iowa.gov/" target="_blank" rel="noopener noreferrer">Get details on the Iowa state tax here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Iowa Sales Taxes on LLC Sales`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the IA Department of Revenue. Iowa sales tax is collected at the point of purchase. Iowa sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Iowa sales tax on:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
        `Certain services that your Iowa business might provide`,
      ],
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
    type: `text`,
    content: `<a href="https://tax.iowa.gov/efile-pay-sales-and-retailers-use-taxes" target="_blank" rel="noopener noreferrer">Get details on the Iowa sales tax here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Sales Tax Rates for Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your Iowa LLC: Self-Employment and Income Taxes`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Iowa LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Iowa LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Iowa LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Iowa business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `On profits of $40,000, you would pay self-employment tax of $6,120.`,
        `On profits of $80,000, you would pay self-employment tax of $12,240.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
        `On profits of $160,000, you would pay self-employment tax of $24,480.`,
      ],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Iowa LLC as an S Corporation`,
    size: 3,
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
    content: `Speak to your accountant for more information on reducing your Iowa LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Iowa LLC Federal Income Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Iowa LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Iowa LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Iowa LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Employer Payroll Tax Withholding for Your Iowa LLC`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Iowa LLC Federal and State Tax Withholding`,
          answer: `You may also choose to withhold federal and Iowa state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Iowa state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Iowa LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `paragraph`,
              content: `<a href="https://www.iowadivisionoflabor.gov/" target="_blank" rel="noopener noreferrer">Get more requirements from the Iowa Division of Labor website.</a>`,
              marginBottom: 48,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Iowa LLC`,
          answer: `Depending on the industry you are in, your Iowa LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Iowa LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Iowa LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. `,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [
                `Federal income tax`,
                `Federal self-employment tax`,
                `Iowa state tax`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most Iowa LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Iowa LLC Business Taxes`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Does Iowa Have Sales Tax?`,
          answer: `Yes. Iowa does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Iowa Have a State Tax?`,
          answer: `Yes. Iowa does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Iowa tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const compare = {
  header: `How We Compare. <br>Get more for less.`,
  table: {
    headers: [null, `Incfile`, `LegalZoom`, `ZenBusiness`],
    rows: [
      [`Business incorporation service`, `$49`, `$149`, `$149`],
      [
        `Registered Agent included in the price`,
        `check-green`,
        `check-red`,
        `check-red`,
      ],
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
              text: `Other State Requirements`,
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
