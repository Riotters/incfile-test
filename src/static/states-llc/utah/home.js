import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=UT`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Setting Up an LLC in Utah`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Located in the western United States, Utah is home to more than 3 million people. Bordered by Wyoming, Arizona, Nevada, Colorado and Idaho and sharing a corner with New Mexico, the state is ideally located as a transportation hub.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Utah has long been home to The Church of Jesus Christ of Latter-Day Saints and Mormons comprise just over 60 percent of the state’s population. Mormons have a huge influence on culture, education and business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A place of great natural beauty, outdoor tourism is a major contributor to Utah’s economy. Technology, research, transportation, education, mining and government services are the other major sectors in the region.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Utah, one of the best ways to do so is by forming a Utah LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Utah LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a Utah LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Utah LLC`, `Easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 24,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Learn more about the benefits of the LLC business structure here.`,
      url: `/limited-liability-company/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps to Forming Your Utah LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `This guide has plenty of information on how to form your Utah LLC, but you can break down the basics of forming a business in UT into just a few simple steps.`,
    marginBottom: 24,
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
          question: `STEP 2: Choose a Unique Business Name`,
          answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in UT. To find out if another company is using your chosen business name, carry out a business entity name search on the UT Division of Corporations website.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your Utah LLC.</p></br>
            <p><a href="/utah-llc/how-to-name-your-llc/" target="_blank">Learn about Utah LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your UT LLC`,
          answer: `Every Utah LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Utah, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Utah Registered Agent`,
          answer: `<p>Every UT LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Utah Division of Corporations.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Utah and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a Utah Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/utah-llc/registered-agents-utah-llc/" target="_blank">Learn more about Utah Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Utah LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Utah Division of Corporations`,
          answer: `<p>Once you've gathered all the information for your LLC, you’ll need to file a formal document with the UT Division of Corporations. This document is known as your “Articles of Organization,” and filing the document creates your Utah LLC. Here’s what is typically included:</p></br>
          <ul>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Names of organizers of the LLC at the time of filing</li>
            <li>Addresses of managers or members of the LLC at the time of filing</li>
            <li>Name of the incorporator</li>
            </ul></br>
            <p>You can file your Utah Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Utah, but you only need to file your Articles of Organization once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=UT" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Additional Information from the Utah Division of Corporations`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Division of Corporations has plenty of other information on forming and running a business in Utah.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You’ll find other useful information below:`,
      list: [
        `<a href="https://corporations.utah.gov/business/lc.html" target="_blank" rel="noopener noreferrer">Utah Division of Corporations for forming and running your LLC</a>`,
        `<a href="https://laborcommission.utah.gov/" target="_blank" rel="noopener noreferrer">Utah Labor Commission for UT employers and hiring</a>`,
        `<a href="https://tax.utah.gov/" target="_blank" rel="noopener noreferrer">Utah State Tax Commission for UT taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of Utah LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Utah LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Utah Series LLCs`,
          answer: `<p>In Utah, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master umbrella LLC. These can be very useful if you don’t want to set up a separate LLC for every individual business you run.</p></br>
            <a href="/utah-llc/" target="_blank">Decide if a Utah Series LLC is right for your new business.</a>`,
        },
        {
          question: `Professional Utah LLCs`,
          answer: `<p>Some states, including Utah, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here are the occupations that the UT Division of Corporations allows to form professional LLCs:</p></br>
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
            <li>Real Estate Appraiser</li>`,
        },
        {
          question: `Foreign LLCs in Utah`,
          answer: `<p>If your business is already operating in another state and expanding to Utah, you’ll need to form a foreign LLC.</p></br>
            <a href="/utah-llc/fees-filing-requirements/">More information on Utah filing and licensing requirements here.</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Information in This Guide`,
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
      text: `Naming Your Utah LLC`,
      url: `/Utah-llc/Utah-business-names/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Utah business registry of the SD Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Utah LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Utah Registered Agents for LLCs`,
      url: `/Utah-llc/registered-agents-Utah-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forUtah Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Utah LLCs`,
      url: `/Utah-llc/fees-filing-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Utah rules. Includes details of Employer Identification Numbers (EINs), Utah and federal business licenses, annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Utah LLC`,
      url: `/Utah-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Utah government. Includes details of federal taxes like income and self-employment, and Utah taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Naming Your Utah LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Utah business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the UT Division of Corporations business register, tell you about the rules for naming your business, describe the “Doing Business As” process and get you started with registering your LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Utah Business Entity Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a “Utah business entity search” with the Division of Corporations. They have a helpful tool on their website that lets you search the register of Utah LLCs and corporations to see if someone already has your desired business name.`,
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
      text: `Utah Division of Corporations business name search tool.`,
      url: `https://secure.utah.gov/bes/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Utah LLC Naming Rules`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet LLC naming rules. These rules typically apply to all LLCs, no matter in what state they are formed.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Utah. This is why you should check business name availability on the UT DOC website.`,
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
    content: `It’s not enough for your UT LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Utah.`,
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
    marginBottom: 48,
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
      header: ``,
      list: [
        `Are very similar to the name of a federal or UT agency or organization (e.g., FBI, FDA, Utah State Tax Commission, Utah Police, Treasury, etc.)`,
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
    content: `Utah LLC Trade and “Doing Business As” (DBA) Names`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Utah, doing business under a different name is known as a “Trade” or “Doing Business As” name. You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Utah Maple Syrup Tapping Company LLC and you have a chain called Miraculous Maple. You should file a Trade/DBA form to let the Utah Division of Corporations know.`,
    marginBottom: 16,
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
    content: `Name Registration with the Utah Division of Corporations`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Utah business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your UT LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your LLC right now, you can reserve the business name with the Utah Division of Corporations. You will need to complete a “Application to Reserve a Specified Business Name” and file it with the UT SOS. You do not need to reserve a name if you are forming your business right away.</p></br>
          <a href="https://corporations.utah.gov/pdf/nmreserv.pdf" target="_blank" rel="noopener noreferrer">Utah SOS LLC name reservation.</a>`,
      },
      {
        text: `If you’re ready to start your LLC, you can formally file your Articles of Organization with the Utah SOS, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=UT" target="_blank">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your LLC`,
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
          question: `How Do I Search for My Utah LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://sosenterprise.sd.gov/BusinessServices/Business/FilingSearch.aspx" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Utah Division of Corporations, which will tell you if there are any UT corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Utah LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Utah). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Utah?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Utah LLC?`,
          answer: `Yes. The Utah Division of Corporations allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Incfile Resources for Naming an LLC`,
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
    content: `You must be careful that your Utah LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your Utah LLC`,
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
    color: color.orange3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name.`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Registered Agents and Your Utah LLC`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Utah Division of Corporations requires every UT LLC to have a Registered Agent. Once you have assigned a Registered Agent, they can receive official correspondence and documents on behalf of your business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Utah Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Utah Division of Corporations Says About Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Utah Division of Corporations on Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<i>“The Registered Agent is a business or individual designated to receive service of process when a business entity is a party in a legal action such as a lawsuit or summons. The Division also sends all correspondence to the Registered Agent. A Utah street address is required.”</i>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules for Utah Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Utah Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Utah.`,
        `If the Registered Agent is a business, they must be able to conduct business in Utah.`,
        `The Registered Agent must have a physical street address in Utah, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Utah LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Purpose of a Utah Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Utah Registered Agent carries out several valuable services for your business. They accept official communications and documents from the UT Division of Corporations on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the Utah Secretary of State, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Utah LLC has legal proceedings issued against it)`,
        `Official Utah and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Incfile Provides a Free Utah Registered Agent Service for the First Year`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Incfile provides a complete Utah Registered Agent service for any LLC that’s incorporated in UT. Even better, your Registered Agent is completely free for the first year and only $119 a year after that.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in Utah and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what the Incfile Utah Registered Agent service provides for your LLC:`,
      list: [
        `An always-available Utah Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your Utah business`,
        `Email notification whenever we receive documents for your business`,
        `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
      ],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Utah registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Utah Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Utah LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your Registered Agent When You Form Your SD LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Utah Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint a Registered Agent Service When You Create Your LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a Utah Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Your Certificate of Organization with the Utah Division of Corporations`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Certificate of Organization. This is the form that you file with the UT Division of Corporations to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Utah Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Organization based on the information you’ve provided. Additionally, we give you a free Utah Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=UT`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Change Your Registered Agent After Your LLC Is Formed`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your UT Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a “Corporation Registration Information Change” Form with the Utah Division of Corporations`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Utah Registered Agent, you can complete a “Corporation Registration Information Change” form that’s available on the UT Division of Corporations website. Once you’ve filled it out, send it to the Division of Corporations so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Utah Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our UT Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Utah Division of Corporations. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's Utah registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `UT Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Utah LLC. If you do, you can search the business database of the Utah Division of Corporations, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the Utah Division of Corporations requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What Happens When You Don’t Have a Utah Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Utah Division of Corporations?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Utah Division of Corporations: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a Utah LLC: A UT Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Utah LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Appointing Yourself as Your Own Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Utah, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `You always need to have someone on hand during business hours at the Utah address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the Utah Division of Corporations website. If you would prefer your name and address aren’t published, you should choose a Registered Agent service.`,
        `If you change your Utah business address or move out of state, you need to file additional documentation with the Division of Corporations for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Utah Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Utah Registered Agent?`,
          answer: `Yes. All LLCs are required to have a Registered Agent. This is mandated by the West Virginia Secretary of State.`,
        },
        {
          question: `When Can I Assign a Utah Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Utah business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Utah?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Utah Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in Utah?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Utah Registered Agent Services`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/" target="_blank">The Main Functions of a Utah Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Utah Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/" target="_blank" >What a Utah Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Utah Fees and Requirements for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your Utah business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Utah Division of Corporations, while others are due to the federal or Utah government. We’ve summarized the most common requirements and fees here.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Utah business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in Utah`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Utah, you’ll need to file an LLC with the Division of Corporations and pay a filing fee. Here are the current fees and filing times for Utah:`,
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
    content: `When you form your LLC through Incfile, we automatically forward this fee to the Utah Division of Corporations when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Utah</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Utah LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=UT`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your Utah LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Utah LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Utah LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside Utah`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Utah LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Utah. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `Annual Reporting and Fees for Your Utah LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your UT LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Utah:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Utah annual report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Permits and Licenses in Utah`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some Utah LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Utah LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Utah LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Incfile Business License Research Package for Your Utah LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Utah LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `It includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Utah LLC will need`, `The application forms you will need to file with the Utah, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Utah and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your Utah LLC`,
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
    content: `Utah LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Utah business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Utah Fees or Requirements for Your Utah LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to mee`,
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
    content: `If you want your business to trade under a different name, you can file a form with the Utah Division of Corporations. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Utah Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Utah LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete Utah Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah crop service`,
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
    content: `If you don’t want to form your business right away, you can reserve a name with the Utah Division of Corporations. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Utah LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Utah business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Division of Corporations. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Utah Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Utah LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Utah LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Utah LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Utah Division of Corporations. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's Utah certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard Utah LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Utah LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for Utah LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Utah LLC Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Utah LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Division of Corporations on your behalf when forming your Utah business`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including UT, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Utah LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Utah LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Utah LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your LLC will need to pay a variety of taxes to both the federal and Utah governments. We’ll cover all the main taxes in Utah, including self-employment, payroll, federal, Utah state tax and Utah sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Utah LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Utah LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Utah LLC owners pay self-employment tax on business profits.`,
      },
      {
        text: `Utah LLC owners pay UT state tax on any profits, less state allowances or deductions.`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
      },
      {
        text: `Some LLCs pay Utah sales tax on products.`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Utah personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Utah State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Utah business owner, you will need to pay state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay income tax. You will be taxed at the standard rates for Utah state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Utah state tax rate is 4.95 percent.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get details on the Utah state tax here.`,
      url: `https://incometax.utah.gov/filing/online-filing`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Utah Sales Taxes for LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the UT Commission of Revenue. Utah sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Utah sales tax on:`,
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc. Certain services that your business might provide`,
        `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get details on the Utah sales tax here.`,
      url: `https://tax.utah.gov/sales`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Federal Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple of different federal taxes that every LLC will need to pay, including Utah LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Utah LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Utah business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [
        `On profits of $30,000, you would pay self-employment tax of $4,590.`,
        `On profits of $60,000, you would pay self-employment tax of $9,180.`,
        `On profits of $100,000, you would pay self-employment tax of $15,300.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
      ],
    },
    marginBottom: 32,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Utah LLC as an S Corporation`,
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
      text: `Incfile form 2553 S Corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Utah LLC self-employment tax through an S Corporation tax election.`,
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
    content: `You must also pay regular federal income tax on any earnings you take out of your Utah LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
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
          answer: `You may also choose to withhold federal and Utah state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and Utah state income tax, your employees may need to file their own tax returns.`,
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
                  text: `Get more requirements from the Utah Commission of Labor website.`,
                  url: `https://laborcommission.utah.gov/`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your Utah LLC`,
          answer: `Depending on the industry you are in, your Utah LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your Utah LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most Utah LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `Utah state tax`],
            },
            {
              type: `paragraph`,
              content: `Most Utah LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on Utah LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Utah Have Sales Tax?`,
          answer: `Yes. Utah does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Utah Have a State Tax?`,
          answer: `Yes. Utah does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases, you must pay estimated taxes on your Utah tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
