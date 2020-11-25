import {
    color
} from "../../../atomic/atoms/styles/colors";

export const top = {
    header: `Why Form a Limited Liability Company (LLC)?`,
    text: `$0 + State Fee & 1st Year FREE Registered Agent`,
    buttons: [{
        text: `See detailed pricing`,
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WI`,
    }, ],
};

export const howToGuide = [{
        type: `header`,
        content: `How to Start a Wisconsin LLC`,
        size: 2,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Located in the north central U.S., Wisconsin is a beautiful, geographically diverse state. It shares borders with Iowa, Minnesota, Illinois and Michigan. The state is home to nearly 6 million people and is a major center of manufacturing, agriculture and healthcare.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `For most business owners, the fastest and easiest way to start a business in Wisconsin is by creating a Wisconsin LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Wisconsin corporations, but with much simpler rules and regulations.`,
        marginBottom: 16,
    },

    {
        type: `listt-dot`,
        content: {
            header: `Briefly, the benefits of starting an Wisconsin LLC include:`,
            list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your Wisconsin LLC`, `Easy tax filing and potential advantages for tax treatment`],
        },
        marginBottom: 16,
        color: color.blue3,
        curve: true,
        curveColor: color.red1,
    },
    {
        type: `text`,
        content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here. </a>`,
        marginBottom: 48,
    },

    {
        type: `header`,
        content: `Six Quick Steps to Form an LLC in Wisconsin`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `We’ve got lots of useful information on starting a business in WI. On this page you’ll find the basic steps for forming a Wisconsin LLC, with more in-depth content throughout the rest of our guide.`,
        marginBottom: 16,
    },
    {
        type: `accordion`,
        content: {
            items: [{
                    question: `STEP 1: Gather Information for Your Members`,
                    answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.`,
                },
                {
                    question: `STEP 2: Search for and Choose a Unique Business Name for Your Wisconsin LLC`,
                    answer: `<p>You will need a distinctive and original name for your Wisconsin LLC that’s not used by any other business in WI. To find out if another company is using your chosen business name, carry out an Wisconsin business entity name search on the WI Corporation Commission website.</p></br>
                        <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Wisconsin LLC.</p></br>
                        <p><a href="/wisconsin-llc/how-to-name-your-llc/">Learn about Wisconsin LLC business naming rules.</a></p>`,
                },
                {
                    question: `STEP 3: Provide an Official Address for Your WI LLC`,
                    answer: `Every Wisconsin LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Wisconsin, but it cannot be a P.O. Box.`,
                },
                {
                    question: `STEP 4: Assign a Registered Agent for Your Wisconsin LLC`,
                    answer: `<p>Every WI LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Wisconsin Department of Financial Institutions.</p></br> 
                        <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your WI Registered Agent must have a physical street address in Wisconsin and must be present to receive important documents for your company during business hours. </p></br>
                        <p>At Incfile, all of our packages include an Wisconsin Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
                        <p><a href="/wisconsin-llc/registered-agents-wisconsin-llc/">Learn more about Wisconsin Registered Agents.</a></p>`,
                },
                {
                    question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
                    answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or Incfile can get one for you as part of the Wisconsin LLC business formation process.`,
                },
                {
                    question: `STEP 6: File Articles of Organization for WI Registration`,
                    answer: `<p>Once you've gathered all the information for your Wisconsin LLC, you’ll need to file a formal document with the WI Department of Financial Institutions. This document is known as your “Articles of Organization,” and filing the document creates your Wisconsin LLC. Here’s what is typically included:</p></br
                        <ol>
                            <li>Your business name and address</li>
                            <li>Details of your Registered Agent</li>
                            <li>Name of the incorporator</li>
                        </ol></br>
                        <p>You can file your Wisconsin LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Wisconsin. You only need to file your Articles of Organization once.</p></br>
                        <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=WI" title="Form Your LLC Now">Form Your LLC Now</a>`,
                },
            ],
        },
    },
    {
        type: `header`,
        content: `Review Information from the Wisconsin Department of Financial Institutions`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `The WI Department of Financial Institutions has plenty of information on forming and running a business in Wisconsin.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `These are all the basic steps for forming an LLC in Wisconsin. You’ll find other useful information below:`,
        marginBottom: 16,
    },
    {
        type: `arrow-link`,
        content: {
            text: `Wisconsin Department of Financial Institutions for forming and running your WI LLC`,
            url: `https://www.revenue.wi.gov/Pages/Businesses/New-Business-home.aspx`,
        },
    },
    {
        type: `arrow-link`,
        content: {
            text: `Wisconsin Department of Workforce Development for WI employers and hiring`,
            url: `https://dwd.wisconsin.gov/`,
        },
    },
    {
        type: `arrow-link`,
        content: {
            text: `Wisconsin Department of Revenue for WI taxes`,
            url: `https://www.revenue.wi.gov/Pages/home.aspx`,
        },
    },
    {
        type: `header`,
        content: `Form a Foreign LLC in Wisconsin`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If your business is already operating in another state and expanding to Wisconsin, you’ll need to form a foreign LLC. `,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `More information on Wisconsin filing and licensing requirements here. <link to state subpage once published>`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `What to Do After Setting Up Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Want to know your next steps after registering a new LLC in Wisconsin? We’ve got you covered. Here’s our guide to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. `,
        marginBottom: 48,
    },
    {
        type: `header`,
        size: 3,
        content: `Detailed Information for Your Wisconsin LLC`,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
        marginBottom: 48,
    },
    {
        type: `header`,
        size: 3,
        content: `Naming Your Wisconsin LLC`,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `How to search the Wisconsin business registry of the WI Department of Financial Institutions and find the right name. Includes information on naming rules, fictitious names, reserving a Wisconsin LLC name and more.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        size: 3,
        content: `Wisconsin Registered Agents for Your LLC`,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `How to appoint a Wisconsin Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Wisconsin Registered Agents.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        size: 3,
        content: `Fees and Requirements for Your Wisconsin LLC`,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Wisconsin rules. Includes details of Employer Identification Numbers (EINs), Wisconsin and federal business licenses, Wisconsin annual reports and more.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        size: 3,
        content: `Federal, State, Sales and Other Taxes for Your Wisconsin LLC`,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `How to understand the various taxes you will need to pay to the federal and Wisconsin government. Includes details of federal taxes like income and self-employment, and Wisconsin taxes like sales tax and income tax.    `,
        marginBottom: 48,
    },
];

export const namingYourBusiness = [{
        type: `header`,
        content: `Search for and Register Your Wisconsin LLC Name `,
        size: 2,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Your Wisconsin business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the WI Department of Financial Institutions business register, tell you about the rules for naming your business, describe “Trade Names” and get you started with registering your LLC.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Completing a Business Entity Search with the Wisconsin Department of Financial Institutions `,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Before officially forming your LLC, you need to check whether there’s already another Wisconsin LLC registered with your desired business name. Although the Secretary of State provides this service in most states, in Wisconsin it’s the Department of Financial Institutions. You can easily perform an LLC lookup with their website’s business entity search tool. `,
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
            text: `Wisconsin Corporation Commission LLC name search tool`,
            url: `<a href="https://www.wdfi.org/apps/CorpSearch/Search.aspx?">Wisconsin Department of Financial Institutions business name search tool</a>`,
        },
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin LLC DBA or Trade Names`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `You might choose to do business under a different name from your legal LLC name. In Wisconsin, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your WI formal LLC name for a variety of reasons.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `For example, your LLC might be called Wisconsin Travel and Tourism Holding Company LLC and you have a chain called Riverside Rovers. You should file a trade name to let the Wisconsin Department of Financial Institutions know. `,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `General Rules for Naming Your LLC `,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Wisconsin LLC.`,
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
        content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Wisconsin. This is why you should check business name availability on the WI CC website.`,
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
        content: `It’s not enough for your WI LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Wisconsin. For example, you cannot use the following factors to say your name is different from the name of another business:`,
        marginBottom: 16,
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
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: ``,
            list: [
                `Are very similar to the name of a federal or WI agency or organization (e.g., FBI, FDA, Wisconsin Department of Revenue, Wisconsin Police, Treasury, etc.)`,
                `Suggest affiliation with a federal or state agency or organization`,
                `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
                `Imply a purpose that it would be illegal for your business to carry out`,
            ],
        },
        marginBottom: 48,
        color: color.green3,
    },
    {
        type: `header`,
        content: `Specific Rules for Naming Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `In addition to the general rules listed above, the Wisconsin Department of Financial Institutions has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your WI business appropriately.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `“The word ‘insurance’ is prohibited in a corporate name filed with the department unless the name makes clear that the corporation is not an insurance company. Corporate names that use words to describe or convey the impression that the corporation is engaged in the practice of architecture, professional engineering or designing must comply with the requirements of Ch. 443, Wis. Stats. (Contact Dept of Safety and Professional Services, (608) 266-5511) for details.) The word ‘cooperative’ may be used only in the name of a cooperative association formed under Ch. 185, Wis. Stats., and may not be used by other business or nonprofit corporations.”`,
        marginBottom: 16,
    },
    {
        type: `arrow-link`,
        content: {
            text: `Wisconsin Department of Financial Institutions business naming rules.`,
            url: `https://www.wdfi.org/corporations/faqs.htm#nameAvailability`,
        },
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin LLC DBA or Trade Names`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `You might choose to do business under a different name from your legal LLC name. In Wisconsin, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your WI formal LLC name for a variety of reasons.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `For example, your LLC might be called Wisconsin Travel and Tourism Holding Company LLC and you have a chain called Riverside Rovers. You should file a trade name to let the Wisconsin Department of Financial Institutions know`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S TRADE NAME SERVICE`,
            url: `/fictitious-business-or-trade-name/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Register Your Wisconsin LLC Business Name
    `,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Once you’ve searched for your Wisconsin business name, checked availability, followed the naming rules and decided whether you need a trade name, you can register your WI LLC name. There are a couple of ways to do this:`,
        marginBottom: 16,
    },
    {
        type: `numeric-list`,
        content: [{
                text: `<p>If you don’t want to form your Wisconsin LLC right now, you may file a statement with the county Register of Deeds, or file a trade-name registration with the Department of Financial Institutions.</p></br>
               <a href="https://www.wdfi.org/Apostilles_Notary_Public_and_Trademarks/pdf/dfi-trd-102.pdf" target="_blank" rel="noopener noreferrer">Wisconsin DFI LLC name reservation form.</a>`,
            },
            {
                text: `If you’re ready to start your Wisconsin LLC, you can formally file your Articles of Organization with the Wisconsin DFI, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WI"> let Incfile take care of it for you.</a>`,
            },
        ],
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `FAQs on Naming Your Wisconsin LLC`,
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
            items: [{
                    question: `How Do I Search for My Wisconsin LLC Business Name?`,
                    answer: `Just go to the <a href="https://www.wdfi.org/apps/CorpSearch/Search.aspx?" target="_blank" rel="noopener noreferrer">Wisconsin business search tool</a> and enter your proposed business name. You can search the register of the Wisconsin Department of Financial Institutions, which will tell you if there are any WI corporations or LLCs with that name.`,
                },
                {
                    question: `Are There Any Rules on Naming My Wisconsin LLC?`,
                    answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Wisconsin). We’ve detailed these rules above.`,
                },
                {
                    question: `Can I Do Business Under a Different Name Than My LLC Name in Wisconsin?`,
                    answer: `Yes. Using what’s known in different states as an “assumed name,” “fictitious name,” “doing business as name” or “trade name,” you can choose to conduct business under a different name. Details are above. `,
                },
                {
                    question: `Can I Reserve a Name for My Wisconsin LLC?`,
                    answer: `Yes. The Wisconsin Department of Financial Institutions allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
                },
            ],
        },
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Useful Resources for Naming Your Wisconsin LLC`,
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
        content: `You must be careful that your Wisconsin LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE TRADEMARK SEARCH AND REGISTRATION SERVICE`,
            url: `/trademark-name-search/`,
        },
        theme: `primary48`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Find the Perfect Name for Your Wisconsin LLC`,
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
        color: color.yellow3,
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

