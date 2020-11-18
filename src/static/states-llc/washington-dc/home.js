import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DC`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Washington DC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The center of political power in the U.S., Washington DC is a thriving city with an extremely active business community. You don’t need to be directly involved in politics to start a business in DC, however, as there are plenty of opportunities in other areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Washington DC, one of the best ways to do so is by forming an LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. DC LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Washington DC LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Washington DC LLC`, `Easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 16,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Learn more about the <a href="/limited-liability-company/"> benefits of the LLC business structure here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Form a Washington DC LLC in Six Quick Steps`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Washington DC LLC, but you can break down the basics of forming a business in DC into just a few simple steps.`,
    marginBottom: 16,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Washington DC LLC`,
          answer: `<p>You will need a distinctive and original name for your Washington DC LLC that’s not used by any other business in DC. To find out if another company is using your chosen business name, carry out a Washington DC business entity name search on the DC Department of Consumer and Regulatory Affairs website.</p>
                    <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Washington DC LLC.</p>
                    <p><a href="/washington-dc-llc/how-to-name-your-llc/">Learn about Washington DC LLC business naming rules</a>.</p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your DC LLC`,
          answer: `Every Washington DC LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Washington DC LLC`,
          answer: `<p>Every LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Washington DC Department of Consumer and Regulatory Affairs.</p>
                    <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Washington DC and must be present to receive important documents for your company during business hours.</p>
                    <p>At Incfile, all of our packages include a Washington DC Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p>
                    <p><a href="/washington-dc-llc/registered-agents-washington-dc-llc/">Learn more about Washington DC Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Washington DC LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Washington DC Department of Consumer and Regulatory Affairs`,
          answer: `<p>Once you've gathered all the information for your Washington DC LLC, you’ll need to file a formal document with the DC Department of Consumer and Regulatory Affairs. This document is known as your “Articles of Organization,” and filing the document creates your Washington DC LLC. Here’s what is typically included:</p>
                <ul>
                    <li> Your business name and address</li>
                    <li> Details of your Registered Agent</li>
                    <li>Names of managers or members of the LLC at the time of filing</li>
                    <li>Addresses of managers or members of the LLC at the time of filing</li>
                    <li>Purpose of your business</li>
                    <li>Name of the incorporator</li>
                </ul>
                <p>You can file your Washington DC LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Washington DC. You only need to file your Articles of Organization once.</p>
                <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=DC"> Form Your LLC now</a> `,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Washington DC Department of Consumer and Regulatory Affairs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In most states, LLC formation and registration is handled by the Secretary of State. In the Commonwealth of Washington DC, businesses are administered by the DC State Corporation Commission. They have plenty of information on forming and registering a business in Washington DC.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These are all the basic steps for forming an LLC in Washington DC. You’ll find other useful information below:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<a href="https://dcra.dc.gov/service/domestic-limited-liability-company" target="_blank" rel="noopener noreferrer">Washington DC Department of Consumer and Regulatory Affairs for forming and running your LLC</a>`,
        `<a href="https://does.dc.gov/" targer="_blank" rel="noopener noreferrer">Washington DC Department of Employment Services for DC employers and hiring</a>`,
        `<a href="https://otr.cfo.dc.gov/" target="_blank" rel="noopener noreferrer">Washington DC Office of Tax and Revenue for taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue2,
  },
  {
    type: `header`,
    content: `Form a Professional Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some regions, including Washington DC, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. The DC Department of Consumer and Regulatory Affairs says that “professionals—such as lawyers, architects, accountants, engineers and doctors, etc.—shall register Professional LLC (PLLC).”`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `Form a Foreign LLC in Washington DC`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If your business is already operating in another state and expanding to Washington DC, you’ll need to form a foreign LLC.</br>
        More information on Washington DC <a href="/washington-dc-llc/form-filling-permit-requirements/">filing and licensing requirements here</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `What to Do After Setting up Your Washington DC LLC`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Washington DC? We’ve got you covered. Here’s our guide to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `Detailed Information for Your Washington DC LLC`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Naming Your Washington DC LLC`,
          answer: `How to search the Washington DC business registry of the DC Department of Consumer and Regulatory Affairs and find the right name. Includes information on naming rules, fictitious names, reserving a Washington DC LLC name and more.`,
        },
        {
          question: `Washington DC Registered Agents for Your LLC`,
          answer: `How to appoint a Washington DC Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Washington DC Registered Agents.`,
        },
        {
          question: `Fees and Requirements for Your Washington DC LLC`,
          answer: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Washington DC rules. Includes details of Employee Identification Numbers (EINs), Washington DC and federal business licenses, Washington DC Annual Reports and more.`,
        },
        {
          question: `Federal, State, Sales and Other Taxes for Your Washington DC LLC`,
          answer: `How to understand the various taxes you will need to pay to the federal and Washington DC government. Includes details of federal taxes like income and self-employment, and Washington DC taxes like sales tax and income tax.`,
        },
      ],
    },
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Registering an LLC Name in Washington DC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Washington DC business name or registering your LLC with the DC Department of Consumer and Regulatory Affairs, we can help. We’ve got all the information you need on a Washington DC business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC Business Entity Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Washington DC LLC registered with your desired business name. That means searching the Washington DC Department of Consumer and Regulatory Affairs (DCRA) website using its business search tool. You can easily look up DC LLCs and corporations by name and other details. Using the tool is easy:`,
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
      text: `Washington DC business name search tool`,
      url: `https://business.dc.gov/research_business_info`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules for Naming Your Washington DC LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Washington DC Department of Consumer and Regulatory Affairs naming rules.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in Washington DC. This is why you should check business name availability on the DC DCRA website.`,
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
    content: `It’s not enough for your DC LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Washington DC.`,
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
    color: color.green3,
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
    content: `Most areas will not allow you to form LLCs with names that:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or DC agency or organization (e.g., FBI, FDA, Washington DC Office of Tax and Revenue, Washington DC Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `DBA/Trade Names in Washington DC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Washington DC, doing business under a different name is known as a “trade name.” You might choose to use a different name from your DC formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Potomac Cleaning Services Holding Company LLC and you have a brand called Monument and Mall Restoration Services. You should file a trade name online to let the DC Department of Consumer and Regulatory Affairs know. Incfile can do this on your behalf through our DBA/Trade Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile’s DBA/Trade Name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Form your Washington DC LLC Now`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DC`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
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
          question: `How Do I Search for My Washington DC LLC Business Name?`,
          answer: `Just go to the <a href="https://business.dc.gov/research_business_info" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Washington DC Department of Consumer and Regulatory Affairs, which will tell you if there are any DC corporations or LLCs with that name.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Washington DC?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Washington DC LLC`,
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
    size: 4,
    content: `Trademarks and Service Marks`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your Washington DC LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile Trademark Search and Registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Washington DC LLC`,
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
    color: color.babyblue3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Washington DC Registered Agents for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your LLC must assign a Registered Agent. This is a formally recognized person or business that can receive business correspondence and other documents from the Washington DC Department of Consumer and Regulatory Affairs. Assigning a Registered Agent is a legal requirement`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Washington DC Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Information from the Department of Consumer and Regulatory Affairs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Department of Consumer and Regulatory Affairs on Washington DC Registered Agent services:`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `“Any business required to register with the Corporations Division is required to maintain a registered agent. Said registered agent may be a bona fide Washington DC resident or a company physically located in the Washington DC. The registered agent’s office may or may not be the same address as the place of business.”`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `DC Registered Agents: The Rules You Need to Follow`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Washington DC Registered Agent service for your business.`,
    marginBottom: 48,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Washington DC.`,
        `If the Registered Agent is a business, they must be able to conduct business in Washington DC.`,
        `The Registered Agent must have a physical street address in Washington DC, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Washington DC LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What a DC Registered Agent Does`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Washington DC Registered Agent carries out several valuable services for your business. They accept official communications and documents from the DC Department of Consumer and Regulatory Affairs on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the Washington DC Department of Consumer and Regulatory Affairs, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your LLC has legal proceedings issued against it)`,
        `Official Washington DC and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free Washington DC Registered Agent Service for the First Year`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Washington DC Registered Agent service for any LLC that’s incorporated in DC. Even better, if you choose to incorporate your business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Washington DC and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what the Incfile Washington DC Registered Agent service provides for your LLC:`,
      list: [
        `An always-available Washington DC Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your business`,
        `Email notification whenever we receive documents for your business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile’s Washington DC Registered Agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your Options for Appointing a Washington DC Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Washington DC LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign Your Registered Agent When You Form Your DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business needs to have a Washington DC Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization with the Washington DC Department of Consumer and Regulatory Affairs`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the DC Department of Consumer and Regulatory Affairs to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Washington DC Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DC`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Change Your Washington DC Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your DC Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form with the Washington DC Department of Consumer and Regulatory Affairs`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Registered Agent, you can complete a form that’s available on the DC Department of Consumer and Regulatory Affairs website. Once you’ve filled it out, send it to the Department of Consumer and Regulatory Affairs so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Washington DC Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our DC Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Washington DC Department of Consumer and Regulatory Affairs. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile’s Washington DC Registered Agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `DC Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Washington DC LLC. If you do, you can search the business database of the Department of Consumer and Regulatory Affairs, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the Washington DC Department of Consumer and Regulatory Affairs requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a Washington DC Registered Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Washington DC Department of Consumer and Regulatory Affairs?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Washington DC Department of Consumer and Regulatory Affairs:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain areas may revoke your right to do business.`,
        `<b>Losing your status as a Washington DC LLC:</b> A Registered Agent “proves” to local government that your business exists. without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Registered Agent for Your DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Washington DC, you can choose to be the Registered Agent for your LLC. `,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The Registered Agent must have a physical street address in Washington DC. You always need to have someone on hand during business hours at the Washington DC address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the Washington DC Department of Consumer and Regulatory Affairs's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Washington DC business address or move out of the area, you would need to file additional documentation with the DC Department of Consumer and Regulatory Affairs for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
      marginBottom: 48,
      color: color.purple3,
    },
  },
  {
    type: `header`,
    size: 3,
    content: `FAQs About Washington DC Registered Agents`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Washington DC Registered Agent?`,
          answer: `Yes. All LLCs are required to have a Registered Agent. This is mandated by the Washington DC Department of Consumer and Regulatory Affairs.`,
        },
        {
          question: `When Can I Assign a Washington DC Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Washington DC business through paperwork filed with the Department of Consumer and Regulatory Affairs or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Washington DC?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Department of Consumer and Regulatory Affairs.`,
        },
        {
          question: `Does My DC Registered Agent Need to Have an Address in Washington DC?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in DC.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Washington DC Registered Agent Services`,
    size: 3,
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
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Washington DC Registered Agent</a>`,
        `<a htef="/manage-your-company/change-of-registered-agent/">Changing Your Washington DC Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Washington DC Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue2,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `LLC Fees and Filing Requirements in DC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Washington DC, including related fees and costs. Your DC LLC needs to pay various fees to the federal government, the local government and other agencies. Some of these fees are levied by the Washington DC Department of Consumer and Regulatory Affairs or other organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Washington DC business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC LLC Formation Filing and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Washington DC, you’ll file an LLC with the Department of Consumer and Regulatory Affairs and pay an associated LLC formation fee. Every region has different LLC filing fees and filing times. Here is the current information for Washington DC:`,
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
    content: `When you incorporate through Incfile, we forward this fee to the Washington DC Department of Consumer and Regulatory Affairs on your behalf when we file your paperwork. `,
    marginBotm: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Washington DC</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCORPORATE YOUR Washington DC LLC THROUGH INCFILE TODAY`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DC`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Washington DC LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `GET AN EIN FOR YOUR Washington DC LLC THROUGH INCFILE`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ongoing Washington DC Filing and Annual Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Washington DC requires you to file a report the year after you incorporate, then every other year after that. When you file your DC LLC annual report, you will need to pay a fee. Here are the filing requirements for Washington DC:`,
    marginBottom: 32,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/"> Learn about your ongoing Washington DC LLC filing requirements </a> and business filing deadlines with our helpful Washington DC filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Washington DC Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC ANNUAL REPORT FILING SERVICE`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC Business Licenses and Permits`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Washington DC LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Washington DC, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [`The industry your Washington DC LLC operates in (e.g., restaurants will need health permits)`, `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `list-dot`,
    content: {
      header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Washington DC LLC willl need`, `The application forms you will need to file with the Washington DC, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Washington DC and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC BUSINESS LICENSE RESEARCH PACKAGE`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Washington DC LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Washington DC business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Washington DC Fees or Requirements for Your DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Washington DC LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you want your DC business to trade under a different name, you can file a form with the Washington DC Department of Customer and Regulatory Affairs. You will need to pay a Washington DC filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC FICTITIOUS NAME SERVICE`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Change the Washington DC Registered Agent for Your DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Washington DC LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new DC Registered Agent later. Incfile provides a complete Washington DC Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC REGISTERED AGENT SERVICE`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you don’t want to form your DC business right away, you can reserve a name with the Washington DC Department of Financial Institutions. You will need to pay a small fee to do this.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Washington DC business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Washington DC Department of Consumer and Regulatory Affairs. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Washington DC Articles of Amendment for include:`,
      list: [`Adding, removing or changing an Washington DC LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Washington DC LLC`],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC ARTICLES OF AMENDMENT SERVICE`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Washington DC Corporation Commission Certificate of Good Standing`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Washington DC LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Washington DC Department of Consumer and Regulatory Affairs. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington DC CERTIFICATE OD GOOD STANDING SERVICE`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard DC LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. a`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Washington DC LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for DC LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Washington DC LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Washington DC LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the DC Department of Consumer and Regulatory Affairs on your behalf when forming your Washington DC business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Washington DC, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/compliance> compilance page for your state</a>.`,
        },
        {
          question: `Who will I Need to Get Business Licenses and Permits From for My Washington DC LLC?`,
          answer: `It depends on various factors including:
                <ul>
                    <li>The type of business you run</li>
                    <li>Where you are located</li>
                    <li>Governing organizations in your industry</li>
                    <li>Federal, state and local regulations</li>
                </ul></br>
                <p>That’s why our <a href="/business-license-research-package/">Business License Research Package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Washington DC LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Washington DC LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your DC LLC will need to pay a variety of taxes to both the federal and Washington DC governments. We’ll cover all the main taxes in Washington DC, including self-employment, payroll, federal, Washington DC state tax and Washington DC sales tax.  `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Washington DC LLC will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of an Washington DC LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Washington DC LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Washington DC LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Washington DC LLC owners pay DC state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some DC LLCs pay Washington DC sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Washington DC personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC Income Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Washington DC Office of Tax and Revenue: Washington DC income tax and Washington DC sales tax. As a Washington DC business owner, you will need to pay income tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay income tax. You will be taxed at the standard rates for Washington DC taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal income taxes.</br>
    The Washington DC tax rates are between 4 and 8.95 percent, depending on your earnings.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get details on the Washington DC income tax here.`,
      url: `/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the DC Department of Revenue. Washington DC sales tax is collected at the point of purchase. Washington DC sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Washington DC sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Washington DC business might provide`],
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
    content: `Get details on the <a href="/washington-dc-llc/business-taxes/" target="_blank" rel="noopener noreferrer">Washington DC sales tax here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Washington DC LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Washington DC business owner, you will need to pay DC state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Washington DC income tax. You will be taxed at the standard rates for Washington DC state taxes, and you will also get to apply regular allowances and deductions. Any salaried employees will also need to pay personal Washington DC state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href="https://www.revenue.DC.gov/Pages/FAQS/pcs-taxrates.aspx" target="_blank" rel="noopener noreferrer">Washington DC state tax rates here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Washington DC LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington DC LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `All Washington DC LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Washington DC business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when determining how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `On profits of $40,000, you would pay self-employment tax of $6,120.`,
        `On profits of $100,000, you would pay self-employment tax of $12,240.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
        `On profits of $160,000, you would pay self-employment tax of $24,480.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Washington DC LLC as an S Corporation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. `,
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
      text: `Incfile Form 2553 S Corporation Tax Election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Washington DC LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Washington DC LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Washington DC LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Washington DC LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Washington DC LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer Payroll Tax withholding for Your Washington DC LLC `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer Payroll Tax Withholding`,
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
    content: `Employer Federal and Local Tax Withholding`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal and Washington DC income tax on the wages you pay to employees. Speak to your accountant for more information.`,
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
    content: `Regardless of whether you withhold federal and Washington DC income tax, your employees may need to file their own tax returns.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employee Insurance and Other Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `Other Taxes and Duties for Your Washington DC LLC`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Washington DC LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `Estimated Taxes for Your Washington DC LLC`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most Washington DC LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Washington DC local tax`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `text`,
    content: `Most Washington DC LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Washington DC LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Washington DC Have Sales Tax?`,
          answer: `Yes. Washington DC does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Washington DC Have a State Tax?`,
          answer: `Yes. Washington DC does have a general state income tax. You can find more information above.`,
        },
        {
          question: `What Is the Sales Tax Rate in Washington DC?`,
          answer: `The sales tax rate in DC is 6 percent.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Washington DC tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
      [`Registered Agent included in the price`, `check-green`, `check-red`, `check-red`],
    ],
  },
};
