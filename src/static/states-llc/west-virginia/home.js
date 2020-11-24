import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WV`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in West Virginia`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you want to start your own business in West Virginia, one of the best ways to do so is by forming a West Virginia LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. West Virginia LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a West Virginia LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Delaware LLC`, `Easy tax filing and potential advantages for your tax treatment`],
    },
  },
  {
    type: `text`,
    content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here</a>.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a Delaware LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Delaware LLC`, `Easy tax filing and potential advantages for your tax treatment`],
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
    content: `Six Steps to Filing an LLC with the WV Secretary of State`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in WV. On this page, you’ll find the basic steps for starting a West Virginia LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Delaware LLC`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in WV. To find out if another company is using your chosen business name, carry out a business entity name search on the WV Secretary of State website.</p>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your West Virginia LLC.</p></br>
                   <a href="/west-virginia-llc/how-to-name-your-llc/"> Learn about West Virginia LLC business naming rules. </a>`,
        },
        {
          question: `STEP 3: STEP 3: Provide an Official Address for your DE LLC`,
          answer: `Every West Virginia LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of West Virginia, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a West Virginia Registered Agent`,
          answer: `<p>Every LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the West Virginia Secretary of State. In WV, Registered Agents can also be known as an Agent of Process.</p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in West Virginia and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a West Virginia Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/west-virginia-llc/registered-agents-west-virginia-llc/">Learn more about West Virginia Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the West Virginia LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the West Virginia Secretary of State`,
          answer: `<p>Once you've gathered all the information for your LLC, you’ll need to file a formal document with the WV Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your West Virginia LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Names of managers or members of the LLC at the time of filing</li>
                   <li> Addresses of managers or members of the LLC at the time of filing</li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your West Virginia Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in West Virginia, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WV"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Additional Information from the West Virginia Secretary of State`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The Secretary of State has plenty of other information on forming and running a business in West Virginia. You’ll find other useful information below:`,
      list: [
        `<a href="https://sos.wv.gov/business/Pages/StartWVBus.aspx" target="_blank" rel="noopener noreferrer">West Virginia Secretary of State for forming and running your LLC</a>`,
        `<a href="https://labor.wv.gov/Pages/default.aspx" target="_blank" rel="noopener noreferrer">West Virginia Division of Labor for employers and hiring </a>`,
        `<a href="href="https://tax.wv.gov/Pages/default.aspx">" target="_blank" rel="noopener noreferrer">West Virginia Department of Revenue for WV taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Special Types of West Virginia LLCs`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A regular West Virginia LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Professional LLCs in West Virginia`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states, including West Virginia, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the WV Secretary of State allows to form professional LLCs:`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Attorneys-at-law`, `Physicians`, `Podiatrists`, `Dentists`, `Optometrists`, `Accountants`, `Veterinarians`, `Architects`, `Engeneers`, `Osteopathic physicians and surgeons`, `Chiropractors`, `Psychologists`, `Social workers`, `Acupuncturists`, `Land surveyors`],
    },
  },
  {
    type: `header`,
    content: `Foreign LLCs Doing Business in West Virginia`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If your business is already operating in another state and expanding to West Virginia, you’ll need to form a foreign LLC.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `More information on West Virginia filing and licensing requirements `,
      url: `/west-virginia-llc/form-filling-permit-requirements/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },

  {
    type: `header`,
    content: `What to Do After Forming Your West Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in West Virginia? We’ve got you covered. Here’s our guide to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `More Information About West Virginia LLCs`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Naming Your West Virginia LLC`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the West Virginia business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a West Virginia LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `West Virginia Registered Agents for LLCs`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forWest Virginia Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Fees and Requirements for West Virginia LLCs`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and West Virginia rules. Includes details of Employer Identification Numbers (EINs), West Virginia and federal business licenses, annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal, State, Sales and Other Taxes for Your West Virginia LLC`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and West Virginia government. Includes details of federal taxes like income and self-employment, and West Virginia taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Naming Your West Virginia LLC`,
    size: 2,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your West Virginia LLC. From searching for a business name with the WV Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `West Virginia Secretary of State Business Search`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve narrowed down your business name choices, you’ll need to check if there’s already another West Virginia business registered under your desired business name. That means searching the West Virginia Secretary of State website using their business entity search tool. You can easily look up LLCs and corporations by name and other details.`,
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
      text: `West Virginia Secretary of State business entity search tool`,
      url: `http://apps.sos.wv.gov/business/corporations/ target="_blank" rel="noopener noreferrer"`,
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Rules about LLC Names in West Virginia`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Every LLC in West Virginia needs to follow the Secretary of State’s naming rules. We’ve outlined these rules below:`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of West Virginia. This is why you should check business name availability on the WV SOS website.`,
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
    content: `It’s not enough for your DE LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Delaware. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
    content: `Other General Restrictions`,
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
        `Are very similar to the name of a federal or DE agency or organization (e.g., FBI, FDA, Delaware Division of Revenue, Delaware Police, Treasury, etc.)`,
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
    content: `Specific LLC Naming Rules for Delaware`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Delaware Division of Corporations has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your DE business appropriately.`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The name of your LLC may contain the names of members or the words "Club," "Foundation," "Fund," "Institute," "Society," "Union," "Syndicate," or "Trust" instead of “LLC.”`,
        `The name can include words in a foreign language, as long as you provide a translation into English when filing the LLC.`,
        `Some words, like “Bank,” “University” or “College” are restricted and need additional paperwork`,
        `Other words (typically those associated with certain professions and licensed individuals) require the individual to be part of the LLC — doctors, engineers or accountants, for example.`,
        `The name may contain the name of a member or manager.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `“Trade Names” or DBAs in West Virginia`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In West Virginia, doing business under a different name is known as a “Trade Name” or “Doing Business As” (DBA) name. You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called West Virginia Outdoor Holding Company LLC, but you have a brand called “Beautiful Boating.” You should file an “Application For Trade Name (DBA)” to let the West Virginia Secretary of State know. In West Virginia, you do that directly with the SOS or you can have Incfile do it on your behalf through our DBA service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's dba name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your LLC Name with the Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Delaware business name and checked availability through our business search tool, it’s time for next steps. You will need to follow naming rules and decide whether or not you need a fictitious name. Once you’ve done that, you can register your WV LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<p>If you don’t want to form your West Virginia LLC right now, you can reserve the business name with the West Virginia Secretary of State. You will need to complete an “Application for Name Reservation” and file it with the SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
              <a href="https://sos.wv.gov/FormSearch/Business/Multiple-Company-Types/nr1.pdf" target="_blank" rel="noopener noreferrer">West Virginia SOS LLC name reservation form</a>`,
        `<p>If you’re ready to start your West Virginia LLC, you can formally file your Articles of Organization with the Secretary of State, or<a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WV/">let Incfile take care of it for you</a>.</p>`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your West Virginia LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `How Do I Know if My Chosen Name Is Available?`,
          answer: `Just go to the business name search tool and enter your proposed business name. This will allow you to search the register of the West Virginia Secretary of State and see if there are any corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My West Virginia LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of West Virginia). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in West Virginia?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My West Virginia LLC?`,
          answer: `Yes. The West Virginia Secretary of State allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Additional Resources for Naming Your West Virginia LLC`,
    size: 4,
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
    content: `You must be careful that your West Virginia LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `How to Choose a Business Name`,
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
    content: `West Virginia Registered Agents`,
    size: 2,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Every business entity needs to formally appoint a person or business to act as a Registered Agent, which in West Virginia is also known as an “Agent for Service of Process.” Your West Virginia Agent provides various services to LLCs, including the acceptance of formal documents and correspondence from the West Virginia Secretary of State.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s important to know that your LLC must have a West Virginia Agent at all times. You will appoint a Registered Agent when you first start your business, and you can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Agent.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `West Virginia Requirements for Registered Agents`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a West Virginia Agent for your business. They are:`,
    marginBottom: 16,
  },
  {
    header: ``,
    list: [
      `If the Registered Agent is a person, they must reside in West Virginia`,
      `If the Registered Agent is a business, they must be able to conduct business in West Virginia`,
      `The Registered Agent must have a physical street address in West Virginia, not a P.O. Box`,
      `The DE Registered Agent must be available in person during normal business hours to sign for any correspondence`,
    ],
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your West Virginia LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Purpose of a West Virginia Registered Agent`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your West Virginia Registered Agent carries out several valuable services for your business. They accept official communications and documents from the Secretary of State on your behalf. This may include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the West Virginia Secretary of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your LLC has legal proceedings issued against it)`,
        `Official West Virginia and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },

  {
    type: `header`,
    content: `The Purpose of a DE Registered Agent`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Delaware Registered Agent carries out several valuable services for your business. They accept official communications and documents from the DE Division of Corporations on your behalf. This may include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the Delaware Division of Corporations, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Delaware LLC has legal proceedings issued against it)`,
        `Official Delaware and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 24,
    color: color.red3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `Incfile’s West Virginia Registered Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in West Virginia and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any West Virginia business—and it’s even free (+ state fee) for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in West Virginia and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Infile Delaware Registered Agent service provides for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `An always-available West Virginia Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Delaware business`,
        `Email notification whenever we receive documents for your Delaware business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Delaware registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your Options for Appointing a West Virginia Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your West Virginia LLC. when you need to change your Registered Agent, or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint a Registered Agent Service When You Create Your West Virginia LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a West Virginia Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `File Articles of Organization with the West Virginia Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the Secretary of State to formally create your business.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free West Virgina Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Delaware Registered Agent Service for the first year, and we’ll include details of your DE Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WV`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your West Virginia Registered Agent After Your LLC Is Formed`,
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
    content: `Choose a Registered Agent Service and File a Form with the West Virginia Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new West Virginia Registered Agent, you can complete a form. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our DE Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Delaware Division of Corporations. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Delaware registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `West Virginia Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another West Virginia LLC. If you do, you can search the <a href"https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx" target="_blank" rel="noopener noreferrer">  business database </a>of the Delaware Division of Corporations, as this will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the West Virginia Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Possible Outcomes of Not Assigning a Registered Agent for Your West Virginia LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: ``,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `What happens if you choose not to assign or provide details of a Registered Agent to the West Virginia Secretary of State? There are several possible ramifications, including:`,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Delaware Division of Corporations: </b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a West Virginia LLC: </b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your West Virginia LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own West Virginia Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in West Virginia, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent must have a physical street address in West Virginia. If you’re forming an LLC outside WV, you will need to use an in-state Registered Agent. You always need to have someone on hand during business hours at the West Virginia address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the West Virginia Secretary of State's website. If you would prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your West Virginia business address or move out of state, you need to file additional documentation with the WV Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About West Virginia Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a West Virginia Registered Agent?`,
          answer: `Yes. All LLCs are required to have a Registered Agent. This is mandated by the West Virginia Secretary of State.`,
        },
        {
          question: `When Can I Assign a West Virginia Registered Agent Service?`,
          answer: `You can either do it when you incorporate your West Virginia business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in West Virginia?`,
          answer: `Yes, but we don’t recommend it, for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the West Virginia Secretary of State.`,
        },
        {
          question: `Does My WV Registered Agent Need to Have an Address in West Virginia?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for West Virginia Registered Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Delaware Registered Agentt</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Delaware Registered Agent</a>`,
        `<a href-"/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Delaware Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `West Virginia LLC Fees and Filing Requirements`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your West Virginia business, you’ll be required to pay certain fees and fulfill different filing and licensing requirements. Some of these costs are payable to the West Virginia Secretary of State, while others are due to the federal or West Virginia government. We’ve summarized the most common requirements and fees here.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that West Virginia business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in West Virginia`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in West Virginia, you’ll need to file an LLC with the WV Secretary of State and pay a filing fee. Here are the current fees and filing times for West Virginia:`,
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the West Virginia Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/"> compare state filing times and fees here, including expedited fees for West Virginia.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your West Virginia LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WV`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your West Virginia LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every West Virginia LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your West Virginia LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside West Virginia`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your West Virginia LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than West Virginia. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your West Virginia LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your WV LLC annual report, you may need to pay a fee. Here are the annual filing requirements for West Virginia:`,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Delaware franchise report on your behalf.`,
    marginBottom: 48,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's West Virginia annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `West Virginia Business Permits and Licenses`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some West Virginia LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis. Permits and licenses vary based on:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your West Virginia LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your West Virginia LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
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
      list: [`A complete report on all the licenses, permits and tax registrations your Delaware LLC will need`, `The application forms you will need to file with the Delaware, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Delaware and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Delaware business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your West Virginia LLC`,
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
    content: `West Virginia LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your West Virginia business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Ad Hoc West Virginia Fees or Requirements for Your WV LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your West Virginia LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
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
    content: `If you want your business to trade under a different name, you can file a form with the West Virginia Secretary of State. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's West Virginia fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the West Virginia Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your West Virginia LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete West Virginia Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's West Virginia registered agent service`,
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
    content: `If you don’t want to form your business right away, you can reserve a name with the West Virginia Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your West Virginia LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your West Virginia business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file West Virginia Articles of Amendment for include:`,
      list: [`Adding, removing or changing a West Virginia LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your West Virginia LLC`],
    },
    marginBottom: 0,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's West Virginia articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your West Virginia LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your West Virginia LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the West Virginia Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Delaware certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard West Virginia LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your West Virginia LLC will also probably need to pay self-employment, payroll, federal and state taxes, but we will cover that when we talk about taxes for West Virginia LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About West Virginia LLC Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My West Virginia LLC with Incfile?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your West Virginia business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My West Virginia LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Delaware LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];
