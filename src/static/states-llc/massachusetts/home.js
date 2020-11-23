import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MA`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in Massachusetts`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `As the most populous state in New England and the home of Harvard and the Massachusetts Institute of Technology, The Pilgrim State is a prosperous and exciting place to be an entrepreneur. A rich history in academia and industry has made the Commonwealth of Massachusetts a global leader in education, science, biotechnology, finance, engineering and trade.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Massachusetts, one of the best ways to do so is by forming a Massachusetts LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Massachusetts LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In Massachusetts, the Corporations Division is responsible for administering businesses, including LLCs. This is in contrast to the secretary of state, which is the entity that manages businesses in many other states.  `,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Massachusetts LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Massachusetts LLC`, `Easy tax filing and potential advantages for your tax treatment`],
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
    content: `Six Quick Steps to Setting Up an LLC in Massachusetts`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on setting up an LLC in MA. On this page you’ll find the basic steps of how to form a Massachusetts LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Massachusetts LLC`,
          answer: `<p>You will need a distinctive and original name for your Massachusetts LLC that’s not used by any other business in MA. To find out if another company is using your chosen business name, carry out a Massachusetts business entity name search on the MA Corporations Division website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Massachusetts LLC.</p></br>
                   <a href="/massachusetts-llc/how-to-name-your-llc/"> Learn about Massachusetts LLC business naming rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your Massachusetts LLC`,
          answer: `Every Massachusetts LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Massachusetts, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered/Resident for Your Massachusetts LLC`,
          answer: `<p>Every MA LLC must have a “Registered Agent,” known in Massachusetts as a “Resident Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Massachusetts Corporations Division.</p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your MA Resident Agent must have a physical street address in Massachusetts and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Massachusetts Resident Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/massachusetts-llc/registered-agents-massachusetts-llc/">Learn more about Massachusetts Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Massachusetts LLC business formation process.`,
        },
        {
          question: `STEP 6: File Certificate of Organization With the Massachusetts Corporations Division`,
          answer: `<p> Once you've gathered all the information for your Massachusetts LLC, you’ll need to file a formal document with the MA Corporations Division. This document is known as your “Certificate of Organization,” and filing the document creates your Massachusetts LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> The general character of the business </li>
                   <li> Details of your Resident Agent </li>
                   <li> Names of managers or members of the LLC at the time of filing </li>
                   <li> Addresses of managers or members of the LLC at the time of filing </li>
                   <li> Contact information </li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your Massachusetts LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Massachusetts. You only need to file your Certificate of Organization once. </p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MA"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Massachusetts Corporations Division`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `The MA Corporations Division has plenty of information on forming and running a business in Massachusetts. We’ve covered the basic steps for filing an LLC in Massachusetts, but you’ll find other useful information below.`,
      list: [
        `<a href="https://www.sec.state.ma.us/cor/coridx.htm/" target="_blank" rel="noopener noreferrer">Massachusetts Corporations Division for forming and running your MA LLC</a>`,
        `<a href="https://www.mass.gov/orgs/department-of-labor-standards/" target="_blank" rel="noopener noreferrer">Massachusetts Department of Labor Standards for MA employers and hiring</a>`,
        `<a href="https://www.mass.gov/orgs/massachusetts-department-of-revenue/" target="_blank" rel="noopener noreferrer">Massachusetts Department of Revenue for MA taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Special Types of Massachusetts LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `A regular Massachusetts LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Professional Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some states, including Massachusetts, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Massachusetts does not list the specific professions that can form these LLCs.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Massachusetts`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `<p>If your business is already operating in another state and expanding to Massachusetts, you’ll need to form a foreign LLC.</p></br>
              <p> More information on Massachusetts <a href="/massachusetts-llc/form-filling-permit-requirements/"> filing and licensing requirements here</a> </p>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after Massachusetts LLC filing? We’ve got you covered. <a href="/after-forming-llc/"> Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Massachusetts LLC`,
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
      text: `Naming Your Massachusetts LLC`,
      url: `/massachusetts-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Massachusetts business registry of the MA Corporations Division and find the right name. Includes information on naming rules, fictitious names, reserving a Massachusetts LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Massachusetts Resident Agents for Your LLC`,
      url: `/massachusetts-llc/registered-agents-massachusetts-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Massachusetts business registry of the MA Corporations Division and find the right name. Includes information on naming rules, fictitious names, reserving a Massachusetts LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Massachusetts LLC`,
      url: `/massachusetts-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Massachusetts rules. Includes details of Employee Identification Numbers (EINs), Massachusetts and federal business licenses, Massachusetts annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Massachusetts LLC`,
      url: `/massachusetts-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Massachusetts government. Includes details of federal taxes like income and self-employment, and Massachusetts taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Massachusetts Secretary of State Business Search and Registering Your LLC Name`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your Massachusetts LLC. From searching for a business name with the MA Corporations Division to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Conducting a Business Entity Search on the MA SOS Website`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a “Massachusetts business entity search” with the Corporations Division. They have a helpful tool on their website that lets you search the register of MA LLCs and corporations to see if someone already has your desired business name. `,
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
      text: `Massachusetts Corporations Division business name search tool `,
      url: `https://www.sec.state.ma.us/cor/corsearch.htm/`,
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Massachusetts Corporations Division Rules for LLC Business Names`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Massachusetts Corporations Division naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in MA.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Rules for Naming Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Massachusetts LLC.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Massachusetts. This is why you should check business name availability on the MA Corporations Division website.`,
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
    content: `It’s not enough for your MA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Massachusetts. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
        `Are very similar to the name of a federal or MA agency or organization (e.g., FBI, FDA, Massachusetts Department of Revenue, Massachusetts Police, Treasury, etc.)`,
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
    content: `DBA/Fictitious Business Names in Massachusetts`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Massachusetts, doing business under a different name is known as a “Fictitious Name” or a DBA (”Doing Business As”) name. You might choose to use a different name from your MA formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Massachusetts Bioscience Holding Company LLC, and you have a specialized service called “Genetic Medicine Research Services.” You should file a Fictitious Name to let the Massachusetts Corporations Division know.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's fictitious business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Massachusetts LLC Business Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Massachusetts business name, checked availability, followed the naming rules and decided whether you need a Fictitious Name, you can register your MA LLC name. There are a couple of ways to do this.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If you don’t want to form your Massachusetts LLC right now, you can reserve the business name with the Massachusetts Corporations Division. You do not need to reserve a name if you are forming your business right away.
              <a href="https://www.sec.state.ma.us/cor/corpweb/cornameres/nameresinf.htm/" target="_blank" rel="noopener noreferrer">Massachusetts Corporations Division LLC name reservation</a>`,
        `If you’re ready to start your Massachusetts LLC, you can formally file your Certificate of Organization with the Massachusetts Corporations Division, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MA">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Massachusetts LLC`,
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
          question: `How Do I Search for My Massachusetts LLC Business Name?`,
          answer: `Just go to the <a href="https://www.sec.state.ma.us/cor/corsearch.htm/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Massachusetts Corporations Division, which will tell you if there are any MA corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Massachusetts LLC?`,
          answer: `Yes. Most LLCs will be bound by naming rules; we’ve detailed these rules for MA above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Massachusetts?`,
          answer: `Yes. Known as “Assumed Names,” “Fictitious Names,” “Doing Business As names” or “Trade Names,” you can choose to conduct business under a different name. Details are above. `,
        },
        {
          question: `Can I Reserve a Name for My Massachusetts LLC?`,
          answer: `Yes. The Massachusetts Corporations Division allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Massachusetts LLC`,
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
    content: `You must be careful that your Massachusetts LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Massachusetts LLC`,
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
    content: `Massachusetts Registered Agents for LLCs`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your MA LLC must assign a Massachusetts Registered/Resident Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the Massachusetts Corporations Division. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Massachusetts Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing MA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What the Massachusetts Corporations Division Says About Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In Massachusetts, a Registered Agent is formally known as a “Resident agent,” and we’ll use the terms interchangeably in this guide. Their functions and requirements are identical to those of Registered Agents described above. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Rules for Massachusetts Resident Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Massachusetts Resident Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If the Registered Agent is a person, they must reside in Massachusetts.`,
        `If the Registered Agent is a business, they must be able to conduct business in Massachusetts.`,
        `The Registered Agent must have a physical street address in Massachusetts, not a P.O. Box.`,
        `The MA Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the MA Registered Agent address does not need to be the same as your Massachusetts LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a Massachusetts Resident Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your Massachusetts Registered Agent? Their main function is to accept official documents and correspondence from the MA Corporations Division. This includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the Massachusetts Corporations Division`,
        `Service of process notices (e.g., if your MA LLC is sued or required to appear in court)`,
        `Official Massachusetts state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `A Complete Massachusetts Registered Agent Service From Incfile`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Massachusetts and you need a MA Registered Agent, we can help. Incfile provides a complete Resident Agent service for any Massachusetts business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Massachusetts and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Infile Massachusetts Registered Agent service provides for your MA LLC:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `An always-available Massachusetts Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Massachusetts business`,
        `Email notification whenever we receive documents for your Massachusetts business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
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
    content: `How to Appoint a Massachusetts Resident Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Massachusetts LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Assign Your Massachusetts Registered Agent When You Form Your MA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a Massachusetts Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `File Certificate of Organization With the Massachusetts Corporations Division`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Organization. This is the form that you file with the MA Corporations Division to formally create your business.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Massachusetts Resident Agent `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Organization based on the information you’ve provided. Additionally, we give you a free Massachusetts Registered Agent service for the first year, and we’ll include details of your MA Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MA`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Change Your Massachusetts Resident Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your MA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form With the Massachusetts Corporations Division`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Massachusetts Registered Agent, you can complete a form and send it to the Corporations Division so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s Massachusetts Resident Agent Service, and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our MA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Massachusetts Corporations Division. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Massachusetts registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Searching for MA Registered Agents for Other LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Resident Agent that represents another Massachusetts LLC. If you do, you can search the business database of the Massachusetts Corporations Division, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the MA Registered Agent isn’t available from the searchable business registry, contact the Massachusetts Corporations Division requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a Massachusetts Resident Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Massachusetts Corporations Division? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Massachusetts Corporations Division:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a Massachusetts LLC:</b> A MA Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Massachusetts LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the Massachusetts Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in Massachusetts, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The MA Registered Agent must have a physical street address in Massachusetts. If you’re forming an LLC outside MA, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Massachusetts address to sign for important documents.`,
        `The MA Registered Agent’s name and address are part of the public record and available through the Massachusetts Corporations Division's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Massachusetts business address or move out of state, you would need to file additional documentation with the MA Corporations Division for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Massachusetts Resident Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Massachusetts Registered Agent?`,
          answer: `Yes. All MA LLCs are required to have a Registered Agent. This is mandated by the Massachusetts Corporations Division.`,
        },
        {
          question: `When Can I Assign a Massachusetts Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Massachusetts business through paperwork filed with the MA Corporations Division or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Massachusetts?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Massachusetts Corporations Division.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Massachusetts?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Massachusetts Resident Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Massachusetts Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Massachusetts Registered Agent</a>`,
        `<a href-"/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Massachusetts Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Massachusetts Reporting, Licensing & Filing Requirements for LLCs `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Massachusetts business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Massachusetts Corporations Division, while others are due to the federal or Massachusetts government. We’ve summarized the most common requirements and fees here. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Massachusetts business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts LLC Incorporation Filing and Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Massachusetts, you’ll need to file an LLC with the MA Corporations Division and pay a Massachusetts filing fee. Here are the current fees and filing times for Massachusetts:`,
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
    content: `When you form your MA LLC through Incfile, we automatically forward this fee to the Massachusetts Corporations Division when we file your incorporation paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/"> compare state filing times and fees here, including expedited fees for Massachusetts.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Massachusetts LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your MA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every Massachusetts LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Massachusetts LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Massachusetts`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your Massachusetts LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Massachusetts. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Massachusetts LLC Annual Report Filing and Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most states need you to file a yearly (or other periodic) report with their Corporations Division. When you file your MA LLC Annual Report, you may need to pay a fee. Here are the annual filing requirements for Massachusetts: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Massachusetts LLC filing requirements</a> and business filing deadlines with our helpful Massachusetts ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Massachusetts Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Massachusetts Business Licenses and Permits`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Massachusetts LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Massachusetts, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Massachusetts LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Massachusetts LLC (state, county or city) (e.g., a license to conduct business from the city of Boston)`,
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
      list: [`A complete report on all the licenses, permits and tax registrations your Massachusetts LLC will need`, `The application forms you will need to file with the Massachusetts, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Massachusetts and local governments.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Massachusetts LLC Operating Agreement `,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Massachusetts business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc Massachusetts Fees or Requirements for Your MA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Massachusetts LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name or Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your MA business to trade under a different name, you can file a form with the Massachusetts Corporations Division. You will need to pay a Massachusetts filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Massachusetts Registered Agent for Your MA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Massachusetts LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new MA Registered Agent later. Incfile provides a complete Massachusetts Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you don’t want to form your MA business right away, you can reserve a name with the Massachusetts Corporations Division. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Massachusetts business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Massachusetts Corporations Division. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Massachusetts Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Massachusetts LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Massachusetts LLC`],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts Secretary of State Certificate of Good Standing `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Massachusetts LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Massachusetts Corporations Division. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Massachusetts certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard MA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Massachusetts LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for MA LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Massachusetts LLC Costs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Massachusetts LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Corporations Division on your behalf when forming your Massachusetts business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Massachusetts requires you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Massachusetts LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Massachusetts LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes for Massachusetts LLCs`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your MA LLC will need to pay a variety of taxes to both the federal and Massachusetts governments. We’ll cover all the main taxes in Massachusetts including self-employment, payroll, federal, Massachusetts state tax and Massachusetts sales tax. If you want to get a Massachusetts tax ID, you can acquire one by contacting the MA Department of Revenue.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Massachusetts LLC Will Be Taxed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a Massachusetts LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Massachusetts LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Massachusetts LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Massachusetts LLC owners pay MA state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some MA LLCs pay Massachusetts sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Massachusetts personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Massachusetts Business Taxes Payable to the MA Government`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Massachusetts Department of Revenue: Massachusetts state income tax and Massachusetts state sales tax. You will need an MA tax ID for paying each one. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts State Income Tax Payable on LLC Earnings`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As a Massachusetts business owner, you will need to pay MA state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Massachusetts income tax. You will be taxed at the standard rates for Massachusetts state taxes, and you will also get to apply regular allowances and deductions. Any salaried employees will also need to pay personal Massachusetts state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Massachusetts state tax rate is just over 5 percent. `,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `<a href="https://www.mass.gov/service-details/dor-tax-forms-and-instructions/" target="_blank" rel="noopener noreferrer" >Get details on the Massachusetts state tax online here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts Sales Tax for LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the MA Department of Revenue. Massachusetts sales tax is collected at the point of purchase. Massachusetts sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Massachusetts sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Massachusetts business might provide`],
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
    content: `Get details on the <a href="https://www.mass.gov/guides/sales-and-use-tax/" target="_blank" rel="noopener noreferrer">Massachusetts sales tax online here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts Sales Tax Rates`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Massachusetts LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All Massachusetts LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Massachusetts business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $40,000, you would pay self-employment tax of $6,120.`, `On profits of $80,000, you would pay self-employment tax of $12,240`, `On profits of $120,000, you would pay self-employment tax of $18,360`, `On profits of $160,000, you would pay self-employment tax of $24,480.`],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Massachusetts LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Massachusetts LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Massachusetts LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Massachusetts LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Massachusetts LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Massachusetts LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Employer Payroll Tax Withholding for Your Massachusetts LLC`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Massachusetts LLC`,
          answer: `You may also choose to withhold federal and Massachusetts state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Massachusetts state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Massachusetts LLC Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the Massachusetts Department of Labor Standards website.`,
                  url: `https://www.mass.gov/orgs/department-of-labor-standards`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Massachusetts LLC`,
          answer: `Depending on the industry you are in, your Massachusetts LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Massachusetts LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Massachusetts LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              content: [`Federal income tax`, `Federal self-employment tax`, `Massachusetts state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Massachusetts LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Massachusetts LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Massachusetts Have Sales Tax?`,
          answer: `Yes. Massachusetts does have a sales tax, which may vary among cities and counties. `,
        },
        {
          question: `Does Massachusetts Have a State Tax?`,
          answer: `Yes. Massachusetts does have a general state income tax. `,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Massachusetts tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
