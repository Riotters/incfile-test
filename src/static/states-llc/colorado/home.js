import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CO`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Colorado`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Located on the edge of the Great Plains and home to most of the southern Rocky Mountain range, Colorado is a state that’s full of natural beauty. Colorado boasts a rich culture, diverse landscapes and a thriving tourism industry, and it is recognized as one of the best states in the nation for business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Though Colorado is an agricultural powerhouse, it also features diverse industrial and service sectors. Scientific and high-tech businesses are well-represented in The Centennial State.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Colorado, one of the best ways to do so is by forming a Colorado LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Colorado LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Colorado LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your Colorado LLC`, `Easy tax filing and potential advantages for tax treatment`],
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
    content: `Six Quick Steps for Forming Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in CO. On this page you’ll find the basic steps of how to form a Colorado LLC, with more in-depth content throughout the rest of our guide.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `STEP 1: Gather Information for Your Members`,
          answer: `<p>First, you need to gather basic information about your LLC, including the names and addresses of the managers or members.</p></br>
            <p>The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.</p>`,
        },
        {
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Colorado LLC`,
          answer: `<p>You will need a distinctive and original name for your Colorado LLC that’s not used by any other business in CO. To find out if another company is using your chosen business name, carry out a Colorado business entity name search on the CO Secretary of State website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Colorado LLC.</p></br>
            <p><a href="/colorado-llc/how-to-name-your-llc/" target="_blank">Learn about Colorado LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your CO LLC`,
          answer: `Every Colorado LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Colorado and can be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Colorado LLC`,
          answer: `<p>Every CO LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Colorado Secretary of State.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your CO Registered Agent must have a physical street address in Colorado and must be present to receive important documents for your company during business hours. </p></br>
            <p>At Incfile, all of our packages include a Colorado Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf. </p></br>
            <p><a href="/colorado-llc/registered-agents-colorado-llc/" target="_blank">Learn more about Colorado Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Colorado LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization With the Colorado Secretary of State`,
          answer: `<p>Once you've gathered all the information for your Colorado LLC, you’ll need to file a formal document with the CO Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Colorado LLC. Here’s what is typically included:</p></br>
          <ul>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of managers or members of the LLC at the time of filing</li>
            <li>Addresses of managers or members of the LLC at the time of filing</li>
            <li>Name of the incorporator</li>
            <ul></br>
            <p>You can file your Colorado LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Colorado. You only need to file your Articles of Organization once. </p></br>`,
          button: {
            text: `Form your LLC now`,
            url: `/`,
          },
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the Colorado Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `The CO Secretary of State has plenty of information on registering a business in Colorado. We’ve covered the basic steps for forming an LLC, but you’ll find other useful information below.`,
      list: [
        `<a href="https://www.sos.state.co.us/pubs/business/businessHome.html" target="_blank" rel="noopener noreferrer">Colorado Secretary of State for forming and running your CO LLC</a>`,
        `<a href="https://cdle.colorado.gov/" target="_blank" rel="noopener noreferrer">Colorado Department of Labor and Employment for CO employers and hiring</a>`,
        `<a href="https://www.colorado.gov/tax" target="_blank" rel="noopener noreferrer">Colorado Department of Revenue for CO taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Colorado LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Colorado LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional Colorado LLC`,
          answer: `<p>Some states, including Colorado, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the CO Secretary of State allows to form Colorado professional LLCs:</p></br>
              <li>Certified Public Accountants</li>
              <li>Architects</li>
              <li>Attorneys-at-law</li>
              <li>Chiropractors</li>
              <li>Dentists</li>
              <li>Engineers</li>
              <li>Land Surveyors</li>
              <li>Optometrists</li>
              <li>Physical Therapists</li>
              <li>Physicians and Surgeons</li>
              <li>Podiatrists</li>
              <li>Professional Counselors</li>
              <li>Psychologists</li>
              <li>Social Workers</li>
              <li>Veterinarians</li></br></br>
            <p><b>Form a Foreign LLC in Colorado</b></p>
            <p>If your business is already operating in another state and expanding to Colorado, you’ll need to form a foreign LLC.</p></br>
            <p>More information on Colorado
              <a href="/colorado-llc/form-filling-permit-requirements/" target="_blank" >filing and licensing requirements here.</a></p>`,
        },
        {
          question: `Form a Foreign LLC in California`,
          answer: `<p>If your business is already operating in another state and expanding to California, you’ll need to form a foreign LLC.</p></br>
            <p>More information on California filing and licensing requirements here <link ‘to state page once created></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Setting up Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Colorado? We’ve got you covered.
      <a href="/after-forming-llc/" target="_blank" >Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your Colorado LLC`,
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
      text: `Naming Your Colorado LLC`,
      url: `/colorado-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Colorado business registry of the CO Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Colorado LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Colorado Registered Agents for Your LLC`,
      url: `/colorado-llc/registered-agents-colorado-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Colorado Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Colorado Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Colorado LLC`,
      url: `/colorado-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Colorado rules. Includes details of Employee Identification Numbers (EINs), Colorado and federal business licenses, Colorado annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Colorado LLC`,
      url: `/colorado-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Colorado government. Includes details of federal taxes like income and self-employment, and Colorado taxes like sales tax and income tax.`,
    marginBottom: 0,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Colorado Secretary of State Business Search and Naming Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Colorado business name or registering your LLC with the CO Secretary of State, we can help. We’ve got all the information you need on a Colorado business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Entity Search and LLC Lookup `,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another Colorado LLC registered with your desired business name. That means searching the Colorado Secretary of State website using their business search tool. You can easily look up CO LLCs and corporations by name and other details. Using the tool is easy. If the business name is already used, that means it’s not available and you won’t be able to register it; try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Colorado Secretary of State business name search tool.`,
      url: `https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Secretary of State Rules for Naming Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Colorado Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in CO.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `General Business Naming Rules`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Arizona LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Colorado. This is why you should check business name availability on the CO SOS website.`,
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
    content: `It’s not enough for your CO LLC name to be unique. It also cannot be similar to the name of another corporation or LLC in Colorado. For example, you cannot use the following factors to say your name is different from the name of another business:`,
    marginBottom: 24,
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
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or CO agency or organization (e.g., FBI, FDA, Colorado Department of Revenue, Colorado Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that it would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Colorado Trade Names/DBA Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Colorado, doing business under a different name is known as your “trade name” or “doing business as name” (DBA). You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Colorado Renewable Resources Holding Company LLC, and you have a chain called Boulder Solar. You should file a Trade Name to let the Colorado Secretary of State know. In Colorado, you do that through a Statement of Trade Name, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
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
    content: `Registering a Business Name in Colorado`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Colorado business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your CO LLC name. There are a couple of ways to do this.`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your Colorado LLC right now, you can reserve the business name with the Colorado Secretary of State. You will need to complete the Statement of Reservation of Name form and file it with the CO SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://www.sos.state.co.us/pubs/business/helpFiles/RS_HELP.html" target="_blank" rel="noopener noreferrer">Instructions for Colorado SOS LLC name reservation.</a><p>`,
      },
      {
        text: `If you’re ready to start your Colorado LLC, you can formally file your Articles of Organization with the Colorado SOS, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CO" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you. </a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
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
          question: `How Do I Search for My Colorado LLC Business Name?`,
          answer: `Just go to the <a href="https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Colorado Secretary of State, which will tell you if there are any CO corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Colorado LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Colorado). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Colorado?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Colorado LLC?`,
          answer: `Yes. The Colorado Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Colorado LLC`,
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
    content: `Trademarks and Service Marks`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your Colorado LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Colorado LLC`,
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
    marginBottom: 24,
    color: color.orange3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 0,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Learn About Colorado Registered Agents`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Colorado Secretary of State requires every CO LLC to have a Registered Agent. Once you have assigned a Colorado Registered Agent, they can receive official correspondence and documents on behalf of your CO business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Colorado Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing CO Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Colorado Secretary of State Says About CO Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Colorado Secretary of State on CO Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `“The registered agent is the individual or business responsible for accepting service of process for an entity and isn’t necessarily an owner or director. The registered agent is responsible for forwarding service of process to the entity.“`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules for Colorado Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Colorado Registered Agent service for your business.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: ` They are:`,
      list: [
        `If the Statutory Agent is a person, they must reside in Colorado`,
        `If the Statutory Agent is a business, they must be able to conduct business in Colorado`,
        `The Statutory Agent must have a physical street address in Colorado, not a P.O. Box`,
        `The CO Registered Agent must be available in person during normal business hours to sign for any correspondence`,
      ],
    },
    marginBottom: 24,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the CO Registered Agent address does not need to be the same as your Colorado LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Services Provided by a Colorado Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What can you expect from your Colorado Registered Agent? Their main function is to accept official documents and correspondence from the CO Secretary of State.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `This includes:`,
      list: [
        `Correspondence from the Colorado Secretary of State`,
        `Service of process notices (e.g., if your CO LLC is sued or required to appear in court)`,
        `Official Colorado state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Colorado LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Colorado Registered Agent service for any LLC that’s incorporated in CO. Even better, if you choose to incorporate your Colorado business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Colorado and can legally act as your Registered Agent.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s CO Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Colorado Secretary of State or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 24,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `More about registered agents`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Colorado Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Colorado LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Colorado Registered Agent When You Form Your CO LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Colorado Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the Colorado Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the CO Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Colorado Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Colorado Registered Agent service for the first year, and we’ll include details of your CO Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CO`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Change Your Colorado Registered Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your CO Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Statement of Change With the Colorado Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Colorado Registered Agent, you can complete a Statement of Change. Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s Colorado Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our CO Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Colorado Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Colorado registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Colorado Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Colorado LLC. If you do, you can search the business database of the Colorado Secretary of State, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the CO Registered Agent isn’t available from the searchable business registry, contact the Colorado Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Possible Outcomes of Not Assigning a Registered Agent for Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Colorado Secretary of State?`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Colorado Secretary of State: If you don’t respond to certain correspondence (like the request for your Annual Report), certain states may revoke your right to do business.`,
        `Losing your status as a Colorado LLC: A CO Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Colorado LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Colorado Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Colorado, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The CO Registered Agent must have a physical street address in Colorado. If you’re forming an LLC outside CO, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Colorado address to sign for important documents.`,
        `The CO Registered Agent’s name and address are part of the public record and available through the Colorado Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Colorado business address or move out of state, you would need to file additional documentation with the CO Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `FAQs About Colorado Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Colorado Registered Agent?`,
          answer: `Yes. All CO LLCs are required to have a Registered Agent. This is mandated by the Colorado Secretary of State.`,
        },
        {
          question: `When Can I Assign a Colorado Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Colorado business through paperwork filed with the CO Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Colorado?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Colorado Secretary of State.`,
        },
        {
          question: `Does My CO Registered Agent Need to Have an Address in Colorado?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Colorado Registered Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a Colorado Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Colorado Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Colorado Registered Agent Does</a>`,
      ],
    }, //rel="noopener noreferrer"
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Colorado Business Licenses, Fees and Filing Requirements for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Colorado, including business licenses and other fees and costs. Your CO LLC needs to pay various fees to the federal government, Colorado government and other agencies. Some of these fees are levied by the Colorado Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Colorado business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado LLC Formation Filing and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Colorado, you’ll file an LLC with the CO Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Colorado:`,
    marginBottom: 24,
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
    content: `When you incorporate through Incfile, we forward this fee to the Colorado Secretary of State on your behalf when we file your paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Colorado.</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Colorado LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CO`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your CO LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Colorado LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Colorado LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Colorado`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Colorado LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Colorado. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Colorado LLC Annual Report and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Colorado requires you to file an Annual Report with the secretary of state. When you file your CO LLC Annual Report, you will need to pay a fee. Here are the annual filing requirements for Colorado:`,
    marginBottom: 24,
  },
  {
    type: `dynamic_filing_requirement`,
    content: {
      header: `Annual Report`,
      list: [`Frequency:  Annually`, `Due Date:  During the three-month period beginning with the first day of the entity's anniversary month of formation.`, `Filing Fee:  $10`],
    },
    marginBottom: 16,
    color: color.blue2,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Colorado LLC filing requirements</a>and business filing deadlines with our helpful Colorado ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Colorado Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Business Licenses and Permits`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some CO LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you’ll pay on a one-off or regular basis. `,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Colorado LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Colorado LLC (state, county or city) (e.g., a license to conduct business from the city of Colorado Springs)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `list-dot`,
    content: {
      header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Colorado LLC will need`, `The application forms you will need to file with the Colorado, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Colorado and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Colorado LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Colorado business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Colorado Fees or Requirements for Your CO LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Colorado LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Obtain a Trade/DBA Name for Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you want your CO business to trade under a different name, you can file a form with the Colorado Secretary of State. You will need to pay a Colorado filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Change the Colorado Registered Agent for Your CO LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Colorado LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new CO Registered Agent later. Incfile provides a complete Colorado Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you don’t want to form your CO business right away, you can reserve a name with the Colorado Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Colorado business when it was originally formed. Over time, these facts might change — if they do, you need to file a Statement of Change with the Colorado Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file a Colorado Statement of Change for include:`,
      list: [`Adding, removing or changing a Colorado LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Colorado LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado Articles of Amendment Service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Colorado LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Colorado Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Colorado certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard CO LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Colorado LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for CO LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Colorado LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Colorado LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Colorado business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Colorado requires you to file a report for your LLC every year.`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Colorado LLC?`,
          answer: `It depends on various factors including:
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  <p>That’s why our <a href="/business-license-research-package/">Business License Research Package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Colorado LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Colorado LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your CO LLC will need to pay a variety of taxes to both the federal and Colorado governments. We’ll cover all the main taxes in Colorado including self-employment, payroll, federal, Colorado state tax and Colorado sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Colorado LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Colorado LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Colorado LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Colorado LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Colorado LLC owners pay CO state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some CO LLCs pay Colorado sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Colorado personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Tax Withholding ID Number`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can get a Colorado tax withholding ID number from the <a href="https://www.colorado.gov/pacific/tax" target="_blank" rel="noopener noreferrer">CO Department of Revenue</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Taxes Payable to the CO Department of Revenue`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Colorado Department of Revenue: Colorado state income tax and Colorado state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Colorado business owner, you will need to pay CO state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Colorado income tax. You will be taxed at the standard rates for Colorado state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Colorado state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Colorado state tax rate is 4.63 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href= "https://www.colorado.gov/tax" target="_blank" rel="noopener noreferrer">Colorado state tax online here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the CO Department of Revenue. Colorado sales tax is collected at the point of purchase. Colorado sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Colorado sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Colorado business might provide`],
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
    content: `Get details on the <a href= "https://www.colorado.gov/tax" target="_blank" rel="noopener noreferrer">Colorado state tax online here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado Sales Tax Rates`,
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
    content: `Federal Self-Employment and Income Taxes for Your Colorado LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Colorado LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado LLC Federal Self-Employment Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `All Colorado LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Colorado business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590`, `On profits of $50,000, you would pay self-employment tax of $7,650`, `On profits of $90,000, you would pay self-employment tax of $13,770`, `On profits of $120,000, you would pay self-employment tax of $18,360`],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Colorado LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your Colorado LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Colorado LLC Federal Income Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Colorado LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Colorado LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Colorado LLC`,
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
          question: `Colorado LLC Employer Payroll Tax Withholding`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Colorado LLC Federal and State Tax Withholding `,
          answer: `You may also choose to withhold federal and Colorado state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Colorado state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `Colorado LLC Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the Colorado Department of Labor and Employment website.`,
                  url: `https://cdle.colorado.gov/`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Colorado LLC`,
          answer: `Depending on the industry you are in, your Colorado LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Colorado LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Colorado LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `Colorado state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Colorado LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Colorado LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Colorado Have Sales Tax?`,
          answer: `Yes. Colorado does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Colorado Have a State Tax?`,
          answer: `Yes. Colorado does have a general state income tax. You can find more information above.`,
        },
        {
          question: `What Is the Sales Tax Rate in Colorado?`,
          answer: `We have listed common sales tax rates in Colorado cities above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Colorado tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
