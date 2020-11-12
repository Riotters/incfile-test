import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in Idaho`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Located in the northwestern United States, Idaho is a geographically diverse state that’s home to around 1.8 million people. The main industries in the state include agriculture, manufacturing, mining, tourism and forestry.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in Idaho is by creating an LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Idaho corporations but with much simpler rules and regulations.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Idaho LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Idaho LLC`, `Easy tax filing and potential advantages for your tax treatment`],
    },
    marginBottom: 16,
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
    content: `Six Quick Steps to Forming Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Idaho LLC, but you can break down the basics of forming a business in ID into just a few simple steps.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `<p>First, you need to gather basic information about your LLC, including the names and addresses of the managers or members.</p></br>
            <p>The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.</p>`,
        },
        {
          question: `STEP 2: Choose a Unique Business Name for Your Idaho LLC`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in ID. To find out if another company is using your chosen business name, carry out a business entity name search on the ID Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your Idaho LLC.</p></br>
            <p><a href="/idaho-llc/how-to-name-your-llc/" target="_blank">Learn about Idaho LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your ID LLC`,
          answer: `Every Idaho LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Idaho, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Idaho Registered Agent`,
          answer: `<p>Every ID LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Idaho Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Idaho and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a Idaho Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/idaho-llc/registered-agents-idaho-llc/" target="_blank">Learn more about Idaho Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Idaho LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Idaho Secretary of State`,
          answer: `<p>Once you've gathered all the information for your LLC, you’ll need to file a formal document with the ID Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Idaho LLC. Here’s what is typically included:</p></br>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of managers or members of the LLC at the time of filing</li>
            <li>Addresses of managers or members of the LLC at the time of filing</li>
            <li>Name of the incorporator</li></br>
            <p>You can file your Idaho Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Idaho, but you only need to file your Articles of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Information from the Idaho Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `These are all the basic steps for forming an LLC in Idaho, but the Secretary of State has plenty of additional information.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Try these resources below:`,
      list: [
        `<a href="https://sos.idaho.gov/" target="_blank" rel="noopener noreferrer">Idaho Secretary of State for forming and running your LLC</a>`,
        `<a href="https://labor.idaho.gov/" target="_blank" rel="noopener noreferrer">Idaho Department of Labor for employers and hiring</a>`,
        `<a href="https://tax.idaho.gov/index.cfm" target="_blank" rel="noopener noreferrer">Idaho Tax Commission for taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Idaho LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Idaho LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Professional Idaho LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Idaho LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Here are the occupations that the ID Secretary of State allows to form professional LLCs:`,
          answer: `<p>Some states, including Idaho, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the CO Secretary of State allows to form Idaho professional LLCs:</p></br>
              <li>Certified Public Accountants</li>
              <li>Architects</li>
              <li>Certified or Licensed Public Accountancy</li>
              <li>Chiropractors</li>
              <li>Dentists</li>
              <li>Engineers</li>
              <li>Landscape Architecture</li>
              <li>Medicine</li>
              <li>Nursing</li>
              <li>Occupational Therapy</li>
              <li>Physical Therapy</li>
              <li>Physical Therapy</li>
              <li>Podiatry</li>
              <li>Professional Geology</li>
              <li>Psychology</li>
              <li>Social Work</li>
              <li>Surveying</li>
              <li>Veterinary Medicine</li></br>`,
        },
        {
          question: `Foreign LLC in Idaho`,
          answer: `<p>If your business is already operating in another state and expanding to Idaho, you’ll need to form a foreign LLC.</p></br>
            <p>More information on Idaho <a href="/idaho-llc/form-filling-permit-requirements/" target="_blank">filing and licensing requirements here</a>.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Idaho? We’ve got you covered.
      <a href="/after-forming-llc/" target="_blank" >Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Information in This Guide`,
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
      text: `Naming Your Idaho LLC`,
      url: `/idaho-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Idaho business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Idaho LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Idaho Registered Agents for LLCs`,
      url: `/idaho-llc/registered-agents-idaho-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forIdaho Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Idaho LLCs`,
      url: `/idaho-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Idaho rules. Includes details of Employer Identification Numbers (EINs), Idaho and federal business licenses, annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Idaho LLC`,
      url: `/idaho-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Idaho government. Includes details of federal taxes like income and self-employment, and Idaho taxes like sales tax and income tax.`,
    marginBottom: 0,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Search for and Register Your Idaho LLC Name`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Idaho business name or registering your LLC with the ID Secretary of State, we can help. We’ve got all the information you need on a Idaho business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Idaho Business Entity Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Idaho LLC registered with your desired business name. That means searching the Idaho Secretary of State website using their business search tool. You can easily look up LLCs and corporations by name and other details.`,
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
      text: `Idaho Secretary of State business search tool.`,
      url: `https://sosbiz.idaho.gov/search/business`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Idaho SOS Naming Rules for LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Idaho Secretary of State naming rules.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Idaho. This is why you should check business name availability on the ID SOS website.`,
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
    content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Idaho.`,
    marginBottom: 24,
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
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or ID agency or organization (e.g., FBI, FDA, Idaho Department of Revenue Administration, Idaho Police, Treasury, etc.)`,
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
    content: `Idaho Assumed and “Doing Business As” (DBA) Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Idaho, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your ID formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Idaho Potato Processing Holding Company LLC and you have a brand called Northwestern Kettle Chips. You should file an assumed business name to let the Idaho Secretary of State know. In Idaho, you do that through the Cancellation or Amendment of Certificate of Assumed Business Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's DBA name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Name Registration for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Idaho business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your ID LLC name. There are a couple of ways to do this.`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your LLC right now, you can reserve the business name with the Idaho Secretary of State. You will need to complete an Application for Reservation of Name and file it with the ID SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://sosbiz.idaho.gov/forms/business" target="_blank" rel="noopener noreferrer">Idaho SOS LLC name reservation form.</a><p>`,
      },
      {
        text: `If you’re ready to start your LLC, you can formally file your Certificate of Formation with the Idaho SOS, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Idaho LLC`,
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
          question: `How Do I Search for My Idaho LLC Business Name?`,
          answer: `Just go to the <a href="https://sosbiz.idaho.gov/search/business" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Idaho Secretary of State, which will tell you if there are any ID corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Idaho LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Idaho). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Idaho?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Idaho LLC?`,
          answer: `Yes. The Idaho Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Additional Resources for Naming Your Idaho LLC`,
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
    content: `You must be careful that your Idaho LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Idaho LLC`,
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
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name.`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 32,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Idaho Registered Agents for LLCs`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Idaho Secretary of State requires every LLC to have a Registered Agent. Once you have assigned an Idaho Registered Agent, they can receive official correspondence and documents on behalf of your ID business. Registered agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing ID Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Idaho Secretary of State Says About Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Idaho Secretary of State on Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<i>“You can, as an individual, act as your own Registered Agent if you have an Idaho physical address. Or, you may use another legal business entity who is filed with our office with an Idaho physical address, but not your own entity. There is typically a fee associated with the representation services that Registered Agents provide. You must contact the company of your choice and enter into an agreement for representation before listing them as your Registered Agent.”</i>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Idaho Registered Agent Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Idaho Registered Agent service for your business.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ` They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Idaho.`,
        `If the Registered Agent is a business, they must be able to conduct business in Idaho.`,
        `The Registered Agent must have a physical street address in Idaho, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Idaho LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by a Idaho Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What can you expect from your Idaho Registered Agent? Their main function is to accept official documents and correspondence.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `This includes:`,
      list: [
        `Correspondence from the Idaho Secretary of State`,
        `Service of process notices (e.g., if your CO LLC is sued or required to appear in court)`,
        `Official Idaho state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free Idaho Registered Agent Service for the First Year`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Idaho Registered Agent service for any LLC that’s incorporated in ID. Even better, your Registered Agent is completely free for the first year—whether you incorporate with Incfile or not—and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Idaho and can legally act as your Registered Agent.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what the Incfile Idaho Registered Agent service provides for your LLC:`,
      list: [
        `An always-available Idaho Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Idaho business`,
        `Email notification whenever we receive documents for your business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
        `Your first year free ($119 a year after), whether you incorporate with Incfile or not`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Idaho registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing a Registered Agent Service for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Idaho LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Idaho Registered Agent When You Form Your LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Idaho Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Certificate of Formation with the Idaho Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the ID Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Idaho Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Idaho Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign a Different Idaho Registered Agent Service After Incorporation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form Statement of Change of Registered Office or Registered Agent, or Both with the Idaho Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Registered Agent, you can complete a form that’s available on the ID Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Idaho Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our ID Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Idaho Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Idaho registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Idaho Registered Agent Searchh`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Idaho LLC. If you do, you can search the business database of the Idaho Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the Idaho Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint an Idaho Registered Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Idaho Secretary of State?`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Idaho Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a Idaho LLC: A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the Idaho Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Idaho, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The Registered Agent must have a physical street address in Idaho. If you’re forming an LLC outside ID, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Idaho address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the Idaho Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Idaho business address or move out of state, you need to file additional documentation with the ID Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `FAQs About Idaho Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Idaho Registered Agent?`,
          answer: `Yes. All ID LLCs are required to have a Registered Agent. This is mandated by the Idaho Secretary of State.`,
        },
        {
          question: `When Can I Assign a Idaho Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Idaho business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Idaho?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Idaho Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Idaho?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Idaho Registered Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a Idaho Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Idaho Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Idaho Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Idaho LLC Fees and Filing Requirements`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Idaho, including related fees and costs. Your ID LLC needs to pay various fees to the federal government, Idaho government and other agencies. Some of these fees are levied by the Idaho Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Idaho business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in Idaho`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Idaho, you’ll file an LLC with the Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Idaho:`,
    marginBottom: 24,
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the Idaho Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Idaho.</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Idaho LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=ID`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Idaho LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Idaho LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Idaho`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Idaho LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Idaho. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your ID LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Idaho:`,
    marginBottom: 24,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Idaho LLC filing requirements</a> and business filing deadlines with our helpful Idaho ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Idaho Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Permits and Licenses in Idaho`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some Idaho LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Idaho LLC (state, county or city) (e.g., a license to conduct business from the city of Boise)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 48,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `The Incfile Business License Research Package for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Idaho LLC.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `It includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Idaho LLC will need`, `The application forms you will need to file with the Idaho, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Idaho and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your Idaho LLC`,
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
    content: `Idaho LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Idaho business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Idaho Fees or Requirements for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Idaho LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your business to trade under a different name, you can file a form with the Idaho Secretary of State. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Idaho Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Idaho LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete Idaho Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your business right away, you can reserve a name with the Idaho Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Idaho LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Idaho business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Idaho Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Idaho LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Idaho LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Idaho LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Idaho Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Idaho certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard Idaho LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Idaho LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for Idaho LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Idaho LLC Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Idaho LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Idaho business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Idaho requires you to file a report for your LLC every year.`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Idaho LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Idaho LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Idaho LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your LLC will need to pay a variety of taxes to both the federal and Idaho governments. We’ll cover all the main taxes in Idaho including self-employment, payroll, federal, state tax and Idaho sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Idaho LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Idaho LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Idaho LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Idaho LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Idaho LLC owners pay state tax on dividends and interest.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Idaho personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Taxes Payable to the Idaho Tax Commission`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Idaho Tax Commission: state income tax and state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Idaho State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As an Idaho business owner, you will need to pay ID state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Idaho income tax. You will be taxed at the standard rates for Idaho state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Idaho state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Idaho state tax rates vary between 1.125% to 6.925% on taxable income. Individual income tax is graduated so higher earnings are taxed at a higher rate.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href= "https://tax.idaho.gov/i-2022.cfm" target="_blank" rel="noopener noreferrer">Idaho state tax online here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your Idaho Sales Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the ID Tax Commission. Idaho sales tax is collected at the point of purchase. Idaho sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Idaho business might provide`],
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
    content: `Get details on the <a href= "https://tax.idaho.gov/i-2022.cfm" target="_blank" rel="noopener noreferrer">Idaho state tax online here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Idaho LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple of different federal taxes that every LLC will need to pay, including Idaho LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Idaho LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Idaho business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $20,000, you would pay self-employment tax of $3,060.`, `On profits of $50,000, you would pay self-employment tax of $7,650.`, `On profits of $80,000, you would pay self-employment tax of $12,240.`, `On profits of $120,000, you would pay self-employment tax of $18,360.`],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Idaho LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Idaho LLC self-employment tax through an S Corporation tax election.`,
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
    content: `You must also pay regular federal income tax on any earnings you take out of your Idaho LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Idaho LLC`,
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
    content: `Employer Federal Tax Withholding`,
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
    content: `Regardless of whether you withhold federal tax, your employees may need to file their own tax returns.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee Insurance and Other Requirements`,
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
    content: `Get more requirements from the <a href="https://labor.idaho.gov/" target="_blank" rel="noopener noreferrer">the Idaho Department of Labor website.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Idaho LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Idaho LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Idaho LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most Idaho LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Idaho state tax`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Idaho LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Idaho LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Idaho Have Sales Tax?`,
          answer: `Yes. Idaho does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Idaho Have a State Tax?`,
          answer: `Yes. Idaho does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Idaho tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
