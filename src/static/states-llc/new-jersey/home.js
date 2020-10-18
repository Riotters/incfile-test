import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `/form-order-now.php?entityType=LLC&entityState=AZ`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start a New Jersey LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `New Jersey, the Garden State, is located on the East Coast of the U.S. between New York, Delaware and Pennsylvania. Although it is one of the smallest states, it's the second-wealthiest and the most densely populated state in America, making it a great place to start a business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `New Jersey's economy is boosted by several major industries including tourism, finance and investment, telecommunications, food processing, agriculture, printing, equipment manufacturing, pharmaceuticals and chemical production.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in New Jersey is by creating a New Jersey LLC. A Limited Liability Company (LLC) is a type of business entity that's ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger New Jersey corporations but with much simpler rules and regulations.`,
    marginBottom: 16,
  },
  {
    type: 'text', //video
    content: '<iframe width="720" height="350" src="https://www.youtube.com/watch?v=0sh4OgPJ3kE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a New Jersey LLC include:`,
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your New Jersey LLC`,
        `Easy tax filing and potential advantages for tax treatment`
      ],
    },
    marginBottom: 24,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Learn more about the benefits of the LLC business structure.`,
      url: `/limited-liability-company/`,
    },
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Six Quick Steps for Creating Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We've got lots of useful information on starting a business in NJ. On this page you'll find the basic steps of how to form a New Jersey LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your New Jersey LLC`,
          answer: `<p>You will need a distinctive and original name for your New Jersey LLC that's not used by any other business in NJ. To find out if another company is using your chosen business name, carry out a New Jersey business entity name search on the NJ Division of Revenue and Enterprise Services website.</p></br>
            <p>There are a few rules you'll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your New Jersey LLC.</p></br>
            <p><a href="/new-jersey-llc/new-jersey-business-names/" target="_blank">Learn about New Jersey LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your NJ LLC`,
          answer: `Every New Jersey LLC must have a designated street address. That could be your home address (if you're running the company from your residence), your company's office building or any physical address of your preference. The address can be outside the state of New Jersey, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your New Jersey LLC`,
          answer: `<p>Every NJ LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the New Jersey Division of Revenue and Enterprise Services.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your NJ Registered Agent must have a physical street address in New Jersey and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a New Jersey Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/new-jersey-llc/registered-agents-new-jersey-llc/" target="_blank">Learn more about New Jersey Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the New Jersey LLC business formation process.`,
        },
        {
          question: `STEP 6: File a Business Registration Application With the New Jersey Division of Revenue and Enterprise Services`,
          answer: `<p>Once you've gathered all the information together for your New Jersey LLC, you'll need to file a formal document with the NJ Division of Revenue and Enterprise Services. This document is known as your “Business Registration Application,” and filing the document creates your New Jersey LLC. This is a long and complex form that requires detailed information.</p></br>
            <p>You can file your New Jersey LLC Business Registration Application online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in New Jersey. You only need to file your Business Registration Application once.</p></br>
            <p><a href="/" target="_blank">Form your LLC now</a></p>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=ID
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the New Jersey Division of Revenue and Enterprise Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The NJ Division of Revenue and Enterprise Services has plenty of additional information on forming and running a business in New Jersey.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `These are all the basic steps for forming an LLC in New Jersey. You’ll find other useful information below:`,
      list: [
        `<a href="https://www.state.nj.us/treasury/revenue/" target="_blank" rel="noopener noreferrer">New Jersey Division of Revenue and Enterprise Services for forming and running your NJ LLC</a>`,
        `<a href="https://www.nj.gov/labor/" target="_blank" rel="noopener noreferrer">New Jersey Department of Labor for NJ employers and hiring</a>`,
        `<a href="https://www.state.nj.us/treasury/taxation/businesses.shtml" target="_blank" rel="noopener noreferrer">New Jersey Division of Taxation for NJ taxes</a>`
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of New Jersey LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular New Jersey LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional New Jersey LLC`,
          answer: `Some states allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. New Jersey does not formally recognize professional LLCs, but groups of professionals may form regular LLCs.`,
        },
        {
          question: `Form a Foreign LLC in New Jersey`,
          answer: `<p>If your business is already operating in another state and expanding to New Jersey, you'll need to form a foreign LLC</p></br>
            <a href="/new-york-llc/fees-filing-requirements/" target="_blank">More information on New Jersey filing and licensing requirements here.</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You'll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your New Jersey LLC`,
      url: `/new-jersey-llc/new-jersey-business-names/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the New Jersey business registry of the NJ Division of Revenue and Enterprise Services and find the right name. Includes information on naming rules, fictitious names, reserving a New Jersey LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `New Jersey Registered Agents for Your LLC`,
      url: `/new-jersey-llc/registered-agents-new-jersey-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a New Jersey Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for New Jersey Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your New Jersey LLC`,
      url: `/new-jersey-llc/fees-filing-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you'll need to pay and the requirements you'll need to meet for both federal and New Jersey rules. Includes details of Employee Identification Numbers (EINs), New Jersey and federal business licenses, New Jersey annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your New Jersey LLC`,
      url: `/new-jersey-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and New Jersey government. Includes details of federal taxes like income and self-employment and New Jersey taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Business Name Search and Registration for Your New Jersey LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your New Jersey business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the NJ Division of Revenue and Enterprise Services business register, tell you about the rules for naming your business, describe “Alternate Names” and get you started with registering your LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey Business Name LLC Lookup`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another New Jersey LLC registered with your desired business name. That means searching the New Jersey Division of Revenue and Enterprise Services website using their Business Entity Name Search. You can easily look up NJ LLCs and corporations by name and other details.`,
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
      text: `Use our name search tool to check your name availability.`,
      url: `/new-jersey-entity-search/?open=true`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey DORES Rules on Your LLC Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet New Jersey Division of Revenue and Enterprise Services naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in NJ.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Business Naming Rules`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules as they will influence the name you choose for your New Jersey LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of New Jersey. This is why you should check business name availability on the NJ DORES website.`,
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
    content: `It’s not enough for your NJ LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in New Jersey.`,
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
        `Abbreviations, punctuation, symbols, fonts, typefaces, etc.`
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
        `Are very similar to the name of a federal or NJ agency or organization (e.g., FBI, FDA, New Jersey Division of Taxation, New Jersey Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`, 
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`, 
        `Imply a purpose that it would be illegal for your business to carry out`
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Specific Business Naming Rules in New Jersey`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the New Jersey Division of Revenue and Enterprise Services has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your NJ business appropriately.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Certain restricted words need additional paperwork and other words are prohibited. Restricted and prohibited words include: Blind, Cemetery, Funeral Homes, Handicapped, Urban Renewal,  D.C., District of Columbia, Little League, Metropolitan, Olympia, Olympic, Postal, Realtor, Trust or Underwriters.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `New Jersey LLC Alternate Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In New Jersey, doing business under a different name is known as an “Alternate Name.” You might choose to use a different name from your NJ formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to use a different name from your NV formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called New Jersey Construction Holding Company LLC and you have a chain called Stewart’s Building Supplies. You should file an Alternate Name form to let the New Jersey Division of Revenue and Enterprise Services know. In New Jersey, you do that through a C-150G Registration of Alternate Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
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
    content: `Register Your New Jersey LLC Business Name`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your New Jersey business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your NJ LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your New Jersey LLC right now, you can reserve  a name with the New Jersey Division of Revenue and Enterprise Services. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://www.nj.gov/treasury/revenue/" target="_blank" rel="noopener noreferrer">​New Jersey DORES LLC name reservation.</a><p>`,
      },
      {
        text: `f you’re ready to start your New Jersey LLC, you can file your Business Registration Application with the New Jersey Division of Revenue and Enterprise Services yourself, or
          <a href="/" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=CO
      },
    ],
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your New Jersey LLC`,
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
          question: `How Do I Search for My New Jersey LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://www.njportal.com/dor/businessnamesearch/" target="_blank">business name search tool</a> and enter your proposed business name. You can search the register of the New Jersey Division of Revenue and Enterprise Services, which will tell you if there are any NJ corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My New Jersey LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of New Jersey). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in New Jersey?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name.`,
        },
        {
          question: `Can I Reserve a Name for My New Jersey LLC?`,
          answer: `Yes. The New Jersey Division of Revenue and Enterprise Services allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your New Jersey LLC`,
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
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You must be careful that your New Jersey LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your New Jersey LLC`,
    size: 4,
    marginBottom: 24,
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
      list: [
        `Appeal to your customers`,
        `Be memorable enough to stand out`, 
        `Best represent your product or services`,
        `Not be used by another business`
      ],
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
    marginBottom: 0,
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
    color: color.orange3,
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
    marginBottom: 48,
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
      url: `/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 32,
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
      url: `/form-order-now.php?entityType=LLC&entityState=AZ/`,
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
        `Losing your status as a Nevada LLC: A NV Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Nevada LLC may be dissolved.`
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
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Nevada Registered Agent Does</a>`
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `aaa`,
    size: 2,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `table`,
    content: {
      headers: [`aaa`, `aaa`, `aaa`],
      rows: [[`aaa`, `aaa`, `aaa`]],
    },
  },
  {
    type: `arrow-link`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    marginBottom: 0,
  },
  {
    type: `arrow-link`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.yellow3,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `aaa`,
          answer: `aaa`,
        },
        {
          question: `aaa`,
          answer: `aaa`,
        },
        {
          question: `aaa`,
          answer: `aaa`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `aaa`,
    size: 2,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `aaa`,
      },
      {
        text: `aaa`,
      },
      {
        text: `aaa`,
      },
      {
        text: `aaa`,
      },
      {
        text: `aaa`,
      },
      {
        text: `aaa`,
      },
    ],
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `button`,
    content: {
      text: `aaa`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 4,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 4,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 4,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 4,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [`aaa`, `aaa`, `aaa`],
    },
    marginBottom: 0,
    color: color.green3,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `text`,
    content: `aaa`,
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `aaa`,
    size: 3,
    marginBottom: 0,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `aaa`,
          answer: `aaa`,
        },
        {
          question: `aaa`,
          answer: `aaa`,
        },
        {
          question: `aaa`,
          answer: `aaa`,
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