export const registeredAgent = [{
        type: `header`,
        content: `Wisconsin Registered Agent Services for LLCs`,
        size: 2,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `The Wisconsin Department of Financial Institutions requires every WI LLC to have a Registered Agent. Once you have assigned a Wisconsin Registered Agent, they can receive official correspondence and documents on behalf of your WI business. Registered Agents can be individuals or businesses that offer specialized Registered Agent services. `,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Your LLC must have a Wisconsin Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing WI Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `What the Wisconsin Department of Financial Institutions Says About WI Registered Agents`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Here’s some important information from the Wisconsin Department of Financial Institutions on WI Registered Agent services.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `“The registered agent is the person, resident in Wisconsin, designated by the corporation to receive official communications on its behalf, such as service of process, annual report forms, tax forms, etc. It may be an officer or employee of the corporation, or someone not directly involved, such as an attorney. It is important to keep the registered agent and registered office information current, as significant consequences could arise for failure to receive and act on important papers sent to the corporation's registered agent.”`,
        marginBottom: 48,
    },

    {
        type: `header`,
        content: `Rules for Wisconsin Registered Agents`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `There are certain rules that you must follow when you’re appointing a Wisconsin Registered Agent service for your business. `,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `They are:`,
            list: [
                `If the Registered Agent is a person, they must reside in Wisconsin.`,
                `If the Registered Agent is a business, they must be able to conduct business in Wisconsin.`,
                `The Registered Agent must have a physical street address in Wisconsin, not a P.O. Box.`,
                `The WI Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
            ],
        },
        marginBottom: 16,
        color: color.orange3,
    },
    {
        type: `text`,
        content: `Note that the WI Registered Agent address does not need to be the same as your Wisconsin LLC business address.`,
        marginBottom: 48,
        color: color.yellow3,
    },
    {
        type: `header`,
        content: `The Purpose of a Wisconsin Registered Agent`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `What can you expect from your Wisconsin Registered Agent? Their main function is to accept official documents and correspondence from the WI Department of Financial Institutions. `,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `This includes:`,
            list: [
                `Correspondence from the Wisconsin Department of Financial Institutions`,
                `Service of process notices (e.g., if your WI LLC is sued or required to appear in court)`,
                `Official Wisconsin state and federal government correspondence and notifications`,
                `Tax forms and requests to complete permits, company filings and reports`,
            ],
        },
        marginBottom: 48,
        color: color.green3,
    },
    {
        type: `header`,
        content: `The Incfile Registered Agent Service for Wisconsin LLCs`,
        size: 3,
        marginBottom: 24,
    },

    {
        type: `text`,
        content: `If you have an LLC that’s incorporated in Wisconsin and you need a WI Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Wisconsin business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `We are authorized to conduct business in Wisconsin and can legally act as your Registered Agent.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Here’s what the Infile Wisconsin Registered Agent service provides for your WI LLC:`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: ``,
            list: [
                `An always-available Wisconsin Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
                `A digital dashboard where you can access, store and retrieve any information we’ve received for your Wisconsin business`,
                `Email notification whenever we receive documents for your Wisconsin business`,
                `Automatic forwarding of all legal correspondence, documentation and information directly to you`,
            ],
        },
        marginBottom: 16,
        color: color.purple3,
    },
    {
        type: `button`,
        content: {
            text: `Order Incfile’s Wisconsin Registered Agent service`,
            url: `/manage-your-company/registered-agent/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `How to Appoint a Wisconsin Registered Agent for Your LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `You can appoint a Registered Agent when you first incorporate your Wisconsin LLC or at any point after that. Here’s how to go about it.`,
        marginBottom: 16,
    },
    {
        type: `accordion`,
        content: {
            items: [{
                    question: `Assign Your Wisconsin Registered Agent When You Form Your WI LLC`,
                    answer: `Your business needs to have a Wisconsin Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
                },
                {
                    question: `File Articles of Organization with the Wisconsin Department of Financial Institutions`,
                    answer: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the WI Department of Financial Institutions to formally create your business.`,
                },
                {
                    question: `Incorporate Through Incfile and Get a Free Wisconsin Registered Agent `,
                    answer: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Wisconsin Registered Agent service for the first year, and we’ll include details of your WI Registered Agent in the form that we file.`,
                },
            ],
        },
    },
    {
        type: `button`,
        content: {
            text: `Incorporate your business through Incfile`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=WI`,
        },
        theme: `primary48`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Change Your Wisconsin Registered Agent After Your LLC Is Formed`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `You can also change your WI Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Sign Up for Incfile’s Wisconsin Registered Agent Service and We’ll File the Change on Your Behalf`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `When you choose to use our WI Registered Agent service, we take care of all the form filling for you. We’ll collect important information about your business, complete Form 13 on your behalf and send it to the Wisconsin Department of Financial Institutions. We’ll let you know once we officially become your Registered Agent.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Choose a Registered Agent Service and File Form 13 - Registered Agent and/or Registered Office Change with the Wisconsin Department of Financial Institutions`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCORPORATE YOUR BUSINESS THROUGH INCFILE`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WI`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Change Your Wisconsin Registered Agent After Your LLC Is Formed`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `You can also change your WI Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Choose a Registered Agent Service and File With the Wisconsin Corporation Commission`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Once you’ve chosen a new Wisconsin Statutory Agent, you can complete form M002 - Statutory Agent Acceptance that’s available on the WI Corporation Commission website. Once you’ve filled it out, send it to the Corporation Commission so they can update your records.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Sign up for Incfile’s Wisconsin Registered Agent Service, and We’ll File the Change on Your Behalf`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `When you choose to use our WI Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form M002 on your behalf and send it to the Wisconsin Corporation Commission. We’ll let you know once we officially become your Statutory Agent. `,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `ORDER INCFILE'S WISCONSIN REGISTERED AGENT SERVICE`,
            url: `/manage-your-company/registered-agent/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin Registered Agent Search`,
        size: 3,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `In some situations, you might want to know the name of the Registered Agent that represents another Wisconsin LLC. If you do, you can search the business database of the Wisconsin Department of Financial Institutions, which will often provide details of a specific business’s Registered Agent.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `If the WI Registered Agent isn’t available from the searchable business registry, contact the Wisconsin Department of Financial Institutions to request the information.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Issues with Not Having a Wisconsin Registered Agent`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `What happens if you choose not to assign or provide details of a Registered Agent to the Wisconsin Department of Financial Institutions? `,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `There are several possible ramifications, including:`,
            list: [
                `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
                `Falling out of good standing with the Wisconsin Department of Financial Institutions: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
                `Losing your status as a Wisconsin LLC: A WI Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Wisconsin LLC may be dissolved.`,
            ],
        },
        marginBottom: 48,
        color: color.orange3,
    },
    {
        type: `header`,
        content: `You Can Appoint Yourself as Your Own Wisconsin Registered Agent`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If you have an address in Wisconsin, you can choose to be the Registered Agent for your LLC. `,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `We don’t recommend this approach as there can be some drawbacks:`,
            list: [
                `The WI Registered Agent must have a physical street address in Wisconsin. If you’re forming an LLC outside WI, you will need to use an in-state Registered Agent.`,
                `You always need to have someone on hand during business hours at the Wisconsin address to sign for important documents.`,
                `The WI Registered Agent’s name and address are part of the public record and available through the Wisconsin Department of Financial Institutions's website. If you prefer your name and address aren’t published, you might choose a Registered Agent service.`,
                `If you change your Wisconsin business address or move out of state, you need to file additional documentation with the WI Department of Financial Institutions for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
            ],
        },
        marginBottom: 48,
        color: color.yellow3,
    },
    {
        type: `header`,
        content: `FAQs About Wisconsin Registered Agents`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `accordion`,
        content: {
            items: [{
                    question: `Do I Need to Appoint an Wisconsin Registered Agent?`,
                    answer: `Yes. All WI LLCs are required to have a Registered Agent. This is mandated by the Wisconsin Department of Financial Institutions.`,
                },
                {
                    question: `When Can I Assign a Wisconsin Registered Agent Service?`,
                    answer: `You can either do it when you incorporate your Wisconsin business through paperwork filed with the WI Department of Financial Institutions or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
                },
                {
                    question: `Can I Be My Own Registered Agent in Wisconsin?`,
                    answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Wisconsin Department of Financial Institutions.`,
                },
                {
                    question: `Does My WI Registered Agent Need to Have an Address in Wisconsin?`,
                    answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
                },
            ],
        },
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Useful Resources for Wisconsin Registered Agent Services`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `list-dot`,
        content: {
            header: `You might find these resources helpful:`,
            list: [
                `<a href="/research-topics/registered-agent/registered-agent-function">The Main Functions of an Wisconsin Registered Agent</a>`,
                `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Wisconsin Registered Agent</a>`,
                `<a href="/research-topics/registered-agent/registered-agent-tasks/">What an Wisconsin Registered Agent Does</a>`,
            ],
        },
        marginBottom: 48,
        color: color.blue2,
    },
];

export const feesAndRequirments = [{
        type: `header`,
        content: `Forms, Fees and License Requirements for Your Wisconsin LLC`,
        size: 2,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Depending on the specifics of your Wisconsin business, you’ll be required to obtain certain business licenses, pay fees and fulfill different filing requirements. Some of these costs are payable to the Wisconsin Department of Financial Institutions, while others are due to the federal or Wisconsin government. We’ve summarized the most common requirements and fees here.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Note that Wisconsin business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Initial Filing Costs for Forming an LLC in Wisconsin`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `When you first incorporate your business in Wisconsin, you’ll need to file an LLC with the WI Department of Financial Institutions and pay a Wisconsin filing fee. Here are the current fees and filing times for Wisconsin:`,
        marginBottom: 16,
    },
    {
        type: `dynamic_ar_box`
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
        content: `When you form your WI LLC through Incfile, we automatically forward this fee to the Wisconsin Department of Financial Institutions when we file your incorporation paperwork. `,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Wisconsin</a>.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCORPORATE YOUR WISCONSIN LLC THROUGH INCFILE TODAY`,
            url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WI`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Getting an Employer Identification Number for Your WI LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Every Wisconsin LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `GET AN EIN FOR YOUR WISCONSIN LLC THROUGH INCFILE`,
            url: `/manage-your-company/tax-id-ein/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Foreign Qualification to Operate in a State Outside Wisconsin`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If you’re expanding your Wisconsin LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Wisconsin. Fees and requirements for a Foreign Qualification depends on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
        content: `Wisconsin LLC Annual Reports and Fees`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Most states need you to file an annual (or other periodic) report with their Department of Financial Institutions. When you file your WI LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Wisconsin:`,
        marginBottom: 32,
    },
    {
        type: `dynamic_filing_requirement`
    },
    {
        type: `text`,
        content: `<a href="/business-filing-deadlines/"> Learn about your ongoing Wisconsin LLC filing requirements </a> and business filing deadlines with our helpful Wisconsin filing lookup tool.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Incfile can also complete and file your Wisconsin Annual Report on your behalf.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN ANNUAL REPORT FILING SERVICE`,
            url: `/manage-your-company/annual-report/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin Business Licenses and Permits`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Your Wisconsin LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Wisconsin, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Permits and licenses vary based on:`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `Permits and licenses vary based on:`,
            list: [
                `The industry your Wisconsin LLC operates in (e.g., restaurants will need health permits)`,
                `The location of your Wisconsin LLC (state, county or city) (e.g., a license to conduct business from the city of Phoenix)`,
                `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
            ],
        },
        marginBottom: 16,
        color: color.green3,
    },
    {
        type: `text`,
        content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
            list: [`A complete report on all the licenses, permits and tax registrations your Wisconsin LLC will need`, `The application forms you will need to file with the Wisconsin, regional and federal licensing authorities`],
        },
        marginBottom: 16,
        color: color.yellow3,
    },
    {
        type: `text`,
        content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Wisconsin and local governments.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN BUSINESS LICENSE RESEARCH PACKAGE`,
            url: `/business-license-research-package/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `An Operating Agreement for Your Wisconsin LLC`,
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
        content: `An Operating Agreement is extremely useful for several reasons (<a href="research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Wisconsin business. You can choose to make changes to the template based on your unique requirements. `,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Ad Hoc Wisconsin Fees or Requirements for Your WI LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `There are several other fees or requirements that you may need to meet during the life of your Wisconsin LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `To Obtain a Fictitious/DBA Name for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If you want your WI business to trade under a different name, you can file a form with the Wisconsin Department of Financial Institutions. You will need to pay a Wisconsin filing fee. Incfile can file this form on your behalf.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN FICTITIOUS NAME SERVICE`,
            url: `/fictitious-business-or-trade-name/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `To Change the Wisconsin Registered Agent for Your WI LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Your Wisconsin LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new WI Registered Agent later. Incfile provides a complete Wisconsin Registered Agent service.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN REGISTERED AGENT SERVICE`,
            url: `/manage-your-company/registered-agent/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `To Reserve a Name for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If you don’t want to form your WI business right away, you can reserve a name with the Wisconsin Department of Financial Institutions. You will need to pay a small fee to do this.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `To Amend Certain Facts About Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Your business formation documents state certain facts about your Wisconsin business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Wisconsin Corporation Commission. You can do this yourself or have Incfile complete the filing on your behalf.`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `Areas you might want to file Wisconsin Articles of Amendment for include:`,
            list: [`Adding, removing or changing an Wisconsin LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Wisconsin LLC`],
        },
        marginBottom: 16,
        color: color.purple3,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN ARTICLES OF AMENDMENT SERVICE`,
            url: `/manage-your-company/amendment/`,
        },
        theme: `primary48`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `To Get a Certificate of Good Standing for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Some organizations will request that you prove your Wisconsin LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Wisconsin Corporation Commission. Incfile can obtain a certificate on your behalf.`,
        marginBottom: 16,
    },
    {
        type: `button`,
        content: {
            text: `INCFILE'S WISCONSIN CERTIFICATE OD GOOD STANDING SERVICE`,
            url: `/manage-your-company/certificate-of-good-standing/`,
        },
        theme: `primary48`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `The fees listed above detail all the charges that a standard WI LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. a`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Of course, your Wisconsin LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for WI LLCs.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `FAQs About Wisconsin LLC Fees`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `accordion`,
        content: {
            items: [{
                    question: `What Happens to the State Fees That I Am Charged When Forming My Wisconsin LLC?`,
                    answer: `We charge you for this fee at cost and then pay the fee to the Department of Financial Institutions on your behalf when forming your Wisconsin business.`,
                },
                {
                    question: `Do I Need to Pay an Annual Report Fee Every Year?`,
                    answer: `Yes. Most states, including Wisconsin, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/compliance> compilance page for your state</a>.`,
                },
                {
                    question: `Who Will I Need to Get Business Licenses and Permits From for My Wisconsin LLC?`,
                    answer: `It depends on various factors including:
                        <ul>
                            <li>The type of business you run</li>
                            <li>Where you are located</li>
                            <li>Governing organizations in your industry</li>
                            <li>Federal, state and local regulations</li>
                        </ul></br>
                        <p>That’s why our <a href="/business-license-research-package/">Business License Research Package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Wisconsin LLC needs to be compliant.</p>`,
                },
            ],
        },
        marginBottom: 48,
    },
];

