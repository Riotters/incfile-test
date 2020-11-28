import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in Connecticut `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Located in the southern part of beautiful New England, Connecticut has the highest per capita and median household income in the U.S. Bordered by New York, Rhode Island and Massachusetts, the state was very influential in the formation of the U.S. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Today, finance, insurance and other industries are major contributors to the state’s economy. Combined with a high disposable income, this makes Connecticut an ideal place for entrepreneurs. For most business owners, the fastest and easiest way to start a business in Connecticut is by creating a Connecticut LLC. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger CT corporations but with much simpler rules and regulations.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Connecticut LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Connecticut LLC`, `Easy tax filing and potential advantages for your tax treatment`],
    },
    marginBottom: 48,
    color: color.yellow3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here</a>.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Start a Connecticut LLC in Six Quick Steps`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Connecticut LLC, but you can break down the basics of forming a business in CT into just a few simple steps.`,
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
          question: `STEP 2: Choose a Unique Business Name for Your Connecticut LLC`,
          answer: `<p>You will need a distinctive and original name for your Connecticut LLC that’s not used by any other business in CT. To find out if another company is using your chosen business name, carry out a Connecticut business entity name search on the CT Secretary of State website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Connecticut LLC.</p></br>
                   <a href="/connecticut-llc/how-to-name-your-llc/"> Learn about Connecticut LLC Business Naming Rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your CT LLC`,
          answer: `Every Connecticut LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Connecticut, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: STEP 4: Assign a Registered Agent for Your Connecticut LLC`,
          answer: `<p>Every CT LLC or corporation must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Connecticut Secretary of State.</p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your CT Registered Agent must have a physical street address in Connecticut and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Connecticut Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/connecticut-llc/registered-agents-connecticut-llc/">Learn more about Connecticut Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Connecticut LLC business formation process.`,
        },
        {
          question: `STEP 6: File a Certificate of Organization With the Connecticut Secretary of State`,
          answer: `<p> Once you've gathered all the information for your Connecticut LLC, you’ll need to file a formal document with the CT Secretary of State. Known in some states as “Articles of Organization,” in CT, this document is called your “Certificate of Organization,” and filing the document creates your Connecticut LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and addresses </li>
                   <li> Details of your Registered Agent </li>
                   <li> Names of managers or members of the LLC at the time of filing </li>
                   <li> Addresses of managers or members of the LLC at the time of filing </li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your Connecticut LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Connecticut. You only need to file your Certificate of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Connecticut Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The CT Secretary of State has plenty of information on forming and running a business in Connecticut. These are all the basic steps for forming an LLC in Connecticut.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You’ll find other useful information below:`,
      list: [
        `<a href="https://portal.ct.gov/DRS/Businesses/Business-Tax-Page/Starting-a--New-Business" target="_blank" rel="noopener noreferrer">Connecticut Secretary of State for forming and running your CT LLC</a>`,
        `<a href="https://www.ctdol.state.ct.us/" target="_blank" rel="noopener noreferrer">Connecticut Department of Labor for CT employers and hiring</a>`,
        `<a href="https://portal.ct.gov/drs" target="_blank" rel="noopener noreferrer">Connecticut Department of Revenue Services for CT taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Special Types of Connecticut LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `A regular Connecticut LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional Connecticut LLC`,
          answer: `Some states, including Connecticut, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the CT Secretary of State allows to form Connecticut professional LLCs: Dentists, naturopaths, chiropractors, physicians and surgeons, physician assistants, doctors of dentistry, physical therapists, occupational therapists, podiatrists, optometrists, nurses, nurse-midwives, veterinarians, pharmacists, architects, professional engineers (or jointly with architects and professional engineers), landscape architects, real estate brokers, insurance producers, certified public accountants and public accountants, land surveyors, psychologists, attorneys-at-law, licensed marital and family therapists, licensed professional counselors, licensed or certified alcohol and drug counselors and licensed clinical social workers.`,
        },
        {
          question: `Form a Foreign LLC in Connecticut`,
          answer: `<p>If your business is already operating in another state and expanding to Connecticut, you’ll need to form a foreign LLC.</p></br>
          <p><a href="/connecticut-llc/form-filling-permit-requirements/">More information on Connecticut filing and licensing requirements here.</a></p>`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Connecticut? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Connecticut LLC`,
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
      text: `Naming Your Connecticut LLC`,
      url: `/connecticut-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Connecticut business registry of the CT Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Connecticut LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Connecticut Registered Agents for Your LLC`,
      url: `/connecticut-llc/registered-agents-connecticut-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Connecticut Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Connecticut Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Connecticut LLCs`,
      url: `/connecticut-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Connecticut rules. Includes details of Employee Identification Numbers (EINs), Connecticut and federal business licenses, Connecticut Annual Reports and more.

    `,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Connecticut LLC`,
      url: `/connecticut-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Connecticut government. Includes details of federal taxes like income and self-employment, and Connecticut taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Connecticut Secretary of State Business Search and Registering Your LLC Name`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your Connecticut business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the CT Secretary of State business register, tell you about the rules for naming your business, describe Assumed/Fictitious/DBA names and get you started with registering your LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut Business Entity Search on the SOS Website`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Connecticut LLC registered with your desired business name. That means searching the Connecticut Secretary of State website using their business search tool. You can easily look up CT LLCs and corporations by name and other details. Using the tool is easy:`,
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
      text: `Connecticut Secretary of State business name search tool.`,
      url: `https://www.concord-sots.ct.gov/CONCORD/online?sn=PublicInquiry&eid=9740`,
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Connecticut SOS Rules on Your LLC Business Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Connecticut Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in CT.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Business Name Availability Rules`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Connecticut LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Connecticut. This is why you should check business name availability on the CT SOS website.`,
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
    content: `It’s not enough for your CT LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Connecticut. For example, you cannot use the following factors to say your name is different from the name of another business:

    `,
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
        `Are very similar to the name of a federal or CT agency or organization (e.g., FBI, FDA, Connecticut Department of Revenue Services, Connecticut Police, Treasury, etc.)`,
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
    content: `Connecticut LLC Fictitious Names`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Connecticut, doing business under a different name is known as an “Assumed,” “Fictitious” or “Doing Business As” (DBA) name. You might choose to use a different name from your CT formal LLC name for a variety of reasons.`,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Connecticut Travel Holding Company LLC, and you have a chain called “Bridgeport Adventures.” You should file an Assumed Name to let the Connecticut Secretary of State know. In Connecticut, you do that by sending a letter to the Secretary of State and Department of Revenue Services, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 32,
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
    content: `Register Your Connecticut LLC Company Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Connecticut business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your CT LLC name. There are a couple of ways to do this.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If you don’t want to form your Connecticut LLC right now, you can reserve the business name with the Connecticut Secretary of State. You will need to complete an “Application for reservation of name” form and file it with the CT SOS. You do not need to reserve a name if you are forming your business right away.
              <a href="https://portal.ct.gov/-/media/sots/CommercialRecording/AllForms/allnamereservationpdf.pdf?la=en" target="_blank" rel="noopener noreferrer">Connecticut SOS LLC name reservation form.</a>`,
        `If you’re ready to start your Connecticut LLC, you can formally file your Certificate of Organization with the Connecticut SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Connecticut LLC`,
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
          question: `How Do I Search for My Connecticut LLC Business Name?`,
          answer: `Just go to the <a href="https://www.concord-sots.ct.gov/CONCORD/online?sn=PublicInquiry&eid=9740" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Connecticut Secretary of State, which will tell you if there are any CT corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Connecticut LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Connecticut). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Connecticut?`,
          answer: `Yes. Known as “Assumed Names,” “Fictitious Names,” “Doing Business As Names” or “Trade Names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Connecticut LLC?`,
          answer: `Yes. The Connecticut Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Connecticut LLC`,
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
    content: `You must be careful that your Connecticut LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Connecticut Company`,
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
    content: `A Connecticut Registered Agent for Your LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your CT LLC is legally required to have a Connecticut Registered Agent. Your Registered Agent is a person or a business who is formally recognized by the Connecticut Secretary of State to accept business documents and correspondence on behalf of your company.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Connecticut Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing CT Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What the Connecticut Secretary of State Says About CT Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Connecticut Secretary of State on CT Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `“A registered agent is a responsible third-party who is registered in the same state in which a business entity was established and who is designated to receive service of process notices and correspondence on behalf of the corporation or LLC.”`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Rules for Connecticut Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Connecticut Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Connecticut.`,
        `If the Registered Agent is a business, they must be able to conduct business in Connecticut.`,
        `The Registered Agent must have a physical street address in Connecticut, not a P.O. Box.`,
        `The CT Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the CT Registered Agent address does not need to be the same as your Connecticut LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a Connecticut Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your Connecticut Registered Agent? Their main function is to accept official documents and correspondence from the CT Secretary of State. This includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the Connecticut Secretary of State`,
        `Service of process notices (e.g., if your CT LLC is sued or required to appear in court)`,
        `Official Connecticut state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Connecticut LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Connecticut and you need a CT Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Connecticut business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Connecticut and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what you need to know about Incfile’s CT Registered Agent service:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Connecticut Secretary of State or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Connecticut registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Connecticut Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Connecticut LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Connecticut Registered Agent When You Form Your CT LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a Connecticut Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File a Certificate of Organization With the Connecticut Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Organization. This is the form that you file with the CT Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Connecticut Registered Agent `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Organization based on the information you’ve provided. Additionally, we give you a free Connecticut Registered Agent service for the first year, and we’ll include details of your CT Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Connecticut Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your CT Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Change of Agent Form`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Connecticut Registered Agent, you can complete a Change of Agent form online. Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s Connecticut Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our CT Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete a Change of Agent form on your behalf and send it to the Connecticut Secretary of State. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Connecticut registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `CT Registered Agent Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Connecticut LLC. If you do, you can search the business database of the Connecticut Secretary of State, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the CT Registered Agent isn’t available from the searchable business registry, contact the Connecticut Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a Connecticut Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Connecticut Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Connecticut Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a Connecticut LLC:</b> A CT Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Connecticut Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Connecticut, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The CT Registered Agent must have a physical street address in Connecticut. If you’re forming an LLC outside CT, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Connecticut address to sign for important documents.`,
        `The CT Registered Agent’s name and address are part of the public record and available through the Connecticut Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Connecticut business address or move out of state, you would need to file additional documentation with the CT Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Connecticut Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Connecticut Registered Agent?`,
          answer: `Yes. All CT LLCs are required to have a Registered Agent. This is mandated by the Connecticut Secretary of State.

          `,
        },
        {
          question: `When Can I Assign a Connecticut Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Connecticut business through paperwork filed with the CT Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Connecticut?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Connecticut Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Connecticut?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Connecticut Registered Agent Services`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of a Connecticut Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Connecticut Registered Agent</a>`,
        `<a href-"/research-topics/registered-agent/registered-agent-tasks/">What a Connecticut Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Connecticut Business Licenses, Fees & Other Requirements for Your LLC `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Connecticut, including related fees and costs. Your CT LLC needs to pay various fees to the federal government, Connecticut government and other agencies. Some of these fees are levied by the Connecticut Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Connecticut business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut LLC Incorporation Costs & Filing`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `To create your business in Connecticut, you’ll file an LLC with the CT Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Connecticut:`,
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
    content: `When you incorporate through Incfile, we forward this fee to the Connecticut Secretary of State on your behalf when we file your paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Connecticut.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Connecticut LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CT`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your CT LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every Connecticut LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Connecticut LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting a State Tax ID for Connecticut`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need a tax registration number to pay CT taxes. You can get this by <a href="https://portal.ct.gov/DRS/DRS-Forms/Registration/Register-Your-Business" target="_blank" rel="noopener noreferrer> registering your business online. </a>`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Connecticut`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your Connecticut LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Connecticut. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Connecticut Annual Report Filing and Fees for LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most states, including Connecticut, need you to file an Annual Report with the secretary of state. When you file your CT LLC Annual Report, you will need to pay a fee. Here are the annual filing requirements for Connecticut: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Connecticut LLC filing requirements</a> and business filing deadlines with our helpful Connecticut ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Connecticut Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Connecticut Business Licenses and Permits `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Connecticut LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Connecticut, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Connecticut LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Connecticut LLC (state, county or city) (e.g., a license to conduct business from the city of Bridgeport)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `The Incfile Business License Research Package for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Connecticut LLC. It includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`A complete report on all the licenses, permits and tax registrations your Connecticut LLC will need`, `The application forms you will need to file with the Connecticut, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Connecticut and local governments.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Connecticut LLC Operating Agreements`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Connecticut business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ad Hoc Connecticut Fees or Requirements for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Connecticut LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your CT business to trade under a different name, you can file a form with the Connecticut Secretary of State. You will need to pay a Connecticut filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Connecticut Registered Agent for Your CT LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Connecticut LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new CT Registered Agent later. Incfile provides a complete Connecticut Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you don’t want to form your CT business right away, you can reserve a name with the Connecticut Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Connecticut business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Connecticut Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Connecticut Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Connecticut LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Connecticut LLC`],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a CT Secretary of State Certificate of Good Standing`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Connecticut LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Connecticut Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Connecticut certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard CT LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Connecticut LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for CT LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Connecticut LLC Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Connecticut LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Connecticut business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Connecticut, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for Connecticut LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Connecticut LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Connecticut Business Taxes for Your LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Connecticut LLC will need to pay. These include tax that’s payable to the Connecticut government, like Connecticut sales taxes and Connecticut state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Connecticut LLC Will Be Taxed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a Connecticut LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Connecticut LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Connecticut LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Connecticut LLC owners pay CT state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some CT LLCs pay Connecticut sales tax on products`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees`,
      },
      {
        text: `Employees pay federal, state and payroll tax on their earnings`,
      },
    ],
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Connecticut personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut Taxes Payable to the CT Department of Revenue Services`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Connecticut Department of Revenue Services: Connecticut state income tax and Connecticut state sales tax.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `State Taxes in Connecticut`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As a Connecticut business owner, you will need to pay CT state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Connecticut income tax. You will be taxed at the standard rates for Connecticut state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Connecticut state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Connecticut state tax rate varies between 3 and 6.99 percent, depending on how much you earn. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `CT Sales Taxes and Filing for LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the CT Department of Revenue Services. Connecticut sales tax is collected at the point of purchase. Connecticut sales tax rates do vary depending on the region, county or city where you are located. <a href="https://portal.ct.gov/Services/Revenue/State-Individual-Taxes" target="_blank" rel="noopener noreferrer"> Get details of the CT state tax here.</a>`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Connecticut sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Connecticut business might provide`],
    },
    marginBottom: 32,
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
    content: `Get details on the <a href="https://portal.ct.gov/drs" target="_blank" rel="noopener noreferrer">Connecticut sales tax here</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Getting a State Tax ID for Connecticut`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need a tax registration number to pay CT taxes. You can get this by <a href="https://portal.ct.gov/DRS/DRS-Forms/Registration/Register-Your-Business" target="_blank" rel="noopener noreferrer" > registering your business online. </a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut Sales Tax Rates`,
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
    content: `Federal Self-Employment and Income Taxes for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Connecticut LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All Connecticut LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Connecticut business. The current self-employment tax rate is 15.3 percent.`,
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
        `On profits of $100,000, you would pay self-employment tax of $15,300`,
        `On profits of $120,000, you would pay self-employment tax of $18,360`,
        `On profits of $140,000, you would pay self-employment tax of $21,420`,
        `On profits of $160,000, you would pay self-employment tax of $24,480`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Connecticut LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Connecticut LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Connecticut LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Connecticut LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Connecticut LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Connecticut LLC`,
    size: 3,
    marginBottom: 32,
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
          question: `Employer Payroll Tax Withholding for Your Connecticut LLC `,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Connecticut LLC`,
          answer: `You may also choose to withhold federal and Connecticut state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Connecticut state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Connecticut LLC Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the Connecticut Department of Labor website.`,
                  url: `https://www.ctdol.state.ct.us/`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Connecticut LLC`,
          answer: `Depending on the industry you are in, your Connecticut LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Connecticut LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Connecticut LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. `,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `Connecticut state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Connecticut LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Connecticut LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Connecticut Have Sales Tax?`,
          answer: `Yes. Connecticut does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Connecticut Have a State Tax?`,
          answer: `Yes. Connecticut does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on any Connecticut tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
