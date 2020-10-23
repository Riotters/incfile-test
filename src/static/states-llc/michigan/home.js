import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start an LLC in Michigan`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you want to start your own business in Michigan, one of the best ways to do so is by creating a Michigan LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Michigan LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Located near the Great Lakes in the U.S. Midwest, Michigan (and Detroit in particular) has had a tough few years. But as its major cities have started to revitalize, Michigan has once again become an attractive place to form a business. Michigan is home to several great cities, including Detroit, Grand Rapids, Lansing and Ann Arbor.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Although the state is synonymous with the automobile industry, it is also home to several other major sectors, including technology, mining, aerospace, military manufacturing, furniture and food products. Michigan also has nearly 65,000 inland bodies of water, and no resident is further than 85 miles from a Great Lake. Any businesses that can take advantage of water sports, tourism and related areas will do well here.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, here are the benefits of filing an LLC in Michigan:`,
      list: [`Limit your personal liability and keep personal assets separate from your business liability and debts`, `Enjoy quick and simple filing, management, compliance, regulations and administration`, `Benefit from easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 16,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Learn more about the benefits of the LLC business structure here. `,
      url: `/limited-liability-company/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In this guide, we’ll walk you through how to get an LLC in Michigan, as well as any special requirements or regulations you’ll need to consider.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps for Starting an LLC in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in MI. On this page, you’ll find the basic steps of how to form a Michigan LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Michigan LLC`,
          answer: `<p>You will need a distinctive and original name for your Michigan LLC that’s not used by any other business in MI and we can help. Our</p>
            <p><a href="/business-name-search/" target="_blank">easy-to-use business name search tool</a></p>
            <p>effortlessly searches the business registry of the MI Department of Licensing and Regulatory Affairs.</p></br>
            <p>We’ll check if your business name is available or if it’s already in use by an LLC or corporation in Michigan. If it is, you can search for another name in Michigan or elsewhere. If not, congratulations, you’re on your way to starting a business.</p></br>
            <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Michigan LLC.</p></br>
            <p><a href="/michigan-llc/how-to-name-your-llc/" target="_blank">Learn about Michigan LLC business naming rules.</a></p></br>
            <p><a href="/" target="_blank">Search for your Michigan LLC name</a></p>`, //button i wyskakujące okno wprowadzenia danych
        },
        {
          question: `STEP 3: Provide an Official Address for Your MI LLC`,
          answer: `Every Michigan LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Michigan and can be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Resident Agent for Your Michigan LLC`,
          answer: `<p>Every MI LLC must have a “Registered Agent,” known in Michigan as a “Resident Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Michigan Department of Licensing and Regulatory Affairs.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your MI Resident Agent must have a physical street address in Michigan and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a Michigan Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/michigan-llc/registered-agents-michigan-llc/" target="_blank">Learn more about Michigan Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Michigan LLC business formation process.`,
        },
        {
          question: `STEP 6: File Michigan LLC Forms — Articles of Organization — With the Department of Licensing and Regulatory Affairs`,
          answer: `<p>In many states, the Secretary of State is the body responsible for registering and managing LLCs, whereas in Michigan, it's the Department of Licensing and Regulatory Affairs. Once you've gathered all the information for your Michigan LLC, you’ll need to file a formal document with the state. This document is known as your “Articles of Organization,” and filing the document creates your Michigan LLC. Here’s what is typically included:</p></br>
            <li>Your business name and address</li>
            <li>Details of your Registered Agent</li>
            <li>Purpose of your business</li>
            <li>Name of the incorporator</li></br>
            <p>You can file your Michigan LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Michigan, but you only need to file your Articles of Organization once.</p></br>
            <p><a href="/" target="_blank">Form your LLC now</a></p>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=ID
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Special Types of LLCs in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Professional LLCs`,
          answer: `<p>Some states, including Michigan, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Here’s what Michigan says about professional LLCs:</p></br>
            <p><i>“A professional limited liability company, as the name implies, is a company made up of licensed persons who have been legally authorized to provide a professional service. Professional limited liability companies must consist of at least one member who is licensed in each professional service being offered. If there is more than one member, they must all be licensed to provide the services of the company. Those professions which must form as a professional service limited liability company are dentists, osteopathic physicians, physicians, surgeons, doctors of divinity or other clergy and attorneys at law.”</i></p>`,
        },
        {
          question: `Foreign LLC in Michigan`,
          answer: `<p>If your business is already operating in another state and expanding to Michigan, you’ll need to form a foreign LLC.</p></br>
            <p>Find more information on Michigan filing and licensing requirements <a href="/michigan-llc/form-filling-permit-requirements/" target="_blank">here.</a>.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Michigan LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Michigan? We’ve got you covered.
      <a href="/after-forming-llc/" target="_blank">Here’s our guide</a>
      to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Learn More About Michigan LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You’ll find plenty more insight and guidance for Michigan business owners on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your Michigan LLC`,
      url: `/michigan-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<p>You can easily search the business registry of the MI Secretary of State/Department of Licensing and Regulatory Affairs by using Incfile’s</p>
      <a href="/business-name-search/" target="_blank">business name search tool.</a></br> 
      <p>This part of our guide also includes information on naming rules, fictitious names, reserving a Michigan LLC name and more.</p>`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Search for your Michigan LLC name`,
      url: `/`, //okienko
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Michigan Registered Agents for Your LLC`,
      url: `/michigan-llc/registered-agents-michigan-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Michigan Registered Agent to your new LLC or change to a different Registered Agent. Includes information on rules for Resident Agents and how to search for one in Michigan.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your Michigan LLC`,
      url: `/michigan-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and state rules. Includes details about Employer Identification Numbers (EINs), Michigan and federal business licenses, Michigan annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Michigan LLC`,
      url: `/michigan-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and state government. Includes details of federal taxes like income and self-employment, plus Michigan taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information from the michigan Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The MI Department of Licensing and Regulatory Affairs has plenty of information on forming and running a business in Michigan.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are a few additional resources you may find helpful:`,
      list: [
        `<a href="https://www.michigan.gov/som/0,4669,7-192-29943---,00.html" target="_blank" rel="noopener noreferrer">Michigan Department of Licensing and Regulatory Affairs for forming and running your MI LLC</a>`,
        `<a href="https://www.michigan.gov/leo/0,5863,7-336-94422_17485---,00.html" target="_blank" rel="noopener noreferrer">Michigan Bureau of Employment Relations for MI employers and hiring</a>`,
        `<a href="https://www.michigan.gov/treasury/" target="_blank" rel="noopener noreferrer">Michigan Department of Treasury for MI taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `MI Business Entity Searches & Naming Your Michigan LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right name for your new business or want to register your company name with the MI Department of Licensing and Regulatory Affairs, we can help. We’ve got all the information you need on Michigan LLC searches, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Michigan Secretary of State Business Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `While most people think of the secretary of state when it comes to naming and registering a new business, in Michigan you actually want the Department of Licensing and Regulatory Affairs (LARA). You should start naming your business by completing a Michigan business name search. We have a <a href="/business-name-search/" target="_blank">simple business name search tool</a> that searches the business registry of LARA.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We’ll complete a search on your behalf and let you know if another LLC or corporation is already using your desired business name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available, and you won’t be able to start a business with that name. Try searching for a different business name in the corporation search tool instead.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Search for your Michigan LLC name`,
      url: `/`, //okienko
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The department also has a helpful tool on their website that lets you search the register.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Michigan Department of Licensing and Regulatory Affairs business name search tool.`,
      url: `https://www.michigan.gov/corpentitysearch`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Rules on Michigan LLC Name Availability`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Michigan Department of Licensing and Regulatory Affairs naming rules. These do vary from state to state — we’ve got both general naming rules below as well as naming rules specific to MI.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Business Name Availability Rules`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Michigan LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Michigan. This is why you should check business name availability on the MI LARA website.`,
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
    content: `It’s not enough for your MI LLC name to be unique. It also cannot be similar to the name of another corporation or LLC in Michigan.`,
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
      header: ``,
      list: [
        `Are very similar to the name of a federal or MI agency or organization (e.g., FBI, FDA, Michigan Department of Treasury, Michigan Police, Treasury, etc.)`,
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
    content: `Specific LLC Naming Rules for Michigan`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Michigan Department of Licensing and Regulatory Affairs has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your MI business appropriately.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `A Limited Liability Company name may not include the words "Corporation", "Incorporated" or the abbreviations "Corp." or "Inc."`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `More on Michigan Department of Licensing and Regulatory Affairs business naming rules`,
      url: `https://www.michigan.gov/lara/0,4601,7-154-89334_61343_35413_35429-120095--,00.html`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Michigan LLC Fictitious Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Michigan, doing business under a different name is known as an “Assumed Name.” You might choose to use a different name from your MI formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Michigan Tourism Holding Company LLC, and you have a chain called Great Lakes Apparel. You should file a Certificate of Assumed Name to let the Michigan Department of Licensing and Regulatory Affairs know, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's assumed business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Business Name in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Michigan business name and checked availability with our business name search tool, it’s time for some next steps. You will need to check the naming rules and decide if you want a fictitious name. Once that’s done, you can register your MI LLC name. There are a couple of ways to do this.`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your Michigan LLC right now, you can reserve the business name with the Michigan Department of Licensing and Regulatory Affairs. You will need to complete an Application for Reservation of Name and file it with the MI LARA. You do not need to reserve a name if you are forming your business right away.</p></br>
          <p><a href="https://www.michigan.gov/documents/lara/540_08-15_527734_7.pdf" target="_blank" rel="noopener noreferrer">​Michigan LARA LLC name reservation form.</a><p>`,
      },
      {
        text: `If you’re ready to start your Michigan LLC, you can formally file your Articles of Organization with the Michigan LARA, or
          <a href="/" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`, //https://www.incfile.com/form-order-now.php?entityType=LLC&entityState=CO
      },
    ],
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Search for your Michigan LLC name`,
      url: `/`, //okienko
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Michigan LLC`,
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
          question: `How Do I Search for My Michigan LLC Business Name?`,
          answer: `<p>Just go to the <a href="/business-name-search/" target="_blank">business name search tool</a> and enter your proposed business name. We’ll search the register of the Michigan Department of Licensing and Regulatory Affairs, and let you know if there are any MI corporations or LLCs with that name.</p></br>
            <p><a href="/business-name-search/" target="_blank">Search for your Michigan LLC name.</a></p>`,
        },
        {
          question: `Are There Any Rules on Naming My Michigan LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Michigan). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Michigan?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Michigan LLC?`,
          answer: `Yes. The Michigan Department of Licensing and Regulatory Affairs allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Other Useful Resources for Naming Your Michigan LLC`,
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
    content: `You must be careful that your Michigan LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile trademark search and registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Michigan LLC`,
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
    marginBottom: 32,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Michigan Registered Agents for Your LLC`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The Department of Licensing and Regulatory Affairs requires every MI LLC to have a Registered Agent, or as it’s referred to in Michigan, a “Resident Agent.” Once you’ve assigned a Michigan Registered Agent, they can receive official correspondence and documents on behalf of your MI business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Michigan Registered Agent at all times, and you can appoint a Registered Agent when you first start your business. You can also replace your existing MI Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ` Here’s what we cover:`,
      list: [
        `Information on the Michigan Department of Licensing and Regulatory Affairs and MI Resident Agent Services`,
        `Rules for Michigan Resident Agents`,
        `What to Expect From a Michigan Resident Agent Service`,
        `Appointing a MI Resident Agent Service for Your Michigan LLC`,
        `Change Your Michigan Resident Agent After Your LLC Is Formed`,
        `MI Resident Agent Search`,
        `The Problems Caused When You Don’t Appoint a Michigan Resident Agent Service`,
        `FAQs About Michigan Resident Agents`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `Information From the Michigan Department of Licensing and Regulatory Affairs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In Michigan, a Registered Agent is formally known as a “Resident Agent;” we’ll use those names interchangeably in this guide. A Resident Agent’s functions and requirements are identical to those of Registered Agents described above.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s some important information from the Michigan Department of Licensing and Regulatory Affairs on MI Resident Agent services:`,
      list: [
        `<i>“A resident agent and registered office must be included in the Articles of Organization. A resident agent is someone who is appointed by the company to receive any documents, notices, or demands served upon the company. The resident agent must be a Michigan resident, a Michigan corporation, a foreign corporation with a certificate of authority to transact business in Michigan, a Michigan limited liability company or a foreign limited liability company authorized to transact business in this state.”</i>`,
      ],
    },
    marginBottom: 48,
    color: color.orange2,
  },
  {
    type: `header`,
    content: `Rules for Michigan Resident Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Michigan Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Michigan`,
        `If the Registered Agent is a business, they must be able to conduct business in Michigan`,
        `The Registered Agent must have a physical street address in Michigan, not a P.O. Box`,
        `The MI Registered Agent must be available in person during normal business hours to sign for any correspondence`,
      ],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `text`,
    content: `Note that the MI Registered Agent address does not need to be the same as your Michigan LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a Resident Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Michigan Registered Agent carries out several valuable services for your business. They accept official communications and documents from the MI Department of Licensing and Regulatory Affairs on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This includes:`,
      list: [
        `Correspondence from the Michigan Department of Licensing and Regulatory Affairs, like a notice to file reports and other forms`,
        `Service of process documents (for example, if your Michigan LLC has legal proceedings issued against it)`,
        `Official Michigan and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Get a Free Registered Agent Service in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Michigan and you need a MI Resident Agent, we can help. Incfile provides a complete Registered Agent service for any Michigan business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Michigan and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s MI Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the Michigan Department of Licensing and Regulatory Affairs or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's Michigan registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appointing a MI Resident Agent Service `,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Michigan LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign Your Michigan Resident Agent When You Form Your MI LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business needs to have a Michigan Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the Michigan Department of Licensing and Regulatory Affairs`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the MI Department of Licensing and Regulatory Affairs to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Michigan Resident Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Michigan Registered Agent service for the first year, and we’ll include details of your MI Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through IncFile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Change Your Michigan Resident Agent After Your LLC Is Formed`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your MI Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File a Form With the Michigan Department of Licensing and Regulatory Affairs`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Michigan Registered Agent, you can complete a Certificate of Change of Registered Office/Agent (form CSCL/CD-520) that’s available on the MI Department of Licensing and Regulatory Affairs website. Once you’ve filled it out, send it to the Department of Licensing and Regulatory Affairs so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Have Incfile File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our MI Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the Certificate of Change of Registered Office/Agent on your behalf and send it to the Michigan Department of Licensing and Regulatory Affairs. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order IncFile's Michigan registered agent service`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `MI Resident Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Michigan LLC. If you do, you can search the business database of the Michigan Department of Licensing and Regulatory Affairs, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the MI Registered Agent isn’t available from the searchable business registry, contact the Michigan Department of Licensing and Regulatory Affairs requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Consequences of Not Assigning a Michigan Resident Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Michigan Department of Licensing and Regulatory Affairs?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing with the Michigan Department of Licensing and Regulatory Affairs: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a Michigan LLC: A MI Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Michigan LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `You Can Appoint Yourself as Your Own Michigan Resident Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Michigan, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach, as there can be some drawbacks:`,
      list: [
        `The MI Registered Agent must have a physical street address in Michigan. If you’re forming an LLC outside MI, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Michigan address to sign for important documents.`,
        `The MI Registered Agent’s name and address are part of the public record and available through the Michigan Department of Licensing and Regulatory Affairs website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your Michigan business address or move out of state, you would need to file additional documentation with the MI Department of Licensing and Regulatory Affairs for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About Michigan Resident Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Michigan Resident Agent?`,
          answer: `Yes. All MI LLCs are required to have a Registered Agent. This is mandated by the Michigan Department of Licensing and Regulatory Affairs.`,
        },
        {
          question: `When Can I Assign a Michigan Resident Agent Service?`,
          answer: `You can either do it when you incorporate your Michigan business through paperwork filed with the MI Department of Licensing and Regulatory Affairs or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Resident Agent in Michigan?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the Michigan Department of Licensing and Regulatory Affairs.`,
        },
        {
          question: `Does My MI Resident Agent Need to Have an Address in Michigan?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Michigan Registered Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/" target="_blank">The Main Functions of a Michigan Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your Michigan Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/" target="_blank" >What a Michigan Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Michigan LLC Forms, Fees and Filing Requirements`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Different types of businesses have different requirements in Michigan, including related fees and costs. Your MI LLC needs to pay various fees to the federal government, Michigan government and other agencies. Some of these fees are levied by the Michigan Department of Licensing and Regulatory Affairs or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Michigan business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Costs to File an LLC in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in Michigan, you’ll need to file an LLC with the MI Department of Licensing and Regulatory Affairs and pay a Michigan filing fee. Here are the current fees and filing times for Michigan:`,
    marginBottom: 16,
  },
  {
    type: `table-simple`,
    content: {
      headers: [`State Fee`, `State Filing Time`, `Expedited Filing Time`],
      rows: [[`$50`, `15 business days`, `8 business days`]],
    },
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
    content: `When you form your MI LLC through Incfile, we automatically forward this fee to the Michigan Department of Licensing and Regulatory Affairs when we file your incorporation paperwork.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for Michigan.</a>`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your Michigan LLC through IncFile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your Michigan LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Michigan LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get an EIN for your Michigan LLC through IncFile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Michigan LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Michigan. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get a foreign qualification/certificate of authority through IncFile`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Annual Reporting and Fees for Michigan LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need you to file an annual (or other periodic) report with their Secretary of State. When you file your MI LLC Annual Report, you may need to pay a fee. Here are the annual filing requirements for Michigan:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Annual Report`,
      list: [`Frequency:  Annually`, `Due Date:  February 15th`, `Note:  LLCs registered after September 30th of the preceding year are exempt from filing the report in the subsequent year. `, `Filing Fee:  $25`],
    },
    marginBottom: 16,
    color: color.blue2,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/" target="_blank" >Learn about your ongoing Michigan LLC filing requirements</a> and business filing deadlines with our helpful Michigan ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Michigan Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Get a Business License in Michigan`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some MI LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Michigan LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your Michigan LLC (state, county or city) (e.g., a license to conduct business from the city of Detroit)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `list-dot`,
    content: {
      header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your Michigan LLC will need`, `The application forms you will need to file with the state, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, state and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Operating Agreements for Michigan LLCs`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Michigan business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Fees or Requirements for Michigan LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Michigan LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name in Michigan`,
    size: 4,
    marginBottom: `16`,
  },
  {
    type: `text`,
    content: `If you want your MI business to trade under a different name, you can file a form with the Michigan Department of Licensing and Regulatory Affairs. You will need to pay a Michigan filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the Michigan Resident Agent `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your Michigan LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new MI Registered Agent later. Incfile provides a complete Michigan Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your MI business right away, you can reserve a name with the Michigan Department of Licensing and Regulatory Affairs. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Michigan business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Michigan Department of Licensing and Regulatory Affairs. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Michigan Articles of Amendment for include:`,
      list: [`Adding, removing or changing a Michigan LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Michigan LLC`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Michigan LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Michigan Department of Licensing and Regulatory Affairs. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile's Michigan certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard MI LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Michigan LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for MI LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Michigan LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees I Am Charged When Forming My Michigan LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Department of Licensing and Regulatory Affairs on your behalf when forming your Michigan business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you to file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require Annual Reports. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My Michigan LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Michigan LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `Michigan Business Taxes for LLCs`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Business taxes are a fact of life, and your MI LLC will need to pay a variety of taxes to both the federal and Michigan governments. We’ll cover all the main taxes in Michigan including self-employment, payroll, federal, Michigan state tax and Michigan sales tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Michigan LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a Michigan LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Michigan LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Michigan LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Michigan LLC owners pay MI state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some MI LLCs pay Michigan sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Michigan personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Michigan Taxes Payable to the MI Department of Treasury`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the Michigan Department of Treasury: Michigan state income tax and Michigan state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Michigan State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a Michigan business owner, you will need to pay MI state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Michigan income tax. You will be taxed at the standard rates for Michigan state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal Michigan state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Michigan state tax rates are typically 4.25 percent. `,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get details on the Michigan state tax here.`,
      url: `https://www.michigan.gov/taxes/`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Michigan Sales Taxes on LLC Sales`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the MI Department of Treasury. Michigan sales tax is collected at the point of purchase. Michigan sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect Michigan sales tax on:`,
      list: [`Tangible, personal property and goods you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Michigan business might provide`],
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
    type: `arrow-link`,
    content: {
      text: `Get details on the Michigan sales tax here.`,
      url: `https://www.michigan.gov/taxes/0,4676,7-238-43519_43529---,00.html`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Sales Tax Rates for Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Michigan LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including Michigan LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Michigan LLC Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All Michigan LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Michigan business. The current self-employment tax rate is 15.3 percent.`,
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
      list: [`On profits of $30,000, you would pay self-employment tax of $4,590`, `On profits of $70,000, you would pay self-employment tax of $10,710`, `On profits of $120,000, you would pay self-employment tax of $18,360`, `On profits of $160,000, you would pay self-employment tax of $24,480`],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Michigan LLC as an S Corporation`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax you pay by declaring some of your income as salary and other income as distributions or withdrawals.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can do this by making an “S Corporation Tax Election” with the IRS using Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `IncFile form 2553 S Corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Michigan LLC self-employment tax through an S Corporation Tax Election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Michigan LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Michigan LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Michigan LLC`,
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
    content: `Federal and State Tax Withholding`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal and Michigan state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
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
    content: `Regardless of whether you withhold federal and Michigan state income tax, your employees may need to file their own tax returns.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Michigan LLC Employee Insurance and Other Requirements`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get more requirements from the Michigan Bureau of Employment Relations website.`,
      url: `https://www.michigan.gov/leo/0,5863,7-336-94422_17485---,00.html`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `Other Taxes and Duties for Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Michigan LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. If you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Michigan LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Most Michigan LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Michigan state tax`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Most Michigan LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Michigan LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Michigan Have Sales Tax?`,
          answer: `Yes. Michigan does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does Michigan Have a State Tax?`,
          answer: `Yes. Michigan does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your Michigan tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 0,
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
