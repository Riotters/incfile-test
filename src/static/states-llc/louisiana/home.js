import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=LA`,
    },
  ],
};

const newLocal = `aaa`;
export const howToGuide = [
  {
    type: `header`,
    content: `Starting an LLC in Louisiana`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The great state of Louisiana is located on the southeast coast of the U.S. and borders Mississippi, Arkansas and Texas. 
    It’s a combination of unusual geography, a rich and vibrant culture and a growing economy, making it a very business-friendly state. 
    It has the largest bulk cargo port in the world and is a center of tourism, agriculture and energy.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Louisiana, one of the best ways to do so is by forming a Louisiana LLC.
     Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Louisiana
      LLCs give you many of the protections and advantages of larger corporations without all the rules, 
    regulations and compliance issues common to larger business entities. `,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Louisiana LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Louisiana LLC`, `Easy tax filing and potential advantages for your tax treatment`],
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
    content: `Form an Louisiana LLC in Six Quick Steps`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in LA. On this page you’ll find the basic steps for forming an LLC in Louisiana, with more in-depth content throughout the rest of our guide.`,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members.
           The LLC members are typically the people who own and run the business.
           They are also the ones who can take profits out of the business to pay themselves.`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Louisiana LLC`,
          answer: `You will need a distinctive and original name for your Louisiana LLC that’s not used by any other business in LA. To find out if another company is using your chosen business name,
           carry out a Louisiana business entity name search on the LA Secretary of State website
          There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Louisiana LLC.
          Learn about Louisiana LLC business naming rules.`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your LA LLC`,
          answer: `Every Louisiana LLC must have a designated street address. That could be your home address (if you’re running the company from your residence),
           your company’s office building or any physical address of your preference. 
          The address can be outside the state of Louisiana, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Louisiana LLC`,
          answer: `Every LA LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Louisiana Secretary of State.

          This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your LA Registered Agent must have a physical street address in Louisiana and must be present to receive important documents for your company during business hours. 
          
          At Incfile, all of our packages include a Louisiana Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.
          <br>
          Learn more about California Agents for Service of Process.`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying
           taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS,
           or Incfile can get one for you as part of the Louisiana LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Louisiana Secretary of State`,
          answer: ``,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from the Louisiana Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `The LA Secretary of State has plenty of information on forming and running a business in Louisiana. These are all the basic steps for forming an LLC in Louisiana. You’ll find other useful information below.`,
      list: [
        `<a href="https://www.sos.la.gov/BusinessServices/StartABusiness/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Louisiana Secretary of State for forming and running your LA LLC</a>`,
        `<a href="http://www.laworks.net/" target="_blank" rel="noopener noreferrer">Louisiana Workforce Commission for LA employers and hiring</a>`,
        `<a href="https://www.revenue.louisiana.gov/" target="_blank" rel="noopener noreferrer">Louisiana Department of Revenue for LA taxes</a>`,
      ],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Louisiana`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `<p>If your business is already operating in another state and expanding to Louisiana, you’ll need to form a foreign LLC. </p></br>
              <p> More information on Louisiana filing and licensing requirements here <link to state subpage once published> </p>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Filing Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Louisiana? We’ve got you covered. <a href="/after-forming-llc/"> Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 40,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your Louisiana LLC`,
      url: `/louisiana-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Louisiana business registry of the LA Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Louisiana LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Louisiana Registered Agents for LLCs`,
      url: `/louisiana-llc/registered-agents-louisiana-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Louisiana Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Louisiana Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Louisiana LLCs`,
      url: `/louisiana-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Louisiana rules. Includes details of Employer Identification Numbers (EINs), Louisiana and federal business licenses, Louisiana annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Louisiana LLC`,
      url: `/louisiana-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Louisiana government. Includes details of federal taxes like income and self-employment, and Louisiana taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];
