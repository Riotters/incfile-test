import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Starting an LLC in Indiana`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Known as the “Crossroads of America,” Indiana is a beautiful state located in the midwestern and Great Lakes area of the U.S. Located between Michigan, Illinois, Kentucky and Ohio, Indiana is ideally placed for you to start your business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Indiana, one of the best ways to do so is by forming an Indiana LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Indiana LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting an Indiana LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulations and administration of your Indiana LLC`,
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
    content: `Learn more about the
      <a href="/limited-liability-company/" target="_blank">benefits of the LLC business structure here.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Forming an Indiana LLC in Six Quick Steps`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Indiana LLC, but you can break down the basics of forming a business in IN into just a few simple steps.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `<p>First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.</p>`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Indiana LLC`,
          answer: `<p>You will need a distinctive and original name for your Indiana LLC that’s not used by any other business in IN. To find out if another company is using your chosen business name, carry out an Indiana business entity name search on the IN Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Indiana LLC.</p></br>
            <p><a href="/indiana-llc/how-to-name-your-llc/" target="_blank">Learn about Indiana LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your IN LLC`,
          answer: `Every Indiana LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Indiana, and it can be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Indiana LLC`,
          answer: `<p>Every IN LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Indiana Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your IN Registered Agent must have a physical street address in Indiana and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include an Indiana Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/indiana-llc/registered-agents-indiana-llc/" target="_blank">Learn more about Indiana Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Indiana LLC business formation process.`,
        },
        {
          question: `STEP 6: File Certificate of Organization with the Indiana Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Indiana LLC, you’ll need to file a formal document with the IN Secretary of State. This document is known as your “Certificate of Organization,” and filing the document creates your Indiana LLC. Here’s what is typically included:</p></br>
          <ul>
              <li>Your business name and address</li>
              <li>Details of your Registered Agent</li>
              <li>Duration of your business</li>
              <li>Name of the incorporator</li>
              </ul></br>
            <p>You can file your Indiana LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Indiana. You only need to file your Certificate of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from the Indiana Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The IN Secretary of State has plenty of information on forming and running a business in Indiana. These are all the basic steps for forming an LLC in Indiana. You’ll find other useful information below.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="http://www.in.gov/sos/business/index.htm" target="_blank" rel="noopener noreferrer">Indiana Secretary of State for forming and running your IN LLC</a>`,
        `<a href="https://www.in.gov/dol/" target="_blank" rel="noopener noreferrer">Indiana Department of Labor for IN employers and hiring</a>`,
        `<a href="https://www.in.gov/dor/" target="_blank" rel="noopener noreferrer">Indiana Department of Revenue for IN taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Indiana LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Indiana LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Professional Indiana LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow certain occupations to form “Professional LLCs,” but Indiana only recognizes professional corporations, not professional LLCs.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Form a Foreign LLC in Indiana`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If your business is already operating in another state and expanding to Indiana, you’ll need to form a foreign LLC.<br>
    <a href="/indiana-llc/form-filling-permit-requirements/">More information on Indiana filing and licensing requirements here</a>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Indiana LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Indiana? We’ve got you covered.
      <a href="/after-forming-llc/">Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Indiana LLC`,
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
    content: `<a href="/indiana-llc/how-to-name-your-llc/">Naming Your Indiana LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Indiana business registry of the IN Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving an Indiana LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/indiana-llc/registered-agents-indiana-llc/">Indiana Registered Agents for Your LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint an Indiana Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Indiana Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/indiana-llc/form-filling-permit-requirements/">Fees and Requirements for Your Indiana LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Indiana rules. Includes details of Employer Identification Numbers (EINs), Indiana and federal business licenses, Indiana annual reports and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/indiana-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your Indiana LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Indiana government. Includes details of federal taxes like income and self-employment, and Indiana taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Search for the Perfect LLC Name and Register It with the Indiana Secretary of State`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Indiana business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the IN Secretary of State business registry, tell you about the rules for naming your business, describe assumed names and get you started with registering your LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana Secretary of State Business Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing an “Indiana business entity search” with the secretary of state. They have a helpful tool on their website that lets you search the register of IN LLCs and corporations to see if someone already has your desired business name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try running an LLC search for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://bsd.sos.in.gov/publicbusinesssearch" target="_blank" rel="noopener noreferrer">Indiana Secretary of State business name search tool.</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules on Indiana LLC Name Availability`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Indiana Secretary of State (SOS) naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in IN.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Indiana. This is why you should check business name availability on the IN SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable with Another Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your IN LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Indiana. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
    marginBottom: 32,
    color: color.yellow3,
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
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Are very similar to the name of a federal or IN agency or organization (e.g., FBI, FDA, Indiana Department of Revenue, Indiana Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Assumed Business Names in Indiana`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Indiana, doing business under a different name is known as an “Assumed Name.” You might choose to use a different name from your formal IN LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Indiana Architecture and Engineering Holding Company LLC, but you provide your main service as Indianapolis Commercial Building Services. You should file an assumed name to let the Indiana Secretary of State know. In Indiana, you do that through a Certificate of Assumed Business Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
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
    content: `Register Your Business Name with the Indiana Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Indiana business name, checked availability, followed the naming rules and decided whether you need an assumed name, you can register your IN LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If you don’t want to form your Indiana LLC right now, you can reserve the business name with the Indiana Secretary of State. You will need to complete a Reservation of Business Name and file it with the IN SOS. You do not need to reserve a name if you are forming your business right away. <a href="https://www.in.gov/sos/business/2426.htm" target="_blank" rel="noopener noreferrer">Indiana SOS LLC name reservation form.</a>`,
        `If you’re ready to start your Indiana LLC, you can formally file your Articles of Organization with the Indiana SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN" target="_blank" >let Incfile take care of it for you.</a>`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Indiana LLC`,
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
          question: `How Do I Search for My Indiana LLC Business Name?`,
          answer: `Just go to the <a href="https://bsd.sos.in.gov/publicbusinesssearch" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Indiana Secretary of State, which will tell you if there are any IN corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Indiana LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Indiana). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Indiana?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Indiana LLC?`,
          answer: `Yes. The Indiana Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Indiana LLC`,
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
    content: `You must be careful that your Indiana LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Indiana LLC`,
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
    content: `Indiana Registered Agents for Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Indiana Secretary of State requires every IN LLC to have a Registered Agent. Once you have assigned an Indiana Registered Agent, they can receive official correspondence and documents on behalf of your IN business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have an Indiana Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing IN Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Indiana Secretary of State Says About IN Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Indiana Secretary of State on IN Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<i>“All Corporations, Limited Liability Companies, Limited Partnerships, and Limited Liability Partnerships must maintain a Registered Agent and Registered Address within the State of Indiana. The Registered Agent is the legal representative and contact for the business. The Registered Agent cannot be the business entity itself. The Registered Agent may be a person or another formal business association which was incorporated (or qualified) in Indiana and which maintains a valid Registered Agent in Indiana. The business address of the Registered Agent must be identical to the office address. A Post Office Box number is not sufficient unless a rural route number is part of the address.”</i>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules for Appointing an Indiana Registered Agent Service for Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing an Indiana Registered Agent service for your business. They are:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in Indiana.`,
        `If the Registered Agent is a business, they must be able to conduct business in Indiana.`,
        `The Registered Agent must have a physical street address in Indiana, not a P.O. Box.`,
        `The IN Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the IN Registered Agent address does not need to be the same as your Indiana LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by an Indiana Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What can you expect from your Indiana Registered Agent? Their main function is to accept official documents and correspondence from the IN Secretary of State. This includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the Indiana Secretary of State`,
        `Service of process notices (e.g., if your IN LLC is sued or required to appear in court)`,
        `Official Indiana state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `A Complete Indiana Registered Agent Service from Incfile`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Indiana Registered Agent service for any LLC that’s incorporated in IN. Even better, if you choose to incorporate your Indiana business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Indiana and can legally act as your Registered Agent. Here’s what the Infile Indiana Registered Agent service provides for your IN LLC:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available Indiana Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Indiana business`,
        `Email notification whenever we receive documents for your Indiana business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
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
    content: `Appointing an IN Registered Agent Service for Your Indiana LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Indiana LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Indiana Registered Agent When You Form Your IN LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have an Indiana Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization with the Indiana Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the IN Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Indiana Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Indiana Registered Agent service for the first year, and we’ll include details of your IN Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Change Your Indiana Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your IN Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form with the Indiana Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Indiana Registered Agent, you can complete a form. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Indiana Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our IN Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Indiana Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Indiana registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `IN Registered Agent Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Indiana LLC. If you do, you can search the business database of the Indiana Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the IN Registered Agent isn’t available from the searchable business registry, contact the Indiana Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Issues with Not Having an Indiana Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Indiana Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<b>Getting served or sued and not finding out about it: </b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Indiana Secretary of State: </b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as an Indiana LLC: </b> An IN Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Indiana LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Indiana Registered Agent`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Indiana, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The IN Registered Agent must have a physical street address in Indiana. If you’re forming an LLC outside IN, you will need to use an in-state Registered Agent. You always need to have someone on hand during business hours at the Indiana address to sign for important documents. The IN Registered Agent’s name and address are part of the public record and available through the Indiana Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Indiana business address or move out of state, you need to file additional documentation with the IN Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `FAQs About Indiana Registered Agents`,
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
          question: `Do I Need to Appoint an Indiana Registered Agent?`,
          answer: `Yes. All IN LLCs are required to have a Registered Agent. This is mandated by the Indiana Secretary of State.`,
        },
        {
          question: `When Can I Assign an Indiana Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Indiana business through paperwork filed with the IN Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Indiana?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Indiana Secretary of State.`,
        },
        {
          question: `Does My IN Registered Agent Need to Have an Address in Indiana?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Indiana Registered Agent Services`,
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
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of an Indiana Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Indiana Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What an Indiana Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Business Licenses, Fees and Filing Requirements for Your Indiana LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Indiana business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Indiana Secretary of State, while others are due to the federal or Indiana government. We’ve summarized the most common requirements and fees here.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Indiana business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana LLC Incorporation Filing and Fees`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Indiana, you’ll file an LLC with the IN Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Indiana:`,
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
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you form your IN LLC through Incfile, we automatically forward this fee to the Indiana Secretary of State when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Indiana.</a>`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Indiana LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=IN`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your IN LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Indiana LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Indiana LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Indiana`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Indiana LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Indiana. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Indiana LLC Annual Reporting and Fees`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need you to file an annual (or other periodic) report with their secretary of state. When you file your IN LLC annual report, you may need to pay a fee. Here are the filing requirements for Indiana:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Indiana LLC filing requirements</a> and business filing deadlines with our helpful Indiana ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Indiana Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana Business Licenses and Permits`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Indiana LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Indiana, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. `,
    marginBottom: 16,
  },
  {
    type: "text",
    content: "Permits and licenses vary based on:",
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your Indiana LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Indiana LLC (state, county or city) (e.g., a license to conduct business from the city of Indianapolis)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 48,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package. Which includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `A complete report on all the licenses, permits and tax registrations your Indiana LLC will need`,
        `The application forms you will need to file with the Indiana, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Indiana and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Indiana LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Indiana business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Indiana Fees or Requirements for Your IN LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Indiana LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Indiana LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your IN business to trade under a different name, you can file a form with the Indiana Secretary of State. You will need to pay an Indiana filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Indiana Registered Agent for Your IN LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Indiana LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new IN Registered Agent later. Incfile provides a complete Indiana Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Indiana LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your IN business right away, you can reserve a name with the Indiana Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Indiana LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Indiana business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Indiana Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Indiana Articles of Amendment for include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing an Indiana LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your Indiana LLC`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Indiana LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Indiana LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Indiana Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Indiana certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard IN LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Indiana LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for IN LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Indiana LLC Fees`,
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
          question: `What Happens to the State Fees That I Am Charged When Forming My Indiana LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Indiana business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `No, reports in Indiana are due every other year. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Get Business Licenses and Permits from for My Indiana LLC?`,
          answer: `
            It depends on various factors including:
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li></br>
            <p>That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Indiana LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Payable by Your Indiana LLC`,
    size: 1,
    template: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your IN LLC will need to pay a variety of taxes to both the federal and Indiana governments. We’ll cover all the main taxes in Indiana including self-employment, payroll, federal, Indiana state tax and Indiana sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Indiana LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of an Indiana LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Indiana LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Indiana LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Indiana LLC owners pay IN state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some IN LLCs pay Indiana sales tax on products.`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Indiana personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana Business Taxes Payable to the IN Government`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Indiana Department of Revenue: Indiana state income tax and Indiana state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana State Tax on Your LLC Earnings`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As an Indiana business owner, you will need to pay IN state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Indiana income tax. You will be taxed at the standard rates for Indiana state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Indiana state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Indiana state tax rate is 3.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href="https://www.in.gov/dor/" target="_blank" rel="noopener noreferrer">Indiana state tax here.</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Indiana Sales Taxes on LLC Sales`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the IN Department of Revenue. Indiana sales tax is collected at the point of purchase. Indiana sales tax rates do vary depending on the region, county or city where you are located. `,
    marginBottom: 16,
  },
  {
    type: "text",
    content: "You will typically need to collect Indiana sales tax on:",
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
        `Certain services that your Indiana business might provide`,
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
    content: `Get details on the <a href="https://www.in.gov/dor/3986.htm" target="_blank" rel="noopener noreferrer">Indiana state tax online here</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Indiana Sales Tax Rates`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Indiana LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Indiana LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Indiana LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Indiana LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Indiana business. The current self-employment tax rate is 15.3 percent.`,
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
        `On profits of $40,000, you would pay self-employment tax of $6,120.`,
        `On profits of $70,000, you would pay self-employment tax of $10,710.`,
        `On profits of $100,000, you would pay self-employment tax of $15,300.`,
        `On profits of $120,000, you would pay self-employment tax of $18,360.`,
      ],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Indiana LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Indiana LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Indiana LLC Federal Income Tax`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Indiana LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Indiana LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employee and Employer Taxes for Your Indiana LLC`,
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
          question: `Indiana LLC Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your Indiana LLC`,
          answer: `You may also choose to withhold federal and Indiana state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Indiana state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Indiana LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `paragraph`,
              content: `<a href="https://www.in.gov/dol/" target="_blank" rel="noopener noreferrer">Get more requirements from the Indiana Department of Labor website.</a>`,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Indiana LLC`,
          answer: `Depending on the industry you are in, your Indiana LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Indiana LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Indiana LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. `,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [
                `Federal income tax`,
                `Federal self-employment tax`,
                `Indiana state tax`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most Indiana LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Indiana LLC Business Taxes`,
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
          question: `Does Indiana Have Sales Tax?`,
          answer: `Yes. Indiana does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Indiana Have a State Tax?`,
          answer: `Yes. Indiana does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Indiana tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 0,
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
                type: `arrow-link`,
                content: {
                  text: `State Filing Times`,
                  url: `/`,
                },
                bottomMargin: 16,
              },
              {
                type: `arrow-link`,
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
