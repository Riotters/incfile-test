import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NH`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in New Hampshire`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `One of the smallest states in the country, New Hampshire is located in the northeastern portion of the U.S. New Hampshire does not have state or sales taxes, making it a relaxed financial environment to start a business. Popular industries include agriculture, real estate, professional services, manufacturing and healthcare.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in New Hampshire is by creating a New Hampshire LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger New Hampshire corporations, but with much simpler rules and regulations.`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a New Hampshire LLC include:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulation and administration of your New Hampshire LLC`,
        `Easy tax filing and potential advantages for your tax treatment`,
      ],
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
    content: `Six Quick Steps to Forming Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your New Hampshire LLC, but you can break down the basics of forming a business in NH into just a few simple steps.`,
    marginBottom: 32,
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
          question: `STEP 2: Choose a Unique Business Name for Your New Hampshire LLC`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in NH. To find out if another company is using your chosen business name, carry out a business entity name search on the NH Secretary of State website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your New Hampshire LLC.</p></br>
                   <a href="/new-hampshire-llc/how-to-name-your-llc/"> Learn about New Hampshire LLC Business Naming Rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your NH LLC`,
          answer: `Every New Hampshire LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of New Hampshire, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a New Hampshire Registered Agent`,
          answer: `<p>Every NH LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the New Hampshire Secretary of State.</p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in New Hampshire and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a New Hampshire Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/new-hampshire-llc/registered-agents-new-hampshire-llc/">Learn more about New Hampshire Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the New Hampshire LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the New Hampshire Secretary of State`,
          answer: `<p>Once you've gathered all the information for your LLC, you’ll need to file a formal document with the NH Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your New Hampshire LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Names of managers or members of the LLC at the time of filing </li>
                   <li> Addresses of managers or members of the LLC at the time of filing </li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your New Hampshire Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in New Hampshire, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NH"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from the New Hampshire Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The NH Secretary of State has plenty of information on forming and running a business in New Hampshire.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These are all the basic steps for forming an LLC in New Hampshire. You’ll find other useful information below.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="https://sos.nh.gov/nhllcforms.aspx" target="_blank" rel="noopener noreferrer">New Hampshire Secretary of State for forming and running your LLC</a>`,
        `<a href="https://www.nh.gov/labor/" target="_blank" rel="noopener noreferrer">New Hampshire Department of Labor for employers and hiring</a>`,
        `<a href="https://www.revenue.nh.gov/" target="_blank" rel="noopener noreferrer">New Hampshire Department of Revenue Administration for taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Special Types of New Hampshire LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `A regular New Hampshire LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 48,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Professional New Hampshire LLCs`,
          answer: `<p>Some states, including New Hampshire, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing.<p></br>
            <p>Here are the occupations that the NH Secretary of State allows to form professional LLCs:</p>
                <ul>
                    <li>Public Accountant</li>
                    <li>Architect</li>
                    <li>Attorney</li>
                    <li>Chiropractor</li>
                    <li>Doctor of Dentistry</li>
                    <li>Professional Engineer</li>
                    <li>Naturopath</li>
                    <li>Nurse</li>
                    <li>Optometrist</li>
                    <li>Osteopathic Physician or Surgeon</li>
                    <li>Pharmacist</li>
                    <li>Physician, Surgeon or Doctor of Medicine</li>
                    <li>Physician Assistant</li>
                    <li>Physical Therapist</li>
                    <li>Podiatric Physician</li>
                    <li>Psychologist</li>
                    <li>Real Estate Principal Broker, Associate Broker or Sales Agent</li>
                    <li>Clinical or Certified Social Worker</li>
                    <li>Mental Health Therapist</li>
                    <li>Veterinarian</li>
                    <li>Real Estate Appraiser</li>
                </ul>`,
        },
        {
          question: `Form a Foreign LLC in New Hampshire`,
          answer: `<p>If your business is already operating in another state and expanding to New Hampshire, you’ll need to form a foreign LLC.</p></br>
            <p><a href="/new-hampshire-llc/form-filling-permit-requirements/">More information on New Hampshire filing and licensing requirements here.</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in New Hampshire? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Information in This Guide`,
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
    content: `<a href="/new-hampshire-llc/how-to-name-your-llc/">Naming Your New Hampshire LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the New Hampshire business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a New Hampshire LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/new-hampshire-llc/registered-agents-new-hampshire-llc/">New Hampshire Registered Agents for LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forNew Hampshire Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/new-hampshire-llc/form-filling-permit-requirements/">Fees and Requirements for New Hampshire LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and New Hampshire rules. Includes details of Employer Identification Numbers (EINs), New Hampshire and federal business licenses, annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/new-hampshire-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your New Hampshire LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and New Hampshire government. Includes details of federal taxes like income and self-employment, and New Hampshire taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Search for and Register Your New Hampshire LLC Name`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right New Hampshire business name or registering your LLC with the NH Secretary of State, we can help. We’ve got all the information you need on a New Hampshire business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `New Hampshire Secretary of State Business Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a business entity search with the Secretary of State. They have a helpful tool on their website that lets you search the register of NH LLCs and corporations to see if someone already has your desired business name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://quickstart.sos.nh.gov/online/Account/LandingPage" target="_blank" rel="noopener noreferrer">New Hampshire SoS business search tool</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Name Registration Rules for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet New Hampshire Secretary of State naming rules.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of New Hampshire. This is why you should check business name availability on the NH SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in New Hampshire. For example, you cannot use the following factors to say your name is different from the name of another business:`,
    marginBottom: 32,
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
    color: color.babyblue3,
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
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Are very similar to the name of a federal or NH agency or organization (e.g., FBI, FDA, New Hampshire Department of Revenue Administration, New Hampshire Police, Treasury, etc.)`,
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
    content: `New Hampshire Trade Names for LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In New Hampshire, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your NH formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called New Hampshire Secretarial Services Holding Company LLC and you have a brand called Admin Expertise. You should file a trade name to let the New Hampshire Secretary of State know. In New Hampshire, you do that through a Form TN-1 Trade Name Registration, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's trade name/assumed business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Name Registration for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your New Hampshire business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your NH LLC name. There are a couple of ways to do this.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If you don’t want to form your LLC right now, you can reserve the business name with the New Hampshire Secretary of State. You will need to complete an Application for Reservation of Name and file it with the NH SOS. You do not need to reserve a name if you are forming your business right away.
              <a href="https://sos.nh.gov/nhllcforms.aspx" target="_blank" rel="noopener noreferrer">New Hampshire SOS LLC name reservation form</a>`,
        `If you’re ready to start your LLC, you can formally file your Certificate of Formation with the New Hampshire SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NH">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
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
          question: `How Do I Search for My New Hampshire LLC Business Name?`,
          answer: `Just go to the <a href="https://quickstart.sos.nh.gov/online/Account/LandingPage/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the New Hampshire Secretary of State, which will tell you if there are any NH corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My New Hampshire LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of New Hampshire). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in New Hampshire?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My New Hampshire LLC?`,
          answer: `Yes. The New Hampshire Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Additional Resources for Naming Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
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
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your New Hampshire LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 24,
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
    content: `Find the Perfect Name for Your New Hampshire LLC`,
    size: 3,
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
      list: [
        `Appeal to your customers`,
        `Be memorable enough to stand out`,
        `Best represent your product or services`,
        `Not be used by another business`,
      ],
    },
    marginBottom: 40,
    color: color.blue3,
  },
  {
    type: `text`,
    content: `<a href="/blog/post/llc-name-search-50-states/" target="_blank">Incfile guide to choosing a business name</a>`,
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Registered Agents and Your New Hampshire LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your LLC must assign a New Hampshire Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the New Hampshire Secretary of State. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Rules for New Hampshire Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a New Hampshire Registered Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in New Hampshire.`,
        `If the Registered Agent is a business, they must be able to conduct business in New Hampshire.`,
        `The Registered Agent must have a physical street address in New Hampshire, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your New Hampshire LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by a New Hampshire Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your New Hampshire Registered Agent? Their main function is to accept official documents and correspondence. This includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the New Hampshire Secretary of State`,
        `Service of process notices (e.g., if your LLC is sued or required to appear in court)`,
        `Official New Hampshire state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free New Hampshire Registered Agent Service for the First Year`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in New Hampshire and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any New Hampshire business. We’ll even act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in New Hampshire and can legally act as your Registered Agent. Here’s what the Incfile New Hampshire Registered Agent service provides for your LLC:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available New Hampshire Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your New Hampshire business`,
        `Email notification whenever we receive documents for your business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's New Hampshire registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a New Hampshire Registered Agent for Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your New Hampshire LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your New Hampshire Registered Agent When You Form Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a New Hampshire Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `File Certificate of Formation with the New Hampshire Secretary of State`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the NH Secretary of State to formally create your business.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free New Hampshire Registered Agent`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free New Hampshire Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NH`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign a Different New Hampshire Registered Agent Service After Incorporation`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form Statement of Change of Registered Office or Registered Agent, or Both with the New Hampshire Secretary of State`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Registered Agent, you can complete a form that’s available on the NH Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s New Hampshire Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our NH Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the New Hampshire Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's New Hampshire registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Searching for NH Registered Agents for Other LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another New Hampshire LLC. If you do, you can search the business database of the New Hampshire Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the New Hampshire Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Possible Outcomes of Not Assigning a Registered Agent for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the New Hampshire Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the New Hampshire Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a New Hampshire LLC: </b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the New Hampshire Registered Agent for Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in New Hampshire, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The Registered Agent must have a physical street address in New Hampshire. If you’re forming an LLC outside NH, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the New Hampshire address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the New Hampshire Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your New Hampshire business address or move out of state, you need to file additional documentation with the NH Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About New Hampshire Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a New Hampshire Registered Agent?`,
          answer: `Yes. All NH LLCs are required to have a Registered Agent. This is mandated by the New Hampshire Secretary of State.`,
        },
        {
          question: `When Can I Assign a New Hampshire Registered Agent Service?`,
          answer: `You can either do it when you incorporate your New Hampshire business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in New Hampshire?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the New Hampshire Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in New Hampshire?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for New Hampshire Registered Agent Services`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
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
        `<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of a New Hampshire Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your New Hampshire Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/">What a New Hampshire Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `The Fees and Filing Requirements for Your New Hampshire LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in New Hampshire, including related fees and costs. Your LLC needs to pay various fees to the federal government, New Hampshire government and other agencies. Some of these fees are levied by the New Hampshire Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that New Hampshire business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `New Hampshire LLC Formation Filing and Fees`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in New Hampshire, you’ll need to file an LLC with the NH Secretary of State and pay a filing fee. Here are the current fees and filing times for New Hampshire:`,
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the New Hampshire Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for New Hampshire.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your New Hampshire LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NH`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every New Hampshire LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your New Hampshire LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside New Hampshire`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your New Hampshire LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than New Hampshire. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your NH LLC annual report, you may need to pay a fee. Here are the annual filing requirements for New Hampshire:`,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing New Hampshire LLC filing requirements</a> and business filing deadlines with our helpful New Hampshire ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your New Hampshire annual report on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Permits and Licenses in New Hampshire`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some New Hampshire LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis. Permits and licenses vary based on:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your New Hampshire LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your New Hampshire LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
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
    type: `header`,
    content: `The Incfile Business License Research Package for Your New Hampshire LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your New Hampshire LLC. It includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `A complete report on all the licenses, permits and tax registrations your New Hampshire LLC will need`,
        `The application forms you will need to file with the New Hampshire, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, New Hampshire and local governments.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your New Hampshire LLC`,
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
    content: `New Hampshire LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your New Hampshire business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc New Hampshire Fees or Requirements for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your New Hampshire LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your business to trade under a different name, you can file a form with the New Hampshire Secretary of State. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the New Hampshire Registered Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your New Hampshire LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete New Hampshire Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you don’t want to form your business right away, you can reserve a name with the New Hampshire Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your New Hampshire LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your New Hampshire business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Areas you might want to file New Hampshire Articles of Amendment for include:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing a New Hampshire LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your New Hampshire LLC`,
      ],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your New Hampshire LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the New Hampshire Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Hampshire certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard New Hampshire LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your New Hampshire LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for New Hampshire LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About New Hampshire LLC Requirements`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My New Hampshire LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Secretary of State on your behalf when forming your New Hampshire business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including NH, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My New Hampshire LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your New Hampshire LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Payable by Your New Hampshire LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your NH LLC will need to pay a variety of taxes to both the federal and New Hampshire governments. We’ll cover all the main taxes in New Hampshire, including self-employment, payroll, federal and New Hampshire state tax on interest and dividends.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your New Hampshire LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a New Hampshire LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a New Hampshire LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `New Hampshire LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `New Hampshire LLC owners pay state tax on dividends and interest.`,
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
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and New Hampshire personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `New Hampshire State Tax`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There’s one main type of tax that you will pay to the New Hampshire Department of Revenue Administration: New Hampshire state income tax, which is applied to interest and dividends. As a New Hampshire business owner, you will pay state tax on just interest and dividends — regular earnings are not taxed by the state.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The New Hampshire state tax rate for interest and dividends is 5 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://www.revenue.nh.gov/gtc/" target="_blank" rel="noopener noreferrer">Get details on the New Hampshire state tax here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple of different federal taxes that every LLC will need to pay, including New Hampshire LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All New Hampshire LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your New Hampshire business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `On profits of $50,000, you would pay self-employment tax of $7,650.`,
        `On profits of $80,000, you would pay self-employment tax of $12,240.`,
        `On profits of $120,000, you would pay self-employment tax of $18,360.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your New Hampshire LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your New Hampshire LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your New Hampshire LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your New Hampshire LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
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
          question: `Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal Tax Withholding`,
          answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `paragraph`,
              content: `<a href="https://www.nh.gov/labor/" target="_blank" rel="noopener noreferrer">Get more requirements from the New Hampshire Department of Labor website.</a>`,
              marginBottom: 48,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your New Hampshire LLC`,
          answer: `Depending on the industry you are in, your New Hampshire LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your New Hampshire LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most New Hampshire LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `paragraph`,
              content: `The most common types of estimated taxes are:`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              content: [
                `Federal income tax`,
                `Federal self-employment tax`,
                `New Hampshire tax on interest and dividends`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most New Hampshire LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on New Hampshire LLC Business Taxes`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Does New Hampshire Have Sales Tax?`,
          answer: `No. New Hampshire does not have a statewide sales tax.`,
        },
        {
          question: `Does New Hampshire Have a State Tax?`,
          answer: `No. New Hampshire does not have an income tax on earnings, but it does levy a tax on interest and dividend income.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your New Hampshire tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 24,
  },
];

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
