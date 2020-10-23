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
    content: `How to Start an LLC in South Dakota`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Located in the Midwest U.S., South Dakota is a beautiful but sparsely populated state. Retail, healthcare and finance are all major industries, in addition to tourism and agriculture.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in South Dakota, one of the best ways to do so is by forming a South Dakota LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. South Dakota LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a South Dakota LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your South Dakota LLC`, `Easy tax filing and potential advantages for tax treatment`],
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
    content: `Six Quick Steps to Forming an LLC in South Dakota`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in SD. On this page, you’ll find the basic steps of how to form a South Dakota LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your South Dakota LLC`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in SD. To find out if another company is using your chosen business name, carry out a South Dakota business entity name search on the Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your South Dakota LLC.</p></br>
            <p><a href="/south-dakota-llc/how-to-name-your-llc/" target="_blank">Learn about South Dakota LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for your SD LLC`,
          answer: `Every South Dakota LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of South Dakota, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your South Dakota LLC`,
          answer: `<p>Every SD LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the South Dakota Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in South Dakota and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a South Dakota Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/south-dakota-llc/registered-agents-south-dakota-llc/" target="_blank">Learn more about South Dakota Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or Incfile can get one for you as part of the South Dakota LLC business formation process.`,
        },
        {
          question: `STEP 6: File A Certificate of Organization With the South Dakota Secretary of State`,
          answer: `<p>Once you've gathered all the information together for your South Dakota LLC, you’ll need to file a formal document with the SD Secretary of State. This document is known as your “Certificate of Organization,” and filing the document creates your South Dakota LLC. Here’s what is typically included:</p></br>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of organizers of the LLC at the time of filing</li>
            <li>Addresses of managers or members of the LLC at the time of filing</li>
            <li>Purpose of your business</li>
            <li>Name of the incorporator</li></br>
            <p>You can file your South Dakota LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in South Dakota. You only need to file your Certificate of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the South Dakota Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Secretary of State has plenty of information on forming and running a business in South Dakota. These are all the basic steps for forming an LLC in South Dakota.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You’ll find other useful information below:`,
      list: [
        `<a href="https://sdsos.gov/business-services/default.aspx" target="_blank" rel="noopener noreferrer">South Dakota Secretary of State for forming and running your LLC.</a>`,
        `<a href="https://dlr.sd.gov/" target="_blank" rel="noopener noreferrer">South Dakota Department of Labor and Regulation for employers and hiring.</a>`,
        `<a href="https://dor.sd.gov/" target="_blank" rel="noopener noreferrer">South Dakota Department of Revenue for taxes.</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of South Dakota LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular South Dakota LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional South Dakota LLC`,
          answer: `<p>Some states, including South Dakota, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. You can find more information here.</p></br>`,
        },
        {
          question: `Form a Foreign LLC in South Dakota`,
          answer: `<p>If your business is already operating in another state and expanding to South Dakota, you’ll need to form a foreign LLC.</p></br>
            <a href="/south-dakota-llc/fees-filing-requirements/" target="_blank">More information on South Dakota filing and licensing requirements here.</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your South Dakota LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in South Dakota? We’ve got you covered.
      <a href="/after-forming-llc/" target="_blank">Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your South Dakota LLC`,
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
      text: `Naming Your South Dakota LLC`,
      url: `/South Dakota-llc/South Dakota-business-names/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the South Dakota business registry of the SD Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a South Dakota LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `South Dakota Registered Agents for Your LLC`,
      url: `/South Dakota-llc/registered-agents-South Dakota-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a South Dakota Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for South Dakota Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your South Dakota LLC`,
      url: `/South Dakota-llc/fees-filing-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and South Dakota rules. Includes details of Employee Identification Numbers (EINs), South Dakota and federal business licenses, South Dakota annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes forYour South Dakota LLC`,
      url: `/South Dakota-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and South Dakota government. Includes details of federal taxes like income and self-employment and South Dakota taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Naming Your South Dakota LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right South Dakota business name or registering your LLC with the Secretary of State, we can help. We’ve got all the information you need on a South Dakota business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota Secretary of State Business Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a South Dakota business entity search with the Secretary of State. They have a helpful tool on their website that lets you search the register of SD LLCs and corporations to see if someone already has your desired business name.`,
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
      text: `South Dakota Secretary of State business name search tool.`,
      url: `https://sosenterprise.sd.gov/BusinessServices/Business/FilingSearch.aspx`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota LLC Naming Rules`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet South Dakota Secretary of State naming rules.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of South Dakota. This is why you should check business name availability on the SD SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable with Another Business Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in South Dakota.`,
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
        `Are very similar to the name of a federal or SD agency or organization (e.g., FBI, FDA, South Dakota Department of Revenue, South Dakota Police, Treasury, etc.)`,
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
    content: `South Dakota LLC DBA Names`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In South Dakota, doing business under a different name is known as a “Fictitious” or “Doing Business As (DBA)” name. You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called South Dakota Forestry Tours Holding Company LLC and you have a brand called Leafwood Tourism. You should file a fictitious/DBA name to let the South Dakota Secretary of State know. In South Dakota, you do that through a “DBA - Business Name Registration,” or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's DBA/fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Business Name with the South Dakota Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your South Dakota business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your SD LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your LLC right now, you can reserve the business name with the South Dakota Secretary of State. You will need to complete an “Application for Reservation of Name” and file it with the SD SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <a href="https://sdsos.gov/docs/business/corporation-reservationofname.pdf" target="_blank" rel="noopener noreferrer">South Dakota SOS LLC name reservation form.</a>`,
      },
      {
        text: `If you’re ready to start your LLC, you can formally file your Articles of Organization with the South Dakota SOS, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CO" target="_blank">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your South Dakota LLC`,
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
          question: `How Do I Search for My South Dakota LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://sosenterprise.sd.gov/BusinessServices/Business/FilingSearch.aspx" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the South Dakota Secretary of State, which will tell you if there are any corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My South Dakota LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of South Dakota). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in South Dakota?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My South Dakota LLC?`,
          answer: `Yes. The South Dakota Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your South Dakota LLC`,
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
    content: `You must be careful that your South Dakota LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your South Dakota LLC`,
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
    content: `South Dakota Registered Agent Services`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every business entity formed in South Dakota needs to formally appoint a person or business to act as a Registered Agent. Your South Dakota Registered Agent provides various services to LLCs, including the acceptance of formal documents and correspondence from the South Dakota Secretary of State.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules for South Dakota Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a South Dakota Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in South Dakota.`,
        `If the Registered Agent is a business, they must be able to conduct business in South Dakota.`,
        `The Registered Agent must have a physical street address in South Dakota, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your South Dakota LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by a South Dakota Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your South Dakota Registered Agent carries out several valuable services for your business. They accept official communications and documents from the Secretary of State on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the South Dakota Secretary of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your South Dakota LLC has legal proceedings issued against it)`,
        `Official South Dakota and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `A Complete South Dakota Registered Agent Service from Incfile`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in South Dakota and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any South Dakota business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in South Dakota and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf.`,
        `We automatically notify you whenever we receive correspondence for your business from the South Dakota Secretary of State or anyone else.`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
        `We forward all correspondence to an address you choose.`,
      ],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's South Dakota corp service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing a Registered Agent Service for Your South Dakota LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your South Dakota LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Registered Agent When You Form Your SD LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a South Dakota Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization with the South Dakota Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free South Dakota Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free South Dakota Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through IncFile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign a Different South Dakota Registered Agent Service After Incorporation`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Statement of Change with the South Dakota Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new South Dakota Registered Agent, you can complete a “Statement of Change” form that’s available on the SD Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s South Dakota Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our SD Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form “Statement of Change” on your behalf and send it to the South Dakota Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's South Dakota registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `SD Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another South Dakota LLC. If you do, you can search the business database of the South Dakota Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the South Dakota Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Issues with Not Having a South Dakota Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the South Dakota Secretary of State?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the South Dakota Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a South Dakota LLC: A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your South Dakota LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the South Dakota Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in South Dakota, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The Registered Agent must have a physical street address in South Dakota. If you’re forming an LLC outside SD, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the South Dakota address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the South Dakota Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your South Dakota business address or move out of state, you need to file additional documentation with the SD Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About South Dakota Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a South Dakota Registered Agent?`,
          answer: `Yes. All SD LLCs are required to have a Registered Agent. This is mandated by the South Dakota Secretary of State.`,
        },
        {
          question: `When Can I Assign a South Dakota Registered Agent Service?`,
          answer: `You can either do it when you incorporate your South Dakota business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in South Dakota?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the South Dakota Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in South Dakota?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for South Dakota Registered Agent Services`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a South Dakota Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your South Dakota Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a South Dakota Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `South Dakota Fees and Filing Requirements for LLCs`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your South Dakota business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the South Dakota Secretary of State, while others are due to the federal or South Dakota government. We’ve summarized the most common requirements and fees here.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that South Dakota business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota LLC Formation Filing and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in South Dakota, you’ll need to file an LLC with the Secretary of State and pay a filing fee. Here are the current fees and filing times for South Dakota:`,
    marginBottom: 16,
  },
  {
    type: `table-simple`,
    content: {
      headers: [`State Fee`, `State Filing Time`, `Expedited Filing Time`],
      rows: [[`$150`, `5 business days`, `1 business day`]],
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the South Dakota Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for South Dakota</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your South Dakota LLC through IncFile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your South Dakota LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every South Dakota LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your South Dakota LLC through IncFile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside South Dakota`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your South Dakota LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than South Dakota. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your South Dakota LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your SD LLC annual report, you may need to pay a fee. Here are the annual filing requirements for South Dakota:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Annual Report`,
      list: [`Frequency:  Annually`, `Due Date:  Before 1st day of 2nd month following anniversary month.`, `Filing Fee:  $50`],
    },
    marginBottom: 16,
    color: color.blue2,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" rel="noopener noreferrer">Learn about your ongoing South Dakota LLC filing requirements</a>
      and business filing deadlines with our helpful South Dakota ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your South Dakota annual report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota Business Permits and Licenses`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some SD LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your South Dakota LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your South Dakota LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
        `The type of business that you run (e.g., healthcare providers must meet HISDA requirements)`,
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
    content: `The Incfile Business License Research Package for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your South Dakota LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `It includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your South Dakota LLC will need`, `The application forms you will need to file with the South Dakota, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, South Dakota and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your South Dakota LLC`,
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
    content: `South Dakota LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>).  If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your South Dakota business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc South Dakota Fees or Requirements for Your SD LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your South Dakota LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your SD business to trade under a different name, you can file a form with the South Dakota Secretary of State. You will need to pay a South Dakota filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the South Dakota CROP for Your SD LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your South Dakota LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new SD Registered Agent later. Incfile provides a complete South Dakota Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota crop service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your SD business right away, you can reserve a name with the South Dakota Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts about Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your South Dakota business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the South Dakota Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file South Dakota Articles of Amendment for include:`,
      list: [`Adding, removing or changing a South Dakota LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your South Dakota LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your South Dakota LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the South Dakota Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's South Dakota certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard SD LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your South Dakota LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for SD LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About South Dakota LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My South Dakota LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the department of state on your behalf when forming your South Dakota business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My South Dakota LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your South Dakota LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your South Dakota LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your South Dakota LLC will need to pay. These include tax that’s payable to the South Dakota government, like South Dakota sales taxes. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your South Dakota LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a South Dakota LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a South Dakota LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `South Dakota LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some LLCs pay South Dakota sales tax on products.`,
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
    content: `Items 1 and 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `South Dakota does not charge a state income tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `South Dakota Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the SD Department of Revenue. South Dakota sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect South Dakota sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your South Dakota business might provide`],
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
      text: `Get details on the South Dakota sales tax here.`,
      url: `https://dor.sd.gov/businesses/taxes/`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your South Dakota LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple of different federal taxes that every LLC will need to pay, including South Dakota LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 43,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All South Dakota LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your South Dakota business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $10,000, you would pay self-employment tax of $1,530.`, `On profits of $20,000, you would pay self-employment tax of $3,060.`, `On profits of $50,000, you would pay self-employment tax of $7,650.`, `On profits of $70,000, you would pay self-employment tax of $10,710.`],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your South Dakota LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your South Dakota LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your South Dakota LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your South Dakota LLC`,
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
    content: `South Dakota LLC Employer Payroll Tax Withholding`,
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
    content: `Employer Federal Tax Withholding for Your South Dakota LLC`,
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
    content: `South Dakota LLC Employee Insurance and Other Requirements`,
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
      text: `Get more requirements from the South Dakota Department of Labor and Regulation website.`,
      url: `https://dlr.sd.gov/`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your South Dakota LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your South Dakota LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most South Dakota LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `South Dakota state tax`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most South Dakota LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on South Dakota LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does South Dakota Have Sales Tax?`,
          answer: `Yes. South Dakota does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does South Dakota Have a State Tax?`,
          answer: `No, South Dakota does not have a general state income tax.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your South Dakota tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