export const namingYourBusiness = [
  {
    type: `header`,
    content: `Search for the Perfect Louisiana LLC Name and Register It with the Secretary of State `,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Louisiana business name or registering your LLC with the LA Secretary of State, we can help. We’ve got all the information you need on a Louisiana business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Conduct a Business Entity Search with the Louisiana Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Before filing your LLC, you’ll need to check whether there’s already another Louisiana LLC registered with your desired business name. That means completing an LLC search on the Louisiana Secretary of State website using their entity search tool. You can easily look up LA LLCs and corporations by name and other details. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 24,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Louisiana Secretary of State business search tool`,
      url: `https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx`,
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `LA Secretary of State Rules for Naming Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Louisiana Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in LA.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Louisiana. This is why you should check business name availability on the LA SOS website.`,
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
    content: `It’s not enough for your LA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Louisiana. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
    marginBottom: 40,
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
        `Are very similar to the name of a federal or LA agency or organization (e.g., FBI, FDA, Louisiana Department of Revenue, Louisiana Police, Treasury, etc.)`,
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
    content: `Louisiana LLC Trade Names or DBAs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. This is often referred to as a DBA, or “doing business as” name, but in Louisiana it’s known as a “trade name.” You might choose to use a different name from your LA formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Louisiana Parrish Projects Holding Company LLC and you have a property development chain called Mardi Gras Apartments. You should file a trade name to let the Louisiana Secretary of State know. `,
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
    content: `Register Your Business Name with the Louisiana Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve completed a Louisiana business entity search, checked availability, followed the naming rules and decided whether you need a trade name, you can register your LA LLC name. There are a couple of ways to do this:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If you don’t want to form your Louisiana LLC right now, you can reserve the business name with the Louisiana Secretary of State. You will need to complete an application for reservation and file it with the LA SOS. You do not need to reserve a name if you are forming your business right away.`,
        `If you’re ready to start your Louisiana LLC, you can formally file your Articles of Organization with the Louisiana SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=LA/">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Louisiana LLC`,
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
          question: `How Do I Search for My Louisiana LLC Business Name?`,
          answer: `Just go to the <a href="https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Louisiana Secretary of State, which will tell you if there are any LA corporations or LLCs with that name.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Louisiana?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Louisiana LLC?`,
          answer: `Yes. The Louisiana Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Louisiana LLC`,
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
    content: `You must be careful that your Louisiana LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Louisiana LLC`,
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
    content: `Louisiana Registered Agents and Your LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Every business entity formed in Louisiana needs to formally appoint a person or business to act as a Registered Agent. Your Louisiana Registered Agent provides various services for your LLC, including the acceptance of formal documents and correspondence from the Louisiana Secretary of State.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Louisiana Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing LA Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Rules for Louisiana Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Louisiana Registered Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `If the Registered Agent is a person, they must reside in Louisiana.`,
        `If the Registered Agent is a business, they must be able to conduct business in Louisiana.`,
        `The Registered Agent must have a physical street address in Louisiana, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the LA Registered Agent address does not need to be the same as your Louisiana LLC business address. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect from a Louisiana Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your Louisiana Registered Agent? Their main function is to accept official documents and correspondence from the LA Secretary of State. This includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Correspondence from the Louisiana Secretary of State`,
        `Service of process notices (e.g., if your LA LLC is sued or required to appear in court)`,
        `Official Louisiana state and federal government correspondence and notifications`,
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
    content: `The Incfile Registered Agent Service for Louisiana LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Louisiana and you need a Louisiana Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Louisiana business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Louisiana and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what you need to know about Incfile’s LA Registered Agent service:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf.`,
        `We automatically notify you whenever we receive correspondence for your business from the Louisiana Business Registration Division or anyone else.`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
        `We forward all correspondence to an address you choose.`,
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
    content: `How to Appoint a Louisiana Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Louisiana LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Assign Your Louisiana Registered Agent When You Form Your LA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a Louisiana Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `File Articles of Organization with the Louisiana Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the LA Secretary of State to formally create your business.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Louisiana Registered Agent `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Louisiana Registered Agent service for the first year, and we’ll include details of your LA Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=LA`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Change Your Louisiana Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your LA Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form Notice of Change of Registered Office and/or Change of Registered Agent with the Louisiana Secretary of State.`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Louisiana Registered Agent, you can complete form that’s available on the LA Secretary of State website. Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Louisiana Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our LA Registered Agent service, we take care of all the form filling for you. We’ll collect important information about your business, complete form on your behalf and send it to the Louisiana Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Louisiana registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Louisiana Registered Agent Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Louisiana LLC. If you do, you can search the business database of the Louisiana Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the LA Registered Agent isn’t available from the searchable business registry, contact the Louisiana Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Issues with Not Having a Louisiana Registered Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Louisiana Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Louisiana Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a Louisiana LLC:</b> A Louisiana Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LA LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the Louisiana Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Louisiana, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The LA Registered Agent must have a physical street address in Louisiana. If you’re forming an LLC outside LA, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Louisiana address to sign for important documents.`,
        `The LA Registered Agent’s name and address are part of the public record and available through the Louisiana Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Louisiana business address or move out of state, you would need to file additional documentation with the LA Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Louisiana Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Louisiana Registered Agent?`,
          answer: `Yes. All LA LLCs are required to have a Registered Agent. This is mandated by the Louisiana Secretary of State.`,
        },
        {
          question: `When Can I Assign a Louisiana Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Louisiana business through paperwork filed with the LA Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Louisiana?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Louisiana Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Louisiana?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Louisiana Registered Agent Services`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Louisiana Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Louisiana Registered Agent</a>`,
        `<a href-"/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Louisiana Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];
export const feesAndRequirments = [
  {
    type: `header`,
    content: `Louisiana Business Licenses, Fees and Filing Requirements`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Louisiana business, you’ll be required to obtain business licenses, pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Louisiana Secretary of State, while others are due to the federal or Louisiana government. We’ve summarized the most common requirements and fees here. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Louisiana business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Louisiana LLC Formation Filing and Fees `,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `To create your business in Louisiana, you’ll file an LLC with the LA Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing costs and filing times. Here is the current information for Louisiana:`,
    marginBottom: 32,
  },
  {
    type: `dynamic_ar_box`
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
    content: `When you incorporate through Incfile, we forward this fee to the Louisiana Secretary of State on your behalf when we file your paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/"> compare state filing times and fees here, including expedited fees for Louisiana.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Louisiana LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=LA/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your LA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every Louisiana LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your Louisiana LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Louisiana`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your Louisiana LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Louisiana. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Louisiana LLC Annual Report and Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to file an annual report. When you file your LA LLC annual report, you will need to pay a fee. Here are the annual filing requirements for Louisiana: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Louisiana LLC filing requirements</a> and business filing deadlines with our helpful Louisiana filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Louisiana Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Louisiana Business Licenses and Permits`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Louisiana LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Louisiana, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Louisiana LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Louisiana LLC (state, county or city) (e.g., a license to conduct business from the city of New Orleans)`,
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
      list: [`A complete report on all the licenses, permits and tax registrations your Louisiana LLC will need`, `The application forms you will need to file with the Louisiana, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Louisiana and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Louisiana LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Louisiana business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc Louisiana Fees or Requirements for Your LA LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Louisiana LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your LA business to trade under a different name, you can file a form with the Louisiana Secretary of State. You will need to pay a Louisiana filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Louisiana Registered Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your Louisiana LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new LA Registered Agent later. Incfile provides a complete Louisiana Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana registered agent service`,
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
    content: `If you don’t want to form your LA business right away, you can reserve a name with the Louisiana Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Louisiana business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Louisiana Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Louisiana Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Louisiana LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Louisiana LLC`],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Louisiana LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Louisiana Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Louisiana certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard LA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Louisiana LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for LA LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Louisiana LLC Fees`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Louisiana LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Secretary of State on your behalf when forming your Louisiana business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Louisiana, require you to file a report for your LLC every year. You can find out more on the  <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Louisiana LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Louisiana LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Louisiana LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Louisiana LLC will need to pay. These include tax that’s payable to the Louisiana government, like Louisiana sales taxes and Louisiana state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `How Your Louisiana LLC Will Be Taxed`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a Louisiana LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Louisiana LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Louisiana LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Louisiana LLC owners pay LA state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some LA LLCs pay Louisiana sales tax on products.`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Louisiana personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Louisiana State Taxes for LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Louisiana Department of Revenue: Louisiana state income tax and Louisiana state sales tax.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Louisiana State Income Tax Payable on LLC Earnings`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As a Louisiana business owner, you will need to pay LA state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Louisiana income tax. You will be taxed at the standard rates for Louisiana state taxes, and you will also get to apply regular allowances and deductions. Any salaried employees will also need to pay personal Louisiana state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Louisiana state tax rate varies between 2 and 6 percent, depending on how much you earn. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://www.revenue.louisiana.gov/IndividualIncomeTax#riit" target="_blank" rel="noopener noreferrer">Get details on the Louisiana state tax here.</a>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Louisiana Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the LA Department of Revenue. Louisiana sales tax is collected at the point of purchase. Louisiana sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Louisiana sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Louisiana business might provide`],
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
    content: `Get details on the <a href="https://www.revenue.louisiana.gov/SalesTax" target="_blank" rel="noopener noreferrer">Louisiana sales tax here</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sales Tax Rates for Your Louisiana LLC`,
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
    content: `Federal Self-Employment and Income Taxes for Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Louisiana LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Louisiana LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All Louisiana LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Louisiana business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590.`, `On profits of $40,000, you would pay self-employment tax of $6,120.`, `On profits of $80,000, you would pay self-employment tax of $12,240.`, `On profits of $100,000, you would pay self-employment tax of $15,300.`],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Louisiana LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Louisiana LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Louisiana LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Louisiana LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Louisiana LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Louisiana LLC`,
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
    content: `Louisiana LLC Employer Payroll Tax Withholding`,
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
    content: `Employer Federal and State Tax Withholding for Your Louisiana LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal and Louisiana state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
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
    content: `Regardless of whether you withhold federal and Louisiana state income tax, your employees may need to file their own tax returns.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Louisiana LLC Employee Insurance and Other Requirements`,
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
    content: `Get more requirements from <a href="http://www.laworks.net/" target="_blank" rel="noopener noreferrer"> the Louisiana Workforce Commission website.</a>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Louisiana LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Louisiana LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most Louisiana LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Louisiana state tax`],
    },
    marginBottom: 24,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Louisiana LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Louisiana LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Louisiana Have Sales Tax?`,
          answer: `Yes. Louisiana does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Louisiana Have a State Tax?`,
          answer: `Yes. Louisiana does have a general state income tax. `,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Louisiana tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 24,
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