export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Payable by Your West Virginia LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your LLC will need to pay a variety of taxes to both the federal and West Virginia governments. We’ll cover all the main taxes in West Virginia, including self-employment, payroll, federal, West Virginia state tax and West Virginia sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your West Virginia LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a West Virginia LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `West Virginia LLC owners pay self-employment tax on business profits.`,
        `West Virginia LLC owners pay WV state tax on any profits, less state allowances or deductions.`,
        `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
        `Some LLCs pay West Virginia sales tax on products.`,
        `Employers pay payroll tax on any salaries they pay to employees.`,
        `Employees pay federal, state and payroll tax on their earnings.`,
      ],
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and West Virginia personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `West Virginia State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a West Virginia business owner, you will need to pay state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay income tax. You will be taxed at the standard rates for West Virginia state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal state taxes.`,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The West Virginia state tax rates are between 3 and 6.5 percent, depending on your income.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: `Get details on the West Virginia state tax here.`,
    url: `https://tax.wv.gov/Individuals/Pages/Individuals.aspx`,
    marginBottom: 16,
  },

  {
    type: `header`,
    content: `West Virginia Sales Taxes for LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the WV Department of Revenue. West Virginia sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the WV Department of Revenue. West Virginia sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your West Virginia LLC: Self-Employment and Income Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You will typically need to collect West Virginia sales tax on:`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc. Certain services that your business might provide`,
        `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
      ],
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://tax.wv.gov/Business/SalesAndUseTax/Pages/SalesAndUseTax.aspx" target="_blank" rel="noopener noreferrer">Get details on the West Virginia sales tax here.</a>`,
  },
  {
    type: `header`,
    content: `Federal Taxes`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are a couple of different federal taxes that every LLC will need to pay, including West Virginia LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All West Virginia LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your West Virginia business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590.`, `On profits of $60,000, you would pay self-employment tax of $9,180.`, `On profits of $90,000, you would pay self-employment tax of $13,770.`, `On profits of $140,000, you would pay self-employment tax of $21,420.`],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your West Virginia LLC as an S Corporation`,
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
      text: `Incifle Form 2553 S corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your West Virginia LLC self-employment tax through an S Corporation tax election.`,
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
    content: `You must also pay regular federal income tax on any earnings you take out of your West Virginia LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Delaware LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes`,
    size: 3,
    marginBottom: 24,
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
          question: `Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Federal and State Tax Withholding`,
          answer: `You may also choose to withhold federal and West Virginia state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and West Virginia state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the West Virginia Division of Labor website.`,
                  url: `https://labor.wv.gov/Pages/default.aspx`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your West Virginia LLC`,
          answer: `Depending on the industry you are in, your West Virginia LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your West Virginia LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most West Virginia LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. `,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `West Virginia state tax`],
            },
            {
              type: `paragraph`,
              content: `Most West Virginia LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on West Virginia LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does West Virginia Have Sales Tax?`,
          answer: `Yes. West Virginia does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does West Virginia Have a State Tax?`,
          answer: `Yes. West Virginia does have a general state income tax. You can find more information above.`,
        },
        {
          question: `What Is the Sales Tax Rate in West Virginia?`,
          answer: `There is no sales tax in West Virginia, so the sales tax rate is zero.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes??`,
          answer: `Yes. In most cases, you must pay estimated taxes on your West Virginia tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 24,
  },
];
