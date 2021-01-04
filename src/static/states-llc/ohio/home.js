import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See Detailed Pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OH`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Ohio`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `The midwestern state of Ohio is one of the best places in the U.S. to start a small business with the Ohio Secretary of State. This state was named the second-best place in the country to start a business by Site Selection magazine. Its economy is in the top 10 wealthiest in the U.S., making Ohio an economic powerhouse. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Ohio also boasts a business-friendly tax system and has many policies aimed at helping small businesses. Major industries in the state include finance, manufacturing, biotechnology, trade, transportation, healthcare and education.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to register a business in Ohio, one of the best ways to do so is by forming an Ohio LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Ohio LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We’ll tell you what you need to know about the Ohio Secretary of State, Ohio business registration, filing for your Ohio LLC and much more. Whether you’re starting a business in Columbus, Cleveland, Cincinnati, Dayton or somewhere else, we can help. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a Ohio LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Ohio LLC`,
        `Easy tax filing and potential advantages for tax treatment`,
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
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Six Quick Steps for Setting Up Your Ohio Company`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Ohio LLC, but you can break down the basics of forming a business in Ohio into just a few simple steps.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Ohio LLC`,
          answer: `<p>YYou will need a distinctive and original name for your Ohio LLC that's not used by any other business in MS. To find out if another company is using your chosen business name, carry out a Ohio business entity name search on the OH Secretary of State website.</p></br>
                   <p>There are a few rules you'll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Ohio LLC.</p></br>
                   <a href="/ohio-llc/how-to-name-your-llc/"> Learn about Ohio LLC business naming rules.</a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your Ohio LLC`,
          answer: `Every Ohio LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Ohio, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Ohio Registered Agent`,
          answer: `<p>Every Ohio LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Ohio Secretary of State.</p></br>
          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Ohio and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Ohio Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/ohio-llc/registered-agents-ohio-llc/">Learn more about Ohio Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Ohio LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Ohio Secretary of state`,
          answer: `<p> Once you've gathered all the information for your LLC, you’ll need to file a formal document with the Ohio Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Ohio LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Tax closing month </li>
                   </ul></br>
                   <p>You can file your Ohio Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Ohio, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OH"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Ohio Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Ohio Secretary of State has plenty of information on forming and running a business in Ohio. Check out additional resources below.<br>These are all the basic steps for forming an LLC in Ohio. You’ll find other useful information below.`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="https://www.sos.state.oh.us/businesses/" target="_blank" rel="noopener noreferrer">Ohio Secretary of State for forming and running your LLC</a>`,
        `<a href="https://info.bwc.ohio.gov/wps/portal/bwc/site/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_S193D08TQz8LIwszA0c3Uw9g33cA_1dTEz1w_Wj9KNwKzENMYEqMMABHA30C7KzAwH2RoK7/dz/d5/L2dBISEvZ0FBIS9nQSEh/" target="_blank" rel="noopener noreferrer">Ohio Department of Labor for Ohio employers and hiring</a>`,
        `<a href="https://tax.ohio.gov" target="_blank" rel="noopener noreferrer">Ohio Department of Revenue Administration for taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Special Types of Ohio LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A regular Ohio LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Professional Ohio LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states, including Ohio, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. You can find more details on the occupations that the OH Secretary of State allows to 
    <a href="http://codes.ohio.gov/orc/1705.04v1"> form Ohio professional LLCs here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Ohio`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<p>If your business is already operating in another state and expanding to Ohio, you’ll need to form a foreign LLC.</p></br>
              <p><a href="/ohio-llc/form-filling-permit-requirements/">More information on Ohio filing and licensing requirements here.</a></p>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Ohio? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Read the Rest of the Guide for More`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including: `,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/ohio-llc/how-to-name-your-llc/">Naming Your Ohio LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Ohio business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Ohio  LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/ohio-llc/registered-agents-ohio-llc/">Ohio  Registered Agents for LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Ohio Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/ohio-llc/form-filling-permit-requirements/">Fees and Requirements for Ohio LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Ohio rules. Includes details of Employer Identification Numbers (EINs), Ohio and federal business licenses, annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/ohio-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your Ohio LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Ohio government. Includes details of federal taxes like income and self-employment, and Ohio taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Ohio Secretary of State Business Search & Naming Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Ohio business name or registering your LLC with the OH Secretary of State, we can help. We’ve got all the information you need on a Ohio business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ohio Business Entity and Name Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a Ohio business entity search with the Secretary of State. They have a helpful tool on their website that lets you search the register of OH LLCs and corporations to see if someone already has your desired business name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used by an LLC or Corporation in Ohio, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://businesssearch.sos.state.oh.us" target="_blank" rel="noopener noreferrer">Ohio Secretary of State business entity search tool</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ohio Secretary of State Rules for Naming Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Ohio Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `General Business Name Availability Rules`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you register your business under for your Ohio LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Ohio. This is why you should check business name availability on the OH SOS website.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your OH LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in OH. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
      list: [
        `Are very similar to the name of a federal or AK agency or organization (e.g. FBI, FDA, Ohio Department of Revenue, Ohio Police, Treasury, etc)`,
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
    content: `Specific LLC Naming Rules for Ohio`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Ohio Secretary of State has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your OH business appropriately:`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If a name contains profanity or words or phrases that are generally considered a slur against an ethnic group, religion, gender, or heredity, it is considered unacceptable.  `,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Banks and Trusts `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A business name may not include any of the following words without prior approval from the superintendent of financial institutions: bank, banker, banking or trust, or words of similar meaning in any other language. This is true even for businesses that do not engage in banking or trust activities. For example, the name West Bank Condominiums for a condominium development company must be approved by the superintendent of financial institutions before it may be registered with the secretary of state. `,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Insurance Agencies `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All insurance agencies, whether domestic or foreign, must be registered with the Ohio secretary of state’s office. Domestic insurance agencies must register with our office prior to obtaining an insurance license from the Ohio department of insurance. Foreign insurance agencies must register with our office prior to operating in the State of Ohio. A sole proprietor operating an insurance agency under a fictitious (or assumed) name that is not or cannot be registered as a trade name must register the fictitious/assumed name with the Secretary of State.  `,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Cooperatives`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The name of any cooperative formed under Chapter 1729 of the Ohio Revised Code must include the word or abbreviation:  “cooperative,” “coop,” “co-operative,” “co-op,” “association,” “assn.,” “company,” “co.,” “incorporated,” “inc.,” “corporation,” or “corp.” In addition, no business entity shall use the word or abbreviation “cooperative,” “coop,” “co-operative,” or “co-op” as a part of its business name, unless (1) It is organized under chapter 1729; (2) it is organized and operating on a cooperative basis under Chapter 1702; (3) it is organized and operating in accordance with the cooperative laws of another state, the District of Columbia, or the United States; or (4) it is a state or federally chartered credit union.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Legal Professional Associations `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Legal professional associations or legal clinics, forming a professional corporation under Chapter 1785 of the Ohio Revised Code must follow specific name guidelines set forth in Ohio Supreme Court Rule III. The name of a legal professional association or legal clinic must (1) end with "Co., Lpa" or (2) use the words "A Legal Professional Association" directly below the name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://www.sos.state.oh.us/businesses/information-on-starting-and-maintaining-a-business/guide-to-name-availability/" target="_blank" rel="noopener noreferrer">More on Ohio Secretary of State business naming rules</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ohio Trade Names`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. You might choose to use a different name from your OH formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Ohio Vacation Rentals Holding Company LLC, and you have a chain called “Riverside Rentals.” You should complete an Ohio Trade Name Registration Form to let the Ohio Secretary of State know. In Ohio, you do that through a Name Registration form, or you can have Incfile do it on your behalf through our Assumed Business Name service.    `,
    marginBottom: 32,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's assumed bussiness name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Registering a Business Name in Ohio`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Ohio business name, checked availability, followed the naming rules and decided whether you need a trade name, you can register your OH LLC name. There are a couple of ways to do this:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If you don’t want to form your Ohio LLC right now, you can reserve the business name with the Ohio Secretary of State. You will need to complete a <a href="https://www.sos.state.oh.us/globalassets/business/forms/534b.pdf">Name Reservation / Transfer / Cancellation </a> Form and file it with the OH SOS. You do not need to reserve a name if you are forming your business right away."`,
        `If you’re ready to start your LLC, you can formally file your Certificate of Formation with the Ohio SOS, or
             <a href="/ohio-llc/form-filling-permit-requirements/"> let Incfile take care of it for you.</a>.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `How Do I Search for My Ohio LLC Business Name?`,
          answer: `Just go to the <a href="https://sosOH.gov/business/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Ohio Secretary of State, which will tell you if there are any Ohio corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Ohio LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Ohio). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Ohio?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. See our section on Ohio LLC Trade Names” above.`,
        },
        {
          question: `Can I Reserve a Name for My Ohio LLC?`,
          answer: `Yes. The Ohio Secretary of State allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
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
    content: `You must be careful that your Ohio LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Ohio LLC`,
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
    marginBottom: 40,
    color: color.blue3,
  },
  {
    type: `text`,
    content: `<a href="https://www.incfile.com/blog/post/llc-name-search-50-states/" target="_blank">Incfile guide to choosing a business name</a>`,
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Registered/Statutory Agents and Your Ohio LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `The Ohio Secretary of State requires every OH LLC to have a Registered Agent, also referred to as a Statutory Agent. Once you have assigned an Ohio Statutory Agent, they can receive official correspondence and documents on behalf of your OH business. Statutory Agents can be individuals or other specialized Registered/Statutory Agent service businesses. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have an Ohio Statutory Agent at all times. You can appoint a Statutory Agent when you first start your business. You can also replace your existing OH Statutory Agent at a later date, provided there is a smooth transition between the old and new Statutory Agent service.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what we cover:`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Information on the Ohio Secretary of State and OH Registered Agent Services`,
        `Rules for Ohio Statutory Agents`,
        `What to Expect From an Ohio Statutory Agent Service`,
        `Incfile Provides a Free Ohio Registered Agent Service for the First Year`,
        `How to Appoint an Ohio Statutory Agent for Your LLC`,
        `Ohio Registered Agent Search`,
        `Issues With Not Having an Ohio Statutory Agent`,
        `Assigning Yourself as the Ohio Registered Agent for Your LLC`,
        `FAQs About Ohio Statutory Agents`,
        `Useful Resources for Ohio Statutory Agent Services`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Information from the Ohio Secretary of State on Registered Agent Services`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In Ohio, a Registered Agent is formally known as a “Statutory Agent.” We’ll use those names interchangeably in this guide, since their functions and requirements are identical.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Ohio Secretary of State on OH Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `“The statutory agent must be one of the following: (1) A natural person who is a resident of this state; or (2) A domestic or foreign corporation, nonprofit corporation, limited liability company, partnership, limited partnership, limited liability partnership, limited partnership association, professional association, business trust, or unincorporated nonprofit association that has a business address in this state. If the agent is a business entity then the agent must meet the requirements of Title XVII of the Revised Code to transact business or exercise privileges in Ohio.”`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Rules for Ohio Statutory Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Ohio Registered Agent service for your business. They are:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in Ohio.`,
        `If the Registered Agent is a business, they must be able to conduct business in Ohio.`,
        `The Registered Agent must have a physical street address in Ohio, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Ohio LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by a Ohio Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Ohio Registered Agent carries out several valuable services for your business. They accept official communications and documents from the OH Secretary of State on your behalf. This may include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the Ohio Secretary of State.`,
        `Service of process notices (e.g., if your OH LLC is sued or required to appear in court)`,
        `Official Ohio state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 24,
    color: color.green3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free Ohio Registered Agent Service for the First Year`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Ohio and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Ohio business. We’ll even act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Ohio and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Incfile Ohio Registered Agent service provides for your LLC::`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available Ohio Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Ohio business`,
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
      text: `Order Incfile's Ohio registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Ohio Registered Agent for Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Ohio LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Ohio Registered Agent When You Form Your LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Ohio Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `File Certificate of Formation with the Ohio Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the OH Secretary of State to formally create your business.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Ohio Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you've provided. Additionally, we give you a free Ohio Resident Agent Service for the first year, and we'll include details of your Ohio Resident Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Registered Agent Service for the first year, and we’ll include details of your MS Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile.`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OH`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Ohio Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form With the Ohio Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Ohio Registered Agent, you can complete a form. Once you’ve filled it out, send it to the secretary of state so they can update your records. The Ohio SOS may charge a nominal fee to assign or change a Registered Agent, and we do pass that fee on to you.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile's Ohio Resident Agent Service and We'll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our OH Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Ohio Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Ohio registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ohio Statutory Agent Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Statutory Agent that represents another Ohio LLC. If you do, you can search the business database of the Ohio Secretary of State, as these will often provide details of a specific business’s Statutory Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the OH Statutory Agent isn’t available from the searchable business registry, contact the Ohio Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What Happens If You Don’t Have an Ohio Statutory Agent?`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Ohio Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Ohio Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a Ohio LLC:</b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Ohio Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Ohio, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The Registered Agent must have a physical street address in Ohio. If you’re forming an LLC outside Ohio, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Ohio address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the Ohio Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Ohio business address or move out of state, you would need to file additional documentation with the OH Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Ohio Registered Agents`,
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
          question: `Do I Need to Appoint a Ohio Registered Agent?`,
          answer: `Yes. All OH LLCs are required to have a Registered Agent. This is mandated by the Ohio Secretary of State.`,
        },
        {
          question: `When Can I Assign a Ohio Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Ohio business through paperwork filed with the Ohio Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.
          `,
        },
        {
          question: `Can I Be My Own Registered Agent in Ohio?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Ohio Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Ohio?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Additional Resources for Ohio Statutory Agent Services`,
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
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Ohio Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Ohio Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Ohio Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];
export const feesAndRequirments = [
  {
    type: `header`,
    content: `Ohio LLC Forms, Fees, and Requirements`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Different businesses have different requirements in Ohio, including business licensing, filings, forms, Articles of Organization and related fees and costs. Your OH LLC needs to pay various fees to the federal government, Ohio government and other agencies. Some of these fees are levied by the Ohio Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Ohio business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below..`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in Ohio`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Ohio, you’ll file an LLC with the OH Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Ohio:`,
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the Ohio Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here,</a> <a href="/state-filing-times/">including expedited fees for Ohio.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Ohio LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OH`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Ohio LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Ohio LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Ohio`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Ohio LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Ohio. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your Ohio LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Ohio:`,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/ohio-llc/form-filling-permit-requirements/">Learn about your ongoing Ohio LLC filing requirements</a>
    and business filing deadlines with our helpful Ohio ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Ohio Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Ohio Business Permits and Licenses`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Ohio LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Ohio, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Permits and licenses vary based on:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your Ohio LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Ohio LLC (state, county or city) (e.g., a license to conduct business from the city of Columbus)`,
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
      list: [
        `A complete report on all the licenses, permits and tax registrations your Ohio LLC will need`,
        `The application forms you will need to file with the Ohio, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Ohio and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Ohio business licence research package.`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your Ohio LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Ohio LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a> ). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Ohio business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Ad Hoc Ohio Fees or Requirements for Your Ohio LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Ohio LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Trade Name for Your Ohio LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your MS business to trade under a different name, you can file a form with the Ohio Secretary of State. You will need to pay a Ohio filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Ohio fictitious name service.`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Ohio Resident Agent for Your Ohio LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Ohio LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new Ohio Resident Agent later. Incfile provides a complete Ohio Resident Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Ohio registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Ohio LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your Ohio business right away, you can reserve a name with the Ohio Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Ohio LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Ohio business when it was originally formed. Over time, these facts might change — if they do, you need to file a “Certificate of Amendment” with the Ohio Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Areas you might want to file Ohio Articles of Amendment for include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing a Ohio LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your Ohio LLC`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Ohio articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Ohio LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Ohio Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Ohio certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard Ohio LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Ohio LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for Ohio LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Ohio LLC fees`,
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
          question: `What Happens to the State Fees That I Am Charged When Forming My Ohio LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Ohio business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Ohio, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Ohio LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Ohio LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Payable by Your Ohio LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your OH LLC will need to pay a variety of taxes to both the federal and Ohio governments. We’ll cover all the main taxes in Ohio including self-employment, payroll, federal, Ohio state tax and Ohio sales tax. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Ohio LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Ohio LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Ohio LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Ohio LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Ohio LLC owners pay KS state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some KS LLCs pay Ohio sales tax on products`,
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
    content: `tems 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Ohio personal tax returns, and that’s where you will pay those taxes.
    `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ohio Taxes Payable to the OH Department of Taxatio`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Ohio Department of Taxation: Ohio state income tax and Ohio state sales tax.`,
    marginBottom: 8,
  },
  {
    type: `header`,
    content: `Ohio State Income Tax Payable on LLC Earnings`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Ohio business owner, you will need to pay state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay income tax. You will be taxed at the standard rates for Ohio state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal state taxes.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `The Ohio state tax rates vary between 1.98 percent and 5 percent. `,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `<a href="https://tax.ohio.gov/wps/portal/gov/tax/wps/portal/gov/tax/individual" target="_blank" rel="noopener noreferrer">Get details on the Ohio state tax here.</a> `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ohio Sales Taxes on LLC Sales`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the OH Department of Taxation. Ohio sales tax is collected at the point of purchase. Ohio sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `You will typically need to collect Ohio sales tax on:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
        `Certain services that your Ohio business might provide`,
      ],
    },
    marginBottom: 16,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas. `,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `<a href="https://tax.ohio.gov/wps/portal/gov/tax/wps/portal/gov/tax/business/ohio-business-taxes/sales-and-use/Sales-Use-Tax" target="_blank" rel="noopener noreferrer">Get details on the Ohio sales tax online here.</a> `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your Ohio LLC: Self-Employment and Income Taxes`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Ohio LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ohio LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `All Ohio LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Ohio business. The current self-employment tax rate is 15.3 percent.`,
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
        `On profits of $40,000, you would pay self-employment tax of $6,120`,
        `On profits of $70,000, you would pay self-employment tax of $10,710`,
        `On profits of $100,000, you would pay self-employment tax of $15,300`,
        `On profits of $140,000, you would pay self-employment tax of $21,420`,
      ],
    },
    marginBottom: 16,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Ohio LLC as an S Corporation`,
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
      text: `Incifle Form 2553 S corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Ohio LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Ohio LLC Federal Income Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Ohio LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Ohio LLC`,
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
          question: `Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Ohio LLC`,
          answer: `You may also choose to withhold federal and Ohio state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Ohio state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Ohio LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `text`,
              content: `<a href="https://info.bwc.ohio.gov/" target="_blank" rel="noopener noreferrer">Get more requirements from the Ohio Bureau of Workers' Compensation website.</a>`,
              marginBottom: 48,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Ohio LLC`,
          answer: `Depending on the industry you are in, your Ohio LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Ohio LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Ohio LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
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
                `Ohio state tax`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most Ohio LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Ohio LLC Business Taxes`,
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
          question: `Does Ohio Have Sales Tax?`,
          answer: `Yes. Ohio does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Ohio Have a State Tax?`,
          answer: `Yes. Ohio does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Ohio tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
