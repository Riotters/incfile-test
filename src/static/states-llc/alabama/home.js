import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AL`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Starting an Alabama LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Alabama is located in the southeast portion of the U.S. and is bordered by Tennessee, Georgia and Florida.
     Known as both the Yellowhammer State and the Cotton State, Alabama’s economy has diversified significantly over the last few decades.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Alabama, one of the best ways to do so is by forming an Alabama LLC.
     Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses.
      Alabama LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities. `,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of forming an Alabama LLC include:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting an Alabama LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your Alabama LLC`, `Easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 8,
    color: color.yellow3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `text`,
    content: `Learn more about the benefits of the LLC business structure here.`,
    marginBottom: 56,
  },

  {
    type: `header`,
    content: `Six Quick Steps to Setting Up an Alabama LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Alabama limited liability corporation,
     but you can break down the basics of starting a business in AL into just a few simple steps.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `The first step of Alabama LLC formation is gathering basic information about your LLC, including the names and addresses of the managers or members.
           The LLC members are typically the people who own and run the business. 
           They are also the ones who can take profits out of the business to pay themselves.`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Alabama LLC`,
          answer: `You will need a distinctive and original name for your Alabama LLC that’s not used by any other business in AL. To find out if another company is using your chosen business name, carry out an Alabama business entity name search on the AL Secretary of State website.
          There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Alabama LLC.         
          Learn about Alabama LLC business naming rules`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your AL LLC`,
          answer: `Every Alabama LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Alabama, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Alabama LLC`,
          answer: `Every AL LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Alabama Secretary of State.
          <br>
          This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your AL Registered Agent must have a physical street address in Alabama and must be present to receive important documents for your company during business hours. 
          <br>
          At Incfile, all of our packages include an Alabama Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf. 
          <br>
          Learn more about Alabama Registered Agents`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Alabama LLC business formation process.`,
        },
        {
          question: `STEP 6: File a Certificate of Formation with the Alabama Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Alabama LLC, you'll need to file a formal document with the AL Secretary of State. This document is known as your "Articles of Organization," and filing the document creates your Alabama LLC. Here's what is typically included:</p></br
          <ol>
          <li>Your business name and address</li>
          <li>Details of your Registered Agent</li>
          <li>Name of the incorporator</li>
          </ol></br>
          <p>You can file your Alabama LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Alabama. You only need to file your Articles of Organization once.</p>`,
        },
      ],
    },
    marginBottom: 72,
  },
  {
    type: `header`,
    content: `Review Information from the Alabama Secretary of State`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `The AL Secretary of State has plenty of information on forming and running a business in Alabama. <br> These are all the basic steps for forming an LLC in Alabama. You’ll find other useful information below.
      `,
      list: [`Alabama Secretary of State for forming and running your AL LLC`, `Alabama Department of Labor for AL employers and hiring`, `Alabama Department of Revenue for AL taxes`],
    },
    marginBottom: 45,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Special Types of Alabama LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `A regular Alabama LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form an Alabama Series LLC`,
          answer: `In Alabama, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master umbrella LLC. These can be very useful if you don’t want to set up a separate Alabama LLC for every individual business you run. 
          <br>
          Decide if an Alabama Series LLC is right for your new business.`,
        },
        {
          question: `Form a Foreign LLC in Alabama`,
          answer: `If your business is already operating in another state and expanding to Alabama, you’ll need to form a foreign LLC. 
          <br>
          More information on Alabama filing and licensing requirements here.`,
        },
      ],
    },
    marginBottom: 56,
  },
  {
    type: `header`,
    content: `What to Do After Filing Your Alabama LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Alabama? We’ve got you covered. Here’s our guide to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. 

    `,
    marginBottom: 56,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Alabama LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your Alabama LLC`,
      url: `/alabama-llc/how-to-name-your-llc/`,
    },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `How to search the Alabama business registry of the AL Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving an Alabama LLC name and more.
    `,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Alabama Registered Agents for Your LLC`,
      url: `/alabama-llc/registered-agents-alabama-llc/`,
    },
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `How to appoint an Alabama Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Alabama Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Alabama LLC`,
      url: `/alabama-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Alabama rules. Includes details of Employer Identification Numbers (EINs), Alabama and federal business licenses, Alabama annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Alabama LLC`,
      url: `/alabama-llc/business-taxes/`,
    },
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Alabama government. Includes details of federal taxes like income and self-employment, and Alabama taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Registering Your LLC Name in Alabama`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your Alabama business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the AL Secretary of State business register, tell you about the rules for naming your business and get you started with registering your LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Alabama Secretary of State Business Search`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Before registering your desired LLC name, you need to check whether there’s already another Alabama LLC registered with the name you want. That means searching the Alabama Secretary of State business registry using their business search tool. You can easily perform an LLC search to see if a business name is already used. `,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `Unfortunately, if your chosen name isn’t available, you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 8,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Alabama SOS business search tool`,
      url: `http://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT`,
    },
    marginBottom: 72,
  },
  {
    type: `header`,
    content: `Alabama Secretary of State Rules for Naming Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Alabama Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in AL.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Alabama. This is why you should check business name availability on the AL SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable with Another Business Name`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `It’s not enough for your AL LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Alabama. For example, you cannot use the following factors to say your name is different from the name of another business:`,
    marginBottom: 8,
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
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Contain Certain Words`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Your LLC Business Name May Have Other General Restrictions`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      header: `Most states will not allow you to form LLCs with names that:`,
      list: [
        `Are very similar to the name of a federal or AL agency or organization (e.g., FBI, FDA, Alabama Department of Revenue, Alabama Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Alabama LLC DBA or Trade Names`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Alabama, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your AL formal LLC name for a variety of reasons.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Alabama Textiles Holding Company LLC and you have a line called Cotton State Clothing. You should file a Trade Name to let the Alabama Secretary of State know. In Alabama, you do that through an “Application for Registration” form, or you can have Incfile do it on your behalf through our DBA / Trade Names service.`,
    marginBottom: 8,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S TRADE NAME SERVICES`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Alabama LLC Business Name`,
    size: 4,
    marginBottom: 16,
  },

  {
    type: `list-dot`,
    content: {
      header: `Once you’ve searched for your Alabama business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your AL LLC name. There are a couple of ways to do this.`,
      list: [
        `If you don’t want to form your Alabama LLC right now, you can reserve the business name with the Alabama Secretary of State. You will need to complete a “Name Reservation Request Form” and file it with the AL SOS. You do not need to reserve a name if you are forming your business right away. <br>
        <a href="https://www.sos.alabama.gov/node/1390" target="_blank" rel="noopener noreferrer">Alabama SOS LLC name reservation form</a>`,
        `If you’re ready to start your Alabama LLC, you can formally file your Certificate of Formation with the Alabama SOS,
        or <a href="form-order-now.php?entityType=LLC&entityState=AL" target="_blank"> let Incfile take care of it for you. `,
      ],
    },
    marginBottom: 56,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Alabama LLC`,
    size: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `How Do I Search for My Alabama LLC Business Name?`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Just go to the 
    <a href="http://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT" target="_blank" rel="noopener noreferrer">business name search tool</a>
     and enter your proposed business name. You can search the register of the Alabama Secretary of State, which will tell you if there are any AL corporations or LLCs with that name.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Are There Any Rules on Naming My Alabama LLC?`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Alabama). We’ve detailed these rules above.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Can I Do Business Under a Different Name Than My LLC Name in Alabama?`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above. 

    `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Can I Reserve a Name for My Alabama LLC?`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Yes. The Alabama Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Alabama LLC`,
    size: 3,
    marginBottom: 32,
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
    content: `You must be careful that your Alabama LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 8,
  },
  {
    type: `button`,
    content: {
      text: `Incfile trademark search and registration service`,
      url: `/trademark-name-search`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Alabama LLC`,
    size: 3,
    marginBottom: 32,
  },

  {
    type: `list-dot`,
    content: {
      header: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
      list: [`Appeal to your customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name`,
      url: `/llc-name-search-50-states`,
    },
    marginBottom: 80,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Learn About Alabama Registered Agents`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `The Alabama Secretary of State requires every AL LLC to have a Registered Agent. Once you have assigned an Alabama Registered Agent, they can receive official correspondence and documents on behalf of your AL business. Registered Agents can be individuals or other specialized Registered Agent service businesses. `,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `Your LLC must have an Alabama Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing AL Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 8,
  },
  {
    type: `header`,
    content: `Rules for Alabama Registered Agents`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing an Alabama Registered Agent service for your business. They are:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in Alabama.`,
        `If the Registered Agent is a business, they must be able to conduct business in Alabama.`,
        `The Registered Agent must have a physical street address in Alabama, not a P.O. Box.`,
        `The AL Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 8,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Note that the AL Registered Agent address does not need to be the same as your Alabama LLC business address. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What to Expect from an Alabama Registered Agent Service`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your Alabama Registered Agent? Their main function is to accept official documents and correspondence from the AL Secretary of State. This includes:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the Alabama Secretary of State`,
        `Service of process notices (e.g., if your AL LLC is sued or required to appear in court)`,
        `Official Alabama state and federal government correspondence and notificationsaa`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 32,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Alabama LLCs`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Alabama and you need an AL Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Alabama business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Alabama and can legally act as your Registered Agent. Here’s what you need to know about Incfile’s AL Registered Agent service:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf.`,
        `We automatically notify you whenever we receive correspondence for your business from the Alabama Secretary of State or anyone else.`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
        `We forward all correspondence to an address you choose.`,
      ],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `More about registered agents`,
      url: `pages/manage-your-company/registered-agent`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your Options for Appointing an Alabama Registered Agent`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Alabama LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Alabama Registered Agent When You Form Your AL LLC`,
    size: 4,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `Your business needs to have an Alabama Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `File Certificate of Formation with the Alabama Secretary of State`,
    size: 5,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the AL Secretary of State to formally create your business.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Alabama Registered Agent`,
    size: 5,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Alabama Registered Agent service for the first year, and we’ll include details of your AL Registered Agent in the form that we file.`,
    marginBottom: 8,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your businness through Incfile`,
      url: `form-order-now.php?entityType=LLC&entityState=AL`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign a Different Alabama Registered Agent Service After Incorporation`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your AL Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form “Change of Registered Agent or Registered Office by Entity” with the Alabama Secretary of State`,
    size: 5,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Alabama Registered Agent, you can complete form “Change of Registered Agent or Registered Office by Entity” that’s available on the AL Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Alabama Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our AL Registered Agent service, we take care of all the form filling for you. We’ll collect important information about your business, complete form “Change of Registered Agent or Registered Office by Entity” on your behalf and send it to the Alabama Secretary of State. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Orded Incfile's Alabama registered agent service.`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Alabama Registered Agent Search`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Alabama LLC. If you do, you can search the business database of the Alabama Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `If the AL Registered Agent isn’t available from the searchable business registry, contact the Alabama Secretary of State requesting the information.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Possible Outcomes of Not Assigning a Registered Agent for Your Alabama LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Alabama Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 8,
  },
  {
    type: `list-dot`,
    content: {
      header: `aaa`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Alabama Secretary of State: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as an Alabama LLC: An AL Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Alabama LLC may be dissolved.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `Assigning Yourself as the Alabama Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in Alabama, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 8,
  },

  {
    type: `list-dot`,
    content: {
      list: [
        `The AL Registered Agent must have a physical street address in Alabama. If you’re forming an LLC outside AL, you will need to use an in-state Registered Agenta`,
        `You always need to have someone on hand during business hours at the Alabama address to sign for important documents.`,
        `aaThe AL Registered Agent’s name and address are part of the public record and available through the Alabama Secretary of State's website. If you would prefer your name and address aren’t published, you may want to choose a Registered Agent service.a`,
        `If you change your Alabama business address or move out of state, you would need to file additional documentation with the AL Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `header`,
    content: `FAQs About Alabama Registered Agents`,
    size: 2,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint an Alabama Registered Agent?`,
          answer: `Yes. All AL LLCs are required to have a Registered Agent. This is mandated by the Alabama Secretary of State.`,
        },
        {
          question: `When Can I Assign an Alabama Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Alabama business through paperwork filed with the AL Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Alabama?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Alabama Secretary of State.`,
        },
        {
          question: `Does My AL Registered Agent Need to Have an Address in Alabama?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Useful Resources for Alabama Registered Agent Services`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of an Alabama Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank">Changing Your Alabama Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank">What an Alabama Registered Agent Does</a>`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Required Licenses, Fees and Filing for Your Alabama LLC`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Alabama business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Alabama Secretary of State, while others are due to the federal or Alabama government. We’ve summarized the most common requirements and fees here. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Alabama business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in Alabama`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Alabama, you’ll need to file an LLC with the AL Secretary of State and pay an Alabama filing fee. Here are the current fees and filing times for Alabama:`,
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
    content: `When you form your AL LLC through Incfile, we automatically forward this fee to the Alabama Secretary of State when we file your incorporation paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Alabama.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `INCORPORATE YOUR ALABAMA LLC THROUGH INCFILE TODAY`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AL/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your AL LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Alabama  LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `GET AN EIN FOR YOUR ALABAMA LLC THROUGH INCFILE`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Alabama`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Alabama LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Alabama. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `GET A FOREIGN QUALIFICATION/CERTIFICATE OF AUTHORITY THROUGH INCFILE`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Annual Reporting and Fees for Your Alabama LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your AL LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Alabama:`,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing Alabama LLC filing requirements</a> and business filing deadlines with our helpful Alabama filing lookup tool.
    Incfile can also complete and file your Alabama Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA ANNUAL REPORT FILING SERVICE`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Alabama Business Licenses and Permits`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Alabama LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Alabama, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. `,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Alabama LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Alabama LLC (state, county or city) (e.g., a license to conduct business from the city of Anchorage)`,
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
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Alabama LLC. It includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`A complete report on all the licenses, permits and tax registrations your Alabama LLC will need`, `The application forms you will need to file with the Alabama, regional and federal licensing authorities`],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Alabama and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA BUSINESS LICENSE RESEARCH PACKAGE`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Alaba LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons(<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>) If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Alabama business. You can choose to make changes to the template based on your unique requirements. 

    `,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Ad Hoc Alabama Fees or Requirements for Your Alabama LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Alabama LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Trade Name for Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your AL business to trade under a different name, you can file a form with the Alabama Secretary of State. You will need to pay an Alabama filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA FICTITIOUS NAME SERVICE`,
      url: `pages/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Alabama Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Alabama LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete Alabama Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA REGISTERED AGENT SERVICE`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your AL business right away, you can reserve a name with the Alabama Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Alabama business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Alabama Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Alabama Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Alabama LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Alabama LLC`],
    },
    marginBottom: 8,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA ARTICLES OF AMENDMENT SERVICE`,
      url: `/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Alabama LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from Alabama Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S ALABAMA CERTIFICATE OF GOOD STANDING SERVICE`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard Alabama LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Alabama LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for Alabama LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Alabama LLC Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Alabama LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Alabama business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes, Alabama requires you to file a report for your LLC every year.`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Alabama LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href-"/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Alabama LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Alabama Business Taxes for LLCs`,
    size: 2,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Alabama LLC will need to pay. These include tax that’s payable to the Alabama government, like Alabama sales taxes and Alabama state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href"/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your Alabama LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Alabama LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Alabama LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Alabama LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some LLCs pay Alabama sales tax on products.`,
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
    content: `Items 1, 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Alabama personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Alabama Taxes Payable to the Department of Revenue`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Alabama Department of Revenue: Alabama state income tax and Alabama state sales tax.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Alabama State Income Tax Payable on LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As an Alabama business owner, you will need to pay AL state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Alabama income tax. You will be taxed at the standard rates for Alabama state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Alabama state taxes.`,
    marginBottom: 8,
  },
  {
    type: `text`,
    content: `The Alabama state tax rates vary between 2 and 5 percent, depending on taxable income. `,
    marginBottom: 8,
  },
  {
    type: `arrow-links`,
    content: {
      text: `Get details on the Alabama state tax here.`,
      url: `https://revenue.alabama.gov`,
    },
    bottomMargin: 16,
  },
  {
    type: `header`,
    content: `Alabama Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },

  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the AL Department of Revenue. Alabama sales tax is collected at the point of purchase. Alabama sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },

  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Alabama sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Alabama business might provide`],
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
    content: `Get details on the <a href="https://revenue.alabama.gov/sales-use/taxes-administered/sales-tax/" target="_blank" rel="noopener noreferrer">Alabama sales tax here</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Taxes for Your Alabama LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Alabama LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Alabama LLC Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Alabama LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Alabama business. The current self-employment tax rate is 15.3 percent.`,
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
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [`On profits of $20,000, you would pay self-employment tax of $3,060.`, `On profits of $40,000, you would pay self-employment tax of $6,120.`, `On profits of $80,000, you would pay self-employment tax of $12,240.`, `On profits of $100,000, you would pay self-employment tax of $15,300.`],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Alabama LLC as an S Corporation`,
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
      text: `INCFILE FORM 2553 S CORPORATION TAX ELECTION FOR AN LLC SERVICE`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Alabama LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Alabama LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 16,
  },
  {
    type: `header`,
    content: `Employer Payroll Tax Withholding for Your Alabama LLC `,
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
    content: `Employer Federal and State Tax Withholding for Your Alabama LLC`,
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
    content: `Get more requirements from <a href="https://www.labor.alabama.gov" target="_blank" rel="noopener noreferrer"> the Alabama Department of Labor and Workforce Development website.</a>`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Alabama LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Alabama LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most Alabama LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Alabama state tax`],
    },
    marginBottom: 24,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Alabama LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Alabama LLC Business Taxes`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Alabama Have Sales Tax?`,
          answer: `Yes. Alabama does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Alabama Have a State Tax?`,
          answer: `Yes. Alabama does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Alabama tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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