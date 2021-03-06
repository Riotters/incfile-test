import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See Detailed Pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Forming an LLC in Virginia`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Commonwealth of Virginia is located on the East Coast of the U.S. between North Carolina, Maryland and West Virginia. With its northeastern border brushing up against the nation’s capital in Washington, D.C., Virginia is a state that’s both close to power and ideally suited for people who want to start powerful businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The commonwealth is home to more than 8 million people and has a strong economy, international transport links, a highly educated population and great weather. Of Virginia’s 4 million workers, a third are in the service sector, and the state also boasts the highest concentration of technology workers of any state. Northern Virginia is home to major communications, software, technology and defense businesses, especially in the Dulles Technology Corridor. A 2014 survey of small businesses declared Virginia to be one of the friendliest states for small businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in Virginia is by creating a Virginia LLC. A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Virginia corporations but with much simpler rules and regulations.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Virginia, one of the best ways to do so is by forming a Virginia LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Virginia LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting an LLC in Virginia include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Virginia LLC`,
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
    content: `<a href="/limited-liability-company/" target="_blank" rel="noopener noreferrer">Learn more about the benefits of the LLC business structure here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps to Starting an LLC in Virginia`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to create your Virginia LLC, but you can break down the basics of forming a business in VA into just a few simple steps.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Virginia LLC`,
          answer: `<p>You will need a distinctive and original name for your Virginia LLC that’s not used by any other business in VA. To find out if another company is using your chosen business name, carry out a Virginia business entity name search on the VA State Corporation Commission website.</p></br>
              <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Virginia LLC.</p></br>
              <p><a href="/virginia-llc/how-to-name-your-llc/" target="_blank">Learn about Virginia LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your VA LLC`,
          answer: `Every Virginia LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Virginia, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Virginia LLC`,
          answer: `<p>Every VA LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Virginia State Corporation Commission.</p></br>
              <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your VA Registered Agent must have a physical street address in Virginia and must be present to receive important documents for your company during business hours.</p></br>
              <p>At Incfile, all of our packages include a Virginia Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
              <p><a href="/virginia-llc/registered-agents-virginia-llc/" target="_blank">Learn more about Virginia Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Virginia LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization With the Virginia State Corporation Commission`,
          answer: `<p>Once you've gathered all the information for your Virginia LLC, you’ll need to file a formal document with the VA State Corporation Commission. This document is known as your “Articles of Organization,” and filing the document creates your Virginia LLC. Here’s what is typically included:</p></br>
          <ul>
              <li>Your business name and address</li>
              <li>Details of your Registered Agent</li>
              <li>Name of the organizers</li>
              </ul></br>
              <p>You can file your Virginia LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Virginia. You only need to file your Articles of Organization once.</p></br>
              <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Virginia State Corporation Commission`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In most states, LLC formation and registration is handled by the Secretary of State. In the Commonwealth of Virginia, businesses are administered by the VA State Corporation Commission. They have plenty of information on forming and registering a business in Virginia. These are all the basic steps for forming an LLC in Virginia. You’ll find other useful information below:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="https://www.scc.virginia.gov/pages/Home" target="_blank" rel="noopener noreferrer">Virginia State Corporation Commission for forming and running your VA LLC</a>`,
        `<a href="https://www.vec.virginia.gov/employers/agricultural-services/labor-laws" target="_blank" rel="noopener noreferrer">Virginia Department of Labor and Industry for VA employers and hiring</a>`,
        `<a href="https://www.tax.virginia.gov/" target="_blank" rel="noopener noreferrer">Virginia Department of Taxation for VA taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Virginia LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Virginia LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `Form a Professional Virginia LLC`,
          answer: `<p>Some states, including Virginia, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the VA State Corporation Commission allows to form Virginia professional LLCs:</p></br>
                <li>Architect</li>
                <li>Attorneys-at-law</li>
                <li>Audiologists</li>
                <li>Certified interior designers</li>
                <li>Certified public accountants</li>
                <li>Clinical nurse specialists</li>
                <li>Dentists</li>
                <li>Insurance consultants</li>
                <li>Land surveyors</li>
                <li>Nurse practitioners</li>
                <li>Optometrists</li>
                <li>Pharmacists</li>
                <li>Physical Therapist</li>
                <li>Practitioners of the behavioral science professions</li>
                <li>Practitioners of the healing arts</li>
                <li>Professional engineers</li>
                <li>Public accountants</li>
                <li>Speech pathologists</li>
                <li>Surgeons</li>
                <li>Veterinarians</li>`,
        },
        {
          question: `Form a Foreign LLC in Virginia`,
          answer: `<p>If your business is already operating in another state and expanding to Virginia, you’ll need to form a foreign LLC.</p></br>
              <a href="/virginia-llc/form-filling-permit-requirements/">More information on Virginia filing and licensing requirements here.</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Setting up Your Virginia LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Virginia? We’ve got you covered.
        <a href="/after-forming-llc/">Here’s our guide</a>
        to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Virginia LLC`,
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
    content: `<a href="/virginia-llc/how-to-name-your-llc/">Naming Your Virginia LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Virginia business registry of the VA State Corporation Commission and find the right name. Includes information on naming rules, fictitious names, reserving a Virginia LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/virginia-llc/registered-agents-virginia-llc/">Virginia Registered Agents for LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Virginia Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Virginia Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/virginia-llc/form-filling-permit-requirements/">Fees and Requirements for Virginia LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Virginia rules. Includes details of Employee Identification Numbers (EINs), Virginia and federal business licenses, Virginia Annual Reports and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/virginia-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your Virginia LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Virginia government. Includes details of federal taxes like income and self-employment, and Virginia taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Conducting a Virginia Business Search and Naming Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Virginia business name or registering your LLC with the VA State Corporation Commission, we can help. We’ve got all the information you need on Virginia business entities, LLC or corporation searches, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Business Entity Search With the State Corporation Commission`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You should begin naming your business by completing a “Virginia business entity search” with the State Corporation Commission. They have a helpful tool on their website that lets you run a Virginia LLC search to see if someone already has your desired business name. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://cis.scc.virginia.gov/" target="_blank" rel="noopener noreferrer">Virginia State Corporation Commission business name search tool</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Naming Rules to Know Before You Register Your LLC `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Virginia State Corporation Commission naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in VA.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Rules for Naming Your Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Virginia LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Virginia. This is why you should check business name availability on the VA SCC website.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your VA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Virginia. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
    marginBottom: 48,
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
      list: [
        `Are very similar to the name of a federal or VA agency or organization (e.g., FBI, FDA, Virginia Department of Taxation, Virginia Police, Treasury, etc.)`,
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
    content: `Specific Business Naming Rules in Virginia`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Virginia State Corporation Commission has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your VA business appropriately:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The name of a corporation, limited liability company or limited partnership may not include any word, abbreviation or combination of characters that states or implies that it is a different type of business entity. Under this standard, for example, the name of a limited liability company may not include the word “corporation” or “incorporated,” or the designation “Corp.” or “Inc.”`,
        `The name of a corporation may not imply that it is or will be conducting business as a bank, trust company, insurance company, or public service company, such as a railroad, telephone company, utility, or water or sewer company, unless it will actually be engaged in such business.`,
        `No business entity’s name may include the word “bank” or “trust” unless it will be engaged in the banking or trust company business, or it is clear from the context of the remaining words that it will not be engaged in such business.`,
        `No business entity’s name may include the word or words “engineer,” “architecture” or “land surveying,” or any modification or derivation of such words, unless the entity will be lawfully engaged in such services or it is clear from the context of the remaining words that the entity will not conduct such business.`,
        `The words “United States,” “national,” “Federal” and “reserve” may not be included in the name of a business entity that is engaged in the banking, loan, building and loan, brokerage, factorage, insurance, indemnity, savings or trust business.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `<a href="https://www.scc.virginia.gov/pages/Business-Entity-Names#a7" target="_blank" rel="noopener noreferrer">More on Virginia State Corporation Commission business naming rules.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `DBA (“Doing Business As”) Names in Virginia `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Virginia, doing business under a different name is known as an assumed or fictitious name. You might choose to use a different name from your formal VA LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Virginia Tourism Holding Company LLC, and you have a chain called “Virginia Loves Hotels.” You should file an assumed or fictitious name to let the Virginia State Corporation Commission know. In Virginia, you do that through a fictitious name certificate, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's DBA service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Virginia LLC Business Name`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Virginia business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your VA LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `If you don’t want to form your Virginia LLC right now, you can reserve the business name with the Virginia State Corporation Commission. You do not need to reserve a name if you are forming your business right away.`,
      },
      {
        text: `If you’re ready to start your Virginia LLC, you can formally file your Articles of Organization with the Virginia SCC, or
            <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA" target="_blank">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Virginia LLC`,
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
          question: `How Do I Search for My Virginia LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://cis.scc.virginia.gov/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Virginia State Corporation Commission, which will tell you if there are any VA corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Virginia LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Virginia). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Virginia?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Virginia LLC?`,
          answer: `Yes. The Virginia State Corporation Commission allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Incfile Resources for Naming an LLC`,
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
    content: `You must be careful that your Virginia LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile Trademark Search and Registration Service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Virginia LLC`,
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
    content: `<a href="https://www.incfile.com/blog/post/llc-name-search-50-states/" target="_blank">Incfile guide to choosing a business name.</a>`,
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Registered Agents for Virginia LLCs`,
    size: 1,
    template: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Virginia State Corporation Commission requires every VA LLC to have a Registered Agent. Once you have assigned a Virginia Registered Agent, they can receive official correspondence and documents on behalf of your VA business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Virginia Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing VA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Virginia State Corporation Commission Says About Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Virginia State Corporation Commission on VA Registered Agent services:`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<i>Every Virginia and foreign business entity authorized to transact business in Virginia is required by law to continuously maintain in the Commonwealth a registered office and a registered agent. The sole statutory duty of the registered agent is to forward to the business entity at its last known address any process, notice or demand that is served on the registered agent. A business entity may not have, at any given time, more than one person serving as its registered agent in Virginia.”</i>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia LLC Registered Agent Rules`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Virginia Registered Agent service for your business. They are:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in Virginia`,
        `If the Registered Agent is a business, they must be able to conduct business in Virginia`,
        `The Registered Agent must have a physical street address in Virginia, not a P.O. Box.`,
        `The VA Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Note that the VA Registered Agent address does not need to be the same as your Virginia LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a Virginia Registered Agent Service`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What can you expect from your Virginia Registered Agent? Their main function is to accept official documents and correspondence from the VA State Corporation Commission. This may include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the Virginia State Corporation Commission`,
        `Service of process notices (e.g., if your VA LLC is sued or required to appear in court)`,
        `Official Virginia state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free Virginia Registered Agent Service for the First Year`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Virginia and you need a VA Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Virginia business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Virginia and can legally act as your Registered Agent. Here’s what the Incfile Virginia Registered Agent service provides for your VA LLC:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available Virginia Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Virginia business`,
        `Email notification whenever we receive documents for your Virginia business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Virginia registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing a VA Registered Agent Service for Your Virginia LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Virginia LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint a VA Registered Agent Service When You Create Your Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Virginia Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the Virginia State Corporation Commission`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the VA State Corporation Commission to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Virginia Registered Agent `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Virginia Registered Agent service for the first year, and we’ll include details of your VA Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Virginia Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your VA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form “Statement of Change of Registered Agent and/or Registered Office” With the Virginia State Corporation Commission`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Virginia Registered Agent, you can complete a “Statement of Change of Registered Agent and/or Registered Office” form that’s available on the VA State Corporation Commission website. After you’ve filled it out, send it to the State Corporation Commission so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s Virginia Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our VA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Virginia State Corporation Commission. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Virginia registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Registered Agent Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Virginia LLC. If you do, you can search the business database of the Virginia State Corporation Commission, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the VA Registered Agent isn’t available from the searchable business registry, contact the Virginia State Corporation Commission requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a Virginia Registered Agent Service`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Virginia State Corporation Commission? There are several possible ramifications, including:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Virginia State Corporation Commission: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.`,
        `Losing your status as a Virginia LLC: A VA Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Virginia LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Can I Be My Own Registered Agent in Virginia? `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Virginia, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach, as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The VA Registered Agent must have a physical street address in Virginia. If you’re forming an LLC outside VA, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Virginia address to sign for important documents.`,
        `The VA Registered Agent’s name and address are part of the public record and available through the Virginia State Corporation Commission's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Virginia business address or move out of state, you would need to file additional documentation with the VA State Corporation Commission for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Virginia Registered Agents`,
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
          question: `Do I Need to Appoint a Virginia Registered Agent?`,
          answer: `Yes. All VA LLCs are required to have a Registered Agent. This is mandated by the Virginia State Corporation Commission.`,
        },
        {
          question: `When Can I Assign a Virginia Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Virginia business through paperwork filed with the VA State Corporation Commission, or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Virginia?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Virginia State Corporation Commission.`,
        },
        {
          question: `Does My VA Registered Agent Need to Have an Address in Virginia?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Virginia Registered Agent Services`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
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
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a Virginia Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Virginia Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Virginia Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Virginia Business Licenses, Fees and Filing Requirements for Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Virginia business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Virginia State Corporation Commission, while others are due to the federal or Virginia government. We’ve summarized the most common requirements and fees here, including how to determine what Virginia business licenses you need.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Virginia business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia LLC Filing Costs and Articles of Incorporation`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To register your business in Virginia, you’ll file your articles of incorporation with the VA State Corporation Commission and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Virginia:`,
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
    content: `When you incorporate through Incfile, we forward this fee to the Virginia State Corporation Commission on your behalf when we file your paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Virginia</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Virginia LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=VA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your VA LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Virginia LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Virginia LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Virginia`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Virginia LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Virginia. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get a Foreign Qualification/Certificate of Authority Through Incfile`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia LLC Annual Fees and Reports`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need you to file a yearly (or other periodic) report with their state corporation commission or secretary of state. When you file your VA LLC Annual Report, you may need to pay a fee. Here are the annual filing requirements for Virginia:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" rel="noopener noreferrer">Learn about your ongoing Virginia LLC filing requirements and business filing deadlines with our helpful Virginia ongoing filing lookup tool.</a>`,
    marginBottom: 48,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Virginia Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Business Licenses and Permits`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Virginia LLC may need certain business permits and licenses to comply with specific requirements. These business permits and licenses might be issued by Virginia, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. Permits and licenses vary based on:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your Virginia LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Virginia LLC (state, county or city) (e.g., a license to conduct business from the city of Richmond)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `A complete report on all the licenses, permits and tax registrations your Virginia LLC will need`,
        `The application forms you will need to file with the Virginia, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Virginia and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Virginia LLC`,
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
    content: `Virginia LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Virginia business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Virginia Fees or Requirements for Your VA LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Virginia LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your VA business to trade under a different name, you can file a form with the Virginia State Corporation Commission. You will need to pay a Virginia filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Virginia Registered Agent for Your VA LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Virginia LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new VA Registered Agent later. Incfile provides a complete Virginia Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your VA business right away, you can reserve a name with the Virginia State Corporation Commission. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Virginia business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Virginia State Corporation Commission. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Virginia Articles of Amendment for include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing a Virginia LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your Virginia LLC`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Virginia Corporation Commission Certificate of Good Standing`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Virginia LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Virginia State Corporation Commission. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Virginia certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard VA LLC will be required to pay. In some circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Virginia LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for VA LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Virginia LLC Costs`,
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
          question: `What Happens to the State Fees That I Am Charged When Forming My Virginia LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the VA State Corporation Commission on your behalf when forming your Virginia business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Virginia requires you to file a report for your LLC every year.`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Virginia LLC?`,
          answer: `It depends on various factors including:
                <ul>
                <li>The type of business you run</li>
                <li>Where you are located</li>
                <li>Governing organizations in your industry</li>
                <li>Federal, state and local regulations</li>
                </ul></br>
              <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Virginia LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Your VA LLC Will Need to Pay`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Virginia LLC will need to pay. These include tax that’s payable to the Virginia government, like Virginia sales taxes and Virginia state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Virginia LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Virginia LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Virginia LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Virginia LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Virginia LLC owners pay VA state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some VA LLCs pay Virginia sales tax on products.`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Virginia personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Business Taxes Payable to the VA Government`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Virginia Department of Taxation: Virginia state income tax and Virginia state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia State Income Tax Payable on LLC Earnings`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Virginia business owner, you will need to pay VA state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Virginia income tax. You will be taxed at the standard rates for Virginia state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Virginia state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Virginia state tax rates vary between 2 and 5.75 percent.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Virginia Sales Taxes on LLC Sales`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the VA Department of Taxation. Virginia sales tax is collected at the point of purchase. Virginia sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Virginia sales tax on:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
        `Certain services that your Virginia business might provide`,
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
    content: `<a href="https://www.tax.virginia.gov/retail-sales-and-use-tax" target="_blank" rel="noopener noreferrer">Get details on the Virginia sales tax online here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Sales Tax Rates for Your Virginia LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Virginia LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Virginia LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Virginia LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Virginia LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Virginia business. The current self-employment tax rate is 15.3 percent.`,
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
        `On profits of $70,000, you would pay self-employment tax of $10,710`,
        `On profits of $100,000, you would pay self-employment tax of $15,300`,
        `On profits of $160,000, you would pay self-employment tax of $24,480`,
      ],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Virginia LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Virginia LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Virginia LLC Federal Income Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Virginia LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Virginia LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Virginia LLC`,
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
          question: `Employer Payroll Tax Withholding for Your Virginia LLC `,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Virginia LLC`,
          answer: `You may also choose to withhold federal and Virginia state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Virginia state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Virginia LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `paragraph`,
              content: `<a href="http://www.vwc.state.va.us/sites/default/files/documents/Employer-FAQs_1.pdf" target="_blank" rel="noopener noreferrer">Get more requirements from the Virginia Department of Labor and Industry website.</a>`,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Virginia LLC`,
          answer: `Depending on the industry you are in, your Virginia LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Virginia LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Virginia LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
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
                `Virginia state tax`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most Virginia LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Virginia LLC Business Taxes`,
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
          question: `Does Virginia Have Sales Tax?`,
          answer: `Yes. Virginia does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Virginia Have a State Tax?`,
          answer: `Yes. Virginia does have a general state income tax.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Virginia tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