export const businessTaxes = [{
        type: `header`,
        content: `The Business Taxes Your Wisconsin LLC Will Pay`,
        size: 2,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Business taxes are a fact of life, and your WI LLC will need to pay a variety of taxes to both the federal and Wisconsin governments. We’ll cover all the main taxes in Wisconsin, including self-employment, payroll, federal, Wisconsin state tax and Wisconsin sales tax.  `,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `How Your Wisconsin LLC Will Be Taxed`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `The profits of an Wisconsin LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Wisconsin LLC work as follows:`,
        marginBottom: 16,
    },
    {
        type: `numeric-list`,
        content: [{
                text: `Wisconsin LLC owners pay self-employment tax on business profits`,
            },
            {
                text: `Wisconsin LLC owners pay WI state tax on any profits, less state allowances or deductions`,
            },
            {
                text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
            },
            {
                text: `Some WI LLCs pay Wisconsin sales tax on products`,
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
        content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Wisconsin personal tax returns, and that’s where you will pay those taxes.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin Sales Tax and State Taxes`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `There are two main types of tax that you will pay to the Wisconsin Department of Revenue: Wisconsin state income tax and Wisconsin state sales tax.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin Business Tax Registration `,
        size: 3,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `You will first need to obtain a Wisconsin tax ID number to pay taxes to the Department of Revenue. You can do that by registering for<a href="https://www.revenue.wi.gov/Pages/Businesses/New-Business-home.aspx" target="_blank" rel="noopener noreferrer"> Wisconsin business tax</a>.`,
        marginBottom: 48,
    },

    {
        type: `header`,
        content: `Wisconsin Sales Taxes on LLC Sales`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the WI Department of Revenue. Wisconsin sales tax is collected at the point of purchase. Wisconsin sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Wisconsin sales tax on:`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Wisconsin business might provide`],
        },
        marginBottom: 16,
        color: color.green3,
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
        content: `Get details on the <a href="https://www.revenue.wi.gov/Pages/SalesAndUse/Home.aspx" target="_blank" rel="noopener noreferrer">Wisconsin sales tax here</a>.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Sales Tax Rates for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. `,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Wisconsin State Tax on Your LLC Earnings`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `As a Wisconsin business owner, you will need to pay WI state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Wisconsin income tax. You will be taxed at the standard rates for Wisconsin state taxes, and you will also get to apply regular allowances and deductions. Any salaried employees will also need to pay personal Wisconsin state taxes.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `Get details on the <a href="https://www.revenue.wi.gov/Pages/FAQS/pcs-taxrates.aspx" target="_blank" rel="noopener noreferrer">Wisconsin state tax rates here</a>.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Federal Self-Employment and Income Taxes for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `There are a couple different federal taxes that every LLC will need to pay, including Wisconsin LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
        marginBottom: 48,
    },

    {
        type: `header`,
        content: `Wisconsin LLC Federal Self-Employment Tax`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `All Wisconsin LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Wisconsin business. The current self-employment tax rate is 15.3 percent.`,
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
                `On profits of $50,000, you would pay self-employment tax of $7,650.`,
                `On profits of $100,000, you would pay self-employment tax of $15,300.`,
                `On profits of $140,000, you would pay self-employment tax of $21,420.`,
                `On profits of $160,000, you would pay self-employment tax of $24,480.`,
            ],
        },
        marginBottom: 16,
        color: color.purple3,
    },
    {
        type: `header`,
        content: `Pay Less Self-Employment Tax by Treating Your Wisconsin LLC as an S Corporation`,
        size: 3,
        marginBottom: 16,
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
        content: `Speak to your accountant for more information on reducing your Wisconsin LLC self-employment tax through an S Corporation tax election.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Wisconsin LLC Federal Income Tax`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `You must also pay regular federal income tax on any earnings you take out of your Wisconsin LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `You only pay federal income tax on your Wisconsin LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Employer and Employee Taxes for Your Wisconsin LLC`,
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
        content: `Employer Payroll Tax Withholding for Your Wisconsin LLC `,
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
        content: `Employer Federal and State Tax Withholding for Your Wisconsin LLC`,
        size: 4,
        marginBottom: 16,
    },
    {
        type: `text`,
        content: `You may also choose to withhold federal and Wisconsin state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
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
        content: `Regardless of whether you withhold federal and Wisconsin state income tax, your employees may need to file their own tax returns.`,
        marginBottom: 32,
    },
    {
        type: `header`,
        content: `Wisconsin LLC Employee Insurance and Other Requirements`,
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
        content: `Get more requirements from the <a href="https://dwd.wisconsin.gov/" target="_blank" rel="noopener noreferrer">Wisconsin Department of Workforce Development website</a>.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Other Taxes and Duties for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Depending on the industry you are in, your Wisconsin LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `Estimated Taxes for Your Wisconsin LLC`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `text`,
        content: `Most Wisconsin LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
        marginBottom: 16,
    },
    {
        type: `list-dot`,
        content: {
            header: `The most common types of estimated tax are:`,
            list: [`Federal income tax`, `Federal self-employment tax`, `Wisconsin state tax`],
        },
        marginBottom: 16,
        color: color.green3,
    },
    {
        type: `text`,
        content: `Most Wisconsin LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
        marginBottom: 48,
    },
    {
        type: `header`,
        content: `FAQs on Wisconsin LLC Business Taxes`,
        size: 3,
        marginBottom: 24,
    },
    {
        type: `accordion`,
        content: {
            items: [{
                    question: `Does Wisconsin Have Sales Tax?`,
                    answer: `Yes. Wisconsin does have a sales tax, which may vary among cities and counties.`,
                },
                {
                    question: `Does Wisconsin Have a State Tax?`,
                    answer: `Yes. Wisconsin does have a general state income tax. You can find more information above.`,
                },
                {
                    question: `Do I Need to Pay Estimated Taxes?`,
                    answer: `Yes. In most cases you must pay estimated taxes on your Wisconsin tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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

export const ongoingFilingRequirement = {
    header: `Fees and requirements in Wisconsin.`,
    rows: [
        {
            curve: `curveRight`,
            color: color.orange3,
            boxItems: {
                fields: [{
                    header: `Biennially`,
                    text: `Frequency`,
                    },
                    {
                        header: `$20`,
                        text: `Filing fee`,
                    },
                ]
            },
            content: [
                {
                    type: `header`,
                    size: 3,
                    marginBottom: 32,
                    text: `Annual Report`
                },
                {
                    type: `header`,
                    size: 4,
                    marginBottom: 16,
                    text: `Due Date`
                },
                {
                    type: `text`,
                    text: `Based on anniversary date`,
                },
                {
                    type: `header`,
                    size: 4,
                    marginBottom: 16,
                    text: `Domestic`
                },
                {
                    type: `text`,
                    text: `Jan 1 – Mar 31: Mar 31
                    Apr 1 – Jun 30: Jun 30
                    Jul 1 – Sep 30: Sep 30 
                    Oct 1 – Dec 31: Dec 31`,
                },
                {
                    type: `header`,
                    size: 4,
                    marginBottom: 16,
                    text: `Foreign`
                },
                {
                    type: `text`,
                    text: `During first calendar quarter of each year following calendar year in the LLC becomes registered.`,
                },
            ]
        },
    ]
};