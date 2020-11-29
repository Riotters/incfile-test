import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OK`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Get an LLC in Oklahoma`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Located in the south-central United States, Oklahoma is a state with a great deal of natural beauty and a history closely-entwined with Native American culture. The Sooner State has a diverse economy with natural resources, agriculture, energy, technology and aviation all being major sectors. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Oklahoma, one of the best ways to do so is by forming an Oklahoma LLC with the secretary of state. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Filing for an Oklahoma LLC gives you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities. `,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting an Oklahoma LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Oklahoma LLC`, `Easy tax filing and potential advantages for your tax treatment`],
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
    content: `Six Quick Steps for Oklahoma LLC Filing`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in OK. On this page you’ll find the basic steps of how to start an Oklahoma LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Oklahoma LLC`,
          answer: `<p>You will need a distinctive and original name for your Oklahoma LLC that’s not used by any other business in OK. To find out if another company is using your chosen business name, carry out an Oklahoma business entity name search on the OK Secretary of State website.</p></br>
                     <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Oklahoma LLC.</p></br>
                     <a href="/oklahoma-llc/how-to-name-your-llc/"> Learn about Oklahoma LLC business naming rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your OK LLC`,
          answer: `Every Oklahoma LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Oklahoma, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Oklahoma LLC`,
          answer: `<p>Every OK LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Oklahoma Secretary of State.</p></br>
  
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your OK Registered Agent must have a physical street address in Oklahoma and must be present to receive important documents for your company during business hours.</p></br>
            
            <p>At Incfile, all of our packages include an Oklahoma Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <a href="/oklahoma-llc/registered-agents-oklahoma-llc/">Learn more about Oklahoma Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Oklahoma LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization With the Ohio Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Oklahoma LLC, you’ll need to file a formal document with the OK Secretary of State. This document is known as your “Articles of Organization,” and filing the document establishes your Oklahoma business registration. Here’s what is typically included in an Oklahoma LLC filing:</p></br>
                     <ul>
                     <li> Your business name and address </li>
                     <li> Your business email address </li>
                     <li> Details of your Registered Agent </li>
                     <li> How long the business will exist (can be perpetual) </li>
                     <li> Name of the incorporator </li>
                     </ul></br>
                     <p>You can file your Oklahoma LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Oklahoma. You only need to file your Articles of Organization once.</p></br>
                     <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OK"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Oklahoma Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Oklahoma Secretary of State has plenty of information on forming and running a business in Oklahoma.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Check out the following resources: `,
      list: [
        `<a href="https://www.sos.ok.gov/business/default.aspx" target="_blank" rel="noopener noreferrer">Oklahoma Secretary of State for forming and running your OK LLC</a>`,
        `<a href="https://www.ok.gov/odol/" target="_blank" rel="noopener noreferrer">Oklahoma Department of Labor for OK employers and hiring</a>`,
        `<a href="https://www.ok.gov/tax/" target="_blank" rel="noopener noreferrer">Oklahoma Tax Commission for OK taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Special Types of Oklahoma LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Oklahoma LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },

  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form an Oklahoma Series LLC`,
          answer: `<p>In Oklahoma, you have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master, umbrella LLC. These can be very useful if you don’t want to set up a separate Oklahoma LLC for every individual business you run.</p></br>
            <a href="/blog/post/series-llc-why-need-one/">Decide if an Oklahoma Series LLC is right for your new business.</a>`,
        },
        {
          question: `Form a Professional Oklahoma LLC`,
          answer: `Some states, including Oklahoma, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Oklahoma does not specifically list the professions that can create a professional LLC.`,
        },
        {
          question: `Form a Foreign LLC in Oklahoma`,
          answer: `<p>If your business is already operating in another state and expanding to Oklahoma, you’ll need to form a foreign LLC.</p></br>
          <p><a href="/oklahoma-llc/form-filling-permit-requirements/">More information on Oklahoma filing and licensing requirements here.</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Oklahoma? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Oklahoma LLC`,
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
      text: `Naming Your Oklahoma LLC`,
      url: `/oklahoma-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Oklahoma business registry of the OK Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving an Oklahoma LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Oklahoma Registered Agents for Your LLC`,
      url: `/oklahoma-llc/registered-agents-oklahoma-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint an Oklahoma Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Oklahoma Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Oklahoma LLCs`,
      url: `/oklahoma-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Oklahoma rules. Includes details of Employee Identification Numbers (EINs), Oklahoma and federal business licenses, Oklahoma annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Oklahoma LLC`,
      url: `/oklahoma-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Oklahoma government. Includes details of federal taxes like income tax and self-employment tax, and Oklahoma taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Oklahoma Business Entity Searches & How to Register Your LLC Business Name`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your Oklahoma LLC. From carrying out an Oklahoma business entity search with the Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma Secretary of State Business Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing an “Oklahoma business entity search” with the Oklahoma Secretary of State. They have a helpful tool on their website that lets you search the registry of OK LLCs and corporations to see if someone already has your desired business name. `,
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
      text: `Oklahoma Secretary of State entity search tool`,
      url: `https://www.sos.ok.gov/business/corp/records.aspx/`,
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Oklahoma Secretary of State Rules for Naming Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Oklahoma Secretary of State naming rules.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Rules for Naming Your OK LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Oklahoma LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Oklahoma. This is why you should check business name availability on the OK SOS website.`,
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
    content: `It’s not enough for your OK LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Oklahoma. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
        `Are very similar to the name of a federal or OK agency or organization (e.g., FBI, FDA, Oklahoma Tax Commission, Oklahoma Police, Treasury, etc.)`,
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
    content: `DBA Names in Oklahoma `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Oklahoma, a DBA (“doing business as”) name is known as your “Trade Name” or “Fictitious Name.” You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Oklahoma Renewable Energy Holding Company LLC, and you want to brand it as “Oklahoma Turbines and Panels.” You should file a trade name to let the Oklahoma Secretary of State know. In Oklahoma, you can do that through their online filing service, or you can have Incfile do it on your behalf through our DBA name service.`,
    marginBottom: 24,
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
    content: `Register Your Business Name With the Oklahoma Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Oklahoma business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your OK LLC name. There are a couple of ways to do this.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If you don’t want to form your Oklahoma LLC right now, you can reserve the business name with the Oklahoma Secretary of State. `,
        `If you’re ready to start your Oklahoma LLC, you can formally file your Articles of Organization with the Oklahoma SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OK">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Oklahoma LLC`,
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
          question: `How Do I Search for My Oklahoma LLC Business Name?`,
          answer: `Just go to the <a href="https://www.sos.ok.gov/business/corp/records.aspx" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Oklahoma Secretary of State, which will tell you if there are any OK corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Oklahoma LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Oklahoma). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Oklahoma?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Oklahoma LLC?`,
          answer: `Yes. The Oklahoma Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Oklahoma LLC`,
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
    content: `You must be careful that your Oklahoma LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Oklahoma LLC`,
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
    content: `Oklahoma Registered Agents for Your LLC `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `The Oklahoma Secretary of State requires every OK LLC to have a Registered Agent. Once you have assigned an Oklahoma Registered Agent, they can receive official correspondence and documents on behalf of your OK business. Registered Agents can be individuals or other specialized Registered Agent service businesses. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first start your business. You can also replace your existing OK Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },

  {
    type: `header`,
    content: `Rules for Oklahoma Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing an Oklahoma Registered Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If the Registered Agent is a person, they must reside in Oklahoma.`,
        `If the Registered Agent is a business, they must be able to conduct business in Oklahoma.`,
        `The Registered Agent must have a physical street address in Oklahoma, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Oklahoma LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From an Oklahoma Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your Oklahoma Registered Agent? Their main function is to accept official documents and correspondence from the OK Secretary of State. This includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the Oklahoma Secretary of State`,
        `Service of process notices (e.g., if your OK LLC is sued or required to appear in court)`,
        `Official Oklahoma state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 40,
    color: color.green3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `A Complete Oklahoma Registered Agent Service From Incfile`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Oklahoma and you need an OK Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Oklahoma business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Oklahoma and can legally act as your Registered Agent. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what you need to know about Incfile’s OK Registered Agent service:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Oklahoma Secretary of State or anyone else`,
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
      text: `Order Incfile's Oklahoma registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint an Oklahoma Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Oklahoma LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint an OK Registered Agent Service When You Create Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have an Oklahoma Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the Oklahoma Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the OK Secretary of State to formally create your business.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Oklahoma Registered Agent `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Oklahoma Registered Agent service for the first year, and we’ll include details of your OK Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OK`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Oklahoma Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your OK Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `File Form CHANGE OR DESIGNATION OF REGISTERED AGENT AND/OR REGISTERED OFFICE with the Oklahoma SOS`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Oklahoma Registered Agent, you can complete a form that’s available on the OK Secretary of State website. Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Oklahoma Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our OK Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Oklahoma Secretary of State. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Oklahoma registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Oklahoma Registered Agent Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Oklahoma LLC. If you do, you can search the business database of the Oklahoma Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the OK Registered Agent isn’t available from the searchable business registry, contact the Oklahoma Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint an Oklahoma Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Oklahoma Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Oklahoma Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as an Oklahoma LLC:</b> A OK Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Oklahoma LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Oklahoma Registered Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in Oklahoma, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The OK Registered Agent must have a physical street address in Oklahoma. If you’re forming an LLC outside OK, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Oklahoma address to sign for important documents.`,
        `The OK Registered Agent’s name and address are part of the public record and available through the Oklahoma Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Oklahoma business address or move out of state, you would need to file additional documentation with the OK Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Oklahoma Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Oklahoma Registered Agent?`,
          answer: `Yes. All OK LLCs are required to have a Registered Agent. This is mandated by the Oklahoma Secretary of State.`,
        },
        {
          question: `When Can I Assign a Oklahoma Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Oklahoma business through paperwork filed with the OK Secretary of State, or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Oklahoma?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Oklahoma Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Oklahoma?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Oklahoma Registered Agent Services`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of an Oklahoma Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Oklahoma Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/">What an Oklahoma Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Oklahoma LLC Fees and Filing Requirements`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Oklahoma business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Oklahoma Secretary of State, while others are due to the Oklahoma Tax Commission (Department of Revenue) or the federal government. We’ve summarized the most common requirements and fees here. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Oklahoma business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in Oklahoma`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Oklahoma, you’ll need to file an LLC with the OK Secretary of State and pay an Oklahoma filing fee. Here are the current fees and filing times for Oklahoma:`,
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
    content: `When you form your OK LLC through Incfile, we automatically forward this fee to the Oklahoma Secretary of State when we file your incorporation paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/"> compare state filing times and fees here, including expedited fees for Oklahoma.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Oklahoma LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=OK`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your OK LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every Oklahoma LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Oklahoma LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification/Certificate of Authority to Operate in a State Outside Oklahoma`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your Oklahoma LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Oklahoma. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Oklahoma LLC Annual Reporting and Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Oklahoma requires you to file an Annual Report with the secretary of state. When you file your OK LLC Annual Report, you may need to pay a fee. Here are the annual filing requirements for Oklahoma: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Oklahoma LLC filing requirements</a> and business filing deadlines with our helpful Oklahoma ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Oklahoma Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Oklahoma Business Licenses and Permits`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Oklahoma LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Oklahoma, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Oklahoma LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Oklahoma LLC (state, county or city) (e.g., a license to conduct business from the city of Tulsa)`,
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
      list: [`A complete report on all the licenses, permits and tax registrations your Oklahoma LLC will need`, `The application forms you will need to file with the Oklahoma, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Oklahoma and local governments.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Operating Agreements and Oklahoma LLCs`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Oklahoma business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc Oklahoma Fees or Requirements for Your OK LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Oklahoma LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA/Trade Name for Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your OK business to trade under a different name, you can file a form with the Oklahoma Secretary of State. You will need to pay an Oklahoma filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Oklahoma Registered Agent for Your OK LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Oklahoma LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new OK Registered Agent later. Incfile provides a complete Oklahoma Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you don’t want to form your OK business right away, you can reserve a name with the Oklahoma Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Oklahoma business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Oklahoma Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Oklahoma Articles of Amendment for include:`,
      list: [`Adding, removing or changing an Oklahoma LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Oklahoma LLC`],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Oklahoma LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Oklahoma Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Oklahoma certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard OK LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Oklahoma LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for OK LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Oklahoma LLC Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Oklahoma LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Oklahoma business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you to file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require Annual Reports. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Oklahoma LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                    <ul>
                    <li>The type of business you run</li>
                    <li>Where you are located</li>
                    <li>Governing organizations in your industry</li>
                    <li>Federal, state and local regulations</li>
                    </ul></br>
                    That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Oklahoma LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business and Sales Taxes for Your Oklahoma LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your OK LLC will need to pay a variety of taxes to both the federal and Oklahoma governments. Here we’ll explain all the main business taxes in Oklahoma, including self-employment, payroll, federal, Oklahoma state tax and Oklahoma sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Oklahoma LLC Will Be Taxed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of an Oklahoma LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Oklahoma LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Oklahoma LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Oklahoma LLC owners pay OK state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some OK LLCs pay Oklahoma sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Oklahoma personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma Taxes Payable to the OK Tax Commission/Department of Revenue`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Oklahoma Tax Commission: Oklahoma state income tax and Oklahoma state sales tax.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Oklahoma State Income Tax Payable on LLC Earnings`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As an Oklahoma business owner, you will need to pay OK state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Oklahoma income tax. You will be taxed at the standard rates for Oklahoma state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Oklahoma state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Oklahoma state tax rate varies between 0.5 percent and 5 percent depending on how much you earn. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href="https://www.ok.gov/tax/Individuals/Income_Tax/index.html/" target="_blank" rel="noopener noreferrer" > Oklahoma state tax online here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the OK Tax Commission. Oklahoma sales tax is collected at the point of purchase. Oklahoma sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Oklahoma sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Oklahoma business might provide`],
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
    content: `Get details on the <a href="https://www.ok.gov/tax/All_Taxes/Sales_&_Use_Tax/" target="_blank" rel="noopener noreferrer">Oklahoma sales tax here</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma Sales Tax Rates`,
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
    content: `Federal Self-Employment and Income Taxes for Your Oklahoma LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Oklahoma LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All Oklahoma LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Oklahoma business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590`, `On profits of $60,000, you would pay self-employment tax of $9,180`, `On profits of $120,000, you would pay self-employment tax of $18,360`, `On profits of $140,000, you would pay self-employment tax of $21,420`],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Oklahoma LLC as an S Corporation`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. `,
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
    content: `Speak to your accountant for more information on reducing your Oklahoma LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Oklahoma LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Oklahoma LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Oklahoma LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Oklahoma LLC`,
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
          question: `Employer Payroll Tax Withholding for Your Oklahoma LLC `,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Oklahoma LLC`,
          answer: `You may also choose to withhold federal and Oklahoma state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Oklahoma state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Oklahoma LLC Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the Oklahoma Department of Labor website.`,
                  url: `https://www.ok.gov/odol/`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Oklahoma LLC`,
          answer: `Depending on the industry you are in, your Oklahoma LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Oklahoma LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Oklahoma LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `Oklahoma state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Oklahoma LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Oklahoma LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Oklahoma Have Sales Tax?`,
          answer: `Yes. Oklahoma does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Oklahoma Have a State Tax?`,
          answer: `Yes. Oklahoma does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Oklahoma tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
